/**
 * FORJA DIGITAL - Servicio Overlay: Chile
 * 
 * Overlay específico de Chile para el servicio Comercial y Servicio al Cliente.
 * Solo sobrescribe las partes que cambian (caseStudy, testimonios, datos locales).
 * 
 * @module content/es-cl/servicios/comercial-servicio-cliente
 */

import type { ServicePageData } from '@/types/services';

/**
 * Overlay de Chile
 * Se hace deep-merge con baseComercialServicioData
 */
export const overlayComercialServicioDataCL: Partial<ServicePageData> = {
  // Case Study localizado para Chile
  caseStudy: {
    company: {
      name: 'Empresa de Retail Especializado',
      industry: 'Retail',
      size: '18 personas',
      location: 'Santiago, Chile'
    },
    challenge: 'Alta adquisición de clientes en temporadas altas pero retención baja (60%). Servicio reactivo. Falta de seguimiento postventa. Clientes no volvían a comprar.',
    solution: 'Sistema integrado comercial-servicio: proceso de venta con expectativas claras, atención proactiva, programa de fidelización y medición NPS.',
    results: {
      before: [
        { label: 'Retención anual', value: '60%' },
        { label: 'NPS', value: '22' },
        { label: 'Tiempo respuesta', value: '48h' }
      ],
      after: [
        { label: 'Retención anual', value: '85%' },
        { label: 'NPS', value: '65' },
        { label: 'Tiempo respuesta', value: '6h' }
      ]
    },
    testimonial: {
      quote: 'Vendíamos bien en temporada pero los clientes no volvían. Con FORJA implementamos un sistema que mantiene a los clientes satisfechos todo el año. Nuestra retención mejoró significativamente.',
      author: 'Carlos Mora',
      position: 'Gerente Comercial, Santiago'
    }
  },

  // Perfil ideal ajustado para Chile
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
      description: 'Directores Comerciales, Gerentes de Servicio, Directores Generales de empresas B2B o B2C con 5-50 personas en comercial y servicio. Empresas chilenas donde la experiencia del cliente es crítica para el crecimiento.'
    }
  }
};

