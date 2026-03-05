'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'
import { Users, Target, FileText } from 'lucide-react'

const PIRAMIDE_NIVELES = [
  {
    id: 'cultura',
    label: 'Cultura y Liderazgo',
    color: '#F97316',
    titulo: 'El liderazgo que el equipo merece',
    descripcion:
      'Desarrollamos las capacidades de liderazgo de tus mandos medios y directivos.',
    entregables: [
      'Diagnóstico de clima organizacional',
      'Programa de desarrollo de líderes',
      'Modelo de cultura organizacional documentado',
      'Rituales de equipo y prácticas de reconocimiento',
    ],
  },
  {
    id: 'evaluacion',
    label: 'Evaluación y Desempeño',
    color: '#1E5A8F',
    titulo: 'Claridad sobre quién está rindiendo y cómo',
    descripcion: 'Sistema de evaluación que motiva en lugar de generar ansiedad.',
    entregables: [
      'Sistema de evaluación por OKRs/KPIs por rol',
      'Proceso de feedback continuo (360°)',
      'Política de reconocimiento y compensación variable',
      'Plan de mejora de desempeño individualizado',
    ],
  },
  {
    id: 'atraccion',
    label: 'Atracción y Selección',
    color: '#1E4A7F',
    titulo: 'Contratar bien desde el principio',
    descripcion: 'Proceso de selección que atrae al perfil correcto y filtra al incorrecto.',
    entregables: [
      'Perfiles de cargo con competencias clave',
      'Proceso de selección estructurado por etapas',
      'Pruebas y entrevistas por competencias',
      'Plan de onboarding 30-60-90 días',
    ],
  },
  {
    id: 'estructura',
    label: 'Estructura y Roles',
    color: '#1E3A5F',
    titulo: 'La base que hace posible todo lo demás',
    descripcion: 'Sin roles claros y estructura sólida, nada de lo anterior funciona.',
    entregables: [
      'Organigrama funcional por diseño',
      'Perfiles de cargo con alcance y KPIs',
      'Matriz de competencias por área',
      'Manual de inducción organizacional',
    ],
  },
]

const PASOS = [
  {
    tiempo: '30 min',
    icono: Target,
    titulo: 'Sesión de diagnóstico',
    texto: 'Analizamos la situación actual de tu equipo: estructura, rotación, clima y desempeño.',
  },
  {
    tiempo: '48 horas',
    icono: FileText,
    titulo: 'Reporte de hallazgos',
    texto: 'Identificamos los 3 puntos críticos que más impactan la productividad de tu equipo.',
  },
  {
    tiempo: 'Propuesta',
    icono: Users,
    titulo: 'Plan de acción personalizado',
    texto: 'Diseñamos la intervención específica para tu empresa, tamaño y sector.',
  },
]

export function TalentoDeliverablesAndCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true })
  const [hoverId, setHoverId] = useState<string | null>(null)
  const [openMobile, setOpenMobile] = useState<string | null>(null)

  return (
    <section ref={sectionRef} className="relative">
      {/* Sub-bloque A — Pirámide */}
      <div className="bg-brand-blue-anchor py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-3xl font-bold text-white md:text-4xl"
          >
            Construimos tu ecosistema
            <br />
            de talento de base a cima.
          </motion.h2>

          {/* Desktop: dos columnas — pirámide a la izquierda, detalle a la derecha (todo dentro del azul) */}
          <div className="mx-auto mt-12 hidden max-w-5xl md:grid md:grid-cols-[1fr,400px] md:gap-10 md:items-start">
            {/* Pirámide: trapecios menos pronunciados para que el texto inferior no se corte */}
            <div className="space-y-0">
              {PIRAMIDE_NIVELES.map((nivel, i) => (
                <motion.button
                  key={nivel.id}
                  type="button"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  onMouseEnter={() => setHoverId(nivel.id)}
                  onFocus={() => setHoverId(nivel.id)}
                  onMouseLeave={() => setHoverId(null)}
                  onBlur={() => setHoverId(null)}
                  className={`relative flex w-full items-center justify-center py-4 text-center transition-all hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#1E3A5F] ${
                    hoverId === nivel.id ? 'opacity-100' : 'opacity-90'
                  }`}
                  style={{
                    clipPath: `polygon(${18 + i * 5}% 0%, ${82 - i * 5}% 0%, ${78 - i * 5}% 100%, ${22 + i * 5}% 100%)`,
                    backgroundColor: nivel.color,
                  }}
                >
                  <span className="px-4 text-base font-bold text-white sm:text-lg">
                    {nivel.label}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Panel de detalle: altura mínima fija para evitar saltos al cambiar de nivel */}
            <div className="sticky top-24 min-h-[360px] rounded-2xl border border-white/20 bg-brand-blue-corp/90 p-6 shadow-xl backdrop-blur-sm">
              <AnimatePresence mode="wait">
                {hoverId ? (
                  (() => {
                    const n = PIRAMIDE_NIVELES.find((x) => x.id === hoverId)
                    if (!n) return null
                    return (
                      <motion.div
                        key={n.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-y-auto"
                      >
                        <h3 className="text-lg font-bold leading-snug text-brand-orange">
                          {n.titulo}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/90">
                          {n.descripcion}
                        </p>
                        <ul className="mt-4 space-y-2">
                          {n.entregables.map((e, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2 text-sm leading-snug text-white/90"
                            >
                              <FileText className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                              <span>{e}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )
                  })()
                ) : (
                  <motion.p
                    key="hint"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center text-sm text-white/70"
                  >
                    Pasa el ratón sobre cada nivel de la pirámide para ver el detalle.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile: lista expandible */}
          <div className="mt-8 space-y-3 md:hidden">
            {PIRAMIDE_NIVELES.map((nivel) => {
              const isOpen = openMobile === nivel.id
              return (
                <motion.div
                  key={nivel.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-xl border border-white/20"
                >
                  <button
                    type="button"
                    onClick={() => setOpenMobile(isOpen ? null : nivel.id)}
                    className="flex w-full items-center justify-between bg-white/10 px-4 py-4 text-left text-white"
                    style={{ borderLeft: `4px solid ${nivel.color}` }}
                  >
                    <span className="font-bold">{nivel.label}</span>
                    <span className="text-2xl">{isOpen ? '−' : '+'}</span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border-white/10 bg-white/5 px-4 py-4"
                      >
                        <h3 className="font-bold text-brand-orange">{nivel.titulo}</h3>
                        <p className="mt-1 text-sm text-white/85">{nivel.descripcion}</p>
                        <ul className="mt-3 space-y-2">
                          {nivel.entregables.map((e, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-white/90">
                              <FileText className="h-4 w-4 shrink-0 text-brand-orange" />
                              {e}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Sub-bloque B — CTA */}
      <div className="bg-brand-orange py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-3xl font-bold text-white md:text-4xl"
          >
            Tu equipo está listo
            <br />
            para dar más.
            <br />
            ¿Tú estás listo para desbloquearlo?
          </motion.h2>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
            {PASOS.map((paso, i) => {
              const Icon = paso.icono
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-white/30 bg-white/20 p-6 text-white"
                >
                  <p className="text-sm font-semibold opacity-90">PASO {i + 1} — {paso.tiempo}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <Icon className="h-6 w-6" />
                    <h3 className="font-bold">{paso.titulo}</h3>
                  </div>
                  <p className="mt-2 text-sm opacity-95">{paso.texto}</p>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-12 flex flex-col items-center gap-4">
            <Link
              href="/contacto?servicio=talento"
              className="rounded-xl bg-brand-blue-anchor px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-brand-blue-anchor"
            >
              Agenda el Diagnóstico de Talento →
            </Link>
            <p className="text-sm text-white/90">
              Sin costo · Sin compromiso · Para equipos de 5 a 200 personas
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
