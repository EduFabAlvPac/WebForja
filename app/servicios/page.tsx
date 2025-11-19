import { Metadata } from 'next'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { ServiceCard } from '@/components/shared/ServiceCard'
import { SERVICES } from '@/lib/constants/services'

export const metadata: Metadata = {
  title: 'Servicios | Forja Digital - AE',
  description: 'Servicios de transformación digital, arquitectura empresarial, desarrollo de software y consultoría para PYMEs.',
}

export default function ServiciosPage() {
  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container-custom text-center">
          <h1 className="text-h1-mobile md:text-h1-desktop text-white mb-6">
            Nuestros <span className="text-brand-orange">Servicios</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Soluciones integrales de transformación digital diseñadas para impulsar el crecimiento de tu empresa
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <ScrollReveal
                key={service.id}
                delay={index * 0.1}
                direction="up"
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.shortDescription}
                  href={service.href}
                  color={service.color}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-brand-navy to-brand-purple rounded-card p-12 text-center">
            <h2 className="text-h2-mobile md:text-h2-desktop text-white mb-6">
              ¿No estás seguro por dónde empezar?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Realiza nuestro diagnóstico gratuito y recibe recomendaciones personalizadas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/rayos-x-empresarial"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-orange text-white font-semibold rounded-button hover:bg-brand-orange-dark transition-all transform hover:scale-105 shadow-glow-orange"
              >
                🔍 Rayos X Empresarial Gratuito
              </a>
              <a
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-navy font-semibold rounded-button hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Habla con un Experto
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

