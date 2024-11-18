import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-black via-blue-900 to-black fixed w-[calc(100%-10cm)] z-50 top-4 left-[5cm] py-2 px-8 mx-auto shadow-lg rounded-full border-2 border-blue-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo or Brand Name */}
        <div className="text-2xl font-semibold text-white flex-shrink-0">
          <span className="text-blue-400">&lt;Dev/&gt;</span>
        </div>

        {/* Navbar Links */}
        <div className="hidden sm:flex space-x-8">
          <Link
            to="/home"
            className="text-white hover:text-blue-400 px-4 py-2 rounded-full text-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Home
          </Link>

          <Link
            to="/projects"
            className="text-white hover:text-blue-400 px-4 py-2 rounded-full text-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Projects
          </Link>
          <Link
            to="/achievements"
            className="text-white hover:text-blue-400 px-4 py-2 rounded-full text-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Achievements
          </Link>
          <Link
            to="/resume"
            className="text-white hover:text-blue-400 px-4 py-2 rounded-full text-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
