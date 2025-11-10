import React from 'react';
import { Code, Lightbulb, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A passionate software engineering student with a love for problem-solving and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              I'm currently pursuing my Bachelor's degree in Software Engineering, with a focus on 
              full-stack development and modern technologies. My journey in tech started in high school 
              when I built my first website, and I've been hooked ever since.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or working on personal projects that solve real-world problems. I believe in 
              continuous learning and staying up-to-date with the latest industry trends.
            </p>
            <p className="text-lg text-gray-700">
              My goal is to become a well-rounded software engineer who can contribute to meaningful 
              projects and help build a better digital world.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center mb-3">
                <Code className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Clean Code</h3>
              </div>
              <p className="text-gray-700">
                I write maintainable, scalable code following best practices and industry standards.
              </p>
            </div>

            <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500">
              <div className="flex items-center mb-3">
                <Lightbulb className="text-teal-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Innovation</h3>
              </div>
              <p className="text-gray-700">
                Always exploring new technologies and creative solutions to complex problems.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <div className="flex items-center mb-3">
                <Target className="text-orange-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Results</h3>
              </div>
              <p className="text-gray-700">
                Focused on delivering high-quality solutions that meet user needs and business goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;