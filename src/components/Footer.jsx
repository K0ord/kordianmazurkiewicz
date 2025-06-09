import React from 'react';
import githubIcon from '../assets/functional/github.svg';
import linkedinIcon from '../assets/functional/linkedin.svg';

const Footer = () => {
  return (
    <footer className="w-full h-14 md:h-20 bg-custom-beige border-t border-custom-orange/20">
      <div className="container mx-auto h-full flex flex-col items-center justify-end pb-0.2 md:pb-1">
        <p className="text-custom-orange/80 text-xs sm:text-sm md:text-base font-medium mb-0.5 md:mb-1">
          © 2025 Kordian Mazurkiewicz. All rights reserved.
        </p>
        <div className="flex items-center gap-2 md:gap-4">
          <a
            href="https://github.com/K0ord"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-custom-orange transition-colors"
            aria-label="GitHub Profile"
          >
            <img src={githubIcon} alt="GitHub" className="w-4 h-4 md:w-6 md:h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/kordian-mazurkiewicz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-custom-orange transition-colors"
            aria-label="LinkedIn Profile"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-4 h-4 md:w-6 md:h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 