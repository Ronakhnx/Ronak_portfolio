import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown, Download } from 'lucide-react';

const Hero = () => {
  const handleDownloadCV = () => {
    // Replace with your actual CV file URL
    const cvUrl = '/path-to-your-cv.pdf';
    window.open(cvUrl, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden section-gradient">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black animate-gradient" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <TypeAnimation
              sequence={[
                'Hi, I\'m Ronak Radadiya',
                1000,
                'I\'m a Full Stack Web Developer',
                1000,
                'I Create Digital Experiences',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Crafting sleek and efficient digital experiences through modern web technologies
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="futuristic-button"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="futuristic-button flex items-center space-x-2"
              onClick={handleDownloadCV}
            >
              <Download size={20} />
              <span>Download CV</span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown size={32} className="animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;