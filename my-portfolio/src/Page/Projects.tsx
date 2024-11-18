import React from "react";
import Navbar from "../Components/Navbar";
import cricktrade from "../assets/cricktrade.png"; 
import resource from "../assets/resource.png"; 
import churn from "../assets/churn.png"; 
import sentio from "../assets/sentio.png"; 

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: cricktrade, 
      title: "CrickTrade",
      description: "CrickTrade lets you buy and trade stocks of real cricket players, powered by the Aptos blockchain and APT coin. Experience secure, seamless transactions as your favorite players perform!",
      liveLink: "https://www.cricktrade.co",
      githubLink: "https://github.com/OctoTechHub/AptosArena",
    },
    {
      id: 2,
      image: resource,
      title: "Resource-io",
      description: "Resource-io provides students and solves an addressed issue with easy access to essential study materials, making academic resources more available and helping them succeed in their studies.",
      liveLink: "https://resource-io.vercel.app",
      githubLink: "https://github.com/haard18/resource-io",
    },
    {
      id: 3,
      image: churn,
      title: "Churn-o-Analyzer",
      description: "Churn-o-Analyzer uses decision trees to predict customer churn, helping businesses retain clients by identifying at-risk customers early. User can also feed custom data to get the prediction.",
      liveLink: "https://churn-frontend-rho.vercel.app",
      githubLink: "https://github.com/haard18/churn-frontend",
    },
    {
      id: 4,
      image: sentio,
      title: "Sentio",
      description: "Sentio tracks, audits, and certifies code on the AO hyper-parallel computer, ensuring security, transparency, and trust on the Arweave network and also checks the vulnerability of the code.",
      liveLink: "https://project-four.com",
      githubLink: "https://github.com/your-profile/project-four",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 min-h-screen p-6 md:p-10 text-white">
        {/* Spotlight Section */}
        <div className="relative text-center mb-8 mt-[-5%]">
          <h1 className="text-3xl mt-[10%] sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-500 animate-pulse">
            My Projects In Spotlight
          </h1>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-32 sm:w-48 h-1 bg-gradient-to-r from-indigo-400 to-teal-500 rounded-full mt-4"></div>
        </div>

        {/* Projects Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:bg-gray-700"
            >
              <img
                src={project.image} 
                alt={project.title}
                className="w-full h-40 sm:h-48 object-cover border-4 border-blue-600 rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gradient bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-500">
                  {project.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-110"
                  >
                    View Project
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent border-2 border-blue-600 hover:bg-blue-600 hover:text-white py-2 px-4 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-110"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
