import React, { useState } from "react";
import { Link } from "react-router-dom";
import resumePDF from "../../resume.pdf";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#FCFBF4] shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-[#f0b14c] font-extrabold text-2xl sm:text-4xl">
            Kordian M.
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#f0b14c] hover:text-[#f0b14c] focus:outline-none border-0 shadow-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex space-x-4 lg:space-x-8 items-center">
            {["About", "Experience", "Projects"].map((item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="text-[#f0b14c] font-medium text-base lg:text-lg hover:bg-[#f0b14c] hover:text-[#FCFBF4] px-3 lg:px-6 py-2 rounded-lg transition-all duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f0b14c] font-medium text-base lg:text-lg hover:bg-[#f0b14c] hover:text-[#FCFBF4] px-3 lg:px-6 py-2 rounded-lg transition-all duration-300"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden mt-4 pb-4`}
        >
          <ul className="flex flex-col space-y-2">
            {["About", "Experience", "Projects"].map((item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="block text-[#f0b14c] font-medium text-lg hover:bg-[#f0b14c] hover:text-[#FCFBF4] px-4 py-2 rounded-lg transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#f0b14c] font-medium text-lg hover:bg-[#f0b14c] hover:text-[#FCFBF4] px-4 py-2 rounded-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
