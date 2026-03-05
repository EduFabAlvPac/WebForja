'use client'

import { motion } from 'framer-motion'
import {
  Clock,
  Target,
  TrendingDown,
  RefreshCw,
  Users,
  CircleDollarSign,
  Map,
  Compass,
  BarChart3,
  FileText,
} from 'lucide-react'

const PAIN_CARDS = [
  {
    Icon: Clock,
    symptom: 'Trabajo 12 horas al día pero siento que el negocio no avanza realmente',
  },
  {
    Icon: Target,
    symptom: 'Tengo muchas ideas pero no sé cuál priorizar ni por dónde empezar',
  },
  {
    Icon: TrendingDown,
    symptom: 'Mis resultados dependen del mes — no tengo crecimiento predecible',
  },
  {
    Icon: RefreshCw,
    symptom: 'Siempre apagamos incendios, nunca tenemos tiempo para planear',
  },
  {
    Icon: Users,
    symptom: 'Mi equipo no entiende hacia dónde vamos ni por qué hace lo que hace',
  },
  {
    Icon: CircleDollarSign,
    symptom: 'Invierto en tecnología y personas, pero no veo el retorno esperado',
  },
]

const ENTREGABLES = [
  {
    Icon: Map,
    title: 'Diagnóstico Estratégico',
    description:
      'Radiografía completa de tu posición actual: modelo de negocio, mercado, competencia y capacidades reales.',
    pill: 'Lo que recibes: Informe ejecutivo + sesión de presentación',
  },
  {
    Icon: Compass,
    title: 'Mapa Estratégico + OKRs',
    description:
      'Tu destino definido con claridad: objetivos de largo plazo, metas medibles y prioridades ordenadas para tu equipo.',
    pill: 'Lo que recibes: Plan estratégico ejecutable a 12-36 meses',
  },
  {
    Icon: BarChart3,
    title: 'Modelo de ROI por Iniciativa',
    description:
      'Cada decisión estratégica tiene un sustento económico. Sabes exactamente en qué invertir y qué retorno esperar.',
    pill: 'Lo que recibes: Modelo financiero + dashboard de seguimiento',
  },
]

export function ProblemDiagnosticSection() {
  return (
    <section className="relative">
      {/* Sub-bloque A — Pain Cards */}
      <div className="bg-surface-subtle py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center md:text-left"
            style={{ color: '#1E3A5F' }}
          >
            ¿Alguno de estos síntomas describe tu empresa hoy?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PAIN_CARDS.map((card, i) => {
              const Icon = card.Icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="bg-white rounded-xl p-6 shadow-sm border-t-4"
                  style={{ borderTopColor: '#F97316' }}
                >
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
                    style={{ backgroundColor: 'rgba(249, 115, 22, 0.12)' }}
                  >
                    <Icon className="w-6 h-6" style={{ color: '#F97316' }} strokeWidth={2} />
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">{card.symptom}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Sub-bloque B — Frase separadora */}
      <div
        className="w-full py-12"
        style={{ backgroundColor: '#F97316' }}
      >
        <p className="text-center text-2xl md:text-3xl text-white font-semibold italic px-4">
          &ldquo;Si te identificaste con 2 o más síntomas, tu empresa necesita una brújula — no
          más velocidad.&rdquo;
        </p>
      </div>

      {/* Sub-bloque C — Entregables */}
      <div className="py-16 md:py-24" style={{ backgroundColor: '#1E3A5F' }}>
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Lo que construimos juntos.
            <br />
            Lo que tú te llevas.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ENTREGABLES.map((item, i) => {
              const Icon = item.Icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.4 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-white"
                >
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4"
                    style={{ backgroundColor: 'rgba(249, 115, 22, 0.2)' }}
                  >
                    <Icon className="w-7 h-7" style={{ color: '#F97316' }} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#F97316' }}>
                    {item.title}
                  </h3>
                  <p className="text-white/85 text-sm leading-relaxed mb-4">{item.description}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-white/80 bg-white/10 px-3 py-1.5 rounded-full">
                    <FileText className="w-3.5 h-3.5 shrink-0" style={{ color: '#F97316' }} />
                    {item.pill}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
