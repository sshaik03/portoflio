import React from 'react';

const Education = () => {
  const education = [
    {
      school: 'University of Massachusetts Amherst',
      degree: 'B.S in Computer Science',
      period: 'September 2022 - May 2025',
      location: 'Amherst, MA',
      courses: [
        'Object Oriented Programming', 'Data Structures', 'Physical Computing',
        'Programming Methodologies', 'Computer Systems & Networks', 'Multi-Threaded Programming',
        'Reasoning under Uncertainty', 'Discrete Math', 'Human Computer Interaction',
        'Web Programming', 'Software Engineering', 'Algorithms', 'Social Issues in Computing',
        'Machine Learning', 'Artificial Intelligence', 'Software Entrepreneurship',
        'Applied Data Science', 'Databases', 'Operating Systems'
      ]
    },
    {
      school: 'Georgia Institute of Technology',
      degree: 'M.S in Computer Science',
      period: 'Expected graduation Spring 2027',
      location: 'Atlanta, GA'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
        Educational Experience
      </h2>
      <div className="space-y-6 md:space-y-8">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-800/50 rounded-lg p-4 sm:p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-all"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-purple-400">{edu.school}</h3>
            <p className="text-lg md:text-xl mt-2">{edu.degree}</p>
            <p className="text-gray-400 mt-1">{edu.period}</p>
            {edu.location && <p className="text-gray-400">{edu.location}</p>}
            {edu.courses && (
              <div className="mt-4">
                <h4 className="text-base md:text-lg font-semibold mb-2">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, i) => (
                    <span
                      key={i}
                      className="bg-purple-900/50 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;