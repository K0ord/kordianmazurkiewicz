import React from 'react';
import Footer from '../Footer';

const Card = ({ title, subtitle, points }) => {
  return (
    <div className="bg-custom-beige p-4 sm:p-6 rounded-lg mb-6 hover:shadow-lg transition-all duration-300 border border-custom-orange/20">
      <div className="flex flex-col mb-4">
        <div className="text-left">
          <h3 className="text-lg sm:text-xl font-semibold text-custom-orange">{title}</h3>
          <h4 className="text-base sm:text-lg text-gray-700">{subtitle}</h4>
        </div>
      </div>
      <ul className="list-disc list-outside text-gray-700 space-y-2 ml-4">
        {points.map((point, index) => (
          <li key={index} className="text-sm sm:text-base leading-relaxed text-left">
            <span className="pl-2">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "RTX/RTOS for STM32 Microcontroller",
      subtitle: "ECE 350 - Real-Time Operating Systems",
      points: [
        "Developed an RTX in C in a team of four for the STM32F401 board that created the Kernel to manage multithreading, task execution and memory.",
        "Lead the design and development of a buddy system memory structure for the RTX as well as assisted in development for the scheduling and context switching of threads."
      ]
    },
    {
      title: "SecureStep",
      subtitle: "Hack The North 2024 Winner (MappedIn API/SDK Sponsor Prize)",
      points: [
        "Developed SecureStep, a smart assistive cane with fall detection and real-time Google maps api driven geolocation, integrated with Mappedin SDK for multilevel indoor mapping and AI-based caregiver navigation.",
        "Led development for a socket-based server on the cane (C) streaming live JSON data over a local network to a JavaScript/React dashboard, displaying sensor status, coordinates, and emergency routes for caregivers."
      ]
    },
    {
      title: "Home Security System",
      subtitle: "Smart Doorbell, Smart Lock, App",
      points: [
        "Smart touchscreen doorbell: Ran on the Linux operating system, communicated through SSH using Parimiko to the door-lock. Contained Open CV and YOLO for facial recognition using python.",
        "Smart Lock: Ran idle until communicated through SSH to open or close for a deadbolt lock",
        "App: Created off android studio, displayed a live feed off the smart doorbell."
      ]
    }
  ];

  return (
    <>
      <div className="min-h-screen pt-20 sm:pt-32 pb-8 sm:pb-16 text-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-custom-orange">Notable Projects</h1>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                title={project.title} 
                subtitle={project.subtitle} 
                points={project.points}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects; 