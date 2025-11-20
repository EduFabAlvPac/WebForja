import { Metadata } from 'next'
import { ServicesSection } from '@/components/sections/ServicesSection'

export const metadata: Metadata = {
  title: 'Desarrollo de Software | Forja Digital - AE',
  description: 'Construimos soluciones tecnológicas escalables y de alto rendimiento.',
}

export default function DesarrolloSoftwarePage() {
  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]">
      <section className="bg-gradient-to-br from-brand-navy to-brand-orange py-20 text-white">
        <div className="container-custom text-center">
          <h1 className="text-h1-mobile md:text-h1-desktop mb-6">
            Desarrollo de <span className="text-brand-turquoise">Software</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Soluciones tecnológicas a medida, escalables y seguras para impulsar tu ventaja competitiva.
          </p>
        </div>
      </section>
      <ServicesSection />
    </div>
  )
}

