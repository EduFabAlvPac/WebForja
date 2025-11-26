'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { MethodologyPhase } from '@/types/services'

interface MethodologyTimelineProps {
  phases: MethodologyPhase[]
}

export function MethodologyTimeline({ phases }: MethodologyTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline vertical en mobile, puede ser horizontal en desktop grande */}
      <div className="space-y-8 md:space-y-12">
        {phases.map((phase, index) => (
          <motion.div
            key={phase.phase}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            {/* Connector line (except for last item) */}
            {index < phases.length - 1 && (
              <div className="hidden md:block absolute left-8 top-32 w-0.5 h-full bg-gradient-to-b from-brand-turquoise to-brand-purple -z-10" />
            )}

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Phase number circle */}
              <div className="md:col-span-2 flex flex-col items-center md:items-start">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-turquoise to-brand-purple rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl">
                  {phase.phase}
                </div>
                <ArrowRight className="hidden md:block w-6 h-6 text-brand-orange mt-4" />
              </div>

              {/* Content */}
              <div className="md:col-span-10">
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-gray-100 hover:border-brand-turquoise/30 transition-colors">
                  {/* Title and tagline */}
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-lg text-brand-orange font-semibold italic">
                      {phase.tagline}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* QUÉ HACEMOS */}
                    {phase.activities && phase.activities.length > 0 && (
                      <div>
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
                          Qué Hacemos
                        </h4>
                        <ul className="space-y-2">
                          {phase.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-brand-orange">→</span>
                              <span className="text-gray-700">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* ENTREGABLES */}
                    {phase.deliverables && phase.deliverables.length > 0 && (
                      <div>
                        <h4 className="text-sm font-bold text-brand-turquoise uppercase tracking-wider mb-3">
                          Entregables
                        </h4>
                        <ul className="space-y-2">
                          {phase.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="w-5 h-5 text-brand-turquoise flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 font-semibold">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}


