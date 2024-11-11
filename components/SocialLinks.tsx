import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const SocialLinks: React.FC = () => {
  return (
    <div className="flex items-center space-x-6 bg-gray-900 p-4 rounded-lg shadow-lg border border-gray-700 transition duration-300 ease-in-out hover:bg-gray-800">
      <div className="flex flex-col items-center">
        <a
          href="https://www.linkedin.com/in/adityapshinde/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-gray-300 transition duration-300 transform hover:scale-110"
        >
          <FaLinkedin className="h-8 w-8 mb-1" />
        </a>
        <span className="text-white text-xs">LinkedIn</span>
      </div>

      <div className="flex flex-col items-center">
        <a
          href="https://github.com/Adi-Shinde/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-200 hover:text-gray-400 transition duration-300 transform hover:scale-110"
        >
          <FaGithub className="h-8 w-8 mb-1" />
        </a>
        <span className="text-white text-xs">GitHub</span>
      </div>

      <div className="flex flex-col items-center">
        <a
          href="https://instagram.com/adiii._.004"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 hover:text-gray-300 transition duration-300 transform hover:scale-110"
        >
          <FaInstagram className="h-8 w-8 mb-1" />
        </a>
        <span className="text-white text-xs">Instagram</span>
      </div>

      <span className="text-white text-lg font-semibold">Aditya Shinde</span>
    </div>
  );
};

export default SocialLinks;
