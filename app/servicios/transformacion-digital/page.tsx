import { Metadata } from 'next'
import { ServicesSection } from '@/components/sections/ServicesSection'

export const metadata: Metadata = {
  title: 'Transformación Digital | Forja Digital - AE',
  description: 'Acompañamos tu evolución digital desde la estrategia hasta la adopción cultural.',
}

export default function TransformacionDigitalPage() {
  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]">
      <section className="bg-gradient-to-br from-brand-navy to-brand-orange py-20 text-white">
        <div className="container-custom text-center">
          <h1 className="text-h1-mobile md:text-h1-desktop mb-6">
            Transformación <span className="text-brand-turquoise">Digital</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Acompañamos tu evolución digital desde la estrategia hasta la adopción cultural.
          </p>
        </div>
      </section>
      <ServicesSection />
    </div>
  )
}

