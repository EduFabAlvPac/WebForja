'use client'

import { Cookie, Shield, Eye, BarChart3, Mail } from 'lucide-react'
import { CookiePreferences } from '@/components/shared/CookiePreferences'

export default function PoliticaCookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-brand-navy text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy-dark to-brand-navy opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-orange rounded-full mb-6">
              <Cookie className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Política de Cookies
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Información sobre el uso de cookies en nuestro sitio web
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introducción */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-brand-orange" />
                ¿Qué son las Cookies?
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                <p>
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, 
                  tablet o móvil) cuando visitas un sitio web. Nos ayudan a hacer que el sitio web funcione 
                  de manera más eficiente, mejorar tu experiencia de navegación y proporcionarnos información 
                  sobre cómo usas nuestro sitio.
                </p>
                <p>
                  En <strong>Forja Digital - AE</strong>, utilizamos cookies y tecnologías similares para 
                  entender mejor cómo interactúas con nuestro sitio web, personalizar contenido y anuncios, 
                  proporcionar funciones de redes sociales y analizar nuestro tráfico.
                </p>
              </div>
            </div>

            {/* Tipos de Cookies */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Cookie className="w-8 h-8 text-brand-orange" />
                Tipos de Cookies que Utilizamos
              </h2>
              
              <div className="space-y-8">
                {/* Cookies Necesarias */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-blue-500" />
                    Cookies Estrictamente Necesarias
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Estas cookies son esenciales para que puedas navegar por el sitio web y utilizar sus 
                    funciones. Sin estas cookies, no podemos proporcionar ciertos servicios o funciones, 
                    y el sitio no funcionará tan correctamente como debería.
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    Estas cookies no se pueden desactivar en nuestros sistemas.
                  </p>
                </div>

                {/* Cookies de Rendimiento */}
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BarChart3 className="w-6 h-6 text-purple-500" />
                    Cookies de Rendimiento y Análisis
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Estas cookies nos permiten contar las visitas y fuentes de tráfico para poder medir y 
                    mejorar el rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más y 
                    menos populares, y ver cómo los visitantes se mueven por el sitio.
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Ejemplo:</strong> Google Analytics
                  </p>
                </div>

                {/* Cookies Funcionales */}
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Eye className="w-6 h-6 text-green-500" />
                    Cookies Funcionales
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Estas cookies permiten que el sitio web proporcione una mejor funcionalidad y 
                    personalización. Pueden ser establecidas por nosotros o por terceros cuyos servicios 
                    hemos agregado a nuestras páginas.
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Ejemplo:</strong> Preferencias de idioma, región
                  </p>
                </div>

                {/* Cookies de Marketing */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Mail className="w-6 h-6 text-orange-500" />
                    Cookies de Publicidad y Marketing
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Estas cookies pueden ser establecidas a través de nuestro sitio por nuestros socios 
                    publicitarios. Pueden ser utilizadas por esas compañías para crear un perfil de tus 
                    intereses y mostrarte anuncios relevantes en otros sitios.
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Ejemplo:</strong> Google Ads, Facebook Pixel
                  </p>
                </div>
              </div>
            </div>

            {/* Gestionar Cookies */}
            <div className="bg-gradient-to-br from-brand-orange to-brand-orange-dark text-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-bold mb-6">
                ¿Cómo Gestionar las Cookies?
              </h2>
              <div className="space-y-4 text-white/90">
                <p>
                  La mayoría de los navegadores web permiten algún control de la mayoría de las cookies a 
                  través de la configuración del navegador. Sin embargo, si bloqueas todas las cookies 
                  (incluidas las esenciales), es posible que no puedas acceder a todo o parte de nuestro sitio.
                </p>
                <p>
                  Puedes gestionar tus preferencias de cookies en cualquier momento a través de la 
                  configuración de tu navegador:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Google Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
                  <li><strong>Mozilla Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</li>
                  <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
                  <li><strong>Microsoft Edge:</strong> Configuración → Privacidad → Cookies</li>
                </ul>
              </div>
            </div>

            {/* Más Información */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Más Información
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                <p>
                  Si tienes alguna pregunta sobre nuestra Política de Cookies o sobre cómo utilizamos 
                  las cookies en nuestro sitio web, no dudes en contactarnos:
                </p>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <p className="text-gray-900 font-semibold mb-2">
                    Forja Digital - AE
                  </p>
                  <p className="text-gray-600">
                    Email: <a href="mailto:info@forjadigital-ae.com" className="text-brand-orange hover:underline">info@forjadigital-ae.com</a>
                  </p>
                  <p className="text-gray-600">
                    Teléfono: <a href="tel:+57123456789" className="text-brand-orange hover:underline">+57 123 456 789</a>
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  Esta política de cookies fue actualizada por última vez el {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}. 
                  Nos reservamos el derecho de actualizar esta política en cualquier momento para reflejar 
                  cambios en nuestras prácticas o por razones operativas, legales o reglamentarias.
                </p>
              </div>
            </div>

            {/* Gestión de Preferencias */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-8 md:p-12 mb-8 border-2 border-brand-orange/20">
              <CookiePreferences onSave={() => {
                // Mostrar mensaje de éxito
                alert('✅ Tus preferencias de cookies han sido guardadas correctamente.')
              }} />
            </div>

            {/* Contacto */}
            <div className="bg-brand-navy rounded-2xl shadow-lg p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Mail className="w-8 h-8 text-brand-orange" />
                ¿Tienes Preguntas?
              </h2>
              <p className="text-gray-300 mb-6">
                Si tienes alguna pregunta sobre nuestra Política de Cookies, no dudes en contactarnos:
              </p>
              <div className="space-y-2 text-gray-300">
                <p><strong className="text-white">Email:</strong> <a href="mailto:forjadigitalae@gmail.com" className="text-brand-orange hover:underline">forjadigitalae@gmail.com</a></p>
                <p><strong className="text-white">Teléfono:</strong> +57 300 123 4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

