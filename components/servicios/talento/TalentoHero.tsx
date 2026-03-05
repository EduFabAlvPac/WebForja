'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const INITIALS = [
  'AC', 'BM', 'CR', 'DL', 'EP', 'FT', 'GV', 'HN',
  'IQ', 'JR', 'KS', 'LT', 'MU', 'NV', 'OW', 'PX',
  'QY', 'RZ', 'SA', 'TB', 'UC', 'VD', 'WE', 'XF',
  'YG', 'ZH', 'AI', 'BJ', 'CK', 'DM', 'EN', 'FO',
]

const METRICS = [
  { value: 150, suffix: '%', label: 'Costo promedio de reemplazar un empleado (% del salario anual) · SHRM 2024' },
  { value: 67, suffix: '%', label: 'De los colaboradores LATAM no está comprometido activamente con su empresa · Gallup' },
  { value: 23, suffix: '%', label: 'Mayor rentabilidad en empresas con equipos altamente comprometidos · Gallup' },
]

export function TalentoHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true })
  const [activeCount, setActiveCount] = useState(0)
  const totalToActivate = 24
  const totalAvatars = 32

  useEffect(() => {
    if (!isInView) return
    const timeouts: ReturnType<typeof setTimeout>[] = []
    for (let i = 0; i < totalToActivate; i++) {
      const delay = Math.random() * 3000
      timeouts.push(
        setTimeout(() => {
          setActiveCount((c) => c + 1)
        }, delay)
      )
    }
    return () => timeouts.forEach(clearTimeout)
  }, [isInView])

  return (
    <section ref={sectionRef} className="relative flex min-h-screen w-full flex-col bg-brand-blue-anchor overflow-hidden">
      {/* Grid decorativo de iniciales (no son imágenes; efecto visual de “equipo”) */}
      <div className="absolute inset-0 grid grid-cols-5 grid-rows-6 gap-2 p-6 opacity-40 md:grid-cols-8 md:grid-rows-4 md:gap-3 md:p-8" aria-hidden="true">
        {INITIALS.slice(0, 32).map((initials, i) => {
          const isActive = isInView && i < activeCount
          return (
            <motion.div
              key={i}
              initial={false}
              animate={{
                backgroundColor: isActive ? '#F97316' : 'rgba(255,255,255,0.08)',
                borderColor: isActive ? '#F97316' : 'rgba(255,255,255,0.1)',
                boxShadow: isActive ? '0 0 12px rgba(249,115,22,0.6)' : 'none',
              }}
              transition={{ duration: 0.3 }}
              className="flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-bold text-white md:h-10 md:w-10"
            >
              {initials}
            </motion.div>
          )
        })}
      </div>

      <div className="container relative z-10 mx-auto flex flex-1 flex-col items-start justify-center px-4 py-20 text-left md:py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-6 inline-flex items-center rounded-full border border-brand-orange bg-white/10 px-4 py-2 text-sm font-semibold text-brand-orange"
        >
          Motor Operativo · Arquitectura de Procesos
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="text-5xl font-black leading-tight text-white md:text-6xl"
        >
          Tu empresa ya tiene
          <br />
          el talento que necesita.
          <br />
          El problema es que <span className="text-brand-orange">no está alineado.</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.4 }}
          className="mt-6 max-w-2xl text-xl leading-relaxed text-content-on-dark-muted"
        >
          Construimos equipos que entienden hacia dónde va la empresa, saben qué se espera de ellos
          y tienen las herramientas para lograrlo.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.6 }}
          className="mt-4 max-w-2xl text-base text-content-muted"
        >
          La rotación de personal le cuesta a una PYME entre 50% y 200% del salario anual de cada
          empleado perdido. Pero el problema no es la rotación — es lo que la causa: roles mal
          definidos, líderes sin herramientas para gestionar, y personas que no ven futuro en la
          empresa porque la empresa misma no tiene un futuro claro definido.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="mt-8 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="/contacto?servicio=talento"
            className="inline-flex items-center justify-center rounded-xl bg-brand-orange px-6 py-4 font-semibold text-white transition-colors hover:bg-brand-orange-dark"
          >
            Activa el potencial de tu equipo →
          </a>
          <a
            href="#costo-talento"
            className="inline-flex items-center text-white hover:underline"
          >
            ¿Cómo lo logramos?
          </a>
        </motion.div>

        {/* 3 métricas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.4 }}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {METRICS.map((m, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-center"
            >
              <p className="text-2xl font-bold text-white">
                {m.value}
                {m.suffix}
              </p>
              <p className="mt-1 text-xs leading-snug text-content-on-dark-muted">{m.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
