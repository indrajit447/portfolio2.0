import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

export default function Education() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = [
    {
      degree: 'Btech in Computer Science & Engineering',
      school: 'Makaut University',
      location: 'Kolkata,India',
      period: '2020 - 2024',
      cgpa: '8.6/10.0',
      description: 'Comprehensive study in software development, algorithms, and system design with focus on web technologies.',
      achievements: [
        'Studied Advanced Software Development Concepts, Data Structure',
        'Working on personal projects and final year projects ',
    
      ],
      image: 'https://res.cloudinary.com/drfxi4qfn/image/upload/v1751716447/1703077207b3d0ae6e217f4921a7126b177858a566_se95in.webp'
    },
    {
      degree: 'High secondary Education in Science',
      school: 'Bakhrahat High School, Kolkata',
      location: 'Kolkata, Bakhrahat',
      period: '2018 - 2019',
      gpa: '3.8/4.0',
      description: ' study in Math, Physics, and Chemistry with focus.',
      achievements: [
        'Get Highest marks in Math',
        'Organizer a cultural fest in school'
      ],
      image: 'https://res.cloudinary.com/drfxi4qfn/image/upload/v1751717145/sal.339a7dd6dc14ff564205_enfqq8.png'
    }
  ]

  const certifications = [
    {
      name: 'Getting started with aws',
      issuer: 'Amazon Web Services',
      date: '2023',
      icon: '☁️'
    },
    {
      name: 'Google Cloud facilator Program',
      issuer: 'Google Cloud',
      date: '2023',
      icon: '🌐'
    },
    {
      name: 'Cyber security virtual workshop',
      issuer: 'Forge',
      date: '2022',
      icon: ' 👨‍💻 '
    },
    {
      name: 'Web Development Certificate',
      issuer: 'Meta',
      date: '2024',
      icon: ' 💻 '
    }
  ]

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Education & Certifications
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Academic foundation and continuous learning journey that shapes my expertise 
              in modern software development and emerging technologies.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Academic Journey
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
              
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-16 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>
                  
                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div 
                      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                        inView ? 'animate-slide-up' : ''
                      }`}
                      style={{ animationDelay: `${index * 0.3}s` }}
                    >
                      <div className="flex items-start space-x-4 mb-6">
                        <img 
                          src={edu.image}
                          alt={edu.school}
                          className="w-16 h-16 rounded-lg object-cover shadow-md"
                        />
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {edu.degree}
                          </h4>
                          <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-1">
                            {edu.school}
                          </p>
                          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            {edu.period} • {edu.location}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                          <Award className="w-4 h-4 mr-1" />
                          GPA: {edu.gpa}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {edu.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h5 className="font-semibold text-gray-900 dark:text-white">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-2"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Empty space for the other side */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Grid */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                    inView ? 'animate-slide-up' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {cert.date}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Philosophy */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <BookOpen className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Continuous Learning Philosophy</h3>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                "Technology evolves rapidly, and so must we. I believe in lifelong learning, 
                staying curious, and constantly pushing the boundaries of what's possible. 
                Every project is an opportunity to learn something new."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}