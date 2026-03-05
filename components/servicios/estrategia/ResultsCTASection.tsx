'use client'

import { useState, useRef, useEffect } from 'react'
import { useInView } from 'framer-motion'
import Link from 'next/link'
import { FileSearch, BarChart3, Lock, Zap, Shield, Check, X } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

// ─── Contador animado (trigger whileInView) ───
function AnimatedStat({
  end,
  suffix = '',
  duration = 2000,
  label,
}: {
  end: number
  suffix?: string
  duration?: number
  label: string
}) {
  const ref = useRef<HTMLDivElement>(null)
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
    <div ref={ref} className="text-center">
      <p className="text-3xl md:text-4xl font-extrabold mb-2 text-brand-orange">
        {count}
        {suffix}
      </p>
      <div className="w-10 h-0.5 mx-auto mb-2 bg-brand-orange" />
      <p className="text-white/90 text-sm leading-snug">{label}</p>
    </div>
  )
}

const METRICS = [
  { end: 34, suffix: '%', label: 'Incremento promedio en ingresos tras implementar estrategia formal — PYMEs LATAM' },
  { end: 3, suffix: 'x', label: 'Más probabilidades de superar los 5 años con plan estratégico documentado' },
  { end: 90, suffix: ' días', label: 'Tiempo promedio para los primeros resultados medibles de la intervención' },
  { end: 68, suffix: '%', label: 'De las horas del liderazgo se recuperan al eliminar la toma de decisiones reactiva' },
]

const SI_ITEMS = [
  'Tienes entre 5 y 200 empleados y quieres crecer de forma sostenida',
  'Sientes que el negocio depende demasiado de ti y no escala solo',
  'Quieres tomar decisiones basadas en datos, no solo en intuición',
  'Buscas que tu equipo ejecute con autonomía y dirección clara',
  'Necesitas un socio comprometido con resultados, no solo con entregables',
]

const NO_ITEMS = [
  'Buscas una presentación bonita para mostrar, no un plan real para ejecutar',
  'No puedes dedicar tiempo del equipo directivo al proceso',
  'Esperas transformación completa en menos de 30 días',
  'Prefieres seguir tomando decisiones únicamente por intuición',
]

export function ResultsCTASection() {
  return (
    <section className="relative">
      {/* Sub-bloque A — Métricas */}
      <div className="py-16 md:py-24 bg-brand-blue-anchor">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            El impacto real de tener una estrategia clara
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {METRICS.map((m, i) => (
              <AnimatedStat key={i} end={m.end} suffix={m.suffix} label={m.label} />
            ))}
          </div>
        </div>
      </div>

      {/* Sub-bloque B — SÍ / NO */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            ¿Este servicio es para tu empresa?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="rounded-2xl p-8 shadow-md border-2" style={{ borderColor: '#22C55E' }}>
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-slate-800 mb-4">Sí, si...</h3>
                <ul className="space-y-3">
                  {SI_ITEMS.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-700 text-sm">
                      <span className="text-green-500 mt-0.5 shrink-0">
                        <Check className="w-4 h-4" strokeWidth={2.5} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="rounded-2xl p-8 shadow-md border-2" style={{ borderColor: '#EF4444' }}>
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-slate-800 mb-4">No, si...</h3>
                <ul className="space-y-3">
                  {NO_ITEMS.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-700 text-sm">
                      <span className="text-red-500 mt-0.5 shrink-0">
                        <X className="w-4 h-4" strokeWidth={2.5} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Sub-bloque C — CTA (sin formulario) */}
      <div
        id="cta-final"
        className="scroll-mt-24 py-16 md:py-24 bg-gradient-orange-flat"
      >
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Da el primer paso con claridad
          </h2>
          <p className="text-white/95 text-lg max-w-2xl mx-auto mb-10">
            Solicita tu diagnóstico estratégico o una evaluación de madurez empresarial. Sin costo ni
            compromiso — en menos de 24h te respondemos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-brand-blue-anchor hover:bg-brand-blue-anchor/90 shadow-lg transition-all w-full sm:w-auto"
            >
              <FileSearch className="w-5 h-5" />
              Solicitar Diagnóstico Estratégico
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold border-2 border-white text-white bg-transparent hover:bg-white/10 transition-all w-full sm:w-auto"
            >
              <BarChart3 className="w-5 h-5" />
              Evaluación de Madurez Empresarial
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-white/90 text-sm">
            <span className="inline-flex items-center gap-2">
              <Lock className="w-4 h-4" /> Sin compromiso
            </span>
            <span className="inline-flex items-center gap-2">
              <Zap className="w-4 h-4" /> Respuesta en menos de 24h
            </span>
            <span className="inline-flex items-center gap-2">
              <Shield className="w-4 h-4" /> 100% confidencial
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
