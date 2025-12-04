'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface HomeRateProps {
  setActiveTab?: (tab: string) => void
}

const ratingOptions = [
  { value: 5, label: 'Excelente', emoji: '🤩' },
  { value: 4, label: 'Muy bien', emoji: '😊' },
  { value: 3, label: 'Bien', emoji: '🙂' },
  { value: 2, label: 'Podemos mejorar', emoji: '😕' },
  { value: 1, label: 'Necesito ayuda', emoji: '😟' },
]

export function HomeRate({ setActiveTab }: HomeRateProps = {}) {
  const [selected, setSelected] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const router = useRouter()

  const handleRate = (value: number) => {
    setSelected(value)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          className="flex h-16 w-16 items-center justify-center rounded-2xl bg-forja-teal/10 text-3xl text-forja-purple/90"
        >
          <Sparkles className="h-7 w-7" />
        </motion.div>
        <p className="text-sm font-semibold text-forja-navy">
          Gracias por compartir tu experiencia
        </p>
        <p className="text-xs text-slate-500">
          Nos ayuda a priorizar mejoras con foco en resultados.
        </p>
        <div className="flex w-full gap-3">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => {
              setSubmitted(false)
              setSelected(null)
            }}
          >
            Calificar otra vez
          </Button>
          <Button
            className="flex-1"
            onClick={() => router.push('/contacto')}
          >
            Habla con un Forjador
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-1">
        <h3 className="text-lg font-heading font-semibold text-forja-navy">
          ¿Qué tan alineada estuvo esta experiencia?
        </h3>
        <p className="text-sm text-slate-600">
          Tu opinión guía nuestros próximos pasos con foco en valor.
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] gap-3">
        {ratingOptions.map((option) => {
          const isActive = selected === option.value
          return (
            <button
              type="button"
              key={option.value}
              onClick={() => handleRate(option.value)}
              aria-pressed={isActive}
              aria-label={option.label}
              className={cn(
                'flex flex-col items-center justify-center gap-1 rounded-xl border px-3 py-4 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forja-teal focus-visible:ring-offset-2 focus-visible:ring-offset-white',
                isActive
                  ? 'border-forja-teal bg-forja-teal/10 text-forja-teal shadow-card'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
              )}
            >
              <span className="text-2xl">{option.emoji}</span>
              <span>{option.label}</span>
            </button>
          )
        })}
      </div>

      <p className="text-center text-xs text-slate-400">
        Puedes cambiar tu calificación cuando lo desees.
      </p>
    </div>
  )
}

