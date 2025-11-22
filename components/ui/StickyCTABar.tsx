'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ClipboardCheck, Gift, X } from 'lucide-react'
import { useScrollProgress } from '@/lib/hooks/useScrollProgress'
import { trackCTAClick } from '@/lib/analytics'

/**
 * Barra CTA flotante con diseño "glassmorphism" que aparece después de cierto scroll.
 * Se oculta al llegar al final de la página o al ser descartada por el usuario.
 */
export function StickyCTABar() {
  const progress = useScrollProgress()
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('stickyCTADismissed') === 'true'
    }
    return false
  })

  useEffect(() => {
    // Mostrar después del 40% de scroll y ocultar después del 85%
    if (!isDismissed) {
      setIsVisible(progress > 40 && progress < 85)
    }
  }, [progress, isDismissed])

  const handleDismiss = () => {
    setIsDismissed(true)
    setIsVisible(false)
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('stickyCTADismissed', 'true')
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-auto md:right-6 z-[1500]"
        >
          <div className="relative bg-brand-navy/80 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/10 md:max-w-xl mx-auto">
            {/* Borde superior con gradiente */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-turquoise to-brand-purple" />
            
            <div className="p-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Mensaje */}
                <div className="flex items-center gap-3 text-white w-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                    className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand-orange to-orange-600 rounded-xl flex items-center justify-center shadow-lg"
                  >
                    <Gift className="w-6 h-6 text-white" />
                  </motion.div>
                  <p className="text-sm font-medium">
                    <strong className="text-white">Diagnóstico GRATIS:</strong>
                    <span className="text-white/80"> Descubre tu madurez digital en 15 min.</span>
                  </p>
                </div>

                {/* Acciones */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/rayos-x-empresarial"
                      onClick={() => trackCTAClick('rayos_x_sticky_bar', 'sticky_bar', '/rayos-x-empresarial')}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-sm rounded-xl transition-all shadow-lg hover:shadow-xl group"
                    >
                      <ClipboardCheck className="w-5 h-5" />
                      Solicitar Rayos-X
                    </Link>
                  </motion.div>

                  <button
                    onClick={handleDismiss}
                    className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                    aria-label="Cerrar"
                  >
                    <X className="w-5 h-5" />
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

