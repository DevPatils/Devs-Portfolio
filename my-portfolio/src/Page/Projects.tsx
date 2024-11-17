import React from 'react';
import { LampContainer } from '../Components/ui/lamp';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <>
      <LampContainer className="text-center flex flex-col">
        <div className="light mt-[-30%]">
        <motion.h1
          className="text-4xl lg:text-6xl font-extrabold text-white leading-tight tracking-wide"
          initial={{ opacity: 0, y: 20 }} // Starts off-screen with low opacity
          animate={{ opacity: 1, y: 0 }} // Animates to full opacity and position
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          My Projects in <br/> 
          <motion.span
            className="text-5xl lg:text-7xl text-white"
            initial={{ scale: 0.8 }} // Start slightly smaller
            animate={{ scale: 1 }}  // Animate to full scale
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Spotlight
          </motion.span>
        </motion.h1>
        </div>


        
      </LampContainer>
    </>
  );
};

export default Projects;
