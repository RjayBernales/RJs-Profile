import ParticleBackground from './ParticleBackground'
import { motion } from 'framer-motion'
import { ArrowDown, Code2, Layers, Rocket, Download } from 'lucide-react'
import profilePhoto from '../assets/Profile.jpg'

const HeroSection = () => {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 px-6 relative overflow-hidden">
  <ParticleBackground />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Text side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              Open to internships & collaborations
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
            >
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                RJ Bernales
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-6 font-medium"
            >
              Information Technology Student &amp; Aspiring Full Stack Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-500 leading-relaxed mb-8 max-w-lg"
            >
              A 3rd year IT student at{' '}
              <span className="text-gray-300 font-medium">Northern Bukidnon State College</span>,
              passionate about building clean, functional web applications from
              database design all the way to polished user interfaces.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {[
                { icon: <Code2 size={15} />, label: 'React & TypeScript' },
                { icon: <Layers size={15} />, label: 'Supabase & PostgreSQL' },
                { icon: <Rocket size={15} />, label: 'Full Stack Dev' },
              ].map((item) => (
                <span key={item.label} className="flex items-center gap-2 bg-gray-900 border border-gray-800 text-gray-400 text-sm px-3 py-1.5 rounded-full">
                  <span className="text-blue-400">{item.icon}</span>
                  {item.label}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => handleScroll('projects')}
                className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
              >
                View My Projects
              </button>
              <button
                onClick={() => handleScroll('contact')}
                className="flex items-center gap-2 bg-transparent hover:bg-gray-800 border border-gray-700 text-gray-300 font-medium px-6 py-3 rounded-lg transition-colors duration-200"
              >
                <Download size={16} />
                Download CV
              </button>
            </motion.div>
          </div>

          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl scale-110 pointer-events-none" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-800 ring-4 ring-blue-500/20">
                <img
                  src={profilePhoto}
                  alt="RJ Bernales"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-gray-900 border border-gray-700 rounded-xl px-3 py-2 flex items-center gap-2 shadow-xl">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-gray-300 text-xs font-medium">Available for hire</span>
              </div>
              <div className="absolute -top-2 -left-2 bg-gray-900 border border-gray-700 rounded-xl px-3 py-2 shadow-xl">
                <span className="text-yellow-400 text-xs font-medium">A.I.Deas R10 Champion 2025</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col items-center gap-2 text-gray-600 mt-16 cursor-pointer"
          onClick={() => handleScroll('about')}
        >
          <span className="text-xs tracking-widest uppercase">Scroll down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection