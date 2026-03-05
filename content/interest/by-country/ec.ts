/**
 * FORJA DIGITAL - Interest Content: Ecuador
 * 
 * Contenido de interés específico para Ecuador.
 * Incluye programas gubernamentales, regulaciones locales y recursos específicos.
 * Guía informativa - no constituye asesoría legal.
 * 
 * @module content/interest/by-country/ec
 */

import type { InterestItem } from '@/types/interest';

export const interestEC: InterestItem[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // REGULACIÓN - Ecuador
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ec-facturacion-electronica-sri',
    slug: 'facturacion-electronica-sri-ecuador',
    title: 'Facturación Electrónica SRI: Guía Actualizada',
    summary: 'Guía informativa sobre los comprobantes electrónicos en Ecuador. Conoce requisitos técnicos, software autorizado y plazos de obligatoriedad.',
    type: 'guia',
    category: 'Regulación',
    tags: ['sri', 'facturación electrónica', 'comprobantes', 'impuestos'],
    countries: ['ec'],
    featured: true,
    dateISO: '2024-11-28',
    href: 'https://www.sri.gob.ec/facturacion-electronica',
    image: {
      src: '/images/interest/ec-facturacion-sri.jpg',
      alt: 'Facturación Electrónica SRI Ecuador'
    },
    source: 'SRI',
    sourceIcon: '📋',
    readMins: 13,
  },
  {
    id: 'ec-rimpe-regimen-simplificado',
    slug: 'rimpe-regimen-simplificado-ecuador',
    title: 'RIMPE: Régimen Simplificado para Microempresas',
    summary: 'Guía informativa sobre el RIMPE en Ecuador. Conoce quiénes aplican, tarifas reducidas y obligaciones tributarias simplificadas.',
    type: 'articulo',
    category: 'Regulación',
    tags: ['rimpe', 'sri', 'microempresas', 'régimen simplificado'],
    countries: ['ec'],
    dateISO: '2024-11-22',
    image: {
      src: '/images/interest/ec-rimpe.jpg',
      alt: 'RIMPE Ecuador'
    },
    author: 'ForjaConsulting',
    readMins: 10,
  },
  {
    id: 'ec-ruc-obligaciones',
    slug: 'ruc-obligaciones-tributarias-ecuador',
    title: 'RUC Ecuador: Obligaciones Tributarias',
    summary: 'Guía informativa sobre el Registro Único de Contribuyentes. Conoce cómo obtenerlo, actualizarlo y cumplir con las obligaciones del SRI.',
    type: 'guia',
    category: 'Regulación',
    tags: ['ruc', 'sri', 'tributario', 'registro'],
    countries: ['ec'],
    dateISO: '2024-11-18',
    href: 'https://www.sri.gob.ec/ruc',
    image: {
      src: '/images/interest/ec-ruc.jpg',
      alt: 'RUC Ecuador SRI'
    },
    source: 'SRI',
    sourceIcon: '📋',
    readMins: 11,
  },
  {
    id: 'ec-proteccion-datos-dinardap',
    slug: 'proteccion-datos-personales-ecuador',
    title: 'Protección de Datos Personales en Ecuador',
    summary: 'Guía informativa sobre la Ley Orgánica de Protección de Datos Personales. Conoce las obligaciones para empresas que manejan información de clientes.',
    type: 'articulo',
    category: 'Regulación',
    tags: ['protección datos', 'dinardap', 'privacidad', 'lopdp'],
    countries: ['ec'],
    dateISO: '2024-11-12',
    image: {
      src: '/images/interest/ec-proteccion-datos.jpg',
      alt: 'Protección de Datos Ecuador'
    },
    author: 'ForjaConsulting',
    readMins: 9,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PROGRAMAS Y FINANCIAMIENTO - Ecuador
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ec-impulso-pyme-mipro',
    slug: 'impulso-pyme-mipro-ecuador',
    title: 'Programa Impulso PYME - MIPRO',
    summary: 'Programa de fortalecimiento productivo con asistencia técnica, capacitación y acceso a mercados para mipymes ecuatorianas.',
    type: 'programa',
    category: 'Programas',
    tags: ['mipro', 'impulso pyme', 'asistencia técnica', 'productividad'],
    countries: ['ec'],
    featured: true,
    dateISO: '2024-11-25',
    href: 'https://www.produccion.gob.ec/',
    image: {
      src: '/images/interest/ec-impulso-pyme.jpg',
      alt: 'Impulso PYME MIPRO Ecuador'
    },
    source: 'MIPRO',
    sourceIcon: '🏭',
  },
  {
    id: 'ec-cfn-creditos-pymes',
    slug: 'cfn-creditos-pymes-ecuador',
    title: 'Créditos CFN para PYMEs Ecuatorianas',
    summary: 'Líneas de financiamiento de la Corporación Financiera Nacional con tasas preferenciales para emprendedores y empresarios.',
    type: 'programa',
    category: 'Financiamiento',
    tags: ['cfn', 'crédito', 'financiamiento', 'tasas preferenciales'],
    countries: ['ec'],
    featured: true,
    dateISO: '2024-11-20',
    href: 'https://www.cfn.fin.ec/',
    image: {
      src: '/images/interest/ec-cfn-creditos.jpg',
      alt: 'Créditos CFN Ecuador'
    },
    source: 'CFN',
    sourceIcon: '🏦',
  },
  {
    id: 'ec-banecuador-microfinanzas',
    slug: 'banecuador-microfinanzas-emprendedores',
    title: 'BanEcuador: Microfinanzas para Emprendedores',
    summary: 'Productos financieros especializados para micro y pequeñas empresas. Créditos productivos, capital de trabajo y activos fijos.',
    type: 'programa',
    category: 'Financiamiento',
    tags: ['banecuador', 'microfinanzas', 'crédito', 'emprendedores'],
    countries: ['ec'],
    dateISO: '2024-11-15',
    href: 'https://www.banecuador.fin.ec/',
    image: {
      src: '/images/interest/ec-banecuador.jpg',
      alt: 'BanEcuador Microfinanzas'
    },
    source: 'BanEcuador',
    sourceIcon: '🏦',
  },
  {
    id: 'ec-emprende-ecuador',
    slug: 'emprende-ecuador-programa-gobierno',
    title: 'Emprende Ecuador - Apoyo al Emprendimiento',
    summary: 'Programa gubernamental con capacitación, mentoría y acceso a capital para nuevos emprendimientos con potencial de crecimiento.',
    type: 'programa',
    category: 'Programas',
    tags: ['emprende ecuador', 'emprendimiento', 'mentoría', 'gobierno'],
    countries: ['ec'],
    dateISO: '2024-11-10',
    href: 'https://www.produccion.gob.ec/',
    image: {
      src: '/images/interest/ec-emprende-ecuador.jpg',
      alt: 'Emprende Ecuador'
    },
    source: 'MIPRO',
    sourceIcon: '🚀',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TRANSFORMACIÓN DIGITAL - Ecuador
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ec-internet-para-todos-mintel',
    slug: 'internet-para-todos-mintel-pymes',
    title: 'Internet Para Todos - Conectividad PYME',
    summary: 'Programa MINTEL de conectividad subsidiada para PYMEs. Acceso a internet de alta velocidad en zonas rurales y urbano-marginales.',
    type: 'programa',
    category: 'Transformación Digital',
    tags: ['mintel', 'internet', 'conectividad', 'subsidio'],
    countries: ['ec'],
    dateISO: '2024-11-08',
    href: 'https://www.telecomunicaciones.gob.ec/',
    image: {
      src: '/images/interest/ec-internet-todos.jpg',
      alt: 'Internet Para Todos MINTEL'
    },
    source: 'MINTEL',
    sourceIcon: '💻',
  },
  {
    id: 'ec-ecuador-digital',
    slug: 'ecuador-digital-transformacion-empresas',
    title: 'Ecuador Digital: Transformación Empresarial',
    summary: 'Iniciativas gubernamentales para impulsar la adopción de tecnologías digitales en el sector empresarial ecuatoriano.',
    type: 'programa',
    category: 'Transformación Digital',
    tags: ['ecuador digital', 'transformación', 'gobierno', 'tecnología'],
    countries: ['ec'],
    dateISO: '2024-11-05',
    href: 'https://www.telecomunicaciones.gob.ec/',
    image: {
      src: '/images/interest/ec-ecuador-digital.jpg',
      alt: 'Ecuador Digital'
    },
    source: 'MINTEL',
    sourceIcon: '🌐',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // IA & AUTOMATIZACIÓN - Ecuador
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ec-ia-pymes-ecuador',
    slug: 'inteligencia-artificial-pymes-ecuador',
    title: 'IA para PYMEs Ecuatorianas: Guía Práctica',
    summary: 'Guía informativa sobre cómo las pequeñas empresas en Ecuador pueden comenzar a implementar inteligencia artificial en sus operaciones.',
    type: 'guia',
    category: 'IA & Automatización',
    tags: ['inteligencia artificial', 'automatización', 'productividad', 'innovación'],
    countries: ['ec'],
    dateISO: '2024-11-01',
    image: {
      src: '/images/interest/ec-ia-pymes.jpg',
      alt: 'Inteligencia Artificial PYMEs Ecuador'
    },
    author: 'ForjaConsulting',
    readMins: 10,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EVENTOS - Ecuador
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ec-expo-pyme-2024',
    slug: 'expo-pyme-ecuador-2024',
    title: 'Expo PYME Ecuador 2024',
    summary: 'Feria de negocios para emprendedores y PYMEs con ruedas de negocios, capacitaciones y oportunidades de networking.',
    type: 'evento',
    category: 'Programas',
    tags: ['expo', 'feria', 'pyme', 'networking'],
    countries: ['ec'],
    dateISO: '2024-12-08',
    href: 'https://www.produccion.gob.ec/',
    image: {
      src: '/images/interest/ec-expo-pyme.jpg',
      alt: 'Expo PYME Ecuador 2024'
    },
    source: 'MIPRO',
    sourceIcon: '📅',
  },
  {
    id: 'ec-feria-emprendedor-quito',
    slug: 'feria-emprendedor-quito-2024',
    title: 'Feria del Emprendedor Quito 2024',
    summary: 'Evento anual con exposiciones de emprendimientos locales, charlas de expertos y conexiones con inversionistas y compradores.',
    type: 'evento',
    category: 'Programas',
    tags: ['feria', 'emprendedor', 'quito', 'networking'],
    countries: ['ec'],
    dateISO: '2024-12-12',
    image: {
      src: '/images/interest/ec-feria-emprendedor.jpg',
      alt: 'Feria Emprendedor Quito'
    },
    source: 'Municipio Quito',
    sourceIcon: '🏛️',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // RECURSOS DESCARGABLES - Ecuador
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ec-guia-constitucion-empresa',
    slug: 'guia-constitucion-empresa-ecuador',
    title: 'Guía: Constitución de Empresas en Ecuador',
    summary: 'Documento descargable con el paso a paso para constituir tu empresa. Incluye requisitos, costos estimados y tiempos.',
    type: 'descargable',
    category: 'Regulación',
    tags: ['constitución', 'empresa', 'supercias', 'guía'],
    countries: ['ec'],
    dateISO: '2024-10-25',
    href: '/downloads/ec-guia-constitucion-empresa.pdf',
    image: {
      src: '/images/interest/ec-guia-constitucion.jpg',
      alt: 'Guía Constitución Empresa Ecuador'
    },
    author: 'ForjaConsulting',
  },
  {
    id: 'ec-checklist-obligaciones-sri',
    slug: 'checklist-obligaciones-sri-ecuador',
    title: 'Checklist: Obligaciones Tributarias SRI',
    summary: 'Lista descargable con todas las obligaciones tributarias según tipo de contribuyente. Fechas de declaración y pagos.',
    type: 'descargable',
    category: 'Regulación',
    tags: ['checklist', 'sri', 'obligaciones', 'tributario'],
    countries: ['ec'],
    dateISO: '2024-10-20',
    href: '/downloads/ec-checklist-obligaciones-sri.pdf',
    image: {
      src: '/images/interest/ec-checklist-sri.jpg',
      alt: 'Checklist Obligaciones SRI Ecuador'
    },
    author: 'ForjaConsulting',
  },
];

export default interestEC;
