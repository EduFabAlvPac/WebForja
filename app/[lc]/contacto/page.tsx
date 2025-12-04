/**
 * FORJA DIGITAL - Página de Contacto Localizada
 * 
 * Página de contacto con contexto de país.
 * Muestra información de contacto localizada según el país.
 * 
 * @module app/[lc]/contacto/page
 */

import { Metadata } from 'next'
import Image from 'next/image'
import { Mail, Phone, MapPin, Clock, Search } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { ContactFormLocalized } from './_components/ContactFormLocalized'
import { getCountryByLocale, SUPPORTED_LOCALES, LocaleCode } from '@/lib/country'
import { ORG } from '@/lib/org'
import { notFound } from 'next/navigation'

interface PageProps {
  params: {
    lc: string
  }
}

// Generar rutas estáticas para todos los países
export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((lc) => ({ lc }))
}

// Metadata dinámica por país
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lc } = params
  
  if (!SUPPORTED_LOCALES.includes(lc as LocaleCode)) {
    return { title: 'No encontrado' }
  }

  const country = getCountryByLocale(lc)
  const countryName = country.name

  return {
    title: `Contacto en ${countryName} | Forja Digital`,
    description: `Contáctanos en ${countryName} para transformar tu empresa. Nuestro equipo de Forjadores está listo para ayudarte.`,
    keywords: `contacto, consultoría empresarial, transformación digital, ${countryName}, Forja Digital`,
    alternates: {
      canonical: `${ORG.baseUrl}/${lc}/contacto`,
      languages: {
        'es': `${ORG.baseUrl}/contacto`,
        'es-CO': `${ORG.baseUrl}/co/contacto`,
        'es-CL': `${ORG.baseUrl}/cl/contacto`,
        'es-PE': `${ORG.baseUrl}/pe/contacto`,
        'es-EC': `${ORG.baseUrl}/ec/contacto`,
        'x-default': `${ORG.baseUrl}/contacto`,
      },
    },
    openGraph: {
      title: `Contacto en ${countryName} | Forja Digital`,
      description: `Hablemos de la transformación de tu empresa en ${countryName}.`,
      type: 'website',
      url: `${ORG.baseUrl}/${lc}/contacto`,
    },
  }
}

// Información de contacto por país
const CONTACT_INFO: Record<LocaleCode, {
  location: string
  locationDetail: string
  phone: string
  timezone: string
  timezoneCode: string
}> = {
  co: {
    location: 'Bogotá, Colombia',
    locationDetail: 'Atención en todo Colombia',
    phone: '+57 310 335 0651',
    timezone: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    timezoneCode: 'COT (UTC-5)',
  },
  cl: {
    location: 'Santiago, Chile',
    locationDetail: 'Atención en todo Chile',
    phone: '+56 9 1234 5678',
    timezone: 'Lunes a Viernes: 9:00 AM - 6:00 PM',
    timezoneCode: 'CLT (UTC-3)',
  },
  pe: {
    location: 'Lima, Perú',
    locationDetail: 'Atención en todo Perú',
    phone: '+51 1 234 5678',
    timezone: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    timezoneCode: 'PET (UTC-5)',
  },
  ec: {
    location: 'Quito, Ecuador',
    locationDetail: 'Atención en todo Ecuador',
    phone: '+593 2 234 5678',
    timezone: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    timezoneCode: 'ECT (UTC-5)',
  },
  es: {
    location: 'Bogotá, Colombia',
    locationDetail: 'Atención en toda Latinoamérica',
    phone: '+57 310 335 0651',
    timezone: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    timezoneCode: 'COT (UTC-5)',
  },
}

export default function ContactoLocalePage({ params }: PageProps) {
  const { lc } = params

  // Validar locale
  if (!SUPPORTED_LOCALES.includes(lc as LocaleCode)) {
    notFound()
  }

  const country = getCountryByLocale(lc)
  const contactInfo = CONTACT_INFO[lc as LocaleCode] || CONTACT_INFO.co
  const whatsappNumber = country.whatsapp || '+573103350651'

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
          {/* Badge del país */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/30 shadow-lg mb-6">
            <div className="relative w-6 h-6 rounded-full overflow-hidden border border-white/50 flex-shrink-0">
              <Image
                src={`https://flagcdn.com/w80/${country.code}.png`}
                alt={`Bandera de ${country.name}`}
                fill
                className="object-cover"
                unoptimized
                sizes="24px"
              />
            </div>
            <span className="text-sm font-medium text-white">
              Servicio en {country.name}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Hablemos de tu <span className="text-forja-fire">Transformación</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Estamos listos para escucharte y ayudarte a forjar el futuro de tu empresa en {country.name}
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
                  Completa el formulario y un Forjador en {country.name} te contactará en menos de 24 horas.
                </p>
                
                <ContactFormLocalized locale={lc as LocaleCode} />
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
                          {contactInfo.location}<br />
                          {contactInfo.locationDetail}
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
                            href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} 
                            className="hover:text-forja-fire transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-forja-fire focus-visible:ring-offset-2 rounded"
                          >
                            {contactInfo.phone}
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
                            href="mailto:contacto@forjadigital.com" 
                            className="hover:text-forja-fire transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-forja-fire focus-visible:ring-offset-2 rounded"
                          >
                            contacto@forjadigital.com
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
                          {contactInfo.timezone}<br />
                          Zona horaria: {contactInfo.timezoneCode}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Box */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-card overflow-hidden">
                  <div className="bg-forja-navy px-6 py-4">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Search className="w-5 h-5 text-forja-fire" />
                      ¿Prefieres una Evaluación Rápida?
                    </h3>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-slate-600 mb-6">
                      Realiza nuestro diagnóstico <span className="font-semibold text-forja-navy">Rayos-X Empresarial</span> gratuito y obtén un reporte personalizado en minutos.
                    </p>
                    
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
                      href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(`Hola, me interesa el diagnóstico Rayos-X Empresarial gratuito para mi empresa en ${country.name}.`)}`}
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

