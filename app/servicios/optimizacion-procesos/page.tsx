import { Metadata } from 'next'
import { ServicesSection } from '@/components/sections/ServicesSection'

export const metadata: Metadata = {
  title: 'Optimización de Procesos | Forja Digital - AE',
  description: 'Rediseñamos y automatizamos tus procesos para maximizar eficiencia.',
}

export default function OptimizacionProcesosPage() {
  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]">
      <section className="bg-gradient-to-br from-brand-navy to-brand-turquoise py-20 text-white">
        <div className="container-custom text-center">
          <h1 className="text-h1-mobile md:text-h1-desktop mb-6">
            Optimización de <span className="text-brand-orange">Procesos</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Automatización inteligente y reingeniería de procesos para una operación ágil y escalable.
          </p>
        </div>
      </section>
      <ServicesSection />
    </div>
  )
}

