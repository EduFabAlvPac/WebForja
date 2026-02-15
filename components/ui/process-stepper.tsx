'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import * as Progress from '@radix-ui/react-progress'

export interface ProcessStep {
  label: string
  description?: string
}

export interface ProcessStepperProps {
  currentStep: number
  steps: ProcessStep[]
  orientation?: 'horizontal' | 'vertical'
  className?: string
}

/**
 * ProcessStepper Component - FORJA Design System
 * 
 * Stepper component using Radix UI Progress with:
 * - 5 configurable steps
 * - Current step indicator
 * - Check marks for completed steps
 * - Correct ARIA attributes (aria-valuemin/max/now)
 * - Responsive (horizontal/vertical)
 * - Framer Motion animations
 */
export function ProcessStepper({
  currentStep,
  steps,
  orientation = 'horizontal',
  className,
}: ProcessStepperProps) {
  // Ensure currentStep is within valid range
  const validCurrentStep = Math.max(1, Math.min(currentStep, steps.length))
  
  // Calculate progress percentage
  const progressPercentage = ((validCurrentStep - 1) / (steps.length - 1)) * 100

  return (
    <div
      className={cn(
        'w-full',
        orientation === 'vertical' ? 'flex flex-col' : 'flex flex-col',
        className
      )}
    >
      {/* Progress Bar (Radix UI) */}
      <Progress.Root
        className={cn(
          'relative overflow-hidden bg-slate-200 rounded-full',
          orientation === 'horizontal' ? 'h-2 w-full mb-8' : 'w-2 h-full mr-8'
        )}
        value={progressPercentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progressPercentage}
        aria-label={`Progreso: Paso ${validCurrentStep} de ${steps.length}`}
      >
        <Progress.Indicator
          className="h-full bg-gradient-to-r from-forja-fire to-forja-teal transition-all duration-500 ease-out"
          style={{ 
            width: orientation === 'horizontal' ? `${progressPercentage}%` : '100%',
            height: orientation === 'vertical' ? `${progressPercentage}%` : '100%'
          }}
        />
      </Progress.Root>

      {/* Steps */}
      <div
        className={cn(
          'flex gap-4',
          orientation === 'horizontal' 
            ? 'flex-row justify-between items-start' 
            : 'flex-col items-start'
        )}
      >
        {steps.map((step, index) => {
          const stepNumber = index + 1
          const isCompleted = stepNumber < validCurrentStep
          const isCurrent = stepNumber === validCurrentStep
          const isPending = stepNumber > validCurrentStep

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                'flex items-start gap-3',
                orientation === 'horizontal' ? 'flex-col items-center text-center flex-1' : 'flex-row w-full'
              )}
            >
              {/* Step Circle */}
              <motion.div
                className={cn(
                  'relative flex items-center justify-center rounded-full font-bold transition-all duration-300',
                  'flex-shrink-0',
                  orientation === 'horizontal' ? 'w-12 h-12 text-lg' : 'w-10 h-10 text-base',
                  {
                    'bg-gradient-to-br from-forja-fire to-forja-teal text-white shadow-lg': isCurrent,
                    'bg-green-500 text-white': isCompleted,
                    'bg-slate-200 text-slate-500': isPending,
                  }
                )}
                whileHover={{ scale: 1.1 }}
                animate={isCurrent ? {
                  boxShadow: [
                    '0 0 0 0 rgba(237, 116, 66, 0.4)',
                    '0 0 0 10px rgba(237, 116, 66, 0)',
                  ],
                } : {}}
                transition={isCurrent ? {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                } : {}}
              >
                {isCompleted ? (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  >
                    <Check className="w-6 h-6" strokeWidth={3} />
                  </motion.div>
                ) : (
                  <span>{stepNumber}</span>
                )}

                {/* Current Step Pulse Ring */}
                {isCurrent && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-forja-fire"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [1, 0, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                )}
              </motion.div>

              {/* Step Content */}
              <div className={cn(
                'flex flex-col',
                orientation === 'horizontal' ? 'items-center' : 'items-start flex-1'
              )}>
                <h4
                  className={cn(
                    'font-heading font-bold transition-colors duration-300',
                    orientation === 'horizontal' ? 'text-sm md:text-base' : 'text-base',
                    {
                      'text-forja-navy': isCurrent,
                      'text-green-700': isCompleted,
                      'text-slate-500': isPending,
                    }
                  )}
                >
                  {step.label}
                </h4>
                {step.description && (
                  <p
                    className={cn(
                      'text-xs md:text-sm mt-1 transition-colors duration-300',
                      {
                        'text-slate-700': isCurrent,
                        'text-green-600': isCompleted,
                        'text-slate-400': isPending,
                      }
                    )}
                  >
                    {step.description}
                  </p>
                )}

                {/* Current Step Indicator */}
                {isCurrent && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 px-3 py-1 bg-forja-fire/10 text-forja-fire text-xs font-semibold rounded-full"
                  >
                    En Progreso
                  </motion.div>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Progress Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-center text-sm text-slate-600"
      >
        <span className="font-semibold text-forja-navy">
          Paso {validCurrentStep} de {steps.length}
        </span>
        {' · '}
        <span>
          {Math.round(progressPercentage)}% Completado
        </span>
      </motion.div>
    </div>
  )
}

