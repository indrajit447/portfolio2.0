import React from 'react';
import { Calendar, MapPin, TrendingUp, Users, Code, Database } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "My Job Grow",
      position: "Full Stack Developer",
      duration: "Sep 2024 - Present",
      location: "Remote",
      type: "Internship",
      status: "Current",
      description: "Currently working on developing comprehensive web solutions with modern technologies.",
      achievements: [
        "Developed responsive user interfaces using React and Tailwind CSS",
        "Built robust backend APIs using Node.js and MongoDB",
        "Implemented real-time features with Socket.IO for enhanced user experience",
        "Led Git-based collaboration workflows for efficient team coordination"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Socket.IO", "Tailwind CSS", "Git"],
      icon: <Code className="h-6 w-6" />,
      color: "from-emerald-500 to-teal-600"
    },
    {
      company: "MotionCut",
      position: "Web Developer",
      duration: "Aug 2024 - Oct 2024",
      location: "Remote",
      type: "Internship",
      status: "Completed",
      description: "Focused on building high-performance web applications with emphasis on user experience and performance optimization.",
      achievements: [
        "Built responsive web applications using React and modern CSS frameworks",
        "Improved application load time by 20% through optimization techniques",
        "Successfully resolved 50+ bugs and enhanced application stability",
        "Collaborated with cross-functional teams to deliver quality solutions"
      ],
      technologies: ["React", "JavaScript", "CSS3", "HTML5", "Bootstrap"],
      icon: <TrendingUp className="h-6 w-6" />,
      color: "from-blue-500 to-purple-600"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            My journey in the tech industry
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12">
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} border-4 border-white dark:border-gray-800`}></div>

                {/* Experience Card */}
                <div className="ml-20 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className={`bg-gradient-to-r ${exp.color} p-6 rounded-t-lg text-white`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {exp.icon}
                        <div>
                          <h3 className="text-xl font-bold">{exp.position}</h3>
                          <p className="text-white/90 font-medium">{exp.company}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          exp.status === 'Current' 
                            ? 'bg-green-500 text-white' 
                            : 'bg-white/20 text-white'
                        }`}>
                          {exp.status}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Duration and Location */}
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                        <Users className="h-4 w-4" />
                        <span>{exp.type}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;