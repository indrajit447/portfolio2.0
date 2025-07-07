import React from 'react';
import { ExternalLink, Github, Award, MessageSquare, Brain } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "AI Recommendation System",
      description: "An intelligent recommendation system that analyzes user behavior and preferences to provide personalized suggestions. Built with machine learning algorithms and modern web technologies.",
      technologies: ["React", "Node.js", "Python", "MongoDB", "TensorFlow"],
      features: [
        "Machine learning-based recommendations",
        "Real-time user behavior analysis",
        "Scalable architecture",
        "Interactive dashboard"
      ],
      github: "#",
      demo: "#",
      icon: <Brain className="h-8 w-8" />,
      award: "Best Project Award",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Real-Time Chat Application",
      description: "A modern, responsive chat application with real-time messaging capabilities. Features include group chats, file sharing, and online presence indicators.",
      technologies: ["React", "Node.js", "Socket.IO", "MongoDB", "Express.js"],
      features: [
        "Real-time messaging with Socket.IO",
        "Group chat functionality",
        "File sharing capabilities",
        "Online/offline status",
        "Message history"
      ],
      github: "#",
      demo: "#",
      icon: <MessageSquare className="h-8 w-8" />,
      color: "from-emerald-500 to-teal-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Some of my notable work and achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.color} p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {project.icon}
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                  {project.award && (
                    <div className="flex items-center space-x-1 bg-white/20 px-3 py-1 rounded-full">
                      <Award className="h-4 w-4" />
                      <span className="text-sm font-medium">{project.award}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <Github className="h-5 w-5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/indrajit447"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
          >
            <Github className="h-5 w-5" />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;