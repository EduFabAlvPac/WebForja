/**
 * FORJA DIGITAL - Página de Contratación y Facturación
 * 
 * Página informativa sobre el proceso de contratación y facturación
 * para servicios de exportación desde Colombia.
 * 
 * @module app/[lc]/legal/contratacion-facturacion
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { 
  FileText, 
  Building2, 
  CreditCard, 
  Shield, 
  Globe, 
  Calendar,
  CheckCircle,
  Info,
  ArrowRight,
  DollarSign,
  Receipt,
  Lock
} from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Button } from '@/components/ui/button';
import { ORG } from '@/lib/org';
import { LegalStamp } from '@/components/site/LegalStamp';

export async function generateMetadata({ params }: { params: { lc: string } }): Promise<Metadata> {
  return {
    title: 'Contratación y Facturación | Forja Digital',
    description: 'Información sobre contratación, facturación electrónica, medios de pago y cumplimiento legal para servicios de exportación desde Colombia.',
    keywords: 'contratación, facturación, exportación de servicios, DIAN, medios de pago, compliance, Ley 1581',
    robots: 'index, follow',
    openGraph: {
      title: 'Contratación y Facturación | Forja Digital',
      description: 'Todo lo que necesitas saber sobre cómo contratar y facturar servicios de consultoría exportados desde Colombia.',
      type: 'website',
    },
  };
}

export default function ContratacionFacturacionPage({ params }: { params: { lc: string } }) {
  // Schema.org markup para SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Contratación y Facturación',
    description: 'Información sobre contratación y facturación de servicios de exportación desde Colombia',
    publisher: {
      '@type': 'Organization',
      name: ORG.brandName,
      url: ORG.baseUrl,
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
        {/* Hero Section */}
        <section className="gradient-hero py-16">
          <div className="container-custom text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-h1-mobile md:text-h1-desktop text-white mb-4">
              Contratación y Facturación
            </h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Todo lo que necesitas saber sobre cómo contratar, facturar y pagar
              servicios de consultoría exportados desde Colombia
            </p>
            <p className="text-sm text-white/80 mt-4">
              <Calendar className="inline h-4 w-4 mr-2" />
              Actualizado: Diciembre 2024 | Versión 1.0
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-4xl">
            
            {/* Introducción */}
            <ScrollReveal>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-12">
                <div className="flex items-start gap-4">
                  <Info className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h2 className="text-xl font-bold text-blue-900 mb-2">
                      Servicios de Exportación desde Colombia
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                      Todos nuestros servicios de consultoría son prestados como{' '}
                      <strong>exportación de servicios</strong> desde Colombia por{' '}
                      <strong>{ORG.legalName}</strong>, con domicilio en{' '}
                      {ORG.city}, {ORG.countryOfIncorporation}. Esto tiene implicaciones
                      importantes sobre facturación, impuestos y medios de pago que
                      explicamos en detalle a continuación.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 1. Entidad Legal */}
            <ScrollReveal>
              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-brand-navy/10 rounded-lg flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-brand-navy" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    1. Entidad Legal
                  </h2>
                </div>

                <div className="space-y-4 text-slate-700">
                  <p className="leading-relaxed">
                    <strong>Proveedor único:</strong> Todos los servicios son prestados por{' '}
                    <strong>{ORG.legalName}</strong>, sociedad colombiana identificada con{' '}
                    <strong>{ORG.nit}</strong>, con domicilio principal en {ORG.city},{' '}
                    {ORG.countryOfIncorporation}.
                  </p>

                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-slate-900 mb-2">
                      Información de Registro:
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li><strong>Razón Social:</strong> {ORG.legalName}</li>
                      <li><strong>NIT:</strong> {ORG.nit}</li>
                      <li><strong>Domicilio:</strong> {ORG.city}, {ORG.countryOfIncorporation}</li>
                      <li><strong>Email:</strong> {ORG.email}</li>
                      <li><strong>Actividad:</strong> {ORG.businessType}</li>
                    </ul>
                  </div>

                  <p className="leading-relaxed">
                    Al contratar cualquiera de nuestros servicios, el contrato se celebra
                    directamente con esta entidad y se rige por la{' '}
                    <strong>legislación colombiana</strong>.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* 2. Facturación Electrónica */}
            <ScrollReveal>
              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center">
                    <Receipt className="h-6 w-6 text-brand-orange" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    2. Facturación Electrónica DIAN
                  </h2>
                </div>

                <div className="space-y-4 text-slate-700">
                  <p className="leading-relaxed">
                    Como empresa colombiana, emitimos{' '}
                    <strong>facturas electrónicas de venta</strong> validadas por la{' '}
                    <strong>DIAN</strong> (Dirección de Impuestos y Aduanas Nacionales
                    de Colombia).
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <CheckCircle className="h-5 w-5 text-green-600 mb-2" />
                      <p className="font-semibold text-green-900 mb-1">
                        Válidas Internacionalmente
                      </p>
                      <p className="text-sm text-green-800">
                        Nuestras facturas electrónicas son válidas para efectos
                        contables y fiscales en tu país.
                      </p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <CheckCircle className="h-5 w-5 text-green-600 mb-2" />
                      <p className="font-semibold text-green-900 mb-1">
                        Rastreables
                      </p>
                      <p className="text-sm text-green-800">
                        Cada factura tiene un código CUFE único que garantiza
                        su autenticidad y trazabilidad.
                      </p>
                    </div>
                  </div>

                  <p className="leading-relaxed">
                    <strong>Información de factura:</strong> Incluirá tu razón social,
                    identificación fiscal (NIT/RUT/RUC), dirección, y detalle de los
                    servicios prestados. Te la enviaremos por correo electrónico en
                    formato PDF y XML.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* 3. Moneda de Cobro */}
            <ScrollReveal>
              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-brand-turquoise/10 rounded-lg flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-brand-turquoise" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    3. Moneda de Cobro
                  </h2>
                </div>

                <div className="space-y-4 text-slate-700">
                  <p className="leading-relaxed">
                    Como exportadores de servicios, manejamos las siguientes monedas:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border-2 border-brand-orange rounded-lg p-4">
                      <h3 className="font-bold text-brand-orange mb-2 flex items-center gap-2">
                        🇨🇴 Colombia (COP)
                      </h3>
                      <p className="text-sm">
                        Clientes en Colombia: Facturamos en <strong>pesos colombianos (COP)</strong>.
                        Precios finales incluyen impuestos aplicables.
                      </p>
                    </div>

                    <div className="border-2 border-blue-500 rounded-lg p-4">
                      <h3 className="font-bold text-blue-600 mb-2 flex items-center gap-2">
                        🌎 Internacional (USD)
                      </h3>
                      <p className="text-sm">
                        Clientes internacionales: Facturamos en <strong>dólares
                        estadounidenses (USD)</strong> como moneda de exportación.
                      </p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>Nota sobre conversiones:</strong> Los valores en moneda
                      local (CLP, PEN, etc.) mostrados en el sitio web son referenciales
                      y calculados con tasas de cambio aproximadas. El valor exacto se
                      confirmará en la cotización formal.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 4. Medios de Pago */}
            <ScrollReveal>
              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    4. Medios de Pago Internacionales
                  </h2>
                </div>

                <div className="space-y-4 text-slate-700">
                  <p className="leading-relaxed">
                    Aceptamos los siguientes medios de pago:
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900">
                          Transferencia Bancaria Internacional (Wire Transfer)
                        </p>
                        <p className="text-sm text-slate-600 mt-1">
                          A nuestra cuenta en Colombia. Te proporcionaremos los datos
                          bancarios completos (SWIFT, número de cuenta, etc.) en la factura.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900">
                          Tarjetas de Crédito/Débito Internacionales
                        </p>
                        <p className="text-sm text-slate-600 mt-1">
                          Visa, Mastercard, American Express. Procesadas a través de
                          pasarelas de pago seguras (Stripe, PayU).
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900">
                          Plataformas de Pago (PayPal, Wise, etc.)
                        </p>
                        <p className="text-sm text-slate-600 mt-1">
                          Según disponibilidad y acuerdo previo.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900">
                          Transferencia Local (solo Colombia)
                        </p>
                        <p className="text-sm text-slate-600 mt-1">
                          PSE, Bancolombia, u otros bancos colombianos.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    <strong>Condiciones de pago:</strong> Varían según el servicio contratado.
                    Generalmente: 50% al inicio del proyecto y 50% al finalizar, o pagos
                    mensuales para servicios recurrentes.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* 5. Impuestos y Retenciones */}
            <ScrollReveal>
              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Globe className="h-6 w-6 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    5. Impuestos y Retenciones Locales
                  </h2>
                </div>

                <div className="space-y-4 text-slate-700">
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-lg">
                    <p className="font-semibold text-orange-900 mb-2">
                      Importante: Responsabilidad Fiscal del Cliente
                    </p>
                    <p className="text-sm text-orange-800 leading-relaxed">
                      Como servicios exportados desde Colombia, generalmente <strong>no</strong>{' '}
                      causan IVA. Sin embargo, según la legislación de tu país, podrías
                      estar obligado a:
                    </p>
                  </div>

                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-slate-700">1</span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">
                          Aplicar retenciones en la fuente
                        </p>
                        <p className="text-sm text-slate-600">
                          Según las leyes de tu país sobre pagos al exterior.
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-slate-700">2</span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">
                          Pagar impuestos locales sobre servicios importados
                        </p>
                        <p className="text-sm text-slate-600">
                          Como IVA de importación de servicios (Chile, Perú, etc.).
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-slate-700">3</span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">
                          Informar la operación a tu autoridad fiscal
                        </p>
                        <p className="text-sm text-slate-600">
                          Según requerimientos de tu país (ej: Formulario 1853 en Chile).
                        </p>
                      </div>
                    </li>
                  </ul>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-900 leading-relaxed">
                      <strong>Te recomendamos consultar con tu contador o asesor fiscal</strong>{' '}
                      sobre las obligaciones específicas en tu jurisdicción al contratar
                      servicios profesionales desde Colombia. Nosotros proporcionamos toda
                      la documentación necesaria para soportar la operación.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 6. Protección de Datos */}
            <ScrollReveal>
              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    6. Cumplimiento Legal y Protección de Datos
                  </h2>
                </div>

                <div className="space-y-4 text-slate-700">
                  <p className="leading-relaxed">
                    Cumplimos estrictamente con la normativa colombiana e internacional
                    de protección de datos:
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                      <Lock className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900">
                          Ley 1581 de 2012 (Colombia)
                        </p>
                        <p className="text-sm text-slate-600 mt-1">
                          Protección de datos personales en Colombia. Todos nuestros
                          procesos cumplen con esta normativa.{' '}
                          <Link 
                            href="/politica-privacidad" 
                            className="text-brand-orange hover:underline"
                          >
                            Ver Política de Privacidad →
                          </Link>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                      <Lock className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900">
                          Seguridad de la Información
                        </p>
                        <p className="text-sm text-slate-600 mt-1">
                          Implementamos medidas técnicas y organizativas para proteger
                          la confidencialidad de tu información empresarial.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                      <Lock className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900">
                          Confidencialidad
                        </p>
                        <p className="text-sm text-slate-600 mt-1">
                          Todo proyecto incluye un acuerdo de confidencialidad (NDA)
                          para proteger tu información estratégica y comercial.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* FAQ */}
            <ScrollReveal>
              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Preguntas Frecuentes sobre Facturación
                </h2>

                <div className="space-y-4">
                  <details className="group border-b border-slate-200 pb-4">
                    <summary className="cursor-pointer font-semibold text-slate-900 hover:text-brand-orange transition-colors list-none flex items-center justify-between">
                      <span>¿La factura desde Colombia es válida en mi país?</span>
                      <ArrowRight className="h-5 w-5 transform group-open:rotate-90 transition-transform" />
                    </summary>
                    <div className="mt-3 text-slate-700 text-sm leading-relaxed pl-4">
                      <p>
                        Sí. Las facturas electrónicas colombianas son válidas internacionalmente
                        para efectos contables y fiscales. Son documentos oficiales validados
                        por la DIAN y cumplen con estándares internacionales. Miles de empresas
                        en Latinoamérica las usan sin problemas.
                      </p>
                    </div>
                  </details>

                  <details className="group border-b border-slate-200 pb-4">
                    <summary className="cursor-pointer font-semibold text-slate-900 hover:text-brand-orange transition-colors list-none flex items-center justify-between">
                      <span>¿Debo pagar impuestos adicionales en mi país?</span>
                      <ArrowRight className="h-5 w-5 transform group-open:rotate-90 transition-transform" />
                    </summary>
                    <div className="mt-3 text-slate-700 text-sm leading-relaxed pl-4">
                      <p>
                        Depende de la legislación de tu país. Algunos países requieren:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Retenciones en la fuente sobre pagos al exterior</li>
                        <li>IVA de importación de servicios</li>
                        <li>Declaración informativa de operaciones internacionales</li>
                      </ul>
                      <p className="mt-2">
                        <strong>Te recomendamos consultar con tu contador local</strong> para
                        cumplir correctamente con tus obligaciones fiscales.
                      </p>
                    </div>
                  </details>

                  <details className="group border-b border-slate-200 pb-4">
                    <summary className="cursor-pointer font-semibold text-slate-900 hover:text-brand-orange transition-colors list-none flex items-center justify-between">
                      <span>¿Cuándo recibo la factura?</span>
                      <ArrowRight className="h-5 w-5 transform group-open:rotate-90 transition-transform" />
                    </summary>
                    <div className="mt-3 text-slate-700 text-sm leading-relaxed pl-4">
                      <p>
                        La factura electrónica se emite inmediatamente después de recibir el
                        pago o según los términos acordados en el contrato. Te la enviamos por
                        correo electrónico en formato PDF y XML (archivo de validación DIAN).
                      </p>
                    </div>
                  </details>

                  <details className="group border-b border-slate-200 pb-4">
                    <summary className="cursor-pointer font-semibold text-slate-900 hover:text-brand-orange transition-colors list-none flex items-center justify-between">
                      <span>¿Qué datos necesito proporcionar para facturar?</span>
                      <ArrowRight className="h-5 w-5 transform group-open:rotate-90 transition-transform" />
                    </summary>
                    <div className="mt-3 text-slate-700 text-sm leading-relaxed pl-4">
                      <p>
                        Necesitamos los siguientes datos de tu empresa:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Razón social completa</li>
                        <li>Número de identificación fiscal (NIT/RUT/RUC según tu país)</li>
                        <li>Dirección fiscal completa</li>
                        <li>Email de facturación electrónica</li>
                        <li>Nombre y email de contacto responsable</li>
                      </ul>
                      <p className="mt-2">
                        Estos datos los solicitamos al momento de la contratación.
                      </p>
                    </div>
                  </details>

                  <details className="group border-b border-slate-200 pb-4">
                    <summary className="cursor-pointer font-semibold text-slate-900 hover:text-brand-orange transition-colors list-none flex items-center justify-between">
                      <span>¿Ofrecen planes de pago?</span>
                      <ArrowRight className="h-5 w-5 transform group-open:rotate-90 transition-transform" />
                    </summary>
                    <div className="mt-3 text-slate-700 text-sm leading-relaxed pl-4">
                      <p>
                        Sí. Según el servicio y monto del proyecto, podemos estructurar:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Pagos por hitos de proyecto (ej: 30% inicio, 40% medio, 30% final)</li>
                        <li>Pagos mensuales para servicios recurrentes</li>
                        <li>Otros esquemas según acuerdo comercial</li>
                      </ul>
                      <p className="mt-2">
                        Lo definimos en conjunto al inicio del proyecto.
                      </p>
                    </div>
                  </details>
                </div>
              </div>
            </ScrollReveal>

            {/* CTA Final */}
            <ScrollReveal>
              <div className="bg-gradient-to-br from-brand-navy via-brand-purple to-brand-navy rounded-xl p-8 text-center text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  ¿Tienes Más Preguntas sobre Facturación?
                </h2>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Nuestro equipo está listo para aclarar cualquier duda sobre
                  contratación, facturación, medios de pago o aspectos legales.
                </p>
                <Button 
                  asChild
                  size="lg"
                  className="bg-white text-brand-navy hover:bg-slate-100"
                >
                  <Link href={`/${params.lc}/contacto`}>
                    Contáctanos
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <p className="text-sm text-white/70 mt-4">
                  Respuesta en menos de 24 horas hábiles
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
    </>
  );
}

