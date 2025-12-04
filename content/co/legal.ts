/**
 * FORJA DIGITAL - Legal Content Overlay (Colombia)
 * 
 * Overlay de contenido legal específico para Colombia.
 * Se hace merge con el contenido base.
 * 
 * @module content/co/legal
 */

import type { LegalContent } from '@/content/base/legal';

export const legalContentOverlay: Partial<LegalContent> = {
  privacy: {
    intro: {
      text: 'Forja Digital, en adelante "nosotros" o "la empresa", es responsable del tratamiento de los datos personales que recopilamos a través de nuestro sitio web y servicios, conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013 de Colombia.',
      responsible: 'Responsable del tratamiento: Forja Digital S.A.S., con domicilio en Bogotá, Colombia. Email: info@forjadigital.com',
    },
    dataCollection: {
      identification: [
        'Nombre completo',
        'Correo electrónico',
        'Número de teléfono',
        'Cargo y empresa (opcional)',
        'NIT para facturación',
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
      legal: 'Cumplir con obligaciones legales conforme a la Ley 1581 de 2012 y requerimientos de la Superintendencia de Industria y Comercio.',
    },
    rights: {
      access: 'Conocer qué datos tenemos sobre ti y cómo los usamos (Art. 8, Ley 1581 de 2012).',
      rectification: 'Actualizar o corregir datos inexactos o incompletos.',
      deletion: 'Solicitar la eliminación de tus datos personales (sujeto a obligaciones legales de retención).',
      opposition: 'Oponerte al tratamiento de tus datos en ciertos casos.',
      consultation: 'Consultar tus datos almacenados en nuestras bases de forma gratuita.',
      complaint: 'Presentar quejas ante la Superintendencia de Industria y Comercio (SIC).',
    },
  },
  terms: {
    acceptance: {
      text: 'Al acceder y utilizar el sitio web de Forja Digital (en adelante "el Sitio") y nuestros servicios, aceptas estar sujeto a estos Términos y Condiciones, nuestra Política de Protección de Datos conforme a la Ley 1581 de 2012.',
      warning: 'Si no estás de acuerdo con estos términos, por favor no utilices nuestro sitio web ni servicios.',
    },
    services: {
      description: 'Forja Digital ofrece servicios de consultoría empresarial desde Colombia, incluyendo pero no limitado a:',
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
          title: 'Rayos-X Empresarial',
          description: 'Diagnóstico gratuito de madurez empresarial.',
        },
        {
          title: 'Consultoría Personalizada',
          description: 'Asesoría estratégica adaptada a tu negocio.',
        },
      ],
    },
    jurisdiction: {
      law: 'Estos términos se rigen por las leyes de la República de Colombia.',
      courts: 'Cualquier disputa relacionada con estos términos será resuelta por los tribunales competentes de Bogotá, Colombia.',
    },
  },
};

