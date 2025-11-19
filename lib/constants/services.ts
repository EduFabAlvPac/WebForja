export interface Service {
  id: string
  title: string
  shortDescription: string
  description: string
  icon: string
  color: string
  benefits: string[]
  deliverables: string[]
  href: string
}

export const SERVICES: Service[] = [
  {
    id: 'arquitectura-empresarial',
    title: 'Arquitectura Empresarial',
    shortDescription: 'Diseñamos el blueprint estratégico de tu organización alineando tecnología, procesos y personas.',
    description: 'Aplicamos frameworks como TOGAF y Zachman para crear arquitecturas empresariales robustas que soporten tus objetivos de negocio.',
    icon: '🏛️',
    color: 'brand-turquoise',
    benefits: [
      'Alineación estratégica TI-Negocio',
      'Reducción de complejidad tecnológica',
      'Optimización de inversiones',
      'Mayor agilidad organizacional'
    ],
    deliverables: [
      'Modelo de Arquitectura Empresarial',
      'Roadmap de Transformación',
      'Governance Framework',
      'Arquitectura de Referencia'
    ],
    href: '/servicios/arquitectura-empresarial'
  },
  {
    id: 'transformacion-digital',
    title: 'Transformación Digital',
    shortDescription: 'Acompañamos tu evolución digital desde la estrategia hasta la adopción cultural.',
    description: 'Más allá de la tecnología, transformamos tu modelo de negocio, cultura y experiencia de cliente.',
    icon: '🚀',
    color: 'brand-orange',
    benefits: [
      'Nuevos modelos de negocio digitales',
      'Experiencia de cliente mejorada',
      'Eficiencia operacional',
      'Cultura de innovación'
    ],
    deliverables: [
      'Estrategia Digital',
      'Plan de Transformación',
      'Quick Wins implementados',
      'Capacitación organizacional'
    ],
    href: '/servicios/transformacion-digital'
  },
  {
    id: 'optimizacion-procesos',
    title: 'Optimización de Procesos',
    shortDescription: 'Rediseñamos y automatizamos tus procesos para maximizar eficiencia y reducir costos.',
    description: 'Utilizamos metodologías BPM, Lean y automatización (RPA, workflows) para transformar tu operación.',
    icon: '⚡',
    color: 'brand-purple',
    benefits: [
      'Reducción de tiempo de ciclo hasta 60%',
      'Automatización de tareas repetitivas',
      'Mejora en calidad y trazabilidad',
      'ROI medible en 6 meses'
    ],
    deliverables: [
      'Mapa de procesos AS-IS y TO-BE',
      'Casos de automatización',
      'Implementación RPA',
      'Indicadores de desempeño (KPIs)'
    ],
    href: '/servicios/optimizacion-procesos'
  },
  {
    id: 'desarrollo-software',
    title: 'Desarrollo de Software',
    shortDescription: 'Construimos soluciones tecnológicas escalables y de alto rendimiento.',
    description: 'Desarrollo ágil de aplicaciones web, móviles y sistemas empresariales con las mejores prácticas.',
    icon: '💻',
    color: 'brand-coral',
    benefits: [
      'Soluciones a medida',
      'Arquitectura escalable',
      'Metodologías ágiles',
      'Stack moderno y probado'
    ],
    deliverables: [
      'Arquitectura de software',
      'Código fuente documentado',
      'Tests automatizados',
      'Documentación técnica'
    ],
    href: '/servicios/desarrollo-software'
  },
  {
    id: 'analitica-bi',
    title: 'Analítica y BI',
    shortDescription: 'Convertimos tus datos en insights accionables para decisiones inteligentes.',
    description: 'Implementamos soluciones de Business Intelligence, Data Warehousing y Advanced Analytics.',
    icon: '📊',
    color: 'brand-turquoise',
    benefits: [
      'Visibilidad 360° del negocio',
      'Decisiones basadas en datos',
      'Dashboards en tiempo real',
      'Predictive analytics'
    ],
    deliverables: [
      'Data Warehouse / Data Lake',
      'Dashboards interactivos',
      'Modelos predictivos',
      'Governance de datos'
    ],
    href: '/servicios/analitica-bi'
  },
  {
    id: 'change-management',
    title: 'Change Management',
    shortDescription: 'Gestionamos el factor humano de la transformación para garantizar adopción exitosa.',
    description: 'Aplicamos metodologías como ADKAR y Prosci para gestionar el cambio organizacional.',
    icon: '🔄',
    color: 'brand-orange',
    benefits: [
      'Mayor tasa de adopción',
      'Reducción de resistencia',
      'Cultura de cambio sostenible',
      'ROI maximizado en proyectos'
    ],
    deliverables: [
      'Plan de Change Management',
      'Estrategia de comunicación',
      'Programa de capacitación',
      'Métricas de adopción'
    ],
    href: '/servicios/change-management'
  }
]

