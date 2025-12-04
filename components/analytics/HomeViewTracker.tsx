'use client'

import { useEffect } from 'react'
import { trackHomeView } from '@/lib/analytics'

/**
 * HomeViewTracker - Trackea la vista del home una sola vez al cargar
 */
export function HomeViewTracker() {
  useEffect(() => {
    trackHomeView()
  }, [])

  return null
}

