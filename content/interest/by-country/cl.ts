/**
 * FORJA DIGITAL - Interest Content: Chile
 * 
 * Contenido de interés específico para Chile.
 * Incluye programas gubernamentales, regulaciones locales y recursos específicos.
 * Guía informativa - no constituye asesoría legal.
 * 
 * @module content/interest/by-country/cl
 */

import type { InterestItem } from '@/types/interest';

export const interestCL: InterestItem[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // REGULACIÓN - Chile
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'cl-boleta-electronica-sii',
    slug: 'boleta-electronica-obligatoria-sii-chile',
    title: 'Boleta Electrónica Obligatoria: Guía SII',
    summary: 'Guía informativa sobre la obligación de emitir boletas electrónicas en Chile. Conoce requisitos, plazos y cómo implementarla en tu negocio.',
    type: 'guia',
    category: 'Regulación',
    tags: ['sii', 'boleta electrónica', 'facturación', 'impuestos'],
    countries: ['cl'],
    featured: true,
    dateISO: '2024-11-28',
    href: 'https://www.sii.cl/destacados/boleta_electronica/',
    image: {
      src: '/images/interest/cl-boleta-electronica.jpg',
      alt: 'Boleta Electrónica SII Chile'
    },
    source: 'SII',
    sourceIcon: '📋',
    readMins: 12,
  },
  {
    id: 'cl-factura-electronica-sii',
    slug: 'factura-electronica-sii-chile-guia',
    title: 'Factura Electrónica SII: Implementación',
    summary: 'Guía informativa para implementar facturación electrónica ante el SII. Conoce los sistemas disponibles y requisitos técnicos.',
    type: 'guia',
    category: 'Regulación',
    tags: ['sii', 'factura electrónica', 'dte', 'tributario'],
    countries: ['cl'],
    dateISO: '2024-11-22',
    href: 'https://www.sii.cl/factura_electronica/',
    image: {
      src: '/images/interest/cl-factura-electronica.jpg',
      alt: 'Factura Electrónica SII Chile'
    },
    source: 'SII',
    sourceIcon: '📋',
    readMins: 14,
  },
  {
    id: 'cl-estatuto-pyme-beneficios',
    slug: 'estatuto-pyme-chile-beneficios-tributarios',
    title: 'Estatuto PYME: Beneficios Tributarios',
    summary: 'Guía informativa sobre los beneficios del Estatuto PYME en Chile: régimen simplificado, postergación de IVA y facilidades contables.',
    type: 'articulo',
    category: 'Regulación',
    tags: ['estatuto pyme', 'beneficios tributarios', 'sii', 'régimen simplificado'],
    countries: ['cl'],
    dateISO: '2024-11-18',
    image: {
      src: '/images/interest/cl-estatuto-pyme.jpg',
      alt: 'Estatuto PYME Chile'
    },
    author: 'ForjaConsulting',
    readMins: 10,
  },
  {
    id: 'cl-proteccion-datos-personales',
    slug: 'ley-proteccion-datos-chile-empresas',
    title: 'Nueva Ley de Datos Personales para Empresas',
    summary: 'Guía informativa sobre la actualización de la ley de protección de datos en Chile y las obligaciones para PYMEs que manejan información de clientes.',
    type: 'articulo',
    category: 'Regulación',
    tags: ['protección datos', 'privacidad', 'cumplimiento', 'ley 19.628'],
    countries: ['cl'],
    dateISO: '2024-11-12',
    image: {
      src: '/images/interest/cl-proteccion-datos.jpg',
      alt: 'Protección de Datos Chile'
    },
    author: 'ForjaConsulting',
    readMins: 9,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PROGRAMAS Y FINANCIAMIENTO - Chile
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'cl-corfo-capital-semilla',
    slug: 'corfo-capital-semilla-inicia-chile',
    title: 'CORFO Capital Semilla Inicia',
    summary: 'Financiamiento no reembolsable de hasta $25 millones para emprendimientos innovadores en etapa temprana. Conoce requisitos y postulación.',
    type: 'programa',
    category: 'Financiamiento',
    tags: ['corfo', 'capital semilla', 'emprendimiento', 'subsidio'],
    countries: ['cl'],
    featured: true,
    dateISO: '2024-11-25',
    href: 'https://www.corfo.cl/',
    image: {
      src: '/images/interest/cl-corfo-semilla.jpg',
      alt: 'CORFO Capital Semilla Chile'
    },
    source: 'CORFO',
    sourceIcon: '🌱',
  },
  {
    id: 'cl-sercotec-capital-abeja',
    slug: 'sercotec-capital-abeja-mujeres-emprendedoras',
    title: 'Capital Abeja Emprende SERCOTEC',
    summary: 'Programa de apoyo con subsidios de hasta $4.5 millones para mujeres emprendedoras chilenas. Incluye capacitación y mentoría.',
    type: 'programa',
    category: 'Financiamiento',
    tags: ['sercotec', 'mujeres emprendedoras', 'subsidio', 'capital abeja'],
    countries: ['cl'],
    featured: true,
    dateISO: '2024-11-20',
    href: 'https://www.sercotec.cl/',
    image: {
      src: '/images/interest/cl-capital-abeja.jpg',
      alt: 'Capital Abeja SERCOTEC Chile'
    },
    source: 'SERCOTEC',
    sourceIcon: '🐝',
  },
  {
    id: 'cl-fogape-garantia-estatal',
    slug: 'fogape-creditos-garantia-estatal-chile',
    title: 'FOGAPE: Créditos con Garantía Estatal',
    summary: 'Accede a créditos bancarios con garantía del Estado para capital de trabajo o inversión. Conoce bancos participantes y requisitos.',
    type: 'programa',
    category: 'Financiamiento',
    tags: ['fogape', 'crédito', 'garantía estatal', 'financiamiento'],
    countries: ['cl'],
    dateISO: '2024-11-15',
    href: 'https://www.fogape.cl/',
    image: {
      src: '/images/interest/cl-fogape.jpg',
      alt: 'FOGAPE Chile'
    },
    source: 'FOGAPE',
    sourceIcon: '🏦',
  },
  {
    id: 'cl-sercotec-mejora-negocios',
    slug: 'sercotec-mejora-negocios-subsidio',
    title: 'SERCOTEC Mejora Negocios',
    summary: 'Subsidio para invertir en equipamiento, tecnología y mejoras en tu negocio. Postulación abierta para mipymes formalizadas.',
    type: 'programa',
    category: 'Programas',
    tags: ['sercotec', 'subsidio', 'equipamiento', 'mejora'],
    countries: ['cl'],
    dateISO: '2024-11-10',
    href: 'https://www.sercotec.cl/',
    image: {
      src: '/images/interest/cl-mejora-negocios.jpg',
      alt: 'SERCOTEC Mejora Negocios'
    },
    source: 'SERCOTEC',
    sourceIcon: '📈',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TRANSFORMACIÓN DIGITAL - Chile
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'cl-digitaliza-tu-pyme',
    slug: 'digitaliza-tu-pyme-sercotec-chile',
    title: 'Digitaliza tu PYME - SERCOTEC',
    summary: 'Subsidio de hasta $3 millones para adopción de herramientas digitales: e-commerce, gestión, redes sociales y marketing digital.',
    type: 'programa',
    category: 'Transformación Digital',
    tags: ['sercotec', 'digitalización', 'subsidio', 'ecommerce'],
    countries: ['cl'],
    dateISO: '2024-11-08',
    href: 'https://www.sercotec.cl/',
    image: {
      src: '/images/interest/cl-digitaliza-pyme.jpg',
      alt: 'Digitaliza tu PYME Chile'
    },
    source: 'SERCOTEC',
    sourceIcon: '💻',
  },
  {
    id: 'cl-corfo-transformacion-digital',
    slug: 'corfo-programa-transformacion-digital-chile',
    title: 'CORFO Transforma Digital',
    summary: 'Programa de cofinanciamiento para proyectos de transformación digital en empresas. Incluye adopción de tecnologías emergentes.',
    type: 'programa',
    category: 'Transformación Digital',
    tags: ['corfo', 'transformación digital', 'cofinanciamiento', 'tecnología'],
    countries: ['cl'],
    dateISO: '2024-11-05',
    href: 'https://www.corfo.cl/',
    image: {
      src: '/images/interest/cl-corfo-digital.jpg',
      alt: 'CORFO Transforma Digital'
    },
    source: 'CORFO',
    sourceIcon: '🚀',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // IA & AUTOMATIZACIÓN - Chile
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'cl-ia-pymes-chile',
    slug: 'inteligencia-artificial-pymes-chile',
    title: 'IA para PYMEs Chilenas: Guía de Implementación',
    summary: 'Guía informativa sobre herramientas de inteligencia artificial accesibles para pequeñas empresas en Chile. Casos de uso prácticos.',
    type: 'guia',
    category: 'IA & Automatización',
    tags: ['inteligencia artificial', 'automatización', 'productividad', 'tecnología'],
    countries: ['cl'],
    dateISO: '2024-11-01',
    image: {
      src: '/images/interest/cl-ia-pymes.jpg',
      alt: 'Inteligencia Artificial PYMEs Chile'
    },
    author: 'ForjaConsulting',
    readMins: 11,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EVENTOS - Chile
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'cl-semana-pyme-2024',
    slug: 'semana-pyme-chile-2024',
    title: 'Semana de la PYME Chile 2024',
    summary: 'Semana de actividades, talleres y networking para pequeños y medianos empresarios de todo Chile. Evento presencial y virtual.',
    type: 'evento',
    category: 'Programas',
    tags: ['evento', 'semana pyme', 'networking', 'talleres'],
    countries: ['cl'],
    dateISO: '2024-12-02',
    href: 'https://www.sercotec.cl/',
    image: {
      src: '/images/interest/cl-semana-pyme.jpg',
      alt: 'Semana PYME Chile 2024'
    },
    source: 'SERCOTEC',
    sourceIcon: '📅',
  },
  {
    id: 'cl-feria-emprendimiento-santiago',
    slug: 'feria-emprendimiento-santiago-2024',
    title: 'Feria de Emprendimiento Santiago 2024',
    summary: 'Evento anual con exposiciones, ruedas de negocios y charlas de expertos para emprendedores y empresarios de la Región Metropolitana.',
    type: 'evento',
    category: 'Programas',
    tags: ['feria', 'emprendimiento', 'santiago', 'networking'],
    countries: ['cl'],
    dateISO: '2024-12-08',
    image: {
      src: '/images/interest/cl-feria-emprendimiento.jpg',
      alt: 'Feria Emprendimiento Santiago'
    },
    source: 'Municipalidad',
    sourceIcon: '🏛️',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // RECURSOS DESCARGABLES - Chile
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'cl-guia-inicio-actividades',
    slug: 'guia-inicio-actividades-sii-chile',
    title: 'Guía: Inicio de Actividades ante el SII',
    summary: 'Documento descargable con el paso a paso para iniciar actividades comerciales en Chile. Incluye requisitos y formularios.',
    type: 'descargable',
    category: 'Regulación',
    tags: ['sii', 'inicio actividades', 'formalización', 'guía'],
    countries: ['cl'],
    dateISO: '2024-10-25',
    href: '/downloads/cl-guia-inicio-actividades.pdf',
    image: {
      src: '/images/interest/cl-guia-inicio-actividades.jpg',
      alt: 'Guía Inicio Actividades SII'
    },
    author: 'ForjaConsulting',
  },
];

export default interestCL;
