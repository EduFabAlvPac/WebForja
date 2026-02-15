/**
 * FORJA DIGITAL - Talento & Finanzas Localizada
 * 
 * @module app/[lc]/servicios/talento-finanzas/page
 */

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { ArrowRight, Users, DollarSign, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/shared/SectionHeader'

const colorClasses = {
  purple: {
    gradient: 'from-purple-400 to-purple-600',
    text: 'text-purple-500',
  },
  green: {
    gradient: 'from-green-400 to-green-600',
    text: 'text-green-500',
  },
}

export default function TalentoFinanzasLocalePage() {
  const params = useParams()
  const lc = params.lc as string
  
  const localizedLink = (path: string) => `/${lc}${path}`

  const services = [
    {
      icon: Users,
      title: 'Gestión de Talento Estratégico',
      description: 'Transformamos tu capital humano en ventaja competitiva sostenible mediante estrategias de atracción, desarrollo y retención del talento.',
      href: localizedLink('/servicios/talento-finanzas/gestion-talento-estrategico'),
      highlights: [
        'Diseño organizacional y estructura de roles',
        'Gestión del desempeño y compensación',
        'Programas de desarrollo de liderazgo',
        'Cultura organizacional y engagement',
      ],
      color: 'purple' as const
    },
    {
      icon: DollarSign,
      title: 'Ingeniería Financiera',
      description: 'Optimizamos tu estructura financiera para maximizar el valor empresarial con estrategias de financiamiento, control y análisis.',
      href: localizedLink('/servicios/talento-finanzas/ingenieria-financiera'),
      highlights: [
        'Planeación financiera y presupuestos',
        'Control de costos y rentabilidad',
        'Estructura de capital y financiamiento',
        'Análisis de inversiones y valoración',
      ],
      color: 'green' as const
    },
  ]

  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy via-brand-purple to-brand-navy py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="w-full h-full"
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 15, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop"
              alt="Equipo de talento y finanzas colaborando"
              fill
              className="object-cover"
              quality={90}
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-purple/80 to-brand-navy/90" />
        </div>
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-brand-orange/20 border border-brand-orange rounded-full mb-6"
          >
            <span className="text-brand-orange font-bold text-sm uppercase tracking-wider">
              Categoría de Servicios
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Talento & <span className="text-brand-orange">Finanzas</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto mb-8"
          >
            Gestionamos de forma integrada tu capital humano y recursos financieros para maximizar el valor
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-white/70"
          >
            <Link href={localizedLink('/servicios')} className="hover:text-white transition-colors">
              Servicios
            </Link>
            <span>/</span>
            <span className="text-brand-orange">Talento & Finanzas</span>
          </motion.div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeader
            eyebrow="NUESTROS SERVICIOS"
            title="Servicios de Talento & Finanzas"
            highlight="Finanzas"
            description="Soluciones integrales para potenciar tu capital humano y financiero"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon
              const colors = colorClasses[service.color]
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={service.href}
                    className="group block bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-brand-orange/20 h-full"
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-brand-navy mb-4 group-hover:text-brand-orange transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-6">
                      {service.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-2 text-brand-orange font-semibold group-hover:gap-3 transition-all">
                      <span>Conocer más</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-navy to-brand-navy-dark">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para Potenciar tu Organización?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte
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
    </div>
  )
}

