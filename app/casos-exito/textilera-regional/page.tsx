import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Factory } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Caso de Éxito: Textilera Regional | FORJA Digital',
  description: '45% reducción en tiempo de entrega y 320% ROI en el primer año',
}

export default function TextileraRegionalPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <Link
          href="/#case-studies"
          className="inline-flex items-center gap-2 text-brand-turquoise hover:text-brand-turquoise/80 font-semibold mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver a Casos de Éxito
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 bg-blue-50 border-blue-200 text-blue-600 text-sm font-semibold mb-6">
            <Factory className="w-4 h-4" />
            Manufactura
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            Textilera Regional
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Medellín, Colombia · 85 empleados
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-12 border-2 border-brand-turquoise/20">
            <p className="text-lg text-gray-700 mb-6">
              🚧 Caso de estudio completo en construcción
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Resultados destacados:</strong>
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✅ 45% reducción en tiempo de entrega</li>
              <li>✅ 30% aumento en capacidad productiva</li>
              <li>✅ 60% menos errores de inventario</li>
              <li>✅ ROI de 320% en primer año</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}


