'use client'

import { motion } from 'framer-motion'
import { Check, AlertCircle } from 'lucide-react'
import { Problem } from '@/types/services'
import * as LucideIcons from 'lucide-react'
import { Card } from '@/components/ui/card'

interface ProblemCardProps {
  problem: Problem
  index: number
}

export function ProblemCard({ problem, index }: ProblemCardProps) {
  // Usar el icono si existe, de lo contrario usar el emoji
  const IconComponent = problem.iconComponent 
    ? LucideIcons[problem.iconComponent as keyof typeof LucideIcons] as any
    : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="border-l-4 border-brand-turquoise hover:border-brand-orange transition-all duration-300 overflow-hidden group h-full flex flex-col">
      <div className="p-6 md:p-8 flex-1 flex flex-col">
        {/* Icon and Title */}
        <div className="flex items-start gap-4 mb-6">
          {IconComponent ? (
            <motion.div
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.4 }}
              className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl flex items-center justify-center group-hover:from-red-100 group-hover:to-orange-100 transition-colors"
            >
              <IconComponent className="w-7 h-7 text-red-500" strokeWidth={2} />
            </motion.div>
          ) : (
            <div className="text-4xl flex-shrink-0">{problem.icon}</div>
          )}
          <h3 className="text-xl md:text-2xl font-bold text-brand-navy leading-tight group-hover:text-brand-orange transition-colors">
            {problem.title}
          </h3>
        </div>

        {/* Symptom */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 mb-6 border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="w-4 h-4 text-red-500" />
            <p className="text-sm font-bold text-gray-700 uppercase tracking-wider">
              Síntoma
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">{problem.symptom}</p>
        </div>

        {/* Solution */}
        <div className="flex-1">
          <p className="text-sm font-bold text-brand-turquoise uppercase tracking-wider mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-brand-turquoise rounded-full"></span>
            Cómo lo Resolvemos
          </p>
          <ul className="space-y-2">
            {problem.solution.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
    </motion.div>
  )
}


