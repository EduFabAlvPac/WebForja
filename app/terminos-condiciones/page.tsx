import { Metadata } from 'next'
import { FileText, Scale, AlertTriangle, CheckCircle, XCircle, Shield, Mail, Calendar } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export const metadata: Metadata = {
  title: 'Términos y Condiciones | ForjaDigitalAE',
  description: 'Términos y Condiciones de uso del sitio web y servicios de consultoría empresarial de ForjaDigitalAE. Conoce tus derechos y obligaciones.',
  keywords: 'términos y condiciones, condiciones de uso, servicios de consultoría, ForjaDigitalAE, Colombia',
  robots: 'index, follow',
  openGraph: {
    title: 'Términos y Condiciones | ForjaDigitalAE',
    description: 'Términos y Condiciones de uso del sitio web y servicios de ForjaDigitalAE.',
    type: 'website',
  },
}

export default function TerminosCondicionesPage() {
  // Schema.org markup para SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Términos y Condiciones',
    description: 'Términos y Condiciones de uso del sitio web y servicios de ForjaDigitalAE',
    publisher: {
      '@type': 'Organization',
      name: 'ForjaDigitalAE',
      url: 'https://forjadigitalae.com',
    },
    datePublished: '2025-11-24',
    dateModified: '2025-11-24',
    inLanguage: 'es-CO',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]">
      {/* Hero Section */}
      <section className="gradient-hero py-16">
        <div className="container-custom text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Scale className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-h1-mobile md:text-h1-desktop text-white mb-4">
            Términos y Condiciones
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Condiciones de uso de nuestro sitio web y servicios de consultoría empresarial
          </p>
          <p className="text-sm text-white/80 mt-4">
            <Calendar className="inline h-4 w-4 mr-2" />
            Última actualización: Noviembre 2025 | Versión 1.0
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          
          {/* Aceptación */}
          <ScrollReveal>
            <div className="bg-white rounded-card shadow-card p-8 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-brand-orange" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">1. Aceptación de los Términos</h2>
                  <p className="text-gray-700 mb-4">
                    Al acceder y utilizar el sitio web de ForjaDigitalAE (en adelante &quot;el Sitio&quot;) y nuestros servicios, aceptas estar sujeto a estos Términos y Condiciones, nuestra Política de Privacidad y todas las leyes aplicables.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <p className="text-sm text-gray-700">
                      <AlertTriangle className="inline h-4 w-4 mr-2 text-yellow-600" />
                      <strong>Importante:</strong> Si no estás de acuerdo con estos términos, por favor no utilices nuestro sitio web ni servicios.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Servicios */}
          <ScrollReveal>
            <div className="bg-white rounded-card shadow-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Descripción de los Servicios</h2>
              <p className="text-gray-700 mb-4">
                ForjaDigitalAE ofrece servicios de consultoría empresarial, incluyendo pero no limitado a:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-brand-turquoise/10 to-brand-purple/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-brand-navy mb-2">🏗️ Arquitectura Estratégica</h3>
                  <p className="text-sm text-gray-700">Diseño y optimización de estructuras empresariales.</p>
                </div>
                <div className="bg-gradient-to-br from-brand-orange/10 to-brand-coral/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-brand-navy mb-2">🚀 Transformación Digital</h3>
                  <p className="text-sm text-gray-700">Modernización tecnológica y digital de procesos.</p>
                </div>
                <div className="bg-gradient-to-br from-brand-purple/10 to-brand-navy/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-brand-navy mb-2">🔬 Rayos-X Empresarial</h3>
                  <p className="text-sm text-gray-700">Diagnóstico gratuito de madurez empresarial.</p>
                </div>
                <div className="bg-gradient-to-br from-brand-coral/10 to-brand-orange/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-brand-navy mb-2">📊 Consultoría Personalizada</h3>
                  <p className="text-sm text-gray-700">Asesoría estratégica adaptada a tu negocio.</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Nos reservamos el derecho de modificar, suspender o descontinuar cualquier servicio en cualquier momento sin previo aviso.
              </p>
            </div>
          </ScrollReveal>

          {/* Uso del Sitio */}
          <ScrollReveal>
            <div className="bg-white rounded-card shadow-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Uso Permitido del Sitio</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                  Usos Permitidos:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Acceder a información sobre nuestros servicios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Realizar diagnósticos empresariales (Rayos-X)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Contactarnos para solicitar servicios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Descargar recursos y contenido autorizado</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-red-600">
                  <XCircle className="h-5 w-5" />
                  Usos Prohibidos:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Usar el sitio para fines ilegales o no autorizados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Intentar acceder a áreas restringidas del sitio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Copiar, reproducir o distribuir contenido sin autorización</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Transmitir virus, malware o código malicioso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Realizar ingeniería inversa o descompilar el sitio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Usar bots, scrapers o herramientas automatizadas no autorizadas</span>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Propiedad Intelectual */}
          <ScrollReveal>
            <div className="bg-white rounded-card shadow-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Propiedad Intelectual</h2>
              <p className="text-gray-700 mb-4">
                Todo el contenido del Sitio, incluyendo pero no limitado a textos, gráficos, logos, iconos, imágenes, clips de audio, descargas digitales, compilaciones de datos y software, es propiedad de ForjaDigitalAE o de sus proveedores de contenido y está protegido por las leyes de propiedad intelectual de Colombia e internacionales.
              </p>
              <div className="bg-blue-50 border-l-4 border-brand-turquoise p-4 rounded">
                <p className="text-sm text-gray-700">
                  <strong>Marca registrada:</strong> ForjaDigitalAE®, el logo y otros elementos distintivos son marcas registradas. Su uso no autorizado está prohibido.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Limitación de Responsabilidad */}
          <ScrollReveal>
            <div className="bg-white rounded-card shadow-card p-8 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4">5. Limitación de Responsabilidad</h2>
                  <p className="text-gray-700 mb-4">
                    ForjaDigitalAE no será responsable por:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Daños directos, indirectos, incidentales o consecuentes derivados del uso del sitio</li>
                    <li>• Interrupciones del servicio, errores técnicos o pérdida de datos</li>
                    <li>• Decisiones empresariales tomadas basándose en nuestros diagnósticos o reportes</li>
                    <li>• Contenido de terceros o enlaces externos</li>
                    <li>• Uso no autorizado de tu cuenta o información</li>
                  </ul>
                  <div className="mt-4 bg-yellow-50 p-4 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>Descargo de responsabilidad:</strong> Nuestros servicios de diagnóstico (Rayos-X Empresarial) son herramientas de evaluación preliminar y no constituyen asesoría legal, financiera o contable profesional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Garantías */}
          <ScrollReveal>
            <div className="bg-white rounded-card shadow-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Garantías y Declaraciones</h2>
              <p className="text-gray-700 mb-4">
                El sitio y los servicios se proporcionan &quot;tal cual&quot; y &quot;según disponibilidad&quot;. No garantizamos:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Que el sitio estará libre de errores o interrupciones</li>
                <li>• Que los resultados obtenidos serán exactos o confiables</li>
                <li>• Que los defectos serán corregidos</li>
                <li>• Que el sitio o los servidores están libres de virus</li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                Sin embargo, nos esforzamos por mantener la más alta calidad en nuestros servicios y corregir cualquier problema que surja.
              </p>
            </div>
          </ScrollReveal>

          {/* Indemnización */}
          <ScrollReveal>
            <div className="bg-white rounded-card shadow-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Indemnización</h2>
              <p className="text-gray-700">
                Aceptas indemnizar y mantener indemne a ForjaDigitalAE, sus directores, empleados y socios de cualquier reclamación, daño, pérdida, responsabilidad y gasto (incluyendo honorarios legales) que surjan de:
              </p>
              <ul className="space-y-2 text-gray-700 mt-4">
                <li>• Tu uso del sitio o servicios</li>
                <li>• Tu violación de estos Términos y Condiciones</li>
                <li>• Tu violación de derechos de terceros</li>
                <li>• Cualquier contenido que proporciones a través del sitio</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Modificaciones */}
          <ScrollReveal>
            <div className="bg-white rounded-card shadow-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Modificaciones de los Términos</h2>
              <p className="text-gray-700 mb-4">
                Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio.
              </p>
              <p className="text-gray-700">
                Tu uso continuado del sitio después de la publicación de cambios constituye tu aceptación de dichos cambios.
              </p>
            </div>
          </ScrollReveal>

          {/* Ley Aplicable */}
          <ScrollReveal>
            <div className="bg-white rounded-card shadow-card p-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Scale className="h-6 w-6 text-brand-navy" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4">9. Ley Aplicable y Jurisdicción</h2>
                  <p className="text-gray-700 mb-4">
                    Estos Términos y Condiciones se rigen por las leyes de la República de Colombia. Cualquier disputa relacionada con estos términos será sometida a la jurisdicción exclusiva de los tribunales de Bogotá, Colombia.
                  </p>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>Resolución de disputas:</strong> Antes de iniciar cualquier acción legal, las partes acuerdan intentar resolver cualquier disputa mediante negociación de buena fe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Separabilidad */}
          <ScrollReveal>
            <div className="bg-white rounded-card shadow-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Separabilidad</h2>
              <p className="text-gray-700">
                Si alguna disposición de estos Términos y Condiciones se considera inválida o inaplicable, dicha disposición será modificada e interpretada para lograr los objetivos de dicha disposición en la mayor medida posible, y las disposiciones restantes continuarán en pleno vigor y efecto.
              </p>
            </div>
          </ScrollReveal>

          {/* Acuerdo Completo */}
          <ScrollReveal>
            <div className="bg-white rounded-card shadow-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">11. Acuerdo Completo</h2>
              <p className="text-gray-700">
                Estos Términos y Condiciones, junto con nuestra Política de Privacidad, constituyen el acuerdo completo entre tú y ForjaDigitalAE con respecto al uso del sitio y los servicios, y reemplazan todos los acuerdos anteriores o contemporáneos.
              </p>
            </div>
          </ScrollReveal>

          {/* Contacto */}
          <ScrollReveal>
            <div className="bg-gradient-to-br from-brand-navy to-brand-purple rounded-card p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4">¿Preguntas sobre estos Términos?</h2>
                  <p className="mb-6 text-white/90">
                    Si tienes dudas sobre estos Términos y Condiciones, contáctanos:
                  </p>
                  <div className="space-y-2 text-white/90">
                    <p><strong>Email:</strong> <a href="mailto:forjadigitalae@gmail.com" className="text-brand-orange hover:underline">forjadigitalae@gmail.com</a></p>
                    <p><strong>Teléfono:</strong> +57 300 123 4567</p>
                    <p><strong>Dirección:</strong> Bogotá, Colombia</p>
                    <p><strong>Horario:</strong> Lunes a Viernes, 8:00 AM - 6:00 PM (COT)</p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-sm text-white/80">
                      Al utilizar nuestro sitio web, confirmas que has leído, entendido y aceptado estos Términos y Condiciones.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>
    </div>
    </>
  )
}

