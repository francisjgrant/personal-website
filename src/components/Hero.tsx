import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Hi, I'm <span className="text-blue-800">Francis Grant</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Software Engineering Student @ Rochester Institute of Technology
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Passionate about creating innovative solutions and building the future through code. 
            Currently pursuing my degree in Software Engineering while working on exciting projects.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/francis-grant-38303832b/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a 
            href="mailto:fjg5149@rit.edu"
            className="flex items-center space-x-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
          >
            <Mail size={20} />
            <span>Contact</span>
          </a>
        </div>

        <div className="animate-bounce">
          <ArrowDown size={32} className="mx-auto text-gray-500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;