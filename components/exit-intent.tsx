'use client'

import { useState, useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { X, Zap, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

/**
 * ExitIntentModal - Modal de intención de salida (CRO)
 * 
 * Features:
 * - Detecta mouseleave top (desktop) o scroll > 70% (móvil)
 * - Una sola vez por sesión (localStorage)
 * - Respeta prefers-reduced-motion
 * - Cierra con ESC, click fuera, o botón X
 * - No aparece en /gracias
 */

const STORAGE_KEY = 'forja_exit_seen'
const EXCLUDED_PATHS = ['/gracias', '/sandbox']

export function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const pathname = usePathname()

  // Check if should show on this page
  const shouldShowOnPage = !EXCLUDED_PATHS.some(path => pathname?.startsWith(path))

  // Check reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // Check if already seen this session
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const seen = sessionStorage.getItem(STORAGE_KEY)
      if (seen) {
        setHasTriggered(true)
      }
    }
  }, [])

  const showModal = useCallback(() => {
    if (hasTriggered || !shouldShowOnPage) return
    
    setIsOpen(true)
    setHasTriggered(true)
    sessionStorage.setItem(STORAGE_KEY, 'true')
  }, [hasTriggered, shouldShowOnPage])

  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  // Desktop: Detect mouse leaving top of viewport
  useEffect(() => {
    if (hasTriggered || !shouldShowOnPage) return

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse leaves from the top
      if (e.clientY <= 0) {
        showModal()
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [hasTriggered, shouldShowOnPage, showModal])

  // Mobile: Detect scroll > 70%
  useEffect(() => {
    if (hasTriggered || !shouldShowOnPage) return

    // Only on mobile/tablet
    const isMobile = window.innerWidth < 1024

    if (!isMobile) return

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (window.scrollY / scrollHeight) * 100

      if (scrollPercent > 70) {
        showModal()
      }
    }

    // Throttle scroll events
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [hasTriggered, shouldShowOnPage, showModal])

  // Handle ESC key
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, closeModal])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!shouldShowOnPage) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={closeModal}
            aria-hidden="true"
          />

          {/* Modal - Centrado y mejorado */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-intent-title"
            initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3, type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[calc(100%-2rem)] max-w-md"
          >
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-forja-purple/20 overflow-hidden">
              {/* Header con gradiente mejorado */}
              <div className="relative px-6 py-8 bg-gradient-to-r from-forja-fire via-orange-500 to-forja-purple overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-8 w-20 h-20 bg-white rounded-full blur-2xl" />
                  <div className="absolute bottom-4 left-8 w-16 h-16 bg-white rounded-full blur-xl" />
                </div>

                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white z-10"
                  aria-label="Cerrar modal"
                >
                  <X className="h-5 w-5" />
                </button>
                
                <div className="relative text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  
                  <h2 id="exit-intent-title" className="text-2xl md:text-3xl font-bold text-white mb-2">
                    ¡Espera! No te vayas sin esto
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <p className="text-slate-700 text-center mb-6 leading-relaxed">
                  Obtén un <span className="font-bold text-forja-navy">diagnóstico gratuito</span> de tu empresa con nuestro Rayos-X Empresarial y descubre oportunidades de mejora.
                </p>

                {/* Benefits */}
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-forja-teal/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-forja-teal font-bold text-sm">✓</span>
                    </span>
                    <span className="text-slate-700 text-sm">Análisis personalizado en 15 minutos</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-forja-teal/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-forja-teal font-bold text-sm">✓</span>
                    </span>
                    <span className="text-slate-700 text-sm">Sin costo ni compromiso</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-forja-teal/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-forja-teal font-bold text-sm">✓</span>
                    </span>
                    <span className="text-slate-700 text-sm">Recomendaciones accionables</span>
                  </li>
                </ul>

                {/* CTAs */}
                <div className="space-y-3">
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-forja-fire to-orange-600 hover:from-forja-fire/90 hover:to-orange-600/90 text-white shadow-lg hover:shadow-xl transition-all"
                    asChild
                  >
                    <Link href="/contacto" className="inline-flex items-center justify-center gap-2">
                      <span>Quiero mi Rayos-X Gratis</span>
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  
                  <button
                    onClick={closeModal}
                    className="w-full text-sm text-slate-500 hover:text-slate-700 py-2 transition-colors focus:outline-none focus-visible:underline font-medium"
                  >
                    No gracias, seguiré navegando
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

