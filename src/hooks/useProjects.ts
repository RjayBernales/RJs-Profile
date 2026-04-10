import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export type Project = {
  id: number
  title: string
  description: string
  tags: string[]
  github_url: string
  live_url: string
  featured: boolean
  order: number
  image_url: string | null
}

const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('order', { ascending: true })

  if (error) {
    setError(error.message)
  } else {
    const parsed = (data || []).map((project) => ({
      ...project,
      tags: Array.isArray(project.tags)
        ? project.tags
        : typeof project.tags === 'string'
        ? project.tags.replace(/[{}]/g, '').split(',').map((t: string) => t.trim())
        : [],
    }))
    setProjects(parsed)
  }

  setLoading(false)
}

    fetchProjects()
  }, [])

  return { projects, loading, error }
}

export default useProjects