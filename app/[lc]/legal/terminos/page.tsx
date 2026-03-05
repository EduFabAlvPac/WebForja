/**
 * FORJA DIGITAL - Términos y Condiciones
 * 
 * Página localizada por país con contenido base + overlays
 * 
 * @module app/[lc]/legal/terminos
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { Scale, FileText, AlertTriangle, CheckCircle, XCircle, Shield, Calendar } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { LegalStamp } from '@/components/site/LegalStamp';
import { getLegalContent } from '@/lib/legal-content';
import { ORG } from '@/lib/org';

export async function generateMetadata({ params }: { params: { lc: string } }): Promise<Metadata> {
  return {
    title: 'Términos y Condiciones | ForjaConsulting',
    description: `Términos y Condiciones de uso del sitio web y servicios de ${ORG.brandName}. Conoce tus derechos y obligaciones.`,
    keywords: 'términos y condiciones, condiciones de uso, servicios de consultoría',
    robots: 'index, follow',
    openGraph: {
      title: 'Términos y Condiciones | ForjaConsulting',
      description: 'Condiciones de uso de nuestro sitio web y servicios de consultoría empresarial.',
      type: 'website',
    },
  };
}

export default function TerminosPage({ params }: { params: { lc: string } }) {
  const content = getLegalContent(params.lc);
  
  // Schema.org markup
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Términos y Condiciones',
    description: `Términos y Condiciones de ${ORG.brandName}`,
    publisher: {
      '@type': 'Organization',
      name: ORG.brandName,
      legalName: ORG.legalName,
    },
    datePublished: '2024-12-01',
    dateModified: '2024-12-01',
    inLanguage: 'es',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]">
        {/* Hero */}
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
              Última actualización: Diciembre 2024 | Versión 1.0
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-4xl">
            
            {/* 1. Aceptación */}
            <ScrollReveal>
              <div className="bg-white rounded-card shadow-card p-8 mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-brand-orange" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">1. Aceptación de los Términos</h2>
                    <p className="text-gray-700 mb-4">
                      {content.terms.acceptance.text}
                    </p>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                      <p className="text-sm text-gray-700">
                        <AlertTriangle className="inline h-4 w-4 mr-2 text-yellow-600" />
                        <strong>Importante:</strong> {content.terms.acceptance.warning}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 2. Servicios */}
            <ScrollReveal>
              <div className="bg-white rounded-card shadow-card p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">2. Descripción de los Servicios</h2>
                <p className="text-gray-700 mb-4">
                  {content.terms.services.description}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {content.terms.services.list.map((service, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-brand-turquoise/10 to-brand-purple/10 p-4 rounded-lg">
                      <h3 className="font-semibold text-brand-navy mb-2">
                        {idx === 0 && '🏗️ '}
                        {idx === 1 && '🚀 '}
                        {idx === 2 && '🔬 '}
                        {idx === 3 && '📊 '}
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-700">{service.description}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Nos reservamos el derecho de modificar, suspender o descontinuar cualquier servicio en cualquier momento sin previo aviso.
                </p>
              </div>
            </ScrollReveal>

            {/* 3. Uso del Sitio */}
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
                      <span>Realizar diagnósticos empresariales (Evaluación de Madurez)</span>
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

            {/* 4. Propiedad Intelectual */}
            <ScrollReveal>
              <div className="bg-white rounded-card shadow-card p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">4. Propiedad Intelectual</h2>
                <p className="text-gray-700 mb-4">
                  Todo el contenido del Sitio, incluyendo pero no limitado a textos, gráficos, logos, iconos, 
                  imágenes, clips de audio, descargas digitales, compilaciones de datos y software, es propiedad 
                  de {ORG.brandName} o de sus proveedores de contenido y está protegido por las leyes de propiedad 
                  intelectual de {ORG.countryOfIncorporation} e internacionales.
                </p>
                <div className="bg-blue-50 border-l-4 border-brand-turquoise p-4 rounded">
                  <p className="text-sm text-gray-700">
                    <strong>Marca registrada:</strong> {ORG.brandName}®, el logo y otros elementos distintivos 
                    son marcas registradas. Su uso no autorizado está prohibido.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* 5. Limitación de Responsabilidad */}
            <ScrollReveal>
              <div className="bg-white rounded-card shadow-card p-8 mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4">5. Limitación de Responsabilidad</h2>
                    <p className="text-gray-700 mb-4">
                      {ORG.brandName} no será responsable por:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">⚠</span>
                        <span>Daños directos, indirectos, incidentales o consecuentes derivados del uso del sitio</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">⚠</span>
                        <span>Interrupciones o errores en el funcionamiento del sitio</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">⚠</span>
                        <span>Pérdida de datos o información</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">⚠</span>
                        <span>Contenido de terceros enlazado desde nuestro sitio</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 6. Jurisdicción */}
            <ScrollReveal>
              <div className="bg-white rounded-card shadow-card p-8 mb-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-brand-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Scale className="h-6 w-6 text-brand-navy" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">6. Ley Aplicable y Jurisdicción</h2>
                    <p className="text-gray-700 mb-3">
                      {content.terms.jurisdiction.law}
                    </p>
                    <p className="text-gray-700">
                      {content.terms.jurisdiction.courts}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 7. Modificaciones */}
            <ScrollReveal>
              <div className="bg-white rounded-card shadow-card p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">7. Modificaciones de los Términos</h2>
                <p className="text-gray-700 mb-4">
                  Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. 
                  Las modificaciones entrarán en vigor inmediatamente después de su publicación en el Sitio.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                  <p className="text-sm text-gray-700">
                    <strong>Te recomendamos:</strong> Revisar periódicamente estos términos para estar al tanto 
                    de cualquier cambio. El uso continuado del Sitio después de la publicación de cambios 
                    constituye tu aceptación de los mismos.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Contacto */}
            <ScrollReveal>
              <div className="bg-gradient-to-br from-brand-navy via-brand-purple to-brand-navy rounded-xl p-8 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">
                  ¿Preguntas sobre los Términos?
                </h2>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Si tienes dudas sobre estos términos y condiciones, contáctanos.
                </p>
                <Link
                  href={`/${params.lc}/contacto`}
                  className="inline-flex items-center gap-2 bg-white text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
                >
                  Contactar
                </Link>
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
    </>
  );
}

