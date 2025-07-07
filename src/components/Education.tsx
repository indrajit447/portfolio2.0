import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, Star, BookOpen, Trophy, Users } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      institution: "Maulana Abul Kalam Azad University of Technology (MAKAUT)",
      degree: "B.Tech in Computer Science and Engineering",
      duration: "2020 - 2024",
      location: "Kalyani Institute of Engineering and Management (CIEM)",
      description: "Comprehensive study of computer science fundamentals, software engineering, and emerging technologies.",
      highlights: [
        "Strong foundation in programming languages and data structures",
        "Specialized in web development and database management",
        "Completed multiple projects in full-stack development",
        "Active participation in technical events and workshops"
      ],
      grade: "Good Academic Standing",
      icon: <GraduationCap className="h-8 w-8" />,
      color: "from-blue-500 via-purple-500 to-pink-500",
      bgPattern: "bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20",
      level: "Bachelor's",
      status: "Completed",
      achievements: ["Best Project Award", "Technical Excellence", "Team Leadership"]
    },
    {
      institution: "Bakhrahat High School",
      degree: "Higher Secondary Education",
      duration: "2019 - 2020",
      location: "Bakhrahat, West Bengal",
      description: "Completed higher secondary education with focus on Science stream, building strong analytical and problem-solving skills.",
      highlights: [
        "Science stream with Mathematics and Computer Science",
        "Developed early interest in programming and technology",
        "Participated in various academic competitions",
        "Built foundation for engineering studies"
      ],
      grade: "Excellent Performance",
      icon: <BookOpen className="h-8 w-8" />,
      color: "from-emerald-500 via-teal-500 to-cyan-500",
      bgPattern: "bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
      level: "Secondary",
      status: "Completed",
      achievements: ["Academic Excellence", "Science Olympiad", "Programming Club"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-6">
            <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-600 dark:text-blue-400 font-medium">Academic Journey</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6">
            Education & Learning
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Building knowledge through continuous learning and academic excellence
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`group relative ${edu.bgPattern} rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02]`}
              >
                {/* Animated Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}>
                  <div className="absolute inset-[2px] bg-white dark:bg-gray-900 rounded-3xl"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${edu.color} text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                      {edu.icon}
                    </div>
                    <div className="text-right">
                      <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r ${edu.color} text-white shadow-lg`}>
                        {edu.status}
                      </div>
                      <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">{edu.level}</div>
                    </div>
                  </div>

                  {/* Institution & Degree */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      {edu.institution}
                    </p>
                    
                    {/* Duration and Location */}
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                        <Calendar className="h-4 w-4" />
                        <span className="font-medium">{edu.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                        <MapPin className="h-4 w-4" />
                        <span className="font-medium">{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Grade Badge */}
                  <div className="mb-6">
                    <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r ${edu.color} text-white font-semibold shadow-lg`}>
                      <Star className="h-4 w-4" />
                      <span>{edu.grade}</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center space-x-2">
                      <Trophy className="h-5 w-5 text-yellow-500" />
                      <span>Achievements</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <span
                          key={achIndex}
                          className="px-3 py-1 bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center space-x-2">
                      <Users className="h-5 w-5 text-blue-500" />
                      <span>Key Highlights</span>
                    </h4>
                    <div className="space-y-3">
                      {edu.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-start space-x-3 group/item">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${edu.color} mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200`}></div>
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-200">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">4</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Years of Study</div>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">CSE</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Specialized in</div>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">2024</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Graduation Year</div>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">A+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Academic Grade</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <Award className="h-6 w-6" />
            <span>Committed to Lifelong Learning</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;