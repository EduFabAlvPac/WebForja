'use client'

import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Shield, FileText, Cookie, Lock } from 'lucide-react'
import config from '@/lib/config'
import { LegalStamp } from '@/components/site/LegalStamp'
import { isServiceHrefDisabled, PROXIMAMENTE_LABEL } from '@/lib/constants/services-disabled'
import { useCountryOptional } from '@/context/CountryProvider'
import { SUPPORTED_LOCALES } from '@/lib/country'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const country = useCountryOptional()
  const locale = country?.locale || 'es'

  // Función para construir href con locale (sin prefijo para 'es')
  const getLocalizedHref = (href: string) => {
    if (locale === 'es' || !SUPPORTED_LOCALES.includes(locale as any)) {
      return href
    }
    return `/${locale}${href}`
  }

  const handleManageCookies = () => {
    // Eliminar el consentimiento guardado para que el banner vuelva a aparecer
    localStorage.removeItem('cookieConsent')
    // Recargar la página para mostrar el banner
    window.location.reload()
  }

  return (
    <footer className="bg-brand-navy text-white" role="contentinfo">
      {/* Sección Legal Destacada */}
      <div className="bg-brand-navy/50 border-b border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-brand-orange" />
              <span className="text-sm font-medium text-gray-300">
                Tu privacidad es importante para nosotros
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link 
                href={getLocalizedHref('/legal/politica-datos')}
                className="flex items-center gap-2 text-gray-300 hover:text-brand-orange transition-colors group"
              >
                <Shield className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>Política de Datos</span>
              </Link>
              <Link 
                href={getLocalizedHref('/legal/terminos')}
                className="flex items-center gap-2 text-gray-300 hover:text-brand-orange transition-colors group"
              >
                <FileText className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>Términos</span>
              </Link>
              <Link 
                href={getLocalizedHref('/legal/cookies')}
                className="flex items-center gap-2 text-gray-300 hover:text-brand-orange transition-colors group"
              >
                <Cookie className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>Cookies</span>
              </Link>
              <Link 
                href={getLocalizedHref('/legal/contratacion-facturacion')}
                className="flex items-center gap-2 text-gray-300 hover:text-brand-turquoise transition-colors group"
              >
                <Lock className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>Facturación</span>
              </Link>
              <button
                onClick={handleManageCookies}
                className="flex items-center gap-2 text-gray-300 hover:text-brand-turquoise transition-colors group"
                aria-label="Gestionar preferencias de cookies"
              >
                <Cookie className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>Gestionar Cookies</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Columna 1: Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">Forja Digital</span>
              <span className="text-brand-orange ml-2">- AE</span>
            </div>
            <p className="text-gray-300 mb-4">
              Transformando PYMEs latinoamericanas mediante arquitectura empresarial y estrategia digital.
            </p>
            <div className="flex gap-3">
              <a 
                href={config.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-brand-orange rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
              <a 
                href={config.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-brand-orange rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a 
                href={config.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-brand-orange rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" aria-hidden="true" />
              </a>
              <a 
                href={config.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-brand-orange rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Columna 2: Servicios */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><Link href={getLocalizedHref('/servicios/estrategia-transformacion/arquitectura-estrategica')} className="text-gray-300 hover:text-brand-orange transition-colors">Arquitectura Estratégica</Link></li>
              <li><Link href={getLocalizedHref('/servicios/estrategia-transformacion/transformacion-digital')} className="text-gray-300 hover:text-brand-orange transition-colors">Transformación Digital</Link></li>
              <li>
                {isServiceHrefDisabled('/servicios/talento-finanzas/gestion-talento-estrategico') ? (
                  <span className="text-gray-500 cursor-not-allowed" title={PROXIMAMENTE_LABEL}>Gestión de Talento <span className="text-xs">({PROXIMAMENTE_LABEL})</span></span>
                ) : (
                  <Link href={getLocalizedHref('/servicios/talento-finanzas/gestion-talento-estrategico')} className="text-gray-300 hover:text-brand-orange transition-colors">Gestión de Talento</Link>
                )}
              </li>
              <li>
                {isServiceHrefDisabled('/servicios/talento-finanzas/ingenieria-financiera') ? (
                  <span className="text-gray-500 cursor-not-allowed" title={PROXIMAMENTE_LABEL}>Gestión Financiera <span className="text-xs">({PROXIMAMENTE_LABEL})</span></span>
                ) : (
                  <Link href={getLocalizedHref('/servicios/talento-finanzas/ingenieria-financiera')} className="text-gray-300 hover:text-brand-orange transition-colors">Gestión Financiera</Link>
                )}
              </li>
              <li><Link href={getLocalizedHref('/servicios/comercial-operaciones/excelencia-operativa')} className="text-gray-300 hover:text-brand-orange transition-colors">Cadena de Suministros</Link></li>
            </ul>
          </div>

          {/* Columna 3: Empresa */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><Link href={getLocalizedHref('/nosotros')} className="text-gray-300 hover:text-brand-orange transition-colors">Sobre Nosotros</Link></li>
              <li><Link href={getLocalizedHref('/nosotros/equipo')} className="text-gray-300 hover:text-brand-orange transition-colors">Nuestro Equipo</Link></li>
              <li><Link href={getLocalizedHref('/nosotros/historia')} className="text-gray-300 hover:text-brand-orange transition-colors">Nuestra Historia</Link></li>
              <li><Link href={getLocalizedHref('/nosotros/testimonios')} className="text-gray-300 hover:text-brand-orange transition-colors">Casos de Éxito</Link></li>
              <li><Link href={getLocalizedHref('/interes')} className="text-gray-300 hover:text-brand-orange transition-colors">Recursos de Interés</Link></li>
              <li><Link href={getLocalizedHref('/contacto')} className="text-gray-300 hover:text-brand-orange transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-300">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0 text-brand-orange" aria-hidden="true" />
                <span>Bogotá, Colombia</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Phone className="h-5 w-5 flex-shrink-0 text-brand-orange" aria-hidden="true" />
                <a href={`tel:${config.contact.phone}`} className="hover:text-brand-orange transition-colors">
                  {config.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Mail className="h-5 w-5 flex-shrink-0 text-brand-orange" aria-hidden="true" />
                <a href={`mailto:${config.contact.email}`} className="hover:text-brand-orange transition-colors">
                  {config.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Certificaciones y Compliance */}
        <div className="border-t border-white/10 pt-8 pb-6">
          <div className="text-center mb-6">
            <h4 className="text-sm font-semibold text-gray-300 mb-4 flex items-center justify-center gap-2">
              <Shield className="h-4 w-4 text-brand-turquoise" />
              Certificaciones y Cumplimiento Legal
            </h4>
            <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-gray-400">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg">
                <Shield className="h-4 w-4 text-green-400" />
                <span>
                  <a 
                    href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-brand-orange transition-colors font-medium"
                  >
                    Ley 1581/2012
                  </a>
                  {' '}(Colombia)
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg">
                <Shield className="h-4 w-4 text-blue-400" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg">
                <Lock className="h-4 w-4 text-yellow-400" />
                <span>SSL/TLS Encryption</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg">
                <FileText className="h-4 w-4 text-purple-400" />
                <span>ISO 27001 Aligned</span>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="text-center md:text-left">
              <p className="mb-2">&copy; {currentYear} Forja Digital - AE. Todos los derechos reservados.</p>
              {/* Legal Stamp sutil - información de entidad legal */}
              <div className="mt-2">
                <LegalStamp compact className="text-gray-400" />
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-xs text-gray-500 mb-1">Diseñado y desarrollado con ❤️ en Colombia</p>
              <p className="text-xs text-gray-600">&quot;El futuro no se espera, se forja&quot; 🔨</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

