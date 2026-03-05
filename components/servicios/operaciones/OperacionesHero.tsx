'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Package, Factory, Warehouse, Truck, UserCheck } from 'lucide-react'

const NODES = [
  { id: 'proveedor', label: 'Proveedor', Icon: Package },
  { id: 'produccion', label: 'Producción', Icon: Factory },
  { id: 'almacen', label: 'Almacén', Icon: Warehouse },
  { id: 'distribucion', label: 'Distribución', Icon: Truck },
  { id: 'cliente', label: 'Cliente', Icon: UserCheck },
]

const METRICS = [
  { value: 35, suffix: '%', label: 'Reducción promedio de costos operativos · McKinsey LATAM' },
  { value: 2.3, suffix: 'x', label: 'Mejora en rotación de inventario con Supply Chain rediseñada' },
  { value: 60, suffix: ' días', label: 'Tiempo promedio para primeros resultados de optimización' },
]

function AnimatedCounter({
  end,
  suffix,
  duration = 2000,
  label,
}: {
  end: number
  suffix: string
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
      setCount(end >= 10 ? Math.floor(eased * end) : Math.round(eased * end * 10) / 10)
      if (progress < 1) requestAnimationFrame(step)
      else setCount(end)
    }
    requestAnimationFrame(step)
  }, [isInView, end, duration])

  return (
    <div ref={ref} className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-center">
      <p className="text-2xl font-bold text-brand-orange">
        {count}
        {suffix}
      </p>
      <p className="mt-1 text-xs leading-snug text-slate-400">{label}</p>
    </div>
  )
}

export function OperacionesHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const pipelineRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-brand-blue-anchor"
    >
      {/* Pipeline SVG animado - partículas en loop */}
      <div className="absolute inset-0 opacity-30" aria-hidden>
        <svg className="h-full w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F97316" stopOpacity="0" />
              <stop offset="50%" stopColor="#F97316" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Líneas de conexión base */}
          <line
            x1="10%"
            y1="50%"
            x2="90%"
            y2="50%"
            stroke="url(#lineGrad)"
            strokeWidth="2"
            className="opacity-40"
          />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto flex flex-1 flex-col px-4 py-16 md:px-8 md:py-24">
        {/* Bloque superior: texto */}
        <div className="max-w-3xl text-left">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0 }}
            className="mb-6 inline-flex items-center rounded-full border border-brand-orange bg-white/10 px-4 py-2 text-sm font-semibold text-brand-orange"
          >
            Motor Operativo · Arquitectura de Procesos
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="text-5xl font-black leading-tight text-white md:text-6xl"
          >
            Procesos lentos y costosos
            <br />
            no son mala suerte.
            <br />
            Son{' '}
            <span className="text-brand-orange">mala arquitectura.</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.4 }}
            className="mt-6 text-xl leading-relaxed text-content-on-dark-muted"
          >
            Diseñamos operaciones eficientes y rentables que liberan recursos para que tu empresa
            pueda crecer — en lugar de sobrevivir.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.6 }}
            className="mt-4 text-base text-content-muted"
          >
            Una PYME con operaciones desorganizadas no puede escalar. Cada nuevo cliente se
            convierte en más caos, más costo y más dependencia del fundador. En ForjaConsulting
            rediseñamos tu cadena de valor completa: desde el proveedor hasta el cliente final,
            eliminando todo lo que no genera valor.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="mt-8 flex flex-col items-start gap-4 sm:flex-row"
          >
            <a
              href="/contacto?servicio=operaciones"
              className="inline-flex items-center justify-center rounded-xl bg-brand-orange px-6 py-4 font-semibold text-white transition-colors hover:bg-brand-orange-dark"
            >
              Diagnostica tu Cadena de Valor →
            </a>
            <a
              href="#diagnostico-operativo"
              className="inline-flex items-center text-brand-orange hover:underline"
            >
              ¿Qué procesos optimizamos?
            </a>
          </motion.div>
        </div>

        {/* Pipeline: 5 nodos - desktop horizontal / mobile vertical */}
        <motion.div
          ref={pipelineRef}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
          className="mt-12 flex h-48 w-full flex-col items-center justify-center md:flex-row md:gap-4 md:px-8"
        >
          {/* Desktop: nodos en fila con líneas y partículas */}
          <div className="hidden w-full max-w-4xl md:flex md:items-center md:justify-between">
            {NODES.map((node, i) => {
              const Icon = node.Icon
              return (
              <div key={node.id} className="flex flex-1 items-center">
                <motion.div
                  variants={{
                    hidden: { scale: 0, opacity: 0 },
                    visible: { scale: 1, opacity: 1 },
                  }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center"
                >
                  <div
                    className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-2 border-brand-orange bg-white/10"
                    style={{ boxShadow: '0 0 20px rgba(249,115,22,0.3)' }}
                  >
                    <Icon className="h-7 w-7 text-brand-orange" strokeWidth={2} />
                  </div>
                  <span className="mt-2 text-xs text-white">{node.label}</span>
                </motion.div>
                {i < NODES.length - 1 && (
                  <motion.div
                    className="relative mx-2 h-0.5 flex-1 overflow-hidden rounded bg-white/20"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ delay: 0.3 + (i + 1) * 0.3, duration: 0.4 }}
                    style={{ transformOrigin: 'left' }}
                  >
                    <motion.span
                      className="absolute inset-y-0 left-0 w-2 bg-brand-orange"
                      animate={{ x: ['0%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    />
                  </motion.div>
                )}
              </div>
            )})}
          </div>

          {/* Mobile: nodos apilados verticalmente */}
          <div className="flex flex-col items-center gap-2 md:hidden">
            {NODES.map((node, i) => {
              const Icon = node.Icon
              return (
              <motion.div
                key={node.id}
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: { scale: 1, opacity: 1 },
                }}
                transition={{ delay: i * 0.15, duration: 0.4 }}
                className="flex flex-col items-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-orange bg-white/10">
                  <Icon className="h-6 w-6 text-brand-orange" strokeWidth={2} />
                </div>
                <span className="mt-1 text-xs text-white">{node.label}</span>
                {i < NODES.length - 1 && (
                  <span className="my-1 text-brand-orange">↓</span>
                )}
              </motion.div>
            )})}
          </div>
        </motion.div>

        {/* 3 Métricas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.4 }}
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {METRICS.map((m, i) => (
            <AnimatedCounter
              key={i}
              end={m.value}
              suffix={m.suffix}
              label={m.label}
              duration={2200}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
