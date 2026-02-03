/**
 * FORJA DIGITAL - Legal Content Overlay (Chile)
 * 
 * Overlay de contenido legal específico para Chile.
 * Se hace merge con el contenido base.
 * 
 * @module content/cl/legal
 */

import type { LegalContent } from '@/content/base/legal';

export const legalContentOverlay: Partial<LegalContent> = {
  privacy: {
    intro: {
      text: 'Forja Digital, en adelante "nosotros" o "la empresa", es responsable del tratamiento de los datos personales que recopilamos a través de nuestro sitio web y servicios, conforme a la Ley 19.628 sobre Protección de la Vida Privada de Chile.',
      responsible: 'Responsable del tratamiento: Forja Digital S.A.S. (Colombia), prestando servicios en Chile. Email: info@forjadigital.com',
    },
    dataCollection: {
      identification: [
        'Nombre completo',
        'Correo electrónico',
        'Número de teléfono',
        'Cargo y empresa (opcional)',
        'RUT para facturación',
      ],
      navigation: [
        'Dirección IP',
        'Tipo de navegador y dispositivo',
        'Páginas visitadas y tiempo de permanencia',
        'Cookies y tecnologías similares',
      ],
      business: [
        'Información sobre la empresa (sector, tamaño, ubicación)',
        'Desafíos y objetivos empresariales',
        'Respuestas al diagnóstico de madurez empresarial',
      ],
    },
    purposes: {
      contact: 'Responder a tus consultas, solicitudes de información y brindar soporte.',
      services: 'Proporcionar diagnósticos empresariales, reportes personalizados y servicios de consultoría.',
      marketing: 'Enviar información sobre nuestros servicios, casos de éxito, contenido educativo y ofertas relevantes (con tu consentimiento previo).',
      improvement: 'Analizar el uso del sitio web, mejorar la experiencia del usuario y desarrollar nuevos servicios.',
      legal: 'Cumplir con obligaciones legales conforme a la Ley 19.628 de Chile.',
    },
    rights: {
      access: 'Conocer qué datos tenemos sobre ti y cómo los usamos.',
      rectification: 'Actualizar o corregir datos inexactos o incompletos.',
      deletion: 'Solicitar la eliminación de tus datos personales (derecho al olvido).',
      opposition: 'Oponerte al tratamiento de tus datos en ciertos casos.',
      consultation: 'Consultar tus datos almacenados en nuestras bases.',
      complaint: 'Presentar quejas ante el Consejo para la Transparencia o tribunales competentes.',
    },
    internationalTransfer: {
      title: 'Transferencia Internacional de Datos',
      content: 'Tus datos pueden ser transferidos y procesados en Colombia, donde se encuentra nuestra sede principal. Garantizamos niveles de protección adecuados conforme a la legislación chilena.',
      note: 'Al utilizar nuestros servicios, consientes expresamente esta transferencia internacional.',
    },
  },
  terms: {
    acceptance: {
      text: 'Al acceder y utilizar el sitio web de Forja Digital (en adelante "el Sitio") y nuestros servicios, aceptas estar sujeto a estos Términos y Condiciones y nuestra Política de Protección de Datos.',
      warning: 'Si no estás de acuerdo con estos términos, por favor no utilices nuestro sitio web ni servicios.',
    },
    services: {
      description: 'Forja Digital ofrece servicios de consultoría empresarial exportados desde Colombia para clientes en Chile, incluyendo pero no limitado a:',
      list: [
        {
          title: 'Arquitectura Estratégica',
          description: 'Diseño y optimización de estructuras empresariales.',
        },
        {
          title: 'Transformación Digital',
          description: 'Modernización tecnológica y digital de procesos.',
        },
        {
          title: 'Evaluación de Madurez Empresarial',
          description: 'Diagnóstico gratuito de madurez empresarial.',
        },
        {
          title: 'Consultoría Personalizada',
          description: 'Asesoría estratégica adaptada a tu negocio.',
        },
      ],
    },
    jurisdiction: {
      law: 'Estos términos se rigen por las leyes de Colombia, sin perjuicio de los derechos que te asisten bajo la legislación chilena.',
      courts: 'Cualquier disputa relacionada con estos términos será resuelta por los tribunales competentes de Bogotá, Colombia.',
    },
  },
};

