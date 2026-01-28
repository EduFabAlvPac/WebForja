'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Compass, Users, Rocket, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

/**
 * ThreePillarsSection - 3 Pilares de FORJA Digital
 * 
 * Features:
 * - Cards con colores distintivos (navy/teal/purple)
 * - Iconos lucide-react
 * - Grid 3 cols desktop / 1 móvil
 * - CTAs a servicios específicos
 * - Textos escaneables
 * - Animaciones sutiles
 */

interface Pillar {
  id: string
  icon: React.ElementType
  title: string
  subtitle: string
  description: string
  benefits: string[]
  cta: {
    text: string
    href: string
  }
  color: {
    bg: string
    text: string
    hover: string
    icon: string
    border: string
  }
}

const PILLARS: Pillar[] = [
  {
    id: 'estrategia',
    icon: Compass,
    title: 'Estrategia & Transformación',
    subtitle: 'Arquitectura que Impulsa',
    description: 'Diseñamos el blueprint estratégico que alinea tecnología, procesos y personas hacia objetivos medibles.',
    benefits: [
      'Arquitectura Estratégica',
      'Transformación Digital',
      'Roadmaps Ejecutables'
    ],
    cta: {
      text: 'Ver Servicios de Estrategia',
      href: '/servicios/estrategia-transformacion'
    },
    color: {
      bg: 'bg-forja-navy',
      text: 'text-white',
      hover: 'hover:bg-forja-navy-700',
      icon: 'text-forja-teal',
      border: 'border-forja-navy'
    }
  },
  {
    id: 'talento',
    icon: Users,
    title: 'Talento & Finanzas',
    subtitle: 'Capital que Potencia',
    description: 'Optimizamos tu capital humano y financiero para maximizar el ROI y construir equipos de alto rendimiento.',
    benefits: [
      'Gestión de Talento Estratégico',
      'Ingeniería Financiera',
      'KPIs y Métricas Clave'
    ],
    cta: {
      text: 'Ver Servicios de Talento',
      href: '/servicios/talento-finanzas'
    },
    color: {
      bg: 'bg-forja-teal',
      text: 'text-forja-navy',
      hover: 'hover:bg-cyan-400',
      icon: 'text-forja-navy',
      border: 'border-forja-teal'
    }
  },
  {
    id: 'operaciones',
    icon: Rocket,
    title: 'Comercial & Operaciones',
    subtitle: 'Ejecución que Escala',
    description: 'Transformamos tus procesos comerciales y operativos en motores de crecimiento sostenible y escalable.',
    benefits: [
      'Cadena de Suministros',
      'Motor Comercial de Alto Rendimiento',
      'Automatización Inteligente'
    ],
    cta: {
      text: 'Ver Servicios Operativos',
      href: '/servicios/comercial-operaciones'
    },
    color: {
      bg: 'bg-forja-purple',
      text: 'text-white',
      hover: 'hover:bg-purple-700',
      icon: 'text-forja-fire',
      border: 'border-forja-purple'
    }
  }
]

export function ThreePillarsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-white"
      aria-labelledby="pillars-heading"
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 
            id="pillars-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-forja-navy mb-4"
          >
            Nuestros <span className="text-forja-fire">3 Pilares</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Soluciones integrales que cubren toda la cadena de valor de tu empresa
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon
            
            return (
              <motion.article
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                className={`
                  ${pillar.color.bg} ${pillar.color.text}
                  rounded-2xl p-8 lg:p-10
                  shadow-xl hover:shadow-2xl
                  transition-all duration-300
                  hover:-translate-y-2
                  border-2 ${pillar.color.border}
                  flex flex-col
                `}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className={`
                    w-16 h-16 rounded-xl
                    ${pillar.id === 'talento' ? 'bg-white/20' : 'bg-white/10'}
                    backdrop-blur-sm
                    flex items-center justify-center
                  `}>
                    <Icon className={`w-8 h-8 ${pillar.color.icon}`} strokeWidth={2} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  {/* Title */}
                  <div>
                    <p className={`
                      text-sm font-semibold uppercase tracking-wider mb-2
                      ${pillar.id === 'talento' ? 'text-forja-navy/70' : 'text-white/70'}
                    `}>
                      {pillar.subtitle}
                    </p>
                    <h3 className="text-2xl lg:text-3xl font-bold leading-tight">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className={`
                    text-base leading-relaxed
                    ${pillar.id === 'talento' ? 'text-forja-navy/80' : 'text-white/90'}
                  `}>
                    {pillar.description}
                  </p>

                  {/* Benefits List */}
                  <ul className="space-y-2 pt-2">
                    {pillar.benefits.map((benefit, idx) => (
                      <li 
                        key={idx}
                        className="flex items-start gap-2"
                      >
                        <ArrowRight className={`
                          w-5 h-5 flex-shrink-0 mt-0.5
                          ${pillar.color.icon}
                        `} />
                        <span className={`
                          text-sm font-medium
                          ${pillar.id === 'talento' ? 'text-forja-navy' : 'text-white'}
                        `}>
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-white/20">
                  <Button
                    variant="outline"
                    size="lg"
                    className={`
                      w-full
                      ${pillar.id === 'talento' 
                        ? 'bg-forja-navy text-white border-forja-navy hover:bg-forja-navy-700' 
                        : 'bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20'
                      }
                      font-semibold
                      transition-all duration-300
                    `}
                    asChild
                  >
                    <Link href={pillar.cta.href} className="flex items-center justify-center gap-2">
                      <span>{pillar.cta.text}</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-slate-600 mb-4">
            ¿No sabes por dónde empezar?
          </p>
          <Button
            variant="primary"
            size="lg"
            asChild
          >
            <Link href="/contacto" className="inline-flex items-center gap-2">
              <Compass className="w-5 h-5" />
              <span>Solicita tu Diagnóstico Gratuito</span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

