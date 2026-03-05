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
  Cpu,
  Bot,
  Star,
  Quote,
  Plus,
  Layers,
  Route,
} from 'lucide-react'
import { ServiceHero } from '@/components/services/ServiceHero'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { estrategiaTecnologicaData } from '@/data/services/estrategia-tecnologica'
import type { ServiceComponent } from '@/types/services'

// ═══════════════════════════════════════════════════════
// CONTADOR ANIMADO
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
// CARRUSEL TESTIMONIOS
// ═══════════════════════════════════════════════════════
const testimonials = [
  {
    quote:
      'Por primera vez nuestra tecnología trabaja para nosotros. FORJA nos dio claridad sobre qué comprar y en qué orden.',
    author: 'Andrés Rodríguez',
    position: 'Gerente General',
    company: 'Grupo Comercial Andes',
    country: '🇨🇴 Colombia',
    stars: 5,
  },
  {
    quote:
      '12 herramientas que nadie integraba. FORJA las consolidó en 4 y bajamos el costo de TI 28% en 5 meses.',
    author: 'Valentina Torres',
    position: 'Directora de Operaciones',
    company: 'IndusMed Ecuador',
    country: '🇪🇨 Ecuador',
    stars: 5,
  },
  {
    quote:
      'El 60% de nuestro presupuesto TI no generaba valor. Con FORJA priorizamos lo que importa.',
    author: 'Carlos Mendoza',
    position: 'CEO',
    company: 'RetailPro Perú',
    country: '🇵🇪 Perú',
    stars: 5,
  },
  {
    quote:
      'Llevamos 10 meses sin incidentes. La estrategia de ciberseguridad fue un antes y después.',
    author: 'Felipe Rojas',
    position: 'Gerente TI',
    company: 'Constructora Austral',
    country: '🇨🇱 Chile',
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
                       border-2 border-gray-100 hover:border-brand-turquoise hover:shadow-xl
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
              <Quote className="absolute -top-1 -left-1 w-6 h-6 text-brand-turquoise/25" />
              <p className="text-gray-700 text-sm leading-relaxed pl-5 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              <div
                className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-turquoise to-brand-navy
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
export default function EstrategiaTecnologicaPage() {
  const data = estrategiaTecnologicaData
  const [activeModule, setActiveModule] = useState(0)

  const stats = [
    { value: 60, suffix: '%', label: 'Del tiempo operativo en tareas repetitivas (PYMEs LATAM)', prefix: '' },
    { value: 46, suffix: '%', label: 'PYMEs que planean adoptar IA en los próximos años', prefix: '' },
    { value: 5, suffix: '', label: 'Módulos del servicio', prefix: '' },
    { value: 24, suffix: ' meses', label: 'Horizonte del roadmap de crecimiento', prefix: '' },
  ]

  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]">
      <ServiceHero data={data.hero} />

      {/* MÉTRICAS */}
      <section className="py-12 bg-brand-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-turquoise via-brand-purple to-brand-orange" />
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-4"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-brand-turquoise mb-1 font-heading">
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
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-turquoise/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
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
                           hover:border-brand-turquoise hover:shadow-lg transition-all duration-300 cursor-default"
              >
                <div
                  className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-turquoise to-brand-navy
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

      {/* ACTO 1 — TU REALIDAD */}
      <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-[120px] font-black text-gray-100 leading-none pointer-events-none select-none tracking-tighter hidden lg:block">
          01
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex items-center gap-4 mb-12 max-w-5xl mx-auto">
            <div
              className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-turquoise to-brand-navy
                            flex items-center justify-center shadow-lg shadow-turquoise-200/50"
            >
              <Cpu className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-brand-turquoise font-bold text-xs uppercase tracking-widest mb-1">
                ACTO 01 · DE 03
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy leading-tight">
                ¿Te Identificas con Esto?
              </h2>
              <p className="text-gray-500 text-base mt-1">
                Señales más comunes en PYMEs con baja madurez tecnológica.
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
                           hover:border-brand-turquoise hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute -right-3 -top-3 text-[80px] font-black text-gray-50 leading-none pointer-events-none select-none group-hover:text-cyan-50/80 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {pillar.iconComponent && (LucideIcons[pillar.iconComponent as keyof typeof LucideIcons] as React.ComponentType<{ className?: string; strokeWidth?: number }>) ? (
                        (() => {
                          const Icon = LucideIcons[pillar.iconComponent as keyof typeof LucideIcons] as React.ComponentType<{ className?: string; strokeWidth?: number }>
                          return Icon ? <Icon className="w-5 h-5 text-brand-turquoise" strokeWidth={2} /> : <span className="text-xl">{pillar.icon}</span>
                        })()
                      ) : (
                        <span className="text-xl">{pillar.icon}</span>
                      )}
                    </div>
                    <h3 className="font-bold text-brand-navy text-lg leading-tight group-hover:text-brand-turquoise transition-colors">
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
                        className="inline-flex items-center gap-1 text-xs bg-cyan-50 text-brand-navy
                                   font-semibold px-3 py-1 rounded-full border border-cyan-100"
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

      {/* ACTO 2 — NUESTRO SERVICIO */}
      <section className="py-16 md:py-24 bg-brand-navy relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 -rotate-90 text-[120px] font-black text-white/5 leading-none pointer-events-none select-none tracking-tighter hidden lg:block">
          02
        </div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-turquoise/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex items-center gap-4 mb-12 max-w-5xl mx-auto">
            <div
              className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-turquoise to-brand-turquoise/60
                            flex items-center justify-center shadow-lg"
            >
              <Layers className="w-7 h-7 text-brand-navy" />
            </div>
            <div>
              <p className="text-brand-turquoise font-bold text-xs uppercase tracking-widest mb-1">
                ACTO 02 · DE 03
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Qué Incluye la Estrategia Tecnológica
              </h2>
              <p className="text-white/50 text-base mt-1">
                5 módulos. Independientes o programa completo.
              </p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-8">
              {data.components.map((comp, i) => (
                <button
                  key={comp.id}
                  type="button"
                  onClick={() => setActiveModule(i)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 border-2
                    ${activeModule === i
                      ? 'bg-brand-turquoise border-brand-turquoise text-brand-navy shadow-lg shadow-cyan-900/30 scale-105'
                      : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white hover:border-white/20'
                    }`}
                >
                  {comp.iconComponent && (LucideIcons[comp.iconComponent as keyof typeof LucideIcons] as React.ComponentType<{ className?: string; strokeWidth?: number }>) ? (
                    (() => {
                      const Icon = LucideIcons[comp.iconComponent as keyof typeof LucideIcons] as React.ComponentType<{ className?: string; strokeWidth?: number }>
                      return Icon ? <Icon className="w-5 h-5 shrink-0" strokeWidth={2} /> : <span className="text-base">{comp.icon}</span>
                    })()
                  ) : (
                    <span className="text-base">{comp.icon}</span>
                  )}
                  <span>Módulo {i + 1}</span>
                </button>
              ))}
            </div>

            <div className="min-h-[280px]">
              <AnimatePresence mode="wait">
                <ModulePanel key={activeModule} comp={data.components[activeModule]} index={activeModule} />
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
                             hover:border-brand-turquoise/40 hover:bg-white/8 transition-all duration-200 group"
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
                      <h4 className="text-white font-bold text-sm leading-tight group-hover:text-brand-turquoise transition-colors">
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

      {/* ACTO 3 — ECUACIÓN */}
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
              <Cpu className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-brand-purple font-bold text-xs uppercase tracking-widest mb-1">
                ACTO 03 · DE 03
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy leading-tight">
                La Síntesis: Tecnología que Trabaja Para Ti
              </h2>
              <p className="text-gray-500 text-base mt-1">
                Arquitectura sin automatización no escala. Tecnología sin roadmap no apalanca el crecimiento.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex-1 text-center bg-gradient-to-br from-cyan-50 to-white border-2 border-brand-turquoise/30 rounded-2xl p-6 shadow-md hover:shadow-xl hover:border-brand-turquoise transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-brand-turquoise to-brand-navy rounded-xl flex items-center justify-center shadow-md">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-extrabold text-brand-turquoise mb-1">Arquitectura</h3>
                <p className="text-gray-500 text-sm">Roadmap y stack alineados</p>
                <div className="flex flex-wrap gap-1.5 justify-center mt-3">
                  {['Tech Stack', 'Roadmap 24M', 'Integración'].map((t) => (
                    <span key={t} className="text-xs bg-cyan-100 text-brand-navy px-2.5 py-1 rounded-full font-semibold">
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
                className="flex-1 text-center bg-gradient-to-br from-slate-50 to-white border-2 border-brand-navy/20 rounded-2xl p-6 shadow-md hover:shadow-xl hover:border-brand-navy transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-brand-navy to-brand-navy/80 rounded-xl flex items-center justify-center shadow-md">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-extrabold text-brand-navy mb-1">Automatización e IA</h3>
                <p className="text-gray-500 text-sm">Procesos que escalan, decisiones con datos</p>
                <div className="flex flex-wrap gap-1.5 justify-center mt-3">
                  {['Automatización', 'IA aplicada', 'Integración'].map((t) => (
                    <span key={t} className="text-xs bg-slate-100 text-brand-navy px-2.5 py-1 rounded-full font-semibold">
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
                className="flex-1 text-center bg-gradient-to-br from-brand-navy to-brand-purple rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full animate-shimmer" style={{ animationDuration: '2s' }} />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-3 bg-white/20 rounded-xl flex items-center justify-center">
                    <Route className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-1">Crecimiento</h3>
                  <p className="text-white/70 text-sm">Tecnología que apalanca la estrategia</p>
                  <div className="flex flex-wrap gap-1.5 justify-center mt-3">
                    {['Escalable', 'Medible', 'Competitivo'].map((t) => (
                      <span key={t} className="text-xs bg-white/20 text-white px-2.5 py-1 rounded-full font-semibold">
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

      {/* CARRUSEL */}
      <section className="py-16 md:py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 mb-10">
          <SectionHeader
            eyebrow="VOCES DE LATAM"
            title="Lo Que Dicen Nuestros Clientes"
            highlight="Nuestros Clientes"
            description="Empresas de Colombia, Ecuador, Perú y Chile que transformaron su estrategia tecnológica con FORJA."
          />
        </div>
        <TestimonialsCarousel />
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-brand-navy via-brand-violet to-brand-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-turquoise/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-purple/15 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
              ¿Tu Tecnología Está Frenando
              <br className="hidden md:block" /> tu Crecimiento?
            </h2>
            <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-10">
              Sesión Estratégica de 30 min: analizamos tu situación y te mostramos cómo FORJA® se adapta a ti.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-navy font-bold text-base md:text-lg rounded-xl shadow-xl hover:bg-gray-50 transition-all"
                >
                  <Cpu className="w-5 h-5 text-brand-turquoise-dark" />
                  Agendar Sesión Estratégica GRATIS
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-transparent text-white font-bold text-base md:text-lg rounded-xl border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all"
                >
                  <ArrowRight className="w-5 h-5" />
                  Ver Diagnóstico Tecnológico
                </Link>
              </motion.div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-white/50 text-sm">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-turquoise" />
                Sin costo ni compromiso
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-turquoise" />
                Respuesta en menos de 24h
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-turquoise" />
                Adaptado a tu industria y país
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Panel de detalle del módulo activo (Acto 2)
function ModulePanel({ comp, index }: { comp: ServiceComponent; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8"
    >
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">{comp.title}</h3>
          <p className="text-white/70 leading-relaxed mb-6 text-sm md:text-base">
            {comp.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {comp.deliverables.slice(0, 4).map((d, i) => (
              <span
                key={i}
                className="text-xs bg-brand-turquoise/20 text-brand-turquoise border border-brand-turquoise/30 px-3 py-1 rounded-full font-semibold"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-brand-turquoise/10 border border-brand-turquoise/20 rounded-2xl p-6">
          <p className="text-brand-turquoise text-xs font-bold uppercase tracking-wider mb-3">
            Entregables
          </p>
          <ul className="space-y-2 text-white/90 text-sm">
            {comp.deliverables.map((d, i) => (
              <li key={i} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-turquoise flex-shrink-0" />
                {d}
              </li>
            ))}
          </ul>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-turquoise hover:text-white transition-colors group mt-4"
          >
            Implementar este módulo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
