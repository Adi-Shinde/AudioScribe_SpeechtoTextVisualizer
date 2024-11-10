import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";
import { writeFile } from "fs/promises";
import { unlink } from "fs/promises";
import path from "path";
import os from "os";

export async function POST(request: NextRequest) {
  let tempFilePath: string | null = null;

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { error: { message: "No file provided" } },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // Create temp file path using os.tmpdir()
    const tempDir = os.tmpdir();
    // Generate a unique filename to avoid collision
    const uniqueFilename = `upload-${Date.now()}-${Math.random()
      .toString(36)
      .substring(7)}${path.extname(file.name)}`;
    tempFilePath = path.join(tempDir, uniqueFilename);

    // Write the buffer to temp file
    await writeFile(tempFilePath, buffer);

    // Initialize the Groq client with the API key
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,  // This should be correct if the environment variable is loaded properly
    });

    const transcription = await groq.audio.transcriptions.create({
      file: require("fs").createReadStream(tempFilePath), // Fixed syntax here
      model: "whisper-large-v3",
      response_format: "json",
      language: "en",
      temperature: 0.0,
    });

    // Cleanup: delete temp file
    if (tempFilePath) {
      await unlink(tempFilePath);
    }

    return NextResponse.json(transcription); // Return the transcription result
  } catch (error) {
    console.error("Transcription Error:", error);

    // Cleanup: make sure to delete temp file even if there is an error
    if (tempFilePath) {
      try {
        await unlink(tempFilePath);
      } catch (cleanupError) {
        console.error("Error Cleaning up temporary file:", cleanupError);
      }
    }

    return NextResponse.json(
      {
        error: {
          message:
            error instanceof Error
              ? error.message
              : "Failed to transcribe audio",
        },
      },
      { status: 500 }
    );
  }
}
