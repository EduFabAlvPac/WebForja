'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Lock, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useCountryOptional } from '@/context/CountryProvider'
import { ORG } from '@/lib/org'
import { trackCTAClick, trackWhatsAppClick } from '@/lib/analytics'

interface StickyCTAProps {
  label: string
  href: string
  className?: string
  showLegalNote?: boolean  // Mostrar microleyenda legal
}

export function StickyCTA({ label, href, className, showLegalNote = false }: StickyCTAProps) {
  const country = useCountryOptional()
  
  const handleCTAClick = () => {
    trackCTAClick(label, 'sticky_cta', href)
  }
  
  const handleWhatsAppClick = () => {
    trackWhatsAppClick('sticky_cta', !!country?.country?.whatsapp)
  }
  
  return (
    <>
      {/* Desktop: Sidebar derecha sticky */}
      <motion.aside
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={cn('hidden lg:block sticky top-24 w-64 xl:w-72 h-fit', className)}
        aria-label="Call to action"
      >
        <div className="bg-gradient-to-br from-forja-navy via-forja-purple to-forja-navy rounded-2xl p-6 shadow-2xl border border-white/10">
          <div className="mb-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <Lock className="w-6 h-6 text-forja-fire" />
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-2">¿Listo para Transformar?</h3>
          <p className="text-sm text-white/80 mb-4">
            Comienza con un diagnóstico gratuito y descubre el potencial de tu empresa
          </p>

          <Button 
            variant="primary" 
            size="lg" 
            className="w-full bg-white text-forja-navy hover:bg-slate-100 shadow-xl" 
            asChild
          >
            <Link 
              href={href} 
              className="flex items-center justify-center gap-2"
              onClick={handleCTAClick}
            >
              <span className="font-bold">{label}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>

          <div className="mt-4 pt-4 border-t border-white/20">
            <div className="flex items-center gap-2 text-xs text-white/70">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Sin compromiso · 100% Gratis</span>
            </div>
            
            {/* Microleyenda Legal */}
            {showLegalNote && (
              <p 
                className="text-[10px] leading-tight text-white/50 mt-3 italic"
                style={{ fontSize: '10px', lineHeight: '1.3' }}
              >
                Servicio exportado desde {ORG.countryOfIncorporation}. 
                Contrato regido por ley colombiana.
              </p>
            )}
            
            {/* WhatsApp del país (si está disponible) */}
            {country?.country?.whatsapp && (
              <a
                href={`https://wa.me/${country.country.whatsapp.replace(/\s/g, '').replace(/\+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3 text-xs text-white/60 hover:text-white/90 transition-colors"
                title={`Contactar por WhatsApp ${country.country.flag}`}
                onClick={handleWhatsAppClick}
              >
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp {country.country.flag}
                </span>
              </a>
            )}
          </div>
        </div>
      </motion.aside>

      {/* Mobile: Bottom bar fixed */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-2xl safe-area-inset-bottom"
        aria-label="Call to action móvil"
      >
        <div className="container-custom py-3">
          <Button variant="primary" size="lg" className="w-full shadow-lg" asChild>
            <Link 
              href={href} 
              className="flex items-center justify-center gap-2"
              onClick={handleCTAClick}
            >
              <Lock className="w-5 h-5" />
              <span className="font-bold">{label}</span>
            </Link>
          </Button>
          
          {/* Microleyenda Legal móvil */}
          {showLegalNote && (
            <p 
              className="text-center text-[10px] leading-tight text-gray-500 mt-2 italic px-4"
              style={{ fontSize: '10px', lineHeight: '1.3' }}
            >
              Servicio exportado desde {ORG.countryOfIncorporation}. 
              Contrato regido por ley colombiana.
            </p>
          )}
        </div>
      </motion.div>

      {/* Spacer para móvil (más alto si hay legal note) */}
      <div className={cn("lg:hidden", showLegalNote ? "h-28" : "h-20")} aria-hidden="true" />
    </>
  )
}