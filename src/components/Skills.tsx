import { useInView } from 'react-intersection-observer'

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Vue.js', level: 85 },
        { name: 'Next.js', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Three.js', level: 80 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 82 },
        { name: 'GraphQL', level: 78 },
        { name: 'Redis', level: 75 }
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Docker', level: 88 },
        { name: 'Git', level: 95 },
        { name: 'CI/CD', level: 82 },
        { name: 'Kubernetes', level: 70 },
        { name: 'Terraform', level: 75 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels 
              across different technologies and frameworks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition-all duration-500 ${
                  inView ? 'animate-slide-up' : ''
                }`}
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="relative">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                            skill.level >= 90 ? 'bg-green-500' :
                            skill.level >= 80 ? 'bg-primary-500' :
                            skill.level >= 70 ? 'bg-accent-500' :
                            'bg-secondary-500'
                          }`}
                          style={{
                            width: inView ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills List */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Supabase', 'Firebase', 'Stripe', 'Figma', 'Adobe XD', 'Webpack',
                'Vite', 'Jest', 'Cypress', 'Storybook', 'Prisma', 'Serverless'
              ].map((tech, index) => (
                <span
                  key={tech}
                  className={`px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg shadow-md font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    inView ? 'animate-fade-in' : ''
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