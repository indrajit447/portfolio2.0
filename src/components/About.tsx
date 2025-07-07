import { Code, Palette, Zap, Users, Target, Heart } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Proficient in modern web technologies including React, Node.js, TypeScript, and cloud platforms.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces with attention to detail and user experience.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Building fast, scalable applications with optimized code and efficient architecture.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Leading development teams and mentoring junior developers with modern workflows.',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Always exploring new technologies and pushing boundaries'
    },
    {
      icon: Heart,
      title: 'Quality',
      description: 'Committed to writing clean, maintainable, and tested code'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Believing in the power of teamwork and knowledge sharing'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              👋 I'm a B.Tech CSE graduate from Calcutta Institute of Engineering and Management, passionate about building user-focused and scalable web applications.

              With 8–9 months of internship experience and current work in a tech startup company, I specialize in full-stack development, responsive UI/UX, and SEO.

              I enjoy turning ideas into digital experiences using react,react native, JavaScript, PHP, MySQL, and modern tools.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl transform rotate-3"></div>
              <img
                src="https://res.cloudinary.com/drfxi4qfn/image/upload/v1751703196/Untitled_design_7_yjd9di.png"
                alt="Professional workspace"
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover transform -rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
                Building Digital Experiences
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I’m an enthusiastic and detail-oriented web developer with hands-on experience gained through 8–9 months of internship and my current role in a tech company.

                I specialize in building responsive, user-friendly applications using React, Node.js, Express.js, and MongoDB. I’m also experienced in SEO and passionate about turning ideas into impactful digital experiences. Constant learning and keeping up with modern web development trends are at the core of my growth mindset.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to
                open-source projects, or sharing knowledge with the developer community. I believe
                in the power of technology to make a positive impact on people's lives.
              </p>

              {/* Core Values */}
              <div className="grid grid-cols-1 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{value.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${inView ? 'animate-slide-up' : ''
                  }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
              Current Tech Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'PostgreSQL', 'MongoDB', 'GraphQL', 'Next.js', 'Tailwind CSS', 'Three.js'].map((tech, index) => (
                <span
                  key={tech}
                  className={`px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium transform transition-all duration-300 hover:scale-110 hover:shadow-lg ${inView ? 'animate-fade-in' : ''
                    }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}