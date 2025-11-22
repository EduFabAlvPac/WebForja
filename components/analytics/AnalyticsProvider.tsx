'use client'

import { useScrollTracking } from '@/lib/hooks/useScrollTracking'
import { useSectionTracking } from '@/lib/hooks/useSectionTracking'

/**
 * Provider que inicializa tracking automático
 * - Scroll depth (25%, 50%, 75%, 100%)
 * - Section views (cuando el usuario ve una sección)
 */
export function AnalyticsProvider() {
  // Track scroll depth automáticamente
  useScrollTracking()

  // Track section views automáticamente
  useSectionTracking([
    'hero',
    'pain-points',
    'services',
    'metodologia',
    'case-studies',
    'cta',
  ])

  // Este componente no renderiza nada
  return null
}


