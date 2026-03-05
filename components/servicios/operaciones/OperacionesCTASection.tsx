'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Zap, Package, Target, CheckCircle, TrendingUp, RefreshCw } from 'lucide-react'

const TICKER_ITEMS = [
  { Icon: Zap, text: '35% reducción de costos operativos' },
  { Icon: Package, text: '2.3x mejora en rotación de inventario' },
  { Icon: Target, text: '60 días para primeros resultados' },
  { Icon: CheckCircle, text: '100% procesos documentados' },
  { Icon: TrendingUp, text: '+28% productividad por colaborador' },
  { Icon: RefreshCw, text: '-45% en tiempo de ciclo de pedidos' },
]

const CTA_ITEMS = [
  'Revisión de tu cadena de valor actual',
  'Identificación de los 3 cuellos de botella críticos',
  'Estimación de costos de ineficiencia actual',
  'Recomendaciones de quick wins inmediatos',
  'Propuesta personalizada de intervención',
]

export function OperacionesCTASection() {
  return (
    <section className="relative bg-brand-blue-anchor">
      {/* Sub-bloque A — Ticker marquee */}
      <div className="flex h-12 w-full items-center overflow-hidden bg-brand-orange font-mono font-bold text-white">
        <div className="flex h-full w-max animate-marquee items-center gap-6 whitespace-nowrap [animation-duration:30s]">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => {
            const Icon = item.Icon
            return (
              <span key={i} className="inline-flex items-center gap-2 px-6">
                <Icon className="h-4 w-4 shrink-0" strokeWidth={2.5} />
                {item.text}
                <span className="ml-2 text-white/80">·</span>
              </span>
            )
          })}
        </div>
      </div>

      {/* Sub-bloque B — CTA Card */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl rounded-2xl bg-brand-blue-anchor p-8 shadow-2xl md:p-12"
          >
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              ¿Cuánto le está costando
              <br />
              la ineficiencia a tu empresa?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-content-on-dark-muted">
              En 60 minutos de diagnóstico operativo identificamos exactamente dónde se están yendo
              tus recursos y cuánto puedes recuperar con procesos bien diseñados.
            </p>
            <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-center">
              <ul className="space-y-3">
                {CTA_ITEMS.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/90">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <Link
                  href="/contacto?servicio=operaciones"
                  className="flex w-full items-center justify-center rounded-xl bg-brand-orange px-6 py-4 font-semibold text-white transition-colors hover:bg-brand-orange-dark"
                >
                  Solicita tu Diagnóstico Operativo →
                </Link>
                <p className="text-center text-xs text-white/70">
                  Sin costo · Sin compromiso · Resultados en 48 horas
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  )
}
