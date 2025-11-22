'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown, Check, Clock, ArrowRight, MessageCircle, Search, Target, Hammer, BarChart3, Heart, Download } from 'lucide-react'

interface Entregable {
  text: string
}

interface TimelineStep {
  number: string
  icon: React.ElementType
  iconColor: string
  title: string
  tagline: string
  description: string
  entregables: Entregable[]
  duracion: string
  color: string
  bgColor: string
  borderColor: string
}

const TimelineStepCard = ({ step, index }: { step: TimelineStep; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      {/* Línea conectora (excepto último elemento) */}
      {index < 4 && (
        <div className="hidden lg:block absolute top-16 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-1 bg-gradient-to-r from-brand-turquoise to-brand-turquoise/30 z-0" />
      )}

      <div className="relative z-10 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-brand-turquoise/50 group h-full flex flex-col">
        {/* Header con número y título */}
        <div className={`relative p-6 ${step.bgColor} flex-grow`}>
          {/* Número circular con gradiente */}
          <div className="flex items-start gap-4 mb-4">
            <motion.div
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.4 }}
              className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-brand-turquoise to-brand-navy flex items-center justify-center shadow-lg"
            >
              <span className="text-2xl font-bold text-white">{step.number}</span>
            </motion.div>

            <div className="flex-1">
              <div className={`mb-2 ${step.iconColor}`}>
                <step.icon className="w-12 h-12" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy group-hover:text-brand-turquoise transition-colors">
                {step.title}
              </h3>
            </div>
          </div>

          {/* Tagline */}
          <p className={`text-lg font-bold ${step.color} mb-3`}>
            {step.tagline}
          </p>

          {/* Descripción */}
          <p className="text-gray-700 leading-relaxed mb-4">
            {step.description}
          </p>

          {/* Duración */}
          <div className="flex items-center gap-2 text-sm text-gray-600 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2 inline-flex">
            <Clock className="w-4 h-4 text-brand-orange" />
            <span className="font-semibold">{step.duracion}</span>
          </div>
        </div>

        {/* Entregables (acordeón) */}
        <div className="border-t-2 border-gray-100 mt-auto">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <span className="font-bold text-brand-navy flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              Entregables ({step.entregables.length})
            </span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-gray-600" />
            </motion.div>
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-2">
                  <ul className="space-y-3">
                    {step.entregables.map((entregable, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                            <Check className="w-3 h-3 text-green-600" strokeWidth={3} />
                          </div>
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {entregable.text}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Decorative gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-turquoise/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  )
}

export function MetodologiaSection() {
  const steps: TimelineStep[] = [
    {
      number: '01',
      icon: Search,
      iconColor: 'text-brand-turquoise',
      title: 'Fundamentar',
      tagline: 'No Puedes Mejorar lo que No Mides',
      description: 'Realizamos un diagnóstico profundo de tu arquitectura actual: estrategia, procesos, tecnología, talento y finanzas. Identificamos brechas críticas y oportunidades de alto impacto.',
      entregables: [
        { text: 'Matriz de Madurez Digital (6 dimensiones)' },
        { text: 'Mapa de Procesos Críticos' },
        { text: 'Inventario Tecnológico & Stack Audit' },
        { text: 'Reporte de Brechas Estratégicas' },
      ],
      duracion: '2-3 semanas',
      color: 'text-brand-turquoise',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-brand-turquoise',
    },
    {
      number: '02',
      icon: Target,
      iconColor: 'text-brand-purple',
      title: 'Orientar',
      tagline: 'Estrategia Clara, Ejecución Efectiva',
      description: 'Co-diseñamos el blueprint estratégico que integra tu visión de negocio con capacidades tecnológicas y operacionales. Definimos roadmap, presupuesto e indicadores de éxito.',
      entregables: [
        { text: 'Arquitectura Empresarial TO-BE (estado deseado)' },
        { text: 'Roadmap de Transformación (3-12 meses)' },
        { text: 'Business Case & ROI Proyectado' },
        { text: 'Plan de Cambio Organizacional' },
      ],
      duracion: '3-4 semanas',
      color: 'text-brand-purple',
      bgColor: 'bg-purple-50',
      borderColor: 'border-brand-purple',
    },
    {
      number: '03',
      icon: Hammer,
      iconColor: 'text-brand-orange',
      title: 'Rediseñar',
      tagline: 'Transformación en Acción',
      description: 'Ejecutamos el plan: optimizamos procesos, implementamos tecnología, capacitamos equipos y establecemos nuevas estructuras de gobierno. Todo con gestión de cambio integrada.',
      entregables: [
        { text: 'Procesos Rediseñados & Automatizados' },
        { text: 'Tecnología Implementada & Configurada' },
        { text: 'Equipo Capacitado & Certificado' },
        { text: 'Documentación de Procedimientos' },
      ],
      duracion: '8-12 semanas',
      color: 'text-brand-orange',
      bgColor: 'bg-orange-50',
      borderColor: 'border-brand-orange',
    },
    {
      number: '04',
      icon: BarChart3,
      iconColor: 'text-green-600',
      title: 'Justificar',
      tagline: 'Los Números No Mienten',
      description: 'Medimos el impacto real de la transformación con KPIs objetivos. Calculamos ROI, eficiencias ganadas y valor creado. Transparencia total en resultados.',
      entregables: [
        { text: 'Dashboard de Indicadores de Negocio' },
        { text: 'Informe de ROI & Value Realization' },
        { text: 'Benchmarking vs Estado Inicial' },
        { text: 'Lecciones Aprendidas & Quick Wins' },
      ],
      duracion: '2-3 semanas',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-600',
    },
    {
      number: '05',
      icon: Heart,
      iconColor: 'text-brand-coral',
      title: 'Acompañar',
      tagline: 'El Cambio se Sostiene con Acompañamiento',
      description: 'No te dejamos solo. Hacemos seguimiento continuo, ajustamos lo necesario y te acompañamos en la evolución. Soporte estratégico permanente.',
      entregables: [
        { text: 'Sesiones Mensuales de Revisión Estratégica' },
        { text: 'Soporte Técnico & Resolución de Incidencias' },
        { text: 'Optimizaciones & Mejoras Continuas' },
        { text: 'Actualización de Roadmap Evolutivo' },
      ],
      duracion: 'Recurrente (6-12 meses+)',
      color: 'text-brand-coral',
      bgColor: 'bg-red-50',
      borderColor: 'border-brand-coral',
    },
  ]

  return (
    <section id="metodologia" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-turquoise/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-orange font-bold text-sm uppercase tracking-wider mb-3"
          >
            NUESTRO MÉTODO PROBADO
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6 leading-tight"
          >
            Metodología <span className="text-brand-orange">FORJA®</span>
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-bold text-brand-turquoise mb-4"
          >
            El Sistema de 5 Fases que Elimina el Caos Digital
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Más de <strong>200 empresas en 8 países</strong> han transformado su operación con este framework arquitectónico. 
            No improvisamos: cada fase tiene <strong>entregables concretos</strong>, métricas claras y decisiones basadas en datos.
          </motion.p>
        </div>

        {/* Timeline - Grid responsive */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-4 items-stretch">
            {steps.map((step, index) => (
              <TimelineStepCard key={index} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* Línea conectora vertical en mobile */}
        <div className="lg:hidden max-w-3xl mx-auto mb-16">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-turquoise via-brand-purple to-brand-orange" />
          </div>
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-brand-navy to-brand-purple rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-turquoise/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                ¿Quieres Ver Esta Metodología Aplicada a Tu Empresa?
              </h3>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Solicita una <strong>Sesión Estratégica de 30 minutos</strong> donde analizamos tu situación actual 
                y te mostramos cómo FORJA se adapta a tu contexto específico.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block"
                >
                  <Link
                    href="/contacto?origen=metodologia"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-navy font-bold text-lg rounded-xl hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl group"
                  >
                    <MessageCircle className="w-6 h-6 text-brand-orange" />
                    Agenda tu Sesión Estratégica GRATIS
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block"
                >
                  <a
                    href="/documents/metodologia-forja.pdf"
                    download
                    className="inline-flex items-center gap-3 px-8 py-4 bg-brand-turquoise text-white font-bold text-lg rounded-xl hover:bg-brand-turquoise/90 transition-all shadow-xl hover:shadow-2xl group"
                  >
                    <Download className="w-6 h-6" />
                    Descargar Metodología (PDF)
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
