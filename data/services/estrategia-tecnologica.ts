import { ServicePageData } from '@/types/services'

export const estrategiaTecnologicaData: ServicePageData = {
  hero: {
    eyebrow: 'Inteligencia Digital',
    icon: 'Cpu',
    title: 'Estrategia Tecnológica',
    subtitle: 'Tu Tecnología, Por Fin Trabajando Para Ti',
    description:
      'Alineamos tu tecnología con la estrategia del negocio: roadmap que prioriza automatización, implementación de IA y un stack que escala con tu crecimiento — sin gastar de más ni quedarte atrás.',
    category: 'inteligencia-digital',
    categoryBadge: 'Inteligencia Digital · Arquitectura de Capacidades Digitales',
    backgroundImage:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=90&w=2400&auto=format&fit=crop',
    backgroundAlt:
      'Equipo de trabajo en reunión de estrategia con tecnología y laptops en oficina moderna',
    breadcrumbs: [
      { label: 'Inicio', href: '/' },
      { label: 'Servicios', href: '/servicios' },
      { label: 'Inteligencia Digital', href: '/servicios/inteligencia-digital' },
      {
        label: 'Estrategia Tecnológica',
        href: '/servicios/inteligencia-digital/estrategia-tecnologica',
      },
    ],
  },

  targetProfile: {
    title: '¿Este Servicio es para Tu Empresa?',
    items: [
      'Compraste herramientas digitales pero cada área trabaja en su propia isla',
      'Tu equipo pierde horas en tareas repetitivas que podrían automatizarse',
      'Quieres implementar IA pero no sabes por dónde empezar ni qué priorizar',
      'Cada vez que quieres crecer, la tecnología es el cuello de botella',
      'Tu equipo IT apaga incendios en lugar de apalancar la estrategia del negocio',
      'Necesitas un roadmap claro: qué automatizar, qué integrar y en qué orden para crecer',
    ],
    idealProfile: {
      title: 'Perfil Ideal',
      description:
        'PYMEs de 20-500 empleados en Latinoamérica que quieren usar la tecnología para escalar: automatización, IA e integración alineadas a la estrategia de crecimiento.',
    },
  },

  problems: [
    {
      id: 'anarquia-tecnologica',
      icon: '🕸️',
      iconComponent: 'Network',
      title: 'Sistemas Desconectados que Frenan el Crecimiento',
      symptom:
        'Muchas herramientas sin integrar, datos duplicados y procesos manuales que consumen horas. La tecnología no escala cuando el negocio quiere crecer.',
      solution: [
        'Auditoría del ecosistema actual',
        'Arquitectura integrada que escale contigo',
        'Eliminación de redundantes y cuellos de botella',
      ],
    },
    {
      id: 'sin-automatizacion',
      icon: '⚡',
      iconComponent: 'Zap',
      title: 'Procesos Manuales que No Escalan',
      symptom:
        'El 60% del tiempo operativo en PYMEs LATAM se va en tareas repetitivas. Sin automatización, cada nuevo cliente o producto multiplica la carga.',
      solution: [
        'Identificación de procesos automatizables',
        'RPA e integraciones (APIs, flujos)',
        'Liberar tiempo del equipo para valor estratégico',
      ],
    },
    {
      id: 'ia-sin-estrategia',
      icon: '🤖',
      iconComponent: 'Bot',
      title: 'IA Sin Estrategia ni Prioridad',
      symptom:
        'El 46% de PYMEs en LATAM planea adoptar IA, pero la mayoría sin claridad sobre casos de uso, datos o ROI. La IA sin estrategia es gasto sin impacto.',
      solution: [
        'Mapa de casos de uso de IA alineados al negocio',
        'Priorización por impacto y viabilidad',
        'Pilotos medibles antes de escalar',
      ],
    },
    {
      id: 'sin-roadmap',
      icon: '🗺️',
      iconComponent: 'Route',
      title: 'Inversión TI Sin Hoja de Ruta',
      symptom:
        'Compras tecnología por urgencia o por el último proveedor. Sin roadmap, la inversión no apalanca el crecimiento ni la estrategia a 24 meses.',
      solution: [
        'Roadmap 24 meses alineado a la estrategia',
        'Priorización por ROI, crecimiento e impacto',
        'Business cases: automatización, IA, integración',
      ],
    },
  ],

  components: [
    {
      id: 'auditoria',
      icon: '🔍',
      iconComponent: 'ScanSearch',
      title: 'Tech Stack Audit',
      description: 'Radiografía de lo que tienes, cuesta y qué oportunidades hay para automatización, IA e integración.',
      includes: [
        {
          subtitle: 'Qué analizamos',
          items: [
            'Inventario de sistemas, apps y licencias activas',
            'Flujos y procesos candidatos a automatización',
            'Datos y madurez para casos de uso de IA',
            'Score de madurez digital FORJA® con benchmark LATAM',
          ],
        },
      ],
      deliverables: [
        'Informe de Auditoría Tecnológica',
        'Mapa visual del ecosistema actual',
        'Oportunidades de automatización e IA priorizadas',
        'Lista de quick wins para crecimiento',
      ],
    },
    {
      id: 'arquitectura',
      icon: '🏗️',
      iconComponent: 'Layers',
      title: 'Arquitectura Tecnológica Target',
      description: 'Cómo debe verse tu ecosistema en 24 meses para apalancar la estrategia y el crecimiento.',
      includes: [
        {
          subtitle: 'Qué diseñamos',
          items: [
            'Stack recomendado: integración, automatización y capacidades IA',
            'Modelo de integración entre sistemas (APIs, middleware)',
            'Estrategia cloud y escalabilidad',
            'Selección de ERP, CRM y plataformas core que escalen',
          ],
        },
      ],
      deliverables: [
        'Blueprint de Arquitectura Tecnológica Target',
        'Diagramas del ecosistema futuro',
        'Comparativa de proveedores con recomendación',
        'Modelo de integración y automatización',
      ],
    },
    {
      id: 'roadmap',
      icon: '🗺️',
      iconComponent: 'Route',
      title: 'Roadmap Tecnológico 24M',
      description: 'Plan ejecutable: qué automatizar, qué integrar, cuándo evaluar IA y en qué orden para crecer.',
      includes: [
        {
          subtitle: 'Qué construimos',
          items: [
            'Portafolio priorizado: automatización, integración, IA, por ROI e impacto',
            'Timeline 24 meses con fases y dependencias',
            'Business case por iniciativa (incl. pilotos de IA)',
            'Governance TI alineada a la estrategia del negocio',
          ],
        },
      ],
      deliverables: [
        'Roadmap visual 24 meses',
        'Business cases con ROI por iniciativa',
        'Presupuesto tecnológico por fase',
        'Manual de Governance de TI',
      ],
    },
    {
      id: 'automatizacion-ia',
      icon: '🤖',
      iconComponent: 'Bot',
      title: 'Automatización e IA Aplicada',
      description: 'Identificamos procesos automatizables y casos de uso de IA que apalancan tu estrategia sin sobredimensionar.',
      includes: [
        {
          subtitle: 'Qué priorizamos',
          items: [
            'Procesos repetitivos candidatos a RPA o integraciones',
            'Casos de uso de IA alineados a tu industria y datos',
            'Pilotos de automatización e IA con métricas de éxito',
            'Criterios de escalamiento y gobernanza',
          ],
        },
      ],
      deliverables: [
        'Mapa de procesos y oportunidades de automatización',
        'Mapa de casos de uso de IA priorizados',
        'Diseño de 1-2 pilotos con KPIs',
        'Recomendaciones de herramientas y proveedores',
      ],
    },
    {
      id: 'acompanamiento',
      icon: '🚀',
      iconComponent: 'Rocket',
      title: 'Acompañamiento en Implementación',
      description: 'Contigo durante la ejecución del roadmap: integración, automatización e implementación de iniciativas clave.',
      includes: [
        {
          subtitle: 'Cómo acompañamos',
          items: [
            'PMO externo para el portafolio de proyectos TI',
            'Supervisión de integraciones y proyectos de automatización',
            'Reuniones quincenales con el equipo directivo',
            'Capacitación y transferencia al equipo interno',
          ],
        },
      ],
      deliverables: [
        'Dashboard de seguimiento de implementación',
        'Reportes ejecutivos mensuales',
        'Documentación técnica de sistemas',
        'Plan de sostenibilidad post-implementación',
      ],
    },
  ],

  methodology: [],

  caseStudy: {
    company: {
      name: 'Grupo Comercial Andes S.A.S.*',
      industry: 'Comercio y Distribución',
      size: '85 empleados',
      location: 'Bogotá, Colombia',
    },
    challenge:
      'Operaban con 7 sistemas desconectados gastando USD $4.200/mes. El 40% del tiempo administrativo se iba en conciliar datos; la información de ventas llegaba con 72 horas de retraso y no había espacio para escalar sin multiplicar la operación.',
    solution:
      'Estrategia Tecnológica en 6 meses: consolidamos 7 sistemas en 3 plataformas integradas, automatizamos conciliación y reportes, migramos a cloud híbrida y definimos el roadmap para los primeros pilotos de IA en atención al cliente.',
    results: {
      before: [
        { label: 'Costo mensual de TI', value: 'USD $4.200' },
        { label: 'Tiempo en conciliación', value: '40% del día' },
        { label: 'Retraso en datos de ventas', value: '72 horas' },
        { label: 'Procesos automatizados', value: '0' },
      ],
      after: [
        { label: 'Costo mensual de TI', value: 'USD $2.800 (-33%)' },
        { label: 'Tiempo en conciliación', value: '5% del día' },
        { label: 'Retraso en datos de ventas', value: 'Tiempo real' },
        { label: 'Procesos automatizados', value: '12 flujos' },
      ],
    },
    testimonial: {
      quote:
        'Por primera vez en 18 años, nuestra tecnología trabaja para nosotros, no al revés. El Roadmap de FORJA nos dio claridad sobre qué automatizar, qué integrar y en qué orden para crecer.',
      author: 'Andrés Rodríguez',
      position: 'Gerente General, Grupo Comercial Andes SAS',
    },
  },

  cta: {
    primary: {
      title: 'Diagnóstico Tecnológico GRATIS',
      description: 'Identificamos brechas y oportunidades: automatización, IA e integración para apalancar tu crecimiento.',
      buttonText: 'Solicitar Diagnóstico GRATIS',
      buttonLink: '/contacto',
      icon: '🔍',
    },
    secondary: {
      title: 'Habla con un Especialista',
      description: '30 min sin compromiso. Estrategia práctica para que la tecnología escale contigo.',
      buttonText: 'Agendar Llamada Estratégica',
      buttonLink: '/contacto',
      icon: '💬',
    },
  },
}
