import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding container-padding mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <h2 className="section-title">
          About Me
          <span className="block h-1 w-24 bg-accent mt-2"></span>
        </h2>
        
        <p className="section-subtitle max-w-3xl">
          Get to know more about my background, skills, and passion for Web3 development.
        </p>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 glass-effect p-8">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">Overview</h3>
            <p className="text-secondary leading-relaxed mb-6">
              {personalInfo.summary}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-secondary">
              <div className="flex flex-col gap-1">
                <span className="text-white font-medium">Name:</span>
                <span>{personalInfo.name}</span>
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="text-white font-medium">Email:</span>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-accent transition-colors">
                  {personalInfo.email}
                </a>
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="text-white font-medium">Phone:</span>
                <a href={`tel:${personalInfo.phone}`} className="hover:text-accent transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="text-white font-medium">Location:</span>
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col gap-8">
            <div className="glass-effect p-8">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">My Approach</h3>
              <p className="text-secondary leading-relaxed">
                I approach Web3 development with a focus on creating secure, decentralized applications that provide real value to users. My experience spans both the technical implementation of blockchain solutions and advocating for wider adoption through education and community engagement.
              </p>
            </div>
            
            <div className="glass-effect p-8">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">Web3 Philosophy</h3>
              <p className="text-secondary leading-relaxed">
                I believe in the transformative power of blockchain technology to create more transparent, equitable systems. My goal is to bridge the gap between complex blockchain concepts and practical applications, making Web3 technologies accessible to developers and users alike.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;