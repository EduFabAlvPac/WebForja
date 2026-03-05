import { Metadata } from 'next'
import { Shield, Lock, Eye, UserCheck, FileText, Mail, AlertCircle, Calendar, Search, Pencil, Trash2, Ban, ClipboardList, MessageCircleWarning, ScanSearch, FileCheck2 } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export const metadata: Metadata = {
  title: 'Política de Privacidad | ForjaConsulting',
  description: 'Política de Privacidad de ForjaConsulting. Conoce cómo protegemos tus datos personales conforme a la Ley 1581 de 2012 de Colombia y GDPR.',
  keywords: 'política de privacidad, protección de datos, Ley 1581 de 2012, GDPR, datos personales, ForjaConsulting',
  robots: 'index, follow',
  openGraph: {
    title: 'Política de Privacidad | ForjaConsulting',
    description: 'Conoce cómo protegemos tus datos personales conforme a la Ley 1581 de 2012 de Colombia.',
    type: 'website',
  },
}

export default function PoliticaPrivacidadPage() {
  // Schema.org markup para SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Política de Privacidad',
    description: 'Política de Privacidad de ForjaConsulting conforme a la Ley 1581 de 2012',
    publisher: {
      '@type': 'Organization',
      name: 'ForjaConsulting',
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
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-h1-mobile md:text-h1-desktop text-white mb-4">
            Política de Privacidad
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            En ForjaConsulting protegemos tus datos personales conforme a la Ley 1581 de 2012
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
                    ForjaConsulting, en adelante &quot;nosotros&quot; o &quot;la empresa&quot;, es responsable del tratamiento de los datos personales que recopilamos a través de nuestro sitio web y servicios.
                  </p>
                </div>
              </div>
              <div className="bg-blue-50 border-l-4 border-brand-turquoise p-4 rounded">
                <p className="text-sm text-gray-700">
                  <strong>Responsable del tratamiento:</strong> ForjaConsulting<br />
                  <strong>Domicilio:</strong> Bogotá, Colombia<br />
                  <strong>Email:</strong> <a href="mailto:forjadigitalae@gmail.com" className="text-brand-orange hover:underline">forjadigitalae@gmail.com</a><br />
                  <strong>Teléfono:</strong> +57 300 123 4567
                </p>
              </div>
            </div>
          </ScrollReveal>

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
                    <li>Nombre completo</li>
                    <li>Correo electrónico</li>
                    <li>Número de teléfono</li>
                    <li>Cargo y empresa (opcional)</li>
                  </ul>

                  <h3 className="text-lg font-semibold mb-3 text-brand-navy">Datos de Navegación:</h3>
                  <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                    <li>Dirección IP</li>
                    <li>Tipo de navegador y dispositivo</li>
                    <li>Páginas visitadas y tiempo de permanencia</li>
                    <li>Cookies y tecnologías similares</li>
                  </ul>

                  <h3 className="text-lg font-semibold mb-3 text-brand-navy">Datos Empresariales (Evaluación de Madurez):</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Información sobre la empresa (sector, tamaño, ubicación)</li>
                    <li>Desafíos y objetivos empresariales</li>
                    <li>Respuestas al diagnóstico de madurez empresarial</li>
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
                      <p className="text-gray-700">Responder a tus consultas, solicitudes de información y brindar soporte.</p>
                    </div>

                    <div className="border-l-4 border-brand-turquoise pl-4">
                      <h3 className="font-semibold text-brand-navy mb-2">Servicios de Consultoría:</h3>
                      <p className="text-gray-700">Proporcionar diagnósticos empresariales, reportes personalizados y servicios de consultoría.</p>
                    </div>

                    <div className="border-l-4 border-brand-purple pl-4">
                      <h3 className="font-semibold text-brand-navy mb-2">Marketing y Comunicaciones:</h3>
                      <p className="text-gray-700">Enviar información sobre nuestros servicios, casos de éxito, contenido educativo y ofertas relevantes.</p>
                    </div>

                    <div className="border-l-4 border-brand-coral pl-4">
                      <h3 className="font-semibold text-brand-navy mb-2">Mejora de Servicios:</h3>
                      <p className="text-gray-700">Analizar el uso del sitio web, mejorar la experiencia del usuario y desarrollar nuevos servicios.</p>
                    </div>

                    <div className="border-l-4 border-gray-400 pl-4">
                      <h3 className="font-semibold text-brand-navy mb-2">Cumplimiento Legal:</h3>
                      <p className="text-gray-700">Cumplir con obligaciones legales, regulatorias y requerimientos de autoridades competentes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 3. Base Legal del Tratamiento */}
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
                    <span className="text-gray-700"> Para mejorar nuestros servicios y comunicarnos contigo sobre temas relevantes.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <div>
                    <strong className="text-brand-navy">Cumplimiento legal:</strong>
                    <span className="text-gray-700"> Conforme a la Ley 1581 de 2012 y normativa aplicable.</span>
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
                De acuerdo con la Ley 1581 de 2012, tienes los siguientes derechos:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-brand-orange/10 to-brand-coral/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                    <Search className="w-4 h-4 text-brand-orange" />
                    Derecho de Acceso
                  </h3>
                  <p className="text-sm text-gray-700">Conocer qué datos tenemos sobre ti y cómo los usamos.</p>
                </div>

                <div className="bg-gradient-to-br from-brand-turquoise/10 to-brand-purple/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                    <Pencil className="w-4 h-4 text-brand-turquoise" />
                    Derecho de Rectificación
                  </h3>
                  <p className="text-sm text-gray-700">Actualizar o corregir datos inexactos o incompletos.</p>
                </div>

                <div className="bg-gradient-to-br from-brand-purple/10 to-brand-navy/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                    <Trash2 className="w-4 h-4 text-brand-purple" />
                    Derecho de Supresión
                  </h3>
                  <p className="text-sm text-gray-700">Solicitar la eliminación de tus datos personales.</p>
                </div>

                <div className="bg-gradient-to-br from-brand-coral/10 to-brand-orange/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                    <Ban className="w-4 h-4 text-brand-coral" />
                    Derecho de Oposición
                  </h3>
                  <p className="text-sm text-gray-700">Oponerte al tratamiento de tus datos en ciertos casos.</p>
                </div>

                <div className="bg-gradient-to-br from-brand-navy/10 to-brand-turquoise/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                    <ClipboardList className="w-4 h-4 text-brand-navy" />
                    Derecho de Consulta
                  </h3>
                  <p className="text-sm text-gray-700">Consultar tus datos almacenados en nuestras bases.</p>
                </div>

                <div className="bg-gradient-to-br from-green-100 to-blue-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                    <MessageCircleWarning className="w-4 h-4 text-amber-600" />
                    Derecho de Reclamo
                  </h3>
                  <p className="text-sm text-gray-700">Presentar quejas ante la Superintendencia de Industria y Comercio.</p>
                </div>
              </div>

              <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <p className="text-sm text-gray-700">
                  <strong>¿Cómo ejercer tus derechos?</strong><br />
                  Envía un correo a <a href="mailto:forjadigitalae@gmail.com" className="text-brand-orange hover:underline font-medium">forjadigitalae@gmail.com</a> con el asunto &quot;Ejercicio de Derechos - Protección de Datos&quot; indicando claramente tu solicitud.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* 5. Seguridad de los Datos */}
          <ScrollReveal>
            <div className="bg-white rounded-card shadow-card p-8 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lock className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4">5. Seguridad de los Datos</h2>
                  <p className="text-gray-700 mb-4">
                    Implementamos medidas técnicas, administrativas y físicas para proteger tus datos:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-turquoise mt-1">🔒</span>
                      <span><strong>Cifrado SSL/TLS:</strong> Todas las comunicaciones están encriptadas.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-turquoise mt-1">🛡️</span>
                      <span><strong>Acceso restringido:</strong> Solo personal autorizado puede acceder a los datos.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-turquoise mt-1">💾</span>
                      <span><strong>Respaldos seguros:</strong> Copias de seguridad periódicas y encriptadas.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ScanSearch className="w-4 h-4 text-brand-turquoise mt-1 flex-shrink-0" />
                      <span><strong>Monitoreo continuo:</strong> Detección de accesos no autorizados.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileCheck2 className="w-4 h-4 text-brand-turquoise mt-1 flex-shrink-0" />
                      <span><strong>Políticas internas:</strong> Protocolos de seguridad y confidencialidad.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 6. Compartir Datos con Terceros */}
          <ScrollReveal>
            <div className="bg-white rounded-card shadow-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Compartir Datos con Terceros</h2>
              <p className="text-gray-700 mb-4">
                Podemos compartir tus datos con terceros en los siguientes casos:
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-brand-navy mb-2">Proveedores de Servicios:</h3>
                  <p className="text-sm text-gray-700">Google (Sheets, Analytics), servicios de email, hosting (Vercel).</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-brand-navy mb-2">Autoridades Legales:</h3>
                  <p className="text-sm text-gray-700">Cuando sea requerido por ley o por orden judicial.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-brand-navy mb-2">Socios Comerciales:</h3>
                  <p className="text-sm text-gray-700">Solo con tu consentimiento previo y para fines específicos.</p>
                </div>
              </div>
              <div className="mt-4 bg-blue-50 border-l-4 border-brand-turquoise p-4 rounded">
                <p className="text-sm text-gray-700">
                  <AlertCircle className="inline h-4 w-4 mr-2 text-brand-turquoise" />
                  <strong>Importante:</strong> Todos nuestros proveedores están obligados contractualmente a proteger tus datos y usarlos solo para los fines autorizados.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* 7. Cookies y Tecnologías de Seguimiento */}
          <ScrollReveal>
            <div className="bg-white rounded-card shadow-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Cookies y Tecnologías de Seguimiento</h2>
              <p className="text-gray-700 mb-4">
                Utilizamos cookies y tecnologías similares para mejorar tu experiencia:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento del sitio.</li>
                <li><strong>Cookies analíticas:</strong> Google Analytics para entender cómo usas el sitio.</li>
                <li><strong>Cookies de marketing:</strong> Para personalizar contenido y anuncios.</li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                Puedes configurar tu navegador para rechazar cookies, pero esto puede afectar la funcionalidad del sitio.
              </p>
            </div>
          </ScrollReveal>

          {/* 8. Retención de Datos */}
          <ScrollReveal>
            <div className="bg-white rounded-card shadow-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Retención de Datos</h2>
              <p className="text-gray-700 mb-4">
                Conservamos tus datos personales durante el tiempo necesario para:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Cumplir con las finalidades para las que fueron recopilados</li>
                <li>✓ Cumplir con obligaciones legales (mínimo 5 años según normativa colombiana)</li>
                <li>✓ Resolver disputas y hacer cumplir nuestros acuerdos</li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                Una vez cumplido el periodo de retención, procederemos a eliminar o anonimizar tus datos de forma segura.
              </p>
            </div>
          </ScrollReveal>

          {/* 9. Transferencias Internacionales */}
          <ScrollReveal>
            <div className="bg-white rounded-card shadow-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Transferencias Internacionales de Datos</h2>
              <p className="text-gray-700 mb-4">
                Algunos de nuestros proveedores de servicios están ubicados fuera de Colombia (ej: Google, Vercel). Garantizamos que estas transferencias cumplen con:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Cláusulas contractuales estándar aprobadas</li>
                <li>✓ Certificaciones de privacidad internacionales</li>
                <li>✓ Medidas de seguridad equivalentes a las exigidas en Colombia</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* 10. Menores de Edad */}
          <ScrollReveal>
            <div className="bg-white rounded-card shadow-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Menores de Edad</h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <p className="text-gray-700">
                  <strong>Nuestros servicios están dirigidos a empresas y profesionales.</strong> No recopilamos intencionalmente datos de menores de 18 años. Si detectamos que hemos recopilado datos de un menor, los eliminaremos inmediatamente.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* 11. Cambios en la Política */}
          <ScrollReveal>
            <div className="bg-white rounded-card shadow-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">11. Cambios en esta Política</h2>
              <p className="text-gray-700 mb-4">
                Podemos actualizar esta Política de Privacidad periódicamente. Te notificaremos sobre cambios significativos mediante:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Aviso destacado en nuestro sitio web</li>
                <li>✓ Email a tu dirección registrada</li>
                <li>✓ Actualización de la fecha al inicio de esta política</li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                Te recomendamos revisar esta política periódicamente para estar informado sobre cómo protegemos tus datos.
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
                  <h2 className="text-2xl font-bold mb-4">¿Preguntas sobre tus Datos?</h2>
                  <p className="mb-6 text-white/90">
                    Si tienes dudas sobre esta Política de Privacidad o deseas ejercer tus derechos, contáctanos:
                  </p>
                  <div className="space-y-2 text-white/90">
                    <p><strong>Email:</strong> <a href="mailto:forjadigitalae@gmail.com" className="text-brand-orange hover:underline">forjadigitalae@gmail.com</a></p>
                    <p><strong>Teléfono:</strong> +57 300 123 4567</p>
                    <p><strong>Horario:</strong> Lunes a Viernes, 8:00 AM - 6:00 PM (COT)</p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-sm text-white/80">
                      <strong>Autoridad de Control:</strong><br />
                      Superintendencia de Industria y Comercio (SIC)<br />
                      <a href="https://www.sic.gov.co" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">www.sic.gov.co</a>
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

