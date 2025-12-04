/**
 * FORJA DIGITAL - Política de Cookies
 * 
 * Página localizada por país con contenido base + overlays
 * 
 * @module app/[lc]/legal/cookies
 */

'use client';

import { Cookie, Shield, Eye, BarChart3, Calendar, } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { LegalStamp } from '@/components/site/LegalStamp';
import { CookiePreferences } from '@/components/shared/CookiePreferences';
import { useLegalContent } from '@/lib/hooks/useLegalContent';
import { ORG } from '@/lib/org';

export default function CookiesPage() {
  const content = useLegalContent();
  
  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]">
      {/* Hero */}
      <section className="gradient-hero py-16">
        <div className="container-custom text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Cookie className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-h1-mobile md:text-h1-desktop text-white mb-4">
            Política de Cookies
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Información sobre el uso de cookies en nuestro sitio web
          </p>
          <p className="text-sm text-white/80 mt-4">
            <Calendar className="inline h-4 w-4 mr-2" />
            Última actualización: Diciembre 2024 | Versión 1.0
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          
          {/* Introducción */}
          <ScrollReveal>
            <div className="bg-white rounded-card shadow-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Shield className="h-7 w-7 text-brand-orange" />
                ¿Qué son las Cookies?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {content.cookies.intro}
              </p>
            </div>
          </ScrollReveal>

          {/* Tipos de Cookies */}
          <ScrollReveal>
            <div className="bg-white rounded-card shadow-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Cookie className="h-7 w-7 text-brand-orange" />
                Tipos de Cookies que Utilizamos
              </h2>
              
              <div className="space-y-6">
                {/* Cookies Necesarias */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-500" />
                    {content.cookies.types.necessary.title}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {content.cookies.types.necessary.description}
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    Estas cookies no se pueden desactivar en nuestros sistemas.
                  </p>
                </div>

                {/* Cookies de Análisis */}
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-purple-500" />
                    {content.cookies.types.analytics.title}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {content.cookies.types.analytics.description}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Ejemplo:</strong> Google Analytics
                  </p>
                </div>

                {/* Cookies Funcionales */}
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Eye className="h-5 w-5 text-green-500" />
                    {content.cookies.types.functional.title}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {content.cookies.types.functional.description}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Ejemplo:</strong> Preferencia de idioma, país seleccionado
                  </p>
                </div>

                {/* Cookies de Marketing */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Cookie className="h-5 w-5 text-orange-500" />
                    {content.cookies.types.marketing.title}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {content.cookies.types.marketing.description}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Ejemplo:</strong> Google Ads, Facebook Pixel (con tu consentimiento)
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Cómo Controlar Cookies */}
          <ScrollReveal>
            <div className="bg-white rounded-card shadow-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Cómo Controlar las Cookies
              </h2>
              <p className="text-gray-700 mb-6">
                Puedes gestionar tus preferencias de cookies de las siguientes maneras:
              </p>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-brand-turquoise/10 to-brand-purple/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-brand-navy mb-2">
                    🎛️ Centro de Preferencias
                  </h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Utiliza nuestro centro de preferencias de cookies para aceptar o rechazar 
                    categorías específicas de cookies.
                  </p>
                  <div className="mt-4">
                    <CookiePreferences />
                  </div>
                </div>

                <div className="bg-gradient-to-br from-brand-orange/10 to-brand-coral/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-brand-navy mb-2">
                    🌐 Configuración del Navegador
                  </h3>
                  <p className="text-sm text-gray-700">
                    La mayoría de navegadores permiten controlar cookies mediante sus ajustes de privacidad:
                  </p>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1 ml-4">
                    <li>• Chrome: Configuración → Privacidad y seguridad → Cookies</li>
                    <li>• Firefox: Opciones → Privacidad y seguridad → Cookies</li>
                    <li>• Safari: Preferencias → Privacidad → Cookies</li>
                    <li>• Edge: Configuración → Cookies y permisos del sitio</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-brand-purple/10 to-brand-navy/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-brand-navy mb-2">
                    🚫 Eliminar Cookies
                  </h3>
                  <p className="text-sm text-gray-700">
                    Puedes eliminar cookies ya instaladas desde la configuración de tu navegador. 
                    Ten en cuenta que esto puede afectar la funcionalidad del sitio.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Cookies de Terceros */}
          <ScrollReveal>
            <div className="bg-white rounded-card shadow-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Cookies de Terceros
              </h2>
              <p className="text-gray-700 mb-4">
                Utilizamos cookies de terceros para proporcionar funciones adicionales y analizar el tráfico:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                  <BarChart3 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">Google Analytics</p>
                    <p className="text-sm text-slate-600 mt-1">
                      Para analizar cómo los usuarios interactúan con nuestro sitio.{' '}
                      <a 
                        href="https://policies.google.com/privacy" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-brand-orange hover:underline"
                      >
                        Política de privacidad de Google
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                  <Cookie className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">Google Ads / Facebook Ads</p>
                    <p className="text-sm text-slate-600 mt-1">
                      Para mostrar anuncios relevantes (solo con tu consentimiento explícito).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Actualización de la Política */}
          <ScrollReveal>
            <div className="bg-white rounded-card shadow-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Actualizaciones de esta Política
              </h2>
              <p className="text-gray-700 mb-4">
                Podemos actualizar esta Política de Cookies periódicamente para reflejar cambios en 
                las cookies que utilizamos o por razones operativas, legales o regulatorias.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-sm text-gray-700">
                  <strong>Te recomendamos:</strong> Revisar esta página regularmente para mantenerte 
                  informado sobre cómo utilizamos cookies.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Contacto */}
          <ScrollReveal>
            <div className="bg-gradient-to-br from-brand-navy via-brand-purple to-brand-navy rounded-xl p-8 text-center text-white">
              <h2 className="text-2xl font-bold mb-4">
                ¿Preguntas sobre Cookies?
              </h2>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Si tienes dudas sobre cómo utilizamos cookies, contáctanos en{' '}
                <a href={`mailto:${ORG.email}`} className="underline hover:text-brand-orange">
                  {ORG.email}
                </a>
              </p>
            </div>
          </ScrollReveal>

          {/* Legal Stamp */}
          <ScrollReveal>
            <div className="mt-12 pt-8 border-t border-slate-200">
              <LegalStamp />
            </div>
          </ScrollReveal>

        </div>
      </section>
    </div>
  );
}

