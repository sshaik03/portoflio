import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Founder',
      company: 'Flavorly – Smart Meal Planning App',
      period: 'April 2025 - Present',
      logo: '/logos/flavorly.png',
      websiteLink: 'https://sshaik03.github.io/Flavorly/',
      description: [
        'Designing a cross-platform AI-powered mobile app for Gen Z users that generates personalized recipes based on pantry scans (via TensorFlow.js image recognition), dietary needs, and cooking skill level — reducing manual ingredient entry by up to 70% and helping cut food waste by 25–30% through optimized usage of on-hand items.',
        'Implementing a smart grocery list system that checks against pantry inventory and fetches real-time pricing from local APIs and scraping, enabling users to save an estimated 15–20% on shopping trips; building gamified features like streaks, post points, and leaderboards to drive habit formation and daily engagement.',
        'Architecting scalable backend infrastructure using Firebase Auth and Firestore, supporting social connections, recipe history, streak resets, and OpenAI-driven recipe rerolling (3x/day for free users, unlimited for premium) — laying the foundation for a $5–$8/month subscription model with personalized nutrition dashboards.'
      ]
    },
    {
      title: 'Product Manager',
      company: 'DuckCreek Technologies',
      period: 'February 2025 - May 2025',
      logo: '/logos/duckcreek.png',
      reportLink: '/DuckCreek.pdf',
      description: [
        'Led a team of 7 developers to build Notified, a full-stack insurance communication platform that centralized 3+ user roles and streamlined 100% of client-facing messaging into a single interface using React.js, Express.js, PostgreSQL, and Azure Cloud.',
        'Facilitated 10+ Agile sprints and weekly stand-ups, managing 25+ feature tasks through Jira and organizing Slack channels for subteam coordination; boosted delivery efficiency by 40% over the course of the project through structured planning and reduced idle time.',
        'Oversaw full-system integration across 3 subteams (frontend, backend, database), resolving 15+ merge conflicts and standardizing 20+ API routes and database fields to ensure functional alignment; coordinated Postman-based API testing and security validation for launch readiness.'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Iso New England',
      period: 'September 2024 - December 2024',
      logo: '/logos/isonewengland.png',
      reportLink: '/IsoNewEngland.pdf',
      description: [
        'Developed ALISSAA AI, a real-time chatbot for ISO New England that answers energy-related queries by retrieving information from 100+ indexed PDFs using GPT-3.5 Turbo, LangChain, and Azure Cognitive Search.',
        'Built a full-stack system with a FastAPI backend (WebSocket support) and React.js frontend, enabling secure, multi-user interactions with low-latency performance.',
        'Designed a golden dataset testing pipeline, improving response accuracy by 30%, while resolving Azure deployment and quota issues through strategic cloud optimizations.'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'Zebra Technologies',
      location: 'Dedham, MA',
      period: 'May 2024 - August 2024',
      description: [
        'Developed and implemented a custom AI-powered chatbot using GPT-Neo with a 95%+ accuracy rate, improving customer support efficiency.',
        'Designed and executed a full-stack architecture integrating FastAPI, WebSocket, and React, reducing response latency and ensuring real-time communication.',
        'Built an automated fine-tuning pipeline that processed CSV files in Q&A format, triggering a Python-based workflow with Hugging Face Transformers, Tokenizers, and Datasets libraries to fine-tune the model on company-specific knowledge; reduced manual training effort and model update time by 70%.'
      ]
    },
    {
      title: 'Software Engineering Intern - Java & Cloud Systems',
      company: 'ID Science',
      location: 'Medway, MA',
      period: 'June 2022 - August 2022',
      logo: '/logos/idscience.png',
      description: [
        'Performed comprehensive testing on 500+ driver\'s licenses using state-of-the-art ID Science scanners, leveraging advanced algorithms to detect counterfeit artifacts with 98% accuracy.',
        'Developed Java-based extraction algorithms, enhancing scanner accuracy in distinguishing between genuine and fraudulent IDs.',
        'Implemented secure, cloud-based encrypted storage for 10,000+ scanned IDs using AES encryption protocols and cloud SDKs, ensuring full compliance with data protection standards.'
      ]
    }
  ];

  return (
    <div className="py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-dark font-heading">
        Work Experience
      </h2>
      <div className="space-y-6 md:space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="glass-card rounded-lg p-4 sm:p-6 hover:bg-gray-800/70 transition-all"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div className="flex items-center">
                {exp.logo && (
                  <div className="mr-4 flex-shrink-0">
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`} 
                      className="h-12 w-12 object-contain rounded-md bg-white/10 p-1"
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-accent font-heading">{exp.title}</h3>
                  <div className="flex items-center">
                    <p className="text-lg md:text-xl font-medium">{exp.company}</p>
                    <div className="flex ml-2 space-x-2">
                      {exp.websiteLink && (
                        <a 
                          href={exp.websiteLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-accent transition-all"
                          title="Visit Website"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                          </svg>
                        </a>
                      )}
                      {exp.reportLink && (
                        <a 
                          href={exp.reportLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-accent transition-all"
                          title="View Report"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                  {exp.location && <p className="text-gray-400">{exp.location}</p>}
                </div>
              </div>
              <p className="text-gray-300 font-medium mt-2 md:mt-0 md:text-right">{exp.period}</p>
            </div>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              {exp.description.map((item, i) => (
                <li key={i} className="text-sm md:text-base text-gray-300">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;