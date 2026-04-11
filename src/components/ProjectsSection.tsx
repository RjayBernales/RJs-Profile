import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, GitBranch, Loader2, ImageOff, X } from 'lucide-react'
import useProjects from '../hooks/useProjects'
import type { Project } from '../hooks/useProjects'

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative bg-gray-900 border border-gray-700 rounded-2xl max-w-md w-full p-6 z-10 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>

          <div className="flex flex-col items-center gap-4">

            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-700 bg-gray-800 flex-shrink-0">
              {project.img_url ? (
                <img
                  src={project.img_url}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <ImageOff size={24} className="text-gray-600" />
                </div>
              )}
            </div>

            <div className="text-center">
              <h3 className="text-lg font-bold text-white">{project.title}</h3>
              {project.featured && (
                <span className="text-xs text-blue-400 font-medium">Featured Project</span>
              )}
            </div>

            <p className="text-gray-400 text-sm leading-relaxed text-center">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 justify-center">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-blue-400/10 border border-blue-400/20 text-blue-300 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3 w-full pt-4 border-t border-gray-800">
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm font-medium py-2.5 rounded-lg transition-colors"
              >
                <GitBranch size={14} />
                Source Code
              </a>
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium py-2.5 rounded-lg transition-colors"
              >
                <ExternalLink size={14} />
                Live Page
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

const ProjectsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { projects, loading, error } = useProjects()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

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
            <Loader2 size={24} className="text-blue-400 animate-spin" />
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="text-red-400 text-sm">Failed to load projects.</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`group bg-gray-900 border rounded-xl overflow-hidden flex flex-col h-72 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
                  project.featured ? 'border-blue-500/30' : 'border-gray-800'
                }`}
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="relative w-full h-28 bg-gray-800 overflow-hidden flex-shrink-0">
                  {project.img_url ? (
                    <img
                      src={project.img_url}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-800">
                      <ImageOff size={20} className="text-gray-600" />
                    </div>
                  )}
                  {project.featured && (
                    <span className="absolute top-2 left-2 bg-blue-600/90 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                      Featured
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col gap-2 flex-1 overflow-hidden">

                  {/* Title */}
                  <h3 className="text-sm font-semibold text-white leading-snug line-clamp-1">
                    {project.title}
                  </h3>

                  {/* Short description */}
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                    {project.short_description || project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mt-auto">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs text-gray-600 self-center">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* See Full Detail button */}
                  <button className="mt-2 w-full text-xs text-blue-400 hover:text-blue-300 border border-blue-500/20 hover:border-blue-500/40 rounded-lg py-1.5 transition-colors duration-200">
                    See Full Detail
                  </button>

                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </section>
  )
}

export default ProjectsSection