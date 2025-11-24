'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Cookie, Check, X, Settings } from 'lucide-react'

interface CookiePreferencesProps {
  onSave?: () => void
}

export function CookiePreferences({ onSave }: CookiePreferencesProps) {
  const [preferences, setPreferences] = useState({
    functional: true, // Siempre activas
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Cargar preferencias guardadas
    const saved = localStorage.getItem('cookieConsent')
    if (saved) {
      try {
        const data = JSON.parse(saved)
        setPreferences({
          functional: true,
          analytics: data.analytics || false,
          marketing: data.marketing || false,
        })
      } catch (e) {
        console.error('Error parsing cookie preferences:', e)
      }
    }
  }, [])

  const handleSave = () => {
    const consentData = {
      status: 'customized',
      timestamp: new Date().toISOString(),
      ...preferences,
    }
    localStorage.setItem('cookieConsent', JSON.stringify(consentData))

    // Actualizar Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: preferences.analytics ? 'granted' : 'denied',
        ad_storage: preferences.marketing ? 'granted' : 'denied',
      })
    }

    onSave?.()
  }

  const togglePreference = (key: 'analytics' | 'marketing') => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
          <Settings className="h-6 w-6 text-brand-orange" />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Preferencias de Cookies</h3>
          <p className="text-gray-600 text-sm">
            Personaliza qué tipos de cookies deseas permitir. Las cookies funcionales son necesarias para el funcionamiento básico del sitio.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Cookies Funcionales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-50 rounded-lg p-4 border-2 border-gray-200"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Cookie className="h-5 w-5 text-brand-navy" />
                <h4 className="font-semibold text-brand-navy">Cookies Funcionales</h4>
                <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded">
                  Siempre activas
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Necesarias para el funcionamiento básico del sitio web, como navegación, acceso a áreas seguras y recordar tus preferencias.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-1">
                <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cookies Analíticas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`bg-white rounded-lg p-4 border-2 transition-colors ${
            preferences.analytics ? 'border-brand-turquoise' : 'border-gray-200'
          }`}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Cookie className="h-5 w-5 text-brand-turquoise" />
                <h4 className="font-semibold text-brand-navy">Cookies Analíticas</h4>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Nos ayudan a entender cómo los visitantes interactúan con el sitio, recopilando información de forma anónima.
              </p>
              <p className="text-xs text-gray-500">
                Servicios: Google Analytics
              </p>
            </div>
            <button
              onClick={() => togglePreference('analytics')}
              className={`flex-shrink-0 w-12 h-6 rounded-full transition-colors relative ${
                preferences.analytics ? 'bg-brand-turquoise' : 'bg-gray-300'
              }`}
              aria-label={preferences.analytics ? 'Desactivar cookies analíticas' : 'Activar cookies analíticas'}
            >
              <motion.div
                className="w-4 h-4 bg-white rounded-full shadow-sm absolute top-1"
                animate={{ x: preferences.analytics ? 28 : 4 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
          </div>
        </motion.div>

        {/* Cookies de Marketing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`bg-white rounded-lg p-4 border-2 transition-colors ${
            preferences.marketing ? 'border-brand-orange' : 'border-gray-200'
          }`}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Cookie className="h-5 w-5 text-brand-orange" />
                <h4 className="font-semibold text-brand-navy">Cookies de Marketing</h4>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Se utilizan para rastrear visitantes en sitios web y mostrar anuncios relevantes y personalizados.
              </p>
              <p className="text-xs text-gray-500">
                Servicios: Redes sociales, publicidad
              </p>
            </div>
            <button
              onClick={() => togglePreference('marketing')}
              className={`flex-shrink-0 w-12 h-6 rounded-full transition-colors relative ${
                preferences.marketing ? 'bg-brand-orange' : 'bg-gray-300'
              }`}
              aria-label={preferences.marketing ? 'Desactivar cookies de marketing' : 'Activar cookies de marketing'}
            >
              <motion.div
                className="w-4 h-4 bg-white rounded-full shadow-sm absolute top-1"
                animate={{ x: preferences.marketing ? 28 : 4 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Botones de acción */}
      <div className="flex flex-col sm:flex-row gap-3 pt-4">
        <button
          onClick={handleSave}
          className="flex-1 px-6 py-3 bg-brand-orange text-white font-semibold rounded-lg hover:bg-brand-orange-dark transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          <Check className="h-5 w-5" />
          Guardar Preferencias
        </button>
        <button
          onClick={() => {
            setPreferences({
              functional: true,
              analytics: true,
              marketing: true,
            })
            setTimeout(handleSave, 100)
          }}
          className="px-6 py-3 bg-brand-turquoise text-white font-semibold rounded-lg hover:bg-brand-turquoise/90 transition-all duration-200"
        >
          Aceptar Todas
        </button>
        <button
          onClick={() => {
            setPreferences({
              functional: true,
              analytics: false,
              marketing: false,
            })
            setTimeout(handleSave, 100)
          }}
          className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
        >
          Rechazar Todas
        </button>
      </div>

      <p className="text-xs text-gray-500 text-center">
        Puedes cambiar tus preferencias en cualquier momento desde la{' '}
        <a href="/politica-cookies" className="text-brand-orange hover:underline">
          Política de Cookies
        </a>
      </p>
    </div>
  )
}

