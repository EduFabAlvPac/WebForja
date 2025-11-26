/**
 * Configuración centralizada de imágenes de fondo para HERO sections
 * Todas las imágenes son de Unsplash y están optimizadas
 */

export const HERO_IMAGES = {
  // Página principal
  home: {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
    alt: 'Equipo de profesionales colaborando en estrategia empresarial'
  },

  // Servicios - Categorías
  servicios: {
    url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop',
    alt: 'Profesionales trabajando en soluciones empresariales innovadoras'
  },
  estrategiaTransformacion: {
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    alt: 'Equipo colaborando en estrategia de transformación empresarial'
  },
  talentoFinanzas: {
    url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
    alt: 'Profesionales analizando datos financieros y gestión de talento'
  },
  comercialOperaciones: {
    url: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2070&auto=format&fit=crop',
    alt: 'Equipo optimizando procesos comerciales y operativos'
  },

  // Servicios Individuales - Estrategia & Transformación
  arquitecturaEstrategica: {
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop',
    alt: 'Arquitectura estratégica y planificación empresarial con datos y análisis'
  },
  transformacionDigital: {
    url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    alt: 'Transformación digital con tecnología y datos conectados globalmente'
  },

  // Servicios Individuales - Talento & Finanzas
  gestionTalento: {
    url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2068&auto=format&fit=crop',
    alt: 'Gestión de talento y desarrollo de equipos profesionales'
  },
  gestionFinanciera: {
    url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop',
    alt: 'Gestión financiera estratégica y análisis de datos'
  },

  // Servicios Individuales - Comercial & Operaciones
  excelenciaOperativa: {
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    alt: 'Operaciones industriales eficientes y optimizadas'
  },
  comercialCliente: {
    url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
    alt: 'Equipo comercial atendiendo clientes con excelencia'
  },

  // Nosotros
  nosotros: {
    url: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2070&auto=format&fit=crop',
    alt: 'Equipo de FORJA Digital trabajando en soluciones empresariales'
  },
  historia: {
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    alt: 'Historia y trayectoria de FORJA Digital'
  },
  equipo: {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
    alt: 'Equipo profesional de FORJA Digital'
  },
  testimonios: {
    url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop',
    alt: 'Clientes satisfechos compartiendo sus experiencias'
  },

  // Casos de Éxito
  casosExito: {
    url: 'https://images.unsplash.com/photo-1552664688-cf412ec27db2?q=80&w=2070&auto=format&fit=crop',
    alt: 'Casos de éxito y transformaciones empresariales'
  },

  // Contacto
  contacto: {
    url: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop',
    alt: 'Contacta con nuestro equipo de expertos'
  }
} as const

export type HeroImageKey = keyof typeof HERO_IMAGES
