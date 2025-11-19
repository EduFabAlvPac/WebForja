'use client'

import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-navy text-white">
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
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-brand-orange rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-brand-orange rounded-full flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-brand-orange rounded-full flex items-center justify-center transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-brand-orange rounded-full flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5" />
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
              <li><Link href="/nosotros#equipo" className="text-gray-300 hover:text-brand-orange transition-colors">Nuestro Equipo</Link></li>
              <li><Link href="/nosotros#metodologia" className="text-gray-300 hover:text-brand-orange transition-colors">Metodología FORJA</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-brand-orange transition-colors">Blog</Link></li>
              <li><Link href="/contacto" className="text-gray-300 hover:text-brand-orange transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-300">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0 text-brand-orange" />
                <span>Bogotá, Colombia</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Phone className="h-5 w-5 flex-shrink-0 text-brand-orange" />
                <a href="tel:+573001234567" className="hover:text-brand-orange transition-colors">
                  +57 300 123 4567
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Mail className="h-5 w-5 flex-shrink-0 text-brand-orange" />
                <a href="mailto:info@forjadigital.co" className="hover:text-brand-orange transition-colors">
                  info@forjadigital.co
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {currentYear} Forja Digital - AE. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <Link href="/privacidad" className="hover:text-brand-orange transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="hover:text-brand-orange transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

