import React from 'react';
import { Blocks } from 'lucide-react';
import { personalInfo } from '../data';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container-padding mx-auto flex flex-col items-center">
        <div className="flex items-center gap-2 mb-6">
          <Blocks className="h-8 w-8 text-accent" />
          <p className="text-white text-xl font-medium">
            theCodedCoder
          </p>
        </div>
        
        <div className="flex gap-6 mb-8">
          {personalInfo.socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-black-100 flex items-center justify-center hover:bg-accent/20 transition-colors"
            >
              <social.icon className="w-5 h-5 text-accent" />
            </a>
          ))}
        </div>
        
        <div className="text-secondary text-sm">
          <p>© {new Date().getFullYear()} theCodedCoder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;