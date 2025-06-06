import React, { useState, useEffect } from 'react';
import { Menu, X, Blocks } from 'lucide-react';
import { cn, scrollToSection } from '../lib/utils';
import { motion } from 'framer-motion';
import { navLinks } from '../data';

const Navbar: React.FC = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={cn(
        'fixed max-w-[1440px] w-full flex items-center py-5 top-0 z-20 transition-all duration-300',
        scrolled ? 'bg-primary/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full flex justify-between items-center container-padding mx-auto">
        <a 
          href="#"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <Blocks className="h-9 w-9 text-accent" />
          <p className="text-white text-[18px] font-medium cursor-pointer flex">
            theCodedCoder
          </p>
        </a>

        <ul className="list-none hidden lg:flex flex-row gap-8">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={cn(
                'nav-link text-[18px] font-medium cursor-pointer',
                active === nav.id ? 'nav-link-active' : ''
              )}
              onClick={() => {
                setActive(nav.id);
                scrollToSection(nav.id);
              }}
            >
              {nav.title}
            </li>
          ))}
        </ul>

        <div className="lg:hidden flex flex-1 justify-end items-center">
          <button
            className="w-[28px] h-[28px] object-contain flex items-center justify-center text-white"
            onClick={() => setToggle(!toggle)}
            aria-label={toggle ? 'Close menu' : 'Open menu'}
          >
            {toggle ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div
            className={cn(
              'p-6 bg-primary/90 backdrop-blur-md absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl transition-all duration-300 ease-in-out',
              toggle ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'
            )}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={cn(
                    'font-medium cursor-pointer text-[16px]',
                    active === nav.id ? 'text-white' : 'text-secondary'
                  )}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.id);
                    scrollToSection(nav.id);
                  }}
                >
                  {nav.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;