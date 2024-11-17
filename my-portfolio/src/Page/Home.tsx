import React from 'react';
import hero from '../assets/Hero.png'; // Assuming the image is in the "assets" folder
import { LampContainer } from '../Components/ui/lamp';



const Home = () => {
  return (
    <>
   
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left side - Image */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <img
            src={hero} // Using the imported hero image
            alt="Your Name"
            className=" md:w-128 md:h-128 rounded-full mx-auto md:mx-0 shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>

        {/* Right side - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">
            Hello <span className='text-blue-500'>Dev</span> here !
          </h1>
          <p className="text-lg md:text-xl mb-6">
          I’m a full-stack developer, Web3 enthusiast, and hackathon fanatic who loves building innovative projects and exploring new challenges. Know more about me and my work.
          </p>
          <div className="space-x-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              View Projects
            </button>
            <button
              className="bg-transparent border-2 border-blue-500 hover:bg-blue-500 hover:text-white py-3 px-6 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 text-white text-sm">
        <p>Designed and developed with ❤️</p>
      </div>
    </div>
  
    </>
  );
};

export default Home;
