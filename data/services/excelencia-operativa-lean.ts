import { ServicePageData } from '@/types/services'

export const excelenciaOperativaData: ServicePageData = {
  hero: {
    eyebrow: 'Servicio de Consultoría Especializada',
    icon: 'Settings',
    title: 'Cadena de Suministros',
    subtitle: 'Libera el 40% de capacidad oculta que ya tienes',
    description: 'Tu operación actual funciona al 60% de su capacidad real. El resto se pierde en desperdicios, reprocesos, esperas y movimientos innecesarios. No necesitas invertir en más máquinas ni contratar más gente: necesitas eliminar lo que no agrega valor y liberar la capacidad que ya existe. Transformamos operaciones caóticas en sistemas eficientes, predecibles y escalables mediante metodologías Lean probadas.',
    category: 'Comercial & Operaciones',
    breadcrumbs: [
      { label: 'Inicio', href: '/' },
      { label: 'Servicios', href: '/servicios' },
      { label: 'Comercial & Operaciones', href: '/servicios/comercial-operaciones' },
      { label: 'Cadena de Suministros', href: '/servicios/comercial-operaciones/excelencia-operativa' }
    ],
    backgroundImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    backgroundAlt: 'Operaciones industriales eficientes y optimizadas'
  },

  targetProfile: {
    title: '¿Este Servicio es para Tu Empresa?',
    items: [
      'Tu operación crece pero cada vez es más caótica y difícil de controlar',
      'Contratas más gente pero la productividad no aumenta proporcionalmente',
      'Tienes cuellos de botella que limitan tu capacidad de entregar a tiempo',
      'Altos niveles de inventario pero siempre falta algo cuando se necesita',
      'Reprocesos, errores y desperdicios que erosionan tus márgenes',
      'Dependes de "héroes" que resuelven problemas todo el día en lugar de prevenir'
    ],
    idealProfile: {
      title: 'Perfil Ideal',
      description: 'Gerentes de Operaciones, Plant Managers, COOs de empresas manufactureras, distribuidoras o de servicios con 30-200 empleados. Negocios donde la operación es el corazón del negocio y necesitan escalar sin colapsar.'
    }
  },

  problems: [
    {
      id: 'lead-time-largo',
      icon: '⏱️',
      iconComponent: 'Clock',
      title: 'Lead Times Largos que Pierden Ventas',
      symptom: 'Desde que entra un pedido hasta que sale el producto pasan 15-30 días, pero el tiempo real de trabajo es solo 2-3 días. El resto es espera, movimientos, reprocesos. Resultado: perdemos ventas por no poder entregar rápido.',
      solution: [
        'Mapeo de flujo de valor (VSM) para identificar desperdicios',
        'Eliminación de tiempos de espera y movimientos innecesarios',
        'Implementación de flujo continuo (one-piece flow)',
        'Reducción de lotes y setup times (SMED)',
        'Sincronización de procesos con takt time'
      ]
    },
    {
      id: 'capacidad-limitada',
      icon: '🚧',
      iconComponent: 'AlertTriangle',
      title: 'Capacidad Limitada por Cuellos de Botella',
      symptom: 'Algunas áreas trabajan al 150% de capacidad mientras otras están al 40%. Resultado: no podemos crecer porque el cuello de botella nos limita, pero tenemos capacidad ociosa en otras áreas.',
      solution: [
        'Identificación y explotación de restricciones (TOC)',
        'Balanceo de líneas y redistribución de carga',
        'Optimización de layout para flujo continuo',
        'Implementación de células de manufactura',
        'Eliminación de desperdicios en proceso crítico'
      ]
    },
    {
      id: 'calidad-inconsistente',
      icon: '❌',
      iconComponent: 'XCircle',
      title: 'Calidad Inconsistente y Altos Reprocesos',
      symptom: 'Entre 5-15% de lo que producimos tiene defectos. Gastamos tiempo y dinero en inspección, reproceso y manejo de quejas. La calidad depende de quién haga el trabajo, no del proceso.',
      solution: [
        'Implementación de Poka-Yoke (a prueba de errores)',
        'Estandarización de procesos críticos',
        'Control estadístico de procesos (SPC)',
        'Sistema de gestión de calidad integrado',
        'Cultura de "calidad en la fuente" (jidoka)'
      ]
    },
    {
      id: 'inventario-excesivo',
      icon: '📦',
      iconComponent: 'Package',
      title: 'Inventarios Excesivos que Atrapan Capital',
      symptom: 'Tenemos $200K-$500K atrapados en inventario. Compramos por lote grande "para ahorrar" pero luego nos falta liquidez. Inventario obsoleto, vencido o dañado que se convierte en pérdida.',
      solution: [
        'Implementación de sistema Pull/Kanban',
        'Reducción de lotes de compra y producción',
        'Análisis ABC de inventarios',
        'Negociación de entregas frecuentes con proveedores',
        'Just-in-Time (JIT) adaptado a realidad local'
      ]
    },
    {
      id: 'mejora-reactiva',
      icon: '🔥',
      iconComponent: 'Flame',
      title: 'Mejora Reactiva: Solo Apagamos Incendios',
      symptom: 'El equipo pasa el día resolviendo problemas urgentes. No hay tiempo para prevenir ni mejorar. Cada día se repiten los mismos problemas. No hay sistema de mejora continua.',
      solution: [
        'Implementación de sistema Kaizen estructurado',
        'Eventos Kaizen mensuales con resultados tangibles',
        'Sistema de sugerencias con implementación rápida',
        'Tableros visuales de gestión (Gemba boards)',
        'Cultura de "detener y solucionar" vs "apagar incendios"'
      ]
    }
  ],

  components: [
    {
      id: 'vsm-rediseno',
      icon: '🗺️',
      iconComponent: 'Map',
      title: 'Mapeo y Rediseño de Flujo de Valor (VSM)',
      description: 'Mapeamos el flujo completo desde pedido hasta entrega, identificamos desperdicios y rediseñamos para flujo continuo.',
      includes: [
        {
          subtitle: 'Mapeo de Estado Actual',
          items: [
            'Value Stream Mapping de proceso end-to-end',
            'Identificación de 8 desperdicios Lean (TIMWOODS)',
            'Análisis de tiempos: valor agregado vs no valor agregado',
            'Identificación de cuellos de botella y restricciones',
            'Cálculo de lead time, cycle time, takt time'
          ]
        },
        {
          subtitle: 'Diseño de Estado Futuro',
          items: [
            'Rediseño de flujo para eliminar desperdicios',
            'Implementación de flujo continuo donde sea posible',
            'Diseño de sistemas pull donde flujo continuo no aplique',
            'Sincronización de procesos con demanda del cliente',
            'Plan de implementación por fases'
          ]
        },
        {
          subtitle: 'Implementación',
          items: [
            'Eventos Kaizen de implementación',
            'Capacitación de equipos en nuevo flujo',
            'Ajustes y optimización',
            'Medición de resultados vs baseline'
          ]
        }
      ],
      deliverables: [
        'Mapa de Flujo de Valor Actual (Current State VSM)',
        'Mapa de Flujo de Valor Futuro (Future State VSM)',
        'Análisis de Desperdicios y Oportunidades',
        'Plan de Implementación por Fases',
        'Reporte de Resultados (Lead Time, Productividad, Calidad)'
      ]
    },
    {
      id: 'smed-setup',
      icon: '⚡',
      iconComponent: 'Zap',
      title: 'Reducción de Tiempos de Setup (SMED)',
      description: 'Reducimos tiempos de cambio de producto/herramienta de horas a minutos mediante metodología SMED.',
      includes: [
        {
          subtitle: 'Análisis de Setup Actual',
          items: [
            'Filmación y análisis de cambios actuales',
            'Identificación de actividades internas vs externas',
            'Análisis de movimientos y desperdicios',
            'Benchmark de tiempos por tipo de cambio'
          ]
        },
        {
          subtitle: 'Rediseño de Setup',
          items: [
            'Conversión de actividades internas a externas',
            'Estandarización de herramientas y procedimientos',
            'Diseño de sistemas de cambio rápido',
            'Eliminación de ajustes mediante poka-yoke',
            'Capacitación de operadores en nuevo método'
          ]
        },
        {
          subtitle: 'Implementación y Mejora',
          items: [
            'Eventos Kaizen de reducción de setup',
            'Implementación de mejoras físicas',
            'Estandarización de nuevo procedimiento',
            'Medición y seguimiento de tiempos'
          ]
        }
      ],
      deliverables: [
        'Análisis de Setup Actual (video + tiempos)',
        'Procedimiento Estándar de Setup Optimizado',
        'Herramientas y Dispositivos de Cambio Rápido',
        'Capacitación de Operadores',
        'Reporte de Reducción de Tiempos (antes/después)'
      ]
    },
    {
      id: 'calidad-cero-defectos',
      icon: '🎯',
      iconComponent: 'Target',
      title: 'Gestión de Calidad y Reducción de Defectos',
      description: 'Implementamos sistemas a prueba de errores y cultura de calidad en la fuente para eliminar defectos.',
      includes: [
        {
          subtitle: 'Análisis de Defectos',
          items: [
            'Pareto de defectos por tipo y causa',
            'Análisis de causas raíz (5 Whys, Ishikawa)',
            'Identificación de puntos críticos de calidad',
            'Cálculo de costo de mala calidad'
          ]
        },
        {
          subtitle: 'Sistemas Poka-Yoke',
          items: [
            'Diseño de dispositivos a prueba de errores',
            'Implementación de controles visuales',
            'Estandarización de procesos críticos',
            'Inspección en la fuente vs inspección final',
            'Sistemas de alerta temprana'
          ]
        },
        {
          subtitle: 'Control Estadístico',
          items: [
            'Implementación de SPC en procesos críticos',
            'Gráficos de control y capacidad de proceso',
            'Sistema de reacción ante desviaciones',
            'Mejora continua basada en datos'
          ]
        }
      ],
      deliverables: [
        'Análisis de Pareto de Defectos',
        'Dispositivos Poka-Yoke Implementados',
        'Procedimientos Estándar de Calidad',
        'Sistema de Control Estadístico (SPC)',
        'Reporte de Reducción de Defectos'
      ]
    },
    {
      id: 'kanban-pull',
      icon: '📦',
      iconComponent: 'Package',
      title: 'Gestión Lean de Inventarios (Kanban/Pull)',
      description: 'Implementamos sistema pull para reducir inventarios y mejorar flujo de materiales.',
      includes: [
        {
          subtitle: 'Análisis de Inventarios',
          items: [
            'Clasificación ABC de inventarios',
            'Análisis de rotación y días de inventario',
            'Identificación de obsoletos y excesos',
            'Cálculo de capital atrapado'
          ]
        },
        {
          subtitle: 'Diseño de Sistema Pull',
          items: [
            'Dimensionamiento de Kanbans por SKU',
            'Diseño de supermercados de materiales',
            'Implementación de señales visuales',
            'Integración con proveedores (milk run)',
            'Sistema de reorden automático'
          ]
        },
        {
          subtitle: 'Implementación',
          items: [
            'Evento Kaizen de implementación de Kanban',
            'Capacitación de equipos',
            'Ajuste de niveles según demanda real',
            'Medición de resultados'
          ]
        }
      ],
      deliverables: [
        'Análisis ABC de Inventarios',
        'Sistema Kanban Diseñado e Implementado',
        'Supermercados de Materiales',
        'Procedimiento de Reorden Pull',
        'Reporte de Reducción de Inventario'
      ]
    },
    {
      id: 'layout-flujo',
      icon: '🏭',
      iconComponent: 'Factory',
      title: 'Optimización de Layout y Flujo de Materiales',
      description: 'Rediseñamos el layout físico para minimizar movimientos y maximizar flujo continuo.',
      includes: [
        {
          subtitle: 'Análisis de Layout Actual',
          items: [
            'Mapeo de flujo de materiales (spaghetti diagram)',
            'Análisis de distancias recorridas',
            'Identificación de cruces y retrocesos',
            'Análisis de utilización de espacio'
          ]
        },
        {
          subtitle: 'Diseño de Layout Optimizado',
          items: [
            'Diseño de células de manufactura',
            'Organización por familias de productos',
            'Minimización de distancias y movimientos',
            'Diseño de puntos de uso de materiales',
            'Implementación de 5S en áreas críticas'
          ]
        },
        {
          subtitle: 'Implementación',
          items: [
            'Plan de reubicación de equipos',
            'Evento Kaizen de reorganización',
            'Señalización y marcación de áreas',
            'Capacitación en nuevo flujo'
          ]
        }
      ],
      deliverables: [
        'Spaghetti Diagram (Antes/Después)',
        'Layout Optimizado (Planos)',
        'Plan de Implementación',
        'Señalización y Marcación',
        'Reporte de Reducción de Movimientos'
      ]
    },
    {
      id: 'kaizen-mejora-continua',
      icon: '🌟',
      iconComponent: 'Star',
      title: 'Cultura de Mejora Continua (Kaizen)',
      description: 'Implementamos sistema estructurado de mejora continua que genera 50-100 mejoras por año.',
      includes: [
        {
          subtitle: 'Sistema de Eventos Kaizen',
          items: [
            'Calendario de eventos Kaizen mensuales',
            'Metodología de evento de 3-5 días',
            'Equipos multifuncionales de mejora',
            'Implementación inmediata de cambios',
            'Medición de resultados por evento'
          ]
        },
        {
          subtitle: 'Sistema de Sugerencias',
          items: [
            'Proceso de captura de ideas de mejora',
            'Evaluación rápida (72 horas)',
            'Implementación ágil de mejoras pequeñas',
            'Reconocimiento y celebración',
            'Tracking de ideas implementadas'
          ]
        },
        {
          subtitle: 'Gestión Visual',
          items: [
            'Tableros de gestión en piso (Gemba boards)',
            'KPIs visuales y actualizados diariamente',
            'Reuniones diarias de 15 minutos (Daily Huddles)',
            'Escalamiento visual de problemas',
            'Celebración de logros'
          ]
        }
      ],
      deliverables: [
        'Sistema de Eventos Kaizen Estructurado',
        'Proceso de Sistema de Sugerencias',
        'Tableros de Gestión Visual',
        'Capacitación en Metodología Kaizen',
        'Reporte de Mejoras Implementadas'
      ]
    }
  ],

  methodology: [
    {
      phase: 1,
      title: 'FUNDAMENTAR',
      tagline: 'Diagnosticamos tu operación actual',
      activities: [
        'Gemba walk (observación en piso)',
        'Value Stream Mapping de procesos críticos',
        'Análisis de desperdicios y oportunidades',
        'Identificación de quick wins',
        'Priorización de iniciativas por impacto'
      ],
      deliverables: [
        'Reporte de Diagnóstico Operativo',
        'VSM de Estado Actual',
        'Lista Priorizada de Oportunidades',
        'Potencial de Mejora Estimado'
      ]
    },
    {
      phase: 2,
      title: 'ORIENTAR',
      tagline: 'Diseñamos el estado futuro lean',
      activities: [
        'VSM de estado futuro',
        'Diseño de células y flujo continuo',
        'Dimensionamiento de sistemas pull',
        'Diseño de layout optimizado',
        'Roadmap de implementación (6-12 meses)'
      ],
      deliverables: [
        'VSM de Estado Futuro',
        'Diseño de Layout Optimizado',
        'Plan de Implementación Lean',
        'Business Case con ROI Proyectado'
      ]
    },
    {
      phase: 3,
      title: 'REDISEÑAR',
      tagline: 'Ejecutamos eventos kaizen de transformación',
      activities: [
        'Eventos Kaizen semanales/quincenales',
        'Implementación de mejoras físicas',
        'Capacitación de equipos en metodología Lean',
        'Implementación de sistemas pull/kanban',
        'Optimización de procesos críticos'
      ],
      deliverables: [
        'Mejoras Implementadas (50-100)',
        'Equipos Capacitados en Lean',
        'Sistemas Pull Operando',
        'Documentación de Nuevos Procesos'
      ]
    },
    {
      phase: 4,
      title: 'JUSTIFICAR',
      tagline: 'Medimos el impacto operativo y financiero',
      activities: [
        'Medición de KPIs operativos (lead time, productividad, calidad)',
        'Cálculo de impacto financiero (ahorros, liberación de capital)',
        'Benchmark antes vs después',
        'Documentación de casos de éxito internos',
        'Ajustes y optimización continua'
      ],
      deliverables: [
        'Dashboard de KPIs Operativos',
        'Reporte de Impacto Financiero',
        'Casos de Éxito Documentados',
        'ROI Realizado vs Proyectado'
      ]
    },
    {
      phase: 5,
      title: 'ACOMPAÑAR',
      tagline: 'Sostenemos la mejora continua',
      activities: [
        'Coaching mensual a líderes operativos',
        'Soporte en eventos Kaizen',
        'Auditorías de sostenibilidad',
        'Capacitación avanzada',
        'Evolución del sistema según crecimiento'
      ],
      deliverables: [
        'Sesiones Mensuales de Coaching',
        'Soporte en Eventos Kaizen',
        'Auditorías de Lean',
        'Capacitación Continua'
      ]
    }
  ],

  caseStudy: {
    company: {
      name: 'Fabricante de Componentes Metálicos',
      industry: 'Manufactura',
      size: '120 empleados',
      location: 'Bogotá, Colombia'
    },
    challenge: 'Empresa con alta demanda pero incapaz de crecer. Lead time de 21 días (vs 7-10 días de competencia), capacidad al límite, defectos del 8%, inventario de $380K, y márgenes erosionados por ineficiencias. Cliente principal amenazaba con cambiar de proveedor por entregas tardías.',
    solution: 'Implementamos transformación Lean completa: VSM y rediseño de flujo, reducción de setup times, implementación de células de manufactura, sistema pull/kanban, poka-yokes en procesos críticos, y cultura de mejora continua con eventos Kaizen mensuales.',
    results: {
      before: [
        { label: 'Lead time', value: '21 días' },
        { label: 'Capacidad', value: '100%' },
        { label: 'Defectos', value: '8%' },
        { label: 'Inventario', value: '$380K' },
        { label: 'Productividad', value: 'Baseline' },
        { label: 'OEE', value: '52%' }
      ],
      after: [
        { label: 'Lead time', value: '9 días' },
        { label: 'Capacidad', value: '145%' },
        { label: 'Defectos', value: '1.8%' },
        { label: 'Inventario', value: '$210K' },
        { label: 'Productividad', value: '+42%' },
        { label: 'OEE', value: '78%' }
      ]
    },
    testimonial: {
      quote: 'En 8 meses pasamos de estar al límite de capacidad a poder crecer 45% sin invertir en nueva maquinaria. Redujimos lead time de 21 a 9 días y recuperamos $170K de capital atrapado en inventario. Lo más importante: ahora tenemos un sistema de mejora continua que genera resultados mes a mes. Lean no es un proyecto, es la nueva forma de operar.',
      author: 'Roberto Gómez',
      position: 'Gerente de Operaciones'
    },
    downloadLink: '/contacto'
  },

  cta: {
    primary: {
      title: 'Diagnóstico Lean Gratuito',
      description: 'Solicita tu Rayos-X Empresarial Gratis. Evaluamos tu operación y te mostramos dónde está la capacidad oculta.',
      buttonText: 'Rayos-X Empresarial Gratis',
      buttonLink: '/contacto',
      icon: 'Search'
    },
    secondary: {
      title: 'Consulta con Experto Lean',
      description: 'Agenda 30 minutos con uno de nuestros Forjadores especialistas en Lean para analizar tus desafíos operativos.',
      buttonText: 'Habla con un Forjador',
      buttonLink: '/contacto',
      icon: 'Calendar'
    }
  }
}

// Datos adicionales para componentes especiales
export const comparisonMetrics = [
  { 
    metric: 'Lead time', 
    before: '21 días', 
    after: '9 días', 
    improvement: '-57%',
    color: 'green'
  },
  { 
    metric: 'Capacidad operativa', 
    before: '100%', 
    after: '145%', 
    improvement: '+45%',
    color: 'green'
  },
  { 
    metric: 'Tasa de defectos', 
    before: '8%', 
    after: '1.8%', 
    improvement: '-78%',
    color: 'green'
  },
  { 
    metric: 'Inventario', 
    before: '$380K', 
    after: '$210K', 
    improvement: '-45%',
    color: 'green'
  },
  { 
    metric: 'Productividad', 
    before: 'Baseline', 
    after: '+42%', 
    improvement: '+42%',
    color: 'green'
  },
  { 
    metric: 'OEE (eficiencia)', 
    before: '52%', 
    after: '78%', 
    improvement: '+50%',
    color: 'green'
  }
]

export const financialImpact = {
  roi: 680,
  items: [
    { label: 'Ahorro anual en costos operativos', value: '$420K', icon: 'DollarSign' },
    { label: 'Capital liberado de inventario', value: '$170K', icon: 'Wallet' },
    { label: 'Ingresos adicionales por mayor capacidad', value: '$2.1M', icon: 'TrendingUp' },
    { label: 'CAPEX evitado (no comprar máquinas)', value: '$500K', icon: 'Factory' }
  ]
}

export const capacityData = {
  current: 60,
  potential: 100,
  message: 'Las empresas promedio operan al 60% de su capacidad real'
}
