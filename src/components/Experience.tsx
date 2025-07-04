import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Leading development of scalable web applications serving 100K+ users. Architecting microservices and implementing CI/CD pipelines.',
      achievements: [
        'Reduced application load time by 40% through optimization',
        'Led team of 5 developers on major product redesign',
        'Implemented automated testing reducing bugs by 60%',
        'Mentored 3 junior developers'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL'],
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Palo Alto, CA',
      period: '2021 - 2022',
      type: 'Full-time',
      description: 'Developed MVP for fintech startup from ground up. Built responsive web applications and RESTful APIs.',
      achievements: [
        'Built entire frontend application in React',
        'Designed and implemented secure payment system',
        'Achieved 99.9% uptime for production systems',
        'Integrated with 5+ third-party APIs'
      ],
      technologies: ['React', 'Python', 'Django', 'Stripe', 'Redis'],
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      title: 'Frontend Developer Intern',
      company: 'Digital Agency Pro',
      location: 'San Jose, CA',
      period: '2020 - 2021',
      type: 'Internship',
      description: 'Collaborated with design team to create pixel-perfect responsive websites for various clients.',
      achievements: [
        'Delivered 8 client projects on time',
        'Improved website performance scores by 35%',
        'Learned modern development workflows',
        'Contributed to company\'s design system'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Figma'],
      logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mb-6">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A journey through innovative companies where I've contributed to building 
              cutting-edge solutions and leading development teams.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-blue-600"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative pl-20 transform transition-all duration-500 ${
                    inView ? 'animate-slide-up' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-5 h-5 bg-gradient-to-r from-green-500 to-blue-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                  
                  {/* Experience Card */}
                  <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                      {/* Company Logo */}
                      <div className="flex-shrink-0 mb-4 lg:mb-0">
                        <img 
                          src={exp.logo}
                          alt={exp.company}
                          className="w-16 h-16 rounded-xl object-cover shadow-md"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                              {exp.title}
                            </h3>
                            <p className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">
                              {exp.company}
                            </p>
                          </div>
                          <div className="flex flex-col lg:items-end">
                            <span className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm font-medium mb-2">
                              {exp.type}
                            </span>
                            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                              <Calendar className="w-4 h-4 mr-1" />
                              {exp.period}
                            </div>
                            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mt-1">
                              <MapPin className="w-4 h-4 mr-1" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                          {exp.description}
                        </p>
                        
                        {/* Achievements */}
                        <div className="mb-6">
                          <h4 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                            Key Achievements
                          </h4>
                          <div className="grid md:grid-cols-2 gap-2">
                            {exp.achievements.map((achievement, i) => (
                              <div key={i} className="flex items-start">
                                <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-600 dark:text-gray-300 text-sm">
                                  {achievement}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Technologies */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                            Technologies Used:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 text-green-700 dark:text-green-300 rounded-lg text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Career Stats */}
          <div className="mt-20 grid md:grid-cols-4 gap-6">
            {[
              { label: 'Years Experience', value: '5+', icon: '📅' },
              { label: 'Projects Completed', value: '50+', icon: '🚀' },
              { label: 'Team Members Led', value: '15+', icon: '👥' },
              { label: 'Technologies Mastered', value: '25+', icon: '⚡' }
            ].map((stat, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 text-center transform transition-all duration-500 hover:scale-105 ${
                  inView ? 'animate-scale-in' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}