/**
 * FORJA DIGITAL - Página de Gracias Localizada
 * 
 * Página de confirmación después de enviar el formulario de contacto.
 * Incluye contexto de país para WhatsApp y enlaces localizados.
 * 
 * @module app/[lc]/gracias/page
 */

import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, MessageCircle, Calendar, ArrowRight, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getCountryByLocale, SUPPORTED_LOCALES, LocaleCode } from '@/lib/country'
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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lc } = params
  
  if (!SUPPORTED_LOCALES.includes(lc as LocaleCode)) {
    return { title: 'No encontrado' }
  }

  const country = getCountryByLocale(lc)

  return {
    title: `Gracias por Contactarnos | Forja Digital ${country.name}`,
    description: 'Hemos recibido tu mensaje. Te contactaremos pronto para ayudarte a transformar tu empresa.',
    robots: 'noindex, nofollow',
  }
}

export default function GraciasLocalePage({ params }: PageProps) {
  const { lc } = params

  // Validar locale
  if (!SUPPORTED_LOCALES.includes(lc as LocaleCode)) {
    notFound()
  }

  const country = getCountryByLocale(lc)
  const whatsappNumber = country.whatsapp || '+573103350651'
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(`Hola, acabo de enviar un formulario de contacto desde ${country.name} y me gustaría agendar una llamada.`)}`

  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)] min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container-custom py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-8">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>

          {/* Country Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6">
            <div className="relative w-5 h-5 rounded-full overflow-hidden border border-slate-300 flex-shrink-0">
              <Image
                src={`https://flagcdn.com/w80/${country.code}.png`}
                alt={`Bandera de ${country.name}`}
                fill
                className="object-cover"
                unoptimized
                sizes="20px"
              />
            </div>
            <span className="text-sm font-medium text-slate-700">
              {country.name}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-forja-navy mb-4">
            ¡Gracias por Contactarnos!
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-8">
            Hemos recibido tu mensaje. Un Forjador en {country.name} se pondrá en contacto contigo en las próximas <strong className="text-forja-navy">24 horas hábiles</strong>.
          </p>

          {/* Next Steps */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-card p-8 mb-8">
            <h2 className="text-xl font-bold text-forja-navy mb-6">
              ¿Qué sigue?
            </h2>

            <div className="space-y-4 text-left">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-forja-fire/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-forja-fire font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-forja-navy">Revisamos tu caso</h3>
                  <p className="text-slate-600 text-sm">Analizamos tu reto para asignarte al Forjador ideal en {country.name}.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-forja-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-forja-teal font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-forja-navy">Te contactamos</h3>
                  <p className="text-slate-600 text-sm">Te llamamos o escribimos para agendar una sesión de descubrimiento.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-forja-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-forja-purple font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-forja-navy">Diagnóstico gratuito</h3>
                  <p className="text-slate-600 text-sm">Realizamos un Rayos-X inicial sin costo para entender tu situación.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Escríbenos por WhatsApp</span>
            </a>

            <Button variant="secondary" size="lg" asChild className="py-4">
              <Link href={`/${lc}/servicios`} className="flex items-center justify-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>Explorar Servicios</span>
              </Link>
            </Button>
          </div>

          {/* Back to Home */}
          <Link
            href={`/${lc}`}
            className="inline-flex items-center gap-2 text-slate-500 hover:text-forja-navy transition-colors"
          >
            <Home className="h-4 w-4" />
            <span>Volver al Inicio</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

