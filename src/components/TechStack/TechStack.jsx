import React from 'react';

// Import all available tech stack SVGs
import tsIcon from '../../assets/techStack/languages/ts.svg';
import jsIcon from '../../assets/techStack/languages/js.svg';
import pythonIcon from '../../assets/techStack/languages/python.svg';
import cIcon from '../../assets/techStack/languages/c.svg';
import cppIcon from '../../assets/techStack/languages/c++.svg';
import htmlIcon from '../../assets/techStack/languages/html.svg';
import cssIcon from '../../assets/techStack/languages/css.svg';
import assemblyIcon from '../../assets/techStack/languages/assembly.svg';
import verilogIcon from '../../assets/techStack/languages/verilog.svg';
import postgreIcon from '../../assets/techStack/languages/postgre.svg';

import reactIcon from '../../assets/techStack/frameworks/react.svg';
import nodeIcon from '../../assets/techStack/frameworks/node.svg';
import expressIcon from '../../assets/techStack/frameworks/express.svg';
import redisIcon from '../../assets/techStack/frameworks/redis.svg';
import jestIcon from '../../assets/techStack/frameworks/jest.svg';
import lambdaIcon from '../../assets/techStack/frameworks/lambda.svg';
import gitIcon from '../../assets/techStack/frameworks/git.svg';
import linuxIcon from '../../assets/techStack/frameworks/linux.svg';
import pytorchIcon from '../../assets/techStack/frameworks/pytorch.svg';
import reduxIcon from '../../assets/techStack/frameworks/redux.svg';

const TechStack = () => {
  const techIcons = [
    // Row 1
    { src: jsIcon, name: 'JavaScript' },
    { src: htmlIcon, name: 'HTML' },
    { src: nodeIcon, name: 'Node.js' },
    { src: pytorchIcon, name: 'PyTorch' },
    { src: linuxIcon, name: 'Linux' },
    // Row 2
    { src: tsIcon, name: 'TypeScript' },
    { src: cppIcon, name: 'C++' },
    { src: expressIcon, name: 'Express.js' },
    { src: redisIcon, name: 'Redis' },
    { src: jestIcon, name: 'Jest' },
    // Row 3
    { src: pythonIcon, name: 'Python' },
    { src: cssIcon, name: 'CSS' },
    { src: reduxIcon, name: 'Redux' },
    { src: lambdaIcon, name: 'AWS Lambda' },
    { src: assemblyIcon, name: 'Assembly' },
    // Row 4
    { src: cIcon, name: 'C' },
    { src: reactIcon, name: 'React' },
    { src: postgreIcon, name: 'PostgreSQL' },
    { src: verilogIcon, name: 'Verilog' },
    { src: gitIcon, name: 'Git' }
  ];

  return (
    <div className="mt-12 mb-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-custom-orange">My Tech Stack</h1>
      <div className="bg-custom-beige p-4 sm:p-6 rounded-lg mb-6 hover:shadow-lg transition-all duration-300 border border-custom-orange/20">
        <div className="grid grid-cols-5 gap-6">
          {techIcons.map((tech, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center p-4 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 mb-2 flex items-center justify-center">
                <img 
                  src={tech.src} 
                  alt={tech.name}
                  className="max-w-full max-h-full"
                />
              </div>
              <span className="text-gray-600 text-sm text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack; 