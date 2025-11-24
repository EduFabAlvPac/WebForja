'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Cookie, X } from 'lucide-react'

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Verificar si el usuario ya aceptó/rechazó las cookies
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      // Mostrar el banner después de 1 segundo
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
    setIsLoaded(true)
  }, [])

  const handleAccept = () => {
    const consentData = {
      status: 'accepted',
      timestamp: new Date().toISOString(),
      analytics: true,
      marketing: true,
      functional: true
    }
    localStorage.setItem('cookieConsent', JSON.stringify(consentData))
    setShowBanner(false)
    setIsLoaded(true)
    
    // Inicializar Google Analytics si está configurado
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted'
      })
    }
    
    // Disparar evento personalizado para tracking
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('cookieConsentAccepted'))
    }
  }

  const handleReject = () => {
    const consentData = {
      status: 'rejected',
      timestamp: new Date().toISOString(),
      analytics: false,
      marketing: false,
      functional: true // Las cookies funcionales siempre están activas
    }
    localStorage.setItem('cookieConsent', JSON.stringify(consentData))
    setShowBanner(false)
    setIsLoaded(true)
    
    // Rechazar Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied'
      })
    }
  }

  const handleClose = () => {
    setShowBanner(false)
    // No guardamos nada, el banner volverá a aparecer en la próxima visita
  }

  if (!showBanner && isLoaded) return null

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[99999] bg-white shadow-2xl border-t-4 border-brand-orange"
        >
          <div className="container mx-auto px-4 py-6 md:py-8 max-w-7xl">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Icono */}
              <div className="flex-shrink-0 hidden md:flex">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center">
                  <Cookie className="w-7 h-7 text-brand-orange" />
                </div>
              </div>

              {/* Contenido */}
              <div className="flex-1 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 flex items-center gap-2">
                    <Cookie className="w-5 h-5 text-brand-orange md:hidden" />
                    Política de Cookies
                  </h3>
                  <button
                    onClick={handleClose}
                    className="flex-shrink-0 p-1 hover:bg-gray-100 rounded-full transition-colors"
                    aria-label="Cerrar"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Utilizamos cookies propias y de terceros para mejorar nuestros servicios, 
                  personalizar el contenido y analizar el tráfico del sitio. Al hacer clic en 
                  &quot;Aceptar&quot;, acepta el uso de cookies de análisis y marketing. 
                  Puede rechazarlas o configurar sus preferencias.{' '}
                  <Link 
                    href="/politica-cookies" 
                    className="text-brand-orange hover:text-brand-orange-dark font-semibold underline"
                  >
                    Más información
                  </Link>
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  🔒 Cumplimiento con{' '}
                  <a 
                    href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand-turquoise hover:underline font-medium"
                  >
                    Ley 1581/2012
                  </a>
                  {' '}y GDPR |{' '}
                  <Link 
                    href="/politica-privacidad" 
                    className="text-brand-turquoise hover:underline font-medium"
                  >
                    Política de Privacidad
                  </Link>
                </p>
              </div>

              {/* Botones */}
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto md:flex-shrink-0">
                <button
                  onClick={handleReject}
                  className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 whitespace-nowrap"
                  aria-label="Rechazar cookies opcionales"
                >
                  Rechazar
                </button>
                <Link
                  href="/politica-cookies#preferencias"
                  className="px-6 py-3 bg-brand-turquoise/10 border-2 border-brand-turquoise text-brand-turquoise font-semibold rounded-lg hover:bg-brand-turquoise/20 transition-all duration-200 whitespace-nowrap text-center"
                  onClick={() => setShowBanner(false)}
                >
                  Configurar
                </Link>
                <button
                  onClick={handleAccept}
                  className="px-6 py-3 bg-brand-orange text-white font-semibold rounded-lg hover:bg-brand-orange-dark transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap"
                  aria-label="Aceptar todas las cookies"
                >
                  Aceptar Todas
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

