import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, GitBranch } from 'lucide-react'

const projects = [
  {
    title: 'RJs Profile',
    description: 'My personal developer portfolio built with React, TypeScript, Tailwind CSS, Framer Motion, and Supabase. The very site you are looking at right now.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Supabase'],
    github: 'https://github.com/RjayBernales/RJs-Profile',
    live: '#',
    featured: true,
  },
  {
    title: 'Coming Soon',
    description: 'More projects are currently being built and will be added here soon. Stay tuned!',
    tags: ['In Progress'],
    github: '#',
    live: '#',
    featured: false,
  },
]

const ProjectsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" ref={ref} className="py-24 px-6 bg-gray-900/40">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">What I've built</span>
          <h2 className="text-4xl font-bold text-white mt-2">My Projects</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gray-900 border rounded-2xl p-6 flex flex-col gap-4 group hover:border-blue-500/50 transition-colors duration-300 ${
                project.featured ? 'border-blue-500/30' : 'border-gray-800'
              }`}
            >
              {project.featured && (
                <span className="text-xs text-blue-400 font-medium uppercase tracking-widest">
                  Featured Project
                </span>
              )}
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-blue-400/10 border border-blue-400/20 text-blue-300 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 pt-2">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-white text-sm transition-colors">
                  <GitBranch size={15} />
                  Code
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-blue-400 text-sm transition-colors">
                  <ExternalLink size={15} />
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection