'use client'

import { useState, useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import * as Icons from 'lucide-react'
import { NAVIGATION_ITEMS } from '@/lib/constants/navigation'
import { Button } from '@/components/ui/button'
import { MegaMenuServiciosMobile } from './MegaMenuServiciosMobile'
import { CountrySwitcher } from '@/components/country/CountrySwitcher'
import { SUPPORTED_LOCALES } from '@/lib/country'

interface MobileMenuProps {
  onClose: () => void
}

// Helper para obtener el componente de icono dinámicamente
const getIcon = (iconName: string) => {
  const IconComponent = (Icons as any)[iconName]
  return IconComponent || Icons.Circle
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const pathname = usePathname()
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  // Obtener el locale actual del pathname
  const currentLocale = useMemo(() => {
    const firstSegment = pathname.split('/')[1]
    if (SUPPORTED_LOCALES.includes(firstSegment as any)) {
      return firstSegment
    }
    return null // Internacional (sin locale en URL)
  }, [pathname])

  // Función para construir href con locale
  const getLocalizedHref = (href: string) => {
    if (!currentLocale) return href // Internacional
    if (href.startsWith(`/${currentLocale}`)) return href
    return `/${currentLocale}${href}`
  }

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'tween', duration: 0.3 }}
      className="fixed inset-x-0 top-[var(--header-height-mobile)] bottom-0 bg-white z-[1005] overflow-y-auto overscroll-contain"
    >
      <div className="container-custom py-8">
        <nav>
          <ul className="space-y-2">
            {NAVIGATION_ITEMS.map((item) => {
              const hasMegaMenu = item.megaMenu || item.megaMenuColumns
              
              return (
                <li key={item.id}>
                  {hasMegaMenu ? (
                    <>
                      <button
                        onClick={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
                        className="flex items-center justify-between w-full text-left py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-brand-navy">{item.label}</span>
                        <ChevronRight
                          className={`h-5 w-5 text-brand-orange transition-transform ${
                            expandedItem === item.id ? 'rotate-90' : ''
                          }`}
                        />
                      </button>
                      
                      {/* Usar MegaMenuServiciosMobile para el item de servicios */}
                      {item.id === 'servicios' ? (
                        <MegaMenuServiciosMobile 
                          isOpen={expandedItem === item.id} 
                          onClose={onClose}
                        />
                      ) : (
                        expandedItem === item.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="ml-4 mt-2 space-y-3"
                          >
                            {/* Items simples (megaMenu) */}
                            {item.megaMenu && (
                              <ul className="space-y-1">
                                {item.megaMenu.map((subItem) => {
                                  const Icon = getIcon(subItem.icon || 'Circle')
                                  return (
                                    <li key={subItem.href}>
                                      <Link
                                        href={getLocalizedHref(subItem.href)}
                                        onClick={onClose}
                                        className="flex items-start gap-3 py-2 px-4 rounded-lg hover:bg-brand-orange/5 transition-colors"
                                      >
                                        <div className={`flex-shrink-0 w-8 h-8 rounded-full ${subItem.iconBg || 'bg-gray-100'} flex items-center justify-center`}>
                                          <Icon className="w-4 h-4" />
                                        </div>
                                        <div>
                                          <div className="font-medium text-sm">{subItem.title}</div>
                                          {subItem.description && (
                                            <div className="text-xs text-gray-600">{subItem.description}</div>
                                          )}
                                        </div>
                                      </Link>
                                    </li>
                                  )
                                })}
                              </ul>
                            )}

                            {/* Items con columnas (megaMenuColumns) */}
                            {item.megaMenuColumns && (
                              <div className="space-y-4">
                                {item.megaMenuColumns.map((column, idx) => (
                                  <div key={idx}>
                                    <h4 className="text-xs font-bold text-brand-navy uppercase tracking-wide px-4 mb-2">
                                      {column.category}
                                    </h4>
                                    <ul className="space-y-1">
                                      {column.items.map((subItem) => {
                                        const Icon = getIcon(subItem.icon || 'Circle')
                                        return (
                                          <li key={subItem.href}>
                                            <Link
                                              href={getLocalizedHref(subItem.href)}
                                              onClick={onClose}
                                              className="flex items-start gap-3 py-2 px-4 rounded-lg hover:bg-brand-orange/5 transition-colors"
                                            >
                                              <div className={`flex-shrink-0 w-8 h-8 rounded-full ${subItem.iconBg || 'bg-gray-100'} flex items-center justify-center`}>
                                                <Icon className="w-4 h-4" />
                                              </div>
                                              <div>
                                                <div className="font-medium text-sm">{subItem.title}</div>
                                                {subItem.description && (
                                                  <div className="text-xs text-gray-600">{subItem.description}</div>
                                                )}
                                              </div>
                                            </Link>
                                          </li>
                                        )
                                      })}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            )}
                          </motion.div>
                        )
                      )}
                    </>
                  ) : (
                    <Link
                      href={getLocalizedHref(item.href || '#')}
                      onClick={onClose}
                      className="block py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium text-brand-navy"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Country Switcher para móvil */}
        <div className="mt-8 mb-4">
          <div className="px-4 mb-2">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Seleccionar País
            </p>
          </div>
          <CountrySwitcher className="w-full" />
        </div>

        <div className="mt-6 space-y-3">
          <Button
            variant="outline"
            className="w-full border-brand-turquoise text-brand-turquoise hover:bg-brand-turquoise hover:text-white"
            asChild
          >
            <a
              href="https://forjadigitalae.github.io/Evaluaci%C3%B3n_Madurez_PYMEs.html"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
            >
              Evaluación Empresarial
            </a>
          </Button>
          <Button
            className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white shadow-glow-orange"
            asChild
          >
            <Link href={getLocalizedHref('/contacto')} onClick={onClose}>
              Contáctanos
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

