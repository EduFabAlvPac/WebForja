'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import { ChevronDown, ArrowRight, LayoutGrid, Scale, CircleDollarSign, FileCheck, FileText } from 'lucide-react'
import { cn } from '@/lib/utils'

const PILARES = [
  {
    id: 'diseno',
    icon: LayoutGrid,
    label: 'Diseño Organizacional',
    titulo: 'Estructura que soporta el crecimiento',
    descripcion:
      'Diseñamos el organigrama funcional de tu empresa basado en tu modelo de negocio real, no en una plantilla genérica. Cada rol tiene razón de ser, alcance definido y métricas de gestión.',
    entregables: [
      'Organigrama funcional con niveles de autoridad',
      'Perfiles de cargo con competencias y KPIs',
      'Matriz RACI de responsabilidades por proceso',
      'Plan de transición y comunicación interna',
    ],
  },
  {
    id: 'decisiones',
    icon: Scale,
    label: 'Modelo de Decisiones',
    titulo: 'Claridad total sobre quién decide qué',
    descripcion:
      'Establecemos los niveles de autoridad, los umbrales de aprobación y los flujos de decisión para que tu empresa no se paralice cuando el líder no está.',
    entregables: [
      'Mapa de autoridad y delegación por nivel',
      'Política de aprobaciones y umbrales financieros',
      'Protocolo de toma de decisiones estratégicas',
      'Manual de gobierno para la junta directiva o socios',
    ],
  },
  {
    id: 'financiero',
    icon: CircleDollarSign,
    label: 'Gobierno Financiero',
    titulo: 'Reglas claras para el dinero del negocio',
    descripcion:
      'Construimos las políticas que protegen la salud financiera de la empresa: cómo se invierten los recursos, cómo se distribuyen utilidades, cómo se gestiona el riesgo y cómo se accede a financiamiento.',
    entregables: [
      'Política de distribución de utilidades',
      'Marco de gestión de riesgos financieros',
      'Estructura de gobierno para acceso a crédito',
      'Dashboard financiero de gobierno ejecutivo',
    ],
  },
  {
    id: 'cumplimiento',
    icon: FileCheck,
    label: 'Cumplimiento Normativo',
    titulo: 'Cumplir sin que sea una carga operativa',
    descripcion:
      'Mapeamos las obligaciones regulatorias, tributarias y laborales relevantes para tu empresa y diseñamos los procesos que garantizan el cumplimiento sin consumir el tiempo de tu equipo directivo.',
    entregables: [
      'Mapa de obligaciones regulatorias por sector',
      'Calendario de cumplimiento normativo',
      'Protocolo de gestión de riesgos legales y laborales',
      'Sistema de alertas y seguimiento de obligaciones',
    ],
  },
] as const

function DesktopPilares() {
  const [activeId, setActiveId] = useState<(typeof PILARES)[number]['id']>('diseno')
  const active = PILARES.find((p) => p.id === activeId) ?? PILARES[0]

  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-0">
      {/* Columna izquierda — tabs verticales w-1/3 */}
      <div className="w-full md:w-1/3 shrink-0 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
        {PILARES.map((p) => {
          const Icon = p.icon
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => setActiveId(p.id)}
              className={cn(
                'flex items-center gap-3 text-left px-4 py-3 rounded-lg font-medium transition-all whitespace-nowrap md:whitespace-normal',
                activeId === p.id
                  ? 'bg-brand-orange text-white border-l-4 border-white md:border-l-4'
                  : 'bg-white/5 text-white border-l-4 border-transparent hover:bg-white/10 hover:text-white'
              )}
            >
              <Icon className={cn('w-5 h-5 shrink-0', activeId === p.id ? 'text-white' : 'text-slate-200')} strokeWidth={2} />
              {p.label}
            </button>
          )
        })}
      </div>

      {/* Columna derecha — contenido del pilar w-2/3 */}
      <div className="flex-1 min-w-0 md:pl-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="max-w-none"
          >
            <h3 className="text-2xl font-bold text-white mb-4">{active.titulo}</h3>
            <p className="text-slate-200 leading-relaxed mb-6">{active.descripcion}</p>
            <p className="text-white font-semibold mb-3">Lo que recibes:</p>
            <ul className="space-y-2 text-slate-200">
              {active.entregables.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <FileText className="w-4 h-4 shrink-0 mt-0.5 text-brand-orange" strokeWidth={2} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

function MobileAccordion() {
  const [openId, setOpenId] = useState<(typeof PILARES)[number]['id'] | null>('diseno')

  return (
    <div className="space-y-2">
      {PILARES.map((p) => {
        const isOpen = openId === p.id
        const Icon = p.icon
        return (
          <div
            key={p.id}
            className="rounded-xl overflow-hidden"
            style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : p.id)}
              className="w-full flex items-center justify-between gap-3 px-4 py-4 text-left font-medium text-white"
            >
              <span className="flex items-center gap-3">
                <Icon className="w-5 h-5 shrink-0 text-brand-orange" strokeWidth={2} />
                {p.label}
              </span>
              <ChevronDown
                className={cn('w-5 h-5 transition-transform', isOpen && 'rotate-180')}
              />
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
                  <div className="px-4 pb-4 pt-0 text-slate-200 space-y-3">
                    <p className="font-semibold text-white">{p.titulo}</p>
                    <p className="text-sm leading-relaxed">{p.descripcion}</p>
                    <p className="text-white text-sm font-semibold">Lo que recibes:</p>
                    <ul className="space-y-1.5 text-sm">
                      {p.entregables.map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <FileText className="w-4 h-4 shrink-0 mt-0.5 text-brand-orange" strokeWidth={2} />
                          <span>{item}</span>
                        </li>
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
  )
}

export function DeliverablesAndCTA() {
  const ctaRef = useRef<HTMLDivElement>(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-50px' })

  return (
    <section className="w-full" style={{ backgroundColor: '#1E3A5F' }}>
      {/* Sub-bloque A — Pilares con tabs verticales / accordion mobile */}
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Los 4 pilares que
            <br />
            estructuran tu empresa.
          </h2>
          <p className="text-slate-300 text-base">
            Selecciona cada pilar para ver qué construimos juntos.
          </p>
        </div>

        <div className="md:hidden">
          <MobileAccordion />
        </div>
        <div className="hidden md:block">
          <DesktopPilares />
        </div>
      </div>

      {/* Sub-bloque B — CTA horizontal */}
      <motion.div
        ref={ctaRef}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
        id="cta-gobierno"
        className="relative overflow-hidden"
        style={{ backgroundColor: '#F97316' }}
      >
        {/* Patrón geométrico sutil */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid-gobierno"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 24 0 L 0 0 0 24"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-gobierno)" />
        </svg>

        <div className="container mx-auto px-4 md:px-8 py-12 md:py-16 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 max-w-5xl mx-auto">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                ¿Tu empresa está construida para durar?
              </h3>
              <p className="text-white/95 text-base md:text-lg">
                Agenda un diagnóstico de gobierno. En 45 min identificamos las 3 vulnerabilidades
                críticas de tu estructura.
              </p>
            </div>
            <div className="shrink-0 flex flex-col items-start md:items-end">
              <Link
                href="/contacto?servicio=gobierno"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all bg-brand-blue-anchor text-white hover:bg-white hover:text-brand-blue-anchor"
              >
                Habla con un arquitecto empresarial
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <p className="mt-3 text-white/80 text-sm">
                Sin costo · Sin compromiso · Respuesta en 24 horas
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
