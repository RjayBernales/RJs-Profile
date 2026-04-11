import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Loader2 } from 'lucide-react'
import useSkills from '../hooks/useSkills'
import { getSkillIcon } from '../lib/skillIcons'

const categoryColors: Record<string, { header: string; badge: string }> = {
  'Frontend': {
    header: 'text-blue-400',
    badge: 'bg-blue-400/10 border-blue-400/20 text-blue-300 hover:bg-blue-400/20',
  },
  'Backend and Database': {
    header: 'text-purple-400',
    badge: 'bg-purple-400/10 border-purple-400/20 text-purple-300 hover:bg-purple-400/20',
  },
  'Tools and Workflow': {
    header: 'text-teal-400',
    badge: 'bg-teal-400/10 border-teal-400/20 text-teal-300 hover:bg-teal-400/20',
  },
  'Currently Learning': {
    header: 'text-orange-400',
    badge: 'bg-orange-400/10 border-orange-400/20 text-orange-300 hover:bg-orange-400/20',
  },
}

const defaultColors = {
  header: 'text-gray-400',
  badge: 'bg-gray-400/10 border-gray-400/20 text-gray-300 hover:bg-gray-400/20',
}

const SkillsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { skills, loading, error } = useSkills()

  const grouped = skills.reduce<Record<string, typeof skills>>((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = []
    acc[skill.category].push(skill)
    return acc
  }, {})

  const categoryOrder = ['Frontend', 'Backend and Database', 'Tools and Workflow', 'Currently Learning']

  const sortedCategories = Object.keys(grouped).sort((a, b) => {
    const ai = categoryOrder.indexOf(a)
    const bi = categoryOrder.indexOf(b)
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi)
  })

  return (
    <section id="skills" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">What I work with</span>
          <h2 className="text-4xl font-bold text-white mt-2">My Skills</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {loading && (
          <div className="flex justify-center items-center py-20">
            <Loader2 size={24} className="text-blue-400 animate-spin" />
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="text-red-400 text-sm">Failed to load skills.</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid md:grid-cols-2 gap-6">
            {sortedCategories.map((category, i) => {
              const colors = categoryColors[category] || defaultColors
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6"
                >
                  <h3 className={`font-semibold text-sm uppercase tracking-widest mb-4 ${colors.header}`}>
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {grouped[category].map((skill) => {
                      const icon = getSkillIcon(skill.name)
                      return (
                        <span
                          key={skill.id}
                          className={`flex items-center gap-2 text-sm px-3 py-2 rounded-full border font-medium transition-colors duration-200 cursor-default ${colors.badge}`}
                        >
                          {icon && <span className="text-base">{icon}</span>}
                          {skill.name}
                        </span>
                      )
                    })}
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}

      </div>
    </section>
  )
}

export default SkillsSection