import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Recursos Gratuitos | FORJA Digital',
  description: 'Accede a guías, frameworks y herramientas de arquitectura empresarial sin costo',
}

export default function RecursosPage() {
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-orange/10 rounded-2xl mb-6">
            <BookOpen className="w-10 h-10 text-brand-orange" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Recursos Gratuitos
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Guías, frameworks y herramientas de arquitectura empresarial
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-12 border-2 border-brand-turquoise/20">
            <p className="text-lg text-gray-700 mb-6">
              🚧 Esta página está en construcción
            </p>
            <p className="text-gray-600 mb-8">
              Pronto podrás acceder a una biblioteca completa de recursos gratuitos:
            </p>
            <ul className="text-left max-w-2xl mx-auto space-y-3 text-gray-700">
              <li>📚 Guías de arquitectura empresarial</li>
              <li>🎯 Frameworks de transformación digital</li>
              <li>📊 Plantillas y herramientas descargables</li>
              <li>🎓 Webinars y videos educativos</li>
              <li>📄 Whitepapers y casos de estudio</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}


