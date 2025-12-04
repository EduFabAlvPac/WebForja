/**
 * FORJA DIGITAL - Servicio Overlay: Ecuador
 * 
 * Overlay específico de Ecuador para el servicio Comercial y Servicio al Cliente.
 * Solo sobrescribe las partes que cambian (caseStudy, testimonios, datos locales).
 * 
 * @module content/es-ec/servicios/comercial-servicio-cliente
 */

import type { ServicePageData } from '@/types/services';

/**
 * Overlay de Ecuador
 * Se hace deep-merge con baseComercialServicioData
 */
export const overlayComercialServicioDataEC: Partial<ServicePageData> = {
  // Case Study localizado para Ecuador
  caseStudy: {
    company: {
      name: 'Empresa de Distribución',
      industry: 'Distribución',
      size: '16 personas',
      location: 'Quito, Ecuador'
    },
    challenge: 'Alta adquisición pero retención del 58%. Servicio reactivo. Falta de seguimiento. Clientes que compraban una vez y no volvían.',
    solution: 'Sistema comercial integrado: venta con expectativas claras, servicio proactivo, programa de seguimiento estructurado y medición de satisfacción.',
    results: {
      before: [
        { label: 'Retención anual', value: '58%' },
        { label: 'NPS', value: '12' },
        { label: 'Tiempo respuesta', value: '40h' }
      ],
      after: [
        { label: 'Retención anual', value: '86%' },
        { label: 'NPS', value: '66' },
        { label: 'Tiempo respuesta', value: '6h' }
      ]
    },
    testimonial: {
      quote: 'Vendíamos bien pero teníamos una puerta giratoria de clientes. FORJA nos enseñó a integrar comercial con servicio. Ahora nuestros clientes se quedan y nos refieren.',
      author: 'Roberto Mendoza',
      position: 'Director Comercial, Quito'
    }
  },

  // Perfil ideal ajustado para Ecuador
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
      description: 'Directores Comerciales, Gerentes de Servicio, Directores Generales de empresas B2B o B2C con 5-50 personas en comercial y servicio. Empresas ecuatorianas donde la experiencia del cliente es crítica para el crecimiento.'
    }
  }
};

