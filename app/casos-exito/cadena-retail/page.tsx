import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ShoppingCart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Caso de Éxito: Cadena de Tiendas Especializadas | FORJA Digital',
  description: '120% crecimiento en ventas online y NPS de 42 a 78',
}

export default function CadenaRetailPage() {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 bg-orange-50 border-orange-200 text-orange-600 text-sm font-semibold mb-6">
            <ShoppingCart className="w-4 h-4" />
            Retail
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            Cadena de Tiendas Especializadas
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Cali, Colombia · 120 empleados · 8 tiendas
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-12 border-2 border-brand-turquoise/20">
            <p className="text-lg text-gray-700 mb-6">
              🚧 Caso de estudio completo en construcción
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Resultados destacados:</strong>
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✅ 120% crecimiento en ventas online</li>
              <li>✅ 35% aumento en ticket promedio</li>
              <li>✅ 90% visibilidad de inventario en tiempo real</li>
              <li>✅ NPS incrementó de 42 a 78</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}


