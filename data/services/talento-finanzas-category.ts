import { CategoryPageData } from '@/types/services'

export const talentoFinanzasCategoryData: CategoryPageData = {
  hero: {
    eyebrow: 'Categoría de Servicios',
    title: 'Talento & Finanzas',
    subtitle: 'La ecuación del crecimiento sostenible',
    description: 'Integramos la gestión estratégica del talento con ingeniería financiera para construir empresas rentables, escalables y con equipos de alto rendimiento.',
    stats: [
      {
        value: '2.3x',
        label: 'Mayor rentabilidad en empresas con gestión integrada',
        icon: 'TrendingUp'
      },
      {
        value: '67%',
        label: 'Reducción en rotación de talento clave',
        icon: 'Users'
      },
      {
        value: '40%',
        label: 'Mejora en márgenes operativos promedio',
        icon: 'DollarSign'
      }
    ],
    breadcrumbs: [
      { label: 'Inicio', href: '/' },
      { label: 'Servicios', href: '/servicios' },
      { label: 'Talento & Finanzas', href: '/servicios/talento-finanzas' }
    ]
  },

  whyIntegration: {
    title: '¿Por qué Talento y Finanzas deben gestionarse juntos?',
    subtitle: 'La desconexión entre estas dos áreas es la causa #1 de estancamiento en PYMEs',
    problems: [
      {
        id: 'desalineacion-costos',
        icon: '💸',
        title: 'Desalineación entre Costos de Talento y Rentabilidad',
        symptom: 'Contratas talento sin saber si tu estructura de costos lo soporta. O peor: recortas personal sin entender el impacto en capacidades críticas.',
        consequence: 'Ciclos de contratación-despido que destruyen cultura, conocimiento y márgenes.'
      },
      {
        id: 'decisiones-aisladas',
        icon: '🎯',
        title: 'Decisiones Aisladas que Generan Ineficiencia',
        symptom: 'Finanzas pide "reducir costos de nómina". Talento pide "contratar más gente". Nadie tiene la foto completa.',
        consequence: 'Inversiones en talento que no generan ROI. Recortes que destruyen capacidades estratégicas.'
      },
      {
        id: 'falta-metricas',
        icon: '📊',
        title: 'Falta de Métricas que Conecten Personas con Resultados',
        symptom: 'Sabes cuánto cuesta tu nómina, pero no sabes cuánto valor genera cada rol. Mides "satisfacción" pero no "productividad rentable".',
        consequence: 'Imposible tomar decisiones basadas en datos. Solo intuición y reacción.'
      }
    ],
    solution: {
      title: 'La Solución: Gestión Integrada',
      description: 'Diseñamos un sistema donde cada decisión de talento tiene una justificación financiera, y cada estrategia financiera considera el impacto en capacidades humanas.',
      benefits: [
        'Estructura de costos de talento alineada con modelo de negocio',
        'ROI medible de cada inversión en personas',
        'Roadmap financiero que incluye desarrollo de capacidades',
        'Métricas integradas: productividad, rentabilidad por rol, costo de rotación',
        'Decisiones estratégicas basadas en datos de ambas áreas'
      ]
    }
  },

  services: [
    {
      id: 'gestion-talento',
      icon: '👥',
      iconComponent: 'Users',
      title: 'Gestión de Talento Estratégico',
      description: 'Convertimos tu equipo en una ventaja competitiva medible, alineando estructura organizacional, desarrollo de capacidades y cultura con tus objetivos de crecimiento.',
      forWho: [
        'Empresas con alta rotación que destruye conocimiento',
        'Equipos desalineados con la estrategia del negocio',
        'Falta de claridad en roles, responsabilidades y KPIs',
        'Cultura reactiva en lugar de proactiva'
      ],
      includes: [
        'Diseño de estructura organizacional escalable',
        'Definición de roles, responsabilidades y KPIs por posición',
        'Mapeo de capacidades críticas vs. disponibles',
        'Roadmap de desarrollo de talento',
        'Sistema de evaluación de desempeño basado en resultados',
        'Estrategia de retención de talento clave'
      ],
      results: [
        'Reducción de 40-60% en rotación de talento crítico',
        'Claridad total en quién hace qué y cómo se mide',
        'Equipos alineados con objetivos estratégicos',
        'Cultura de alto rendimiento y accountability'
      ],
      caseHighlight: {
        company: 'Distribuidora Regional',
        result: 'Redujo rotación de 45% a 12% en 8 meses. Productividad por empleado aumentó 38%.'
      },
      link: '/servicios/talento-finanzas/gestion-talento-estrategico',
      caseLink: '/nosotros/testimonios',
      borderColor: 'turquoise'
    },
    {
      id: 'ingenieria-financiera',
      icon: '💰',
      iconComponent: 'DollarSign',
      title: 'Gestión Financiera Operativa',
      description: 'Diseñamos tu motor financiero: estructura de costos optimizada, flujo de caja predecible, márgenes saludables y un modelo de pricing que sostiene el crecimiento.',
      forWho: [
        'Empresas rentables "en papel" pero sin liquidez',
        'Márgenes que se erosionan sin entender por qué',
        'Pricing basado en "lo que cobra la competencia"',
        'Falta de visibilidad financiera en tiempo real'
      ],
      includes: [
        'Análisis de estructura de costos y márgenes por línea',
        'Diseño de modelo de pricing estratégico',
        'Proyecciones financieras a 12-36 meses',
        'Sistema de flujo de caja y capital de trabajo',
        'KPIs financieros operativos (no solo contables)',
        'Roadmap de mejora de rentabilidad'
      ],
      results: [
        'Mejora de 20-40% en márgenes operativos',
        'Flujo de caja predecible y gestionable',
        'Pricing que refleja valor real y sostiene crecimiento',
        'Visibilidad financiera en tiempo real'
      ],
      caseHighlight: {
        company: 'Empresa de Servicios TI',
        result: 'Aumentó margen neto de 8% a 22% en 6 meses. Flujo de caja positivo por primera vez en 3 años.'
      },
      link: '/servicios/talento-finanzas/ingenieria-financiera',
      caseLink: '/nosotros/testimonios',
      borderColor: 'green'
    }
  ],

  integration: {
    title: 'El Poder de la Integración',
    subtitle: 'Cuando Talento y Finanzas trabajan como un solo sistema',
    points: [
      {
        id: 'roi-talento',
        icon: '📈',
        iconComponent: 'TrendingUp',
        title: 'ROI de Cada Inversión en Talento',
        description: 'Cada contratación, capacitación o ajuste salarial tiene una justificación financiera clara y un retorno medible.',
        benefit: 'Eliminas el "gasto" en talento y lo conviertes en "inversión estratégica"'
      },
      {
        id: 'costos-alineados',
        icon: '⚖️',
        iconComponent: 'Scale',
        title: 'Estructura de Costos Alineada con Capacidades',
        description: 'Tu modelo financiero refleja las capacidades reales de tu equipo. No hay brechas entre lo que necesitas hacer y lo que puedes hacer.',
        benefit: 'Crecimiento sostenible sin sorpresas de capacidad o liquidez'
      },
      {
        id: 'metricas-integradas',
        icon: '🎯',
        iconComponent: 'Target',
        title: 'Métricas que Conectan Personas con Resultados',
        description: 'Dashboards que muestran productividad por rol, costo por resultado, ROI de desarrollo, impacto de rotación en márgenes.',
        benefit: 'Decisiones basadas en datos, no en intuición o presión'
      },
      {
        id: 'crecimiento-rentable',
        icon: '🚀',
        iconComponent: 'Rocket',
        title: 'Roadmap de Crecimiento Rentable',
        description: 'Tu plan de crecimiento integra inversiones en talento con proyecciones financieras. Sabes exactamente cuándo contratar, qué capacidades desarrollar y cómo financiarlo.',
        benefit: 'Escalas sin sacrificar márgenes ni cultura'
      }
    ],
    benefitHighlight: {
      stat: '3.2x',
      description: 'Las empresas con gestión integrada de Talento y Finanzas crecen 3.2 veces más rápido que aquellas con áreas desconectadas (Estudio McKinsey 2023)'
    }
  },

  targetProfile: {
    title: '¿Es este enfoque para tu empresa?',
    situations: [
      'Tienes talento costoso pero no ves el retorno en resultados',
      'Tu flujo de caja es impredecible y te limita contratar o invertir',
      'Tus márgenes se erosionan pero no sabes exactamente dónde',
      'Alta rotación que destruye conocimiento y productividad',
      'Decisiones de talento y finanzas se toman en silos separados',
      'Quieres crecer pero no sabes si tu estructura lo soporta'
    ],
    idealCompany: {
      title: 'Perfil de Empresas Ideales',
      description: 'PYMEs en crecimiento (10-200 empleados) con ambición de escalar de forma sostenible. Facturación entre $500M-$10.000M COP anuales. Líderes que entienden que el talento y las finanzas son dos caras de la misma moneda.'
    }
  },

  methodology: [
    {
      phase: 1,
      title: 'Diagnóstico Integrado',
      tagline: 'Radiografía financiera + mapeo de talento',
      activities: [
        'Análisis de estructura de costos y márgenes',
        'Mapeo de capacidades actuales vs. necesarias',
        'Identificación de brechas críticas',
        'Benchmarking de productividad y rentabilidad'
      ],
      deliverables: [
        'Reporte de diagnóstico integrado',
        'Mapa de brechas críticas',
        'Quick wins identificados'
      ]
    },
    {
      phase: 2,
      title: 'Diseño del Sistema Integrado',
      tagline: 'Arquitectura de talento + modelo financiero',
      activities: [
        'Diseño de estructura organizacional óptima',
        'Modelo financiero con estructura de costos de talento',
        'Sistema de métricas integradas',
        'Roadmap de implementación'
      ],
      deliverables: [
        'Blueprint de estructura organizacional',
        'Modelo financiero a 36 meses',
        'Dashboard de métricas integradas',
        'Roadmap de implementación'
      ]
    },
    {
      phase: 3,
      title: 'Implementación por Fases',
      tagline: 'Ejecución controlada con ajustes',
      activities: [
        'Implementación de quick wins',
        'Ajustes en estructura y procesos',
        'Capacitación de líderes',
        'Activación de sistema de métricas'
      ],
      deliverables: [
        'Sistema de gestión implementado',
        'Equipo capacitado',
        'Métricas en operación'
      ]
    },
    {
      phase: 4,
      title: 'Optimización y Escalamiento',
      tagline: 'Ajuste fino basado en datos',
      activities: [
        'Análisis de resultados vs. proyecciones',
        'Optimización de procesos',
        'Preparación para siguiente fase de crecimiento',
        'Transferencia de conocimiento'
      ],
      deliverables: [
        'Reporte de resultados',
        'Plan de escalamiento',
        'Documentación completa'
      ]
    },
    {
      phase: 5,
      title: 'Acompañamiento Continuo',
      tagline: 'Soporte en decisiones críticas',
      activities: [
        'Revisiones trimestrales de métricas',
        'Soporte en decisiones estratégicas',
        'Ajustes al modelo según evolución',
        'Acceso a comunidad de líderes'
      ],
      deliverables: [
        'Sesiones de acompañamiento',
        'Actualizaciones del modelo',
        'Acceso a recursos'
      ]
    }
  ],

  caseStudy: {
    company: {
      name: 'Grupo Empresarial Andino',
      industry: 'Distribución y Logística',
      size: '85 empleados, $4.500M COP anuales'
    },
    challenge: 'Empresa rentable en papel pero con crisis de liquidez recurrente. Alta rotación (45%) en áreas operativas. Márgenes erosionándose sin claridad de causa. Decisiones de contratación y despido reactivas.',
    solution: 'Implementamos gestión integrada: rediseño de estructura organizacional, modelo financiero con costos de talento optimizados, sistema de métricas que conecta productividad con rentabilidad, y roadmap de desarrollo de capacidades críticas.',
    results: {
      talent: [
        { label: 'Rotación', value: '45% → 12%' },
        { label: 'Productividad/empleado', value: '+38%' },
        { label: 'Tiempo de onboarding', value: '-60%' },
        { label: 'Satisfacción del equipo', value: '6.2 → 8.7/10' }
      ],
      finance: [
        { label: 'Margen operativo', value: '11% → 24%' },
        { label: 'Flujo de caja', value: 'Negativo → +$180M/mes' },
        { label: 'Costo de rotación', value: '-$95M/año' },
        { label: 'ROI del proyecto', value: '420% en 12 meses' }
      ]
    },
    testimonial: {
      quote: 'Antes tomábamos decisiones de talento por presión y decisiones financieras sin entender el impacto en capacidades. Ahora tenemos un sistema donde cada decisión está respaldada por datos. El cambio ha sido transformador.',
      author: 'Carlos Mendoza',
      position: 'CEO, Grupo Empresarial Andino'
    },
    downloadLink: '/contacto'
  },

  cta: {
    primary: {
      title: 'Diagnóstico Gratuito Talento & Finanzas',
      description: 'Solicita tu Evaluación de Madurez Empresarial. Evaluamos tu situación actual en ambas áreas y te entregamos un reporte con brechas críticas.',
      buttonText: 'Evaluación de Madurez Empresarial',
      buttonLink: '/contacto',
      icon: 'Search'
    },
    secondary: {
      title: '¿Prefieres una Consulta Directa?',
      description: 'Agenda una sesión de 45 minutos con uno de nuestros Forjadores para revisar tu caso específico.',
      buttonText: 'Habla con un Forjador',
      buttonLink: '/contacto',
      icon: 'Calendar'
    },
    serviceLinks: {
      title: '¿Quieres profundizar en un servicio específico?',
      services: [
        {
          name: 'Gestión de Talento Estratégico',
          link: '/servicios/talento-finanzas/gestion-talento-estrategico'
        },
        {
          name: 'Gestión Financiera Operativa',
          link: '/servicios/talento-finanzas/ingenieria-financiera'
        }
      ]
    }
  }
}

