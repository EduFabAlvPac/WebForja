'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Lock, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

/**
 * StickyCTA - Call to Action Pegajoso
 * 
 * Comportamiento:
 * - Desktop: Panel fijo a la derecha (sticky dentro del layout)
 * - Móvil: Barra fija en bottom-0 full-width
 * 
 * Accesibilidad:
 * - Focus visible
 * - Keyboard accessible
 * - ARIA labels
 */

interface StickyCTAProps {
  label?: string
  href?: string
  className?: string
}

export function StickyCTA({ 
  label = 'Rayos-X Empresarial Gratis',
  href = '/contacto',
  className = ''
}: StickyCTAProps) {
  return (
    <>
      {/* Desktop: Sidebar Derecha Sticky */}
      <motion.aside
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={`
          hidden lg:block
          sticky top-24 
          w-64 xl:w-72
          h-fit
          ${className}
        `}
        aria-label="Call to action"
      >
        <div className="bg-gradient-to-br from-forja-navy via-forja-purple to-forja-navy rounded-2xl p-6 shadow-2xl border border-white/10">
          {/* Icon */}
          <div className="mb-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <Lock className="w-6 h-6 text-forja-fire" />
            </div>
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold text-white mb-2">
            ¿Listo para Transformar?
          </h3>
          <p className="text-sm text-white/80 mb-4">
            Comienza con un diagnóstico gratuito y descubre el potencial de tu empresa
          </p>

          {/* CTA Button */}
          <Button
            variant="primary"
            size="lg"
            className="w-full bg-white text-forja-navy hover:bg-slate-100 shadow-xl"
            asChild
          >
            <Link href={href} className="flex items-center justify-center gap-2">
              <span className="font-bold">{label}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>

          {/* Trust Badge */}
          <div className="mt-4 pt-4 border-t border-white/20">
            <div className="flex items-center gap-2 text-xs text-white/70">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Sin compromiso · 100% Gratis</span>
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Mobile: Bottom Bar Fixed */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="
          lg:hidden
          fixed bottom-0 left-0 right-0
          z-40
          bg-white border-t border-slate-200
          shadow-2xl
          safe-area-inset-bottom
        "
        aria-label="Call to action móvil"
      >
        <div className="container-custom py-3">
          <Button
            variant="primary"
            size="lg"
            className="w-full shadow-lg"
            asChild
          >
            <Link href={href} className="flex items-center justify-center gap-2">
              <Lock className="w-5 h-5" />
              <span className="font-bold">{label}</span>
            </Link>
          </Button>
        </div>
      </motion.div>

      {/* Spacer para móvil (evita que el contenido quede tapado) */}
      <div className="lg:hidden h-20" aria-hidden="true" />
    </>
  )
}

