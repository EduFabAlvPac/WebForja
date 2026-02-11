/**
 * FORJA DIGITAL - Página Servicios Localizada
 * 
 * Página principal de servicios con contexto de país.
 * 
 * @module app/[lc]/servicios/page
 */

import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Target, Users, TrendingUp, Building2, Leaf, Settings, DollarSign, Cpu, Database, Rocket, Heart } from 'lucide-react'
import { MetodologiaForja } from '@/components/ui/metodologia-forja'
import { isCategoryDisabled, PROXIMAMENTE_LABEL } from '@/lib/constants/services-disabled'

export const metadata: Metadata = {
  title: 'Servicios | Forja Digital - AE',
  description: 'Servicios de transformación empresarial: ADN Estratégico, Motor Operativo, Inteligencia Digital, Enfoque al Cliente.',
}

interface PageProps {
  params: { lc: string }
}

export default function ServiciosLocalePage({ params }: PageProps) {
  const { lc } = params
  
  const localizedLink = (path: string) => `/${lc}${path}`

  const SERVICE_CATEGORIES = [
    {
      id: 'adn-estrategico',
      title: 'ADN Estratégico',
      description: 'Arquitectura de Negocio: Definimos la esencia estratégica de tu organización para construir un futuro sostenible.',
      icon: Target,
      color: 'from-blue-500 to-cyan-500',
      href: localizedLink('/servicios/adn-estrategico'),
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
      href: localizedLink('/servicios/motor-operativo'),
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
      href: localizedLink('/servicios/inteligencia-digital'),
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
      href: localizedLink('/servicios/enfoque-cliente'),
      services: [
        'Experiencia del Cliente (CX)',
        'Comercial'
      ]
    }
  ]

  return (
    <main className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-purple to-brand-navy py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
            alt="Servicios de transformación empresarial"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block px-4 py-2 bg-brand-orange/20 text-brand-orange font-semibold rounded-full text-sm mb-6">
            NUESTROS SERVICIOS
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Arquitectura Empresarial para <span className="text-brand-orange">PYMEs</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Soluciones integrales que transforman tu empresa desde su núcleo, 
            optimizando procesos, potenciando talento y acelerando el crecimiento.
          </p>
        </div>
      </section>

      {/* Categorías de Servicios */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Modelo de Consultoría de <span className="text-brand-orange">4 Pilares</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada pilar está diseñado para abordar los desafíos específicos de tu organización
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICE_CATEGORIES.map((category) => {
              const Icon = category.icon
              const disabled = isCategoryDisabled(category.id)
              const card = (
                <div
                  className={
                    disabled
                      ? 'bg-white rounded-2xl p-8 shadow-lg border border-gray-100 opacity-70 cursor-not-allowed'
                      : 'group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-brand-orange/20'
                  }
                >
                  {disabled && (
                    <span className="inline-block text-xs font-bold bg-gray-200 text-gray-600 px-3 py-1 rounded-full mb-4">
                      {PROXIMAMENTE_LABEL}
                    </span>
                  )}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 ${disabled ? '' : 'group-hover:scale-110 transition-transform'}`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className={`text-2xl font-bold text-brand-navy mb-3 ${disabled ? 'text-gray-500' : 'group-hover:text-brand-orange transition-colors'}`}>
                    {category.title}
                  </h3>

                  <p className="text-gray-600 mb-6 line-clamp-2">{category.description}</p>

                  <ul className="space-y-2 mb-6">
                    {category.services.map((service) => (
                      <li key={service} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                        {service}
                      </li>
                    ))}
                  </ul>

                  {disabled ? (
                    <div className="flex items-center gap-2 text-gray-400 font-semibold">
                      <span>{PROXIMAMENTE_LABEL}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-brand-orange font-semibold group-hover:gap-3 transition-all">
                      <span>Explorar servicios</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              )
              return disabled ? (
                <div key={category.id}>{card}</div>
              ) : (
                <Link key={category.id} href={category.href} className="block group">
                  {card}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Metodología FORJA */}
      <MetodologiaForja />

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-navy to-brand-navy-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para Transformar tu Empresa?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos
          </p>
          <Link
            href={localizedLink('/contacto')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Agenda tu Consulta
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}

