'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * WebVitalsReporter - Componente cliente para reportar Web Vitals
 * 
 * Usa la API de Performance del navegador para medir:
 * - LCP (Largest Contentful Paint)
 * - FID (First Input Delay)
 * - CLS (Cumulative Layout Shift)
 * - FCP (First Contentful Paint)
 * - TTFB (Time to First Byte)
 */

type MetricName = 'CLS' | 'FCP' | 'FID' | 'INP' | 'LCP' | 'TTFB'

interface WebVitalMetric {
  name: MetricName
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  id: string
}

// Umbrales de Core Web Vitals
const THRESHOLDS: Record<MetricName, { good: number; poor: number }> = {
  LCP: { good: 2500, poor: 4000 },
  FID: { good: 100, poor: 300 },
  INP: { good: 200, poor: 500 },
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  TTFB: { good: 800, poor: 1800 },
}

function getRating(name: MetricName, value: number): 'good' | 'needs-improvement' | 'poor' {
  const threshold = THRESHOLDS[name]
  if (value <= threshold.good) return 'good'
  if (value <= threshold.poor) return 'needs-improvement'
  return 'poor'
}

function reportMetric(metric: WebVitalMetric, page: string) {
  // En desarrollo: log en consola
  if (process.env.NODE_ENV !== 'production') {
    const colors = {
      good: 'color: #22c55e',
      'needs-improvement': 'color: #eab308',
      poor: 'color: #ef4444',
    }
    
    console.log(
      `%c[Web Vitals] ${metric.name}: ${metric.name === 'CLS' ? metric.value.toFixed(3) : Math.round(metric.value) + 'ms'} (${metric.rating})`,
      colors[metric.rating],
      { page, value: metric.value }
    )
  }

  // Enviar a API (en producción)
  if (process.env.NODE_ENV === 'production' && typeof navigator !== 'undefined') {
    const body = JSON.stringify({
      ...metric,
      page,
      timestamp: Date.now(),
    })

    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/vitals', body)
    }
  }
}

export function WebVitalsReporter() {
  const pathname = usePathname()

  useEffect(() => {
    // Usar PerformanceObserver para métricas
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return
    }

    const observers: PerformanceObserver[] = []

    // LCP - Largest Contentful Paint
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1] as PerformanceEntry & { startTime: number }
        if (lastEntry) {
          const value = lastEntry.startTime
          reportMetric({
            name: 'LCP',
            value,
            rating: getRating('LCP', value),
            id: `lcp-${Date.now()}`,
          }, pathname || '/')
        }
      })
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true })
      observers.push(lcpObserver)
    } catch (e) {
      // LCP no soportado
    }

    // FCP - First Contentful Paint
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const fcpEntry = entries.find(e => e.name === 'first-contentful-paint') as PerformanceEntry & { startTime: number }
        if (fcpEntry) {
          const value = fcpEntry.startTime
          reportMetric({
            name: 'FCP',
            value,
            rating: getRating('FCP', value),
            id: `fcp-${Date.now()}`,
          }, pathname || '/')
        }
      })
      fcpObserver.observe({ type: 'paint', buffered: true })
      observers.push(fcpObserver)
    } catch (e) {
      // FCP no soportado
    }

    // CLS - Cumulative Layout Shift
    try {
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as (PerformanceEntry & { value: number; hadRecentInput: boolean })[]) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
          }
        }
      })
      clsObserver.observe({ type: 'layout-shift', buffered: true })
      observers.push(clsObserver)

      // Reportar CLS al descargar la página
      const reportCLS = () => {
        reportMetric({
          name: 'CLS',
          value: clsValue,
          rating: getRating('CLS', clsValue),
          id: `cls-${Date.now()}`,
        }, pathname || '/')
      }

      window.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
          reportCLS()
        }
      })
    } catch (e) {
      // CLS no soportado
    }

    // FID - First Input Delay
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries() as (PerformanceEntry & { processingStart: number; startTime: number })[]
        const firstEntry = entries[0]
        if (firstEntry) {
          const value = firstEntry.processingStart - firstEntry.startTime
          reportMetric({
            name: 'FID',
            value,
            rating: getRating('FID', value),
            id: `fid-${Date.now()}`,
          }, pathname || '/')
        }
      })
      fidObserver.observe({ type: 'first-input', buffered: true })
      observers.push(fidObserver)
    } catch (e) {
      // FID no soportado
    }

    // TTFB - Time to First Byte
    try {
      const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navEntry) {
        const value = navEntry.responseStart - navEntry.requestStart
        reportMetric({
          name: 'TTFB',
          value,
          rating: getRating('TTFB', value),
          id: `ttfb-${Date.now()}`,
        }, pathname || '/')
      }
    } catch (e) {
      // TTFB no soportado
    }

    // Cleanup
    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [pathname])

  return null // Este componente no renderiza nada
}

