'use client'

import { useAnalyticsCountry } from '@/lib/hooks/useAnalyticsCountry'

/**
 * AnalyticsTracker - Sincroniza el contexto de país con analytics
 * 
 * Incluir en RootLayout para que esté disponible globalmente
 */
export function AnalyticsTracker() {
  useAnalyticsCountry()
  return null
}

