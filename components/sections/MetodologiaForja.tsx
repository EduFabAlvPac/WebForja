'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '../animations/ScrollReveal'

const FORJA_PHASES = [
  {
    letter: 'F',
    title: 'Fundamentar',
    subtitle: 'Diagnóstico',
    description: 'Evaluamos el estado actual de tu empresa mediante análisis profundo de procesos, tecnología y estrategia. Identificamos oportunidades y brechas.',
    icon: '🔍',
    color: 'brand-turquoise',
    deliverables: ['Diagnóstico empresarial completo', 'Análisis FODA digital', 'Roadmap inicial de transformación']
  },
  {
    letter: 'O',
    title: 'Orientar',
    subtitle: 'Estrategia',
    description: 'Definimos la visión estratégica y los objetivos alineados con tu modelo de negocio. Diseñamos la arquitectura objetivo.',
    icon: '🎯',
    color: 'brand-orange',
    deliverables: ['Plan estratégico de transformación', 'OKRs definidos', 'Arquitectura empresarial objetivo']
  },
  {
    letter: 'R',
    title: 'Realizar',
    subtitle: 'Ejecución',
    description: 'Implementamos las iniciativas priorizadas con metodologías ágiles. Ejecutamos quick wins para generar tracción.',
    icon: '⚡',
    color: 'brand-purple',
    deliverables: ['Proyectos implementados', 'Quick wins entregados', 'Procesos optimizados']
  },
  {
    letter: 'J',
    title: 'Jugar',
    subtitle: 'Agilidad',
    description: 'Fomentamos experimentación controlada y cultura de innovación. Probamos nuevos modelos de negocio digitales.',
    icon: '🚀',
    color: 'brand-coral',
    deliverables: ['MVPs lanzados', 'Pilotos ejecutados', 'Aprendizajes documentados']
  },
  {
    letter: 'A',
    title: 'Avanzar',
    subtitle: 'Mejora Continua',
    description: 'Establecemos mecanismos de mejora continua y medición de resultados. Escalamos las iniciativas exitosas.',
    icon: '📈',
    color: 'brand-turquoise',
    deliverables: ['Framework de governance', 'KPIs y dashboards', 'Plan de escalamiento']
  }
]

export function MetodologiaForja() {
  const [activePhase, setActivePhase] = useState(0)

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <ScrollReveal className="text-center mb-16">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wide">
            Nuestra Metodología
          </span>
          <h2 className="text-h2-mobile md:text-h2-desktop mt-2 mb-4">
            La Metodología <span className="text-brand-orange">FORJA</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tu ruta estructurada hacia la transformación empresarial sostenible
          </p>
        </ScrollReveal>

        {/* Timeline Horizontal */}
        <div className="relative mb-12">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 hidden md:block" />
          <motion.div
            className="absolute top-1/2 left-0 h-1 bg-brand-orange -translate-y-1/2 hidden md:block"
            initial={{ width: 0 }}
            animate={{ width: `${(activePhase / (FORJA_PHASES.length - 1)) * 100}%` }}
            transition={{ duration: 0.5 }}
          />

          {/* Phase Circles */}
          <div className="relative flex flex-wrap md:flex-nowrap justify-between md:justify-between items-center gap-4 md:gap-0">
            {FORJA_PHASES.map((phase, index) => (
              <motion.button
                key={phase.letter}
                onClick={() => setActivePhase(index)}
                className={`relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full font-bold text-2xl md:text-3xl transition-all ${
                  index <= activePhase
                    ? `bg-${phase.color} text-white shadow-lg`
                    : 'bg-white text-gray-400 border-2 border-gray-200'
                } ${index === activePhase ? 'ring-4 ring-brand-orange/30' : ''}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {phase.letter}
                {index < activePhase && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                  >
                    <Check className="w-4 h-4 text-white" />
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Phase Content */}
        <motion.div
          key={activePhase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-card shadow-card p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="text-6xl">{FORJA_PHASES[activePhase].icon}</div>
            <div className="flex-1">
              <h3 className="text-h3-mobile md:text-h3-desktop mb-2">
                {FORJA_PHASES[activePhase].title}
                <span className="text-brand-orange ml-2">
                  ({FORJA_PHASES[activePhase].subtitle})
                </span>
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {FORJA_PHASES[activePhase].description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Entregables Clave:</h4>
                <ul className="space-y-2">
                  {FORJA_PHASES[activePhase].deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-brand-orange flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Download Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white"
          >
            <Download className="mr-2 h-5 w-5" />
            Descargar Metodología FORJA (PDF)
          </Button>
        </div>
      </div>
    </section>
  )
}

