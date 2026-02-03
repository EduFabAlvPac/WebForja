import { ServicePageData } from '@/types/services'

export const arquitecturaEstrategicaData: ServicePageData = {
  hero: {
    eyebrow: 'Estrategia & Transformación',
    icon: 'Lightbulb',
    title: 'Arquitectura Estratégica',
    subtitle: 'El Blueprint de tu Transformación Digital',
    description: 'Diseñamos la arquitectura integral que alinea tu estrategia de negocio con capacidades tecnológicas, procesos optimizados y una estructura organizacional preparada para escalar.',
    category: 'estrategia-transformacion',
    backgroundImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
    backgroundAlt: 'Equipo de profesionales planificando estrategia empresarial con documentos y laptop en una oficina moderna',
    breadcrumbs: [
      { label: 'Inicio', href: '/' },
      { label: 'Servicios', href: '/servicios' },
      { label: 'Estrategia & Transformación', href: '/servicios/estrategia-transformacion' },
      { label: 'Arquitectura Estratégica', href: '/servicios/estrategia-transformacion/arquitectura-estrategica' },
    ],
  },

  targetProfile: {
    title: 'Este servicio es para ti si...',
    items: [
      'Tu empresa creció de forma reactiva y ahora los sistemas no se hablan entre sí',
      'Inviertes en tecnología pero no ves retorno medible ni mejoras operativas',
      'Tus procesos son inconsistentes entre áreas y dependen de personas clave',
      'Quieres escalar pero no sabes por dónde empezar sin romper lo que funciona',
      'Tienes múltiples proyectos digitales pero no hay una visión unificada',
      'Necesitas preparar tu empresa para certificaciones, inversión o expansión',
    ],
    idealProfile: {
      title: 'Perfil Ideal',
      description: 'Empresas de 20-200 empleados con facturación anual de $1M-$50M USD, que ya tienen operaciones establecidas pero enfrentan cuellos de botella en escalabilidad, eficiencia operativa o integración tecnológica.',
    },
  },

  problems: [
    {
      id: 'silos',
      icon: '🏢',
      iconComponent: 'Building2',
      title: 'Silos Organizacionales',
      symptom: 'Cada área trabaja con sus propias herramientas, datos y procesos. No hay visibilidad transversal ni colaboración efectiva.',
      solution: [
        'Mapeo de flujos de información entre áreas',
        'Diseño de modelo operativo integrado',
        'Definición de responsabilidades claras (RACI)',
        'Implementación de herramientas colaborativas',
      ],
    },
    {
      id: 'deuda-tecnica',
      icon: '⚠️',
      iconComponent: 'AlertTriangle',
      title: 'Deuda Técnica Acumulada',
      symptom: 'Sistemas legacy, integraciones frágiles, procesos manuales. Cada cambio toma semanas y genera errores.',
      solution: [
        'Auditoría técnica de sistemas actuales',
        'Roadmap de modernización incremental',
        'Priorización basada en impacto vs esfuerzo',
        'Plan de migración sin detener operaciones',
      ],
    },
    {
      id: 'procesos-ineficientes',
      icon: '🔄',
      iconComponent: 'RefreshCw',
      title: 'Procesos Ineficientes',
      symptom: 'Actividades repetitivas, aprobaciones manuales, reprocesos constantes. El equipo dedica 40% del tiempo a tareas sin valor.',
      solution: [
        'Mapeo y rediseño de procesos críticos',
        'Automatización de flujos repetitivos',
        'Eliminación de cuellos de botella',
        'Métricas de eficiencia operativa',
      ],
    },
    {
      id: 'falta-vision',
      icon: '🎯',
      iconComponent: 'Target',
      title: 'Falta de Visión Estratégica',
      symptom: 'Proyectos tecnológicos sin alineación con objetivos de negocio. Inversiones que no generan valor medible.',
      solution: [
        'Definición de capabilities estratégicas',
        'Roadmap tecnológico alineado a negocio',
        'Business cases con ROI calculado',
        'Governance de portfolio de proyectos',
      ],
    },
  ],

  components: [
    {
      id: 'diagnostico',
      icon: '🔍',
      iconComponent: 'Search',
      title: '1. Diagnóstico y Evaluación de Madurez',
      description: 'Análisis profundo de tu estado actual para identificar brechas críticas y oportunidades de mejora.',
      includes: [
        {
          subtitle: 'Análisis de Capacidades Actuales',
          items: [
            'Inventario de sistemas, aplicaciones y tecnologías',
            'Mapeo de procesos end-to-end por área',
            'Evaluación de arquitectura técnica existente',
            'Análisis de flujos de datos e integraciones',
          ],
        },
        {
          subtitle: 'Evaluación de Madurez Digital',
          items: [
            'Assessment contra modelo de madurez FORJA®',
            'Benchmark con industria y competidores',
            'Identificación de quick wins vs transformaciones estructurales',
            'Análisis de riesgos técnicos y operativos',
          ],
        },
      ],
      deliverables: [
        'Informe ejecutivo de diagnóstico (30-40 páginas)',
        'Mapa de capacidades actuales vs deseadas',
        'Score de madurez digital por dimensión',
        'Matriz de brechas priorizadas',
      ],
    },
    {
      id: 'blueprint',
      icon: '🏗️',
      iconComponent: 'Building',
      title: '2. Diseño de Arquitectura Target',
      description: 'Creación del modelo To-Be que define cómo debe funcionar tu organización para lograr sus objetivos estratégicos.',
      includes: [
        {
          subtitle: 'Arquitectura de Negocio',
          items: [
            'Modelo operativo target (TOM)',
            'Capabilities map y heat map de prioridades',
            'Rediseño de procesos core',
            'Estructura organizacional recomendada',
          ],
        },
        {
          subtitle: 'Arquitectura de Aplicaciones',
          items: [
            'Landscape de aplicaciones target',
            'Definición de stack tecnológico',
            'Modelo de integración entre sistemas',
            'Estrategia cloud vs on-premise',
          ],
        },
        {
          subtitle: 'Arquitectura de Datos',
          items: [
            'Modelo de datos maestros (clientes, productos, etc.)',
            'Arquitectura de data warehouse/data lake',
            'Estrategia de analytics y BI',
            'Políticas de governance de datos',
          ],
        },
      ],
      deliverables: [
        'Blueprint de arquitectura target (50-70 páginas)',
        'Diagramas técnicos (Archimate/UML)',
        'Catálogo de capabilities target',
        'Modelo de integración de sistemas',
      ],
    },
    {
      id: 'roadmap',
      icon: '🗺️',
      iconComponent: 'Map',
      title: '3. Roadmap de Transformación',
      description: 'Plan maestro de implementación con fases, proyectos, inversiones y métricas de éxito.',
      includes: [
        {
          subtitle: 'Portfolio de Iniciativas',
          items: [
            'Proyectos priorizados por impacto/esfuerzo',
            'Dependencias entre iniciativas',
            'Estimación de esfuerzo y recursos',
            'Quick wins para resultados tempranos',
          ],
        },
        {
          subtitle: 'Planning Estratégico',
          items: [
            'Timeline de 12-36 meses',
            'Fases de implementación con milestones',
            'Roadmap tecnológico detallado',
            'Plan de gestión del cambio',
          ],
        },
      ],
      deliverables: [
        'Roadmap de transformación (timeline visual)',
        'Business case por iniciativa con ROI',
        'Presupuesto estimado por fase',
        'KPIs y métricas de éxito',
      ],
    },
    {
      id: 'gobierno',
      icon: '⚖️',
      iconComponent: 'Scale',
      title: '4. Modelo de Gobierno y Gestión',
      description: 'Estructuras, roles y procesos para asegurar ejecución efectiva y sostenibilidad a largo plazo.',
      includes: [
        {
          subtitle: 'Governance Framework',
          items: [
            'Comités de decisión (steering committees)',
            'RACI de roles y responsabilidades',
            'Procesos de aprobación y escalamiento',
            'Políticas de arquitectura y estándares',
          ],
        },
        {
          subtitle: 'Gestión de Portfolio',
          items: [
            'Proceso de intake y priorización de proyectos',
            'Framework de evaluación de inversiones',
            'Seguimiento de OKRs y KPIs',
            'Reporting ejecutivo mensual',
          ],
        },
      ],
      deliverables: [
        'Manual de gobierno de arquitectura',
        'Matriz RACI completa',
        'Templates de comités y reportes',
        'Políticas y estándares documentados',
      ],
    },
    {
      id: 'gestion-cambio',
      icon: '👥',
      iconComponent: 'Users',
      title: '5. Estrategia de Gestión del Cambio',
      description: 'Plan para asegurar adopción exitosa por parte de tu equipo y minimizar resistencia.',
      includes: [
        {
          subtitle: 'Change Management',
          items: [
            'Análisis de stakeholders e impacto',
            'Plan de comunicación interna',
            'Estrategia de capacitación por rol',
            'Gestión de resistencias',
          ],
        },
        {
          subtitle: 'Enablement del Equipo',
          items: [
            'Workshops de onboarding',
            'Documentación de procesos nuevos',
            'Champions internos y embajadores',
            'Soporte post go-live',
          ],
        },
      ],
      deliverables: [
        'Plan de gestión del cambio',
        'Matriz de stakeholders',
        'Plan de comunicaciones',
        'Programa de capacitación',
      ],
    },
    {
      id: 'cadena-suministro',
      icon: '🚚',
      iconComponent: 'Truck',
      title: '6. Arquitectura de Cadena de Suministro (Opcional)',
      description: 'Optimización end-to-end de tu supply chain desde proveedores hasta cliente final.',
      includes: [
        {
          subtitle: 'Supply Chain Design',
          items: [
            'Mapeo de flujos logísticos actuales',
            'Optimización de inventarios y almacenamiento',
            'Integración con proveedores y transportistas',
            'Modelo de proyección de demanda',
          ],
        },
        {
          subtitle: 'Tecnología Supply Chain',
          items: [
            'Evaluación/implementación de WMS/TMS',
            'Integración con sistemas ERP',
            'IoT y tracking en tiempo real',
            'Analytics predictivo de supply chain',
          ],
        },
      ],
      deliverables: [
        'Diseño de red de distribución optimizada',
        'Blueprint de arquitectura supply chain',
        'Plan de integración de sistemas',
        'Modelo financiero de optimización',
      ],
    },
  ],

  methodology: [
    {
      phase: 1,
      title: 'Fundamentar',
      tagline: 'No Puedes Mejorar lo que No Mides',
      activities: [
        'Realizamos un diagnóstico profundo de tu arquitectura actual: estrategia, procesos, tecnología, talento y finanzas',
        'Identificamos brechas críticas y oportunidades de alto impacto',
        'Entrevistas con stakeholders clave',
        'Talleres de mapeo de procesos',
        'Auditoría de sistemas y tecnología',
      ],
      deliverables: [
        'Informe de diagnóstico inicial',
        'Mapas de procesos As-Is',
        'Inventario de assets tecnológicos',
        'Matriz de stakeholders',
      ],
    },
    {
      phase: 2,
      title: 'Orientar',
      tagline: 'Estrategia Clara, Ejecución Efectiva',
      activities: [
        'Co-diseñamos el blueprint estratégico que integra tu visión de negocio con capacidades tecnológicas y operacionales',
        'Definimos roadmap, presupuesto e indicadores de éxito',
        'Workshops de visión estratégica',
        'Definición de capabilities target',
        'Validación de alcance con leadership',
      ],
      deliverables: [
        'Capability map priorizado',
        'Roadmap preliminar',
        'Quick wins identificados',
        'Business cases iniciales',
      ],
    },
    {
      phase: 3,
      title: 'Rediseñar',
      tagline: 'Transformación en Acción',
      activities: [
        'Ejecutamos el plan: optimizamos procesos, implementamos tecnología, capacitamos equipos y establecemos nuevas estructuras de gobierno',
        'Todo con gestión de cambio integrada',
        'Diseño de arquitectura target',
        'Modelado de procesos To-Be',
        'Selección de stack tecnológico',
      ],
      deliverables: [
        'Blueprint de arquitectura completo',
        'Procesos rediseñados',
        'Recomendaciones tecnológicas',
        'Análisis de ROI por iniciativa',
      ],
    },
    {
      phase: 4,
      title: 'Justificar',
      tagline: 'Los Números No Mienten',
      activities: [
        'Medimos el impacto real de la transformación con KPIs objetivos',
        'Calculamos ROI, eficiencias ganadas y valor creado',
        'Transparencia total en resultados',
        'Construcción de dashboard de seguimiento',
        'Reportes ejecutivos de impacto',
      ],
      deliverables: [
        'Roadmap de transformación 12-36 meses',
        'Modelo de gobierno',
        'Plan de change management',
        'Presupuesto y timeline detallado',
      ],
    },
    {
      phase: 5,
      title: 'Acompañar',
      tagline: 'El Cambio se Sostiene con Acompañamiento',
      activities: [
        'No te dejamos solo. Hacemos seguimiento continuo, ajustamos lo necesario y te acompañamos en la evolución',
        'Soporte estratégico permanente',
        'Presentación a comité ejecutivo',
        'Setup de governance structures',
        'Kick-off de quick wins',
      ],
      deliverables: [
        'Plan de implementación fase 1',
        'Estructura de gobierno activada',
        'Primeros proyectos en ejecución',
        'KPIs y dashboard de seguimiento',
      ],
    },
  ],

  caseStudy: {
    company: {
      name: 'Distribuidora Regional ABC*',
      industry: 'Distribución y Logística',
      size: '150 empleados',
      location: 'Colombia',
    },
    challenge: 'Empresa distribuidora con 25 años de trayectoria enfrentaba problemas críticos: inventarios desactualizados, pedidos perdidos, falta de visibilidad en entregas, y sistemas legacy inconexos. El crecimiento estaba limitado por la incapacidad operativa.',
    solution: 'Implementamos arquitectura estratégica completa: rediseño de procesos logísticos, integración ERP-WMS-TMS, modelo de datos maestros, y roadmap de transformación digital en 18 meses.',
    results: {
      before: [
        { label: 'Exactitud de inventario', value: '65%' },
        { label: 'Tiempo de procesamiento de pedido', value: '4-6 horas' },
        { label: 'Errores en entregas', value: '12%' },
        { label: 'Visibilidad de flota', value: '0%' },
        { label: 'Costo operativo', value: 'Baseline' },
      ],
      after: [
        { label: 'Exactitud de inventario', value: '98%' },
        { label: 'Tiempo de procesamiento de pedido', value: '15 min' },
        { label: 'Errores en entregas', value: '2%' },
        { label: 'Visibilidad de flota', value: '100% real-time' },
        { label: 'Costo operativo', value: '-23%' },
      ],
    },
    testimonial: {
      quote: 'FORJA no solo nos diseñó una arquitectura moderna, nos enseñó a pensar estratégicamente. Pasamos de apagar incendios a planificar crecimiento. El ROI se dio en los primeros 8 meses.',
      author: 'Carlos Martínez',
      position: 'CEO, Distribuidora ABC',
    },
    downloadLink: '/casos-de-exito/distribuidora-abc.pdf',
  },

  cta: {
    primary: {
      title: '¿Listo para Diseñar tu Arquitectura?',
      description: 'Solicita tu Evaluación de Madurez Empresarial y descubre las brechas críticas que frenan tu crecimiento.',
      buttonText: 'Evaluación de Madurez Empresarial',
      buttonLink: '/contacto',
      icon: '🔍',
    },
    secondary: {
      title: '¿Tienes Preguntas sobre el Servicio?',
      description: 'Agenda una llamada de 30 minutos con uno de nuestros Forjadores para discutir tu caso específico.',
      buttonText: 'Habla con un Forjador',
      buttonLink: '/contacto',
      icon: '📞',
    },
  },
}


