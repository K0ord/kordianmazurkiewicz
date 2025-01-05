import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-[#FCFBF4] shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center py-4 px-6">
        {/* Logo */}
        <div className="text-[#f0b14c] font-extrabold text-4xl mb-4">
          Kordian M.
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 justify-center items-center">
          {["Home", "About", "Experience"].map((item, index) => (
            <li key={index}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="text-[#f0b14c] font-medium text-lg hover:bg-[#f0b14c] hover:text-[#FCFBF4] px-6 py-2 rounded-lg transition-all duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
