'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

/**
 * GlobalStickyCTA - Barra CTA global para páginas largas
 * 
 * Features:
 * - Aparece al scroll > 1200px
 * - Se oculta si el CTA principal está visible (IntersectionObserver)
 * - Se oculta cerca del footer
 * - No se superpone a inputs
 * - Puede ser cerrado manualmente
 */

const SCROLL_THRESHOLD = 1200
const EXCLUDED_PATHS = ['/gracias', '/sandbox', '/contacto']

export function GlobalStickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const [isNearFooter, setIsNearFooter] = useState(false)
  const [primaryCtaVisible, setPrimaryCtaVisible] = useState(false)
  const pathname = usePathname()
  const footerRef = useRef<Element | null>(null)
  const primaryCtaRef = useRef<Element | null>(null)

  // Check if should show on this page
  const shouldShowOnPage = !EXCLUDED_PATHS.some(path => pathname?.startsWith(path))

  // Detect scroll position
  useEffect(() => {
    if (!shouldShowOnPage || isDismissed) return

    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY
          const shouldShow = scrollY > SCROLL_THRESHOLD
          setIsVisible(shouldShow && !primaryCtaVisible && !isNearFooter)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [shouldShowOnPage, isDismissed, primaryCtaVisible, isNearFooter])

  // Observe footer to hide CTA when near
  useEffect(() => {
    if (!shouldShowOnPage) return

    const footer = document.querySelector('footer')
    if (!footer) return
    footerRef.current = footer

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsNearFooter(entry.isIntersecting)
        })
      },
      { threshold: 0, rootMargin: '100px 0px 0px 0px' }
    )

    observer.observe(footer)
    return () => observer.disconnect()
  }, [shouldShowOnPage])

  // Observe primary CTA sections to hide when visible
  useEffect(() => {
    if (!shouldShowOnPage) return

    // Look for common CTA selectors
    const ctaSelectors = [
      '[data-cta-primary]',
      '#cta',
      '.cta-section',
      '[id*="contacto"]',
    ]

    const ctaElements = ctaSelectors
      .map(selector => document.querySelector(selector))
      .filter(Boolean) as Element[]

    if (ctaElements.length === 0) return

    primaryCtaRef.current = ctaElements[0]

    const observer = new IntersectionObserver(
      (entries) => {
        const anyVisible = entries.some(entry => entry.isIntersecting)
        setPrimaryCtaVisible(anyVisible)
      },
      { threshold: 0.1 }
    )

    ctaElements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [shouldShowOnPage, pathname])

  const handleDismiss = () => {
    setIsDismissed(true)
  }

  if (!shouldShowOnPage) return null

  return (
    <AnimatePresence>
      {isVisible && !isDismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none"
          role="complementary"
          aria-label="Llamada a la acción"
        >
          {/* Spacer to prevent content overlap */}
          <div className="h-20 md:h-16" />
          
          {/* CTA Bar */}
          <div className="pointer-events-auto bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
            <div className="container-custom py-3 md:py-4">
              <div className="flex items-center justify-between gap-4">
                {/* Text - Hidden on mobile */}
                <div className="hidden md:block flex-1">
                  <p className="text-forja-navy font-medium">
                    ¿Listo para transformar tu empresa?
                  </p>
                  <p className="text-sm text-slate-500">
                    Obtén tu diagnóstico Rayos-X gratuito
                  </p>
                </div>

                {/* Mobile text */}
                <div className="md:hidden flex-1">
                  <p className="text-sm font-medium text-forja-navy">
                    Rayos-X Empresarial Gratis
                  </p>
                </div>

                {/* CTA Button */}
                <div className="flex items-center gap-2">
                  <Button variant="primary" size="md" asChild>
                    <Link href="/contacto" className="inline-flex items-center gap-2">
                      <span className="hidden sm:inline">Solicitar Diagnóstico</span>
                      <span className="sm:hidden">Solicitar</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>

                  {/* Dismiss button */}
                  <button
                    onClick={handleDismiss}
                    className="p-2 text-slate-400 hover:text-slate-600 transition-colors rounded-full hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-forja-fire"
                    aria-label="Cerrar barra de llamada a la acción"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

