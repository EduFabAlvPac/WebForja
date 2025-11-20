import { Metadata } from 'next'
import { ServicesSection } from '@/components/sections/ServicesSection'

export const metadata: Metadata = {
  title: 'Gestión de Talento Humano | Forja Digital - AE',
  description: 'Desarrollo, Capacitación, Cultura Organizacional y alineación de equipos.',
}

export default function TalentoHumanoPage() {
  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]">
      <section className="bg-gradient-to-br from-brand-navy to-brand-purple py-20 text-white">
        <div className="container-custom text-center">
          <h1 className="text-h1-mobile md:text-h1-desktop mb-6">
            Gestión de <span className="text-brand-orange">Talento Humano</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Equipos alineados, productivos y comprometidos con la estrategia de tu organización.
          </p>
        </div>
      </section>
      <ServicesSection />
    </div>
  )
}

