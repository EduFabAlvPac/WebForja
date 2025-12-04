/**
 * FORJA DIGITAL - Política de Protección de Datos
 * 
 * Página localizada por país con contenido base + overlays
 * 
 * @module app/[lc]/legal/politica-datos
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Eye, UserCheck, FileText, Lock, Calendar, AlertCircle, Search, Pencil, Trash2, Ban, ClipboardList, MessageCircleWarning } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { LegalStamp } from '@/components/site/LegalStamp';
import { getLegalContent } from '@/lib/hooks/useLegalContent';
import { ORG } from '@/lib/org';

export async function generateMetadata({ params }: { params: { lc: string } }): Promise<Metadata> {
  return {
    title: 'Política de Protección de Datos | Forja Digital',
    description: `Política de Protección de Datos Personales de ${ORG.brandName}. Conoce cómo protegemos tus datos conforme a la Ley 1581 de 2012 de Colombia.`,
    keywords: 'política de privacidad, protección de datos, Ley 1581 de 2012, datos personales, GDPR',
    robots: 'index, follow',
    openGraph: {
      title: 'Política de Protección de Datos | Forja Digital',
      description: 'Conoce cómo protegemos tus datos personales.',
      type: 'website',
    },
  };
}

export default function PoliticaDatosPage({ params }: { params: { lc: string } }) {
  const content = getLegalContent(params.lc);
  
  // Schema.org markup
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Política de Protección de Datos',
    description: `Política de Protección de Datos de ${ORG.brandName}`,
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
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-h1-mobile md:text-h1-desktop text-white mb-4">
              Política de Protección de Datos
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              En {ORG.brandName} protegemos tus datos personales conforme a la Ley 1581 de 2012
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
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-brand-orange" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Introducción</h2>
                    <p className="text-gray-600">
                      {content.privacy.intro.text}
                    </p>
                  </div>
                </div>
                <div className="bg-blue-50 border-l-4 border-brand-turquoise p-4 rounded">
                  <p className="text-sm text-gray-700">
                    {content.privacy.intro.responsible}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Transferencia Internacional (solo CL/PE/EC) */}
            {content.privacy.internationalTransfer && (
              <ScrollReveal>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-8">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-yellow-900 mb-2">
                        {content.privacy.internationalTransfer.title}
                      </h3>
                      <p className="text-sm text-yellow-800 leading-relaxed mb-3">
                        {content.privacy.internationalTransfer.content}
                      </p>
                      {content.privacy.internationalTransfer.note && (
                        <p className="text-xs text-yellow-700 italic">
                          <strong>Nota:</strong> {content.privacy.internationalTransfer.note}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* 1. Datos que Recopilamos */}
            <ScrollReveal>
              <div className="bg-white rounded-card shadow-card p-8 mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-brand-turquoise/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="h-6 w-6 text-brand-turquoise" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4">1. Datos que Recopilamos</h2>
                    
                    <h3 className="text-lg font-semibold mb-3 text-brand-navy">Datos de Identificación:</h3>
                    <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                      {content.privacy.dataCollection.identification.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>

                    <h3 className="text-lg font-semibold mb-3 text-brand-navy">Datos de Navegación:</h3>
                    <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                      {content.privacy.dataCollection.navigation.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>

                    <h3 className="text-lg font-semibold mb-3 text-brand-navy">Datos Empresariales (Rayos-X):</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      {content.privacy.dataCollection.business.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 2. Finalidad del Tratamiento */}
            <ScrollReveal>
              <div className="bg-white rounded-card shadow-card p-8 mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-brand-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <UserCheck className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4">2. Finalidad del Tratamiento</h2>
                    <p className="text-gray-700 mb-4">
                      Utilizamos tus datos personales para las siguientes finalidades:
                    </p>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-brand-orange pl-4">
                        <h3 className="font-semibold text-brand-navy mb-2">Contacto y Comunicación:</h3>
                        <p className="text-gray-700">{content.privacy.purposes.contact}</p>
                      </div>

                      <div className="border-l-4 border-brand-turquoise pl-4">
                        <h3 className="font-semibold text-brand-navy mb-2">Servicios de Consultoría:</h3>
                        <p className="text-gray-700">{content.privacy.purposes.services}</p>
                      </div>

                      <div className="border-l-4 border-brand-purple pl-4">
                        <h3 className="font-semibold text-brand-navy mb-2">Marketing y Comunicaciones:</h3>
                        <p className="text-gray-700">{content.privacy.purposes.marketing}</p>
                      </div>

                      <div className="border-l-4 border-brand-coral pl-4">
                        <h3 className="font-semibold text-brand-navy mb-2">Mejora de Servicios:</h3>
                        <p className="text-gray-700">{content.privacy.purposes.improvement}</p>
                      </div>

                      <div className="border-l-4 border-gray-400 pl-4">
                        <h3 className="font-semibold text-brand-navy mb-2">Cumplimiento Legal:</h3>
                        <p className="text-gray-700">{content.privacy.purposes.legal}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 3. Base Legal */}
            <ScrollReveal>
              <div className="bg-white rounded-card shadow-card p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">3. Base Legal del Tratamiento</h2>
                <p className="text-gray-700 mb-4">
                  El tratamiento de tus datos personales se fundamenta en:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <strong className="text-brand-navy">Consentimiento expreso:</strong>
                      <span className="text-gray-700"> Otorgado al marcar el checkbox de aceptación en nuestros formularios.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <strong className="text-brand-navy">Ejecución de contrato:</strong>
                      <span className="text-gray-700"> Necesario para proporcionar los servicios solicitados.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <strong className="text-brand-navy">Interés legítimo:</strong>
                      <span className="text-gray-700"> Para mejorar nuestros servicios y comunicarnos contigo.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <strong className="text-brand-navy">Cumplimiento legal:</strong>
                      <span className="text-gray-700"> Conforme a la Ley 1581 de 2012 de Colombia.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* 4. Tus Derechos */}
            <ScrollReveal>
              <div className="bg-white rounded-card shadow-card p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">4. Tus Derechos como Titular</h2>
                <p className="text-gray-700 mb-6">
                  Como titular de datos personales, tienes los siguientes derechos:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-brand-orange/10 to-brand-coral/10 p-4 rounded-lg">
                    <h3 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                      <Search className="w-4 h-4 text-brand-orange" />
                      Derecho de Acceso
                    </h3>
                    <p className="text-sm text-gray-700">{content.privacy.rights.access}</p>
                  </div>

                  <div className="bg-gradient-to-br from-brand-turquoise/10 to-brand-purple/10 p-4 rounded-lg">
                    <h3 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                      <Pencil className="w-4 h-4 text-brand-turquoise" />
                      Derecho de Rectificación
                    </h3>
                    <p className="text-sm text-gray-700">{content.privacy.rights.rectification}</p>
                  </div>

                  <div className="bg-gradient-to-br from-brand-purple/10 to-brand-navy/10 p-4 rounded-lg">
                    <h3 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                      <Trash2 className="w-4 h-4 text-brand-purple" />
                      Derecho de Supresión
                    </h3>
                    <p className="text-sm text-gray-700">{content.privacy.rights.deletion}</p>
                  </div>

                  <div className="bg-gradient-to-br from-brand-coral/10 to-brand-orange/10 p-4 rounded-lg">
                    <h3 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-brand-coral" />
                      Derecho de Oposición
                    </h3>
                    <p className="text-sm text-gray-700">{content.privacy.rights.opposition}</p>
                  </div>

                  <div className="bg-gradient-to-br from-brand-navy/10 to-brand-turquoise/10 p-4 rounded-lg">
                    <h3 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                      <ClipboardList className="w-4 h-4 text-brand-navy" />
                      Derecho de Consulta
                    </h3>
                    <p className="text-sm text-gray-700">{content.privacy.rights.consultation}</p>
                  </div>

                  <div className="bg-gradient-to-br from-green-100 to-blue-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                      <MessageCircleWarning className="w-4 h-4 text-amber-600" />
                      Derecho de Reclamo
                    </h3>
                    <p className="text-sm text-gray-700">{content.privacy.rights.complaint}</p>
                  </div>
                </div>

                <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                  <p className="text-sm text-gray-700">
                    <strong>Cómo ejercer tus derechos:</strong> Puedes ejercer cualquiera de estos derechos
                    enviando un correo a <a href={`mailto:${ORG.email}`} className="text-brand-orange hover:underline">{ORG.email}</a> con
                    el asunto &quot;Solicitud de Derechos ARCO&quot; e indicando claramente qué derecho deseas ejercer.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* 5. Seguridad */}
            <ScrollReveal>
              <div className="bg-white rounded-card shadow-card p-8 mb-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Lock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">5. Seguridad de Datos</h2>
                    <p className="text-gray-700">
                      Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos
                      personales contra acceso no autorizado, pérdida, destrucción o alteración.
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700 ml-16">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Cifrado SSL/TLS en todas las comunicaciones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Acceso restringido a personal autorizado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Backups periódicos y seguros</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Auditorías de seguridad regulares</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Contacto */}
            <ScrollReveal>
              <div className="bg-gradient-to-br from-brand-navy via-brand-purple to-brand-navy rounded-xl p-8 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">
                  ¿Tienes Preguntas sobre tus Datos?
                </h2>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Si tienes dudas sobre cómo tratamos tus datos personales o deseas ejercer
                  tus derechos, contáctanos.
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

