import { Metadata } from 'next'
import { ServicesSection } from '@/components/sections/ServicesSection'

export const metadata: Metadata = {
  title: 'Ingeniería Financiera | Forja Digital - AE',
  description: 'Planeación, Análisis, Control de Impuestos y Pricing estratégico.',
}

export default function FinanzasPage() {
  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]">
      <section className="bg-gradient-to-br from-brand-navy to-brand-turquoise py-20 text-white">
        <div className="container-custom text-center">
          <h1 className="text-h1-mobile md:text-h1-desktop mb-6">
            Ingeniería <span className="text-brand-orange">Financiera</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Finanzas que financian el crecimiento, no que lo frenan. Estrategias para la rentabilidad.
          </p>
        </div>
      </section>
      <ServicesSection />
    </div>
  )
}

