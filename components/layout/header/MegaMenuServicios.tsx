// components/layout/header/MegaMenuServicios.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import * as LucideIcons from 'lucide-react'
import { SERVICIOS_MEGA_MENU } from '@/lib/constants/navigation'

interface MegaMenuServiciosProps {
  isOpen: boolean
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export function MegaMenuServicios({ isOpen, onMouseEnter, onMouseLeave }: MegaMenuServiciosProps) {
  const [isMounted, setIsMounted] = useState(false)

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
          className="fixed left-0 right-0 top-[60px] md:top-[80px] z-[9999] bg-white shadow-2xl"
          style={{ height: 'auto' }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="w-full bg-white">
            <div className="container mx-auto px-8 py-12 max-w-6xl bg-white">
              {/* Grid de 3 columnas */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {SERVICIOS_MEGA_MENU.map((column, columnIndex) => (
                  <div key={column.id} className="space-y-8">
                    {/* Título de columna */}
                    <h3 className="text-lg font-extrabold text-gray-900 text-center mb-10 tracking-tight">
                      {column.title}
                    </h3>

                    {/* Lista de servicios */}
                    <div className="space-y-10">
                      {column.services.map((service, serviceIndex) => {
                        const IconComponent = LucideIcons[service.icon as keyof typeof LucideIcons] as any

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
                            <Link
                              href={service.href}
                              className="group block"
                            >
                              <div className="flex items-start gap-4">
                                {/* Icono circular pequeño */}
                                <div 
                                  className={`
                                    flex-shrink-0 w-12 h-12 rounded-full 
                                    flex items-center justify-center
                                    group-hover:scale-110 transition-transform duration-300
                                    ${service.iconBg}
                                  `}
                                >
                                  {IconComponent && (
                                    <IconComponent 
                                      className={`w-6 h-6 ${service.iconColor}`}
                                      strokeWidth={2}
                                    />
                                  )}
                                </div>

                                {/* Contenido a la derecha */}
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
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
