/**
 * FORJA DIGITAL - Legal Content Base
 * 
 * Contenido neutro base para todas las páginas legales.
 * Los overlays por país agregan notas específicas sobre transferencias
 * internacionales y derechos del titular.
 * 
 * @module content/base/legal
 */

import { ORG } from '@/lib/org';

export interface LegalContent {
  privacy: {
    intro: {
      text: string;
      responsible: string;
    };
    dataCollection: {
      identification: string[];
      navigation: string[];
      business: string[];
    };
    purposes: {
      contact: string;
      services: string;
      marketing: string;
      improvement: string;
      legal: string;
    };
    rights: {
      access: string;
      rectification: string;
      deletion: string;
      opposition: string;
      consultation: string;
      complaint: string;
    };
    internationalTransfer?: {
      title: string;
      content: string;
      note?: string;
    };
  };
  terms: {
    acceptance: {
      text: string;
      warning: string;
    };
    services: {
      description: string;
      list: Array<{ title: string; description: string }>;
    };
    jurisdiction: {
      law: string;
      courts: string;
    };
  };
  cookies: {
    intro: string;
    types: {
      necessary: { title: string; description: string };
      analytics: { title: string; description: string };
      functional: { title: string; description: string };
      marketing: { title: string; description: string };
    };
  };
}

export const legalContentBase: LegalContent = {
  privacy: {
    intro: {
      text: `${ORG.brandName}, en adelante "nosotros" o "la empresa", es responsable del tratamiento de los datos personales que recopilamos a través de nuestro sitio web y servicios.`,
      responsible: `Responsable del tratamiento: ${ORG.legalName}, con domicilio en ${ORG.city}, ${ORG.countryOfIncorporation}. Email: ${ORG.email}`,
    },
    dataCollection: {
      identification: [
        'Nombre completo',
        'Correo electrónico',
        'Número de teléfono',
        'Cargo y empresa (opcional)',
        'Identificación fiscal (NIT/RUT/RUC) para facturación',
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
      legal: 'Cumplir con obligaciones legales, regulatorias y requerimientos de autoridades competentes.',
    },
    rights: {
      access: 'Conocer qué datos tenemos sobre ti y cómo los usamos.',
      rectification: 'Actualizar o corregir datos inexactos o incompletos.',
      deletion: 'Solicitar la eliminación de tus datos personales (sujeto a obligaciones legales de retención).',
      opposition: 'Oponerte al tratamiento de tus datos en ciertos casos.',
      consultation: 'Consultar tus datos almacenados en nuestras bases.',
      complaint: 'Presentar quejas ante la autoridad de protección de datos correspondiente.',
    },
  },
  terms: {
    acceptance: {
      text: `Al acceder y utilizar el sitio web de ${ORG.brandName} (en adelante "el Sitio") y nuestros servicios, aceptas estar sujeto a estos Términos y Condiciones, nuestra Política de Protección de Datos y todas las leyes aplicables.`,
      warning: 'Si no estás de acuerdo con estos términos, por favor no utilices nuestro sitio web ni servicios.',
    },
    services: {
      description: `${ORG.brandName} ofrece servicios de consultoría empresarial exportados desde ${ORG.countryOfIncorporation}, incluyendo pero no limitado a:`,
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
      law: `Estos términos se rigen por las leyes de ${ORG.countryOfIncorporation}.`,
      courts: `Cualquier disputa relacionada con estos términos será resuelta por los tribunales competentes de ${ORG.city}, ${ORG.countryOfIncorporation}.`,
    },
  },
  cookies: {
    intro: `Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. En ${ORG.brandName}, utilizamos cookies y tecnologías similares para mejorar tu experiencia de navegación, analizar el tráfico y personalizar contenido.`,
    types: {
      necessary: {
        title: 'Cookies Estrictamente Necesarias',
        description: 'Esenciales para que puedas navegar por el sitio y utilizar sus funciones. Sin estas cookies, ciertos servicios no estarán disponibles.',
      },
      analytics: {
        title: 'Cookies de Rendimiento y Análisis',
        description: 'Nos permiten medir y mejorar el rendimiento del sitio. Nos ayudan a entender qué páginas son más populares y cómo los visitantes navegan.',
      },
      functional: {
        title: 'Cookies Funcionales',
        description: 'Permiten recordar tus preferencias (idioma, país, configuración) para ofrecerte una experiencia más personalizada.',
      },
      marketing: {
        title: 'Cookies de Marketing',
        description: 'Utilizadas para mostrar anuncios relevantes y medir la efectividad de nuestras campañas publicitarias.',
      },
    },
  },
};

