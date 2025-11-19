// components/layout/header/MegaMenuIndustrias.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Briefcase, Store, Factory, Sprout, Heart } from 'lucide-react'

interface MegaMenuIndustriasProps {
  isOpen: boolean
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

const INDUSTRIAS_ITEMS = [
  {
    id: 'servicios-profesionales',
    title: 'Servicios Profesionales',
    description: 'Consultoría y asesoría',
    href: '/industrias/servicios-profesionales',
    icon: Briefcase,
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-500',
  },
  {
    id: 'comercio-minorista',
    title: 'Comercio Minorista',
    description: 'Retail y E-commerce',
    href: '/industrias/comercio-minorista',
    icon: Store,
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-500',
  },
  {
    id: 'fabricacion',
    title: 'Fabricación',
    description: 'Manufactura e Industria 4.0',
    href: '/industrias/fabricacion',
    icon: Factory,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-500',
  },
  {
    id: 'agroindustria',
    title: 'Agroindustria',
    description: 'Agricultura y procesamiento',
    href: '/industrias/agroindustria',
    icon: Sprout,
    iconBg: 'bg-red-100',
    iconColor: 'text-red-500',
  },
  {
    id: 'salud',
    title: 'Salud',
    description: 'Servicios de salud',
    href: '/industrias/salud',
    icon: Heart,
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-500',
  },
]

export function MegaMenuIndustrias({ isOpen, onMouseEnter, onMouseLeave }: MegaMenuIndustriasProps) {
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
            <div className="container mx-auto px-8 py-16 max-w-7xl bg-white">
              {/* Grid horizontal de 5 items */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                {INDUSTRIAS_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className="group block text-center"
                    >
                      {/* Icono grande centrado */}
                      <div className="flex justify-center mb-4">
                        <div className={`
                          w-16 h-16 rounded-full 
                          ${item.iconBg} 
                          flex items-center justify-center
                          group-hover:scale-110 transition-transform duration-300
                        `}>
                          <item.icon 
                            className={`w-8 h-8 ${item.iconColor}`}
                            strokeWidth={2}
                          />
                        </div>
                      </div>

                      {/* Texto centrado debajo */}
                      <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-brand-orange transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-600">
                        {item.description}
                      </p>
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

