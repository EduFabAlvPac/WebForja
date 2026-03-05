'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown, ArrowRight, Leaf, Users, Scale, FileText } from 'lucide-react'
import { cn } from '@/lib/utils'

type RingId = 'E' | 'S' | 'G'

const ESG_DATA: Record<
  RingId,
  {
    label: string
    color: string
    icon: typeof Leaf
    titulo: string
    descripcion: string
    entregables: string[]
    resultado: string[]
  }
> = {
  E: {
    label: 'Ambiental',
    color: '#4ADE80',
    icon: Leaf,
    titulo: 'Dimensión Ambiental',
    descripcion:
      'Medimos, reducimos y comunicamos el impacto ambiental de tu operación — con criterios que el mercado y los reguladores reconocen.',
    entregables: [
      'Diagnóstico de huella de carbono operacional',
      'Plan de eficiencia energética y reducción de residuos',
      'Política ambiental corporativa documentada',
      'Reporte de sostenibilidad ambiental (estándar GRI básico)',
    ],
    resultado: [
      'Reducción 15-40% en costos de energía y recursos',
      'Habilitación para acceder a financiamiento verde',
    ],
  },
  S: {
    label: 'Social',
    color: '#60A5FA',
    icon: Users,
    titulo: 'Dimensión Social',
    descripcion:
      'Construimos el vínculo entre tu empresa, tu equipo y tu comunidad — de forma medible, auténtica y generadora de valor compartido.',
    entregables: [
      'Política de bienestar laboral y diversidad',
      'Programa de impacto comunitario con métricas',
      'Diagnóstico de clima organizacional y propuesta de mejora',
      'Marco de relacionamiento con grupos de interés (stakeholders)',
    ],
    resultado: [
      'Reducción de rotación de personal 25-40%',
      'Mejora en índice de reputación de marca empleadora',
    ],
  },
  G: {
    label: 'Gobernanza',
    color: '#F97316',
    icon: Scale,
    titulo: 'Dimensión de Gobernanza',
    descripcion:
      'Integramos las prácticas de gobierno responsable que hacen a tu empresa confiable ante inversores, clientes corporativos y reguladores.',
    entregables: [
      'Código de ética y conducta empresarial',
      'Política anticorrupción y de transparencia',
      'Protocolo de reporte ESG para grupos de interés',
      'Mapa de riesgos de gobernanza y cumplimiento',
    ],
    resultado: [
      'Habilitación para procesos de licitación con exigencia ESG',
      'Mayor confianza de socios, inversionistas y clientes corporativos',
    ],
  },
}

function AnimatedCounter({ end, duration = 2500, inView }: { end: number; duration?: number; inView: boolean }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 2)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, end, duration])
  return <span>{count}</span>
}

export function SostenibilidadDeliverablesAndCTA() {
  const [activeRing, setActiveRing] = useState<RingId | null>('E')
  const ctaRef = useRef<HTMLDivElement>(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-100px' })

  const displayRing = activeRing ?? 'E'
  const active = ESG_DATA[displayRing]
  const IconActive = active.icon

  return (
    <section className="w-full" style={{ backgroundColor: '#0A1628' }}>
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
          Tres dimensiones.
          <br />
          Una sola arquitectura integrada.
        </h2>
        <p className="text-center text-sm mb-12 hidden md:block" style={{ color: '#94A3B8' }}>
          Pasa el cursor sobre cada dimensión para ver lo que construimos en tu empresa.
        </p>
        <p className="text-center text-sm mb-12 md:hidden" style={{ color: '#94A3B8' }}>
          Toca cada dimensión para ver lo que construimos.
        </p>

        {/* Desktop: diagrama + panel */}
        <div className="hidden md:flex gap-12 items-start max-w-6xl mx-auto">
          <div className="flex-shrink-0 w-80 h-80 relative flex items-center justify-center">
            {/* Anillos concéntricos */}
            {(['E', 'S', 'G'] as const).map((id, i) => {
              const r = 60 + (2 - i) * 55
              const data = ESG_DATA[id]
              const Icon = data.icon
              const isActive = displayRing === id
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveRing(id)}
                  onMouseEnter={() => setActiveRing(id)}
                  className="absolute rounded-full transition-all duration-300 hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  style={{
                    width: r * 2,
                    height: r * 2,
                    left: '50%',
                    top: '50%',
                    marginLeft: -r,
                    marginTop: -r,
                    border: `3px solid ${data.color}`,
                    backgroundColor: isActive ? `${data.color}20` : 'transparent',
                    opacity: isActive ? 1 : 0.7,
                  }}
                  aria-label={`Dimensión ${data.label}`}
                >
                  {i === 2 && (
                    <span className="flex items-center justify-center w-full h-full text-white/80">
                      <Icon className="w-8 h-8" strokeWidth={2} />
                    </span>
                  )}
                </button>
              )
            })}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-white/60 text-xs font-medium">ESG</span>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={displayRing}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl p-6 border"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderColor: `${active.color}40`,
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${active.color}25` }}
                  >
                    <IconActive className="w-5 h-5" style={{ color: active.color }} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{active.titulo}</h3>
                </div>
                <p className="text-content-on-dark-muted text-sm leading-relaxed mb-6">{active.descripcion}</p>
                <p className="text-white font-semibold text-sm mb-2">Lo que recibes:</p>
                <ul className="space-y-2 mb-6">
                  {active.entregables.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-slate-200">
                      <FileText className="w-4 h-4 shrink-0 mt-0.5" style={{ color: active.color }} strokeWidth={2} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-white font-semibold text-sm mb-2">Resultado esperado:</p>
                <ul className="space-y-1 text-sm text-content-on-dark-muted">
                  {active.resultado.map((item, i) => (
                    <li key={i}>→ {item}</li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: accordion */}
        <div className="md:hidden space-y-3">
          {(['E', 'S', 'G'] as const).map((id) => {
            const data = ESG_DATA[id]
            const Icon = data.icon
            const isOpen = activeRing === id
            return (
              <div
                key={id}
                className="rounded-xl overflow-hidden border"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  borderColor: `${data.color}40`,
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveRing(isOpen ? null : id)}
                  className="w-full flex items-center justify-between gap-3 px-4 py-4 text-left text-white font-medium"
                >
                  <span className="flex items-center gap-3">
                    <Icon className="w-5 h-5 shrink-0" style={{ color: data.color }} strokeWidth={2} />
                    {data.titulo}
                  </span>
                  <ChevronDown className={cn('w-5 h-5 transition-transform', isOpen && 'rotate-180')} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-0 text-sm space-y-3">
                        <p className="text-content-on-dark-muted">{data.descripcion}</p>
                        <p className="text-white font-semibold">Lo que recibes:</p>
                        <ul className="space-y-1.5">
                          {data.entregables.map((item, i) => (
                            <li key={i} className="flex gap-2 text-slate-200">
                              <FileText className="w-4 h-4 shrink-0 mt-0.5" style={{ color: data.color }} strokeWidth={2} />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <p className="text-white font-semibold">Resultado esperado:</p>
                        <ul className="text-content-on-dark-muted space-y-1">
                          {data.resultado.map((item, i) => (
                            <li key={i}>→ {item}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>

      {/* CTA Final */}
      <div
        ref={ctaRef}
        className="relative overflow-hidden py-20 md:py-28"
        style={{
          background: 'linear-gradient(180deg, #0A1628 0%, #1E3A5F 50%, #0A1628 100%)',
        }}
      >
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <p className="text-6xl md:text-7xl font-black mb-2 bg-gradient-to-r from-brand-teal to-brand-orange bg-clip-text text-transparent">
              <AnimatedCounter end={847} inView={ctaInView} />
            </p>
            <p className="text-white text-lg md:text-xl mb-1">
              PYMEs en LATAM ya están construyendo su ventaja sostenible este año.
            </p>
            <p className="text-content-on-dark-muted text-sm">¿Tu empresa va a ser de las que lideran o de las que alcanzan?</p>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0 }}
            animate={ctaInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Tu empresa también puede construir esta ventaja.
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={ctaInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-content-on-dark-muted max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            En ForjaConsulting diseñamos tu estrategia de sostenibilidad desde cero: práctica,
            medible y alineada con tu modelo de negocio. No teoría. No informes que nadie lee.
            Arquitectura real que genera valor hoy y protege tu empresa para el futuro.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
          >
            <Link
              href="/contacto?servicio=sostenibilidad"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold transition-all hover:brightness-110 w-full sm:w-auto"
              style={{
                background: 'linear-gradient(135deg, #4ADE80, #16A34A)',
                color: '#0A1628',
              }}
            >
              Mide el Índice de Sostenibilidad de tu Empresa
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contacto?servicio=sostenibilidad"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold border-2 transition-colors w-full sm:w-auto"
              style={{
                borderColor: '#4ADE80',
                color: '#4ADE80',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#4ADE80'
                e.currentTarget.style.color = '#0A1628'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = '#4ADE80'
              }}
            >
              Habla con un especialista
            </Link>
          </motion.div>

          <p className="text-sm" style={{ color: '#64748B' }}>
            Sin costo · Sin compromiso · Resultados desde la primera sesión
          </p>
        </div>
      </div>
    </section>
  )
}
