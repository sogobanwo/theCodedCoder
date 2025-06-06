import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const navHeight = 80; // Approximate height of the navbar
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({ top: sectionTop, behavior: 'smooth' });
  }
};