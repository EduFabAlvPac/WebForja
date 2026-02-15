// components/layout/header/MegaMenuServiciosMobile.tsx
'use client'

import { useState, useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import * as LucideIcons from 'lucide-react'
import { SERVICIOS_MEGA_MENU } from '@/lib/constants/navigation'
import { SUPPORTED_LOCALES } from '@/lib/country'

interface MegaMenuServiciosMobileProps {
  isOpen: boolean
  onClose: () => void
}

export function MegaMenuServiciosMobile({ isOpen, onClose }: MegaMenuServiciosMobileProps) {
  const pathname = usePathname()
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

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
                            href={getLocalizedHref(service.href)}
                            onClick={onClose}
                            className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
                          >
                            <div className={`flex-shrink-0 w-12 h-12 min-w-[3rem] min-h-[3rem] rounded-full flex items-center justify-center ${service.iconBg}`}>
                              {IconComponent && (
                                <IconComponent 
                                  className={`w-6 h-6 min-w-[1.5rem] min-h-[1.5rem] flex-shrink-0 ${service.iconColor}`}
                                  strokeWidth={2}
                                />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-bold text-sm text-brand-navy mb-0.5">
                                {service.title}
                              </div>
                              <div className="text-xs text-gray-500 leading-tight line-clamp-2">
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

