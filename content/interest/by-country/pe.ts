/**
 * FORJA DIGITAL - Interest Content: Perú
 * 
 * Contenido de interés específico para Perú.
 * Incluye programas gubernamentales, regulaciones locales y recursos específicos.
 * Guía informativa - no constituye asesoría legal.
 * 
 * @module content/interest/by-country/pe
 */

import type { InterestItem } from '@/types/interest';

export const interestPE: InterestItem[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // REGULACIÓN - Perú
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'pe-facturacion-electronica-sunat',
    slug: 'facturacion-electronica-sunat-peru',
    title: 'Facturación Electrónica SUNAT: Guía Completa',
    summary: 'Guía informativa sobre los comprobantes electrónicos en Perú. Conoce requisitos técnicos, sistemas disponibles y plazos de implementación.',
    type: 'guia',
    category: 'Regulación',
    tags: ['sunat', 'facturación electrónica', 'cpe', 'impuestos'],
    countries: ['pe'],
    featured: true,
    dateISO: '2024-11-28',
    href: 'https://cpe.sunat.gob.pe/',
    image: {
      src: '/images/interest/pe-facturacion-sunat.jpg',
      alt: 'Facturación Electrónica SUNAT Perú'
    },
    source: 'SUNAT',
    sourceIcon: '📋',
    readMins: 14,
  },
  {
    id: 'pe-regimen-mype-tributario',
    slug: 'regimen-mype-tributario-rmt-peru',
    title: 'Régimen MYPE Tributario (RMT): Beneficios',
    summary: 'Guía informativa sobre el RMT en Perú. Conoce las tasas reducidas de impuesto a la renta y requisitos de acogimiento para mipymes.',
    type: 'articulo',
    category: 'Regulación',
    tags: ['rmt', 'sunat', 'régimen tributario', 'mype'],
    countries: ['pe'],
    dateISO: '2024-11-22',
    image: {
      src: '/images/interest/pe-rmt.jpg',
      alt: 'Régimen MYPE Tributario Perú'
    },
    author: 'Forja Digital',
    readMins: 10,
  },
  {
    id: 'pe-libros-electronicos-ple',
    slug: 'libros-electronicos-ple-sunat-peru',
    title: 'Libros Electrónicos PLE: Obligaciones',
    summary: 'Guía informativa sobre el Programa de Libros Electrónicos de SUNAT. Conoce quiénes están obligados y cómo llevar la contabilidad electrónica.',
    type: 'guia',
    category: 'Regulación',
    tags: ['ple', 'sunat', 'libros contables', 'electrónico'],
    countries: ['pe'],
    dateISO: '2024-11-18',
    href: 'https://www.sunat.gob.pe/orientacion/libroselectronicos/',
    image: {
      src: '/images/interest/pe-libros-electronicos.jpg',
      alt: 'Libros Electrónicos PLE SUNAT'
    },
    source: 'SUNAT',
    sourceIcon: '📚',
    readMins: 12,
  },
  {
    id: 'pe-proteccion-datos-apdp',
    slug: 'proteccion-datos-personales-peru-apdp',
    title: 'Protección de Datos Personales en Perú',
    summary: 'Guía informativa sobre la Ley 29733 de protección de datos. Conoce las obligaciones de registro y tratamiento de información de clientes.',
    type: 'articulo',
    category: 'Regulación',
    tags: ['protección datos', 'apdp', 'ley 29733', 'privacidad'],
    countries: ['pe'],
    dateISO: '2024-11-12',
    image: {
      src: '/images/interest/pe-proteccion-datos.jpg',
      alt: 'Protección de Datos Perú'
    },
    author: 'Forja Digital',
    readMins: 9,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PROGRAMAS Y FINANCIAMIENTO - Perú
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'pe-startup-peru-innvate',
    slug: 'startup-peru-innovate-peru',
    title: 'Startup Perú - Innóvate Perú',
    summary: 'Cofinanciamiento de hasta S/ 150,000 para emprendimientos innovadores con alto potencial de crecimiento. Postulaciones periódicas.',
    type: 'programa',
    category: 'Financiamiento',
    tags: ['startup peru', 'innovate peru', 'cofinanciamiento', 'emprendimiento'],
    countries: ['pe'],
    featured: true,
    dateISO: '2024-11-25',
    href: 'https://www.innovateperu.gob.pe/',
    image: {
      src: '/images/interest/pe-startup-peru.jpg',
      alt: 'Startup Perú Innóvate'
    },
    source: 'Innóvate Perú',
    sourceIcon: '🚀',
  },
  {
    id: 'pe-fae-mype-produce',
    slug: 'fae-mype-fondo-apoyo-empresarial-peru',
    title: 'FAE-MYPE: Fondo de Apoyo Empresarial',
    summary: 'Fondo que garantiza créditos de capital de trabajo para micro y pequeñas empresas peruanas. Conoce bancos participantes y requisitos.',
    type: 'programa',
    category: 'Financiamiento',
    tags: ['fae mype', 'produce', 'garantía', 'capital trabajo'],
    countries: ['pe'],
    featured: true,
    dateISO: '2024-11-20',
    href: 'https://www.gob.pe/fae-mype',
    image: {
      src: '/images/interest/pe-fae-mype.jpg',
      alt: 'FAE-MYPE Perú'
    },
    source: 'PRODUCE',
    sourceIcon: '🏦',
  },
  {
    id: 'pe-tu-empresa-formalizacion',
    slug: 'tu-empresa-produce-formalizacion-peru',
    title: 'Tu Empresa - Plataforma de Formalización',
    summary: 'Plataforma digital del Estado para crear y formalizar tu empresa en un solo trámite, 100% online. Incluye RUC y permisos.',
    type: 'programa',
    category: 'Programas',
    tags: ['formalización', 'tu empresa', 'produce', 'registro'],
    countries: ['pe'],
    dateISO: '2024-11-15',
    href: 'https://www.gob.pe/tuempresa',
    image: {
      src: '/images/interest/pe-tu-empresa.jpg',
      alt: 'Tu Empresa PRODUCE'
    },
    source: 'PRODUCE',
    sourceIcon: '📝',
  },
  {
    id: 'pe-proinnvate-reto-bio',
    slug: 'proinnvate-retos-innovacion-peru',
    title: 'ProInnóvate: Retos de Innovación',
    summary: 'Convocatorias de cofinanciamiento para proyectos de innovación empresarial. Múltiples categorías según sector y tamaño de empresa.',
    type: 'programa',
    category: 'Programas',
    tags: ['proinnvate', 'innovación', 'cofinanciamiento', 'retos'],
    countries: ['pe'],
    dateISO: '2024-11-10',
    href: 'https://www.innovateperu.gob.pe/',
    image: {
      src: '/images/interest/pe-proinnvate.jpg',
      alt: 'ProInnóvate Perú'
    },
    source: 'Innóvate Perú',
    sourceIcon: '💡',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TRANSFORMACIÓN DIGITAL - Perú
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'pe-kit-digital-promperu',
    slug: 'kit-digital-promperu-exportadores',
    title: 'Kit Digital PromPerú para Exportadores',
    summary: 'Herramientas y capacitación digital gratuita para PYMEs peruanas que buscan exportar. Incluye acceso a plataformas y asesoría.',
    type: 'programa',
    category: 'Transformación Digital',
    tags: ['promperu', 'exportación', 'digitalización', 'gratuito'],
    countries: ['pe'],
    dateISO: '2024-11-08',
    href: 'https://www.promperu.gob.pe/',
    image: {
      src: '/images/interest/pe-kit-digital.jpg',
      alt: 'Kit Digital PromPerú'
    },
    source: 'PromPerú',
    sourceIcon: '💻',
  },
  {
    id: 'pe-cites-innovacion',
    slug: 'cites-centros-innovacion-tecnologica-peru',
    title: 'CITEs: Centros de Innovación Tecnológica',
    summary: 'Red de centros que brindan asistencia técnica, capacitación y servicios tecnológicos a mipymes de diversos sectores productivos.',
    type: 'programa',
    category: 'Transformación Digital',
    tags: ['cite', 'innovación', 'tecnología', 'asistencia técnica'],
    countries: ['pe'],
    dateISO: '2024-11-05',
    href: 'https://www.itp.gob.pe/cite/',
    image: {
      src: '/images/interest/pe-cites.jpg',
      alt: 'CITEs Perú'
    },
    source: 'ITP',
    sourceIcon: '🔬',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // IA & AUTOMATIZACIÓN - Perú
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'pe-ia-pymes-peru',
    slug: 'inteligencia-artificial-pymes-peru',
    title: 'IA para PYMEs Peruanas: Primeros Pasos',
    summary: 'Guía informativa sobre cómo las pequeñas empresas en Perú pueden comenzar a implementar inteligencia artificial en sus operaciones.',
    type: 'guia',
    category: 'IA & Automatización',
    tags: ['inteligencia artificial', 'automatización', 'productividad', 'innovación'],
    countries: ['pe'],
    dateISO: '2024-11-01',
    image: {
      src: '/images/interest/pe-ia-pymes.jpg',
      alt: 'Inteligencia Artificial PYMEs Perú'
    },
    author: 'Forja Digital',
    readMins: 10,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EVENTOS - Perú
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'pe-feria-peru-pyme-2024',
    slug: 'feria-peru-pyme-2024',
    title: 'Feria Perú PYME 2024',
    summary: 'Evento anual con exposiciones, ruedas de negocios y talleres para emprendedores y empresarios. Modalidad presencial y virtual.',
    type: 'evento',
    category: 'Programas',
    tags: ['feria', 'pyme', 'networking', 'negocios'],
    countries: ['pe'],
    dateISO: '2024-12-05',
    href: 'https://www.produce.gob.pe/',
    image: {
      src: '/images/interest/pe-feria-pyme.jpg',
      alt: 'Feria Perú PYME 2024'
    },
    source: 'PRODUCE',
    sourceIcon: '📅',
  },
  {
    id: 'pe-expo-mype-lima-2024',
    slug: 'expo-mype-lima-2024',
    title: 'Expo MYPE Lima 2024',
    summary: 'Exposición de productos y servicios de micro y pequeñas empresas limeñas. Incluye capacitaciones y acceso a compradores.',
    type: 'evento',
    category: 'Programas',
    tags: ['expo', 'mype', 'lima', 'feria'],
    countries: ['pe'],
    dateISO: '2024-12-10',
    image: {
      src: '/images/interest/pe-expo-mype.jpg',
      alt: 'Expo MYPE Lima 2024'
    },
    source: 'Municipalidad Lima',
    sourceIcon: '🏛️',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // RECURSOS DESCARGABLES - Perú
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'pe-checklist-formalizacion',
    slug: 'checklist-formalizacion-empresa-peru',
    title: 'Checklist: Formalización de Empresas en Perú',
    summary: 'Lista descargable con los pasos para formalizar tu negocio ante SUNARP, SUNAT y municipalidad. Incluye requisitos por tipo de empresa.',
    type: 'descargable',
    category: 'Regulación',
    tags: ['checklist', 'formalización', 'sunarp', 'sunat'],
    countries: ['pe'],
    dateISO: '2024-10-28',
    href: '/downloads/pe-checklist-formalizacion.pdf',
    image: {
      src: '/images/interest/pe-checklist-formalizacion.jpg',
      alt: 'Checklist Formalización Perú'
    },
    author: 'Forja Digital',
  },
];

export default interestPE;
