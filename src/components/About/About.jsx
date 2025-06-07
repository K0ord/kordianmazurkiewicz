import React from 'react';
import Footer from '../Footer';
import TechStack from '../TechStack/TechStack';

const About = () => {
  return (
    <>
      <div className="min-h-screen pt-20 sm:pt-32 pb-8 sm:pb-16 text-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-custom-orange">About Me</h1>
          <div className="bg-custom-beige p-4 sm:p-6 rounded-lg mb-6 hover:shadow-lg transition-all duration-300 border border-custom-orange/20">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Welcome to my portfolio! I'm a passionate software engineer with experience in full-stack development, embedded systems, and innovative technologies. I love tackling complex problems and creating solutions that make a difference.
            </p>
          </div>
          
          {/* Tech Stack Section */}
          <TechStack />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
