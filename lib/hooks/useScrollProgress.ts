'use client'

import { useState, useEffect } from 'react'

/**
 * Hook que retorna el progreso del scroll como porcentaje (0-100)
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null

    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      
      setProgress(Math.min(100, Math.max(0, scrollPercent)))
    }

    // Throttle para performance
    const handleScroll = () => {
      if (timeoutId === null) {
        timeoutId = setTimeout(() => {
          updateProgress()
          timeoutId = null
        }, 100) // Throttle de 100ms
      }
    }

    // Initial update
    updateProgress()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', updateProgress, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateProgress)
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [])

  return progress
}


