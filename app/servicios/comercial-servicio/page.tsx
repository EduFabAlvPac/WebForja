import { Metadata } from 'next'
import { ServicesSection } from '@/components/sections/ServicesSection'

export const metadata: Metadata = {
  title: 'Comercial y Servicio al Cliente | Forja Digital - AE',
  description: 'Ventas, CRM, Atención al Cliente y Fidelización.',
}

export default function ComercialServicioPage() {
  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]">
      <section className="bg-gradient-to-br from-brand-navy to-brand-purple py-20 text-white">
        <div className="container-custom text-center">
          <h1 className="text-h1-mobile md:text-h1-desktop mb-6">
            Comercial y <span className="text-brand-orange">Servicio</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Sistemas comerciales que convierten leads en clientes recurrentes y promotores de tu marca.
          </p>
        </div>
      </section>
      <ServicesSection />
    </div>
  )
}

