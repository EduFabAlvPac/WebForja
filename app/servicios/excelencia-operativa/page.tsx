import { Metadata } from 'next'
import { ServicesSection } from '@/components/sections/ServicesSection'

export const metadata: Metadata = {
  title: 'Excelencia Operativa Lean | Forja Digital - AE',
  description: 'BPM, Automatización y Mejora Continua de procesos.',
}

export default function ExcelenciaOperativaPage() {
  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]">
      <section className="bg-gradient-to-br from-brand-navy to-brand-orange py-20 text-white">
        <div className="container-custom text-center">
          <h1 className="text-h1-mobile md:text-h1-desktop mb-6">
            Excelencia <span className="text-brand-turquoise">Operativa</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Procesos eficientes que liberan recursos para crecer. Reducimos desperdicios y maximizamos valor.
          </p>
        </div>
      </section>
      <ServicesSection />
    </div>
  )
}

