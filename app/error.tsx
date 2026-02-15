'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle, Home, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-navy to-brand-purple flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-card shadow-2xl p-8 md:p-12 text-center">
        <div className="mb-6">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-10 h-10 text-red-600" />
          </div>
          <h1 className="text-4xl font-bold text-brand-navy mb-4">
            ¡Ups! Algo salió mal
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Lo sentimos, hemos encontrado un error inesperado.
          </p>
          {process.env.NODE_ENV === 'development' && error.message && (
            <div className="mt-4 p-4 bg-red-50 rounded-lg text-left">
              <p className="text-sm text-red-800 font-mono">{error.message}</p>
              {error.digest && (
                <p className="text-xs text-red-600 mt-2">Error ID: {error.digest}</p>
              )}
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button
            onClick={reset}
            className="bg-brand-orange hover:bg-brand-orange-dark"
            size="lg"
          >
            <RefreshCw className="mr-2 h-5 w-5" />
            Intentar de Nuevo
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
          >
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Volver al Inicio
            </Link>
          </Button>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Si el problema persiste, por favor{' '}
            <Link href="/contacto" className="text-brand-orange hover:underline font-semibold">
              contáctanos
            </Link>
            {' '}y te ayudaremos a resolverlo.
          </p>
        </div>
      </div>
    </div>
  )
}


