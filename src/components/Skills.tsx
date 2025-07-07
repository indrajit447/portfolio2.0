import React from 'react';
import { Code, Database, Globe, Terminal, Wrench, BookOpen, Zap, Star, TrendingUp, Award, Sparkles, Cpu, Palette } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "C/C++", level: 85, icon: "⚡", experience: "3+ years", description: "System programming & algorithms" },
        { name: "JavaScript", level: 95, icon: "🟨", experience: "1+ years", description: "Modern ES6+ & frameworks" },
        { name: "TypeScript", level: 88, icon: "🔷", experience: "2+ months", description: "Type-safe development" },
        { name: "Python", level: 80, icon: "🐍", experience: "6+ months", description: "Data science & automation" }
      ],
      color: "from-blue-500 via-purple-500 to-pink-500",
      bgGradient: "from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20",
      category: "Languages"
    },
    {
      title: "Frontend Development",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "React", level: 90, icon: "⚛️", experience: "1+ years", description: "Component-based architecture" },
        { name: "Tailwind CSS", level: 90, icon: "🎨", experience: "1+ years", description: "Utility-first styling" },
        { name: "Bootstrap", level: 82, icon: "🅱️", experience: "1+ years", description: "Responsive frameworks" },
        { name: "HTML", level: 95, icon: "🌐", experience: "2+ years", description: "Semantic markup" },
        { name: "CSS", level: 88, icon: "🎭", experience: "1.5+ years", description: "Modern styling & animations" }
      ],
      color: "from-emerald-500 via-teal-500 to-cyan-500",
      bgGradient: "from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-900/20 dark:via-teal-900/20 dark:to-cyan-900/20",
      category: "Frontend"
    },
    {
      title: "Backend Development",
      icon: <Terminal className="h-6 w-6" />,
      skills: ["Node.js", "Express.js", "Socket.IO", "REST APIs"],
      color: "bg-purple-500"
    },
    {
      title: "Database",
      icon: <Database className="h-6 w-6" />,
      skills: ["MongoDB", "MySQL", "Database Design", "Query Optimization"],
      color: "bg-orange-500"
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Git", "GitHub", "Visual Studio Code", "Postman"],
      color: "bg-red-500"
    },
    {
      title: "Other Skills",
      icon: <BookOpen className="h-6 w-6" />,
      skills: ["Excel", "Problem Solving", "Team Leadership", "Project Management"],
      color: "bg-indigo-500"
    }
  ];

  const proficiencySkills = [
    { 
      skill: "React", 
      level: 90, 
      color: "from-blue-500 to-cyan-500",
      icon: "⚛️",
      category: "Frontend",
      experience: "6+ month"
    },
    { 
      skill: "Node.js", 
      level: 85, 
      color: "from-green-500 to-emerald-500",
      icon: "🟢",
      category: "Backend",
      experience: "6+ month"
    },
    { 
      skill: "JavaScript", 
      level: 95, 
      color: "from-yellow-500 to-orange-500",
      icon: "🟨",
      category: "Language",
      experience: "1+ years"
    },
    { 
      skill: "MongoDB", 
      level: 80, 
      color: "from-green-600 to-teal-600",
      icon: "🍃",
      category: "Database",
      experience: "6+ month"
    },
    { 
      skill: "Tailwind CSS", 
      level: 90, 
      color: "from-cyan-500 to-blue-500",
      icon: "🎨",
      category: "Styling",
      experience: "6+ month"
    },
    { 
      skill: "Express.js", 
      level: 85, 
      color: "from-gray-600 to-gray-800",
      icon: "⚡",
      category: "Framework",
      experience: "3+ months"
    },
    { 
      skill: "Git", 
      level: 88, 
      color: "from-orange-600 to-red-600",
      icon: "🔧",
      category: "Tool",
      experience: "2+ years"
    },
    { 
      skill: "MySQL", 
      level: 75, 
      color: "from-blue-600 to-indigo-600",
      icon: "🐬",
      category: "Database",
      experience: "6+ months"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-6 py-3 rounded-full mb-6 shadow-lg">
            <Zap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-600 dark:text-blue-400 font-semibold">Technical Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My comprehensive technical toolkit for building innovative and scalable applications
          </p>
        </div>

        {/* Enhanced Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div key={index}>
              {/* Enhanced Programming Languages & Frontend */}
              {(category.title === "Programming Languages" || category.title === "Frontend Development") ? (
                <div className={`group relative bg-gradient-to-br ${category.bgGradient} rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-[1.02] border border-white/20`}>
                  {/* Animated Border Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}>
                    <div className="absolute inset-[2px] bg-white dark:bg-gray-900 rounded-3xl"></div>
                  </div>

                  {/* Floating Sparkles */}
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                    <Sparkles className="h-6 w-6 text-purple-500 animate-pulse" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8">
                    {/* Header */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} text-white shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        {category.title === "Programming Languages" ? <Cpu className="h-6 w-6" /> : <Palette className="h-6 w-6" />}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                          {category.title}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-sm text-gray-500 dark:text-gray-400">{category.category}</span>
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, starIndex) => (
                              <Star key={starIndex} className="h-3 w-3 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced Skills List */}
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="group/skill bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 border border-white/30">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-3">
                              <span className="text-xl">{Skills.icon}</span>
                              <div>
                                <span className="font-semibold text-gray-900 dark:text-white">{skill.name}</span>
                                <div className="text-xs text-gray-500 dark:text-gray-400">{skill.experience}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className={`text-lg font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                                {skill.level}%
                              </div>
                            </div>
                          </div>
                          
                          {/* Mini Progress Bar */}
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                            <div
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                              style={{ width: `${skill.level}%` }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-pulse"></div>
                            </div>
                          </div>
                          
                          <p className="text-xs text-gray-600 dark:text-gray-400">{skill.description}</p>
                        </div>
                      ))}
                    </div>

                    {/* Category Stats */}
                    <div className="mt-6 pt-4 border-t border-white/20">
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {category.skills.length} Technologies
                        </div>
                        <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-gradient-to-r ${category.color} text-white text-xs font-semibold`}>
                          <Award className="h-3 w-3" />
                          <span>Expert Level</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl blur-xl`}></div>
                </div>
              ) : (
                /* Regular Category Cards */
                <div className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-[1.02] border border-white/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`${category.color} p-3 rounded-xl text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 group/item hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                      >
                        <div className={`w-3 h-3 ${category.color} rounded-full group-hover/item:scale-125 transition-transform duration-200`}></div>
                        <span className="font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Enhanced Proficiency Levels */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 px-6 py-3 rounded-full mb-6 shadow-lg">
              <TrendingUp className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <span className="text-purple-600 dark:text-purple-400 font-semibold">Proficiency Analytics</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 dark:from-white dark:via-purple-200 dark:to-pink-200 bg-clip-text text-transparent mb-4">
              Technical Mastery Levels
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Real-time assessment of my technical capabilities and experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {proficiencySkills.map((item, index) => (
              <div key={index} className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
                {/* Skill Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                        {item.skill}
                      </h4>
                      <div className="flex items-center space-x-2 text-sm">
                        <span className="text-gray-500 dark:text-gray-400">{item.category}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-blue-600 dark:text-blue-400 font-medium">{item.experience}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                      {item.level}%
                    </div>
                    <div className="flex items-center space-x-1 mt-1">
                      {[...Array(5)].map((_, starIndex) => (
                        <Star 
                          key={starIndex} 
                          className={`h-3 w-3 ${starIndex < Math.floor(item.level / 20) ? 'text-yellow-400 fill-current' : 'text-gray-300'} transition-colors duration-200`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Enhanced Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner">
                    <div
                      className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden group-hover:animate-pulse`}
                      style={{ width: `${item.level}%` }}
                    >
                      {/* Animated Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-pulse"></div>
                    </div>
                  </div>
                  
                  {/* Percentage Indicator */}
                  <div 
                    className="absolute top-0 transform -translate-y-8 transition-all duration-1000"
                    style={{ left: `${item.level}%`, transform: `translateX(-50%) translateY(-2rem)` }}
                  >
                    <div className={`bg-gradient-to-r ${item.color} text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                      {item.level}%
                    </div>
                  </div>
                </div>

                {/* Skill Level Badge */}
                <div className="mt-4 flex justify-between items-center">
                  <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-xs font-semibold shadow-lg`}>
                    <Award className="h-3 w-3" />
                    <span>
                      {item.level >= 90 ? 'Expert' : 
                       item.level >= 80 ? 'Advanced' : 
                       item.level >= 70 ? 'Intermediate' : 'Beginner'}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    Last updated: 2024
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 border border-white/20 group">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">8+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Technologies</div>
              <div className="mt-2">
                <Code className="h-5 w-5 text-blue-500 mx-auto" />
              </div>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 border border-white/20 group">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">3+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Years Experience</div>
              <div className="mt-2">
                <TrendingUp className="h-5 w-5 text-emerald-500 mx-auto" />
              </div>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 border border-white/20 group">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">JS Proficiency</div>
              <div className="mt-2">
                <Star className="h-5 w-5 text-purple-500 mx-auto" />
              </div>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 border border-white/20 group">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">6</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Skill Categories</div>
              <div className="mt-2">
                <Award className="h-5 w-5 text-orange-500 mx-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
            <Zap className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
            <span>Always Learning, Always Growing</span>
            <TrendingUp className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;