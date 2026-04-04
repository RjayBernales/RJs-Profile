import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, Mail, MapPin } from 'lucide-react'

const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  const updateForm = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Get in touch</span>
          <h2 className="text-4xl font-bold text-white mt-2">Contact Me</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Let us work together</h3>
              <p className="text-gray-400 leading-relaxed">
                I am currently open to internship opportunities, freelance projects,
                and collaborations. Whether you have a project in mind or just want
                to say hi, my inbox is always open!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-400/10 border border-blue-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-gray-500 text-xs">Email</div>
                  <div className="text-gray-300 text-sm">rainieljevson@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-400/10 border border-blue-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-gray-500 text-xs">Location</div>
                  <div className="text-gray-300 text-sm">Bukidnon, Philippines</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-400/10 border border-blue-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-blue-400">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-gray-500 text-xs">Facebook</div>
                  <a href="https://www.facebook.com/rainiel.jevson.bernales" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-sm hover:underline">
                    rainiel.jevson.bernales
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label className="text-gray-400 text-sm mb-1.5 block">Your Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => updateForm('name', e.target.value)}
                placeholder="John Doe"
                className="w-full bg-gray-900 border border-gray-800 focus:border-blue-500 text-white rounded-lg px-4 py-3 text-sm outline-none transition-colors placeholder-gray-600"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1.5 block">Email Address</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => updateForm('email', e.target.value)}
                placeholder="john@example.com"
                className="w-full bg-gray-900 border border-gray-800 focus:border-blue-500 text-white rounded-lg px-4 py-3 text-sm outline-none transition-colors placeholder-gray-600"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1.5 block">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => updateForm('message', e.target.value)}
                placeholder="Hi RJ, I would like to talk about..."
                className="w-full bg-gray-900 border border-gray-800 focus:border-blue-500 text-white rounded-lg px-4 py-3 text-sm outline-none transition-colors placeholder-gray-600 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-lg transition-colors duration-200"
            >
              <Send size={16} />
              {sent ? 'Message Sent!' : 'Send Message'}
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  )
}

export default ContactSection