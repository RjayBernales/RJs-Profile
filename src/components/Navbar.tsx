import { useState, useEffect } from 'react'
import { Menu, X, Code2 } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    scrollToSection(href.replace('#', ''))
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = ['contact', 'projects', 'skills', 'about', 'home']
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navClass = scrolled
    ? 'bg-gray-950/95 backdrop-blur-md border-b border-gray-800/50 py-3'
    : 'bg-transparent py-5'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-2 font-bold text-xl text-white"
        >
          <Code2 size={22} className="text-blue-400" />
          RJ<span className="text-blue-400">.</span>
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = activeSection === id
            const linkClass = isActive
              ? 'text-blue-400'
              : 'text-gray-400 hover:text-white'
            const underlineClass = isActive ? 'w-full' : 'w-0 group-hover:w-full'
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`text-sm font-medium transition-colors duration-200 relative group ${linkClass}`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${underlineClass}`} />
                </button>
              </li>
            )
          })}
        </ul>

        <button
          onClick={() => scrollToSection('contact')}
          className="hidden md:block bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors duration-200"
        >
          Hire Me
        </button>

        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors text-left"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar