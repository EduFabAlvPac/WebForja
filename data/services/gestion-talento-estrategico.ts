import { ServicePageData } from '@/types/services'

export const gestionTalentoData: ServicePageData = {
  hero: {
    eyebrow: 'Servicio de Consultoría Especializada',
    icon: 'Users',
    title: 'Gestión de Talento Estratégico',
    subtitle: 'Convierte tu capital humano en ventaja competitiva sostenible',
    description: 'El talento es tu activo más valioso, pero también el más complejo de gestionar. No basta con contratar bien: necesitas desarrollar capacidades, retener personas clave, crear cultura de alto desempeño y alinear cada colaborador con los objetivos estratégicos del negocio. Diseñamos sistemas de gestión de talento que convierten equipos reactivos en organizaciones de alto rendimiento.',
    category: 'Talento & Finanzas',
    breadcrumbs: [
      { label: 'Inicio', href: '/' },
      { label: 'Servicios', href: '/servicios' },
      { label: 'Talento & Finanzas', href: '/servicios/talento-finanzas' },
      { label: 'Gestión de Talento Estratégico', href: '/servicios/talento-finanzas/gestion-talento-estrategico' }
    ],
    backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca8849d1?q=80&w=2070&auto=format&fit=crop',
    backgroundAlt: 'Equipo de trabajo colaborando en estrategia de talento'
  },

  targetProfile: {
    title: '¿Este Servicio es para Tu Empresa?',
    items: [
      'Tu empresa crece pero no encuentras talento adecuado para nuevas posiciones',
      'Alta rotación de personal clave afecta continuidad operacional',
      'Los equipos están desmotivados o no entienden hacia dónde va la empresa',
      'No tienes claridad de qué competencias necesitas para tu estrategia futura',
      'El desempeño de los equipos es inconsistente y difícil de medir',
      'Necesitas profesionalizar la gestión de RRHH más allá de nómina y contratos'
    ],
    idealProfile: {
      title: 'Perfil Ideal',
      description: 'CEOs, Directores de RRHH, Gerentes Generales de empresas de 30-200 empleados. Organizaciones en crecimiento o transformación donde el talento es crítico para la operación.'
    }
  },

  problems: [
    {
      id: 'rotacion-alta',
      icon: '🔥',
      iconComponent: 'UserX',
      title: 'Rotación Alta que Destruye Conocimiento',
      symptom: 'Cada año perdemos 2-3 personas críticas que se llevan conocimiento operacional. Cada salida nos cuesta 6 meses de productividad perdida mientras entrenamos reemplazos.',
      solution: [
        'Identificación de posiciones críticas y planes de sucesión',
        'Análisis de causas raíz de rotación con entrevistas estructuradas',
        'Diseño de planes de carrera y desarrollo claros',
        'Estrategia de retención de talento clave',
        'Programa de reconocimiento y engagement personalizado'
      ]
    },
    {
      id: 'brecha-competencias',
      icon: '💡',
      iconComponent: 'Brain',
      title: 'Brecha de Competencias para el Futuro',
      symptom: 'Nuestra estrategia requiere capacidades digitales, analíticas y de innovación que nuestro equipo actual no tiene. No sabemos si desarrollar, contratar o externalizar.',
      solution: [
        'Identificación de competencias necesarias para estrategia futura',
        'Evaluación de brecha de competencias (GAP Analysis)',
        'Estrategia make vs buy (desarrollar vs contratar)',
        'Planes de desarrollo personalizados por rol crítico',
        'Roadmap de capacitación y upskilling estratégico'
      ]
    },
    {
      id: 'bajo-desempeno',
      icon: '📉',
      iconComponent: 'TrendingDown',
      title: 'Desempeño Inconsistente sin Métricas Claras',
      symptom: 'Algunos equipos son altamente productivos, otros no tanto. No tenemos forma objetiva de medir desempeño ni de identificar quién necesita apoyo vs quién merece promoción.',
      solution: [
        'Definición de KPIs de desempeño por rol',
        'Sistema de evaluación 360° objetivo',
        'Proceso de feedback continuo (no solo anual)',
        'Planes de mejora de desempeño (PIP)',
        'Conexión de desempeño individual con desarrollo y reconocimiento'
      ]
    },
    {
      id: 'cultura-debil',
      icon: '🤝',
      iconComponent: 'Users2',
      title: 'Cultura Débil y Falta de Engagement',
      symptom: 'Los equipos trabajan en silos, hay poca colaboración. La cultura no está definida o existe ambiente tóxico que genera conflictos y afecta el clima laboral.',
      solution: [
        'Diagnóstico de cultura actual con encuestas y focus groups',
        'Definición de valores y comportamientos deseados',
        'Plan de transformación cultural con iniciativas concretas',
        'Programa de embajadores de cultura',
        'Medición continua de engagement y clima organizacional'
      ]
    },
    {
      id: 'rrhh-administrativo',
      icon: '📋',
      iconComponent: 'ClipboardList',
      title: 'RRHH Administrativo, No Estratégico',
      symptom: 'El área de RRHH solo procesa nómina y contratos. No hay estrategia de talento, no hay desarrollo, no hay métricas que apoyen decisiones del negocio.',
      solution: [
        'Rediseño del modelo de RRHH (operativo + estratégico)',
        'Implementación de HRIS (sistema de gestión de RRHH)',
        'Dashboard de People Analytics con métricas clave',
        'Upskilling del equipo de RRHH en gestión estratégica',
        'Alineación de estrategia de talento con objetivos de negocio'
      ]
    },
    {
      id: 'contratacion-reactiva',
      icon: '🚨',
      iconComponent: 'AlertTriangle',
      title: 'Contratación Reactiva y Sin Estrategia',
      symptom: 'Solo contratamos cuando alguien renuncia o cuando ya estamos saturados. No hay planeación de talento ni pipeline de candidatos. Cada contratación es una emergencia.',
      solution: [
        'Planeación estratégica de headcount a 12 meses',
        'Proceso de reclutamiento profesional y estructurado',
        'Employer branding para atraer talento de calidad',
        'Pipeline de candidatos potenciales',
        'Programa de onboarding que acelera productividad'
      ]
    },
    {
      id: 'falta-liderazgo',
      icon: '👔',
      iconComponent: 'GraduationCap',
      title: 'Líderes Sin Habilidades de Gestión',
      symptom: 'Promovimos a nuestros mejores técnicos a líderes, pero no saben gestionar equipos. Hay micro-management, falta de delegación y equipos frustrados.',
      solution: [
        'Evaluación de competencias de liderazgo',
        'Programa de desarrollo de líderes',
        'Coaching individual para líderes clave',
        'Definición de modelo de liderazgo organizacional',
        'Sistema de feedback 360° para líderes'
      ]
    },
    {
      id: 'falta-carrera',
      icon: '🎯',
      iconComponent: 'Target',
      title: 'Sin Planes de Carrera Claros',
      symptom: 'La gente no sabe cómo crecer en la empresa. Los buenos talentos se van porque no ven futuro. No hay camino claro de junior a senior.',
      solution: [
        'Diseño de rutas de carrera por familia de cargos',
        'Definición de criterios de promoción objetivos',
        'Programa de desarrollo por nivel',
        'Sistema de mentoring interno',
        'Comunicación transparente de oportunidades'
      ]
    }
  ],

  components: [
    {
      id: 'modelo-competencias',
      icon: '📋',
      iconComponent: 'FileCheck2',
      title: 'Modelo de Competencias y Perfiles de Cargo',
      description: 'Diseño del modelo de competencias organizacionales y definición detallada de perfiles de cargo para todas las posiciones clave.',
      includes: [
        {
          subtitle: 'Diseño de Modelo de Competencias',
          items: [
            'Identificación de competencias core organizacionales',
            'Definición de competencias por familia de cargos',
            'Niveles de dominio por competencia (básico, intermedio, avanzado, experto)',
            'Diccionario de competencias con comportamientos observables',
            'Alineación de competencias con estrategia de negocio'
          ]
        },
        {
          subtitle: 'Diseño de Perfiles de Cargo',
          items: [
            'Levantamiento de información por cargo (entrevistas, observación)',
            'Definición de propósito del cargo',
            'Responsabilidades y funciones principales',
            'Competencias requeridas (técnicas + conductuales)',
            'Formación y experiencia necesaria',
            'Indicadores de desempeño del cargo',
            'Relaciones organizacionales (reporta a, supervisa a)'
          ]
        },
        {
          subtitle: 'Evaluación de Brechas',
          items: [
            'Evaluación de competencias actuales del equipo',
            'Identificación de brechas por persona y por área',
            'Priorización de brechas críticas',
            'Recomendaciones: desarrollar vs contratar vs externalizar'
          ]
        }
      ],
      deliverables: [
        'Manual de Competencias Organizacionales',
        'Diccionario de Competencias (con comportamientos observables)',
        'Perfiles de Cargo Documentados (15-30 perfiles según tamaño)',
        'Matriz de Competencias por Cargo',
        'Reporte de Brechas de Competencias',
        'Plan de Acción para Cerrar Brechas'
      ]
    },
    {
      id: 'gestion-desempeno',
      icon: '📊',
      iconComponent: 'BarChart3',
      title: 'Sistema de Gestión de Desempeño',
      description: 'Implementación de sistema objetivo de evaluación y gestión del desempeño individual y de equipos, conectado con desarrollo y planes de carrera.',
      includes: [
        {
          subtitle: 'Diseño del Sistema',
          items: [
            'Definición de metodología de evaluación (360°, OKRs, Balanced Scorecard)',
            'KPIs de desempeño por rol (cuantitativos + cualitativos)',
            'Escalas de calificación y criterios de evaluación',
            'Proceso de evaluación (frecuencia, responsables, flujo)',
            'Conexión de desempeño con desarrollo y reconocimiento'
          ]
        },
        {
          subtitle: 'Proceso de Evaluación',
          items: [
            'Diseño de formularios de evaluación',
            'Capacitación a evaluadores (calibración)',
            'Implementación de ciclo de evaluación',
            'Sesiones de feedback estructurado',
            'Planes de mejora de desempeño (PIP)'
          ]
        },
        {
          subtitle: 'Gestión del Talento',
          items: [
            'Matriz 9-Box (potencial vs desempeño)',
            'Identificación de high performers y high potentials',
            'Planes de desarrollo individuales (PDI)',
            'Planes de sucesión para posiciones críticas',
            'Estrategia de retención de talento clave'
          ]
        },
        {
          subtitle: 'Tecnología y Automatización',
          items: [
            'Selección e implementación de herramienta de gestión de desempeño',
            'Configuración de workflows y alertas',
            'Dashboards de desempeño para gerentes y RRHH',
            'Integración con HRIS (si existe)'
          ]
        }
      ],
      deliverables: [
        'Manual de Gestión de Desempeño',
        'Formularios de Evaluación por Rol',
        'Guía de Calibración para Evaluadores',
        'Matriz 9-Box con Clasificación de Talento',
        'Planes de Desarrollo Individual (PDI) para Top Talent',
        'Herramienta de Gestión de Desempeño Configurada',
        'Dashboard de People Analytics'
      ]
    },
    {
      id: 'desarrollo-capacitacion',
      icon: '🎓',
      iconComponent: 'GraduationCap',
      title: 'Desarrollo y Capacitación Estratégica',
      description: 'Diseño e implementación de programas de capacitación y desarrollo alineados con brechas de competencias y estrategia de negocio.',
      includes: [
        {
          subtitle: 'Estrategia de Capacitación',
          items: [
            'Identificación de necesidades de capacitación por brecha de competencias',
            'Priorización de programas según impacto en negocio',
            'Diseño de ruta de aprendizaje por rol',
            'Definición de metodologías (presencial, online, blended, on-the-job)',
            'Presupuesto de capacitación y ROI esperado'
          ]
        },
        {
          subtitle: 'Programas de Desarrollo',
          items: [
            'Programa de inducción y onboarding estructurado',
            'Capacitación técnica especializada por rol',
            'Desarrollo de habilidades blandas (liderazgo, comunicación, trabajo en equipo)',
            'Programa de mentoring y coaching interno',
            'Programa de desarrollo de líderes',
            'Certificaciones técnicas estratégicas'
          ]
        },
        {
          subtitle: 'Universidad Corporativa (opcional)',
          items: [
            'Diseño de modelo de universidad corporativa interna',
            'Catálogo de cursos y programas',
            'Plataforma LMS (Learning Management System)',
            'Sistema de certificación interna',
            'Medición de efectividad de capacitación'
          ]
        },
        {
          subtitle: 'Medición de Impacto',
          items: [
            'KPIs de capacitación (horas, cobertura, inversión)',
            'Evaluación de aprendizaje (reacción, conocimiento, aplicación, resultados)',
            'ROI de capacitación',
            'Seguimiento de mejora de desempeño post-capacitación'
          ]
        }
      ],
      deliverables: [
        'Plan Estratégico de Capacitación',
        'Rutas de Aprendizaje por Rol',
        'Programa de Onboarding Estructurado',
        'Catálogo de Programas de Desarrollo',
        'Plataforma LMS Configurada (si aplica)',
        'Dashboard de Capacitación y ROI'
      ]
    },
    {
      id: 'cultura-engagement',
      icon: '🎨',
      iconComponent: 'Heart',
      title: 'Cultura Organizacional y Engagement',
      description: 'Diseño e implementación de programa de transformación cultural que alinea valores, comportamientos y prácticas con la estrategia.',
      includes: [
        {
          subtitle: 'Diagnóstico de Cultura',
          items: [
            'Encuesta de clima organizacional',
            'Focus groups con diferentes niveles',
            'Entrevistas con líderes clave',
            'Análisis de prácticas y rituales actuales',
            'Identificación de cultura actual vs deseada'
          ]
        },
        {
          subtitle: 'Diseño de Cultura Objetivo',
          items: [
            'Definición de valores corporativos',
            'Comportamientos deseados por valor',
            'Propuesta de valor al empleado (EVP - Employee Value Proposition)',
            'Diseño de experiencia del empleado (Employee Experience)',
            'Narrativa cultural (storytelling)'
          ]
        },
        {
          subtitle: 'Programa de Cambio Cultural',
          items: [
            'Plan de comunicación interna',
            'Programa de embajadores de cultura',
            'Iniciativas de engagement (eventos, reconocimiento, beneficios)',
            'Integración de cultura en procesos de RRHH',
            'Quick wins para generar momentum'
          ]
        },
        {
          subtitle: 'Medición de Engagement',
          items: [
            'Encuestas periódicas de engagement (eNPS)',
            'Análisis de drivers de engagement',
            'Dashboard de clima organizacional',
            'Planes de acción por área según resultados'
          ]
        }
      ],
      deliverables: [
        'Reporte de Diagnóstico de Cultura',
        'Manual de Valores y Cultura Organizacional',
        'Propuesta de Valor al Empleado (EVP)',
        'Plan de Transformación Cultural (12 meses)',
        'Toolkit de Comunicación Interna',
        'Programa de Embajadores de Cultura',
        'Dashboard de Engagement'
      ]
    },
    {
      id: 'estructura-organizacional',
      icon: '🏗️',
      iconComponent: 'Building2',
      title: 'Estructura Organizacional y Diseño de Roles',
      description: 'Rediseño de la estructura organizacional para optimizar eficiencia, clarificar responsabilidades y preparar la organización para crecimiento.',
      includes: [
        {
          subtitle: 'Análisis de Estructura Actual',
          items: [
            'Mapeo de organigrama actual',
            'Análisis de carga de trabajo por área',
            'Identificación de redundancias y brechas',
            'Evaluación de niveles jerárquicos (span of control)',
            'Análisis de flujos de decisión y comunicación'
          ]
        },
        {
          subtitle: 'Diseño de Estructura Objetivo',
          items: [
            'Definición de modelo organizacional (funcional, matricial, por procesos)',
            'Diseño de organigrama objetivo',
            'Definición de áreas y departamentos',
            'Dimensionamiento de equipos (headcount por área)',
            'Niveles de reporte y autoridad'
          ]
        },
        {
          subtitle: 'Diseño de Roles y Gobernanza',
          items: [
            'Definición de roles clave (no solo cargos)',
            'Matriz RACI (responsabilidades)',
            'Comités de decisión y gobernanza',
            'Procesos de escalamiento',
            'Políticas de delegación de autoridad'
          ]
        },
        {
          subtitle: 'Plan de Transición',
          items: [
            'Roadmap de implementación de nueva estructura',
            'Gestión de cambio organizacional',
            'Comunicación a equipos',
            'Reasignación de responsabilidades',
            'Seguimiento y ajustes'
          ]
        }
      ],
      deliverables: [
        'Análisis de Estructura Actual',
        'Organigrama Objetivo (corto, mediano, largo plazo)',
        'Matriz RACI por Proceso Crítico',
        'Manual de Roles y Responsabilidades',
        'Plan de Transición Organizacional',
        'Comunicados y Toolkit de Cambio'
      ]
    },
    {
      id: 'reclutamiento-onboarding',
      icon: '🎯',
      iconComponent: 'Target',
      title: 'Atracción, Selección y Onboarding',
      description: 'Diseño e implementación de procesos profesionales de reclutamiento, selección por competencias y onboarding estructurado.',
      includes: [
        {
          subtitle: 'Proceso de Reclutamiento',
          items: [
            'Estrategia de employer branding (marca empleadora)',
            'Canales de reclutamiento optimizados',
            'Proceso de requisición de personal',
            'Estrategia de sourcing (activo vs pasivo)',
            'Herramientas de reclutamiento (ATS)'
          ]
        },
        {
          subtitle: 'Proceso de Selección',
          items: [
            'Entrevistas por competencias (guiones estructurados)',
            'Pruebas psicotécnicas y técnicas',
            'Assessment centers para posiciones clave',
            'Validación de referencias',
            'Propuesta de valor competitiva (oferta laboral)'
          ]
        },
        {
          subtitle: 'Programa de Onboarding',
          items: [
            'Plan de onboarding de 90 días',
            'Buddy system (asignación de mentor)',
            'Capacitación inicial (técnica + cultural)',
            'Integración con equipo',
            'Seguimiento de adaptación (check-ins 30-60-90 días)'
          ]
        },
        {
          subtitle: 'Métricas de Reclutamiento',
          items: [
            'Time to hire',
            'Cost per hire',
            'Quality of hire',
            'Tasa de retención en periodo de prueba',
            'Satisfacción de candidatos (candidate experience)'
          ]
        }
      ],
      deliverables: [
        'Estrategia de Employer Branding',
        'Manual de Reclutamiento y Selección',
        'Guiones de Entrevistas por Competencias',
        'Programa de Onboarding de 90 Días',
        'Herramienta ATS Configurada (si aplica)',
        'Dashboard de Métricas de Reclutamiento'
      ]
    }
  ],

  methodology: [
    {
      phase: 1,
      title: 'FUNDAMENTAR',
      tagline: 'Diagnosticamos el estado actual de tu gestión de talento',
      activities: [
        'Evaluación de madurez de gestión de RRHH',
        'Diagnóstico de cultura y clima organizacional',
        'Análisis de estructura organizacional actual',
        'Evaluación de competencias del equipo',
        'Identificación de brechas críticas de talento'
      ],
      deliverables: [
        'Reporte de Diagnóstico de Gestión de Talento',
        'Encuesta de Clima Organizacional (resultados)',
        'Matriz de Brechas de Competencias',
        'Análisis de Rotación y Retención'
      ]
    },
    {
      phase: 2,
      title: 'ORIENTAR',
      tagline: 'Diseñamos tu estrategia de talento alineada al negocio',
      activities: [
        'Diseño de modelo de competencias',
        'Definición de estructura organizacional objetivo',
        'Diseño de sistema de gestión de desempeño',
        'Plan estratégico de desarrollo y capacitación',
        'Roadmap de transformación de RRHH'
      ],
      deliverables: [
        'Estrategia de Talento (documento ejecutivo)',
        'Modelo de Competencias Organizacionales',
        'Organigrama Objetivo y Perfiles de Cargo',
        'Diseño de Sistema de Gestión de Desempeño',
        'Roadmap de Implementación (6-12 meses)'
      ]
    },
    {
      phase: 3,
      title: 'REDISEÑAR',
      tagline: 'Implementamos los nuevos sistemas y procesos de RRHH',
      activities: [
        'Implementación de sistema de gestión de desempeño',
        'Ejecución de programas de capacitación',
        'Lanzamiento de iniciativas de cultura y engagement',
        'Implementación de herramientas tecnológicas (HRIS, LMS)',
        'Capacitación a líderes y equipo de RRHH'
      ],
      deliverables: [
        'Sistema de Gestión de Desempeño Operando',
        'Programas de Capacitación Ejecutándose',
        'Herramientas de RRHH Implementadas',
        'Equipo de RRHH y Líderes Capacitados',
        'Documentación de Procesos de RRHH'
      ]
    },
    {
      phase: 4,
      title: 'JUSTIFICAR',
      tagline: 'Medimos el impacto en desempeño, clima y retención',
      activities: [
        'Medición de KPIs de talento (engagement, rotación, desempeño)',
        'Evaluación de mejora en clima organizacional',
        'Cálculo de ROI de programas de talento',
        'Benchmarking vs estado inicial',
        'Lecciones aprendidas y ajustes'
      ],
      deliverables: [
        'Dashboard de People Analytics Implementado',
        'Reporte de Impacto y ROI',
        'Encuesta de Clima Post-Implementación',
        'Recomendaciones de Mejora Continua'
      ]
    },
    {
      phase: 5,
      title: 'ACOMPAÑAR',
      tagline: 'Acompañamiento continuo para sostener la transformación',
      activities: [
        'Sesiones mensuales de revisión de indicadores de talento',
        'Soporte en ciclos de evaluación de desempeño',
        'Coaching a líderes de RRHH',
        'Actualización de herramientas y procesos',
        'Evolución de estrategia según crecimiento del negocio'
      ],
      deliverables: [
        'Sesiones mensuales con equipo de RRHH',
        'Soporte en gestión de talento crítico',
        'Coaching ejecutivo',
        'Actualizaciones de documentación'
      ]
    }
  ],

  caseStudy: {
    company: {
      name: 'Firma de Consultoría y Auditoría',
      industry: 'Servicios Profesionales',
      size: '45 empleados',
      location: 'Bogotá, Colombia'
    },
    challenge: 'Rotación anual del 35% de personal clave, 70% de contrataciones urgentes por salidas inesperadas, dependencia total de 3 socios fundadores, sin planes de carrera ni desarrollo estructurado, evaluación subjetiva de desempeño y clima laboral deteriorado (eNPS de 12).',
    solution: 'Implementamos sistema integral de gestión de talento: modelo de competencias con 8 competencias core, 15 perfiles de cargo estructurados, sistema de evaluación 360° + OKRs, programa de mentoring, upskilling técnico, planes de carrera con 3 niveles claros y herramienta de RRHH automatizada.',
    results: {
      before: [
        { label: 'Rotación anual', value: '35%' },
        { label: 'eNPS (engagement)', value: '12' },
        { label: 'Tiempo de contratación', value: '45 días' },
        { label: 'Retención top talent', value: '60%' },
        { label: 'Promociones internas', value: '0' }
      ],
      after: [
        { label: 'Rotación anual', value: '12%' },
        { label: 'eNPS (engagement)', value: '62' },
        { label: 'Tiempo de contratación', value: '25 días' },
        { label: 'Retención top talent', value: '92%' },
        { label: 'Promociones internas', value: '8' }
      ]
    },
    testimonial: {
      quote: 'Antes perdíamos talento clave cada año y nos tomaba 6 meses entrenar reemplazos. FORJA nos ayudó a crear un sistema de gestión de talento profesional: ahora la gente quiere quedarse, sabe hacia dónde puede crecer y tenemos un pipeline interno de futuros líderes. Transformó completamente nuestra capacidad de retener y desarrollar talento.',
      author: 'Juan Carlos Ramírez',
      position: 'Socio Director'
    },
    downloadLink: '/contacto'
  },

  cta: {
    primary: {
      title: 'Diagnóstico Gratuito de Gestión de Talento',
      description: 'Solicita tu Evaluación de Madurez Empresarial. Identificamos tus brechas críticas en gestión de talento y te damos recomendaciones prácticas.',
      buttonText: 'Evaluación de Madurez Empresarial',
      buttonLink: '/contacto',
      icon: 'Search'
    },
    secondary: {
      title: 'Consulta con Especialista en Talento',
      description: 'Agenda 30 minutos con uno de nuestros Forjadores especialistas en talento para analizar tus desafíos específicos.',
      buttonText: 'Habla con un Forjador',
      buttonLink: '/contacto',
      icon: 'Calendar'
    }
  }
}
