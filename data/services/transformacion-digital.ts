import { ServicePageData } from '@/types/services'

export const transformacionDigitalData: ServicePageData = {
  hero: {
    eyebrow: 'Estrategia & Transformación',
    icon: 'Smartphone',
    title: 'Transformación Digital 360°',
    subtitle: 'Tecnología como Ventaja Competitiva Medible',
    description: 'Orquestamos la adopción de tecnología y cultura digital en toda tu organización, convirtiendo datos en decisiones, automatizando procesos y creando experiencias de cliente que fidelizan.',
    category: 'estrategia-transformacion',
    backgroundImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    backgroundAlt: 'Transformación digital con tecnología y datos conectados globalmente',
    breadcrumbs: [
      { label: 'Inicio', href: '/' },
      { label: 'Servicios', href: '/servicios' },
      { label: 'Estrategia & Transformación', href: '/servicios/estrategia-transformacion' },
      { label: 'Transformación Digital 360°', href: '/servicios/estrategia-transformacion/transformacion-digital' },
    ],
  },

  targetProfile: {
    title: 'Este servicio es para ti si...',
    items: [
      'Sientes que tu competencia es más ágil y está ganando mercado online.',
      'Tu equipo invierte demasiado tiempo en tareas manuales y repetitivas.',
      'Tomas decisiones importantes basándote en la intuición en lugar de en datos.',
      'La experiencia de tus clientes es inconsistente entre canales físicos y digitales.',
      'Tus sistemas actuales son islas de información que no se comunican entre sí.',
      'Quieres innovar pero tu tecnología actual es una barrera, no un facilitador.',
    ],
    idealProfile: {
      title: 'Perfil Ideal',
      description: 'Empresas que comprenden la urgencia de modernizarse pero carecen del conocimiento o los recursos internos para diseñar y ejecutar un plan de transformación digital cohesivo y con ROI garantizado.',
    },
  },

  problems: [
    {
      id: 'datos-dispersos',
      icon: '📊',
      iconComponent: 'Database',
      title: 'Datos Dispersos e Inútiles',
      symptom: 'Información crítica repartida en hojas de Excel, emails y sistemas legacy. Imposible tener una visión 360° del cliente o del negocio para tomar decisiones rápidas.',
      solution: [
        'Centralización de datos en un Data Warehouse o Data Lake.',
        'Implementación de dashboards de Business Intelligence (BI) en tiempo real.',
        'Creación de un Modelo de Datos Único (MDM) para clientes y productos.',
        'Estrategia de Gobierno de Datos para garantizar calidad y seguridad.',
      ],
    },
    {
      id: 'cx-desconectada',
      icon: '🤦‍♂️',
      iconComponent: 'Users',
      title: 'Experiencia de Cliente (CX) Desconectada',
      symptom: 'El cliente recibe un trato en tienda, otro en la web y otro en redes sociales. No hay seguimiento unificado, lo que genera frustración y pérdida de ventas.',
      solution: [
        'Mapeo del Customer Journey Omnicanal.',
        'Implementación de un CRM 360° que unifique todas las interacciones.',
        'Estrategia de personalización basada en datos de comportamiento.',
        'Automatización de comunicaciones para seguimiento post-venta.',
      ],
    },
    {
      id: 'operaciones-manuales',
      icon: '⚙️',
      iconComponent: 'ClipboardEdit',
      title: 'Operaciones Lentas y Manuales',
      symptom: 'Procesos clave como facturación, reportes o logística dependen de intervención humana, hojas de cálculo y emails, resultando en errores y cuellos de botella.',
      solution: [
        'Mapeo y optimización de procesos (BPM).',
        'Automatización Robótica de Procesos (RPA) para tareas repetitivas.',
        'Integración de sistemas (ERP, CRM, etc.) para eliminar la doble digitación.',
        'Digitalización y gestión documental para cero papel.',
      ],
    },
    {
      id: 'tecnologia-obsoleta',
      icon: '💻',
      iconComponent: 'Server',
      title: 'Tecnología Obsoleta y Rígida',
      symptom: 'Sistemas legacy que son caros de mantener, difíciles de actualizar y no se integran con nuevas tecnologías como la IA o servicios en la nube.',
      solution: [
        'Auditoría del Tech Stack actual.',
        'Diseño de una arquitectura de microservicios o API-first.',
        'Plan de migración a la nube (Cloud Migration Strategy).',
        'Definición de un stack tecnológico moderno, escalable y flexible.',
      ],
    },
  ],

  components: [
    {
      id: 'auditoria-roadmap',
      icon: '🗺️',
      iconComponent: 'Map',
      title: '1. Auditoría y Roadmap Digital',
      description: 'Radiografía completa de tu madurez digital actual y el plan de ruta detallado para alcanzar el estado futuro deseado.',
      includes: [
        {
          subtitle: 'Evaluación de Madurez 360°',
          items: [
            'Análisis de Capacidades Digitales (ACADIS).',
            'Benchmark competitivo y de industria.',
            'Evaluación de procesos, cultura y tecnología.',
            'Identificación de brechas y quick-wins.',
          ],
        },
        {
          subtitle: 'Roadmap Estratégico de Transformación',
          items: [
            'Definición de iniciativas priorizadas por impacto y esfuerzo.',
            'Timeline de implementación por fases (Corto, Mediano, Largo Plazo).',
            'Estimación de presupuesto y cálculo de ROI.',
            'Definición de KPIs para medir el éxito de la transformación.',
          ],
        },
      ],
      deliverables: [
        'Informe de Madurez Digital (Scorecard).',
        'Roadmap de Transformación Interactivo.',
        'Business Case para cada iniciativa clave.',
        'Dashboard de seguimiento de KPIs.',
      ],
    },
    {
      id: 'inteligencia-negocio',
      icon: '🧠',
      iconComponent: 'BrainCircuit',
      title: '2. Inteligencia de Negocio y Analytics',
      description: 'Transformamos tus datos crudos en el activo más valioso de tu empresa: conocimiento para la toma de decisiones.',
      includes: [
        {
          subtitle: 'Infraestructura de Datos',
          items: [
            'Diseño e implementación de Data Warehouse o Data Lake.',
            'Procesos de extracción, transformación y carga (ETL/ELT).',
            'Creación de Modelos de Datos Maestros (MDM).',
            'Garantía de calidad y gobernanza de datos.',
          ],
        },
        {
          subtitle: 'Visualización y Analytics',
          items: [
            'Desarrollo de Dashboards Ejecutivos (Finanzas, Ventas, Operaciones).',
            'Creación de reportes departamentales automatizados.',
            'Análisis predictivo básico (ej. previsión de demanda).',
            'Capacitación al equipo en cultura data-driven.',
          ],
        },
      ],
      deliverables: [
        'Data Warehouse/Lake funcional.',
        'Dashboards en Power BI o similar, actualizados en tiempo real.',
        'Sistema de reportería automatizado.',
        'Manual de Gobierno de Datos.',
      ],
    },
    {
      id: 'automatizacion-ia',
      icon: '🤖',
      iconComponent: 'Bot',
      title: '3. Automatización e Integración de IA',
      description: 'Liberamos a tu equipo de tareas repetitivas para que puedan enfocarse en actividades de alto valor, usando RPA e IA.',
      includes: [
        {
          subtitle: 'Automatización de Procesos (RPA)',
          items: [
            'Identificación de procesos candidatos a automatización.',
            'Desarrollo de "robots" de software para tareas manuales.',
            'Automatización de contabilidad, facturación, reportes, etc.',
            'Monitoreo y mantenimiento de los procesos automatizados.',
          ],
        },
        {
          subtitle: 'Integración de Inteligencia Artificial (IA)',
          items: [
            'Implementación de Chatbots para atención al cliente 24/7.',
            'Análisis de sentimiento en redes sociales y feedback de clientes.',
            'Modelos de recomendación de productos (E-commerce).',
            'Optimización de rutas logísticas o gestión de inventario con IA.',
          ],
        },
      ],
      deliverables: [
        'Procesos clave automatizados y operativos.',
        'Dashboard de eficiencia (horas ahorradas, errores reducidos).',
        'Chatbot o modelo de IA integrado y funcional.',
        'Plan de escalado de automatización.',
      ],
    },
     {
      id: 'experiencia-cliente-omnicanal',
      icon: '🛒',
      iconComponent: 'Store',
      title: '4. Experiencia de Cliente Omnicanal',
      description: 'Diseñamos un ecosistema donde tus canales online y offline trabajan en perfecta sincronía para ofrecer una experiencia fluida.',
      includes: [
        {
          subtitle: 'Estrategia Omnicanal',
          items: [
            'Mapeo del Customer Journey 360°.',
            'Definición de la estrategia de canales (rol de la tienda física, web, app, etc.).',
            'Unificación de promociones y políticas entre canales.',
            'Programa de lealtad unificado.',
          ],
        },
        {
          subtitle: 'Tecnología para CX',
          items: [
            'Implementación o optimización de CRM.',
            'Integración de E-commerce con punto de venta (POS).',
            'Plataforma de Customer Data Platform (CDP) para visión única del cliente.',
            'Herramientas de marketing automation para personalización.',
          ],
        },
      ],
      deliverables: [
        'Customer Journey Map Omnicanal.',
        'Blueprint de la arquitectura tecnológica de CX.',
        'CRM configurado y operativo.',
        'Plan de personalización y segmentación de clientes.',
      ],
    },
  ],

  methodology: [
    {
      phase: 1,
      title: 'Fundamentar',
      tagline: 'Diagnóstico Digital y Visión',
      activities: [
        'Análisis de Madurez Digital (procesos, cultura, tecnología).',
        'Workshop de "Art of the Possible" con stakeholders.',
        'Benchmark de competidores digitales.',
        'Identificación de brechas y oportunidades de digitalización.',
      ],
      deliverables: [
        'Digital Maturity Scorecard.',
        'Mapa de Oportunidades de Digitalización.',
        'Visión y objetivos de la transformación.',
      ],
    },
    {
      phase: 2,
      title: 'Orientar',
      tagline: 'Diseño del Roadmap y Casos de Negocio',
      activities: [
        'Priorización de iniciativas digitales (Quick-wins vs. Estratégicas).',
        'Diseño de la arquitectura tecnológica futura (target state).',
        'Creación de Business Case para cada iniciativa (ROI, costos).',
        'Definición del roadmap de implementación por fases.',
      ],
      deliverables: [
        'Roadmap de Transformación Digital.',
        'Arquitectura Tecnológica Target.',
        'Análisis de Inversión y Retorno (ROI).',
      ],
    },
    {
      phase: 3,
      title: 'Rediseñar',
      tagline: 'Implementación Ágil y Creación de MVPs',
      activities: [
        'Desarrollo de Productos Mínimos Viables (MVPs) en ciclos cortos.',
        'Implementación de herramientas (CRM, BI, RPA).',
        'Rediseño y digitalización de procesos clave.',
        'Gestión del cambio y capacitación inicial.',
      ],
      deliverables: [
        'Primeros MVPs funcionales (ej. un dashboard, un proceso automatizado).',
        'Equipos capacitados en nuevas herramientas.',
        'Feedback temprano de usuarios.',
      ],
    },
    {
      phase: 4,
      title: 'Justificar',
      tagline: 'Medición de Impacto y Valor',
      activities: [
        'Implementación de dashboards para medir KPIs de transformación.',
        'Seguimiento del ROI y beneficios obtenidos vs. planificados.',
        'Comunicación de resultados a toda la organización.',
        'Ajustes al roadmap basados en datos y resultados.',
      ],
      deliverables: [
        'Dashboard de KPIs de Transformación.',
        'Reportes de impacto y valor generado.',
        'Casos de éxito internos documentados.',
      ],
    },
    {
      phase: 5,
      title: 'Acompañar',
      tagline: 'Escalado y Cultura de Innovación Continua',
      activities: [
        'Escalado de los MVPs exitosos a toda la organización.',
        'Creación de un Centro de Excelencia (CoE) Digital.',
        'Establecimiento de un ciclo de innovación continua.',
        'Soporte y optimización de las nuevas capacidades digitales.',
      ],
      deliverables: [
        'Plan de escalado a nivel organizacional.',
        'Modelo de gobierno para la innovación continua.',
        'Hoja de ruta para futuras iniciativas digitales.',
      ],
    },
  ],

  caseStudy: {
    company: {
      name: 'Textilera Regional "Hilos Andinos"*',
      industry: 'Manufactura y Distribución Textil',
      size: '180 empleados',
      location: 'Antioquia, Colombia',
    },
    challenge: 'Una empresa familiar con 40 años en el mercado, operando con procesos manuales, inventarios en Excel y sin canal de venta online. La entrada de competidores importados y más ágiles estaba erosionando su cuota de mercado rápidamente.',
    solution: 'Se diseñó un plan de transformación 360°: 1) Implementación de un ERP en la nube para integrar producción e inventario. 2) Lanzamiento de un E-commerce B2B para distribuidores. 3) Creación de dashboards de BI para visualizar ventas y producción en tiempo real.',
    results: {
      before: [
        { label: 'Tiempo de procesamiento de pedidos', value: '2-3 días' },
        { label: 'Visibilidad de inventario', value: 'Nula (solo conteo físico)' },
        { label: 'Canal de ventas online', value: 'Inexistente' },
        { label: 'Errores de despacho', value: '8%' },
        { label: 'Toma de decisiones', value: 'Basada en intuición' },
      ],
      after: [
        { label: 'Tiempo de procesamiento de pedidos', value: '2 horas' },
        { label: 'Visibilidad de inventario', value: '99% en tiempo real' },
        { label: 'Canal de ventas online', value: '25% de las ventas totales' },
        { label: 'Errores de despacho', value: '<1%' },
        { label: 'Toma de decisiones', value: 'Basada en datos (Data-Driven)' },
      ],
    },
    testimonial: {
      quote: 'FORJA Digital no solo nos trajo tecnología, nos cambió el "chip". Pasamos de ser una empresa análoga a pensar en digital. Nuestras ventas online superaron todas las expectativas y ahora operamos con una eficiencia que no creíamos posible.',
      author: 'Isabel Gómez',
      position: 'Gerente General, Hilos Andinos',
    },
    downloadLink: '/casos-exito/textilera-regional',
  },

  cta: {
    primary: {
      title: '¿Listo para Digitalizar tu Futuro?',
      description: 'Nuestro Diagnóstico de Madurez Digital es el primer paso. Identificamos tus brechas y te entregamos un plan de acción claro y priorizado. ¡Gratis!',
      buttonText: 'Iniciar Diagnóstico Digital',
      buttonLink: '/rayos-x-empresarial',
      icon: 'ClipboardCheck',
    },
    secondary: {
      title: '¿Tienes Preguntas Específicas?',
      description: 'Agenda una llamada de 30 minutos sin costo con un arquitecto de transformación digital y resuelve todas tus dudas.',
      buttonText: 'Agendar Llamada',
      buttonLink: '/contacto',
      icon: 'Phone',
    },
  },
}
