'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Metric, MetricProps } from './metric'

/**
 * MetricGroup Component - Grid responsivo de métricas
 * 
 * Features:
 * - Grid responsivo (1 col móvil, 2-3-4 cols según cantidad)
 * - Título opcional
 * - Separadores opcionales
 * - Tokens FORJA
 */

export interface MetricGroupProps {
  title?: string
  subtitle?: string
  metrics: MetricProps[]
  columns?: 2 | 3 | 4 | 'auto'
  showDividers?: boolean
  className?: string
  children?: ReactNode
}

export function MetricGroup({
  title,
  subtitle,
  metrics,
  columns = 'auto',
  showDividers = true,
  className,
  children
}: MetricGroupProps) {
  // Determinar columnas automáticamente si es 'auto'
  const getGridCols = () => {
    if (columns !== 'auto') {
      switch (columns) {
        case 2: return 'grid-cols-1 sm:grid-cols-2'
        case 3: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        case 4: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
      }
    }
    
    // Auto: basado en cantidad de métricas
    const count = metrics.length
    if (count <= 2) return 'grid-cols-1 sm:grid-cols-2'
    if (count <= 3) return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
    return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
  }

  return (
    <section className={cn('py-12 md:py-16', className)}>
      {/* Header opcional */}
      {(title || subtitle) && (
        <div className="text-center mb-10 md:mb-12">
          {title && (
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-forja-navy mb-3">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Grid de métricas */}
      <div
        className={cn(
          'grid gap-6 md:gap-8',
          getGridCols()
        )}
      >
        {metrics.map((metric, index) => (
          <div
            key={index}
            className={cn(
              'relative',
              showDividers && index > 0 && 'lg:border-l lg:border-slate-200'
            )}
          >
            <Metric {...metric} />
          </div>
        ))}
      </div>

      {/* Children opcionales (ej: CTA) */}
      {children && (
        <div className="mt-10 md:mt-12 text-center">
          {children}
        </div>
      )}
    </section>
  )
}

