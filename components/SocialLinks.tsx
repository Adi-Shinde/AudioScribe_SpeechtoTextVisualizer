import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // Make sure to install react-icons package

const Header: React.FC = () => {
  return (
    <div className="fixed top-4 right-4 hidden md:flex items-center space-x-5 bg-gray-800 p-4 rounded-lg shadow-lg">
      {/* LinkedIn Icon */}
      <a
        href="https://www.linkedin.com/in/adityapshinde/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-500"
      >
        <FaLinkedin className="h-8 w-8" /> {/* Larger icon size */}
      </a>

      {/* GitHub Icon */}
      <a
        href="https://github.com/Adi-Shinde/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400"
      >
        <FaGithub className="h-8 w-8" /> {/* Larger icon size */}
      </a>

      {/* Instagram Icon */}
      <a
        href="https://instagram.com/adiii._.004"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-pink-500"
      >
        <FaInstagram className="h-8 w-8" /> {/* Larger icon size */}
      </a>

      {/* User Name */}
      <span className="text-white text-lg font-medium ml-3">Aditya Shinde</span> {/* Larger font size */}
    </div>
  );
};

export default Header;
