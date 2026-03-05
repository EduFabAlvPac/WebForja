// components/layout/header/MegaMenuNosotros.tsx
'use client'

import { useState, useEffect, useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Clock, Users, MessageSquareQuote } from 'lucide-react'
import { SUPPORTED_LOCALES } from '@/lib/country'

interface MegaMenuNosotrosProps {
  isOpen: boolean
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

const NOSOTROS_ITEMS = [
  {
    id: 'historia',
    title: 'Historia',
    subtitle: 'Nuestro Propósito',
    description: 'Por Qué Existimos y A Quién Servimos',
    href: '/nosotros/historia',
    icon: Clock,
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-500',
  },
  {
    id: 'equipo',
    title: 'Equipo Profesional',
    subtitle: 'Expertos que Impulsan tu Transformación',
    description: 'Certificaciones, Experiencia, Especialidades',
    href: '/nosotros/equipo',
    icon: Users,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-500',
  },
  {
    id: 'testimonios',
    title: 'Testimonios',
    subtitle: 'Transformaciones Reales',
    description: 'Casos Documentados con Resultados Medibles',
    href: '/nosotros/testimonios',
    icon: MessageSquareQuote,
    iconBg: 'bg-red-100',
    iconColor: 'text-red-500',
  },
]

export function MegaMenuNosotros({ isOpen, onMouseEnter, onMouseLeave }: MegaMenuNosotrosProps) {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  // Obtener el locale actual del pathname
  const currentLocale = useMemo(() => {
    const firstSegment = pathname.split('/')[1]
    if (SUPPORTED_LOCALES.includes(firstSegment as any)) {
      return firstSegment
    }
    return null
  }, [pathname])

  // Función para construir href con locale
  const getLocalizedHref = (href: string) => {
    if (!currentLocale) return href
    if (href.startsWith(`/${currentLocale}`)) return href
    return `/${currentLocale}${href}`
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="fixed left-0 right-0 top-[60px] md:top-[80px] z-[9999] bg-slate-50 border-t-2 border-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.15)]"
          style={{ height: 'auto' }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="w-full bg-slate-50">
            <div className="container mx-auto px-8 py-16 max-w-5xl bg-slate-50">
              {/* Grid horizontal de 3 items - Estilo como Servicios */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {NOSOTROS_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={getLocalizedHref(item.href)}
                      className="group block p-6 rounded-xl hover:bg-slate-100 transition-colors duration-200"
                    >
                      {/* Ícono a la izquierda con texto a la derecha */}
                      <div className="flex items-start gap-4">
                        {/* Ícono circular */}
                        <div className={`
                          flex-shrink-0 w-16 h-16 rounded-full 
                          ${item.iconBg} 
                          flex items-center justify-center
                          group-hover:scale-110 transition-transform duration-300
                        `}>
                          <item.icon 
                            className={`w-8 h-8 ${item.iconColor}`}
                            strokeWidth={2}
                          />
                        </div>

                        {/* Contenido de texto */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-brand-orange transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm font-semibold text-brand-orange mb-2">
                            {item.subtitle}
                          </p>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

