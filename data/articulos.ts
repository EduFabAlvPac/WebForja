/**
 * Artículos base del Centro de Conocimiento ForjaConsulting
 * @module data/articulos
 */

import type { Articulo } from '@/types/conocimiento'

export const ARTICULOS: Articulo[] = [
  {
    id: '1',
    slug: 'pymes-latam-fracasan-5-anos',
    titulo:
      'Por qué el 73% de las PYMEs en LATAM fracasan antes de los 5 años — y cómo evitar ser parte de esa estadística',
    extracto:
      'No es falta de esfuerzo. No es mala suerte. Las PYMEs en América Latina fracasan por tres razones estructurales que son completamente prevenibles si se identifican a tiempo. Este análisis, basado en datos de Confecámaras, OCDE y nuestra experiencia con +50 empresas en la región, te muestra exactamente qué hacer distinto.',
    contenido: '',
    categoria: 'estrategia',
    tags: ['Estrategia', 'Diagnóstico', 'LATAM', 'Supervivencia'],
    nivel: 'intermedio',
    tiempoLectura: 8,
    autor: {
      nombre: 'Eduard Pacanins',
      cargo: 'Arquitecto Empresarial',
      empresa: 'ForjaConsulting',
    },
    fechaPublicacion: new Date('2026-02-01'),
    imagenUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
    destacado: true,
  },
  {
    id: '2',
    slug: 'okrs-pymes-guia',
    titulo:
      'OKRs para PYMEs: cómo fijar objetivos que tu equipo realmente pueda cumplir',
    extracto:
      'El 80% de las PYMEs que implementan OKRs los abandona en 90 días por hacerlo mal. Esta guía práctica muestra el método correcto.',
    contenido: '',
    categoria: 'estrategia',
    tags: ['OKRs', 'Planeación', 'Equipo'],
    nivel: 'basico',
    tiempoLectura: 6,
    autor: { nombre: 'Equipo Forja', cargo: 'Consultores' },
    fechaPublicacion: new Date('2026-01-20'),
    imagenUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    destacado: false,
  },
  {
    id: '3',
    slug: 'sindrome-fundador-indispensable',
    titulo:
      'El síndrome del fundador indispensable: cómo construir una empresa que no depende de ti',
    extracto:
      'Si tu empresa no funciona sin ti, no tienes una empresa — tienes un trabajo de alto riesgo. Aquí está el camino para cambiar eso.',
    contenido: '',
    categoria: 'estrategia',
    tags: ['Liderazgo', 'Delegación', 'Estructura'],
    nivel: 'intermedio',
    tiempoLectura: 7,
    autor: { nombre: 'Equipo Forja', cargo: 'Consultores' },
    fechaPublicacion: new Date('2026-01-15'),
    imagenUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800',
    destacado: false,
  },
  {
    id: '4',
    slug: 'vsm-mapa-cadena-valor',
    titulo:
      'Mapa de Cadena de Valor (VSM) en 5 pasos: encuentra dónde se pierde el dinero en tu empresa',
    extracto:
      'Una herramienta usada por empresas como Toyota adaptada para PYMEs latinoamericanas. Puedes implementarla en un día con tu equipo.',
    contenido: '',
    categoria: 'operaciones',
    tags: ['VSM', 'Procesos', 'Eficiencia', 'Lean'],
    nivel: 'intermedio',
    tiempoLectura: 9,
    autor: { nombre: 'Equipo Forja', cargo: 'Consultores' },
    fechaPublicacion: new Date('2026-01-10'),
    imagenUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800',
    destacado: false,
  },
  {
    id: '5',
    slug: 'kpis-operativos-pymes',
    titulo:
      'KPIs operativos: los 8 indicadores que toda PYME debería estar midiendo ahora mismo',
    extracto:
      'No son los mismos KPIs de las grandes corporaciones. Son los 8 que importan cuando tienes 10 a 200 personas y necesitas tomar decisiones rápidas.',
    contenido: '',
    categoria: 'operaciones',
    tags: ['KPIs', 'Métricas', 'Control operativo'],
    nivel: 'basico',
    tiempoLectura: 5,
    autor: { nombre: 'Equipo Forja', cargo: 'Consultores' },
    fechaPublicacion: new Date('2026-01-05'),
    imagenUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    destacado: false,
  },
  {
    id: '6',
    slug: 'flujo-caja-no-financieros',
    titulo:
      'Flujo de caja para no financieros: la guía que tu contador no te va a dar',
    extracto:
      'El 40% de las PYMEs que quiebran eran rentables en papel pero murieron por falta de liquidez. Esta guía explica por qué y cómo evitarlo.',
    contenido: '',
    categoria: 'finanzas',
    tags: ['Flujo de caja', 'Finanzas básicas', 'Liquidez'],
    nivel: 'basico',
    tiempoLectura: 8,
    autor: { nombre: 'Equipo Forja', cargo: 'Consultores' },
    fechaPublicacion: new Date('2025-12-28'),
    imagenUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800',
    destacado: false,
  },
  {
    id: '7',
    slug: 'financiamiento-bancario-pymes',
    titulo:
      'Cómo acceder a financiamiento bancario siendo PYME: lo que los bancos no te dicen en la primera cita',
    extracto:
      'El 24% de las PYMEs no accede a crédito por no presentar la información correcta. Aquí está exactamente qué necesitas preparar.',
    contenido: '',
    categoria: 'finanzas',
    tags: ['Crédito', 'Banca', 'Dossier financiero'],
    nivel: 'intermedio',
    tiempoLectura: 7,
    autor: { nombre: 'Equipo Forja', cargo: 'Consultores' },
    fechaPublicacion: new Date('2025-12-20'),
    imagenUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800',
    destacado: false,
  },
  {
    id: '8',
    slug: 'mejor-empleado-pensando-irse',
    titulo:
      'Por qué tu mejor empleado está pensando en irse ahora mismo — y qué puedes hacer esta semana',
    extracto:
      'El 67% del talento LATAM no está comprometido. No porque no quiera estarlo. Sino porque nadie le ha dado las condiciones para estarlo.',
    contenido: '',
    categoria: 'talento',
    tags: ['Retención', 'Compromiso', 'Cultura'],
    nivel: 'basico',
    tiempoLectura: 6,
    autor: { nombre: 'Equipo Forja', cargo: 'Consultores' },
    fechaPublicacion: new Date('2025-12-15'),
    imagenUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
    destacado: false,
  },
  {
    id: '9',
    slug: 'stack-tecnologico-pyme-2026',
    titulo:
      'Stack tecnológico mínimo viable para una PYME en 2026: qué necesitas y qué es ruido',
    extracto:
      'Hay cientos de herramientas digitales. Una PYME de 10-100 personas necesita exactamente 7 categorías de software. Todo lo demás puede esperar.',
    contenido: '',
    categoria: 'tecnologia',
    tags: ['Tech stack', 'Digitalización', 'Herramientas'],
    nivel: 'basico',
    tiempoLectura: 7,
    autor: { nombre: 'Equipo Forja', cargo: 'Consultores' },
    fechaPublicacion: new Date('2025-12-10'),
    imagenUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
    destacado: false,
  },
  {
    id: '10',
    slug: 'ia-pymes-2026-casos-uso',
    titulo:
      'IA para PYMEs en 2026: 5 casos de uso reales que generan ROI en menos de 90 días',
    extracto:
      'No es ciencia ficción. No requiere millones de inversión. Son 5 aplicaciones concretas de IA que PYMEs como la tuya ya están usando en LATAM.',
    contenido: '',
    categoria: 'ia-automatizacion',
    tags: ['IA', 'Automatización', 'ROI', 'Casos reales'],
    nivel: 'intermedio',
    tiempoLectura: 10,
    autor: { nombre: 'Equipo Forja', cargo: 'Consultores' },
    fechaPublicacion: new Date('2025-12-05'),
    imagenUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    destacado: false,
  },
]
