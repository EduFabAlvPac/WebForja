'use client'

import { useEffect, useRef } from 'react'
import { trackSectionView } from '@/lib/analytics'

/**
 * Hook para trackear visualización de secciones con Intersection Observer
 */
export function useSectionTracking(sectionIds: string[]) {
  const trackedSections = useRef(new Set<string>())

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !trackedSections.current.has(entry.target.id)) {
          trackedSections.current.add(entry.target.id)
          trackSectionView(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5, // Trackear cuando el 50% de la sección esté visible
      rootMargin: '0px',
    })

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [sectionIds])
}


