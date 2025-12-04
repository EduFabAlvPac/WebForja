import { Metadata } from 'next'
import Image from 'next/image'
import { Mail, Phone, MapPin, Clock, Search } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { ContactForm } from './_components/contact-form'
import config from '@/lib/config'

export const metadata: Metadata = {
  title: 'Contacto | ForjaDigitalAE',
  description: 'Contáctanos para transformar tu empresa. Nuestro equipo de Forjadores está listo para ayudarte a alcanzar tus objetivos empresariales.',
  keywords: 'contacto, consultoría empresarial, transformación digital, ForjaDigitalAE',
  openGraph: {
    title: 'Contacto | ForjaDigitalAE',
    description: 'Hablemos de la transformación de tu empresa.',
    type: 'website',
  },
}

export default function ContactoPage() {
  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-forja-navy via-forja-purple to-forja-navy py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop"
            alt="Contacta con nuestro equipo de expertos"
            fill
            className="object-cover"
            quality={80}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forja-navy/90 via-forja-purple/80 to-forja-navy/90" />
        </div>
        
        <div className="container-custom text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Hablemos de tu <span className="text-forja-fire">Transformación</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Estamos listos para escucharte y ayudarte a forjar el futuro de tu empresa
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl shadow-card p-8">
                <h2 className="text-2xl font-bold text-forja-navy mb-2">
                  Cuéntanos tu Reto
                </h2>
                <p className="text-slate-600 mb-6">
                  Completa el formulario y un Forjador te contactará en menos de 24 horas.
                </p>
                
                <ContactForm />
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-forja-navy mb-6">
                    Información de Contacto
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-forja-fire/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-forja-fire" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-forja-navy mb-1">Ubicación</h3>
                        <p className="text-slate-600">
                          Bogotá, Colombia<br />
                          Atención en toda Latinoamérica
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-forja-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-forja-teal" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-forja-navy mb-1">Teléfono</h3>
                        <p className="text-slate-600">
                          <a 
                            href={`tel:${config.contact.phone}`} 
                            className="hover:text-forja-fire transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-forja-fire focus-visible:ring-offset-2 rounded"
                          >
                            {config.contact.phone}
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-forja-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-forja-purple" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-forja-navy mb-1">Email</h3>
                        <p className="text-slate-600">
                          <a 
                            href={`mailto:${config.contact.email}`} 
                            className="hover:text-forja-fire transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-forja-fire focus-visible:ring-offset-2 rounded"
                          >
                            {config.contact.email}
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-slate-600" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-forja-navy mb-1">Horario</h3>
                        <p className="text-slate-600">
                          Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                          Zona horaria: COT (UTC-5)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Box - Diseño homogéneo con el portal */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-card overflow-hidden">
                  {/* Header con acento */}
                  <div className="bg-forja-navy px-6 py-4">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Search className="w-5 h-5 text-forja-fire" />
                      ¿Prefieres una Evaluación Rápida?
                    </h3>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <p className="text-slate-600 mb-6">
                      Realiza nuestro diagnóstico <span className="font-semibold text-forja-navy">Rayos-X Empresarial</span> gratuito y obtén un reporte personalizado en minutos.
                    </p>
                    
                    {/* Benefits */}
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="w-5 h-5 rounded-full bg-forja-teal/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-forja-teal text-xs">✓</span>
                        </span>
                        100% gratuito, sin compromiso
                      </li>
                      <li className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="w-5 h-5 rounded-full bg-forja-teal/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-forja-teal text-xs">✓</span>
                        </span>
                        Resultados en menos de 15 minutos
                      </li>
                      <li className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="w-5 h-5 rounded-full bg-forja-teal/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-forja-teal text-xs">✓</span>
                        </span>
                        Recomendaciones personalizadas
                      </li>
                    </ul>
                    
                    <a
                      href={`https://wa.me/${config.contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hola, me interesa el diagnóstico Rayos-X Empresarial gratuito.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full bg-forja-fire hover:bg-forja-fire/90 text-white font-semibold py-3 px-6 rounded-xl transition-all hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-forja-fire focus-visible:ring-offset-2"
                    >
                      Solicitar Rayos-X Gratuito
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}

