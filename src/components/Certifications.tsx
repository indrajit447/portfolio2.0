import React from 'react';
import { Award, Calendar, ExternalLink, Cloud, Shield, Star, Zap, CheckCircle, Trophy, Target } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "AWS Cloud Fundamentals",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Comprehensive understanding of AWS cloud computing fundamentals, including core services, security, and best practices.",
      skills: ["Cloud Computing", "AWS Services", "Cloud Security", "Infrastructure"],
      icon: <Cloud className="h-8 w-8" />,
      color: "from-orange-500 via-red-500 to-pink-500",
      bgGradient: "from-orange-50 via-red-50 to-pink-50 dark:from-orange-900/20 dark:via-red-900/20 dark:to-pink-900/20",
      link: "#",
      level: "Fundamental",
      status: "Verified",
      credentialId: "AWS-CF-2023-001",
      validUntil: "2026"
    },
    {
      title: "JPMorgan Chase Cybersecurity Virtual Experience",
      issuer: "JPMorgan Chase & Co.",
      date: "January 2023",
      description: "Completed virtual cybersecurity experience program focusing on security frameworks, threat analysis, and incident response.",
      skills: ["Cybersecurity", "Threat Analysis", "Risk Assessment", "Security Frameworks"],
      icon: <Shield className="h-8 w-8" />,
      color: "from-blue-500 via-purple-600 to-indigo-600",
      bgGradient: "from-blue-50 via-purple-50 to-indigo-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-indigo-900/20",
      link: "#",
      level: "Professional",
      status: "Completed",
      credentialId: "JPMC-CS-2023-447",
      validUntil: "Lifetime"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-orange-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-60 h-60 bg-gradient-to-r from-emerald-400/5 to-teal-400/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 px-6 py-3 rounded-full mb-6 shadow-lg">
            <Award className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <span className="text-purple-600 dark:text-purple-400 font-semibold">Professional Credentials</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 dark:from-white dark:via-purple-200 dark:to-blue-200 bg-clip-text text-transparent mb-6">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Validated expertise through industry-recognized certifications and professional development programs
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${cert.bgGradient} rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-[1.02]`}
              >
                {/* Animated Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}>
                  <div className="absolute inset-[3px] bg-white dark:bg-gray-900 rounded-3xl"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <div className={`w-20 h-20 bg-gradient-to-r ${cert.color} rounded-full blur-xl`}></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${cert.color} text-white shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      {cert.icon}
                    </div>
                    <div className="text-right space-y-2">
                      <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r ${cert.color} text-white font-bold text-sm shadow-lg`}>
                        <CheckCircle className="h-4 w-4" />
                        <span>{cert.status}</span>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                        Valid until: {cert.validUntil}
                      </div>
                    </div>
                  </div>

                  {/* Title and Issuer */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      {cert.issuer}
                    </p>
                    
                    {/* Date and Level */}
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                        <Calendar className="h-4 w-4" />
                        <span className="font-medium">{cert.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Target className="h-4 w-4 text-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{cert.level}</span>
                      </div>
                    </div>
                  </div>

                  {/* Credential ID */}
                  <div className="mb-6">
                    <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Credential ID</div>
                      <div className="font-mono text-sm font-bold text-gray-900 dark:text-white">{cert.credentialId}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center space-x-2">
                      <Zap className="h-5 w-5 text-yellow-500" />
                      <span>Skills Acquired</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-white/30 hover:shadow-lg hover:scale-105 transition-all duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Certificate Button */}
                  <a
                    href={cert.link}
                    className={`group/btn inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r ${cert.color} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                  >
                    <ExternalLink className="h-5 w-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                    <span>View Certificate</span>
                  </a>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl blur-xl`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 border border-white/20 group">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">2</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Certifications</div>
              <div className="mt-2">
                <Star className="h-5 w-5 text-yellow-500 mx-auto" />
              </div>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 border border-white/20 group">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">2023</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Latest Achievement</div>
              <div className="mt-2">
                <Trophy className="h-5 w-5 text-emerald-500 mx-auto" />
              </div>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 border border-white/20 group">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">AWS</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Cloud Certified</div>
              <div className="mt-2">
                <Cloud className="h-5 w-5 text-orange-500 mx-auto" />
              </div>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 border border-white/20 group">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Completion Rate</div>
              <div className="mt-2">
                <CheckCircle className="h-5 w-5 text-purple-500 mx-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Continuously expanding knowledge through industry-recognized certifications and professional development
            </p>
          </div>
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
            <Award className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
            <span>Committed to Continuous Learning</span>
            <Zap className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;