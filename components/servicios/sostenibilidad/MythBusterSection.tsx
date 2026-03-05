'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { X, Check } from 'lucide-react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

const CARDS = [
  {
    myth: 'La sostenibilidad es para grandes empresas con presupuestos enormes.',
    reality:
      'Las PYMEs que integran sostenibilidad desde etapas tempranas tienen ventaja: menos inercia organizacional, mayor agilidad para adaptarse y costos de implementación significativamente más bajos que las grandes corporaciones.',
  },
  {
    myth: 'Ser sostenible significa sacrificar rentabilidad por hacer el bien.',
    reality:
      'Las empresas con estrategia ESG documentada acceden a líneas de crédito verde con tasas hasta 2 puntos porcentuales más bajas, reducen costos operativos un promedio de 15-40% y aumentan su valor de mercado.',
  },
  {
    myth: 'Ya somos sostenibles porque reciclamos y apagamos las luces.',
    reality:
      'La sostenibilidad empresarial real abarca tres dimensiones: ambiental, social y de gobernanza (ESG). Sin las tres integradas en tu modelo de negocio, tienes prácticas aisladas — no una ventaja competitiva estructural.',
  },
  {
    myth: 'Mis clientes no me van a pagar más por ser sostenible.',
    reality:
      'El 73% de los consumidores en LATAM declara preferir marcas sostenibles. Más relevante aún: las cadenas de suministro globales ya exigen certificaciones ESG a sus proveedores. Sin esto, en 3 años muchas PYMEs quedarán excluidas de contratos corporativos clave.',
  },
] as const

const CHART_DATA = [
  { year: '2020', value: 12 },
  { year: '2021', value: 18 },
  { year: '2022', value: 27 },
  { year: '2023', value: 38 },
  { year: '2024', value: 49 },
  { year: '2025', value: 61 },
  { year: '2026', value: 71 },
]

export function MythBusterSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const chartRef = useRef<HTMLDivElement>(null)
  const chartInView = useInView(chartRef, { once: true, margin: '-50px' })

  return (
    <section id="mitos" className="relative">
      {/* Sub-bloque A — Título (mismo patrón que CostOfChaos / ProblemDiagnostic) */}
      <div className="bg-surface-subtle py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-4"
            style={{ color: '#1E3A5F' }}
          >
            Lo que crees sobre sostenibilidad
            <br />
            probablemente está frenando tu negocio.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-center max-w-2xl mx-auto mb-12"
            style={{ color: '#64748B' }}
          >
            Estos son los 4 mitos que más le cuestan a las PYMEs latinoamericanas.
          </motion.p>

          {/* Cards Mito → Realidad: colores de marca (naranja #F97316, azul #1E3A5F) */}
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {CARDS.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md border border-slate-200/80 border-t-4"
                style={{ borderTopColor: '#F97316' }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#64748B' }}>
                  Mito
                </p>
                <p className="text-slate-500 text-sm line-through leading-relaxed mb-5">
                  &ldquo;{card.myth}&rdquo;
                </p>
                <div className="flex items-start gap-3 pt-4 border-t border-slate-100">
                  <div className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-brand-orange/10">
                    <Check className="w-4 h-4 text-brand-orange" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#1E3A5F' }}>
                      Realidad
                    </p>
                    <p className="text-slate-700 text-sm leading-relaxed">{card.reality}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Sub-bloque C — Contexto LATAM (igual que antes: fondo #F9FAFB, texto + gráfico en card blanca) */}
      <div className="container mx-auto px-4 md:px-8 pb-20">
        <div
          ref={chartRef}
          className="rounded-2xl overflow-hidden"
          style={{ backgroundColor: '#F9FAFB' }}
        >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 p-8 md:p-12 items-center">
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={chartInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ color: '#1E3A5F' }}
            >
              La sostenibilidad en LATAM ya no es tendencia.
              <br />
              Es requisito de mercado.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={chartInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-600 leading-relaxed mb-4"
            >
              Entre 2020 y 2026, la adopción de marcos ESG en empresas medianas de LATAM creció un
              340%. Los mercados de capitales, las cadenas de suministro globales y los
              consumidores están alineados en una misma dirección.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={chartInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-700 font-medium"
            >
              La pregunta no es si tu empresa necesita sostenibilidad. La pregunta es si vas a
              construirla tú — o esperar a que el mercado te lo exija.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={chartInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
          >
            <p className="text-sm font-semibold text-slate-700 mb-4">
              Adopción de marcos ESG en PYMEs LATAM
            </p>
            <div className="w-full min-h-[260px]" style={{ height: 260 }}>
              {chartInView && (
            <ResponsiveContainer width="100%" height={260} minWidth={0}>
              <BarChart data={CHART_DATA} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <XAxis
                  dataKey="year"
                  tick={{ fontSize: 12, fill: '#64748B' }}
                  axisLine={{ stroke: '#E2E8F0' }}
                />
                <YAxis
                  tick={{ fontSize: 12, fill: '#64748B' }}
                  axisLine={false}
                  tickFormatter={(v) => `${v}%`}
                  domain={[0, 80]}
                />
                <Tooltip
                  formatter={(value: number | undefined) => [value != null ? `${value}%` : '', 'Adopción']}
                  contentStyle={{
                    borderRadius: 8,
                    border: '1px solid #E2E8F0',
                  }}
                />
                <defs>
                  <linearGradient id="esgBarGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4ADE80" />
                    <stop offset="100%" stopColor="#16A34A" />
                  </linearGradient>
                </defs>
                <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={48} fill="url(#esgBarGradient)" />
              </BarChart>
            </ResponsiveContainer>
              )}
            </div>
            <p className="text-xs text-slate-500 mt-3">
              Estimación basada en tendencias IFC · BID · GRI LATAM
            </p>
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  )
}
