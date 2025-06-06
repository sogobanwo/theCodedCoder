import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { scrollToSection } from '../lib/utils';
import { personalInfo } from '../data';

const Hero: React.FC = () => {
  const handleDownload = () => {
    const pdfUrl = "/theCodedCoder's Resume.pdf"; // Replace with your PDF path or URL
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "theCodedCoder_resume.pdf"; // Custom filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="relative w-full min-h-screen mx-auto flex items-center mt-20 xs:mt-0">
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute inset-0 bg-background bg-opacity-80"></div>
        <div className="absolute inset-0 bg-radial-gradient"></div>
      </div>
      
      <div className="container-padding mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-10">
        <motion.div 
          className="flex-1 flex flex-col justify-center items-center lg:items-start max-w-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col justify-center items-center lg:items-start">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center lg:text-left">
              <span className="block">I'm theCodedCoder</span>
              <span className="gradient-text">Building the Future of Web3</span>
            </h1>
            
            <p className="text-secondary text-center lg:text-left text-lg md:text-xl max-w-md mb-8">
              Innovative Software Developer and Developer Advocate specializing in decentralized applications and blockchain solutions.
            </p>
            
            <div className="flex flex-wrap items-center justify-center mb-6 md:mb-0 gap-5">
              <button 
                onClick={() => scrollToSection('projects')}
                className="btn btn-primary"
              >
                View My Work
              </button>
              
              <button className="btn btn-outline" onClick={handleDownload}>
                <Download size={20} />
                Download CV
              </button>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex-1 flex justify-center items-center max-w-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative w-full aspect-square max-w-sm">
            <div className="absolute inset-0 rounded-2xl bg-accent/20 blur-3xl animate-pulse-slow"></div>
            <div className="relative h-full rounded-2xl overflow-hidden gradient-border p-1">
              <img 
                src={personalInfo.image} 
                alt={personalInfo.name} 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute hidden lg:bottom-20 w-full lg:flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;