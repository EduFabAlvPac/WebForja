'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Box, ArrowRight, Check, ClipboardCheck, Hand } from 'lucide-react'

interface PillarData {
  number: number
  name: string
  intro: string
  details: string[]
  valueProp: string
}

interface PillarCardProps {
  pillar: PillarData
}

const PillarCard = ({ pillar }: PillarCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:border-brand-orange/30 group"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-brand-orange/5 to-brand-orange/0" />

      <div className="relative z-10 p-8">
        {/* Icon y título */}
        <div className="flex items-center gap-3 mb-5">
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-50"
            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.4 }}
          >
            <Box className="w-8 h-8 text-brand-orange" strokeWidth={2} />
          </motion.div>
          <div>
            <h3 className="text-brand-navy font-bold text-lg">
              PILAR {pillar.number} —{' '}
              <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md">
                {pillar.name}
              </span>
            </h3>
          </div>
        </div>

        {/* Frase introductoria */}
        <p className="text-gray-600 italic mb-5 border-l-2 border-brand-orange/40 pl-4">
          &ldquo;{pillar.intro}&rdquo;
        </p>

        {/* Lista de detalles */}
        <ul className="space-y-3 mb-6">
          {pillar.details.map((detail, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-3"
            >
              <div className="flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-green-500" strokeWidth={3} />
              </div>
              <span className="text-gray-700 text-sm">{detail}</span>
            </motion.li>
          ))}
        </ul>

        {/* Valor para la PYME */}
        <div className="pt-5 border-t border-gray-200">
          <div className="flex items-start gap-3">
            <Hand className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" strokeWidth={2} />
            <p className="text-gray-700 text-sm font-medium">
              <span className="text-brand-navy">Valor para la PYME:</span>{' '}
              {pillar.valueProp}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const PILARES: PillarData[] = [
  {
    number: 1,
    name: 'CLARIDAD ESTRATÉGICA',
    intro: 'Saber dónde estás y hacia dónde vas',
    details: [
      'Diagnóstico de madurez empresarial y digital (Evaluación de Madurez).',
      'Alineación de negocio, tecnología y personas.',
      'Decisiones basadas en datos, no intuición.',
    ],
    valueProp: 'Dejar de improvisar.',
  },
  {
    number: 2,
    name: 'ORDEN Y EJECUCIÓN',
    intro: 'Convertir la estrategia en acción',
    details: [
      'Procesos claros en operaciones, finanzas, comercial y talento.',
      'Arquitectura empresarial aplicada (no teórica).',
      'Metodología FORJA® paso a paso.',
    ],
    valueProp: 'Que las cosas pasen y se sostengan en el tiempo.',
  },
  {
    number: 3,
    name: 'CRECIMIENTO SOSTENIBLE',
    intro: 'Escalar sin caos',
    details: [
      'Modelos de negocio preparados para crecer.',
      'Digitalización con sentido (solo lo que genera impacto).',
      'Indicadores, control y mejora continua.',
    ],
    valueProp: 'Crecimiento ordenado.',
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-white border-t-2 border-slate-200 section-shadow relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-turquoise/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-orange font-bold text-sm uppercase tracking-wider mb-3"
          >
            NUESTRO ENFOQUE
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6 leading-tight"
          >
            3 Pilares Estratégicos que <span className="text-brand-orange">Transforman tu PYME</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            No vendemos servicios aislados. Diseñamos <strong>ecosistemas integrados</strong> donde cada componente potencia al otro para resultados exponenciales.
          </motion.p>
        </div>

        {/* Pilares Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 mb-16 max-w-7xl mx-auto">
          {PILARES.map((pillar) => (
            <PillarCard key={pillar.number} pillar={pillar} />
          ))}
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-brand-navy to-brand-purple rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-turquoise/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                ¿No Sabes Por Dónde Empezar?
              </h3>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Nuestro <strong>Evaluación de Madurez</strong> evalúa tu madurez digital y te recomienda el camino más efectivo para tu situación específica.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Link 
                  href="/contacto"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-forja-navy font-bold text-lg rounded-xl hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl group"
                >
                  <ClipboardCheck className="w-6 h-6 text-forja-fire" />
                  Evaluación de Madurez
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
