'use client'

import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Shield, FileText, Cookie } from 'lucide-react'
import config from '@/lib/config'

export function Footer() {
  const currentYear = new Date().getFullYear()

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
                href="/politica-privacidad" 
                className="flex items-center gap-2 text-gray-300 hover:text-brand-orange transition-colors group"
              >
                <Shield className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>Política de Privacidad</span>
              </Link>
              <Link 
                href="/terminos-condiciones" 
                className="flex items-center gap-2 text-gray-300 hover:text-brand-orange transition-colors group"
              >
                <FileText className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>Términos y Condiciones</span>
              </Link>
              <Link 
                href="/politica-cookies" 
                className="flex items-center gap-2 text-gray-300 hover:text-brand-orange transition-colors group"
              >
                <Cookie className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>Política de Cookies</span>
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
              <li><Link href="/servicios/arquitectura-empresarial" className="text-gray-300 hover:text-brand-orange transition-colors">Arquitectura Empresarial</Link></li>
              <li><Link href="/servicios/transformacion-digital" className="text-gray-300 hover:text-brand-orange transition-colors">Transformación Digital</Link></li>
              <li><Link href="/servicios/optimizacion-procesos" className="text-gray-300 hover:text-brand-orange transition-colors">Optimización de Procesos</Link></li>
              <li><Link href="/servicios/desarrollo-software" className="text-gray-300 hover:text-brand-orange transition-colors">Desarrollo de Software</Link></li>
              <li><Link href="/servicios/analitica-bi" className="text-gray-300 hover:text-brand-orange transition-colors">Analítica y BI</Link></li>
            </ul>
          </div>

          {/* Columna 3: Empresa */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><Link href="/nosotros" className="text-gray-300 hover:text-brand-orange transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="/nosotros/equipo" className="text-gray-300 hover:text-brand-orange transition-colors">Nuestro Equipo</Link></li>
              <li><Link href="/nosotros/historia" className="text-gray-300 hover:text-brand-orange transition-colors">Nuestra Historia</Link></li>
              <li><Link href="/casos-exito" className="text-gray-300 hover:text-brand-orange transition-colors">Casos de Éxito</Link></li>
              <li><Link href="/contacto" className="text-gray-300 hover:text-brand-orange transition-colors">Contacto</Link></li>
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

        {/* Línea divisoria */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="text-center md:text-left">
              <p className="mb-2">&copy; {currentYear} Forja Digital - AE. Todos los derechos reservados.</p>
              <p className="text-xs text-gray-500 flex items-center justify-center md:justify-start gap-2">
                <Shield className="h-3 w-3 text-brand-turquoise" />
                Cumplimiento con{' '}
                <a 
                  href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-brand-orange transition-colors underline font-medium"
                >
                  Ley 1581 de 2012
                </a>
                {' '}(Colombia)
              </p>
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

