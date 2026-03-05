'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'
import { AlertCircle, CheckCircle } from 'lucide-react'

const formatUSD = (n: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)

const MIN = 10_000
const MAX = 500_000
const STEP = 10_000
const DEFAULT = 50_000

export function FinanzasCTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true })
  const [facturacion, setFacturacion] = useState(DEFAULT)

  const perdidaIneficiencia = facturacion * 0.12
  const ahorroPotencial = facturacion * 0.08 * 12

  return (
    <section ref={sectionRef} className="relative">
      {/* Sub-bloque A — Calculadora */}
      <div className="bg-brand-blue-anchor py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center text-2xl font-bold text-white md:text-3xl"
          >
            ¿Cuánto dinero está
            <br />
            dejando sobre la mesa tu empresa?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-10 w-full rounded-2xl bg-white p-8 shadow-xl md:p-10"
          >
            <label htmlFor="facturacion-slider" className="block text-sm font-medium text-slate-700">
              Facturación mensual aproximada de tu empresa:
            </label>
            <input
              id="facturacion-slider"
              type="range"
              min={MIN}
              max={MAX}
              step={STEP}
              value={facturacion}
              onChange={(e) => setFacturacion(Number(e.target.value))}
              className="mt-4 h-3 w-full accent-brand-orange"
              aria-valuemin={MIN}
              aria-valuemax={MAX}
              aria-valuenow={facturacion}
            />
            <p className="mt-2 text-center text-lg font-bold text-brand-blue-anchor">
              {formatUSD(facturacion)} / mes
            </p>

            <div className="mt-6 grid gap-6 rounded-xl bg-slate-50 p-6 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" strokeWidth={2} />
                <div>
                  <p className="text-sm font-medium text-red-600">
                    Estás perdiendo aprox: {formatUSD(perdidaIneficiencia)} / mes
                  </p>
                  <p className="text-xs text-slate-500">
                    por ineficiencia financiera no gestionada
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" strokeWidth={2} />
                <div>
                  <p className="text-sm font-medium text-emerald-600">
                    Podrías recuperar aprox: {formatUSD(ahorroPotencial)} / año
                  </p>
                  <p className="text-xs text-slate-500">
                    con gobierno financiero estructurado
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs text-content-on-dark-muted">
              * Estimación basada en benchmarks de PYMEs LATAM. El diagnóstico real puede revelar más
              oportunidades.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Sub-bloque B — CTA */}
      <div className="flex flex-col items-center justify-center gap-8 bg-brand-orange px-4 py-16 md:flex-row md:px-8 md:py-20">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Convierte tus finanzas en
            <br />
            tu ventaja competitiva.
          </h2>
          <p className="mt-3 text-white/95">
            Agenda tu diagnóstico financiero gratuito y descubre exactamente qué está frenando el
            crecimiento de tu empresa.
          </p>
        </div>
        <div className="flex flex-shrink-0 flex-col items-center gap-2">
          <Link
            href="/contacto?servicio=finanzas"
            className="rounded-xl bg-brand-blue-anchor px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-brand-blue-anchor"
          >
            Quiero mi Diagnóstico Financiero →
          </Link>
          <p className="text-xs text-white/90">Sin costo · Sin compromiso · Confidencial</p>
        </div>
      </div>
    </section>
  )
}
