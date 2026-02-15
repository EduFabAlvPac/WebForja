/**
 * FORJA DIGITAL - Interest Content: Colombia
 * 
 * Contenido de interés específico para Colombia.
 * Incluye programas gubernamentales, regulaciones locales y recursos específicos.
 * Guía informativa - no constituye asesoría legal.
 * 
 * @module content/interest/by-country/co
 */

import type { InterestItem } from '@/types/interest';

export const interestCO: InterestItem[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // REGULACIÓN - Colombia
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'co-facturacion-electronica-dian',
    slug: 'facturacion-electronica-colombia-dian',
    title: 'Facturación Electrónica DIAN: Guía Completa 2024',
    summary: 'Guía informativa sobre los requisitos de facturación electrónica en Colombia. Conoce plazos, obligaciones y cómo implementar el sistema en tu empresa.',
    type: 'guia',
    category: 'Regulación',
    tags: ['dian', 'facturación electrónica', 'impuestos', 'cumplimiento'],
    countries: ['co'],
    featured: true,
    dateISO: '2024-11-28',
    href: 'https://www.dian.gov.co/impuestos/factura-electronica/Paginas/default.aspx',
    image: {
      src: '/images/interest/co-facturacion-electronica.jpg',
      alt: 'Facturación Electrónica DIAN Colombia'
    },
    source: 'DIAN',
    sourceIcon: '📋',
    readMins: 15,
  },
  {
    id: 'co-proteccion-datos-sic',
    slug: 'proteccion-datos-personales-colombia',
    title: 'Protección de Datos Personales para PYMEs',
    summary: 'Guía informativa sobre la Ley 1581 de protección de datos en Colombia. Conoce las obligaciones de registro y tratamiento de información de clientes.',
    type: 'guia',
    category: 'Regulación',
    tags: ['protección datos', 'sic', 'ley 1581', 'privacidad'],
    countries: ['co'],
    dateISO: '2024-11-20',
    href: 'https://www.sic.gov.co/tema/proteccion-de-datos-personales',
    image: {
      src: '/images/interest/co-proteccion-datos.jpg',
      alt: 'Protección de Datos Personales Colombia'
    },
    source: 'SIC',
    sourceIcon: '🔒',
    readMins: 12,
  },
  {
    id: 'co-rut-actualizacion',
    slug: 'actualizacion-rut-empresas-colombia',
    title: 'Actualización del RUT: Requisitos y Proceso',
    summary: 'Guía informativa para mantener actualizado el Registro Único Tributario de tu empresa. Conoce cuándo y cómo realizar actualizaciones ante la DIAN.',
    type: 'articulo',
    category: 'Regulación',
    tags: ['rut', 'dian', 'registro tributario', 'formalización'],
    countries: ['co'],
    dateISO: '2024-11-15',
    image: {
      src: '/images/interest/co-rut-actualizacion.jpg',
      alt: 'Actualización RUT Colombia'
    },
    author: 'Forja Digital',
    readMins: 8,
  },
  {
    id: 'co-nomina-electronica',
    slug: 'nomina-electronica-colombia-implementacion',
    title: 'Nómina Electrónica: Implementación para PYMEs',
    summary: 'Guía informativa sobre la nómina electrónica obligatoria. Conoce los requisitos técnicos y plazos para su implementación en empresas colombianas.',
    type: 'guia',
    category: 'Regulación',
    tags: ['nómina electrónica', 'dian', 'empleados', 'cumplimiento'],
    countries: ['co'],
    dateISO: '2024-11-10',
    href: 'https://www.dian.gov.co/impuestos/nomina-electronica/Paginas/default.aspx',
    image: {
      src: '/images/interest/co-nomina-electronica.jpg',
      alt: 'Nómina Electrónica Colombia'
    },
    source: 'DIAN',
    sourceIcon: '📋',
    readMins: 14,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PROGRAMAS Y FINANCIAMIENTO - Colombia
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'co-fabricas-productividad',
    slug: 'fabricas-productividad-colombia-productiva',
    title: 'Fábricas de Productividad - Colombia Productiva',
    summary: 'Programa de asistencia técnica gratuita del MinCIT para mejorar la productividad de mipymes colombianas. Incluye diagnóstico y plan de mejora.',
    type: 'programa',
    category: 'Programas',
    tags: ['mincit', 'productividad', 'asistencia técnica', 'gratuito'],
    countries: ['co'],
    featured: true,
    dateISO: '2024-11-25',
    href: 'https://www.colombiaproductiva.com/fabricas-de-productividad',
    image: {
      src: '/images/interest/co-fabricas-productividad.jpg',
      alt: 'Fábricas de Productividad Colombia'
    },
    source: 'Colombia Productiva',
    sourceIcon: '🏭',
  },
  {
    id: 'co-aldea-innpulsa',
    slug: 'aldea-innpulsa-aceleracion-empresarial',
    title: 'ALDEA - Programa de Aceleración iNNpulsa',
    summary: 'Programa de aceleración que conecta emprendedores con mentores expertos y recursos para escalar negocios con alto potencial de crecimiento.',
    type: 'programa',
    category: 'Programas',
    tags: ['innpulsa', 'aceleración', 'emprendimiento', 'mentores'],
    countries: ['co'],
    featured: true,
    dateISO: '2024-11-22',
    href: 'https://www.innpulsacolombia.com/',
    image: {
      src: '/images/interest/co-aldea-innpulsa.jpg',
      alt: 'ALDEA iNNpulsa Colombia'
    },
    source: 'iNNpulsa Colombia',
    sourceIcon: '🚀',
  },
  {
    id: 'co-bancoldex-lineas-credito',
    slug: 'bancoldex-lineas-credito-pymes',
    title: 'Líneas de Crédito Bancóldex para PYMEs',
    summary: 'Financiamiento con tasas preferenciales para modernización, capital de trabajo y expansión de mipymes. Conoce las líneas disponibles.',
    type: 'programa',
    category: 'Financiamiento',
    tags: ['bancóldex', 'crédito', 'financiamiento', 'capital trabajo'],
    countries: ['co'],
    dateISO: '2024-11-18',
    href: 'https://www.bancoldex.com/',
    image: {
      src: '/images/interest/co-bancoldex-credito.jpg',
      alt: 'Líneas de Crédito Bancóldex'
    },
    source: 'Bancóldex',
    sourceIcon: '🏦',
  },
  {
    id: 'co-fondo-emprender-sena',
    slug: 'fondo-emprender-sena-financiamiento',
    title: 'Fondo Emprender SENA: Capital Semilla',
    summary: 'Capital semilla para emprendimientos liderados por aprendices, universitarios y profesionales. Conoce requisitos y proceso de postulación.',
    type: 'programa',
    category: 'Financiamiento',
    tags: ['sena', 'capital semilla', 'emprendimiento', 'fondo emprender'],
    countries: ['co'],
    dateISO: '2024-11-12',
    href: 'https://www.fondoemprender.com/',
    image: {
      src: '/images/interest/co-fondo-emprender.jpg',
      alt: 'Fondo Emprender SENA'
    },
    source: 'SENA',
    sourceIcon: '🎓',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TRANSFORMACIÓN DIGITAL - Colombia
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'co-centros-transformacion-digital',
    slug: 'centros-transformacion-digital-mintic',
    title: 'Centros de Transformación Digital Empresarial',
    summary: 'Puntos de atención gratuitos del MinTIC donde mipymes reciben diagnóstico y asesoría personalizada en transformación digital.',
    type: 'programa',
    category: 'Transformación Digital',
    tags: ['mintic', 'digitalización', 'asesoría', 'gratuito'],
    countries: ['co'],
    dateISO: '2024-11-08',
    href: 'https://www.mintic.gov.co/',
    image: {
      src: '/images/interest/co-centros-transformacion.jpg',
      alt: 'Centros de Transformación Digital MinTIC'
    },
    source: 'MinTIC',
    sourceIcon: '💻',
  },
  {
    id: 'co-apps-co-desarrollo',
    slug: 'apps-co-desarrollo-aplicaciones-mintic',
    title: 'Apps.co - Impulso al Desarrollo Digital',
    summary: 'Iniciativa MinTIC que apoya emprendimientos digitales con formación, mentoría y acceso a redes de inversión y mercado.',
    type: 'programa',
    category: 'Transformación Digital',
    tags: ['apps.co', 'mintic', 'startups', 'tecnología'],
    countries: ['co'],
    dateISO: '2024-11-05',
    href: 'https://apps.co/',
    image: {
      src: '/images/interest/co-apps-co.jpg',
      alt: 'Apps.co MinTIC Colombia'
    },
    source: 'MinTIC',
    sourceIcon: '📱',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // IA & AUTOMATIZACIÓN - Colombia
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'co-ia-pymes-colombia',
    slug: 'inteligencia-artificial-pymes-colombia',
    title: 'IA para PYMEs Colombianas: Primeros Pasos',
    summary: 'Guía informativa sobre cómo las pequeñas empresas en Colombia pueden comenzar a implementar inteligencia artificial en sus procesos.',
    type: 'guia',
    category: 'IA & Automatización',
    tags: ['inteligencia artificial', 'automatización', 'productividad', 'innovación'],
    countries: ['co'],
    dateISO: '2024-11-01',
    image: {
      src: '/images/interest/co-ia-pymes.jpg',
      alt: 'Inteligencia Artificial PYMEs Colombia'
    },
    author: 'Forja Digital',
    readMins: 10,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EVENTOS - Colombia
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'co-expopyme-colombia-2024',
    slug: 'expopyme-colombia-feria-2024',
    title: 'ExpoPYME Colombia 2024',
    summary: 'Feria de negocios para pequeñas y medianas empresas con ruedas de negocios, capacitaciones y oportunidades de networking.',
    type: 'evento',
    category: 'Programas',
    tags: ['feria', 'networking', 'negocios', 'exposición'],
    countries: ['co'],
    dateISO: '2024-12-10',
    href: 'https://www.colombiaproductiva.com/',
    image: {
      src: '/images/interest/co-expopyme.jpg',
      alt: 'ExpoPYME Colombia 2024'
    },
    source: 'Corferias',
    sourceIcon: '📅',
  },
  {
    id: 'co-webinar-comercio-electronico',
    slug: 'webinar-ecommerce-pymes-colombia',
    title: 'Webinar: E-commerce para PYMEs Colombianas',
    summary: 'Sesión virtual gratuita sobre estrategias de comercio electrónico, plataformas disponibles y casos de éxito locales.',
    type: 'evento',
    category: 'Transformación Digital',
    tags: ['webinar', 'ecommerce', 'ventas online', 'gratuito'],
    countries: ['co'],
    dateISO: '2024-12-05',
    image: {
      src: '/images/interest/co-webinar-ecommerce.jpg',
      alt: 'Webinar E-commerce Colombia'
    },
    author: 'Forja Digital',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // RECURSOS DESCARGABLES - Colombia
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'co-checklist-formalizacion',
    slug: 'checklist-formalizacion-empresa-colombia',
    title: 'Checklist: Formalización de Empresas en Colombia',
    summary: 'Lista descargable con los pasos para formalizar tu negocio ante Cámara de Comercio, DIAN y demás entidades.',
    type: 'descargable',
    category: 'Regulación',
    tags: ['checklist', 'formalización', 'cámara comercio', 'registro'],
    countries: ['co'],
    dateISO: '2024-10-28',
    href: '/downloads/co-checklist-formalizacion.pdf',
    image: {
      src: '/images/interest/co-checklist-formalizacion.jpg',
      alt: 'Checklist Formalización Colombia'
    },
    author: 'Forja Digital',
  },
];

export default interestCO;
