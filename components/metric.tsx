'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { cn } from '@/lib/utils'

/**
 * Metric Component - Contador animado SSR-friendly
 * 
 * Features:
 * - Contador progresivo con requestAnimationFrame
 * - Fallback estático en SSR
 * - Respeta prefers-reduced-motion
 * - Sin CLS (dimensiones reservadas)
 * - Tokens FORJA
 */

export interface MetricProps {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  label: string
  className?: string
  duration?: number // ms, default 1200
}

export function Metric({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  label,
  className,
  duration = 1200
}: MetricProps) {
  // Estado inicial = valor final para SSR (sin CLS)
  const [displayValue, setDisplayValue] = useState(value)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Detectar preferencia de movimiento reducido
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const animateValue = useCallback(() => {
    const startTime = performance.now()
    const startValue = 0

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing: ease-out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentValue = startValue + (value - startValue) * easeOut

      setDisplayValue(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setDisplayValue(value)
      }
    }

    // Empezar desde 0 en cliente
    setDisplayValue(0)
    requestAnimationFrame(animate)
  }, [duration, value])

  // Animación del contador con IntersectionObserver
  useEffect(() => {
    if (prefersReducedMotion || hasAnimated) return

    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateValue()
            setHasAnimated(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [prefersReducedMotion, hasAnimated, animateValue])

  const formattedValue = displayValue.toFixed(decimals)

  return (
    <div
      ref={ref}
      className={cn(
        'text-center p-6',
        className
      )}
    >
      {/* Valor con dimensiones fijas para evitar CLS */}
      <div className="min-h-[3.5rem] flex items-center justify-center">
        <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-forja-fire tabular-nums">
          {prefix}{formattedValue}{suffix}
        </span>
      </div>
      
      {/* Label */}
      <p className="mt-2 text-sm md:text-base text-slate-600 font-medium">
        {label}
      </p>
    </div>
  )
}

