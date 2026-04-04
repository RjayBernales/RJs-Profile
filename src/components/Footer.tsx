import { Code2 } from 'lucide-react'

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-gray-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-white font-bold">
          <Code2 size={18} className="text-blue-400" />
          RJ<span className="text-blue-400">.</span>
        </div>
        <p className="text-gray-600 text-sm">
          2025 Rainiel Jevson Bernales. Built with React and Tailwind CSS.
        </p>
        <div className="flex gap-6">
          <button onClick={() => scrollTo('home')} className="text-gray-600 hover:text-white text-sm transition-colors">Home</button>
          <button onClick={() => scrollTo('projects')} className="text-gray-600 hover:text-white text-sm transition-colors">Projects</button>
          <button onClick={() => scrollTo('contact')} className="text-gray-600 hover:text-white text-sm transition-colors">Contact</button>
        </div>
      </div>
    </footer>
  )
}

export default Footer