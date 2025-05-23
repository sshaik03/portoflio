import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center">
    
      <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
      About Me 
      </h2>
      <div className="bg-gray-800/50 rounded-lg p-4 sm:p-6 md:p-8 backdrop-blur-sm">
        <p className="text-base md:text-lg leading-relaxed mb-4">
        Hi! I’m Sameen — a Computer Science student passionate about building things that solve real problems and make people’s lives easier. Whether it’s designing mobile or full-stack web apps, experimenting with AI tools, or optimizing backend systems, I love learning by doing and picking up new tech along the way.


        </p>
        <p className="text-base md:text-lg leading-relaxed mb-4">
        Outside of coding, you’ll find me traveling whenever I get the chance, hitting the gym and playing or watching sports.
        </p>
        <p className="text-base md:text-lg leading-relaxed">
        I’m always up for a challenge and excited by the opportunity to grow — both as a developer and as a person. Let's build!        </p>
      </div>
    </div>
  );
};

export default About;