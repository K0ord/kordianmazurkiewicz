import React from 'react';
import Footer from '../Footer';
import relayFinancialLogo from '../../assets/logos/relay-financial.svg';
import unifiedEngineeringLogo from '../../assets/logos/unified-engineering.svg';
import magnaInternationalLogo from '../../assets/logos/magna-international.svg';

const Card = ({ title, company, location, date, points, tech, logo, logoAlt }) => {
  return (
    <div className="relative pl-6 sm:pl-20">
      <div className="absolute left-2 sm:left-4 top-0 bottom-0 w-px hidden sm:block bg-gradient-to-b from-custom-orange/55 via-custom-orange/10 to-transparent" aria-hidden="true" />
      <div className="absolute left-1.5 sm:left-4 top-6 hidden sm:flex h-3 w-3 items-center justify-center">
        <span className="h-3 w-3 rounded-full bg-custom-orange shadow-[0_0_0_8px_rgba(240,177,76,0.2)]" aria-hidden="true" />
      </div>
      <div className="relative overflow-hidden rounded-3xl bg-white/90 p-6 shadow-xl ring-1 ring-black/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white p-3 shadow-[inset_0_1px_3px_rgba(15,23,42,0.08)] ring-1 ring-black/5">
              <img src={logo} alt={logoAlt} className="h-full w-full object-contain" loading="lazy" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">{title}</h3>
              <p className="text-base font-medium text-custom-orange sm:text-lg">{company}</p>
              <p className="text-sm text-gray-500 sm:text-base">{location}</p>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-custom-orange/20 bg-custom-beige px-4 py-2 text-xs font-semibold uppercase tracking-wide text-gray-600 shadow-sm sm:self-center">
            <svg className="h-4 w-4 text-custom-orange" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z" />
            </svg>
            {date}
          </div>
        </div>
        <ul className="mt-6 space-y-3 text-sm leading-relaxed text-gray-700 sm:text-base">
          {points.map((point, index) => (
            <li key={index} className="flex gap-3 text-left">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-custom-orange/80" aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        {tech && tech.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {tech.map((item, index) => (
              <span
                key={index}
                className="rounded-full border border-custom-orange/30 bg-white/80 px-3 py-1 text-xs font-semibold tracking-wide text-gray-600 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Software Engineering Co-op',
      company: 'Relay Financial',
      location: 'Toronto, ON',
      date: 'Jan 2025 – Apr 2025',
      logo: relayFinancialLogo,
      logoAlt: 'Relay Financial logo',
      points: [
        'Collaborated on a large-scale TypeScript-based full-stack application using React, Sequelize, PostgreSQL, and AWS Lambda with SQS/SNS for asynchronous messaging/notifying.',
        'Designed and implemented an AWS Lambda function triggered by SQS and SNS to orchestrate data flows across the stack, supporting KYC/KYB fraud detection and user states with reliability and scalability.',
        'Developed RESTful API endpoints and connected a Sequelize-powered backend to the React frontend, managing complex Redux state for user entitlements, context, and high-volume data handling.',
        'Integrated Segment to route data-driven events to multiple analytics and engagement platforms, enabling real-time behavioral tracking and event-based workflows.'
      ],
      tech: ['React', 'TypeScript', 'Sequelize', 'PostgreSQL', 'AWS Lambda', 'SQS & SNS']
    },
    {
      title: 'Software Engineering Assistant',
      company: 'Unified Engineering',
      location: 'Remote',
      date: 'Jun 2023 – Aug 2023',
      logo: unifiedEngineeringLogo,
      logoAlt: 'Unified Engineering logo',
      points: [
        'Led the development of a CRUD web app using React, Node.js, MySQL, and TypeScript to power industrial engineering planning.',
        'Built a data visualization experience that let stakeholders input categories, metrics, and units to dynamically graph engineering outcomes.',
        'Created a material decision engine that translated user selections into guided recommendations via a domain-specific decision tree.'
      ],
      tech: ['React', 'TypeScript', 'Node.js', 'MySQL', 'Data Visualization']
    },
    {
      title: 'Software/Electrical Engineering Intern',
      company: 'Magna International',
      location: 'Newmarket, ON',
      date: 'Aug 2022 – Dec 2022',
      logo: magnaInternationalLogo,
      logoAlt: 'Magna International logo',
      points: [
        'Researched and prototyped automotive innovations leveraging Python, C++, and electrical engineering best practices including Altium Designer workflows.',
        'Developed vision systems, electrical management PCBs, and sensor integrations spanning analog and digital communication protocols.',
        'Retrofit vehicles with proof-of-concept hardware while contributing to validation, testing, and iterative product refinement.'
      ],
      tech: ['Python', 'C++', 'Altium Designer', 'Computer Vision', 'Embedded Systems']
    }
  ];

  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-custom-beige via-white to-orange-50 pt-20 sm:pt-28 pb-10 text-gray-800">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-custom-orange/15 to-transparent" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-custom-orange/30 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-custom-orange shadow-sm">Experience</span>
            <h1 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">Professional Experience</h1>
            <p className="mt-4 text-base text-gray-600 sm:text-lg">
              A snapshot of the teams, technologies, and challenges that shaped how I solve complex engineering problems with delightful digital products.
            </p>
          </div>
          <div className="relative mt-12 space-y-10 sm:space-y-12">
            <div className="absolute left-[1rem] top-0 bottom-0 hidden w-px bg-gradient-to-b from-custom-orange/30 via-custom-orange/10 to-transparent sm:block" aria-hidden="true" />
            {experiences.map((exp, index) => (
              <Card key={index} {...exp} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Experience;
