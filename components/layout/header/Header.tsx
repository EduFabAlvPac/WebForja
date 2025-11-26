'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Search } from 'lucide-react'
import { Navigation } from './Navigation'
import { MobileMenu } from './MobileMenu'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center">
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

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="outline"
              className="border-brand-turquoise text-brand-turquoise hover:bg-brand-turquoise hover:text-white gap-2"
              asChild
            >
              <Link href="/contacto">
                <Search className="h-4 w-4" />
                Rayos X
              </Link>
            </Button>
            <Button
              className="bg-brand-orange hover:bg-brand-orange-dark text-white shadow-glow-orange"
              asChild
            >
              <Link href="/contacto">Habla con Forjador</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden relative z-10 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-brand-navy" />
            ) : (
              <Menu className="h-6 w-6 text-brand-navy" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
        )}
      </AnimatePresence>
    </motion.header>
  )
}

