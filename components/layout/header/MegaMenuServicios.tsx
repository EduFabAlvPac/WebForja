// components/layout/header/MegaMenuServicios.tsx
'use client'

import { useState, useEffect, useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import * as LucideIcons from 'lucide-react'
import { SERVICIOS_MEGA_MENU } from '@/lib/constants/navigation'
import { isCategoryDisabled, isServiceDisabled, categoryHidesProximamenteAndDarkTitle, PROXIMAMENTE_LABEL } from '@/lib/constants/services-disabled'
import { SUPPORTED_LOCALES } from '@/lib/country'

interface MegaMenuServiciosProps {
  isOpen: boolean
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export function MegaMenuServicios({ isOpen, onMouseEnter, onMouseLeave }: MegaMenuServiciosProps) {
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
            <div className="container mx-auto px-8 py-12 max-w-6xl bg-slate-50">
              {/* Grid de 3 columnas */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {SERVICIOS_MEGA_MENU.map((column, columnIndex) => {
                  const categoryDisabled = isCategoryDisabled(column.id)
                  const noProxDark = categoryHidesProximamenteAndDarkTitle(column.id)
                  return (
                    <div key={column.id} className="space-y-8">
                      {/* Título de columna: Link o span si deshabilitado */}
                      {categoryDisabled ? (
                        <div className="group block">
                          <h3 className={`text-lg font-extrabold text-center tracking-tight ${noProxDark ? 'text-gray-900 mb-10' : 'text-gray-400 mb-2'}`}>
                            {column.title}
                          </h3>
                          {!noProxDark && (
                            <p className="text-xs font-semibold text-gray-400 text-center mb-10">{PROXIMAMENTE_LABEL}</p>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={getLocalizedHref(`/servicios/${column.id}`)}
                          className="group block"
                        >
                          <h3 className="text-lg font-extrabold text-gray-900 text-center mb-10 tracking-tight group-hover:text-brand-orange transition-colors duration-300">
                            {column.title}
                          </h3>
                          <div className="w-1/2 h-0.5 bg-brand-orange mx-auto -mt-8 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                        </Link>
                      )}

                      {/* Lista de servicios */}
                      <div className="space-y-10">
                        {column.services.map((service, serviceIndex) => {
                          const IconComponent = LucideIcons[service.icon as keyof typeof LucideIcons] as any
                          const serviceDisabled = isServiceDisabled(service.id)

                          return (
                            <motion.div
                              key={service.id}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                delay: columnIndex * 0.1 + serviceIndex * 0.05,
                                duration: 0.3
                              }}
                            >
                              {serviceDisabled ? (
                                <div className="group block opacity-60 cursor-not-allowed relative">
                                  <div className="flex items-start gap-4">
                                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${service.iconBg}`}>
                                      {IconComponent && (
                                        <IconComponent className={`w-6 h-6 ${service.iconColor}`} strokeWidth={2} />
                                      )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <h4 className="text-base font-semibold text-gray-500 mb-1 leading-snug">
                                        {service.title}
                                      </h4>
                                      <p className="text-sm text-gray-400 leading-relaxed font-normal">
                                        {service.description}
                                      </p>
                                      <span className="inline-block mt-2 text-xs font-semibold text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                                        {PROXIMAMENTE_LABEL}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <Link href={getLocalizedHref(service.href)} className="group block">
                                  <div className="flex items-start gap-4">
                                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${service.iconBg}`}>
                                      {IconComponent && (
                                        <IconComponent className={`w-6 h-6 ${service.iconColor}`} strokeWidth={2} />
                                      )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <h4 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-brand-orange transition-colors leading-snug">
                                        {service.title}
                                      </h4>
                                      <p className="text-sm text-gray-600 leading-relaxed font-normal">
                                        {service.description}
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              )}
                            </motion.div>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
