'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import { Eye, Calendar, Shield, TrendingUp, AlertCircle, Check, FileText, CheckCircle } from 'lucide-react'

const CHART_DATA = [
  { mes: 'M1', ingresos: 100, costos: 85 },
  { mes: 'M2', ingresos: 108, costos: 83 },
  { mes: 'M3', ingresos: 115, costos: 80 },
  { mes: 'M4', ingresos: 119, costos: 79 },
  { mes: 'M5', ingresos: 126, costos: 77 },
  { mes: 'M6', ingresos: 134, costos: 75 },
]

function AnimatedNumber({ end, suffix, duration = 2000 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
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
  }, [end, duration])
  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

const ANTES_SINTOMAS = [
  'No sabes con certeza si el negocio es rentable mes a mes',
  'El flujo de caja te sorprende cada fin de mes — para bien o para mal',
  'Mezclas finanzas personales con las del negocio sin darte cuenta del daño que hace',
  'No tienes proyección financiera: operas en modo supervivencia, no crecimiento',
]

const DESPUES_LOGROS = [
  'Sabes exactamente cuánto gana tu empresa y dónde se va cada peso',
  'Tu flujo de caja está proyectado a 90 días — sin sorpresas, con decisiones anticipadas',
  'Finanzas personales y empresariales completamente separadas y estructuradas',
  'Tienes un modelo financiero que respalda tu siguiente etapa de crecimiento',
]

const PILARES = [
  {
    num: '01',
    title: 'VISIBILIDAD FINANCIERA',
    description:
      'Construimos el sistema de información financiera que te da claridad total sobre la salud de tu negocio.',
    items: [
      'Estado de resultados mensual estructurado',
      'Dashboard de indicadores financieros clave',
      'Sistema de costeo por producto/servicio/área',
    ],
  },
  {
    num: '02',
    title: 'PLANIFICACIÓN Y PROYECCIÓN',
    description:
      'Diseñamos el modelo financiero que te permite tomar decisiones hoy basadas en el futuro.',
    items: [
      'Presupuesto anual con escenarios (optimista/base/pesimista)',
      'Proyección de flujo de caja a 90-180 días',
      'Modelo de punto de equilibrio actualizado',
    ],
  },
  {
    num: '03',
    title: 'ESTRUCTURA Y CUMPLIMIENTO',
    description:
      'Formalizamos la estructura financiera que protege tu patrimonio y cumple con las obligaciones legales.',
    items: [
      'Separación jurídica finanzas personales/empresariales',
      'Política de distribución de utilidades',
      'Calendario tributario y de obligaciones financieras',
    ],
  },
  {
    num: '04',
    title: 'ACCESO A FINANCIAMIENTO',
    description:
      'Preparamos tu empresa para que el sistema financiero quiera prestarte dinero.',
    items: [
      'Dossier financiero para entidades de crédito',
      'Identificación de líneas de crédito aplicables',
      'Plan de mejora de perfil crediticio PYME',
    ],
  },
]

const PILAR_ICONS = [Eye, Calendar, Shield, TrendingUp]

export function FinanzasProblemSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true })
  const [showDespues, setShowDespues] = useState(false)
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section id="problema-finanzas" ref={sectionRef} className="relative">
      {/* Sub-bloque A — Termómetro */}
      <div className="bg-brand-blue-anchor py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-3xl font-bold text-white md:text-4xl"
          >
            La temperatura financiera
            <br />
            de tu empresa ahora mismo.
          </motion.h2>

          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 items-start gap-10 lg:grid-cols-2">
            {/* Columna izquierda: Gauge + toggle + lista */}
            <div className="flex flex-col items-center">
            {/* Gauge SVG semicircular */}
            <svg viewBox="0 0 200 120" className="h-48 w-full max-w-sm">
              <defs>
                <linearGradient id="gaugeRed" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#EF4444" />
                  <stop offset="100%" stopColor="#EE8028" />
                </linearGradient>
                <linearGradient id="gaugeYellow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#EE8028" />
                  <stop offset="100%" stopColor="#EAB308" />
                </linearGradient>
                <linearGradient id="gaugeGreen" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#EAB308" />
                  <stop offset="100%" stopColor="#22C55E" />
                </linearGradient>
              </defs>
              <path
                d="M 20 100 A 80 80 0 0 1 180 100"
                fill="none"
                stroke="#374151"
                strokeWidth="12"
                strokeLinecap="round"
              />
              <path
                d="M 20 100 A 80 80 0 0 1 180 100"
                fill="none"
                stroke="url(#gaugeRed)"
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray="125.6"
                strokeDashoffset="0"
                style={{ strokeDasharray: '125.6', strokeDashoffset: showDespues ? '0' : '31.4' }}
              />
              <path
                d="M 20 100 A 80 80 0 0 1 100 20"
                fill="none"
                stroke="url(#gaugeYellow)"
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray="125.6"
                strokeDashoffset="-31.4"
              />
              <path
                d="M 100 20 A 80 80 0 0 1 180 100"
                fill="none"
                stroke="url(#gaugeGreen)"
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray="125.6"
                strokeDashoffset="-62.8"
              />
              {/* Aguja */}
              <motion.g
                animate={{
                  rotate: showDespues ? 90 : -90,
                }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                style={{ transformOrigin: '100px 100px' }}
              >
                <line
                  x1="100"
                  y1="100"
                  x2="100"
                  y2="35"
                  stroke="#EE8028"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <circle cx="100" cy="100" r="8" fill="#EE8028" />
              </motion.g>
            </svg>

            <button
              type="button"
              onClick={() => setShowDespues(!showDespues)}
              className="mt-4 rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
            >
              → {showDespues ? 'Ver estado actual' : 'Ver cómo queda con ForjaConsulting'}
            </button>

            <AnimatePresence mode="wait">
              {!showDespues ? (
                <motion.ul
                  key="antes"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-8 w-full max-w-md space-y-3"
                >
                  {ANTES_SINTOMAS.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/90">
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" strokeWidth={2} />
                      {item}
                    </li>
                  ))}
                </motion.ul>
              ) : (
                <motion.ul
                  key="despues"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-8 w-full max-w-md space-y-3"
                >
                  {DESPUES_LOGROS.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/90">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
            </div>

            {/* Columna derecha: Dashboard card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="overflow-hidden rounded-2xl border border-white/20 bg-white shadow-2xl"
            >
              <div className="flex items-center gap-3 border-b border-slate-200 px-6 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue-anchor text-sm font-bold text-white">
                  FC
                </div>
                <span className="font-semibold text-slate-800">ForjaConsulting Analytics</span>
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="grid grid-cols-3 gap-4 border-b border-slate-200 px-6 py-4">
                <div>
                  <p className="text-xs text-slate-500">Ingresos</p>
                  <p className="text-lg font-bold text-brand-orange">
                    +<AnimatedNumber end={34} suffix="%" />
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Margen</p>
                  <p className="text-lg font-bold text-emerald-600">
                    +<AnimatedNumber end={18} suffix="%" />
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Flujo de Caja</p>
                  <p className="flex items-center gap-1 text-lg font-bold text-emerald-600">
                    <CheckCircle className="h-4 w-4" strokeWidth={2.5} />
                    Positivo
                  </p>
                </div>
              </div>
              <div className="h-56 px-4 py-4 md:h-64 w-full" style={{ minWidth: 0 }}>
                {mounted && (
                  <ResponsiveContainer width="100%" height={224} minWidth={0}>
                    <LineChart data={CHART_DATA} margin={{ top: 8, right: 8, left: 8, bottom: 8 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                      <XAxis dataKey="mes" tick={{ fontSize: 12, fill: '#64748B' }} />
                      <YAxis tick={{ fontSize: 12, fill: '#64748B' }} hide />
                      <Tooltip
                        contentStyle={{ borderRadius: 8, border: '1px solid #E2E8F0' }}
                        formatter={(value) => [typeof value === 'number' ? value : '', '']}
                      />
                      <Line
                        type="monotone"
                        dataKey="ingresos"
                        stroke="#EE8028"
                        strokeWidth={2.5}
                        dot={{ fill: '#EE8028', r: 4 }}
                        isAnimationActive
                      />
                      <Line
                        type="monotone"
                        dataKey="costos"
                        stroke="#94A3B8"
                        strokeWidth={2}
                        dot={{ fill: '#94A3B8', r: 3 }}
                        isAnimationActive
                      />
                    </LineChart>
                  </ResponsiveContainer>
                )}
              </div>
              <p className="px-6 pb-2 text-center text-xs text-slate-500">
                Referencia vertical en M3: Intervención ForjaConsulting
              </p>
              <div className="flex gap-6 border-t border-slate-200 px-6 py-4">
                <div className="flex-1">
                  <p className="text-xs text-slate-500">Costos vs Ingresos Antes</p>
                  <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-slate-200">
                    <div className="h-full w-[85%] rounded-full bg-content-subtle" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-500">Después</p>
                  <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-slate-200">
                    <div className="h-full w-[56%] rounded-full bg-brand-orange" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Sub-bloque B — 4 Pilares */}
      <div className="bg-surface-off py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-3xl font-bold text-brand-blue-anchor md:text-4xl"
          >
            Los 4 pilares del
            <br />
            gobierno financiero PYME.
          </motion.h2>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {PILARES.map((pilar, i) => {
              const Icon = PILAR_ICONS[i]
              return (
                <motion.div
                  key={pilar.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <p className="text-3xl font-black text-brand-orange">{pilar.num}</p>
                  <div className="mt-2 flex items-center gap-2">
                    {Icon && <Icon className="h-5 w-5 text-brand-orange" />}
                    <h3 className="text-lg font-bold text-brand-blue-anchor">{pilar.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{pilar.description}</p>
                  <ul className="mt-4 space-y-1 text-sm text-slate-600">
                    {pilar.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <FileText className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" strokeWidth={2} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
