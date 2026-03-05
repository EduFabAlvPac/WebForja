'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { MapPin, Workflow, LayoutDashboard, Rocket } from 'lucide-react'

const ZONES = [
  {
    id: 'compras',
    label: 'Compras',
    width: '25%',
  },
  {
    id: 'produccion',
    label: 'Producción',
    width: '25%',
  },
  {
    id: 'logistica',
    label: 'Logística',
    width: '25%',
  },
  {
    id: 'servicio',
    label: 'Servicio',
    width: '25%',
  },
]

const PAIN_CARDS = [
  {
    zone: 'Compras y Proveedores',
    severity: 'Alta' as const,
    symptom:
      'Compras reactivas sin planificación. Dependencia de 1-2 proveedores sin alternativas. Precios que varían mes a mes.',
  },
  {
    zone: 'Inventario y Almacén',
    severity: 'Alta' as const,
    symptom:
      'Capital inmovilizado en stock muerto. Roturas en productos clave. Sin visibilidad en tiempo real.',
  },
  {
    zone: 'Producción / Servicio',
    severity: 'Alta' as const,
    symptom:
      'Cuellos de botella sin mapear. Reprocesos costosos sin registro. Calidad inconsistente que genera reclamos.',
  },
  {
    zone: 'Logística y Distribución',
    severity: 'Media' as const,
    symptom:
      'Entregas tardías sin seguimiento. Costos de última milla fuera de control. Sin métricas de nivel de servicio.',
  },
  {
    zone: 'Medición y Control',
    severity: 'Media' as const,
    symptom:
      'Sin KPIs operativos ni tablero de control. Decisiones tomadas por intuición, no por datos.',
  },
]

const ENTREGABLES = [
  {
    icon: MapPin,
    title: 'Mapa de Cadena de Valor (VSM)',
    description:
      'Fotografía completa de tus procesos: tiempos, costos, desperdicios y cuellos de botella con datos reales.',
    before: 'No sé dónde se pierde tiempo y dinero',
    after: 'Tengo visibilidad total de cada etapa',
  },
  {
    icon: Workflow,
    title: 'Diseño de Procesos Optimizados (TO-BE)',
    description:
      'Nuevo modelo operativo: procesos rediseñados, roles clarificados, tecnología integrada, desperdicios eliminados.',
    before: 'Apagamos incendios todo el día',
    after: 'Operamos con procesos predecibles',
  },
  {
    icon: LayoutDashboard,
    title: 'Sistema de KPIs Operativos',
    description:
      'Tablero con 8-12 indicadores clave para monitorear y decidir en tiempo real.',
    before: 'No sé si estamos siendo eficientes',
    after: 'Mido, controlo y mejoro continuamente',
  },
  {
    icon: Rocket,
    title: 'Plan de Implementación y Acompañamiento',
    description:
      'Hoja de ruta priorizada para implementar cambios con el menor impacto en la operación diaria.',
    before: 'Cambiar procesos paraliza el negocio',
    after: 'Mejoramos sin detener la operación',
  },
]

export function OperativeDiagnosticSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const scannerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const [scannerPosition, setScannerPosition] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 4000
    const start = performance.now()
    let raf: number
    const tick = (now: number) => {
      const elapsed = now - start
      const progress = (elapsed % duration) / duration
      setScannerPosition(progress * 100)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [isInView])

  return (
    <section id="diagnostico-operativo" ref={sectionRef} className="relative">
      {/* Sub-bloque A — Escáner */}
      <div className="bg-surface-off py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-3xl font-bold text-brand-blue-anchor md:text-4xl"
          >
            ¿Tu operación tiene
            <br />
            estas zonas críticas?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl rounded-xl bg-brand-blue-anchor px-4 py-3 text-center text-sm text-white"
          >
            El 68% de las ineficiencias operativas en PYMEs son visibles — pero nunca se han
            medido formalmente.
          </motion.div>

          {/* Diagrama + barra escáner */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative mx-auto mt-8 flex h-24 w-full max-w-4xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
          >
            {ZONES.map((z, idx) => {
              const zoneStart = idx * 25
              const zoneEnd = (idx + 1) * 25
              const isHighlighted = scannerPosition >= zoneStart && scannerPosition < zoneEnd
              return (
              <div
                key={z.id}
                className="flex flex-1 items-center justify-center border-r border-slate-200 last:border-r-0 transition-colors duration-150"
                style={{
                  width: z.width,
                  backgroundColor: isHighlighted ? '#FEF2F2' : undefined,
                }}
              >
                <span className="text-sm font-medium text-slate-700">{z.label}</span>
              </div>
            )})}
            <div
              className="absolute top-0 bottom-0 w-1 bg-brand-orange"
              style={{
                left: `${scannerPosition}%`,
                transform: 'translateX(-50%)',
                boxShadow: '0 0 8px rgba(249,115,22,0.6)',
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Sub-bloque B — Cards zonas de dolor */}
      <div className="border-t border-slate-200 bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PAIN_CARDS.map((card, i) => (
              <motion.div
                key={card.zone}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="absolute right-4 top-4 flex items-center gap-1.5">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      card.severity === 'Alta' ? 'bg-red-500' : 'bg-amber-500'
                    }`}
                  />
                  <span className="text-xs font-medium text-slate-500">{card.severity}</span>
                </div>
                <h3 className="pr-16 text-lg font-bold text-brand-blue-anchor">{card.zone}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.symptom}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Sub-bloque C — Entregables */}
      <div className="bg-brand-blue-anchor py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-3xl font-bold text-white md:text-4xl"
          >
            Lo que rediseñamos.
            <br />
            Lo que mides después.
          </motion.h2>

          <div className="mx-auto mt-12 max-w-4xl">
            {/* Timeline horizontal desktop / vertical mobile */}
            <div className="flex flex-col gap-8 md:flex-row md:items-stretch md:gap-0">
              {ENTREGABLES.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative flex flex-1 flex-col items-center md:px-4"
                  >
                    <div className="flex flex-col items-center rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange/20">
                        <Icon className="h-7 w-7 text-brand-orange" strokeWidth={2} />
                      </div>
                      <h3 className="text-lg font-bold text-brand-orange">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/85">
                        {item.description}
                      </p>
                      <div className="mt-4 inline-flex flex-wrap items-center justify-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs">
                        <span className="text-white/70">Antes →</span>
                        <span className="text-red-200/90">&ldquo;{item.before}&rdquo;</span>
                        <span className="text-white/70">Después →</span>
                        <span className="text-emerald-200/90">&ldquo;{item.after}&rdquo;</span>
                      </div>
                    </div>
                    {i < ENTREGABLES.length - 1 && (
                      <div className="my-4 hidden h-px flex-1 bg-white/20 md:my-0 md:block md:w-0" />
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
