import React from 'react';
import githubIcon from '../assets/functional/github.svg';
import linkedinIcon from '../assets/functional/linkedin.svg';

const Footer = () => {
  return (
    <footer className="w-full h-8 md:h-12 bg-custom-beige border-t border-custom-orange/20">
      <div className="container mx-auto h-full flex flex-col items-center justify-center mt-4 md:mt-2 gap-1 md:gap-[2px]">
        <p className="text-custom-orange/80 text-xs md:text-sm font-medium leading-none">
          © 2025 Kordian Mazurkiewicz. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/K0ord"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-custom-orange transition-colors"
            aria-label="GitHub Profile"
          >
            <img src={githubIcon} alt="GitHub" className="w-4 h-4 md:w-5 md:h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/kordian-mazurkiewicz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-custom-orange transition-colors"
            aria-label="LinkedIn Profile"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-4 h-4 md:w-5 md:h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 