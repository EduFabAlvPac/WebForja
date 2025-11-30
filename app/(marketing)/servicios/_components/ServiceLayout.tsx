'use client'

import { useState, useEffect, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Breadcrumbs, BreadcrumbItem } from '@/components/shared/Breadcrumbs'
import { StickyCTA } from '@/components/shared/StickyCTA'
import { cn } from '@/lib/utils'

/**
 * ServiceLayout - Plantilla Reutilizable para Páginas de Servicios
 * 
 * Features:
 * - Navegación por anclas con scrollspy (IntersectionObserver)
 * - Sticky CTA (sidebar desktop + bottom bar mobile)
 * - Breadcrumbs con Schema.org
 * - Un solo H1 por página
 * - Accesibilidad completa
 */

export interface ServiceAnchor {
  id: string
  label: string
}

export interface ServiceLayoutProps {
  title: string
  subtitle?: string
  breadcrumbs?: BreadcrumbItem[]
  anchors?: ServiceAnchor[]
  children: ReactNode
  cta?: {
    label: string
    href: string
  }
  className?: string
}

export function ServiceLayout({
  title,
  subtitle,
  breadcrumbs = [],
  anchors = [
    { id: 'por-que', label: '¿Por qué?' },
    { id: 'que', label: '¿Qué?' },
    { id: 'como', label: '¿Cómo?' },
    { id: 'prueba', label: 'Prueba' },
    { id: 'cta', label: 'Contacto' }
  ],
  children,
  cta = {
    label: 'Rayos-X Empresarial Gratis',
    href: '/contacto'
  },
  className = ''
}: ServiceLayoutProps) {
  const [activeAnchor, setActiveAnchor] = useState<string>('')

  // Scrollspy con IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -30% 0px', // Activa cuando la sección está ±30% del viewport
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveAnchor(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observar todas las secciones con ID
    anchors.forEach((anchor) => {
      const element = document.getElementById(anchor.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [anchors])

  // Smooth scroll al hacer clic en anchor
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const offset = 100 // Offset para header fijo
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className={cn('pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]', className)}>
      {/* Header Section */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-slate-50 py-8 md:py-12 border-b border-slate-200">
        <div className="container-custom">
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <Breadcrumbs items={breadcrumbs} className="mb-6" />
          )}

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-forja-navy mb-3">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Main Content with Sidebar Layout */}
      <div className="container-custom py-8 md:py-12">
        <div className="flex gap-8 lg:gap-12 relative">
          {/* Sidebar Navigation - Desktop Only */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block w-64 flex-shrink-0"
          >
            <nav 
              className="sticky top-24"
              aria-label="Navegación de secciones"
            >
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                En esta página
              </h2>
              <ul className="space-y-2">
                {anchors.map((anchor) => {
                  const isActive = activeAnchor === anchor.id

                  return (
                    <li key={anchor.id}>
                      <a
                        href={`#${anchor.id}`}
                        onClick={(e) => handleAnchorClick(e, anchor.id)}
                        className={cn(
                          'block py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200',
                          'hover:bg-slate-100',
                          'focus-visible:ring-2 focus-visible:ring-forja-fire focus-visible:ring-offset-2',
                          isActive
                            ? 'bg-forja-fire text-white shadow-md'
                            : 'text-slate-600 hover:text-forja-navy'
                        )}
                        aria-current={isActive ? 'location' : undefined}
                      >
                        {anchor.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </motion.aside>

          {/* Main Content */}
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex-1 min-w-0"
            id="main-content"
          >
            {children}
          </motion.main>

          {/* Sticky CTA - Desktop Sidebar */}
          <StickyCTA 
            label={cta.label}
            href={cta.href}
          />
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav 
        className="lg:hidden fixed bottom-20 left-0 right-0 z-30 bg-white border-t border-slate-200 shadow-lg overflow-x-auto scrollbar-hide"
        aria-label="Navegación móvil de secciones"
      >
        <div className="flex gap-2 px-4 py-3 min-w-max">
          {anchors.map((anchor) => {
            const isActive = activeAnchor === anchor.id

            return (
              <a
                key={anchor.id}
                href={`#${anchor.id}`}
                onClick={(e) => handleAnchorClick(e, anchor.id)}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200',
                  'focus-visible:ring-2 focus-visible:ring-forja-fire focus-visible:ring-offset-2',
                  isActive
                    ? 'bg-forja-fire text-white shadow-md'
                    : 'bg-slate-100 text-slate-600'
                )}
                aria-current={isActive ? 'location' : undefined}
              >
                {anchor.label}
              </a>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

