import { useEffect, useRef } from 'react'
import { tsParticles } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'

const ParticleBackground = () => {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    const init = async () => {
      await loadSlim(tsParticles)
      await tsParticles.load({
        id: 'tsparticles',
        options: {
          fullScreen: { enable: false },
          background: { color: { value: 'transparent' } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'grab' },
              onClick: { enable: true, mode: 'push' },
            },
            modes: {
              grab: { distance: 140, links: { opacity: 0.5 } },
              push: { quantity: 3 },
            },
          },
          particles: {
            color: { value: '#3b82f6' },
            links: {
              color: '#3b82f6',
              distance: 150,
              enable: true,
              opacity: 0.15,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.8,
              direction: 'none',
              outModes: { default: 'bounce' },
            },
            number: { value: 60, density: { enable: true } },
            opacity: { value: 0.3 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        },
      })
    }

    init()

    return () => {
      tsParticles.dom().forEach((container) => container.destroy())
    }
  }, [])

  return (
    <div
      id="tsparticles"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  )
}

export default ParticleBackground