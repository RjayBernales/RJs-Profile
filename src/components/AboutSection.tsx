import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Trophy, MapPin, Calendar, Music, Gamepad2, BookOpen } from 'lucide-react'
import profilePhoto from '../assets/Profile.jpg'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-24 px-6 bg-gray-900/40">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Who I am</span>
          <h2 className="text-4xl font-bold text-white mt-2">About Me</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl" />
              <img
                src={profilePhoto}
                alt="RJ Bernales"
                className="relative w-72 h-80 object-cover object-top rounded-2xl border border-gray-700"
              />
              {/* Stats overlay */}
              <div className="absolute -right-6 top-8 bg-gray-900 border border-gray-700 rounded-xl p-4 shadow-xl">
                <div className="text-2xl font-bold text-white">3rd</div>
                <div className="text-gray-500 text-xs">Year Level</div>
              </div>
              <div className="absolute -left-6 bottom-8 bg-gray-900 border border-gray-700 rounded-xl p-4 shadow-xl">
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-gray-500 text-xs">Projects</div>
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white">Rainiel Jevson J. Bernales</h3>
              <p className="text-blue-400 font-medium mt-1">Full Stack Developer in the Making</p>
            </div>

            <p className="text-gray-400 leading-relaxed">
              I'm a driven CS student from{' '}
              <span className="text-gray-200 font-medium">Northern Bukidnon State College</span>,
              passionate about turning ideas into real, working applications.
              I enjoy every layer of development — from designing databases to
              crafting smooth, intuitive interfaces that people actually love using.
            </p>

            {/* Details grid */}
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin size={15} className="text-blue-400 flex-shrink-0" />
                Bukidnon, Philippines
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Calendar size={15} className="text-blue-400 flex-shrink-0" />
                Born July 17, 2005
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <GraduationCap size={15} className="text-blue-400 flex-shrink-0" />
                BS Computer Science — Northern Bukidnon State College
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-yellow-400/5 border border-yellow-400/20 rounded-xl p-4">
                <Trophy size={18} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white text-sm font-medium">Champion — A.I.Deas For Impact 2025</div>
                  <div className="text-gray-500 text-xs mt-0.5">Region 10 AI Competition</div>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-blue-400/5 border border-blue-400/20 rounded-xl p-4">
                <GraduationCap size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white text-sm font-medium">Dean's Lister</div>
                  <div className="text-gray-500 text-xs mt-0.5">Northern Bukidnon State College</div>
                </div>
              </div>
            </div>

            {/* Hobbies */}
            <div>
              <p className="text-gray-500 text-sm mb-3">Outside of coding:</p>
              <div className="flex gap-3">
                {[
                  { icon: <Music size={15} />, label: 'Music' },
                  { icon: <Gamepad2 size={15} />, label: 'Gaming' },
                  { icon: <BookOpen size={15} />, label: 'Reading' },
                ].map((h) => (
                  <span key={h.label} className="flex items-center gap-2 bg-gray-900 border border-gray-800 text-gray-400 text-sm px-3 py-1.5 rounded-full">
                    <span className="text-blue-400">{h.icon}</span>
                    {h.label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection