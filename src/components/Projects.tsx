import { useState, useEffect } from 'react'
import { ExternalLink, Github, Filter } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { supabase } from '../lib/supabase'

interface Project {
  id: string
  title: string
  description: string
  image_url: string
  demo_url: string
  github_url: string
  technologies: string[]
  featured: boolean
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    fetchProjects()
  }, [])

  useEffect(() => {
    if (selectedFilter === 'all') {
      setFilteredProjects(projects)
    } else if (selectedFilter === 'featured') {
      setFilteredProjects(projects.filter(p => p.featured))
    } else {
      setFilteredProjects(projects.filter(p => 
        p.technologies.some(tech => tech.toLowerCase().includes(selectedFilter.toLowerCase()))
      ))
    }
  }, [projects, selectedFilter])

  const fetchProjects = async () => {
    try {
      // First try to fetch from database
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.log('Database not connected, using mock data')
        // Use mock data if database is not connected
        setProjects(mockProjects)
        setFilteredProjects(mockProjects)
      } else {
        setProjects(data || [])
        setFilteredProjects(data || [])
      }
    } catch (error) {
      console.log('Using mock data:', error)
      setProjects(mockProjects)
      setFilteredProjects(mockProjects)
    } finally {
      setLoading(false)
    }
  }

  const mockProjects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product catalog, shopping cart, and payment processing.',
      image_url: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      demo_url: 'https://example.com',
      github_url: 'https://github.com',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      featured: true
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image_url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      demo_url: 'https://example.com',
      github_url: 'https://github.com',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
      featured: true
    },
    {
      id: '3',
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with location-based forecasts, charts, and weather alerts. Built with modern React and weather APIs.',
      image_url: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      demo_url: 'https://example.com',
      github_url: 'https://github.com',
      technologies: ['React', 'Chart.js', 'Weather API', 'CSS'],
      featured: false
    },
    {
      id: '4',
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization, scheduling, and performance tracking.',
      image_url: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=600',
      demo_url: 'https://example.com',
      github_url: 'https://github.com',
      technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
      featured: false
    }
  ]

  const filters = ['all', 'featured', 'react', 'node.js', 'typescript', 'python']

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A collection of projects showcasing my skills in web development, 
              design, and problem-solving.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedFilter === filter
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {filter === 'all' ? 'All Projects' : filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                  inView ? 'animate-slide-up' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a
                        href={project.demo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-gray-700" />
                      </a>
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <Github className="w-5 h-5 text-gray-700" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}