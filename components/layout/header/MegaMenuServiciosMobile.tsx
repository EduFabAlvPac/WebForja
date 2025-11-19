// components/layout/header/MegaMenuServiciosMobile.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import * as LucideIcons from 'lucide-react'
import { SERVICIOS_MEGA_MENU } from '@/lib/constants/navigation'

interface MegaMenuServiciosMobileProps {
  isOpen: boolean
  onClose: () => void
}

export function MegaMenuServiciosMobile({ isOpen, onClose }: MegaMenuServiciosMobileProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          className="overflow-hidden lg:hidden bg-white border-t border-gray-200"
        >
          {SERVICIOS_MEGA_MENU.map((column) => (
            <div key={column.id} className="border-b border-gray-200">
              <button
                onClick={() => setExpandedSection(
                  expandedSection === column.id ? null : column.id
                )}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-brand-navy text-base">
                  {column.title}
                </span>
                <LucideIcons.ChevronDown 
                  className={`w-5 h-5 text-brand-orange transition-transform duration-300 ${
                    expandedSection === column.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {expandedSection === column.id && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 space-y-3">
                      {column.services.map((service) => {
                        const IconComponent = LucideIcons[service.icon as keyof typeof LucideIcons] as any

                        return (
                          <Link
                            key={service.id}
                            href={service.href}
                            onClick={onClose}
                            className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
                          >
                            <div className={`w-12 h-12 rounded-full ${service.iconBg} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                              {IconComponent && (
                                <IconComponent 
                                  className={`w-6 h-6 ${service.iconColor}`}
                                  strokeWidth={2.5}
                                />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-bold text-sm text-brand-navy mb-0.5">
                                {service.title}
                              </div>
                              <div className="text-xs text-gray-500 leading-tight">
                                {service.description}
                              </div>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

