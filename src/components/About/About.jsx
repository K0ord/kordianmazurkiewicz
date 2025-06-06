import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-custom-orange">About Me</h1>
        <div className="bg-custom-beige p-6 rounded-lg mb-6 hover:shadow-lg transition-all duration-300 border border-custom-orange/20">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to my portfolio! I'm a passionate software engineer with experience in full-stack development, embedded systems, and innovative technologies. I love tackling complex problems and creating solutions that make a difference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
