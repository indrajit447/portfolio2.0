import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              I'm always open to discussing new opportunities and interesting projects. 
              Let's connect and create something extraordinary together.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/indrajit447" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
              >
                <Github className="w-6 h-6 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/indrajit-naskar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=naskarindrajit447@gmail.com"
                className="group p-3 rounded-xl bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="w-6 h-6 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'education', label: 'Education' },
                { id: 'experience', label: 'Experience' }
              ].map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {[
                'Web Development',
                'UI/UX Design',
                'Mobile Apps',
                'Consulting',
                'Code Review',
                'Mentoring'
              ].map((service) => (
                <li key={service} className="text-gray-400 hover:text-white transition-colors duration-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 flex items-center mb-4 md:mb-0">
              Made by <Heart className="w-4 h-4 text-red-500 mx-2 animate-pulse" /> Indrajit Naskar
            </p>
            <div className="flex items-center space-x-4">
              <p className="text-gray-500">
                © 2025 Professional Portfolio. All rights reserved.
              </p>
              <button
                onClick={scrollToTop}
                className="p-2 rounded-lg bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}