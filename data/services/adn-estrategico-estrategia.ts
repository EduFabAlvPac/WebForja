import { ServicePageData } from '@/types/services'

export const adnEstrategicoEstrategiaData: ServicePageData = {
  hero: {
    eyebrow: 'ADN Estratégico',
    icon: 'Target',
    title: 'Estrategia',
    subtitle: 'Construimos el mapa desde donde estás hasta donde podemos llegar',
    description:
      'Definimos el rumbo, las reglas de juego y la permanencia de tu empresa. Visión, planificación estratégica y modelo de negocio alineados a un propósito claro.',
    category: 'adn-estrategico',
    backgroundImage:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    backgroundAlt: 'Equipo de liderazgo en reunión de estrategia colaborativa',
    breadcrumbs: [
      { label: 'Inicio', href: '/' },
      { label: 'Servicios', href: '/servicios' },
      { label: 'ADN Estratégico', href: '/servicios/adn-estrategico' },
      {
        label: 'Estrategia',
        href: '/servicios/adn-estrategico/estrategia',
      },
    ],
  },

  targetProfile: {
    title: '¿Este servicio es para tu empresa?',
    items: [
      'Tienes una visión intuitiva pero no un mapa claro para ejecutarla',
      'El equipo directivo no está alineado sobre hacia dónde va la empresa',
      'Necesitas replantear el modelo de negocio ante nuevos competidores o mercados',
      'Quieres definir las reglas de juego antes de escalar o abrir nuevos frentes',
      'La estrategia existe en documentos que nadie usa ni actualiza',
      'Buscas propósito y orden: rumbo claro y decisiones coherentes con él',
    ],
    idealProfile: {
      title: 'Perfil ideal',
      description:
        'Empresas y PYMEs que quieren consolidar su arquitectura de negocio: dirección clara, gobierno y sostenibilidad. Desde fundadores que escalan hasta equipos que necesitan realinear.',
    },
  },

  problems: [
    {
      id: 'vision-difusa',
      icon: '🧭',
      iconComponent: 'Compass',
      title: 'Visión difusa',
      symptom:
        'El rumbo se decide en reuniones de reacción, no en un marco estratégico. Cada área tira para su lado y no hay una brújula compartida.',
      solution: [
        'Definición de visión, misión y valores operativos',
        'Objetivos estratégicos claros y comunicados',
        'Brújula para la toma de decisiones',
      ],
    },
    {
      id: 'modelo-desalineado',
      icon: '📐',
      iconComponent: 'Layout',
      title: 'Modelo de negocio desalineado',
      symptom:
        'El modelo que tienes en la cabeza no coincide con la operación ni con lo que el mercado valora. Creces sin foco o te cuesta priorizar.',
      solution: [
        'Canvas de modelo de negocio actualizado',
        'Validación con clientes y mercado',
        'Priorización de iniciativas por impacto',
      ],
    },
    {
      id: 'plan-en-cajon',
      icon: '📋',
      iconComponent: 'FileText',
      title: 'Plan estratégico en el cajón',
      symptom:
        'Hay un plan, pero no se usa. No está traducido a metas por equipo ni a indicadores que la dirección revise con frecuencia.',
      solution: [
        'Plan estratégico ejecutable (24-36 meses)',
        'Cascada de objetivos por área',
        'Ritmo de revisión y ajuste (trimestral)',
      ],
    },
    {
      id: 'sin-reglas',
      icon: '⚖️',
      iconComponent: 'Scale',
      title: 'Reglas de juego poco claras',
      symptom:
        'No está definido qué se prioriza, cómo se asignan recursos ni qué comportamientos se premian. La cultura y la estrategia se contradicen.',
      solution: [
        'Reglas de decisión y priorización explícitas',
        'Alineación cultura–estrategia',
        'Permanencia y consistencia del rumbo',
      ],
    },
  ],

  components: [
    {
      id: 'diagnostico-estrategico',
      icon: '🔍',
      iconComponent: 'ScanSearch',
      title: 'Diagnóstico Estratégico',
      description:
        'Radiografía de dónde estás: visión actual, alineación del equipo, brechas entre modelo de negocio y realidad.',
      includes: [
        {
          subtitle: 'Qué analizamos',
          items: [
            'Claridad y uso real de visión, misión y valores',
            'Alineación del equipo directivo con el rumbo',
            'Conexión modelo de negocio – operación – mercado',
          ],
        },
      ],
      deliverables: [
        'Informe de Diagnóstico Estratégico',
        'Mapa de brechas y oportunidades',
        'Recomendaciones priorizadas',
      ],
    },
    {
      id: 'mapa-estrategico',
      icon: '🗺️',
      iconComponent: 'Map',
      title: 'Mapa Estratégico',
      description:
        'Desde donde estás hasta donde quieres llegar: visión a 3-5 años, pilares estratégicos y objetivos clave.',
      includes: [
        {
          subtitle: 'Qué construimos',
          items: [
            'Visión y pilares estratégicos',
            'Objetivos estratégicos (OKRs o similar)',
            'Narrativa que el equipo pueda contar',
          ],
        },
      ],
      deliverables: [
        'Mapa Estratégico (visual y documento)',
        'Objetivos por horizonte temporal',
        'Guía de comunicación interna',
      ],
    },
    {
      id: 'modelo-de-negocio',
      icon: '📐',
      iconComponent: 'Layout',
      title: 'Modelo de Negocio',
      description:
        'Canvas y validación: propuesta de valor, segmentos, canales y fuentes de ingreso alineados a la estrategia.',
      includes: [
        {
          subtitle: 'Qué definimos',
          items: [
            'Canvas de modelo de negocio actualizado',
            'Validación con clientes y datos',
            'Escenarios de evolución (crecimiento, nuevos mercados)',
          ],
        },
      ],
      deliverables: [
        'Canvas de Modelo de Negocio',
        'Informe de validación',
        'Opciones estratégicas priorizadas',
      ],
    },
    {
      id: 'plan-ejecucion',
      icon: '🎯',
      iconComponent: 'Target',
      title: 'Plan de Ejecución',
      description:
        'Traducción del mapa a iniciativas, responsables y métricas. Ritmo de revisión para que el plan viva.',
      includes: [
        {
          subtitle: 'Qué entregamos',
          items: [
            'Plan 24-36 meses con hitos y dependencias',
            'Cascada de objetivos por área',
            'Dashboard de seguimiento estratégico',
          ],
        },
      ],
      deliverables: [
        'Plan Estratégico ejecutable',
        'Fichas de iniciativas prioritarias',
        'Protocolo de revisión trimestral',
      ],
    },
  ],

  methodology: [
    {
      phase: 1,
      title: 'Donde estás',
      tagline: 'Diagnóstico y punto de partida',
      description: 'Entendemos tu realidad actual: visión, alineación, modelo de negocio y brechas.',
    },
    {
      phase: 2,
      title: 'Donde quieres estar',
      tagline: 'Visión y mapa a 3-5 años',
      description: 'Construimos el mapa estratégico y los pilares que guían las decisiones.',
    },
    {
      phase: 3,
      title: 'El camino',
      tagline: 'Plan y priorización',
      description: 'Traducimos el mapa en plan ejecutable, iniciativas e indicadores.',
    },
    {
      phase: 4,
      title: 'Llegar',
      tagline: 'Ejecución y revisión',
      description: 'Acompañamos el ritmo de revisión para que el plan se cumpla y se ajuste.',
    },
  ],

  caseStudy: {
    company: {
      name: 'Grupo Industrial del Pacífico S.A.S.*',
      industry: 'Manufactura y distribución',
      size: '120 empleados',
      location: 'Cali, Colombia',
    },
    challenge:
      'Tenían tres unidades de negocio con estrategias implícitas y a veces contradictorias. La junta pedía un plan claro; el equipo no sabía qué priorizar.',
    solution:
      'Construimos el mapa estratégico desde diagnóstico compartido hasta plan a 36 meses con OKRs por unidad. Instalamos un ritmo trimestral de revisión que la dirección ya no abandona.',
    results: {
      before: [
        { label: 'Documentos de estrategia', value: '3, desconectados' },
        { label: 'Alineación directiva (encuesta)', value: '42%' },
        { label: 'Revisión formal del plan', value: '1 vez al año' },
      ],
      after: [
        { label: 'Mapa estratégico unificado', value: '1, vivo' },
        { label: 'Alineación directiva (encuesta)', value: '89%' },
        { label: 'Revisión formal del plan', value: 'Trimestral' },
      ],
    },
    testimonial: {
      quote:
        'Por primera vez tenemos un mapa que todos entienden y usamos. No es un PDF en un cajón: es la brújula de cada reunión importante.',
      author: 'María Fernanda López',
      position: 'CEO, Grupo Industrial del Pacífico SAS',
    },
  },

  cta: {
    primary: {
      title: 'Construir mi mapa',
      description:
        'Sesión de 90 minutos: diagnóstico inicial y esbozo del mapa desde donde estás hasta donde quieres llegar.',
      buttonText: 'Agendar sesión estratégica',
      buttonLink: '/contacto',
      icon: '🗺️',
    },
    secondary: {
      title: 'Hablar con un consultor',
      description: '30 min para entender tu situación y cómo podemos ayudarte.',
      buttonText: 'Hablar con un consultor',
      buttonLink: '/contacto',
      icon: '💬',
    },
  },
}
