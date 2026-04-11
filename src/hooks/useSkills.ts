import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export type Skill = {
  id: number
  name: string
  category: string
  order: number
}

const useSkills = () => {
  const [skills, setSkills] = useState<Skill[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchSkills = async () => {
      const { data, error } = await supabase
        .from('skills')
        .select('*')
        .order('order', { ascending: true })

      if (error) {
        setError(error.message)
      } else {
        setSkills(data || [])
      }
      setLoading(false)
    }

    fetchSkills()
  }, [])

  return { skills, loading, error }
}

export default useSkills