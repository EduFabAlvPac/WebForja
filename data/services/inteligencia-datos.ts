import { ServicePageData } from '@/types/services'

export const inteligenciaDatosData: ServicePageData = {
  hero: {
    eyebrow: 'Inteligencia Digital',
    icon: 'Database',
    title: 'Inteligencia de Datos',
    subtitle: 'Decide con Datos, No con Intuición',
    description:
      'Dashboards en tiempo real, analítica predictiva, CRM e IA. Todo adaptado a tu PYME.',
    category: 'inteligencia-digital',
    categoryBadge: 'Inteligencia Digital · Arquitectura de Capacidades Digitales',
    backgroundImage:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=90&w=2400&auto=format&fit=crop',
    backgroundAlt:
      'Visualización de datos y analítica empresarial con dashboards y gráficas en pantallas modernas',
    breadcrumbs: [
      { label: 'Inicio', href: '/' },
      { label: 'Servicios', href: '/servicios' },
      { label: 'Inteligencia Digital', href: '/servicios/inteligencia-digital' },
      {
        label: 'Inteligencia de Datos',
        href: '/servicios/inteligencia-digital/inteligencia-datos',
      },
    ],
  },

  targetProfile: {
    title: '¿Este Servicio es para Tu Empresa?',
    items: [
      'Tomas decisiones importantes basándote en la intuición del gerente, no en datos reales',
      'Tienes datos en Excel, correos y sistemas distintos que nunca se consolidan',
      'No sabes qué clientes son rentables, cuáles están en riesgo de irse ni por qué',
      'Tu equipo genera reportes manuales que tardan días y nadie sabe si son confiables',
      'Has invertido en software pero sigues sin visibilidad real del negocio en tiempo real',
      'Quieres implementar IA pero no sabes por dónde empezar ni si tus datos lo permiten',
    ],
    idealProfile: {
      title: 'Perfil Ideal',
      description:
        'PYMEs de 15-300 empleados en Latinoamérica que generan datos operativos todos los días pero no los aprovechan. Con o sin herramientas previas de BI.',
    },
  },

  problems: [
    {
      id: 'datos-dispersos',
      icon: '🗂️',
      iconComponent: 'FolderOpen',
      title: 'Datos Dispersos, Decisiones a Ciegas',
      symptom:
        'La Inteligencia de Datos es la dimensión más débil en todas las PYMEs de LATAM, incluyendo Chile (2.2-3.1/5). Solo el 18% de las PYMEs colombianas tiene un dashboard de indicadores activo. El resto decide sin visibilidad.',
      solution: [
        'Centralización de datos en una sola fuente de verdad',
        'Dashboard ejecutivo con KPIs en tiempo real',
        'Eliminación de reportes manuales y en Excel',
      ],
    },
    {
      id: 'sin-crm',
      icon: '👥',
      iconComponent: 'Users',
      title: 'Clientes Sin Seguimiento Real',
      symptom:
        'Solo el 22% de las PYMEs en Colombia tiene un CRM activo con segmentación. En Ecuador y Perú, menos del 14%. La mayoría gestiona sus clientes en WhatsApp, Excel o la memoria del vendedor.',
      solution: [
        'CRM implementado y adoptado por el equipo',
        'Segmentación de clientes por valor y comportamiento',
        'Alertas automáticas de clientes en riesgo de fuga',
      ],
    },
    {
      id: 'reportes-lentos',
      icon: '⏳',
      iconComponent: 'Clock',
      title: 'Reportes que Llegan Tarde',
      symptom:
        'El equipo pasa horas construyendo el informe de ventas del mes pasado cuando ya es el día 10 del mes siguiente. Las decisiones se toman con datos viejos sobre realidades que ya cambiaron.',
      solution: [
        'Automatización de reportes recurrentes',
        'Datos del negocio disponibles en tiempo real',
        'Alertas proactivas ante desviaciones de KPIs',
      ],
    },
    {
      id: 'ia-sin-base',
      icon: '🤖',
      iconComponent: 'Bot',
      title: 'IA Sin Datos de Calidad',
      symptom:
        'El 46% de las PYMEs en LATAM planea adoptar IA, pero la mayoría sin datos organizados ni gobernanza. La IA sin datos limpios no genera inteligencia — genera confusión más cara.',
      solution: [
        'Diagnóstico de calidad y preparación de datos para IA',
        'Casos de uso de IA validados para tu industria',
        'Implementación piloto medible antes de escalar',
      ],
    },
  ],

  components: [
    {
      id: 'diagnostico-datos',
      icon: '🔎',
      iconComponent: 'ScanSearch',
      title: 'Data Assessment',
      description:
        'Entendemos qué datos tienes, dónde viven, qué tan confiables son y qué valor puedes extraer de ellos hoy.',
      includes: [
        {
          subtitle: 'Qué analizamos',
          items: [
            'Inventario de fuentes de datos (ERP, CRM, Excel, apps)',
            'Evaluación de calidad: completitud, consistencia y duplicados',
            'Score de madurez analítica vs. benchmark LATAM',
            'Oportunidades de valor inmediato con los datos actuales',
          ],
        },
      ],
      deliverables: [
        'Informe de madurez analítica con score regional',
        'Mapa de fuentes de datos y flujos actuales',
        'Lista priorizada de casos de uso de alto impacto',
        'Estimación de ROI de cada iniciativa de datos',
      ],
    },
    {
      id: 'bi-dashboards',
      icon: '📊',
      iconComponent: 'BarChart3',
      title: 'Business Intelligence y Dashboards',
      description:
        'Dashboards ejecutivos en tiempo real que reemplazan los reportes de Excel y dan visibilidad total del negocio.',
      includes: [
        {
          subtitle: 'Qué construimos',
          items: [
            'Arquitectura de datos: modelo dimensional o Data Lake según madurez',
            'ETL/ELT para integración de fuentes heterogéneas',
            'Dashboards por rol: gerencial, comercial, operativo y financiero',
            'KPIs definidos con el equipo directivo, no impuestos externamente',
          ],
        },
      ],
      deliverables: [
        'Suite de dashboards en Power BI, Looker Studio o Metabase',
        'Diccionario de datos y definición de KPIs',
        'Documentación del modelo de datos',
        'Capacitación al equipo en lectura e interpretación',
      ],
    },
    {
      id: 'crm-inteligente',
      icon: '🎯',
      iconComponent: 'Target',
      title: 'CRM Inteligente',
      description:
        'Implementamos y activamos el CRM como motor del negocio: no como software instalado sino como sistema vivo que el equipo usa y que genera valor desde el primer mes.',
      includes: [
        {
          subtitle: 'Cómo lo activamos',
          items: [
            'Selección del CRM adecuado a tu tamaño y sector (HubSpot, Zoho, Salesforce)',
            'Configuración, limpieza e importación de datos históricos',
            'Automatización de seguimiento, recordatorios y alertas de fuga',
            'Capacitación y gestión del cambio para adopción real del equipo',
          ],
        },
      ],
      deliverables: [
        'CRM implementado y con datos migrados',
        'Flujos de automatización activos',
        'Manual de uso y protocolo de actualización',
        'Reporte de adopción al mes 1, 2 y 3',
      ],
    },
    {
      id: 'analitica-predictiva',
      icon: '📈',
      iconComponent: 'TrendingUp',
      title: 'Analítica Predictiva',
      description:
        'Modelos que anticipan el futuro: qué clientes van a comprar, cuáles están en riesgo, qué producto va a tener demanda el próximo trimestre.',
      includes: [
        {
          subtitle: 'Qué modelamos',
          items: [
            'Modelos de churn (predicción de fuga de clientes)',
            'Forecasting de ventas y demanda',
            'Segmentación avanzada por valor de vida del cliente (LTV)',
            'Scoring de leads para priorizar esfuerzo comercial',
          ],
        },
      ],
      deliverables: [
        'Modelos predictivos entrenados con tus datos',
        'Dashboard de señales tempranas (early warnings)',
        'Protocolo de mantenimiento y reentrenamiento de modelos',
        'Capacitación al equipo comercial en uso de los modelos',
      ],
    },
    {
      id: 'ia-aplicada',
      icon: '🤖',
      iconComponent: 'Sparkles',
      title: 'IA Aplicada a tu Negocio',
      description:
        'Identificamos los casos de uso de IA que generan retorno real en tu empresa y los implementamos de forma controlada y medible — sin hype, sin riesgo innecesario.',
      includes: [
        {
          subtitle: 'Cómo lo implementamos',
          items: [
            'Workshop de identificación de casos de uso de IA para tu industria',
            'Evaluación de preparación de datos para IA (data readiness)',
            'Implementación piloto acotado con métricas de éxito definidas',
            'Evaluación de herramientas: IA nativa en tus plataformas vs. soluciones externas',
          ],
        },
      ],
      deliverables: [
        'Mapa de casos de uso de IA priorizados',
        'Piloto de IA implementado y medido',
        'Informe de ROI del piloto',
        'Roadmap de escalamiento de IA en 12 meses',
      ],
    },
  ],

  methodology: [],

  caseStudy: {
    company: {
      name: 'Distribuidora Pacífico S.A.*',
      industry: 'Distribución y Comercio B2B',
      size: '60 empleados',
      location: 'Cali, Colombia',
    },
    challenge:
      'El equipo comercial gestionaba 380 clientes activos en Excel y WhatsApp. Los informes de ventas tardaban 3 días en generarse y nadie sabía cuáles clientes estaban en riesgo de no renovar. La gerencia tomaba decisiones sobre qué distribuidor priorizar basándose en la intuición del gerente regional.',
    solution:
      'Implementamos un ecosistema de datos en 3 fases: Data Assessment (semana 1-3), CRM HubSpot con datos migrados y automatizaciones (semana 4-10), y un dashboard ejecutivo en Looker Studio integrado al CRM y al ERP (semana 11-16). En la semana 12 el equipo ya tomaba decisiones con datos del día anterior.',
    results: {
      before: [
        { label: 'Tiempo para generar reporte de ventas', value: '3 días' },
        { label: 'Clientes con riesgo de fuga identificados', value: '0' },
        { label: 'Tasa de renovación de contratos', value: '61%' },
        { label: 'Uso activo del CRM por el equipo', value: '0%' },
      ],
      after: [
        { label: 'Tiempo para generar reporte de ventas', value: 'Tiempo real' },
        { label: 'Clientes con riesgo de fuga identificados', value: '23 al mes' },
        { label: 'Tasa de renovación de contratos', value: '78% (+17pp)' },
        { label: 'Uso activo del CRM por el equipo', value: '94%' },
      ],
    },
    testimonial: {
      quote:
        'Pasamos de adivinar a saber. Ahora en 30 segundos veo cómo está el negocio, qué clientes necesitan atención y cuánto vamos a vender el próximo mes. Para mí eso tiene un valor incalculable.',
      author: 'Lorena Ospina',
      position: 'Gerente General, Distribuidora Pacífico SA',
    },
  },

  cta: {
    primary: {
      title: 'Diagnóstico de Datos GRATIS',
      description:
        'Evaluamos tus fuentes de datos actuales y te decimos en cuánto tiempo puedes tener tu primer dashboard ejecutivo funcionando.',
      buttonText: 'Solicitar Diagnóstico GRATIS',
      buttonLink: '/contacto',
      icon: '📊',
    },
    secondary: {
      title: 'Habla con un Especialista',
      description:
        'Agenda 30 minutos con nuestro equipo de datos. Te mostramos un demo real con datos de tu industria.',
      buttonText: 'Agendar Demo de BI',
      buttonLink: '/contacto',
      icon: '💬',
    },
  },
}
