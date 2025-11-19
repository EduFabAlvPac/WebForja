'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import * as Icons from 'lucide-react'
import { MegaMenuItem, MegaMenuColumn } from '@/lib/constants/navigation'

interface MegaMenuProps {
  items?: MegaMenuItem[]
  columns?: MegaMenuColumn[]
}

// Helper para obtener el componente de icono dinámicamente
const getIcon = (iconName: string) => {
  const IconComponent = (Icons as any)[iconName]
  return IconComponent || Icons.Circle
}

export function MegaMenu({ items, columns }: MegaMenuProps) {
  // Si tenemos columnas (para Servicios), usamos layout de columnas
  if (columns) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 py-8 px-10 z-[var(--z-mega-menu)] w-[900px]"
      >
        <div className="grid grid-cols-3 gap-8">
          {columns.map((column, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-sm font-bold text-brand-navy uppercase tracking-wide border-b border-gray-200 pb-3">
                {column.category}
              </h3>
              <div className="space-y-4">
                {column.items.map((item) => {
                  const Icon = getIcon(item.icon || 'Circle')
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-start gap-4 group"
                    >
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full ${item.iconBg || 'bg-gray-100'} flex items-center justify-center transition-transform group-hover:scale-110`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-brand-navy group-hover:text-brand-orange transition-colors mb-1">
                          {item.title}
                        </h4>
                        {item.description && (
                          <p className="text-sm text-gray-500">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    )
  }

  // Layout simple para Nosotros e Industrias
  const gridCols = items && items.length <= 3 ? 'grid-cols-3' : 'grid-cols-2 md:grid-cols-3'
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 py-8 px-10 z-[var(--z-mega-menu)] min-w-[700px]"
    >
      <div className={`grid ${gridCols} gap-8`}>
        {items?.map((item) => {
          const Icon = getIcon(item.icon || 'Circle')
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center text-center group"
            >
              <div className={`w-16 h-16 rounded-full ${item.iconBg || 'bg-gray-100'} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                <Icon className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-brand-navy group-hover:text-brand-orange transition-colors mb-2 text-base">
                {item.title}
              </h4>
              {item.description && (
                <p className="text-sm text-gray-500">
                  {item.description}
                </p>
              )}
            </Link>
          )
        })}
      </div>
    </motion.div>
  )
}

