import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data';
import { Briefcase } from 'lucide-react';

const ExperienceCard: React.FC<(typeof experiences)[0]> = ({ title, company, date, location, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.1 }}
      className="glass-effect p-8 hover:shadow-card transition-all duration-300"
    >
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center mb-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
          <Briefcase className="w-6 h-6 text-accent" />
        </div>
        
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-secondary">
            <span className="font-medium text-accent">{company}</span>
            <span className="hidden sm:block text-xs">•</span>
            <span>{location}</span>
            <span className="hidden sm:block text-xs">•</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
      
      <ul className="space-y-2 ml-4">
        {description.map((item, index) => (
          <li key={index} className="text-secondary relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[10px] before:h-2 before:w-2 before:bg-accent before:rounded-full">
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding container-padding mx-auto">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <h2 className="section-title">
          Work Experience
          <span className="block h-1 w-24 bg-accent mt-2"></span>
        </h2>
        
        <p className="section-subtitle max-w-3xl">
          My professional journey across Web3 development, advocacy, and software engineering.
        </p>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;