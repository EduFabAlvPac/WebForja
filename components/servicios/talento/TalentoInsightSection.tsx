'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  UserPlus,
  BookOpen,
  Gauge,
  GraduationCap,
  Trophy,
  LogOut,
} from 'lucide-react'

const JOURNEY_ETAPAS = [
  {
    id: 'reclutamiento',
    icon: UserPlus,
    nombre: 'Reclutamiento',
    dolor: 'Contratamos por urgencia, no por perfil. El 40% de las contrataciones falla en 90 días.',
    logro: 'Perfil de cargo definido, proceso estructurado. Tasa de éxito en contratación: +70%',
  },
  {
    id: 'onboarding',
    icon: BookOpen,
    nombre: 'Onboarding',
    dolor: 'El nuevo empleado aprende solo. 3 meses para ser productivo. Sin proceso formal.',
    logro: 'Plan de inducción de 30-60-90 días. Productividad plena en 6 semanas.',
  },
  {
    id: 'desempeno',
    icon: Gauge,
    nombre: 'Desempeño',
    dolor: 'No hay evaluaciones ni retroalimentación. Nadie sabe si está haciendo bien su trabajo.',
    logro: 'Sistema de evaluación por OKRs. Feedback continuo y objetivos claros.',
  },
  {
    id: 'desarrollo',
    icon: GraduationCap,
    nombre: 'Desarrollo',
    dolor: 'No hay plan de carrera. El talento se va cuando encuentra mejor oferta.',
    logro: 'Plan de carrera individual. Talento comprometido con el futuro de la empresa.',
  },
  {
    id: 'reconocimiento',
    icon: Trophy,
    nombre: 'Reconocimiento',
    dolor: 'Los logros no se celebran. El equipo no siente que su trabajo importa.',
    logro: 'Cultura de reconocimiento documentada. NPS del empleado medido y en mejora continua.',
  },
  {
    id: 'salida',
    icon: LogOut,
    nombre: 'Salida',
    dolor: 'Rotación del 35% anual. Costo: 150% del salario por cada reemplazo.',
    logro: 'Rotación reducida 35-40%. Ahorro: hasta $180M COP por año en PYMEs medianas.',
  },
]

const ARQUETIPOS = [
  {
    nombre: 'Carlos',
    rol: 'Gerente de Área',
    años: '12 años en la empresa',
    situacion:
      'Hace de todo porque no tiene equipo con roles claros. Está agotado y pensando en irse.',
    conForja:
      'Estructura organizacional clara, delegación efectiva, líder empoderado para crecer.',
  },
  {
    nombre: 'Valentina',
    rol: 'Colaboradora de Alto Potencial',
    años: '2 años',
    situacion:
      'Nadie le ha dicho que es la mejor del equipo. No ve futuro y ya está buscando otro trabajo.',
    conForja:
      'Plan de carrera individual, reconocimiento formal, comprometida a largo plazo.',
  },
  {
    nombre: 'Miguel',
    rol: 'Fundador / Gerente General',
    años: '—',
    situacion: 'Todo pasa por él. No puede salir de vacaciones. El negocio es él.',
    conForja: 'Equipo autónomo, procesos de delegación, empresa que funciona sin él presente.',
  },
]

export function TalentoInsightSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true })
  const [conForja, setConForja] = useState(false)

  return (
    <section id="costo-talento" ref={sectionRef} className="relative">
      {/* Sub-bloque A — Journey */}
      <div className="bg-surface-off py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-3xl font-bold text-brand-blue-anchor md:text-4xl"
          >
            El talento no se va de las empresas.
            <br />
            Se va de los malos líderes
            <br />
            y los roles sin sentido.
          </motion.h2>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setConForja(!conForja)}
              className="rounded-lg border border-brand-blue-anchor bg-white px-4 py-2 text-sm font-medium text-brand-blue-anchor shadow-sm hover:bg-slate-50"
            >
              {conForja ? 'Sin gestión' : 'Con ForjaConsulting'}
            </button>
          </div>

          <div className="mt-10 flex flex-col gap-8 md:flex-row md:flex-wrap md:justify-center md:gap-6">
            {JOURNEY_ETAPAS.map((etapa, i) => {
              const Icon = etapa.icon
              return (
                <motion.div
                  key={etapa.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex max-w-sm flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-anchor text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-brand-blue-anchor">{etapa.nombre}</h3>
                  </div>
                  <AnimatePresence mode="wait">
                    {!conForja ? (
                      <motion.div
                        key="dolor"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="mt-4"
                      >
                        <span className="inline-block rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700">
                          Dolor
                        </span>
                        <p className="mt-2 text-sm text-slate-600">{etapa.dolor}</p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="logro"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="mt-4"
                      >
                        <span className="inline-block rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
                          Logro
                        </span>
                        <p className="mt-2 text-sm text-slate-600">{etapa.logro}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Sub-bloque B — 3 Arquetipos */}
      <div className="border-t border-slate-200 bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {ARQUETIPOS.map((perfil, i) => (
              <motion.div
                key={perfil.nombre}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-slate-200 flex items-center justify-center text-2xl font-bold text-slate-500">
                    {perfil.nombre[0]}
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-blue-anchor">{perfil.nombre}</h3>
                    <p className="text-sm text-slate-500">{perfil.rol}</p>
                    <p className="text-xs text-slate-400">{perfil.años}</p>
                  </div>
                </div>
                <div className="mt-4 rounded-lg bg-red-50 p-3">
                  <p className="text-xs font-medium text-red-700">Situación actual</p>
                  <p className="mt-1 text-sm text-slate-600">&ldquo;{perfil.situacion}&rdquo;</p>
                </div>
                <div className="mt-3 rounded-lg bg-emerald-50 p-3">
                  <p className="text-xs font-medium text-emerald-700">Con ForjaConsulting</p>
                  <p className="mt-1 text-sm text-slate-600">{perfil.conForja}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Sub-bloque C — Dato de impacto */}
      <div className="bg-brand-blue-anchor py-16 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-8">
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-8xl font-black text-brand-orange md:text-9xl"
          >
            67%
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 max-w-2xl text-xl text-white/90"
          >
            de los colaboradores en LATAM no está comprometido activamente con su empresa. No porque
            no quieran — sino porque nadie les ha dado las condiciones para estarlo.
          </motion.p>
          <p className="mt-2 text-sm text-white/60">Gallup State of the Global Workplace · 2024</p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-6 inline-block rounded-full bg-white/10 px-4 py-2 text-sm text-white/90"
          >
            → El talento comprometido genera 23% más rentabilidad. Ese es el ROI de gestionar bien a
            tu gente.
          </motion.div>
        </div>
      </div>
    </section>
  )
}
