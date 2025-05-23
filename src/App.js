import React from 'react';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-16">
        <Element name="about" className="section pt-8 md:pt-16">
          <About />
        </Element>
        <Element name="education" className="section">
          <Education />
        </Element>
        <Element name="experience" className="section">
          <Experience />
        </Element>
        <Element name="projects" className="section">
          <Projects />
        </Element>
        <Element name="contact" className="section pb-16">
          <Contact />
        </Element>
      </div>
    </div>
  );
}

export default App;
