'use client'

import { useEffect } from 'react'

const EXTENSION_ERROR_PATTERNS = [
  'message channel closed',
  'asynchronous response',
  'Unchecked runtime.lastError',
]

function isExtensionError(args: unknown[]): boolean {
  const str = args.map((a) => (typeof a === 'string' ? a : a?.toString?.() ?? '')).join(' ')
  return EXTENSION_ERROR_PATTERNS.some((p) => str.includes(p))
}

function isExtensionRejection(reason: unknown): boolean {
  const msg = reason instanceof Error ? reason.message : String(reason ?? '')
  return EXTENSION_ERROR_PATTERNS.some((p) => msg.includes(p))
}

/**
 * Solo en desarrollo: evita que los errores de extensiones de Chrome
 * (message channel closed) llenen la consola. Los errores reales de la app se siguen mostrando.
 */
export function DevConsoleGuard() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development' || typeof window === 'undefined') return

    const origError = console.error
    console.error = (...args: unknown[]) => {
      if (isExtensionError(args)) return
      origError.apply(console, args)
    }

    const origWarn = console.warn
    console.warn = (...args: unknown[]) => {
      if (isExtensionError(args)) return
      origWarn.apply(console, args)
    }

    const handleRejection = (event: PromiseRejectionEvent) => {
      if (isExtensionRejection(event.reason)) {
        event.preventDefault()
        event.stopImmediatePropagation()
      }
    }
    window.addEventListener('unhandledrejection', handleRejection, true)

    return () => {
      console.error = origError
      console.warn = origWarn
      window.removeEventListener('unhandledrejection', handleRejection, true)
    }
  }, [])

  return null
}
