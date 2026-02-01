'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Search, Target, Zap, BarChart3, Heart, Check, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export interface MetodologiaPhase {
  number: string
  title: string
  tagline: string
  description: string
  details: string[]
  deliverables: string[]
  duration: string
  icon: React.ElementType
  color: {
    bg: string
    text: string
    border: string
    gradient: string
  }
}

export interface MetodologiaForjaProps {
  currentPhase?: number
  className?: string
}

const phases: MetodologiaPhase[] = [
  {
    number: '01',
    title: 'Fijar',
    tagline: 'Identificación situación actual y brechas contra el mercado',
    description: 'Realizamos un diagnóstico profundo de tu arquitectura actual: estrategia, procesos, tecnología, talento y finanzas. Identificamos brechas críticas y oportunidades de alto impacto.',
    details: [
      'Matriz de Madurez',
      'Inventario Tecnológico',
      'Mapa de procesos VSM',
      'Reporte de Brechas Estratégicas',
    ],
    deliverables: [
      'Matriz de Madurez',
      'Inventario Tecnológico',
      'Mapa de procesos VSM',
      'Reporte de Brechas',
    ],
    duration: '2-3 semanas',
    icon: Search,
    color: {
      bg: 'bg-cyan-50',
      text: 'text-cyan-700',
      border: 'border-cyan-200',
      gradient: 'from-cyan-400 to-cyan-600',
    },
  },
  {
    number: '02',
    title: 'Orientar',
    tagline: 'Estrategia Clara, Ejecución Efectiva',
    description: 'Co-diseñamos el blueprint estratégico que integra la visión de negocio con capacidades tecnológicas y operacionales. Definimos roadmap, presupuestos e indicadores de éxito.',
    details: [
      'Arquitectura Empresarial TO-BE (estado deseado)',
      'Roadmap de Transformación (3-12 meses)',
      'Business Case & ROI Proyectado',
      'Plan de Cambio Organizacional',
    ],
    deliverables: [
      'Arquitectura TO-BE',
      'Roadmap de Transformación',
      'Business Case & ROI',
      'Plan de Cambio',
    ],
    duration: '3-4 semanas',
    icon: Target,
    color: {
      bg: 'bg-purple-50',
      text: 'text-purple-700',
      border: 'border-purple-200',
      gradient: 'from-purple-400 to-purple-600',
    },
  },
  {
    number: '03',
    title: 'Rediseñar',
    tagline: 'Transformación en Acción',
    description: 'Ejecutamos el plan: optimizamos procesos, implementamos tecnología, capacitamos equipos y establecemos nuevas estructuras de gobierno. Todo con gestión de cambio integrada.',
    details: [
      'Procesos Rediseñados & Automatizados',
      'Tecnología Implementada & Configurada',
      'Equipo Capacitado & Certificado',
      'Documentación de Procedimientos',
    ],
    deliverables: [
      'Procesos Rediseñados',
      'Tecnología Implementada',
      'Equipo Capacitado',
      'Documentación',
    ],
    duration: '8-12 semanas',
    icon: Zap,
    color: {
      bg: 'bg-orange-50',
      text: 'text-orange-700',
      border: 'border-orange-200',
      gradient: 'from-orange-400 to-orange-600',
    },
  },
  {
    number: '04',
    title: 'Justificar',
    tagline: 'Los Números No Mienten',
    description: 'Medimos el impacto real de la transformación con KPIs objetivos. Calculamos ROI, eficiencias ganadas y valor creado. Transparencia total en resultados.',
    details: [
      'Dashboard de Indicadores de Negocio',
      'Informe de ROI & Value Realization',
      'Benchmarking vs Estado Inicial',
      'Lecciones Aprendidas & Quick Wins',
    ],
    deliverables: [
      'Dashboard de Indicadores',
      'Informe de ROI',
      'Benchmarking',
      'Lecciones Aprendidas',
    ],
    duration: '2-3 semanas',
    icon: BarChart3,
    color: {
      bg: 'bg-green-50',
      text: 'text-green-700',
      border: 'border-green-200',
      gradient: 'from-green-400 to-green-600',
    },
  },
  {
    number: '05',
    title: 'Acompañar',
    tagline: 'El Cambio se Sostiene con Acompañamiento',
    description: 'No te dejamos solo. Hacemos seguimiento continuo, ajustamos lo necesario y te acompañamos en la evolución. Soporte estratégico permanente.',
    details: [
      'Sesiones Mensuales de Revisión Estratégica',
      'Soporte Técnico & Resolución de Incidencias',
      'Optimizaciones & Mejoras Continuas',
      'Actualización de Roadmap Evolutivo',
    ],
    deliverables: [
      'Sesiones Mensuales',
      'Soporte Técnico',
      'Optimizaciones',
      'Roadmap Evolutivo',
    ],
    duration: 'Recurrente (6-12 meses+)',
    icon: Heart,
    color: {
      bg: 'bg-red-50',
      text: 'text-red-700',
      border: 'border-red-200',
      gradient: 'from-red-400 to-red-600',
    },
  },
]

export function MetodologiaForja({ currentPhase, className }: MetodologiaForjaProps) {
  const [expandedPhase, setExpandedPhase] = React.useState<number | null>(
    currentPhase !== undefined ? currentPhase - 1 : null
  )

  const togglePhase = (index: number) => {
    setExpandedPhase(expandedPhase === index ? null : index)
  }

  return (
    <div className={cn('w-full space-y-4', className)}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <Badge variant="default" className="mb-4 bg-forja-fire/10 text-forja-fire border-forja-fire/20">
          NUESTRO MÉTODO PROBADO
        </Badge>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-forja-navy mb-2">
          Metodología <span className="text-forja-fire">FORJA®</span>
        </h2>
        <p className="text-lg text-forja-teal font-semibold mb-2">
          El Sistema de 5 Fases que Elimina el Caos Digital
        </p>
        <p className="text-sm text-slate-600 max-w-3xl mx-auto">
          <strong>+150 empresas transformadas</strong> en <strong>2 países</strong> han transformado su operación con este framework arquitectónico.
          No improvisamos: cada fase tiene <strong>entregables concretos</strong>, métricas claras y decisiones basadas en datos.
        </p>
      </motion.div>

      {/* Phases Accordion */}
      <div className="space-y-3">
        {phases.map((phase, index) => {
          const isExpanded = expandedPhase === index
          const isCompleted = currentPhase !== undefined && index < currentPhase - 1
          const isCurrent = currentPhase !== undefined && index === currentPhase - 1
          const Icon = phase.icon

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className={cn(
                  'overflow-hidden transition-all duration-300 cursor-pointer',
                  isExpanded && 'ring-2 ring-offset-2',
                  isCurrent && 'ring-2 ring-forja-fire ring-offset-2',
                  isCompleted && 'opacity-75',
                  phase.color.border,
                  isExpanded && `ring-${phase.color.border.split('-')[1]}-400`
                )}
                onClick={() => togglePhase(index)}
              >
                {/* Phase Header */}
                <div className={cn('p-6', phase.color.bg)}>
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <motion.div
                      className={cn(
                        'flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center',
                        `bg-gradient-to-br ${phase.color.gradient}`,
                        'text-white shadow-lg'
                      )}
                      whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      {isCompleted ? (
                        <Check className="w-8 h-8" strokeWidth={3} />
                      ) : (
                        <Icon className="w-8 h-8" strokeWidth={2} />
                      )}
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <span className={cn('text-2xl font-bold', phase.color.text)}>
                              {phase.number}
                            </span>
                            <h3 className="text-xl md:text-2xl font-heading font-bold text-forja-navy">
                              {phase.title}
                            </h3>
                            {isCurrent && (
                              <Badge variant="default" className="bg-forja-fire text-white text-xs">
                                En Progreso
                              </Badge>
                            )}
                            {isCompleted && (
                              <Badge variant="default" className="bg-green-500 text-white text-xs">
                                Completado
                              </Badge>
                            )}
                          </div>
                          <p className={cn('text-sm md:text-base font-semibold mb-2', phase.color.text)}>
                            {phase.tagline}
                          </p>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            {phase.description}
                          </p>
                        </div>

                        {/* Expand Icon */}
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          <ChevronDown className={cn('w-6 h-6', phase.color.text)} />
                        </motion.div>
                      </div>

                      {/* Duration Badge */}
                      <div className="flex items-center gap-2 mt-3">
                        <Clock className={cn('w-4 h-4', phase.color.text)} />
                        <span className={cn('text-sm font-semibold', phase.color.text)}>
                          {phase.duration}
                        </span>
                        <span className="text-slate-400">·</span>
                        <span className="text-sm text-slate-600">
                          {phase.deliverables.length} Entregables
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 bg-white border-t-2 border-slate-100">
                        {/* Details */}
                        <div className="mb-6">
                          <h4 className="text-sm font-bold text-forja-navy uppercase tracking-wider mb-3 flex items-center gap-2">
                            <span className={cn('w-2 h-2 rounded-full', `bg-gradient-to-br ${phase.color.gradient}`)} />
                            Entregables ({phase.deliverables.length})
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {phase.details.map((detail, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                              >
                                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                                <span className="text-sm text-slate-700 leading-relaxed">{detail}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* CTA */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className={cn(
                            'p-4 rounded-lg border-2',
                            phase.color.bg,
                            phase.color.border
                          )}
                        >
                          <p className="text-sm text-slate-700">
                            <strong className={phase.color.text}>¿Quieres ver esta fase aplicada a tu empresa?</strong>
                            {' '}Solicita una Sesión Estratégica de 30 minutos donde analizamos tu situación actual y te mostramos cómo FORJA® se adapta a tu contexto específico.
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-8"
      >
        <Card className="p-8 md:p-10 bg-gradient-to-br from-forja-navy via-forja-purple to-forja-navy text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-forja-fire/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-forja-teal/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-white">
              ¿Quieres Ver Esta Metodología Aplicada a Tu Empresa?
            </h3>
            <p className="text-base md:text-lg text-white/90 mb-6 leading-relaxed">
              Solicita una{' '}
              <span className="text-forja-fire font-bold">Sesión Estratégica de 30 minutos</span>{' '}
              donde analizamos tu situación actual y te mostramos cómo{' '}
              <span className="text-forja-teal font-bold">FORJA®</span>{' '}
              se adapta a tu contexto específico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-forja-navy font-bold text-lg rounded-xl hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl"
              >
                Agendar Sesión Estratégica GRATIS
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-forja-navy transition-all"
              >
                Descargar Metodología (PDF)
              </motion.button>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}

