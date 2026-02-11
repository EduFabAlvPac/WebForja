import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Target, Users, TrendingUp, Building2, Leaf, Settings, DollarSign, Cpu, Database, Rocket, Heart } from 'lucide-react'
import { MetodologiaForja } from '@/components/ui/metodologia-forja'
import { isCategoryDisabled, PROXIMAMENTE_LABEL } from '@/lib/constants/services-disabled'

export const metadata: Metadata = {
  title: 'Servicios | Forja Digital - AE',
  description: 'Servicios de transformación empresarial: ADN Estratégico, Motor Operativo, Inteligencia Digital, Enfoque al Cliente.',
}

const SERVICE_CATEGORIES = [
  {
    id: 'adn-estrategico',
    title: 'ADN Estratégico',
    description: 'Arquitectura de Negocio: Definimos la esencia estratégica de tu organización para construir un futuro sostenible.',
    icon: Target,
    color: 'from-blue-500 to-cyan-500',
    href: '/servicios/adn-estrategico',
    services: [
      'Estrategia',
      'Gobierno',
      'Sostenibilidad'
    ]
  },
  {
    id: 'motor-operativo',
    title: 'Motor Operativo',
    description: 'Arquitectura de Procesos: Optimizamos operaciones, finanzas y talento para maximizar la eficiencia y el rendimiento.',
    icon: Settings,
    color: 'from-purple-500 to-pink-500',
    href: '/servicios/motor-operativo',
    services: [
      'Operaciones (Supply Chain)',
      'Finanzas',
      'Talento'
    ]
  },
  {
    id: 'inteligencia-digital',
    title: 'Inteligencia Digital',
    description: 'Arquitectura de Capacidades Digitales: Potenciamos tu organización con tecnología, datos e innovación ágil.',
    icon: Cpu,
    color: 'from-indigo-500 to-purple-500',
    href: '/servicios/inteligencia-digital',
    services: [
      'Estrategia Tecnológica',
      'Inteligencia de Datos',
      'Innovación y Agilidad'
    ]
  },
  {
    id: 'enfoque-cliente',
    title: 'Enfoque al Cliente',
    description: 'Arquitectura de Valor: Creamos experiencias excepcionales y estrategias comerciales que generan crecimiento sostenible.',
    icon: Heart,
    color: 'from-orange-500 to-red-500',
    href: '/servicios/enfoque-cliente',
    services: [
      'Experiencia del Cliente (CX)',
      'Comercial'
    ]
  }
]

export default function ServiciosPage() {
  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-purple to-brand-navy py-20 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
            alt="Profesionales trabajando en soluciones empresariales innovadoras"
            fill
            className="object-cover"
            quality={80}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-purple/80 to-brand-navy/90" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="hero-title text-white mb-6">
              Nuestros <span className="text-brand-orange">Servicios</span>
            </h1>
            <p className="hero-description text-white/90 mb-8">
              Soluciones integrales de transformación empresarial diseñadas para impulsar el crecimiento sostenible de tu organización
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICE_CATEGORIES.map((category, index) => {
              const Icon = category.icon
              const disabled = isCategoryDisabled(category.id)
              const card = (
                <div className={`bg-white rounded-3xl shadow-lg overflow-hidden h-full flex flex-col ${disabled ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group'}`}>
                  {/* Header with gradient */}
                  <div className={`bg-gradient-to-br ${category.color} p-8 text-white relative overflow-hidden ${disabled ? 'opacity-90' : ''}`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="relative z-10">
                      {disabled && (
                        <span className="inline-block text-xs font-bold bg-white/20 text-white px-3 py-1 rounded-full mb-3">
                          {PROXIMAMENTE_LABEL}
                        </span>
                      )}
                      <Icon className="w-12 h-12 mb-4" strokeWidth={2} />
                      <h2 className="text-2xl md:text-3xl font-bold mb-3">
                        {category.title}
                      </h2>
                      <p className="text-white/90 text-lg line-clamp-2">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Services List */}
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                      Servicios incluidos:
                    </h3>
                    <ul className="space-y-3 mb-6 flex-1">
                      {category.services.map((service, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 leading-relaxed">{service}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    {disabled ? (
                      <div className="flex items-center gap-2 text-gray-400 font-semibold">
                        <span>{PROXIMAMENTE_LABEL}</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-brand-orange font-semibold group-hover:gap-4 transition-all">
                        <span>Ver servicios</span>
                        <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                      </div>
                    )}
                  </div>
                </div>
              )
              return disabled ? (
                <div key={category.id}>{card}</div>
              ) : (
                <Link key={category.id} href={category.href} className="group">
                  {card}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Metodología FORJA® */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-8">
          <MetodologiaForja />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-gradient-to-br from-brand-navy to-brand-purple rounded-3xl p-12 md:p-16 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿No estás seguro por dónde empezar?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Agenda una consulta gratuita y recibe recomendaciones personalizadas para tu empresa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-orange text-white font-semibold rounded-xl hover:bg-brand-orange/90 transition-all transform hover:scale-105 shadow-lg"
              >
                Habla con un Experto
                <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
