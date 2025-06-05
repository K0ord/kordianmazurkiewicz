import React from 'react';

const Card = ({ title, subtitle, date, points }) => {
  return (
    <div className="bg-custom-beige p-6 rounded-lg mb-6 hover:shadow-lg transition-all duration-300 border border-custom-orange/20">
      <div className="flex justify-between items-start mb-4">
        <div className="text-left">
          <h3 className="text-xl font-semibold text-custom-orange">{title}</h3>
          <h4 className="text-lg text-gray-700">{subtitle}</h4>
        </div>
        <span className="text-gray-600 text-sm">{date}</span>
      </div>
      <ul className="list-disc list-outside text-gray-700 space-y-2 ml-4">
        {points.map((point, index) => (
          <li key={index} className="text-sm leading-relaxed text-left">
            <span className="pl-2">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Software Engineering Co-op",
      subtitle: "Relay Financial",
      date: "Jan 2025 – April 2025",
      points: [
        "Collaborated on a large-scale TypeScript-based full-stack application using React, Sequelize, PostgreSQL, and AWS Lambda with SQS/SNS for asynchronous messaging/notifying.",
        "Designed and implemented an AWS Lambda function triggered by SQS and SNS to orchestrate data flows across the stack, supporting KYC/KYB fraud detection and User states with reliability and scalability.",
        "Developed RESTful API endpoints and connected a Sequelize-powered backend to the React frontend, managing complex Redux state for user entitlements, context, and high-volume data handling.",
        "Integrated Segment to route data-driven events to multiple analytics and engagement platforms, enabling real-time behavioral tracking and event-based workflows."
      ]
    },
    {
      title: "Software Engineering Assistant",
      subtitle: "Unified Engineering",
      date: "June 2023 – Aug 2023",
      points: [
        "Lead the development of a CRUD webapp using ReactJS, NodeJS and MySql, utilizing Typescript.",
        "Developed a full stack app that allowed users to input categories, metrics, data and units to graph their desired needs, as well as arithmetic between added materials for industrial engineering projects.",
        "Created a decision tree traversed based on their selected, computed and graphed choices of materials and purpose."
      ]
    },
    {
      title: "Software/Electrical Engineering Intern",
      subtitle: "Magna Int.",
      date: "Aug 2022 – Dec 2022",
      points: [
        "R&D for automotive vehicles, utilizing python, C++ and electrical engineering practices such as Altium Designer, analysis/synthesis and soldering for prototyping.",
        "Developed vision systems using python, electrical management PCB systems using Altium designer as well as worked with several types of innovative sensors, circuit analysis and digital/analog communication signals.",
        "Retrofit vehicles adding developed prototypes."
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-16 px-4 md:px-8 bg-custom-beige text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-custom-orange">Professional Experience</h1>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              title={exp.title} 
              subtitle={exp.subtitle} 
              date={exp.date} 
              points={exp.points}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
