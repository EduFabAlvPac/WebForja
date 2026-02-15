/**
 * FORJA DIGITAL - Servicio Overlay: Perú
 * 
 * Overlay específico de Perú para el servicio Comercial y Servicio al Cliente.
 * Solo sobrescribe las partes que cambian (caseStudy, testimonios, datos locales).
 * 
 * @module content/es-pe/servicios/comercial-servicio-cliente
 */

import type { ServicePageData } from '@/types/services';

/**
 * Overlay de Perú
 * Se hace deep-merge con baseComercialServicioData
 */
export const overlayComercialServicioDataPE: Partial<ServicePageData> = {
  // Case Study localizado para Perú
  caseStudy: {
    company: {
      name: 'Empresa de Servicios Profesionales',
      industry: 'Consultoría',
      size: '14 personas',
      location: 'Lima, Perú'
    },
    challenge: 'Buena adquisición de clientes pero retención del 62%. Servicio reactivo. Sin seguimiento estructurado. Clientes insatisfechos que no renovaban.',
    solution: 'Sistema integrado: proceso comercial estructurado, atención proactiva con seguimiento, programa de éxito del cliente y medición continua de satisfacción.',
    results: {
      before: [
        { label: 'Retención anual', value: '62%' },
        { label: 'NPS', value: '15' },
        { label: 'Tiempo respuesta', value: '36h' }
      ],
      after: [
        { label: 'Retención anual', value: '88%' },
        { label: 'NPS', value: '70' },
        { label: 'Tiempo respuesta', value: '5h' }
      ]
    },
    testimonial: {
      quote: 'Perdíamos clientes sin saber por qué. FORJA nos ayudó a estructurar todo el proceso comercial y de servicio. Ahora medimos todo, actuamos proactivamente y nuestros clientes están mucho más satisfechos.',
      author: 'Ana Lucía Torres',
      position: 'Gerente General, Lima'
    }
  },

  // Perfil ideal ajustado para Perú
  targetProfile: {
    title: '¿Este Servicio es para Tu Empresa?',
    items: [
      'Vendes bien pero los clientes no vuelven a comprar (baja recurrencia)',
      'Alta adquisición de clientes nuevos pero poca retención de los existentes',
      'Servicio al cliente reactivo: solo apagamos incendios cuando el cliente reclama',
      'No mides satisfacción del cliente ni tienes sistema de seguimiento postventa',
      'Cada vendedor promete cosas diferentes y servicio no puede cumplir',
      'Dependes de conseguir clientes nuevos porque los actuales no recompran'
    ],
    idealProfile: {
      title: 'Perfil Ideal',
      description: 'Directores Comerciales, Gerentes de Servicio, Directores Generales de empresas B2B o B2C con 5-50 personas en comercial y servicio. Empresas peruanas donde la experiencia del cliente es crítica para el crecimiento.'
    }
  }
};

