'use client'

import { useEffect, useRef } from 'react'
import { trackScrollDepth } from '@/lib/analytics'

/**
 * Hook para trackear scroll depth automáticamente
 */
export function useScrollTracking() {
  const tracked = useRef({
    25: false,
    50: false,
    75: false,
    100: false,
  })

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null

    const handleScroll = () => {
      if (timeoutId) return

      timeoutId = setTimeout(() => {
        const scrollTop = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0

        // Track 25%
        if (scrollPercent >= 25 && !tracked.current[25]) {
          tracked.current[25] = true
          trackScrollDepth(25)
        }

        // Track 50%
        if (scrollPercent >= 50 && !tracked.current[50]) {
          tracked.current[50] = true
          trackScrollDepth(50)
        }

        // Track 75%
        if (scrollPercent >= 75 && !tracked.current[75]) {
          tracked.current[75] = true
          trackScrollDepth(75)
        }

        // Track 100%
        if (scrollPercent >= 99 && !tracked.current[100]) {
          tracked.current[100] = true
          trackScrollDepth(100)
        }

        timeoutId = null
      }, 100)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [])
}


