/**
 * FORJA DIGITAL - Servicio Overlay: Colombia
 * 
 * Overlay específico de Colombia para el servicio Comercial y Servicio al Cliente.
 * Solo sobrescribe las partes que cambian (caseStudy, testimonios, datos locales).
 * 
 * @module content/es-co/servicios/comercial-servicio-cliente
 */

import type { ServicePageData } from '@/types/services';

/**
 * Overlay de Colombia
 * Se hace deep-merge con baseComercialServicioData
 */
export const overlayComercialServicioDataCO: Partial<ServicePageData> = {
  // Case Study localizado para Colombia
  caseStudy: {
    company: {
      name: 'Empresa de Software como Servicio',
      industry: 'Tecnología',
      size: '12 personas (5 comercial, 4 servicio)',
      location: 'Medellín, Colombia'
    },
    challenge: 'Empresa con buena adquisición de clientes (15-20 nuevos/mes) pero retención del 65% anual. Servicio reactivo que solo atendía quejas. Desconexión entre promesas de venta y entrega real. Tasa de cancelación del 35% anual. No medían satisfacción ni tenían programa de fidelización.',
    solution: 'Implementamos sistema integrado: rediseñamos proceso comercial con expectativas claras, creamos proceso de traspaso estructurado, implementamos servicio proactivo con seguimiento, diseñamos programa de éxito del cliente, y lanzamos sistema de medición de satisfacción con NPS.',
    results: {
      before: [
        { label: 'Retención anual', value: '65%' },
        { label: 'NPS', value: '18' },
        { label: 'Tiempo respuesta', value: '24h' },
        { label: 'Recompra', value: '30%' },
        { label: 'Valor vida cliente', value: '$48M COP' },
        { label: 'Referidos', value: '5%' }
      ],
      after: [
        { label: 'Retención anual', value: '89%' },
        { label: 'NPS', value: '68' },
        { label: 'Tiempo respuesta', value: '4h' },
        { label: 'Recompra', value: '72%' },
        { label: 'Valor vida cliente', value: '$112M COP' },
        { label: 'Referidos', value: '32%' }
      ]
    },
    testimonial: {
      quote: 'Antes vendíamos bien pero los clientes se iban. Gastábamos todo en conseguir nuevos clientes. FORJA nos ayudó a integrar comercial con servicio: ahora lo que prometemos se cumple, el servicio es proactivo, y los clientes están tan satisfechos que nos refieren. Retención subió de 65% a 89% y el valor de vida del cliente se duplicó. Cambiamos de perseguir clientes nuevos a hacer crecer los que ya tenemos.',
      author: 'María Fernanda Ruiz',
      position: 'Directora Comercial, Medellín'
    },
    downloadLink: '/contacto'
  },

  // Perfil ideal ajustado para Colombia
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
      description: 'Directores Comerciales, Gerentes de Servicio, Directores Generales de empresas B2B o B2C con 5-50 personas en comercial y servicio. Facturación $3.000M-$60.000M COP anuales. Empresas colombianas donde la experiencia del cliente es crítica para el crecimiento.'
    }
  }
};

