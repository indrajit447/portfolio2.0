import { ArrowDown, Github, Linkedin, Mail, Download, Play } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import ThreeBackground from './ThreeBackground'

export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section 
      id="home" 
      ref={ref}
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <ThreeBackground />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className={`transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Profile Image */}
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Profile"
                className="relative w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-gray-900 dark:text-white">Creative</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Developer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences with modern web technologies, 
            innovative design, and scalable architecture. Turning ideas into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span>View My Work</span>
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
            </button>
            <button className="px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600"
            >
              <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600"
            >
              <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
            </a>
            <a 
              href="mailto:hello@example.com"
              className="group p-4 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600"
            >
              <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
            {[
              { number: '5+', label: 'Years Experience' },
              { number: '50+', label: 'Projects Completed' },
              { number: '15+', label: 'Happy Clients' },
              { number: '25+', label: 'Technologies' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-gray-400" />
        </div>
      </div>
    </section>
  )
}