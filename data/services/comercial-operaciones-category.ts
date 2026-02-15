import { CategoryPageData } from '@/types/services'

export const comercialOperacionesCategoryData: CategoryPageData = {
  hero: {
    eyebrow: 'Categoría de Servicios',
    title: 'Comercial & Operaciones',
    subtitle: 'El motor de ejecución que convierte estrategia en resultados',
    description: 'Integramos excelencia operativa con sistemas comerciales de alto rendimiento para construir empresas que venden más, operan mejor y escalan sin perder calidad.',
    stats: [],
    breadcrumbs: [
      { label: 'Inicio', href: '/' },
      { label: 'Servicios', href: '/servicios' },
      { label: 'Comercial & Operaciones', href: '/servicios/comercial-operaciones' }
    ],
    backgroundImage: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
    backgroundAlt: 'Equipo comercial y operativo trabajando en sinergia'
  },

  whyIntegration: {
    title: '¿Por qué Comercial y Operaciones deben trabajar integrados?',
    subtitle: 'La desconexión entre ventas y operaciones es la causa #1 de promesas incumplidas y clientes insatisfechos',
    problems: [
      {
        id: 'promesas-incumplibles',
        icon: '🚨',
        iconComponent: 'AlertTriangle',
        title: 'Promesas de Venta que Operaciones No Puede Cumplir',
        symptom: 'El equipo comercial vende plazos, cantidades o personalizaciones que operaciones no puede entregar. Resultado: clientes frustrados y reputación dañada.',
        consequence: 'Ciclo vicioso: ventas culpa a operaciones de ser lentos, operaciones culpa a ventas de prometer lo imposible. Nadie gana, el cliente pierde.'
      },
      {
        id: 'procesos-ineficientes',
        icon: '🐌',
        iconComponent: 'TrendingDown',
        title: 'Procesos Operativos que Limitan Capacidad de Venta',
        symptom: 'Operaciones es un cuello de botella: entregas tardías, calidad inconsistente, costos operativos que obligan a subir precios y perder competitividad.',
        consequence: 'Ventas no puede crecer porque operaciones no escala. Cada nuevo cliente es un problema, no una oportunidad.'
      },
      {
        id: 'experiencia-fragmentada',
        icon: '💔',
        iconComponent: 'Users',
        title: 'Experiencia del Cliente Fragmentada y Frustrante',
        symptom: 'El cliente tiene una experiencia en ventas (promesas, atención, rapidez) y otra totalmente diferente en entrega y servicio postventa (demoras, errores, falta de seguimiento).',
        consequence: 'Clientes que compran una vez pero no vuelven. NPS bajo. Dependencia total de nuevos clientes porque no hay recurrencia.'
      }
    ],
    solution: {
      title: 'La Solución: Integración Comercial-Operativa',
      description: 'Diseñamos un sistema donde ventas y operaciones trabajan como un solo motor: procesos operativos que soportan promesas comerciales, y sistemas comerciales que entienden capacidades reales.',
      benefits: [
        'Promesas de venta alineadas con capacidad operativa real',
        'Procesos optimizados que permiten crecer sin colapsar',
        'Experiencia del cliente consistente desde prospección hasta postventa',
        'Métricas integradas: CAC, LTV, tiempo de entrega, NPS',
        'Cultura de "customer success" compartida entre áreas'
      ]
    }
  },

  services: [
    {
      id: 'excelencia-operativa',
      icon: '⚙️',
      iconComponent: 'Settings',
      title: 'Cadena de Suministros',
      description: 'Transformamos operaciones caóticas en sistemas eficientes, predecibles y escalables mediante metodologías Lean, automatización inteligente y mejora continua.',
      forWho: [
        'Empresas que crecen pero la operación colapsa',
        'Procesos manuales, lentos y propensos a errores',
        'Costos operativos que crecen más rápido que ventas',
        'Dependencia de "héroes" que resuelven todo manualmente'
      ],
      includes: [
        'Mapeo y rediseño de procesos críticos (BPM)',
        'Eliminación de desperdicios y cuellos de botella',
        'Automatización de procesos repetitivos (RPA)',
        'Sistema de gestión de calidad y mejora continua',
        'KPIs operativos y tableros de control',
        'Cultura Lean y capacitación de equipos'
      ],
      results: [
        'Reducción de 30-50% en tiempos de ciclo',
        'Mejora de 40-60% en productividad operativa',
        'Disminución de 25-40% en costos operativos',
        'Capacidad de escalar sin contratar proporcionalmente'
      ],
      caseHighlight: {
        company: 'Empresa de Logística',
        result: 'Redujo tiempo de procesamiento de 48h a 8h',
        description: 'Redujo tiempo de procesamiento de pedidos de 48h a 8h. Aumentó capacidad operativa 3x sin aumentar headcount.'
      },
      link: '/servicios/comercial-operaciones/excelencia-operativa',
      caseLink: '/nosotros/testimonios',
      borderColor: 'red'
    },
    {
      id: 'motor-comercial',
      icon: '🎯',
      iconComponent: 'Target',
      title: 'Comercial y Servicio al Cliente',
      description: 'Construimos sistemas comerciales predecibles que convierten leads en clientes recurrentes mediante procesos, tecnología CRM y estrategia de customer success.',
      forWho: [
        'Ventas dependientes de 1-2 "estrellas" comerciales',
        'Proceso comercial inconsistente y no escalable',
        'Alta adquisición pero baja retención de clientes',
        'Sin visibilidad de pipeline ni forecasting confiable'
      ],
      includes: [
        'Diseño de proceso comercial end-to-end',
        'Implementación de CRM y automatización comercial',
        'Estrategia de generación y calificación de leads',
        'Programa de customer success y fidelización',
        'Sistema de métricas comerciales (CAC, LTV, tasa conversión)',
        'Capacitación y coaching comercial'
      ],
      results: [
        'Incremento de 40-80% en tasa de conversión',
        'Reducción de 30-50% en CAC (costo de adquisición)',
        'Aumento de 2-3x en LTV (valor de vida del cliente)',
        'Pipeline comercial predecible y escalable'
      ],
      caseHighlight: {
        company: 'SaaS B2B',
        result: 'Aumentó conversión de 8% a 23%',
        description: 'Aumentó conversión de 8% a 23%. Implementó customer success que redujo churn de 35% a 12% anual.'
      },
      link: '/servicios/comercial-operaciones/comercial-cliente',
      caseLink: '/nosotros/testimonios',
      borderColor: 'purple'
    }
  ],

  integration: {
    title: 'El Poder de la Integración Comercial-Operativa',
    subtitle: 'Cuando ventas y operaciones trabajan como un solo sistema',
    points: [
      {
        id: 'promesas-realistas',
        icon: '✅',
        iconComponent: 'CheckCircle',
        title: 'Promesas Comerciales Realistas y Cumplibles',
        description: 'Ventas conoce capacidades reales de operaciones. Operaciones entiende compromisos comerciales. Resultado: promesas que se cumplen, clientes satisfechos.'
      },
      {
        id: 'operaciones-habilitadoras',
        icon: '🚀',
        iconComponent: 'Rocket',
        title: 'Operaciones como Habilitador de Crecimiento',
        description: 'Procesos optimizados que permiten a ventas crecer sin miedo. Cada nuevo cliente es una oportunidad, no un problema operativo.'
      },
      {
        id: 'experiencia-consistente',
        icon: '⭐',
        iconComponent: 'Star',
        title: 'Experiencia del Cliente Consistente',
        description: 'Desde el primer contacto hasta postventa, el cliente vive una experiencia coherente. Resultado: NPS alto, recompra, referidos.'
      },
      {
        id: 'metricas-integradas',
        icon: '📊',
        iconComponent: 'BarChart3',
        title: 'Métricas que Conectan Ventas con Entrega',
        description: 'Visibilidad total: desde lead hasta entrega y satisfacción. Decisiones basadas en datos de toda la cadena de valor.'
      }
    ],
    statistic: {
      value: '3.5x',
      label: 'Mayor crecimiento en empresas con integración comercial-operativa vs aquellas con áreas aisladas'
    }
  },

  forWho: {
    title: '¿Esta Categoría es para Tu Empresa?',
    intro: 'La integración Comercial-Operativa es crítica cuando:',
    checklistItems: [
      'Vendes bien pero operaciones no puede cumplir consistentemente',
      'Operaciones es eficiente pero ventas no logra llenar capacidad',
      'Clientes satisfechos en venta pero frustrados en entrega',
      'Crecimiento limitado por cuellos de botella operativos',
      'Alta rotación de clientes (compran una vez, no vuelven)',
      'Dependencia de "héroes" tanto en ventas como en operaciones'
    ],
    idealProfile: {
      title: 'Perfil de Empresas Ideales',
      items: [
        'Empresas de 20-150 empleados en fase de crecimiento',
        'Negocios B2B o B2C con procesos de venta y entrega complejos',
        'Facturación $800M-$15.000M COP anuales',
        'CEOs que entienden que crecer requiere sistemas, no solo esfuerzo'
      ]
    }
  },

  methodology: [
    {
      number: 1,
      title: 'FUNDAMENTAR',
      tagline: 'Diagnosticamos la integración comercial-operativa actual',
      description: 'Evaluamos madurez de procesos comerciales y operativos, identificamos desconexiones críticas, mapeamos experiencia del cliente end-to-end y priorizamos brechas de mayor impacto.'
    },
    {
      number: 2,
      title: 'ORIENTAR',
      tagline: 'Diseñamos el modelo integrado objetivo',
      description: 'Rediseñamos procesos comerciales y operativos de forma integrada, definimos puntos de conexión críticos, establecemos métricas compartidas y creamos roadmap de transformación.'
    },
    {
      number: 3,
      title: 'REDISEÑAR',
      tagline: 'Implementamos los nuevos sistemas',
      description: 'Ejecutamos mejoras operativas (Lean, automatización), implementamos sistema comercial (CRM, procesos), integramos ambas áreas con tecnología y procesos, y capacitamos equipos en nueva forma de trabajo.'
    },
    {
      number: 4,
      title: 'JUSTIFICAR',
      tagline: 'Medimos impacto en ventas, operaciones y cliente',
      description: 'Evaluamos mejora en KPIs comerciales (conversión, CAC, LTV), medimos eficiencia operativa (tiempos, costos, calidad), calculamos impacto en experiencia del cliente (NPS, recompra) y demostramos ROI de la transformación.'
    },
    {
      number: 5,
      title: 'ACOMPAÑAR',
      tagline: 'Sostenemos la mejora continua',
      description: 'Acompañamiento mensual en revisión de métricas integradas, soporte en optimizaciones continuas, coaching a líderes comerciales y operativos, y evolución del sistema según crecimiento.'
    }
  ],

  integratedCaseStudy: {
    headline: 'Caso de Éxito Integrado: Transformación Comercial-Operativa',
    company: {
      name: 'Distribuidor de Productos Industriales',
      industry: 'Distribución B2B',
      size: '85 empleados',
      location: 'Medellín, Colombia'
    },
    challenge: 'Empresa con ventas crecientes pero operación colapsada. Equipo comercial prometía entregas en 24-48h que operaciones cumplía en 5-7 días. Clientes frustrados, rotación de 40%, NPS de 18. Operaciones trabajaba al 150% de capacidad pero con procesos manuales e ineficientes.',
    solution: 'Implementamos transformación integrada: rediseñamos proceso comercial alineado con capacidad real, optimizamos operaciones con Lean y automatización, implementamos CRM integrado con sistema de gestión de pedidos, y creamos programa de customer success.',
    results: {
      talent: [
        { label: 'Tiempo de entrega', before: '5-7 días', after: '24-36h' },
        { label: 'Tasa de cumplimiento', before: '65%', after: '94%' },
        { label: 'Productividad operativa', before: 'Baseline', after: '+58%' },
        { label: 'Capacidad sin aumentar headcount', before: '100%', after: '240%' }
      ],
      finance: [
        { label: 'Tasa de conversión comercial', before: '12%', after: '28%' },
        { label: 'NPS', before: '18', after: '67' },
        { label: 'Tasa de recompra', before: '25%', after: '71%' },
        { label: 'CAC', before: 'Baseline', after: '-42%' }
      ]
    },
    testimonial: {
      quote: 'Antes éramos dos áreas peleando: ventas prometía lo imposible, operaciones no daba abasto. FORJA nos ayudó a trabajar como un solo equipo. Ahora operaciones es nuestro diferenciador competitivo: entregamos más rápido que la competencia, con mejor calidad, y a menor costo. Ventas creció 3x sin que operaciones colapse.',
      author: 'Andrés Villegas',
      position: 'Gerente General'
    },
    downloadLink: '/contacto'
  },

  cta: {
    headline: '¿Tu Empresa Necesita Integrar Comercial y Operaciones?',
    intro: 'Si vendes bien pero no entregas consistentemente, o si operaciones es eficiente pero ventas no llena capacidad, es momento de integrar.',
    primary: {
      title: 'Diagnóstico Comercial-Operativo Gratuito',
      description: 'Solicita tu Evaluación de Madurez. Evaluamos tu integración actual y te mostramos dónde están las desconexiones críticas.',
      buttonText: 'Evaluación de Madurez',
      buttonLink: '/contacto',
      icon: 'Search'
    },
    secondary: {
      title: 'Consulta con Especialista',
      description: 'Agenda 30 minutos con uno de nuestros Forjadores para analizar tus desafíos específicos.',
      buttonText: 'Habla con un Forjador',
      buttonLink: '/contacto',
      icon: 'Calendar'
    },
    links: [
      { label: 'Ver Cadena de Suministros', href: '/servicios/comercial-operaciones/excelencia-operativa' },
      { label: 'Ver Motor Comercial', href: '/servicios/comercial-operaciones/motor-comercial' }
    ]
  }
}

