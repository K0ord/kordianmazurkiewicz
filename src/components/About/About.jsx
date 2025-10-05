import React from 'react';
import Footer from '../Footer';
import TechStack from '../TechStack/TechStack';

const headlinePillars = [
  'Full-stack product leadership',
  'High-performance engineering culture',
  'Relentless focus on developer experience'
];

const impactMetrics = [
  { value: '12+', label: 'Products launched end-to-end' },
  { value: '7 yrs', label: 'Engineering experience' },
  { value: '3x', label: 'Average efficiency gain for teams I mentor' }
];

const focusAreas = [
  {
    icon: '🚀',
    title: 'Product Acceleration',
    description:
      'From napkin sketch to production launch, I specialise in building scalable software systems that feel as refined as they perform.'
  },
  {
    icon: '🧠',
    title: 'Systems Thinking',
    description:
      'Comfortable navigating embedded constraints, distributed architectures, and AI-assisted workflows to unlock compounding advantages.'
  },
  {
    icon: '🤝',
    title: 'Human-Centred Leadership',
    description:
      'I nurture collaborative teams, mentor emerging engineers, and champion inclusive processes that keep innovation grounded.'
  }
];

const milestones = [
  {
    year: '2024',
    title: 'Technical Lead · Advanced R&D',
    description:
      'Guided cross-functional squads shipping AI-driven analytics platforms while modernising infrastructure with TypeScript-first tooling.'
  },
  {
    year: '2022',
    title: 'Senior Software Engineer · Platform',
    description:
      'Scaled mission-critical services supporting millions of requests per day, introduced observability pipelines, and reduced latency by 35%.'
  },
  {
    year: '2020',
    title: 'Embedded Systems Engineer',
    description:
      'Shipped firmware for safety-critical hardware, bridging the gap between low-level optimisation and intuitive developer APIs.'
  }
];

const principles = [
  {
    title: 'Think in loops, not lines',
    description: 'Every experiment informs the next iteration. I design adaptive systems that are easy to observe, learn from, and evolve.'
  },
  {
    title: 'Lead with clarity',
    description: 'Crystal-clear communication and strong documentation keep teams aligned, efficient, and confident to ship bold ideas.'
  },
  {
    title: 'Make technology feel inevitable',
    description: 'A polished product experience is never an afterthought—it is the strategy. I obsess over the moments that create trust.'
  }
];

const About = () => {
  return (
    <>
      <div className="min-h-screen pt-24 sm:pt-32 pb-16 text-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <section className="relative overflow-hidden rounded-3xl border border-custom-orange/30 bg-white/80 backdrop-blur shadow-[0_30px_60px_rgba(17,24,39,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-custom-orange/20 via-transparent to-custom-orange/5" aria-hidden="true" />
            <div className="relative z-10 p-8 sm:p-12 lg:p-16">
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="flex-1 space-y-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-custom-orange/40 bg-white/70 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-custom-orange shadow-sm">
                    Founder energy · Engineering precision
                  </div>
                  <div className="space-y-6">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                      Building thoughtful technology with the velocity of a venture-backed team.
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-700 max-w-3xl leading-relaxed">
                      I am Kordian Mazurkiewicz—software engineer, product strategist, and the entire innovation lab behind this so-called startup. I orchestrate human-centred digital experiences that feel premium, resilient, and unapologetically ambitious.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {headlinePillars.map((pillar) => (
                      <span
                        key={pillar}
                        className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600 shadow-sm"
                      >
                        {pillar}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <a
                      href="mailto:hello@kordian.dev"
                      className="inline-flex items-center justify-center rounded-full bg-custom-orange px-6 py-3 text-base font-semibold text-white shadow-lg shadow-custom-orange/40 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-custom-orange/30"
                    >
                      Let’s build something audacious
                    </a>
                    <a
                      href="#growth-journey"
                      className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-700 transition-colors duration-300 hover:border-custom-orange hover:text-custom-orange"
                    >
                      Explore the journey
                    </a>
                  </div>
                </div>
                <div className="w-full lg:w-80 xl:w-96">
                  <div className="relative h-full overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 text-white shadow-2xl">
                    <div className="absolute -top-32 -right-24 h-56 w-56 rounded-full bg-custom-orange/40 blur-3xl" aria-hidden="true" />
                    <div className="relative space-y-8">
                      <div className="space-y-3">
                        <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Founder's memo</p>
                        <h2 className="text-2xl font-semibold leading-tight">“Design for clarity, engineer for momentum, deliver with confidence.”</h2>
                      </div>
                      <div className="rounded-xl border border-white/20 bg-white/5 p-5 space-y-4">
                        <p className="text-sm text-gray-300">Currently architecting:</p>
                        <ul className="space-y-3 text-sm text-gray-200">
                          <li className="flex items-start gap-2"><span className="mt-1 text-lg">✳️</span>Developer-first platforms that blend AI copilots with deterministic workflows.</li>
                          <li className="flex items-start gap-2"><span className="mt-1 text-lg">✳️</span>Real-time observability layers for embedded and cloud-native ecosystems.</li>
                          <li className="flex items-start gap-2"><span className="mt-1 text-lg">✳️</span>Strategic mentorship programs elevating engineering excellence within startups.</li>
                        </ul>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-300">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg">KM</span>
                        <div>
                          <p className="font-semibold text-white">Kordian Mazurkiewicz</p>
                          <p className="text-xs tracking-wide text-gray-400">Founder · Principal Engineer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-6 sm:grid-cols-3">
            {impactMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-[0_15px_30px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_25px_40px_rgba(15,23,42,0.12)]"
              >
                <p className="text-3xl font-extrabold text-gray-900">{metric.value}</p>
                <p className="mt-2 text-sm font-medium uppercase tracking-wide text-gray-500">{metric.label}</p>
              </div>
            ))}
          </section>

          <section className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Strategic focus areas</h2>
              <p className="text-lg text-gray-600">I merge product intuition with engineering depth to ship experiences that feel inevitable. Here’s how I deliver breakout results for teams of any size:</p>
              <div className="grid gap-6 sm:grid-cols-2">
                {focusAreas.map((area) => (
                  <div key={area.title} className="rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{area.icon}</span>
                      <h3 className="text-xl font-semibold text-gray-900">{area.title}</h3>
                    </div>
                    <p className="mt-4 text-sm text-gray-600 leading-relaxed">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-custom-orange/20 bg-custom-beige/60 p-8 shadow-inner">
              <h3 className="text-2xl font-semibold text-gray-900">Operating principles</h3>
              <div className="mt-6 space-y-5">
                {principles.map((principle) => (
                  <div key={principle.title} className="rounded-2xl border border-white/60 bg-white/70 p-5 shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-widest text-custom-orange">{principle.title}</p>
                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">{principle.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            id="growth-journey"
            className="rounded-3xl border border-gray-200 bg-white/90 p-8 sm:p-10 shadow-[0_20px_45px_rgba(15,23,42,0.1)]"
          >
            <div className="flex flex-col lg:flex-row gap-10 lg:items-start">
              <div className="lg:w-1/3 space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">Growth journey</h2>
                <p className="text-sm uppercase tracking-[0.3em] text-gray-500">A highlight reel of building, scaling, and leading</p>
              </div>
              <div className="lg:w-2/3 space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="relative pl-10">
                    {index !== milestones.length - 1 && (
                      <span className="absolute left-4 top-8 h-full w-px bg-gradient-to-b from-custom-orange/60 via-custom-orange/20 to-transparent" aria-hidden="true" />
                    )}
                    <div className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-custom-orange bg-white text-sm font-semibold text-custom-orange">
                      {milestone.year}
                    </div>
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                      <p className="mt-3 text-sm text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden rounded-3xl border border-custom-orange/30 bg-gray-900 text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,146,60,0.45),_transparent_55%)]" aria-hidden="true" />
            <div className="relative z-10 p-10 sm:p-14 text-center space-y-6">
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">Collaboration invitation</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">Ready to turn ambitious ideas into tangible products?</h2>
              <p className="mx-auto max-w-3xl text-base sm:text-lg text-white/80">Whether you need a fractional CTO, an embedded engineer who ships business outcomes, or a partner to reimagine your developer platform—I’m the one-person startup you’ll want in your corner.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <a
                  href="mailto:hello@kordian.dev"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-gray-900 transition-transform duration-300 hover:-translate-y-1"
                >
                  Schedule a strategy session
                </a>
                <a
                  href="https://www.linkedin.com/in/kordianmazurkiewicz"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/50 px-6 py-3 text-base font-semibold text-white/80 transition hover:border-white hover:text-white"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </section>

          <TechStack />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
