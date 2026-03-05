'use client'

import { useState, useRef, useEffect } from 'react'
import {
  motion,
  useAnimationFrame,
  useInView,
  AnimatePresence,
} from 'framer-motion'
import Link from 'next/link'
import * as LucideIcons from 'lucide-react'
import {
  Check,
  ArrowRight,
  Lightbulb,
  Zap,
  Rocket,
  Star,
  Quote,
  Plus,
  ChevronRight,
} from 'lucide-react'
import { ServiceHero } from '@/components/services/ServiceHero'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { innovacionAgilidadData } from '@/data/services/innovacion-agilidad'

// ═══════════════════════════════════════════════════════
// UTILITARIO: Contador animado al entrar en viewport
// ═══════════════════════════════════════════════════════
function AnimatedCounter({
  end,
  suffix = '',
  prefix = '',
  duration = 2000,
}: {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(end)
    }
    requestAnimationFrame(step)
  }, [isInView, end, duration])

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

// ═══════════════════════════════════════════════════════
// CARRUSEL DE TESTIMONIOS
// ═══════════════════════════════════════════════════════
const testimonials = [
  {
    quote:
      'En 28 años no habíamos logrado que el equipo abrazara un cambio. FORJA lo hizo en 4 meses porque nos ayudó a construir nuestra propia metodología.',
    author: 'Gustavo Arango',
    position: 'Gerente General',
    company: 'Lab. Químico del Norte',
    country: '🇨🇴 Colombia',
    stars: 5,
  },
  {
    quote:
      'Pasamos de 5 días para cotizar a 4 horas. El equipo ahora propone mejoras cada semana. Antes eso era impensable.',
    author: 'Andrea Villanueva',
    position: 'Directora de Operaciones',
    company: 'Textiles Andinos',
    country: '🇵🇪 Perú',
    stars: 5,
  },
  {
    quote:
      'Los OKRs fueron reveladores. Por primera vez mi equipo entendió cómo su trabajo diario conecta con la estrategia del año. El compromiso cambió radicalmente.',
    author: 'Felipe Montoya',
    position: 'CEO',
    company: 'AgriTech Ecuador',
    country: '🇪🇨 Ecuador',
    stars: 5,
  },
  {
    quote:
      'El Design Thinking Sprint nos ahorró 6 meses de desarrollo. Validamos la idea en 2 semanas y descubrimos que el problema real era distinto al que creíamos.',
    author: 'Catalina Riquelme',
    position: 'Fundadora',
    company: 'EdTech Chile',
    country: '🇨🇱 Chile',
    stars: 5,
  },
  {
    quote:
      'Teníamos Kanban mal implementado. FORJA lo rediseñó en una semana y eliminó el 70% de las reuniones de seguimiento. El equipo por fin tiene tiempo para pensar.',
    author: 'Mauricio Salinas',
    position: 'CTO',
    company: 'FinServ MX',
    country: '🇲🇽 México',
    stars: 5,
  },
]

function TestimonialsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const isPaused = useRef(false)
  const positionRef = useRef(0)
  const doubled = [...testimonials, ...testimonials]

  useAnimationFrame((_, delta) => {
    if (isPaused.current || !trackRef.current) return
    positionRef.current += 0.04 * delta
    const trackWidth = trackRef.current.scrollWidth / 2
    if (positionRef.current >= trackWidth) positionRef.current = 0
    trackRef.current.style.transform = `translateX(-${positionRef.current}px)`
  })

  return (
    <div
      className="overflow-hidden"
      style={{
        maskImage:
          'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
      }}
    >
      <div
        ref={trackRef}
        className="flex gap-6 w-max"
        style={{ willChange: 'transform' }}
      >
        {doubled.map((t, idx) => (
          <div
            key={idx}
            onMouseEnter={() => {
              isPaused.current = true
            }}
            onMouseLeave={() => {
              isPaused.current = false
            }}
            className="flex-shrink-0 w-[340px] md:w-[380px] bg-white rounded-2xl p-6 shadow-lg
                       border-2 border-gray-100 hover:border-brand-orange hover:shadow-xl
                       transition-all duration-300 cursor-default"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.stars }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-brand-orange text-brand-orange"
                />
              ))}
            </div>
            <div className="relative mb-6">
              <Quote className="absolute -top-1 -left-1 w-6 h-6 text-brand-orange/25" />
              <p className="text-gray-700 text-sm leading-relaxed pl-5 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              <div
                className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-orange to-brand-navy
                              flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
              >
                {t.author
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .slice(0, 2)}
              </div>
              <div className="min-w-0">
                <p className="font-bold text-brand-navy text-sm truncate">
                  {t.author}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {t.position} · {t.company}
                </p>
              </div>
              <span className="ml-auto text-lg flex-shrink-0">{t.country}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════
// PÁGINA PRINCIPAL
// ═══════════════════════════════════════════════════════
export default function InnovacionAgilidadPage() {
  const data = innovacionAgilidadData
  const [activeMethod, setActiveMethod] = useState(0)

  const methods = [
    { icon: '🔍', iconComponent: 'Pencil', label: 'Design Thinking', time: '2-5 días', color: 'brand-orange' },
    { icon: '🔄', iconComponent: 'RefreshCw', label: 'Scrum', time: 'Sprints 1-2 sem', color: 'brand-orange' },
    { icon: '📋', iconComponent: 'LayoutGrid', label: 'Kanban', time: 'Flujo continuo', color: 'brand-orange' },
    { icon: '🎯', iconComponent: 'Target', label: 'OKRs', time: 'Ciclos 90 días', color: 'brand-orange' },
    { icon: '🧪', iconComponent: 'FlaskConical', label: 'Lean Startup', time: 'MVP 2-4 sem', color: 'brand-orange' },
  ]

  const methodDetails = [
    {
      title: 'Design Thinking',
      description:
        'Empatiza con tu cliente, define el problema real, genera 100 ideas, prototipa la mejor en 2 días y testéala con usuarios reales antes de invertir.',
      phases: ['Empatizar', 'Definir', 'Idear', 'Prototipar', 'Testear'],
      result: 'Soluciones validadas antes de construir',
    },
    {
      title: 'Scrum para PYMEs',
      description:
        'Sprints de 1-2 semanas con entregables concretos. Tu equipo sabe cada lunes qué va a lograr ese viernes — sin ambigüedades, sin reuniones interminables.',
      phases: [
        'Product Backlog',
        'Sprint Planning',
        'Daily Standup',
        'Sprint Review',
        'Retrospectiva',
      ],
      result: 'Velocidad de entrega predecible',
    },
    {
      title: 'Kanban Visual',
      description:
        'Visualiza todo el trabajo en curso. Limita el WIP (Work in Progress). Elimina los cuellos de botella antes de que paren la operación.',
      phases: [
        'Visualizar',
        'Limitar WIP',
        'Gestionar flujo',
        'Políticas explícitas',
        'Mejora continua',
      ],
      result: 'Flujo de trabajo sin interrupciones',
    },
    {
      title: 'OKRs Accionables',
      description:
        'Objetivos ambiciosos con Resultados Clave medibles. Cada persona del equipo sabe cómo su trabajo diario contribuye a la estrategia del año.',
      phases: [
        'Definir Objetivos',
        'Establecer KRs',
        'Alinear equipos',
        'Check-in semanal',
        'Review trimestral',
      ],
      result: 'Alineación total estrategia-ejecución',
    },
    {
      title: 'Lean Startup',
      description:
        'Build-Measure-Learn. Construye el mínimo viable, mídelo con usuarios reales, aprende rápido y ajusta antes de invertir el presupuesto completo.',
      phases: ['Hipótesis', 'Build MVP', 'Medir', 'Aprender', 'Pivotar o Escalar'],
      result: 'Innovación sin desperdicio de recursos',
    },
  ]

  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]">
      {/* HERO */}
      <ServiceHero data={data.hero} />

      {/* MÉTRICAS IMPACTO — 4 contadores animados */}
      <section className="py-12 bg-brand-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange via-brand-purple to-brand-turquoise" />

        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                value: 8,
                suffix: '%',
                label: 'PYMEs en LATAM con I+D formal',
                prefix: 'Solo el ',
              },
              {
                value: 73,
                suffix: '%',
                label: 'Fracasan por falta de alineación STT',
                prefix: '',
              },
              {
                value: 18,
                suffix: ' días',
                label: 'Promedio de primer sprint FORJA®',
                prefix: '',
              },
              {
                value: 900,
                suffix: '%',
                label: 'Más ideas implementadas (caso real)',
                prefix: '+',
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-4"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-brand-orange mb-1 font-heading">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </div>
                <p className="text-white/60 text-xs md:text-sm leading-snug">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ¿ES PARA TI? */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/4 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <SectionHeader
            eyebrow="¿ES PARA TI?"
            title="Tu Empresa Necesita Este Servicio si..."
            highlight="Tu Empresa"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {data.targetProfile.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group flex items-start gap-3 p-5 rounded-2xl border-2 border-gray-100 bg-white
                           hover:border-brand-orange hover:shadow-lg transition-all duration-300 cursor-default"
              >
                <div
                  className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-orange to-orange-400
                                flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm"
                >
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <p className="text-gray-700 text-sm leading-snug font-medium group-hover:text-brand-navy transition-colors">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTO 1 — INNOVACIÓN */}
      <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-[120px] font-black text-gray-100 leading-none pointer-events-none select-none tracking-tighter hidden lg:block">
          01
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex items-center gap-4 mb-12 max-w-5xl mx-auto">
            <div
              className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-orange to-orange-400
                            flex items-center justify-center shadow-lg shadow-orange-200"
            >
              <Lightbulb className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-brand-orange font-bold text-xs uppercase tracking-widest mb-1">
                ACTO 01 · DE 03
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy leading-tight">
                Innovación Estructurada
              </h2>
              <p className="text-gray-500 text-base mt-1">
                Del caos de ideas al proceso que convierte la creatividad en
                ventaja competitiva.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {data.problems.map((pillar, i) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white rounded-2xl p-6 shadow-sm border-2 border-gray-100
                           hover:border-brand-orange hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute -right-3 -top-3 text-[80px] font-black text-gray-50 leading-none pointer-events-none select-none group-hover:text-orange-50 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center
                                    flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    >
                      {pillar.iconComponent && (LucideIcons[pillar.iconComponent as keyof typeof LucideIcons] as React.ComponentType<{ className?: string; strokeWidth?: number }>) ? (
                        (() => {
                          const Icon = LucideIcons[pillar.iconComponent as keyof typeof LucideIcons] as React.ComponentType<{ className?: string; strokeWidth?: number }>
                          return Icon ? <Icon className="w-5 h-5 text-brand-orange" strokeWidth={2} /> : <span className="text-xl">{pillar.icon}</span>
                        })()
                      ) : (
                        <span className="text-xl">{pillar.icon}</span>
                      )}
                    </div>
                    <h3 className="font-bold text-brand-navy text-lg leading-tight group-hover:text-brand-orange transition-colors">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {pillar.symptom}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {pillar.solution.map((s, si) => (
                      <span
                        key={si}
                        className="inline-flex items-center gap-1 text-xs bg-orange-50 text-brand-orange
                                   font-semibold px-3 py-1 rounded-full border border-orange-100"
                      >
                        <Check className="w-3 h-3 flex-shrink-0" />
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTO 2 — AGILIDAD */}
      <section className="py-16 md:py-24 bg-brand-navy relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 -rotate-90 text-[120px] font-black text-white/5 leading-none pointer-events-none select-none tracking-tighter hidden lg:block">
          02
        </div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex items-center gap-4 mb-12 max-w-5xl mx-auto">
            <div
              className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-turquoise to-brand-turquoise/60
                            flex items-center justify-center shadow-lg"
            >
              <Zap className="w-7 h-7 text-brand-navy" />
            </div>
            <div>
              <p className="text-brand-turquoise font-bold text-xs uppercase tracking-widest mb-1">
                ACTO 02 · DE 03
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Agilidad Operativa
              </h2>
              <p className="text-white/50 text-base mt-1">
                Las 5 metodologías que convierten la velocidad en ventaja
                sostenible.
              </p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-8">
              {methods.map((m, i) => (
                <button
                  key={i}
                  onClick={() => setActiveMethod(i)}
                  type="button"
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm
                              transition-all duration-200 border-2
                              ${
                                activeMethod === i
                                  ? 'bg-brand-orange border-brand-orange text-white shadow-lg shadow-orange-900/30 scale-105'
                                  : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white hover:border-white/20'
                              }`}
                >
                  {'iconComponent' in m && m.iconComponent && (LucideIcons[m.iconComponent as keyof typeof LucideIcons] as React.ComponentType<{ className?: string; strokeWidth?: number }>) ? (
                    (() => {
                      const Icon = LucideIcons[m.iconComponent as keyof typeof LucideIcons] as React.ComponentType<{ className?: string; strokeWidth?: number }>
                      return Icon ? <Icon className="w-5 h-5 shrink-0" strokeWidth={2} /> : <span className="text-base">{m.icon}</span>
                    })()
                  ) : (
                    <span className="text-base">{m.icon}</span>
                  )}
                  <span>{m.label}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      activeMethod === i ? 'bg-white/20' : 'bg-white/10'
                    }`}
                  >
                    {m.time}
                  </span>
                </button>
              ))}
            </div>

            <div className="min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMethod}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8"
                >
                  <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {methodDetails[activeMethod].title}
                      </h3>
                      <p className="text-white/70 leading-relaxed mb-6 text-sm md:text-base">
                        {methodDetails[activeMethod].description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {methodDetails[activeMethod].phases.map((phase, pi) => (
                          <div key={pi} className="flex items-center gap-1.5">
                            <span
                              className="text-xs bg-brand-orange/20 text-brand-orange
                                           border border-brand-orange/30 px-3 py-1 rounded-full font-semibold"
                            >
                              {pi + 1}. {phase}
                            </span>
                            {pi <
                              methodDetails[activeMethod].phases.length - 1 && (
                              <ChevronRight className="w-3 h-3 text-white/20 flex-shrink-0" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-brand-orange/10 border border-brand-orange/20 rounded-2xl p-6">
                      <p className="text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
                        Resultado esperado
                      </p>
                      <p className="text-white text-xl font-bold mb-6 leading-snug">
                        {methodDetails[activeMethod].result}
                      </p>
                      <Link
                        href="/contacto"
                        className="inline-flex items-center gap-2 text-sm font-bold text-brand-orange
                                 hover:text-white transition-colors group"
                      >
                        Implementar esta metodología
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {data.components.map((comp, i) => (
                <motion.div
                  key={comp.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-4
                             hover:border-brand-orange/40 hover:bg-white/8 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    {comp.iconComponent && (LucideIcons[comp.iconComponent as keyof typeof LucideIcons] as React.ComponentType<{ className?: string; strokeWidth?: number }>) ? (
                      (() => {
                        const Icon = LucideIcons[comp.iconComponent as keyof typeof LucideIcons] as React.ComponentType<{ className?: string; strokeWidth?: number }>
                        return Icon ? <Icon className="w-6 h-6 text-white shrink-0" strokeWidth={2} /> : <span className="text-2xl">{comp.icon}</span>
                      })()
                    ) : (
                      <span className="text-2xl">{comp.icon}</span>
                    )}
                    <div>
                      <p className="text-white/40 text-[10px] uppercase tracking-widest">
                        Módulo {i + 1}
                      </p>
                      <h4 className="text-white font-bold text-sm leading-tight group-hover:text-brand-orange transition-colors">
                        {comp.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-white/50 text-xs leading-relaxed">
                    {comp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACTO 3 — SÍNTESIS */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-[120px] font-black text-gray-50 leading-none pointer-events-none select-none tracking-tighter hidden lg:block">
          03
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex items-center gap-4 mb-16 max-w-5xl mx-auto">
            <div
              className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-navy
                            flex items-center justify-center shadow-lg"
            >
              <Rocket className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-brand-purple font-bold text-xs uppercase tracking-widest mb-1">
                ACTO 03 · DE 03
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy leading-tight">
                La Síntesis: Transformación Real
              </h2>
              <p className="text-gray-500 text-base mt-1">
                Innovación sin agilidad es una idea archivada. Agilidad sin
                innovación es velocidad sin dirección.
              </p>
            </div>
          </div>

          {/* ECUACIÓN VISUAL */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex-1 text-center bg-gradient-to-br from-orange-50 to-white
                           border-2 border-brand-orange/30 rounded-2xl p-6 shadow-md
                           hover:shadow-xl hover:border-brand-orange transition-all duration-300"
              >
                <div
                  className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-brand-orange to-orange-400
                                rounded-xl flex items-center justify-center shadow-md"
                >
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-extrabold text-brand-orange mb-1">
                  Innovación
                </h3>
                <p className="text-gray-500 text-sm">Nuevas ideas validadas</p>
                <div className="flex flex-wrap gap-1.5 justify-center mt-3">
                  {['Design Thinking', 'Lean Startup', 'MVP'].map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-orange-100 text-brand-orange px-2.5 py-1 rounded-full font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center"
              >
                <Plus className="w-6 h-6 text-gray-400" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex-1 text-center bg-gradient-to-br from-slate-50 to-white
                           border-2 border-brand-navy/20 rounded-2xl p-6 shadow-md
                           hover:shadow-xl hover:border-brand-navy transition-all duration-300"
              >
                <div
                  className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-brand-navy to-brand-navy/80
                                rounded-xl flex items-center justify-center shadow-md"
                >
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-extrabold text-brand-navy mb-1">
                  Agilidad
                </h3>
                <p className="text-gray-500 text-sm">
                  Ejecución a velocidad de mercado
                </p>
                <div className="flex flex-wrap gap-1.5 justify-center mt-3">
                  {['Scrum', 'OKRs', 'Kanban'].map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-slate-100 text-brand-navy px-2.5 py-1 rounded-full font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
                className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center"
              >
                <span className="text-2xl font-black text-gray-400">=</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="flex-1 text-center bg-gradient-to-br from-brand-navy to-brand-purple
                           rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-20">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent
                                  -translate-x-full animate-shimmer"
                    style={{ animationDuration: '2s' }}
                  />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-3 bg-white/20 rounded-xl flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-1">
                    Transformación
                  </h3>
                  <p className="text-white/70 text-sm">
                    Ventaja competitiva sostenible
                  </p>
                  <div className="flex flex-wrap gap-1.5 justify-center mt-3">
                    {['Medible', 'Sostenible', 'Escalable'].map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-white/20 text-white px-2.5 py-1 rounded-full font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CARRUSEL TESTIMONIOS */}
      <section className="py-16 md:py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 mb-10">
          <SectionHeader
            eyebrow="VOCES DE LATAM"
            title="Lo Que Dicen Nuestros Clientes"
            highlight="Nuestros Clientes"
            description="Empresas que instalaron la capacidad de innovar y ejecutar rápido como músculo permanente."
          />
        </div>
        <TestimonialsCarousel />
      </section>

      {/* CTA FINAL */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-brand-navy via-brand-violet to-brand-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-purple/15 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
              ¿Listo para el
              <br className="hidden md:block" /> Primer Sprint?
            </h2>
            <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-10">
              En <span className="text-brand-orange font-bold">2 horas</span>{' '}
              identificamos tu primera oportunidad de innovación y diseñamos el
              sprint para validarla. Sin costos, sin compromiso — solo{' '}
              <span className="text-brand-turquoise font-bold">FORJA®</span> en
              acción.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-brand-orange text-white
                             font-bold text-base md:text-lg rounded-xl shadow-xl shadow-orange-900/30
                             hover:bg-orange-500 transition-all"
                >
                  <Rocket className="w-5 h-5" />
                  Agendar Sprint GRATIS
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-transparent text-white
                             font-bold text-base md:text-lg rounded-xl border-2 border-white/40
                             hover:border-white hover:bg-white/10 transition-all"
                >
                  <ArrowRight className="w-5 h-5" />
                  Diagnóstico de Agilidad
                </Link>
              </motion.div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-white/50 text-sm">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-orange" />
                Sesión de 2 horas sin costo
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-orange" />
                Primer sprint en menos de 3 semanas
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-orange" />
                Metodología adaptada a tu industria
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
