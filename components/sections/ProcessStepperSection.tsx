'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ProcessStepper, ProcessStep } from '@/components/ui/process-stepper'
import { Button } from '@/components/ui/button'
import { Rocket, ArrowRight } from 'lucide-react'

/**
 * ProcessStepperSection - Metodología FORJA® en Homepage
 * 
 * Features:
 * - ProcessStepper con 5 fases FORJA
 * - Microcopys descriptivos
 * - Paso actual resaltado
 * - Transición suave
 * - CTA al final
 * - Animaciones con framer-motion
 */

const FORJA_STEPS: ProcessStep[] = [
  {
    label: 'Fundamentar',
    description: 'Diagnóstico profundo y análisis de situación actual'
  },
  {
    label: 'Orientar',
    description: 'Definición de objetivos y roadmap estratégico'
  },
  {
    label: 'Rediseñar',
    description: 'Arquitectura de soluciones y procesos optimizados'
  },
  {
    label: 'Justificar',
    description: 'Business case y métricas de ROI esperado'
  },
  {
    label: 'Acompañar',
    description: 'Implementación guiada y seguimiento continuo'
  }
]

export function ProcessStepperSection() {
  const [currentStep, setCurrentStep] = useState(3) // Mostrar paso 3 como ejemplo
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50"
      aria-labelledby="process-heading"
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-forja-fire/10 text-forja-fire rounded-full text-sm font-semibold mb-4"
          >
            <Rocket className="w-4 h-4" />
            <span>Metodología Probada</span>
          </motion.div>

          <h2 
            id="process-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-forja-navy mb-4"
          >
            Metodología <span className="text-forja-fire">FORJA®</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Un proceso sistemático de 5 fases que elimina el caos y garantiza resultados medibles
          </p>
        </motion.div>

        {/* Stepper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-12"
        >
          <div className="bg-white rounded-2xl shadow-card border border-slate-200 p-8 md:p-12">
            <ProcessStepper
              currentStep={currentStep}
              steps={FORJA_STEPS}
              orientation="horizontal"
            />
          </div>
        </motion.div>

        {/* Microcopys - Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12"
        >
          {[
            {
              title: 'Cero Ambigüedad',
              description: 'Cada fase tiene entregables concretos y métricas claras',
              icon: '📋'
            },
            {
              title: 'ROI Medible',
              description: 'Business case validado antes de la implementación',
              icon: '📈'
            },
            {
              title: 'Acompañamiento',
              description: 'No te dejamos solo: seguimiento continuo hasta el éxito',
              icon: '🤝'
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-forja-teal hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-3">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-forja-navy mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-slate-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Controls - Demo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-slate-500 mb-4">
            Explora cada fase de la metodología
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {FORJA_STEPS.map((step, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index + 1)}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                  ${currentStep === index + 1
                    ? 'bg-forja-fire text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }
                `}
              >
                {step.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-br from-forja-navy via-forja-purple to-forja-navy rounded-2xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Listo para Transformar tu Empresa?
            </h3>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Comienza con un diagnóstico gratuito y descubre cómo la Metodología FORJA® puede impulsar tu crecimiento
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                className="bg-white text-forja-navy hover:bg-slate-100 shadow-xl"
                asChild
              >
                <Link href="/contacto" className="flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  <span>Solicita tu Diagnóstico Gratis</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
                asChild
              >
                <Link href="/servicios" className="flex items-center gap-2">
                  <span>Ver Todos los Servicios</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

