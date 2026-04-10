import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, GitBranch, Loader2, ImageOff } from 'lucide-react'
import useProjects from '../hooks/useProjects'

const ProjectsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { projects, loading, error } = useProjects()

  return (
    <section id="projects" ref={ref} className="py-24 px-6 bg-gray-900/40">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">What I have built</span>
          <h2 className="text-4xl font-bold text-white mt-2">My Projects</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {loading && (
          <div className="flex justify-center items-center py-20">
            <Loader2 size={32} className="text-blue-400 animate-spin" />
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="text-red-400 text-sm">Failed to load projects. Please try again later.</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gray-900 border rounded-2xl overflow-hidden flex flex-col hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 ${project.featured ? 'border-blue-500/30' : 'border-gray-800'}`}
              >
                {/* Project Image */}
                <div className="relative w-full h-48 bg-gray-800 overflow-hidden">
                  {project.image_url ? (
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gray-800/80">
                      <ImageOff size={32} className="text-gray-600" />
                      <span className="text-gray-600 text-xs">No preview available</span>
                    </div>
                  )}
                  {project.featured && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-blue-600/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-blue-400/10 border border-blue-400/20 text-blue-300 px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-2 border-t border-gray-800">
                    <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-white text-sm transition-colors">
                      <GitBranch size={15} />Code
                    </a>
                    <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-blue-400 text-sm transition-colors">
                      <ExternalLink size={15} />Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectsSection