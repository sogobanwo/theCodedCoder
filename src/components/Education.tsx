import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '../data';

const Education: React.FC = () => {
  return (
    <section id="education" className="section-padding container-padding mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <h2 className="section-title">
          Education
          <span className="block h-1 w-24 bg-accent mt-2"></span>
        </h2>
        
        <p className="section-subtitle max-w-3xl">
          My academic background and professional certifications.
        </p>
        
        <div className="space-y-8 max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="glass-effect p-8 flex gap-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>
              
              <div>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <div className="text-secondary">
                  <p className="font-medium text-accent">{edu.institution}</p>
                  <p>{edu.date}</p>
                  {edu.grade && <p>{edu.grade}</p>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;