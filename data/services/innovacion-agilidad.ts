import { ServicePageData } from '@/types/services'

export const innovacionAgilidadData: ServicePageData = {
  hero: {
    eyebrow: 'Inteligencia Digital',
    icon: 'Rocket',
    title: 'Innovación y Agilidad',
    subtitle: 'Ideas que se Ejecutan, No que se Archivan',
    description:
      'Instalamos la capacidad de innovar y ejecutar rápido como músculo permanente de tu organización — no como un proyecto de 18 meses.',
    category: 'inteligencia-digital',
    categoryBadge: 'Inteligencia Digital · Arquitectura de Capacidades Digitales',
    backgroundImage:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
    backgroundAlt:
      'Equipo dinámico trabajando con metodologías ágiles en tableros colaborativos',
    breadcrumbs: [
      { label: 'Inicio', href: '/' },
      { label: 'Servicios', href: '/servicios' },
      { label: 'Inteligencia Digital', href: '/servicios/inteligencia-digital' },
      {
        label: 'Innovación y Agilidad',
        href: '/servicios/inteligencia-digital/innovacion-agilidad',
      },
    ],
  },

  targetProfile: {
    title: '¿Este Servicio es para Tu Empresa?',
    items: [
      'Tienes ideas de mejora que nunca llegan a ejecutarse porque "no hay tiempo"',
      'Tus proyectos de innovación se convierten en documentos que nadie usa',
      'Cambiar algo en tu empresa tarda meses y al final no se sostiene',
      'Tu equipo reacciona a los problemas en lugar de anticiparlos',
      'La competencia lanza nuevos productos y tú sigues en comités de aprobación',
      'Sabes que debes transformarte pero no sabes por dónde empezar sin parar la operación',
    ],
    idealProfile: {
      title: 'Perfil Ideal',
      description:
        'PYMEs de 20-200 empleados con operaciones establecidas que quieren acelerar su capacidad de cambio sin poner en riesgo lo que ya funciona.',
    },
  },

  problems: [
    {
      id: 'cultura',
      icon: '💡',
      iconComponent: 'Lightbulb',
      title: 'Cultura de Innovación',
      symptom:
        'Sin un proceso estructurado, las ideas mueren en reuniones. El 92% de los ejecutivos considera la innovación una prioridad, pero solo el 14% está satisfecho con sus resultados (McKinsey).',
      solution: [
        'Design Thinking aplicado a tu contexto',
        'Sprints de ideación con el equipo',
        'Pipeline de ideas con criterios de validación',
      ],
    },
    {
      id: 'validacion',
      icon: '🧪',
      iconComponent: 'FlaskConical',
      title: 'Validación Rápida',
      symptom:
        'Las PYMEs invierten en soluciones antes de validar el problema. Un prototipo de 2 semanas cuesta 100x menos que un producto fallido de 6 meses.',
      solution: [
        'Lean Startup: Build-Measure-Learn',
        'MVP en 2-4 semanas, no en 6 meses',
        'Métricas de validación desde el día 1',
      ],
    },
    {
      id: 'escalamiento',
      icon: '🚀',
      iconComponent: 'Rocket',
      title: 'Escalamiento Controlado',
      symptom:
        'Solo el 8% de las PYMEs en LATAM tiene un proceso formal de I+D. Sin estructura de escala, los experimentos exitosos quedan como proyectos piloto para siempre.',
      solution: [
        'Framework de escala desde piloto a operación',
        'Governance de portafolio de innovación',
        'Transferencia al equipo operativo',
      ],
    },
    {
      id: 'ecosistema',
      icon: '🌐',
      iconComponent: 'Globe',
      title: 'Ecosistema Innovador',
      symptom:
        'El 15% de las PYMEs chilenas colabora activamente con universidades. En Colombia y Perú, menos del 9%. La innovación aislada genera menos resultados que la innovación en red.',
      solution: [
        'Mapeo de ecosistema: startups, academia, corporaciones',
        'Alianzas estratégicas de co-innovación',
        'Open Innovation adaptada al tamaño PYME',
      ],
    },
  ],

  components: [
    {
      id: 'agile-assessment',
      icon: '🔍',
      iconComponent: 'ScanSearch',
      title: 'Agile Assessment',
      description:
        'Diagnóstico de madurez ágil: cómo trabaja tu equipo hoy vs. cómo debería trabajar.',
      includes: [
        {
          subtitle: 'Entregables',
          items: [
            'Score de madurez ágil con benchmark LATAM',
            'Mapa de fricción: dónde se pierde velocidad',
            'Plan de transformación priorizado',
          ],
        },
      ],
      deliverables: [
        'Informe de Madurez Ágil',
        'Heatmap de fricción operativa',
        'Roadmap de implementación ágil',
      ],
    },
    {
      id: 'scrum-kanban',
      icon: '📋',
      iconComponent: 'LayoutGrid',
      title: 'Scrum & Kanban PYME',
      description:
        'Scrum y Kanban adaptados a equipos de 5-50 personas, sin la burocracia de las grandes consultoras.',
      includes: [
        {
          subtitle: 'Entregables',
          items: [
            'Tableros configurados y equipo entrenado',
            'Ceremonias ágiles activas (sprint, retro, review)',
            'Métricas de velocidad de equipo',
          ],
        },
      ],
      deliverables: [
        'Setup completo de tableros (Jira/Notion/Linear)',
        'Guía de ceremonias adaptada',
        'Métricas de velocidad del equipo',
      ],
    },
    {
      id: 'okrs',
      icon: '🎯',
      iconComponent: 'Target',
      title: 'OKRs Accionables',
      description:
        'Objetivos y Resultados Clave que conectan la estrategia con el trabajo diario de cada persona.',
      includes: [
        {
          subtitle: 'Entregables',
          items: [
            'OKRs corporativos y por equipo del trimestre',
            'Dashboard de seguimiento en tiempo real',
            'Ciclo de revisión trimestral instalado',
          ],
        },
      ],
      deliverables: [
        'Árbol de OKRs corporativos y por equipo',
        'Dashboard de OKRs en tiempo real',
        'Manual de gestión de OKRs',
      ],
    },
    {
      id: 'design-thinking',
      icon: '🎨',
      iconComponent: 'Pencil',
      title: 'Design Thinking',
      description:
        'Del problema del cliente a la solución validada en 5 fases: Empatiza, Define, Idea, Prototipa, Testea.',
      includes: [
        {
          subtitle: 'Entregables',
          items: [
            'Workshop de 2 días con tu equipo',
            'Prototipo validado con usuarios reales',
            'Decisión go/no-go basada en datos',
          ],
        },
      ],
      deliverables: [
        'Mapa de empatía del cliente',
        'Prototipo de baja fidelidad validado',
        'Informe de validación con usuarios',
      ],
    },
    {
      id: 'cultura-agil',
      icon: '🔄',
      iconComponent: 'RefreshCw',
      title: 'Cultura Ágil Sostenible',
      description:
        'Agilidad que se sostiene sin el consultor. Transferencia real de capacidades al equipo interno.',
      includes: [
        {
          subtitle: 'Entregables',
          items: [
            'Formación de Agile Champions internos',
            'Rituales de mejora continua instalados',
            'Playbook ágil de la empresa',
          ],
        },
      ],
      deliverables: [
        'Programa de formación de Agile Champions',
        'Playbook Ágil personalizado',
        'Plan de sostenibilidad 12 meses',
      ],
    },
  ],

  methodology: [],

  caseStudy: {
    company: {
      name: 'Laboratorio Químico del Norte S.A.S.*',
      industry: 'Manufactura especializada',
      size: '42 empleados',
      location: 'Medellín, Colombia',
    },
    challenge:
      'Empresa familiar de 28 años con procesos manuales y cultura reactiva. Habían intentado digitalizar 3 veces sin éxito. El equipo rechazaba los cambios porque "siempre falla lo nuevo". Perdían clientes ante competidores más ágiles.',
    solution:
      'Implementamos el programa completo en 4 meses: Design Thinking para rediseñar su proceso de cotización (Innovación), Kanban para gestión de pedidos con OKRs trimestrales (Agilidad), y un sprint de producto para lanzar su primer portal de clientes (Transformación).',
    results: {
      before: [
        { label: 'Tiempo de cotización', value: '5-7 días' },
        { label: 'Proyectos activos en paralelo', value: '3 máximo' },
        { label: 'Ideas implementadas al año', value: '1-2' },
        { label: 'Satisfacción del equipo', value: '52/100' },
      ],
      after: [
        { label: 'Tiempo de cotización', value: '4 horas (-85%)' },
        { label: 'Proyectos activos en paralelo', value: '11 sin caos' },
        { label: 'Ideas implementadas al año', value: '18 (+900%)' },
        { label: 'Satisfacción del equipo', value: '84/100 (+32pp)' },
      ],
    },
    testimonial: {
      quote:
        'En 28 años no habíamos logrado que el equipo abrazara un cambio. FORJA lo hizo en 4 meses porque no nos impuso una metodología — nos ayudó a construir la nuestra.',
      author: 'Gustavo Arango',
      position: 'Gerente General, Laboratorio Químico del Norte SAS',
    },
  },

  cta: {
    primary: {
      title: 'Sprint de Innovación GRATIS',
      description:
        'Sesión de 2 horas donde identificamos tu primera oportunidad de innovación y diseñamos el sprint para validarla en 2 semanas.',
      buttonText: 'Agendar Sprint GRATIS',
      buttonLink: '/contacto',
      icon: '🚀',
    },
    secondary: {
      title: 'Diagnóstico de Agilidad',
      description:
        'Evaluamos en 30 minutos dónde pierde velocidad tu equipo y qué cambiar primero.',
      buttonText: 'Agendar Diagnóstico',
      buttonLink: '/contacto',
      icon: '🎯',
    },
  },
}
