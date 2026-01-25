'use client'

import { useState, useEffect, useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Search } from 'lucide-react'
import { Navigation } from './Navigation'
import { MobileMenu } from './MobileMenu'
import { Button } from '@/components/ui/button'
import { CountrySwitcher } from '@/components/country/CountrySwitcher'
import { SUPPORTED_LOCALES } from '@/lib/country'

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Obtener el locale actual del pathname
  const currentLocale = useMemo(() => {
    const firstSegment = pathname.split('/')[1]
    if (SUPPORTED_LOCALES.includes(firstSegment as any)) {
      return firstSegment
    }
    return null // Internacional
  }, [pathname])

  // Función para construir href con locale
  const getLocalizedHref = (href: string) => {
    if (!currentLocale) return href
    if (href.startsWith(`/${currentLocale}`)) return href
    return `/${currentLocale}${href}`
  }

  // URL del home según el locale actual
  const homeUrl = currentLocale ? `/${currentLocale}` : '/'
  const ctaLabel = currentLocale === 'co' ? 'Habla con un Forjador' : 'Habla con Forjador'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cerrar menú móvil con tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMobileMenuOpen])

  // Prevenir scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <motion.header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-[var(--z-header)] transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-md backdrop-blur-sm bg-opacity-95' 
            : 'bg-white shadow-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-[var(--header-height-mobile)] md:h-[var(--header-height-desktop)]">
            {/* Logo - Lleva al home del país actual */}
            <Link href={homeUrl} className="relative z-10 flex items-center">
              <Image
                src="/logo-color.png"
                alt="Forja Digital AE"
                width={260}
                height={87}
                className="h-14 md:h-16 lg:h-18 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <Navigation className="hidden lg:flex" />

            {/* Desktop Actions: CTAs + Country Switcher */}
            <div className="hidden lg:flex items-center gap-3">
              {/* CTAs */}
              <Button
                variant="outline"
                className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white gap-2 font-semibold"
                asChild
              >
                <Link href={getLocalizedHref('/contacto')}>
                  <Search className="h-4 w-4" />
                  Rayos X
                </Link>
              </Button>
              <Button
                className="bg-brand-orange hover:bg-brand-orange-dark text-white shadow-glow-orange"
                asChild
              >
                <Link href={getLocalizedHref('/contacto')}>{ctaLabel}</Link>
              </Button>
              
              {/* Country Switcher - Después del botón naranja */}
              <CountrySwitcher />
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden relative z-[1010] p-2 -mr-2 touch-manipulation"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-brand-navy" />
              ) : (
                <Menu className="h-6 w-6 text-brand-navy" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu - FUERA del header para evitar problemas de stacking context */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
        )}
      </AnimatePresence>
    </>
  )
}

