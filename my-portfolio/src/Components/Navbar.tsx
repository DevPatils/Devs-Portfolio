import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-6xl z-50 px-4">
      <nav className="bg-gradient-to-r from-gray-800 via-blue-800 to-gray-800 text-white py-3 items-center backdrop-blur-xl rounded-none md:rounded-full">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo or Brand Name */}
            <div className="text-2xl font-semibold text-white flex-shrink-0">
              <span className="text-blue-400">&lt;Dev/&gt;</span>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-blue-400 focus:outline-none"
                aria-label="Toggle Menu"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-8">
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
                to="/achievement"
                className="text-white hover:text-blue-400 px-4 py-2 rounded-full text-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Achievements
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-2 bg-black/60 text-white rounded-lg border border-white/10 p-4 space-y-4">
              <Link
                to="/home"
                className="block text-left w-full text-white hover:text-blue-400 px-4 py-2 rounded-lg text-lg font-medium"
              >
                Home
              </Link>
              <Link
                to="/projects"
                className="block text-left w-full text-white hover:text-blue-400 px-4 py-2 rounded-lg text-lg font-medium"
              >
                Projects
              </Link>
              <Link
                to="/achievement"
                className="block text-left w-full text-white hover:text-blue-400 px-4 py-2 rounded-lg text-lg font-medium"
              >
                Achievements
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
