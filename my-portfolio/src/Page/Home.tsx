import  { useState } from "react";
import hero from "../assets/Hero.png"; // Assuming the image is in the "assets" folder

import Navbar from "../Components/Navbar";
import LinkTreeModal from "../Components/LinkTree"; // Importing the LinkTreeModal component


const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white flex items-center justify-center p-8">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">

          {/* Left side - Image */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <img
              src={hero} // Using the imported hero image
              alt="Your Name"
              className="md:w-96 md:h-96 w-64 h-64 rounded-full mx-auto md:mx-0 shadow-xl transform transition-all duration-300 ease-in-out hover:scale-110"
            />
          </div>

          {/* Right side - Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-500 animate-pulse">
              Hello <span className="text-blue-300">Dev</span> here!
            </h1>
            <p className="text-lg md:text-xl mb-6 leading-relaxed text-gray-300">
              I’m a full-stack developer, Web3 enthusiast, and hackathon fanatic who loves building innovative projects and exploring new challenges. Know more about me and my work.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-110 shadow-lg"
              >
                View Projects
              </button>
              <button
                onClick={openModal} // Open the modal on click
                className="bg-transparent border-2 border-blue-600 hover:bg-blue-600 hover:text-white py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-110 shadow-lg mt-[5%] sm:mt-0"
              >
                Contact Me
              </button>
            </div>

          </div>
        </div>



      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-sm text-center mt-[5%] sm:mt-0 hidden sm:block">
  <p>Designed and developed with ❤️</p>
</div>




      {/* Modal */}
      <LinkTreeModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Home;
