'use client'

import { useEffect } from 'react'
import { useCountryOptional } from '@/context/CountryProvider'
import { setCountryContext } from '@/lib/analytics'

/**
 * Hook para sincronizar el contexto de país con analytics
 * 
 * Uso:
 * ```tsx
 * function MyComponent() {
 *   useAnalyticsCountry() // Actualiza automáticamente el contexto global
 *   return <div>...</div>
 * }
 * ```
 */
export function useAnalyticsCountry() {
  const country = useCountryOptional()

  useEffect(() => {
    if (country) {
      setCountryContext(country.locale, country.country.code)
    }
  }, [country])
}

