import {
  FaReact, FaNodeJs, FaGitAlt, FaGithub,
  FaFigma, FaDocker, FaCss3Alt, FaHtml5,
} from 'react-icons/fa'
import {
  SiTypescript, SiJavascript, SiTailwindcss,
  SiSupabase, SiPostgresql,
  SiVite, SiVercel, SiNextdotjs,
} from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'
import { TbApi } from 'react-icons/tb'
import type { ReactElement } from 'react'

const iconMap: Record<string, ReactElement> = {
  'react': <FaReact />,
  'typescript': <SiTypescript />,
  'javascript': <SiJavascript />,
  'tailwind css': <SiTailwindcss />,
  'tailwindcss': <SiTailwindcss />,
  'html5': <FaHtml5 />,
  'css3': <FaCss3Alt />,
  'framer motion': <FaReact />,
  'supabase': <SiSupabase />,
  'postgresql': <SiPostgresql />,
  'node.js': <FaNodeJs />,
  'nodejs': <FaNodeJs />,
  'rest apis': <TbApi />,
  'rest api': <TbApi />,
  'git': <FaGitAlt />,
  'github': <FaGithub />,
  'vs code': <VscCode />,
  'vscode': <VscCode />,
  'vite': <SiVite />,
  'vercel': <SiVercel />,
  'figma': <FaFigma />,
  'next.js': <SiNextdotjs />,
  'nextjs': <SiNextdotjs />,
  'docker': <FaDocker />,
  'react native': <FaReact />,
}

export const getSkillIcon = (name: string): ReactElement | null => {
  return iconMap[name.toLowerCase()] || null
}