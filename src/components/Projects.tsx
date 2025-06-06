import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github as GitHub, ExternalLink } from 'lucide-react';
import { projects } from '../data';

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.25 }}
      className="sm:min-w-[360px] w-full rounded-2xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full glass-effect">
        <div className="relative w-full h-[230px] overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-500"
            style={{
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="flex gap-4">
              <a
                href={project.source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex justify-center items-center bg-black/50 backdrop-blur-sm hover:bg-accent transition-colors"
              >
                <GitHub className="w-5 h-5" />
              </a>
              <a
                href={project.live_demo_link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex justify-center items-center bg-black/50 backdrop-blur-sm hover:bg-accent transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="p-8">
          <h3 className="text-xl font-bold mb-2">{project.name}</h3>
          <p className="text-secondary mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="text-xs font-medium px-3 py-1 rounded-full bg-black-100 text-accent"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding container-padding mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <h2 className="section-title">
          Projects
          <span className="block h-1 w-24 bg-accent mt-2"></span>
        </h2>
        
        <p className="section-subtitle max-w-3xl">
          Explore my portfolio of Web3 and software development projects.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;