import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, MessageCircle, Calendar, ArrowRight, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import config from '@/lib/config'

export const metadata: Metadata = {
  title: 'Gracias por Contactarnos | ForjaDigitalAE',
  description: 'Hemos recibido tu mensaje. Te contactaremos pronto para ayudarte a transformar tu empresa.',
  robots: 'noindex, nofollow', // No indexar página de agradecimiento
}

export default function GraciasPage() {
  const whatsappUrl = `https://wa.me/${config.contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hola, acabo de enviar un formulario de contacto y me gustaría agendar una llamada.')}`

  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)] min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container-custom py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-8">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-forja-navy mb-4">
            ¡Gracias por Contactarnos!
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-8">
            Hemos recibido tu mensaje. Un Forjador se pondrá en contacto contigo en las próximas <strong className="text-forja-navy">24 horas hábiles</strong>.
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
                  <p className="text-slate-600 text-sm">Analizamos tu reto para asignarte al Forjador ideal.</p>
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
              <Link href="/servicios" className="flex items-center justify-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>Explorar Servicios</span>
              </Link>
            </Button>
          </div>

          {/* Back to Home */}
          <Link
            href="/"
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

