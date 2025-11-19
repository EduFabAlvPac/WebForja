import { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export const metadata: Metadata = {
  title: 'Contacto | Forja Digital - AE',
  description: 'Contáctanos para iniciar tu transformación digital. Estamos en Bogotá, Colombia.',
}

export default function ContactoPage() {
  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container-custom text-center">
          <h1 className="text-h1-mobile md:text-h1-desktop text-white mb-6">
            Hablemos de tu <span className="text-brand-orange">Transformación</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Estamos listos para escucharte y ayudarte a forjar el futuro de tu empresa
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollReveal>
              <div className="bg-white rounded-card shadow-card p-8">
                <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nombre *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-button focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                        placeholder="Juan Pérez"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-button focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                        placeholder="juan@empresa.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Teléfono *</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-button focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                        placeholder="+57 300 123 4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Empresa</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-button focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                        placeholder="Mi Empresa S.A.S."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Servicio de Interés</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-button focus:ring-2 focus:ring-brand-orange focus:border-transparent">
                      <option>Selecciona un servicio</option>
                      <option>Arquitectura Empresarial</option>
                      <option>Transformación Digital</option>
                      <option>Optimización de Procesos</option>
                      <option>Desarrollo de Software</option>
                      <option>Analítica y BI</option>
                      <option>Change Management</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Mensaje *</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-button focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                      placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-3 rounded-button transition-colors shadow-glow-orange"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-brand-orange" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Dirección</h3>
                        <p className="text-gray-600">
                          Bogotá, Colombia<br />
                          Atención en toda Latinoamérica
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-turquoise/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-brand-turquoise" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Teléfono</h3>
                        <p className="text-gray-600">
                          <a href="tel:+573001234567" className="hover:text-brand-orange transition-colors">
                            +57 300 123 4567
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-brand-purple" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-gray-600">
                          <a href="mailto:info@forjadigital.co" className="hover:text-brand-orange transition-colors">
                            info@forjadigital.co
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-coral/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-brand-coral" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Horario</h3>
                        <p className="text-gray-600">
                          Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                          Zona horaria: COT (UTC-5)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Box */}
                <div className="bg-gradient-to-br from-brand-navy to-brand-purple rounded-card p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    ¿Prefieres una Evaluación Rápida?
                  </h3>
                  <p className="mb-6">
                    Realiza nuestro diagnóstico Rayos X Empresarial gratuito y obtén un reporte personalizado en minutos.
                  </p>
                  <a
                    href="/rayos-x-empresarial"
                    className="inline-flex items-center justify-center w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-3 rounded-button transition-colors shadow-glow-orange"
                  >
                    🔍 Iniciar Rayos X Gratuito
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}

