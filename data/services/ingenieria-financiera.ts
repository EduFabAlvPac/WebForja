import { ServicePageData } from '@/types/services'

export const ingenieriaFinancieraData: ServicePageData = {
  hero: {
    eyebrow: 'Servicio de Consultoría Especializada',
    icon: 'DollarSign',
    title: 'Gestión Financiera Operativa',
    subtitle: 'Diseñamos tu motor financiero para crecimiento sostenible',
    description: 'Las finanzas no son solo números en un balance: son el sistema nervioso de tu negocio. No basta con "llevar la contabilidad": necesitas un motor financiero que genere información para decisiones, que proyecte escenarios futuros, que optimice márgenes y flujo de caja, y que soporte tu estrategia de crecimiento. Diseñamos sistemas de gestión financiera que convierten CFOs reactivos en socios estratégicos del negocio.',
    category: 'Talento & Finanzas',
    breadcrumbs: [
      { label: 'Inicio', href: '/' },
      { label: 'Servicios', href: '/servicios' },
      { label: 'Talento & Finanzas', href: '/servicios/talento-finanzas' },
      { label: 'Gestión Financiera', href: '/servicios/talento-finanzas/ingenieria-financiera' }
    ],
    backgroundImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    backgroundAlt: 'Análisis financiero y estrategia empresarial'
  },

  targetProfile: {
    title: '¿Este Servicio es para Tu Empresa?',
    items: [
      'Eres rentable "en papel" pero no tienes liquidez para operar',
      'No sabes cuáles productos/servicios generan margen real y cuáles destruyen valor',
      'Tus decisiones de pricing son reactivas o basadas en "lo que cobra la competencia"',
      'Cierras mes financiero en 15-30 días y cuando lo haces, la información ya no sirve',
      'No tienes proyecciones financieras confiables a 6-12 meses',
      'Tu función financiera es 100% operativa (nómina, facturas) y 0% estratégica'
    ],
    idealProfile: {
      title: 'Perfil Ideal',
      description: 'CEOs, CFOs, Directores Financieros de empresas de 20-200 empleados con facturación entre $500M-$20.000M COP anuales. Negocios que necesitan profesionalizar su función financiera para escalar de forma sostenible.'
    }
  },

  problems: [
    {
      id: 'rentabilidad-invisible',
      icon: '🔍',
      iconComponent: 'Search',
      title: 'Rentabilidad Invisible: No Sabes Qué Genera Margen Real',
      symptom: 'Sabemos que somos "rentables" porque el contador lo dice, pero no sabemos qué productos, clientes o servicios realmente generan margen. Pricing basado en intuición o en "lo que cobra la competencia".',
      solution: [
        'Análisis de rentabilidad por producto/servicio/cliente/canal',
        'Costeo ABC (Activity-Based Costing) para costos reales',
        'Modelo de pricing estratégico basado en valor',
        'Dashboard de márgenes en tiempo real',
        'Decisiones de portafolio basadas en datos de rentabilidad'
      ]
    },
    {
      id: 'liquidez-impredecible',
      icon: '💸',
      iconComponent: 'Wallet',
      title: 'Flujo de Caja Impredecible que Limita Crecimiento',
      symptom: 'Algunos meses sobra dinero, otros no alcanza para nómina. No sabemos cuándo vamos a tener liquidez ni cuánto. Esto nos impide tomar decisiones de inversión o contratación.',
      solution: [
        'Proyección de flujo de caja semanal/mensual a 13 semanas',
        'Gestión de capital de trabajo (CCC - Cash Conversion Cycle)',
        'Optimización de cuentas por cobrar (DSO)',
        'Negociación estratégica con proveedores (DPO)',
        'Estrategia de financiamiento de corto plazo'
      ]
    },
    {
      id: 'informacion-tardia',
      icon: '⏰',
      iconComponent: 'Clock',
      title: 'Información Financiera Tardía e Inútil',
      symptom: 'Cerramos el mes en 20-30 días. Para cuando tenemos los números, ya pasó un mes más y la realidad cambió. Tomamos decisiones a ciegas.',
      solution: [
        'Proceso de cierre financiero rápido (5-7 días)',
        'Automatización de reportes financieros',
        'Dashboard de KPIs financieros en tiempo real',
        'Alertas tempranas de desviaciones',
        'Cultura de "fast close" en el equipo financiero'
      ]
    },
    {
      id: 'proyecciones-inexistentes',
      icon: '🔮',
      iconComponent: 'TrendingUp',
      title: 'Sin Proyecciones: Piloteando sin Instrumentos',
      symptom: 'No tenemos presupuesto anual ni forecast actualizado. No sabemos si vamos a tener liquidez el próximo trimestre ni si vamos a cumplir objetivos de rentabilidad.',
      solution: [
        'Proceso de presupuesto anual (Budget)',
        'Forecasting rolling (proyección actualizada mensualmente)',
        'Análisis de escenarios (best case, base case, worst case)',
        'Proyección de P&L, Balance, Flujo de Caja',
        'Proceso de revisión mensual de desempeño vs plan'
      ]
    },
    {
      id: 'finanzas-operativas',
      icon: '⚙️',
      iconComponent: 'Settings',
      title: 'Finanzas 100% Operativas, 0% Estratégicas',
      symptom: 'El área financiera solo "registra" lo que ya pasó: facturas, nómina, impuestos. No hay análisis, no hay apoyo en decisiones, no hay planeación estratégica.',
      solution: [
        'Rediseño del modelo de función financiera',
        'Separación de finanzas operativas vs estratégicas (FP&A)',
        'Upskilling del equipo financiero en análisis',
        'Dashboard de People Analytics financieros',
        'Posicionamiento del CFO como business partner'
      ]
    },
    {
      id: 'descontrol-costos',
      icon: '📉',
      iconComponent: 'TrendingDown',
      title: 'Costos que Crecen Más Rápido que Ingresos',
      symptom: 'Cada año aumentamos ventas pero los márgenes se erosionan. Los costos crecen más rápido que los ingresos y no entendemos por qué ni cómo frenarlo.',
      solution: [
        'Análisis de estructura de costos',
        'Identificación de cost drivers principales',
        'Programa de optimización de costos',
        'Benchmark de costos vs industria',
        'Cultura de cost consciousness en la organización'
      ]
    }
  ],

  components: [
    {
      id: 'planeacion-financiera',
      icon: '📊',
      iconComponent: 'BarChart3',
      title: 'Planeación Financiera y Análisis (FP&A)',
      description: 'Diseño e implementación de proceso de planeación financiera, forecasting y análisis de desempeño que convierte finanzas en socio estratégico.',
      includes: [
        {
          subtitle: 'Proceso de Planeación Estratégica',
          items: [
            'Diseño de proceso de presupuesto anual',
            'Modelo financiero de 3 estados (P&L, Balance, Flujo)',
            'Presupuesto base zero vs incremental',
            'Conexión de presupuesto con estrategia de negocio',
            'KPIs financieros y operacionales por área'
          ]
        },
        {
          subtitle: 'Forecasting y Proyecciones',
          items: [
            'Modelo de forecast rolling (13 semanas / 12 meses)',
            'Análisis de escenarios (best, base, worst case)',
            'Proyección de ventas (top-down + bottom-up)',
            'Proyección de costos variables y fijos',
            'Proyección de CAPEX e inversiones'
          ]
        },
        {
          subtitle: 'Análisis de Desempeño',
          items: [
            'Proceso de cierre mensual rápido',
            'Análisis de varianza (Real vs Budget vs Forecast)',
            'Waterfall analysis de EBITDA',
            'Análisis de KPIs por área de negocio',
            'Recomendaciones de acción basadas en análisis'
          ]
        },
        {
          subtitle: 'Reporting y Dashboards',
          items: [
            'Dashboard ejecutivo (CEO)',
            'Dashboard operacional (gerentes)',
            'Reporte mensual de gestión',
            'Automatización de reportes',
            'Storytelling financiero efectivo'
          ]
        }
      ],
      deliverables: [
        'Modelo Financiero Integrado (Excel/Google Sheets)',
        'Proceso de Presupuesto Documentado',
        'Template de Forecast Rolling',
        'Dashboard de KPIs Financieros',
        'Calendario Financiero Anual',
        'Manual de FP&A'
      ]
    },
    {
      id: 'control-gestion',
      icon: '💰',
      iconComponent: 'Target',
      title: 'Control de Gestión y Tableros Financieros',
      description: 'Implementación de sistema de control de gestión con KPIs, tableros y alertas para toma de decisiones en tiempo real.',
      includes: [
        {
          subtitle: 'Diseño de Sistema de Control',
          items: [
            'Definición de KPIs financieros y operacionales',
            'Árbol de KPIs (desde CEO hasta operativo)',
            'Metas por KPI (ambiciosas pero alcanzables)',
            'Frecuencia de medición y reporting',
            'Responsables por cada KPI'
          ]
        },
        {
          subtitle: 'Construcción de Tableros',
          items: [
            'Dashboard ejecutivo (visión integrada)',
            'Dashboards operacionales por área',
            'Visualización efectiva de datos',
            'Drill-down para análisis detallado',
            'Alertas automáticas por desviaciones'
          ]
        },
        {
          subtitle: 'Proceso de Seguimiento',
          items: [
            'Reuniones de revisión de desempeño',
            'Análisis de causas raíz de desviaciones',
            'Planes de acción correctiva',
            'Seguimiento de iniciativas',
            'Cultura de accountability por resultados'
          ]
        }
      ],
      deliverables: [
        'Catálogo de KPIs Financieros',
        'Dashboard Ejecutivo Configurado',
        'Dashboards Operacionales',
        'Manual de Control de Gestión',
        'Proceso de Reuniones de Gestión'
      ]
    },
    {
      id: 'pricing-rentabilidad',
      icon: '💵',
      iconComponent: 'DollarSign',
      title: 'Estrategia de Pricing y Análisis de Rentabilidad',
      description: 'Diseño de modelo de pricing estratégico y análisis de rentabilidad por producto/servicio/cliente/canal.',
      includes: [
        {
          subtitle: 'Análisis de Estructura de Costos',
          items: [
            'Identificación de costos directos vs indirectos',
            'Costeo ABC (Activity-Based Costing)',
            'Análisis de cost drivers',
            'Punto de equilibrio por producto/servicio',
            'Simulación de escenarios de costos'
          ]
        },
        {
          subtitle: 'Estrategia de Pricing',
          items: [
            'Análisis de pricing actual vs competencia',
            'Metodologías de pricing (cost-plus, value-based, competitive)',
            'Segmentación de clientes para pricing',
            'Modelo de pricing dinámico',
            'Testing de elasticidad de precio'
          ]
        },
        {
          subtitle: 'Análisis de Rentabilidad',
          items: [
            'Rentabilidad por producto/servicio',
            'Rentabilidad por cliente/segmento',
            'Rentabilidad por canal de distribución',
            'Matriz de rentabilidad (80/20 analysis)',
            'Decisiones de portafolio basadas en rentabilidad'
          ]
        }
      ],
      deliverables: [
        'Modelo de Costeo por Producto/Servicio',
        'Estrategia de Pricing Documentada',
        'Dashboard de Rentabilidad',
        'Matriz de Rentabilidad por Cliente',
        'Recomendaciones de Portafolio'
      ]
    },
    {
      id: 'tesoreria-flujo',
      icon: '💳',
      iconComponent: 'Wallet',
      title: 'Gestión de Tesorería y Flujo de Caja',
      description: 'Diseño e implementación de sistema de gestión de tesorería, proyección de flujo de caja y optimización de capital de trabajo.',
      includes: [
        {
          subtitle: 'Proyección de Flujo de Caja',
          items: [
            'Modelo de proyección a 13 semanas (rolling)',
            'Proyección mensual a 12 meses',
            'Análisis de sensibilidad',
            'Identificación de brechas de liquidez',
            'Estrategia de cobertura de brechas'
          ]
        },
        {
          subtitle: 'Gestión de Capital de Trabajo',
          items: [
            'Análisis de Cash Conversion Cycle (CCC)',
            'Optimización de Days Sales Outstanding (DSO)',
            'Negociación estratégica de Days Payable Outstanding (DPO)',
            'Gestión de inventarios (DIO)',
            'Liberación de caja atrapado en working capital'
          ]
        },
        {
          subtitle: 'Tesorería Operativa',
          items: [
            'Proceso de gestión diaria de caja',
            'Conciliación bancaria automática',
            'Gestión de múltiples cuentas',
            'Estrategia de inversión de excedentes',
            'Relación con bancos y entidades financieras'
          ]
        }
      ],
      deliverables: [
        'Modelo de Proyección de Flujo de Caja',
        'Dashboard de Tesorería',
        'Análisis de Capital de Trabajo',
        'Manual de Gestión de Tesorería',
        'Política de Crédito y Cobranza'
      ]
    },
    {
      id: 'optimizacion-costos',
      icon: '🔧',
      iconComponent: 'Settings',
      title: 'Optimización de Estructura de Costos',
      description: 'Análisis profundo de estructura de costos e implementación de programa de optimización sostenible.',
      includes: [
        {
          subtitle: 'Diagnóstico de Costos',
          items: [
            'Mapeo de estructura de costos actual',
            'Benchmark vs industria',
            'Identificación de ineficiencias',
            'Análisis de costo-beneficio de iniciativas',
            'Priorización de oportunidades'
          ]
        },
        {
          subtitle: 'Programa de Optimización',
          items: [
            'Quick wins (reducción inmediata)',
            'Iniciativas de mediano plazo',
            'Transformación estructural',
            'Negociación con proveedores clave',
            'Automatización de procesos costosos'
          ]
        },
        {
          subtitle: 'Sostenibilidad',
          items: [
            'Cultura de cost consciousness',
            'Proceso de aprobación de gastos',
            'Zero-based budgeting',
            'Monitoreo continuo de costos',
            'Incentivos alineados con eficiencia'
          ]
        }
      ],
      deliverables: [
        'Diagnóstico de Estructura de Costos',
        'Programa de Optimización (12 meses)',
        'Potencial de Ahorro Identificado',
        'Roadmap de Implementación',
        'Dashboard de Seguimiento'
      ]
    },
    {
      id: 'preparacion-inversion',
      icon: '💼',
      iconComponent: 'Briefcase',
      title: 'Preparación para Inversión/Financiamiento',
      description: 'Preparación de empresa para levantar capital (equity o deuda) con modelo financiero, due diligence y materiales de presentación.',
      includes: [
        {
          subtitle: 'Preparación Financiera',
          items: [
            'Limpieza de estados financieros',
            'Normalización de EBITDA',
            'Proyecciones financieras a 3-5 años',
            'Análisis de valoración',
            'Identificación de red flags'
          ]
        },
        {
          subtitle: 'Materiales de Presentación',
          items: [
            'Pitch deck para inversionistas',
            'Modelo financiero detallado',
            'Data room (documentación organizada)',
            'FAQ de due diligence',
            'Narrativa de inversión (equity story)'
          ]
        },
        {
          subtitle: 'Proceso de Fundraising',
          items: [
            'Estrategia de fundraising',
            'Identificación de inversionistas target',
            'Preparación para due diligence',
            'Acompañamiento en negociación',
            'Cierre de transacción'
          ]
        }
      ],
      deliverables: [
        'Estados Financieros Normalizados',
        'Modelo Financiero para Inversionistas',
        'Pitch Deck Profesional',
        'Data Room Organizado',
        'Valuation Report'
      ]
    }
  ],

  methodology: [
    {
      phase: 1,
      title: 'FUNDAMENTAR',
      tagline: 'Diagnosticamos la salud financiera de tu empresa',
      activities: [
        'Evaluación de madurez de función financiera',
        'Análisis de estados financieros (3 años)',
        'Diagnóstico de procesos financieros actuales',
        'Identificación de brechas críticas',
        'Benchmark vs industria'
      ],
      deliverables: [
        'Reporte de Diagnóstico Financiero',
        'Análisis de Ratios Financieros',
        'Identificación de Quick Wins',
        'Priorización de Oportunidades'
      ]
    },
    {
      phase: 2,
      title: 'ORIENTAR',
      tagline: 'Diseñamos tu motor financiero objetivo',
      activities: [
        'Diseño de modelo financiero integrado',
        'Definición de KPIs financieros',
        'Diseño de proceso de FP&A',
        'Estrategia de optimización de costos y capital de trabajo',
        'Roadmap de transformación financiera'
      ],
      deliverables: [
        'Modelo Financiero Integrado',
        'Catálogo de KPIs Financieros',
        'Diseño de Proceso de FP&A',
        'Roadmap de Implementación (6-12 meses)'
      ]
    },
    {
      phase: 3,
      title: 'REDISEÑAR',
      tagline: 'Implementamos los nuevos sistemas financieros',
      activities: [
        'Implementación de modelo financiero',
        'Construcción de dashboards',
        'Automatización de reportes',
        'Ejecución de quick wins de optimización',
        'Capacitación al equipo financiero'
      ],
      deliverables: [
        'Sistema de FP&A Operando',
        'Dashboards Financieros Activos',
        'Procesos Automatizados',
        'Equipo Financiero Capacitado',
        'Documentación de Procesos'
      ]
    },
    {
      phase: 4,
      title: 'JUSTIFICAR',
      tagline: 'Medimos el impacto en rentabilidad y liquidez',
      activities: [
        'Medición de KPIs financieros',
        'Cálculo de ROI de iniciativas',
        'Análisis de mejora en márgenes y flujo de caja',
        'Benchmark vs estado inicial',
        'Lecciones aprendidas y ajustes'
      ],
      deliverables: [
        'Dashboard de Performance Financiero',
        'Reporte de Impacto y ROI',
        'Análisis de Mejora en Ratios',
        'Recomendaciones de Mejora Continua'
      ]
    },
    {
      phase: 5,
      title: 'ACOMPAÑAR',
      tagline: 'Acompañamiento continuo para sostener la mejora',
      activities: [
        'Sesiones mensuales de revisión financiera',
        'Soporte en ciclos de presupuesto y forecast',
        'Coaching a CFO y equipo financiero',
        'Actualización de modelos y herramientas',
        'Evolución de estrategia según crecimiento'
      ],
      deliverables: [
        'Sesiones mensuales con CFO',
        'Soporte en FP&A',
        'Coaching financiero',
        'Actualizaciones de modelos'
      ]
    }
  ],

  caseStudy: {
    company: {
      name: 'Distribuidor de Insumos Médicos',
      industry: 'Distribución B2B',
      size: '65 empleados',
      location: 'Cali, Colombia'
    },
    challenge: 'Empresa con ventas de $12M USD pero con crisis de liquidez recurrente. Margen EBITDA del 8%, cierre financiero en 25 días, ciclo de conversión de efectivo de 95 días, sin visibilidad de rentabilidad por producto, y solicitudes de financiamiento rechazadas por bancos.',
    solution: 'Implementamos sistema integral de ingeniería financiera: modelo financiero integrado, proceso de FP&A, dashboards en tiempo real, optimización de capital de trabajo, análisis de rentabilidad por producto y preparación de estados financieros para banca.',
    results: {
      before: [
        { label: 'EBITDA margin', value: '8%' },
        { label: 'Tiempo de cierre', value: '25 días' },
        { label: 'Ciclo conversión $', value: '95 días' },
        { label: 'DSO (días cobranza)', value: '75 días' },
        { label: 'Visibilidad rentabilidad', value: '0%' }
      ],
      after: [
        { label: 'EBITDA margin', value: '14%' },
        { label: 'Tiempo de cierre', value: '5 días' },
        { label: 'Ciclo conversión $', value: '68 días' },
        { label: 'DSO (días cobranza)', value: '52 días' },
        { label: 'Visibilidad rentabilidad', value: '100%' }
      ]
    },
    testimonial: {
      quote: 'Antes éramos "rentables en papel" pero vivíamos con estrés de liquidez. No sabíamos qué productos generaban margen ni por qué algunos meses sobraba caja y otros no alcanzaba. FORJA nos ayudó a construir un sistema financiero profesional: ahora tenemos visibilidad total, tomamos decisiones basadas en datos y los bancos nos aprueban crédito. Pasamos de ser reactivos a ser estratégicos.',
      author: 'Carlos Mendoza',
      position: 'CEO'
    },
    downloadLink: '/casos-exito/distribuidor-medico.pdf'
  },

  cta: {
    primary: {
      title: 'Diagnóstico Financiero Gratuito',
      description: 'Solicita tu Evaluación de Salud Financiera sin costo. Identificamos tus brechas críticas y te damos recomendaciones prácticas.',
      buttonText: 'Solicitar Evaluación GRATIS',
      buttonLink: '/contacto',
      icon: 'Search'
    },
    secondary: {
      title: 'Consulta con Especialista Financiero',
      description: 'Agenda 30 minutos con nuestro experto en finanzas para analizar tus desafíos específicos.',
      buttonText: 'Agendar Llamada Estratégica',
      buttonLink: '/contacto',
      icon: 'Calendar'
    }
  }
}

