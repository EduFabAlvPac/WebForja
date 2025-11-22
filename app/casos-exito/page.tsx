import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Casos de Éxito | FORJA Digital',
  description: 'Conoce cómo empresas han transformado su competitividad con la metodología FORJA',
}

export default function CasosExitoPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-brand-turquoise hover:text-brand-turquoise/80 font-semibold mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver al Inicio
        </Link>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Casos de Éxito
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Conoce cómo más de 200 empresas en 8 países han transformado su competitividad con FORJA
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-12 border-2 border-brand-turquoise/20">
            <p className="text-lg text-gray-700 mb-6">
              🚧 Esta página está en construcción
            </p>
            <p className="text-gray-600">
              Pronto podrás explorar todos nuestros casos de éxito documentados con resultados medibles.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}


