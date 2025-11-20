import { Metadata } from 'next'
import { ServicesSection } from '@/components/sections/ServicesSection'

export const metadata: Metadata = {
  title: 'Analítica y BI | Forja Digital - AE',
  description: 'Convertimos tus datos en insights accionables para decisiones inteligentes.',
}

export default function AnaliticaBiPage() {
  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]">
      <section className="bg-gradient-to-br from-brand-navy to-brand-purple py-20 text-white">
        <div className="container-custom text-center">
          <h1 className="text-h1-mobile md:text-h1-desktop mb-6">
            Analítica y <span className="text-brand-orange">BI</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Transforma datos en decisiones estratégicas con dashboards inteligentes y análisis predictivo.
          </p>
        </div>
      </section>
      <ServicesSection />
    </div>
  )
}

