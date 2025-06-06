import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';

const fadeInAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-padding container-padding mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <h2 className="section-title">
          Skills
          <span className="block h-1 w-24 bg-accent mt-2"></span>
        </h2>
        
        <p className="section-subtitle max-w-3xl">
          My technical toolkit spanning Web3 technologies, programming languages, and development tools.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="glass-effect p-8"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInAnimation}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <skill.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="text-sm font-medium px-4 py-2 rounded-full bg-black-100 text-white hover:bg-accent/20 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;