import { Metadata } from 'next'
import { ServicesSection } from '@/components/sections/ServicesSection'

export const metadata: Metadata = {
  title: 'Arquitectura Empresarial | Forja Digital - AE',
  description: 'Diseñamos el blueprint estratégico de tu organización alineando tecnología, procesos y personas.',
}

export default function ArquitecturaEmpresarialPage() {
  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]">
      <section className="bg-gradient-to-br from-brand-navy to-brand-purple py-20 text-white">
        <div className="container-custom text-center">
          <h1 className="text-h1-mobile md:text-h1-desktop mb-6">
            Arquitectura <span className="text-brand-orange">Empresarial</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Diseñamos el blueprint estratégico de tu organización alineando tecnología, procesos y personas.
          </p>
        </div>
      </section>
      <ServicesSection />
    </div>
  )
}

