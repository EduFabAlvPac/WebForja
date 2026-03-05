'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const METRICS = [
  { value: 40, suffix: '%', label: 'de las PYMEs LATAM identifica control de costos como su mayor desafío · Chubb 2026' },
  { value: 30, suffix: '%', label: 'no tiene planificación financiera de largo plazo · Chubb 2026' },
  { value: 24, suffix: '%', label: 'no accede a financiamiento formal por falta de información financiera ordenada' },
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

export function FinanzasHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full bg-surface-off">
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0 }}
            className="mb-6 inline-flex items-center rounded-full border border-brand-orange/40 bg-brand-orange-subtle px-4 py-2 text-sm font-semibold text-brand-orange-dark"
          >
            Motor Operativo · Arquitectura de Procesos
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="text-5xl font-black leading-tight text-brand-blue-anchor md:text-6xl"
          >
            Tus finanzas deberían
            <br />
            <span className="text-brand-orange">financiar tu crecimiento.</span>
            <br />
            ¿Lo están haciendo?
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.4 }}
            className="mt-6 text-xl leading-relaxed text-content-muted"
          >
            Construimos el gobierno financiero que convierte tus números en decisiones estratégicas —
            no en fuente de ansiedad mensual.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.6 }}
            className="mt-4 text-base leading-relaxed text-content-muted"
          >
            El 40% de las PYMEs en LATAM identifica el control de costos como su mayor desafío. El
            30% no tiene planificación financiera de largo plazo. El 24% no accede a financiamiento
            porque no puede demostrar la salud de su negocio con datos. En ForjaConsulting convertimos
            tus finanzas en el motor que financia tu próxima etapa de crecimiento.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="/contacto?servicio=finanzas"
              className="inline-flex items-center justify-center rounded-xl bg-brand-blue-anchor px-6 py-4 font-semibold text-white transition-colors hover:bg-brand-blue-anchor/90"
            >
              Solicita tu Diagnóstico Financiero →
            </a>
            <a
              href="#problema-finanzas"
              className="inline-flex items-center text-brand-orange hover:underline"
            >
              Ver qué construimos en tus finanzas
            </a>
          </motion.div>

          {/* 3 métricas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.4 }}
            className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {METRICS.map((m, i) => (
              <div
                key={i}
                className="rounded-xl border border-brand-orange/30 bg-brand-orange-subtle px-4 py-3 text-center"
              >
                <p className="text-2xl font-bold text-brand-orange">
                  <AnimatedNumber end={m.value} suffix={m.suffix} />
                </p>
                <p className="mt-1 text-xs leading-snug text-slate-600">{m.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
