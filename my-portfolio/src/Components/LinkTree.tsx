import React from "react";

interface LinkTreeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LinkTreeModal: React.FC<LinkTreeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 text-white p-8 rounded-2xl w-96 md:w-1/3 shadow-lg transform transition-all duration-300 ease-in-out scale-95 hover:scale-100">
        <h2 className="text-3xl font-semibold text-center text-gradient bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-500 mb-6">
          Contact Links
        </h2>
        <div className="space-y-6">
          {/* Social Links */}
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-lg text-blue-500 hover:text-blue-400 transition-colors duration-300 text-center rounded-md py-2 px-4 hover:bg-blue-800 hover:ring-2 hover:ring-blue-500"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-lg text-gray-300 hover:text-gray-200 transition-colors duration-300 text-center rounded-md py-2 px-4 hover:bg-gray-800 hover:ring-2 hover:ring-gray-600"
          >
            GitHub
          </a>
          <a
            href="mailto:your-email@example.com"
            className="block text-lg text-green-500 hover:text-green-400 transition-colors duration-300 text-center rounded-md py-2 px-4 hover:bg-green-800 hover:ring-2 hover:ring-green-500"
          >
            Email Me
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-lg text-blue-400 hover:text-blue-300 transition-colors duration-300 text-center rounded-md py-2 px-4 hover:bg-blue-700 hover:ring-2 hover:ring-blue-400"
          >
            Twitter
          </a>
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={onClose}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-110 shadow-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkTreeModal;
