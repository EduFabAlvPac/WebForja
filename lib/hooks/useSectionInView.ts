'use client'

import { useState, useEffect } from 'react'

interface SectionInViewOptions {
  threshold?: number
  rootMargin?: string
}

/**
 * Hook que detecta qué sección está visible en el viewport
 */
export function useSectionInView(
  sectionIds: string[],
  options: SectionInViewOptions = {}
) {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const { threshold = 0.5, rootMargin = '0px' } = options

    const observerOptions = {
      threshold,
      rootMargin,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

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
  }, [sectionIds, options])

  return activeSection
}


