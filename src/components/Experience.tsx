import { Calendar, GraduationCap, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'education',
      title: 'Bachelor of Software Engineering',
      organization: 'Rochester Institute of Technology',
      period: '2023 - 2028',
      description: 'Pursuing a Bachelor\'s degree in Software Engineering with a focus on full-stack development, algorithms, and data structures.',
      highlights: ['Relevant Coursework:', 'Software Design for Computing Systems', 'Web Engineering', 'Engineering of Software Subsystems', 'Software Process & Project Management']
    },
    {
      type: 'work',
      title: 'Grounds Worker',
      organization: 'Rochester Institute of Technology',
      period: 'February 2024 - Present',
      description: 'Supported campus operations through grounds maintenance, demonstrating reliability and teamwork.',
      highlights: ['40 hour work weeks', 'Learned many new skills', 'Contributed to a positive campus environment']
    },
    {
      type: 'work',
      title: 'Packer',
      organization: 'Teknio-Plex',
      period: 'July 2023 - August 2023',
      description: 'Ensured quality control and efficiency in a fast-paced manufacturing environment. ',
      highlights: ['Summer factory job', 'First workforce experience', 'Gained insight into manufacturing processes']
    }
    , {
      type: 'work',
      title: 'Tank Washer',
      organization: 'Dublin Corners Farm Brewery',
      period: '2016 - 2023',
      description: 'Washed fermentation and brewing system tanks, maintaining high standards of cleanliness and safety.',
      highlights: ['Family Business', 'Engrained good work ethic']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Experience</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My journey in software engineering and professional development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    exp.type === 'education' ? 'bg-blue-100' : 'bg-teal-100'
                  }`}>
                    {exp.type === 'education' ? (
                      <GraduationCap className={`${exp.type === 'education' ? 'text-blue-600' : 'text-teal-600'}`} size={24} />
                    ) : (
                      <Briefcase className="text-teal-600" size={24} />
                    )}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={16} className="mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <p className="text-lg text-blue-600 font-medium mb-3">{exp.organization}</p>
                  <p className="text-gray-700 mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, highlightIndex) => (
                      <span 
                        key={highlightIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;