import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Project REGIS (Renewable Energy Growth Investment Strategies)',
      technologies: ['Python', 'pandas', 'scikit-learn', 'KMeans', 'Matplotlib'],
      description: [
        'Analyzed a 20-year global dataset (200+ countries) to uncover key drivers of renewable energy adoption, using statistical testing (T-test, ANOVA, ANCOVA) to compare GDP and financial flows.',
        'Developed predictive models including a Decision Tree Regressor (R² = 0.78, RMSE = 14.06), revealing that GDP per capita and electricity access were stronger predictors of renewable growth than financial aid.',
        'Designed a hybrid ML pipeline by clustering countries into 3 economic groups using KMeans and training DTRs per cluster, improving predictive accuracy across regional contexts (best RMSE = 9.46).'
      ],
      githubLink: '/REGIS.pdf', // Keep as PDF link
      isPdf: true // Flag to indicate this is a PDF link
    },
    {
      title: 'Stratos Finance',
      technologies: ['React.js', 'Node.js', 'PostgreSQL', 'Docker', 'Recharts'],
      image: '/Stratos.png', // Add image path
      description: [
        'Built a modular personal finance dashboard with 5 core services (expense tracking, bill management, dashboards, and visualizations), designed for future expansion into savings and investment features.',
        'Developed 10+ RESTful APIs using Node.js and PostgreSQL, containerized with Docker for consistent environments and smoother developer onboarding.',
        'Integrated Recharts and localStorage caching to deliver responsive data visualizations and reduce redundant API calls, improving dashboard performance and user experience.'
      ],
      githubLink: 'https://github.com/sshaik03/Stratos_finance',
      isPdf: false
    },
    // In the projects array, update the Online Learning Management System object:
    {
      title: 'Online Learning Management System',
      technologies: ['Python', 'Flask', 'SQLite', 'PyTest', 'Postman'],
      image: '/OnlineLMS.png', // Add image path
      description: [
        'Built a fully functional Learning Management System with role-based workflows for instructors and students, enabling course creation, enrollment, assignment uploads, and grade management.',
        'Developed and documented 7 RESTful API endpoints using Flask and SQLite to support authentication, course logic, submissions, and grading, with clean modular structure for future scaling.',
        'Achieved 100% test coverage by conducting functional, integration, and mutation testing using Postman and PyTest to validate system behavior, ensuring complete backend reliability and eliminating edge case errors.'
      ],
      githubLink: 'https://github.com/sshaik03/Online_LMS',
      reportLink: '/Online_LMS.pdf',
      isPdf: false
    },
    {
      title: 'UMass Dining Companion App',
      technologies: ['Node.js', 'Express', 'SQLite', 'Sequelize', 'JavaScript'],
      description: [
        'Partnered with UMass Dining to build a full-stack web application that delivers real-time dining menus, nutrition insights, and personalized meal recommendations across 10+ dining locations, scraping and updating over 1,200 meals daily via a custom Node.js scraper.',
        'Implemented 10+ RESTful API endpoints with Express and Sequelize for user profile management, preference tracking (e.g., halal, plant-based), calorie goal setting, and nutrition logging, enabling students to receive tailored suggestions and monitor meal history.',
        'Developed a mobile-responsive frontend using HTML, CSS, and vanilla JavaScript with dynamic components for capacity tracking, dietary filters, and nutrient dashboards — achieving sub-150ms response times and enhancing accessibility in campus dining decisions.'
      ],
      githubLink: 'https://github.com/sshaik03/326FinalProject',
      isPdf: false
    },
    {
      title: 'Baseline Insights Tennis App',
      technologies: ['Python', 'Flask', 'BeautifulSoup', 'HTML/CSS', 'Bootstrap'],
      description: [
        'Developed a full-stack web application using Python and Flask, processing 5,000+ player stats from the ATP website.',
        'Implemented web scraping with BeautifulSoup and Requests to extract key player information, including current ranking, country, prize money, number of titles, win-loss record, career-high ranking, and total Grand Slam titles.',
        'Designed a responsive and user-friendly interface using HTML, CSS, and Bootstrap, featuring dynamic search functionality, error handling for invalid inputs, and support for multiple players with the same name.'
      ],
      githubLink: 'https://github.com/sshaik03/tenniswebapp',
      isPdf: false
    },
    {
      title: 'Expense Tracker App',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      description: [
        'Built a full-stack expense management web app using the MERN stack, enabling users to log, categorize, and monitor financial transactions in real time.',
        'Developed 7+ RESTful API endpoints using Express.js and MongoDB for secure CRUD operations with dynamic filtering by amount, category, and type.',
        'Designed a responsive React.js UI with modular components and hooks, allowing seamless tracking of personal and family expenses across multiple users.'
      ],
      githubLink: 'https://github.com/sshaik03/expense-tracker-app',
      isPdf: false
    },
    {
      title: 'Crash Avoidance RC Car',
      technologies: ['ESP32', 'Arduino IDE', 'Ultrasonic Sensors', 'PWM', 'C++', 'Analog Joystick'],
      description: [
        'Designed and built an autonomous RC car equipped with an ESP32 microcontroller and ultrasonic sensors to detect and prevent collisions in real-time by overriding unsafe joystick commands.',
        'Developed embedded C++ firmware to process analog joystick inputs for user-controlled movement while implementing automatic speed modulation using PWM based on obstacle proximity.',
        'Engineered a fail-safe safety mechanism that disables motor output when obstacles are detected, requiring the joystick to return to a neutral zone before restoring control — reducing accidental crashes during user operation.'
      ],
      githubLink: 'https://github.com/sshaik03/CrashAvoidanceRCCar',
      websiteLink: 'https://sites.google.com/view/safetyrccar/home?authuser=1',
      isPdf: false
    }
  ];

  return (
    <div className="py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-dark font-heading">
        Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="glass-card rounded-lg p-4 flex flex-col h-full hover:bg-gray-800/70 transition-all hover:transform hover:scale-105 hover:shadow-xl"
          >
            <div className="flex justify-between items-start mb-3">
              <a 
                href={project.githubLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg md:text-xl font-semibold text-accent font-heading hover:underline"
              >
                {project.title}
              </a>
              <div className="flex space-x-2">
                {project.websiteLink && (
                  <a 
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-accent transition-all transform hover:scale-110"
                    title="Visit Project Website"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                  </a>
                )}
                {project.reportLink && (
                  <a 
                    href={project.reportLink}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-accent transition-all transform hover:scale-110"
                    title="View Project Report"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                    </svg>
                  </a>
                )}
                <a 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-accent transition-all transform hover:scale-110"
                  title={project.isPdf ? "View PDF Report" : "View on GitHub"}
                >
                  {project.isPdf ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  )}
                </a>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span key={i} className="bg-gray-800/80 px-2 py-1 rounded-full text-xs text-accent">
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Add project image below technologies */}
            {project.image && (
              <div className="mb-4 mt-1">
                <img 
                  src={project.image} 
                  alt={`${project.title} screenshot`} 
                  className="w-full h-auto rounded-md object-cover shadow-md"
                />
              </div>
            )}
            
            <div className="mt-auto">
              <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-gray-300">
                {project.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;