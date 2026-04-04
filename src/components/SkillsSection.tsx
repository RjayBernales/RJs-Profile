import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillGroups = [
  {
    category: 'Frontend',
    color: 'blue',
    skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Framer Motion'],
  },
  {
    category: 'Backend & Database',
    color: 'purple',
    skills: ['Supabase', 'PostgreSQL', 'Node.js', 'REST APIs'],
  },
  {
    category: 'Tools & Workflow',
    color: 'teal',
    skills: ['Git', 'GitHub', 'VS Code', 'Vite', 'Vercel', 'Figma'],
  },
  {
    category: 'Currently Learning',
    color: 'orange',
    skills: ['Next.js', 'Docker', 'React Native'],
  },
]

const colorMap: Record<string, string> = {
  blue: 'bg-blue-400/10 border-blue-400/20 text-blue-300',
  purple: 'bg-purple-400/10 border-purple-400/20 text-purple-300',
  teal: 'bg-teal-400/10 border-teal-400/20 text-teal-300',
  orange: 'bg-orange-400/10 border-orange-400/20 text-orange-300',
}

const headerColorMap: Record<string, string> = {
  blue: 'text-blue-400',
  purple: 'text-purple-400',
  teal: 'text-teal-400',
  orange: 'text-orange-400',
}

const SkillsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6"
            >
              <h3 className={`font-semibold text-sm uppercase tracking-widest mb-4 ${headerColorMap[group.color]}`}>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-sm px-3 py-1.5 rounded-full border font-medium ${colorMap[group.color]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default SkillsSection