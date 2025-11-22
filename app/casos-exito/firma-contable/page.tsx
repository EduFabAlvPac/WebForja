import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Briefcase } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Caso de Éxito: Firma Contable | FORJA Digital',
  description: '50% más clientes sin aumentar headcount y 40% aumento en EBITDA',
}

export default function FirmaContablePage() {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 bg-purple-50 border-purple-200 text-purple-600 text-sm font-semibold mb-6">
            <Briefcase className="w-4 h-4" />
            Servicios Profesionales
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            Firma Contable
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Bogotá, Colombia · 35 empleados
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-12 border-2 border-brand-turquoise/20">
            <p className="text-lg text-gray-700 mb-6">
              🚧 Caso de estudio completo en construcción
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Resultados destacados:</strong>
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✅ 50% más clientes sin aumentar headcount</li>
              <li>✅ 70% reducción en tareas administrativas</li>
              <li>✅ 85% retención de talento clave</li>
              <li>✅ EBITDA aumentó 40%</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}


