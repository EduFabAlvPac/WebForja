import { ServicePageData } from '@/types/services'

export const comercialServicioData: ServicePageData = {
  hero: {
    eyebrow: 'Servicio de Consultoría Especializada',
    icon: 'Headphones',
    title: 'Comercial y Servicio al Cliente',
    subtitle: 'De vender una vez a clientes recurrentes y satisfechos',
    description: 'No basta con vender bien: necesitas que los clientes vuelvan, recomienden y crezcan contigo. Construimos sistemas comerciales integrados con servicio al cliente que convierten prospectos en clientes recurrentes mediante procesos predecibles, atención excepcional y fidelización estratégica.',
    category: 'Comercial & Operaciones',
    breadcrumbs: [
      { label: 'Inicio', href: '/' },
      { label: 'Servicios', href: '/servicios' },
      { label: 'Comercial & Operaciones', href: '/servicios/comercial-operaciones' },
      { label: 'Comercial y Servicio al Cliente', href: '/servicios/comercial-operaciones/comercial-cliente' }
    ],
    backgroundImage: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2070&auto=format&fit=crop',
    backgroundAlt: 'Equipo de servicio al cliente atendiendo con excelencia'
  },

  targetProfile: {
    title: '¿Este Servicio es para Tu Empresa?',
    items: [
      'Vendes bien pero los clientes no vuelven a comprar (baja recurrencia)',
      'Alta adquisición de clientes nuevos pero poca retención de los existentes',
      'Servicio al cliente reactivo: solo apagamos incendios cuando el cliente reclama',
      'No mides satisfacción del cliente ni tienes sistema de seguimiento postventa',
      'Cada vendedor promete cosas diferentes y servicio no puede cumplir',
      'Dependes de conseguir clientes nuevos porque los actuales no recompran'
    ],
    idealProfile: {
      title: 'Perfil Ideal',
      description: 'Directores Comerciales, Gerentes de Servicio, Directores Generales de empresas B2B o B2C con 5-50 personas en comercial y servicio. Facturación $800M-$15.000M COP anuales. Empresas donde la experiencia del cliente es crítica para el crecimiento.'
    }
  },

  problems: [
    {
      id: 'vender-sin-retener',
      icon: '🚪',
      iconComponent: 'DoorOpen',
      title: 'Vendemos Bien pero No Retenemos Clientes',
      symptom: 'Cada mes conseguimos clientes nuevos pero perdemos casi la misma cantidad. Tasa de retención del 60-70% anual. Resultado: corremos en una caminadora: mucho esfuerzo para mantenernos en el mismo lugar.',
      solution: [
        'Diseño de programa de éxito del cliente',
        'Sistema de seguimiento postventa estructurado',
        'Identificación temprana de clientes en riesgo',
        'Estrategia de upselling y cross-selling',
        'Medición de satisfacción y valor de vida del cliente'
      ]
    },
    {
      id: 'promesas-incumplidas',
      icon: '💔',
      iconComponent: 'HeartCrack',
      title: 'Comercial Promete lo que Servicio No Puede Cumplir',
      symptom: 'Vendedores prometen entregas rápidas, personalizaciones o servicios que luego no se cumplen. Resultado: cliente frustrado, quejas, mala reputación y cancelaciones.',
      solution: [
        'Alineación de promesas comerciales con capacidad real',
        'Proceso de traspaso (handoff) de ventas a servicio',
        'Expectativas claras desde la venta',
        'Sistema de gestión de compromisos',
        'Reuniones semanales comercial-servicio'
      ]
    },
    {
      id: 'servicio-reactivo',
      icon: '🔥',
      iconComponent: 'Flame',
      title: 'Servicio Reactivo: Solo Apagamos Incendios',
      symptom: 'El equipo de servicio solo actúa cuando el cliente reclama. No hay seguimiento proactivo. Resultado: problemas pequeños se vuelven grandes, clientes insatisfechos que no avisan y simplemente se van.',
      solution: [
        'Diseño de proceso de atención proactiva',
        'Sistema de tickets y gestión de casos',
        'Indicadores de satisfacción en tiempo real',
        'Protocolos de escalamiento',
        'Seguimiento estructurado post-resolución'
      ]
    },
    {
      id: 'experiencia-fragmentada',
      icon: '🧩',
      iconComponent: 'Puzzle',
      title: 'Experiencia del Cliente Fragmentada',
      symptom: 'El cliente tiene una experiencia en ventas (promesas, atención), otra en entrega y otra en servicio postventa. Nadie tiene visibilidad completa del cliente. Resultado: cliente frustrado que siente que "nadie sabe nada".',
      solution: [
        'Mapeo de experiencia del cliente (customer journey)',
        'Sistema único de gestión de clientes',
        'Visibilidad compartida entre comercial y servicio',
        'Puntos de contacto definidos y consistentes',
        'Medición de satisfacción en cada etapa'
      ]
    },
    {
      id: 'no-medir-satisfaccion',
      icon: '❓',
      iconComponent: 'HelpCircle',
      title: 'No Medimos Satisfacción ni Actuamos en Consecuencia',
      symptom: 'No sabemos si los clientes están satisfechos hasta que se quejan o se van. No tenemos indicador de satisfacción ni sistema de mejora. Resultado: perdemos clientes sin saber por qué.',
      solution: [
        'Implementación de sistema de medición (NPS, CSAT)',
        'Encuestas automáticas post-interacción',
        'Análisis de causas de insatisfacción',
        'Plan de acción basado en retroalimentación',
        'Cierre del ciclo con clientes que dan feedback'
      ]
    }
  ],

  components: [
    {
      id: 'proceso-comercial',
      icon: '🎯',
      iconComponent: 'Target',
      title: 'Proceso Comercial Estructurado',
      description: 'Diseñamos el proceso de prospección, calificación y cierre que convierte oportunidades en clientes de forma predecible.',
      includes: [
        {
          subtitle: 'Estrategia Comercial',
          items: [
            'Definición de perfil de cliente ideal',
            'Segmentación de mercado y priorización',
            'Propuesta de valor diferenciada por segmento',
            'Estrategia de canales de adquisición',
            'Modelo de pricing y empaquetamiento'
          ]
        },
        {
          subtitle: 'Proceso de Venta',
          items: [
            'Mapeo de proceso desde prospecto hasta cliente',
            'Definición de etapas y criterios de avance',
            'Guiones de conversación y manejo de objeciones',
            'Formato de propuestas comerciales',
            'Proceso de negociación y cierre'
          ]
        },
        {
          subtitle: 'Herramientas Comerciales',
          items: [
            'Sistema de gestión comercial (CRM)',
            'Automatización de seguimiento',
            'Plantillas y materiales de venta',
            'Tablero de indicadores comerciales',
            'Proceso de proyección de ventas'
          ]
        }
      ],
      deliverables: [
        'Proceso Comercial Documentado',
        'Manual de Ventas (Playbook)',
        'Sistema de Gestión Comercial Configurado',
        'Plantillas y Guiones',
        'Tablero de Indicadores'
      ]
    },
    {
      id: 'traspaso-ventas-servicio',
      icon: '🔄',
      iconComponent: 'ArrowRightLeft',
      title: 'Proceso de Traspaso Ventas-Servicio',
      description: 'Implementamos proceso estructurado de traspaso que garantiza que lo prometido en venta se cumple en servicio.',
      includes: [
        {
          subtitle: 'Alineación de Expectativas',
          items: [
            'Definición de qué se puede prometer en venta',
            'Capacitación a comercial en capacidades reales',
            'Proceso de validación de promesas especiales',
            'Comunicación de compromisos a servicio',
            'Expectativas claras al cliente desde día 1'
          ]
        },
        {
          subtitle: 'Proceso de Traspaso',
          items: [
            'Reunión de traspaso vendedor-servicio',
            'Documentación de compromisos y expectativas',
            'Presentación del equipo de servicio al cliente',
            'Plan de implementación o entrega',
            'Seguimiento conjunto primeras semanas'
          ]
        },
        {
          subtitle: 'Gestión de Compromisos',
          items: [
            'Sistema de registro de compromisos',
            'Alertas de cumplimiento de plazos',
            'Escalamiento de incumplimientos',
            'Comunicación proactiva al cliente',
            'Medición de cumplimiento de promesas'
          ]
        }
      ],
      deliverables: [
        'Proceso de Traspaso Documentado',
        'Plantilla de Reunión de Traspaso',
        'Sistema de Gestión de Compromisos',
        'Protocolo de Comunicación',
        'Indicadores de Cumplimiento'
      ]
    },
    {
      id: 'servicio-cliente-proactivo',
      icon: '💬',
      iconComponent: 'MessageCircle',
      title: 'Sistema de Servicio al Cliente Proactivo',
      description: 'Implementamos sistema de atención que anticipa problemas y mantiene clientes satisfechos.',
      includes: [
        {
          subtitle: 'Canales de Atención',
          items: [
            'Definición de canales (teléfono, email, chat, WhatsApp)',
            'Horarios y tiempos de respuesta por canal',
            'Sistema de tickets y gestión de casos',
            'Base de conocimiento y preguntas frecuentes',
            'Autoservicio para consultas simples'
          ]
        },
        {
          subtitle: 'Proceso de Atención',
          items: [
            'Protocolo de primera respuesta',
            'Clasificación y priorización de casos',
            'Proceso de escalamiento',
            'Resolución en primera llamada (FCR)',
            'Seguimiento hasta cierre satisfactorio'
          ]
        },
        {
          subtitle: 'Atención Proactiva',
          items: [
            'Seguimiento estructurado postventa',
            'Check-ins periódicos con clientes clave',
            'Alertas de uso o comportamiento',
            'Anticipación de necesidades',
            'Programa de éxito del cliente'
          ]
        }
      ],
      deliverables: [
        'Proceso de Atención Documentado',
        'Sistema de Tickets Implementado',
        'Base de Conocimiento',
        'Protocolos de Atención',
        'Programa de Seguimiento Proactivo'
      ]
    },
    {
      id: 'experiencia-cliente',
      icon: '⭐',
      iconComponent: 'Star',
      title: 'Diseño de Experiencia del Cliente',
      description: 'Mapeamos y optimizamos cada punto de contacto para crear experiencia excepcional y consistente.',
      includes: [
        {
          subtitle: 'Mapeo de Experiencia',
          items: [
            'Customer journey map completo',
            'Identificación de puntos de contacto',
            'Momentos de verdad críticos',
            'Puntos de dolor y fricción',
            'Oportunidades de deleite'
          ]
        },
        {
          subtitle: 'Diseño de Experiencia',
          items: [
            'Estándares de atención por punto de contacto',
            'Guiones y protocolos de interacción',
            'Personalización de experiencia por segmento',
            'Automatización de comunicaciones',
            'Sorpresas y momentos wow'
          ]
        },
        {
          subtitle: 'Medición de Experiencia',
          items: [
            'Indicadores de satisfacción (NPS, CSAT)',
            'Encuestas post-interacción',
            'Análisis de retroalimentación',
            'Identificación de detractores y promotores',
            'Plan de acción por segmento'
          ]
        }
      ],
      deliverables: [
        'Customer Journey Map',
        'Estándares de Experiencia',
        'Protocolos de Interacción',
        'Sistema de Medición de Satisfacción',
        'Plan de Mejora de Experiencia'
      ]
    },
    {
      id: 'retencion-fidelizacion',
      icon: '🎁',
      iconComponent: 'Gift',
      title: 'Programa de Retención y Fidelización',
      description: 'Diseñamos estrategia que convierte clientes en promotores y aumenta valor de vida del cliente.',
      includes: [
        {
          subtitle: 'Estrategia de Retención',
          items: [
            'Segmentación de clientes por valor y riesgo',
            'Identificación temprana de clientes en riesgo',
            'Programa de recuperación de clientes',
            'Incentivos de permanencia',
            'Análisis de causas de cancelación'
          ]
        },
        {
          subtitle: 'Programa de Fidelización',
          items: [
            'Diseño de programa de lealtad',
            'Beneficios por nivel de cliente',
            'Programa de referidos',
            'Comunidad de clientes',
            'Eventos y experiencias exclusivas'
          ]
        },
        {
          subtitle: 'Crecimiento de Cuenta',
          items: [
            'Estrategia de venta cruzada',
            'Identificación de oportunidades de expansión',
            'Programa de mejora de producto/servicio',
            'Revisiones periódicas de negocio',
            'Planes de crecimiento conjunto'
          ]
        }
      ],
      deliverables: [
        'Estrategia de Retención',
        'Programa de Fidelización',
        'Sistema de Alertas de Riesgo',
        'Programa de Referidos',
        'Plan de Crecimiento de Cuentas'
      ]
    },
    {
      id: 'capacitacion-equipos',
      icon: '🎓',
      iconComponent: 'GraduationCap',
      title: 'Capacitación de Equipos Comercial y Servicio',
      description: 'Desarrollamos capacidades en equipos para ejecutar excelencia en venta y servicio.',
      includes: [
        {
          subtitle: 'Capacitación Comercial',
          items: [
            'Técnicas de prospección y calificación',
            'Metodología de venta consultiva',
            'Manejo de objeciones',
            'Negociación y cierre',
            'Uso de herramientas comerciales'
          ]
        },
        {
          subtitle: 'Capacitación en Servicio',
          items: [
            'Atención al cliente excepcional',
            'Manejo de quejas y situaciones difíciles',
            'Comunicación efectiva',
            'Empatía y escucha activa',
            'Resolución de problemas'
          ]
        },
        {
          subtitle: 'Desarrollo Continuo',
          items: [
            'Programa de coaching individual',
            'Revisión de casos reales',
            'Mejores prácticas compartidas',
            'Certificación de competencias',
            'Actualización continua'
          ]
        }
      ],
      deliverables: [
        'Programa de Capacitación',
        'Materiales de Entrenamiento',
        'Certificación de Equipos',
        'Plan de Coaching',
        'Evaluación de Competencias'
      ]
    }
  ],

  methodology: [
    {
      phase: 1,
      title: 'FUNDAMENTAR',
      tagline: 'Diagnosticamos tu sistema comercial y de servicio',
      activities: [
        'Análisis de proceso comercial actual',
        'Evaluación de servicio al cliente',
        'Mapeo de experiencia del cliente',
        'Medición de satisfacción y retención',
        'Identificación de brechas críticas'
      ],
      deliverables: [
        'Reporte de Diagnóstico',
        'Customer Journey Actual',
        'Análisis de Satisfacción',
        'Oportunidades Identificadas'
      ]
    },
    {
      phase: 2,
      title: 'ORIENTAR',
      tagline: 'Diseñamos tu sistema integrado comercial-servicio',
      activities: [
        'Diseño de proceso comercial optimizado',
        'Diseño de experiencia del cliente objetivo',
        'Proceso de traspaso ventas-servicio',
        'Estrategia de retención y fidelización',
        'Plan de implementación'
      ],
      deliverables: [
        'Proceso Comercial Diseñado',
        'Customer Journey Objetivo',
        'Proceso de Traspaso',
        'Estrategia de Fidelización',
        'Plan de Implementación'
      ]
    },
    {
      phase: 3,
      title: 'REDISEÑAR',
      tagline: 'Implementamos los nuevos procesos',
      activities: [
        'Implementación de sistema de gestión',
        'Capacitación de equipos',
        'Lanzamiento de programas de fidelización',
        'Implementación de medición de satisfacción',
        'Ajustes y optimización'
      ],
      deliverables: [
        'Sistemas Implementados',
        'Equipos Capacitados',
        'Programas Activos',
        'Medición Operando',
        'Procesos Documentados'
      ]
    },
    {
      phase: 4,
      title: 'JUSTIFICAR',
      tagline: 'Medimos impacto en satisfacción y retención',
      activities: [
        'Medición de indicadores de satisfacción',
        'Análisis de mejora en retención',
        'Cálculo de valor de vida del cliente',
        'Evaluación de experiencia del cliente',
        'Documentación de mejoras'
      ],
      deliverables: [
        'Tablero de Indicadores',
        'Reporte de Impacto',
        'Análisis de Retención',
        'Mejoras Documentadas'
      ]
    },
    {
      phase: 5,
      title: 'ACOMPAÑAR',
      tagline: 'Coaching continuo para sostener excelencia',
      activities: [
        'Coaching a líderes comerciales y servicio',
        'Revisión de indicadores',
        'Optimización continua de procesos',
        'Capacitación avanzada',
        'Evolución del sistema'
      ],
      deliverables: [
        'Sesiones de Coaching',
        'Revisiones Mensuales',
        'Optimizaciones',
        'Capacitación Continua'
      ]
    }
  ],

  caseStudy: {
    company: {
      name: 'Empresa de Software como Servicio',
      industry: 'Tecnología',
      size: '12 personas (5 comercial, 4 servicio)',
      location: 'Medellín, Colombia'
    },
    challenge: 'Empresa con buena adquisición de clientes (15-20 nuevos/mes) pero retención del 65% anual. Servicio reactivo que solo atendía quejas. Desconexión entre promesas de venta y entrega real. Tasa de cancelación del 35% anual. No medían satisfacción ni tenían programa de fidelización.',
    solution: 'Implementamos sistema integrado: rediseñamos proceso comercial con expectativas claras, creamos proceso de traspaso estructurado, implementamos servicio proactivo con seguimiento, diseñamos programa de éxito del cliente, y lanzamos sistema de medición de satisfacción con NPS.',
    results: {
      before: [
        { label: 'Retención anual', value: '65%' },
        { label: 'NPS', value: '18' },
        { label: 'Tiempo respuesta', value: '24h' },
        { label: 'Recompra', value: '30%' },
        { label: 'Valor vida cliente', value: '$12K' },
        { label: 'Referidos', value: '5%' }
      ],
      after: [
        { label: 'Retención anual', value: '89%' },
        { label: 'NPS', value: '68' },
        { label: 'Tiempo respuesta', value: '4h' },
        { label: 'Recompra', value: '72%' },
        { label: 'Valor vida cliente', value: '$28K' },
        { label: 'Referidos', value: '32%' }
      ]
    },
    testimonial: {
      quote: 'Antes vendíamos bien pero los clientes se iban. Gastábamos todo en conseguir nuevos clientes. FORJA nos ayudó a integrar comercial con servicio: ahora lo que prometemos se cumple, el servicio es proactivo, y los clientes están tan satisfechos que nos refieren. Retención subió de 65% a 89% y el valor de vida del cliente se duplicó. Cambiamos de perseguir clientes nuevos a hacer crecer los que ya tenemos.',
      author: 'María Fernanda Ruiz',
      position: 'Directora Comercial'
    },
    downloadLink: '/casos-exito/saas-servicio.pdf'
  },

  cta: {
    primary: {
      title: 'Diagnóstico Comercial y Servicio Gratuito',
      description: 'Evaluamos tu sistema comercial y de servicio al cliente. Te mostramos dónde están las fugas de clientes.',
      buttonText: 'Solicitar Diagnóstico GRATIS',
      buttonLink: '/contacto',
      icon: 'Search'
    },
    secondary: {
      title: 'Consulta con Especialista',
      description: 'Agenda 30 minutos para analizar tus desafíos en comercial y servicio.',
      buttonText: 'Agendar Llamada',
      buttonLink: '/contacto',
      icon: 'Calendar'
    }
  }
}

// Datos adicionales para componentes especiales
export const transformationMetrics = [
  { metric: 'Retención anual', before: '65%', after: '89%', improvement: '+37%', color: 'green' },
  { metric: 'NPS (satisfacción)', before: '18', after: '68', improvement: '+278%', color: 'green' },
  { metric: 'Tiempo de respuesta', before: '24 horas', after: '4 horas', improvement: '-83%', color: 'green' },
  { metric: 'Tasa de recompra', before: '30%', after: '72%', improvement: '+140%', color: 'green' },
  { metric: 'Valor vida cliente', before: '$12K', after: '$28K', improvement: '+133%', color: 'green' },
  { metric: 'Clientes por referido', before: '5%', after: '32%', improvement: '+540%', color: 'green' },
  { metric: 'Quejas mensuales', before: '45', after: '8', improvement: '-82%', color: 'green' },
  { metric: 'Cumplimiento promesas', before: '68%', after: '94%', improvement: '+38%', color: 'green' }
]

export const customerComparison = {
  before: {
    retention: '65%',
    nps: '18',
    lifetime: '$12K',
    rating: 2.5
  },
  after: {
    retention: '89%',
    retentionGrowth: '+37%',
    nps: '68',
    npsGrowth: '+278%',
    lifetime: '$28K',
    lifetimeGrowth: '+133%',
    rating: 4.5
  }
}

export const statisticBadge = {
  value: '68%',
  text: 'de clientes se van por mala atención, no por precio o producto'
}

export const guarantees = [
  '25% mejora en retención, O',
  '40 puntos mejora en NPS, O',
  '50% reducción en quejas'
]

