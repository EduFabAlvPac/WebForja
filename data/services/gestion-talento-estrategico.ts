import { ServicePageData } from '@/types/services'

export const gestionTalentoEstrategicoData: ServicePageData = {
  hero: {
    eyebrow: '👥 Servicio de Consultoría Especializada',
    icon: 'Users',
    title: 'Gestión de Talento Estratégico',
    subtitle: 'Equipos alineados, productivos y comprometidos con la estrategia',
    description: 'Convierte tu capital humano en ventaja competitiva sostenible mediante gestión por competencias, cultura organizacional y desarrollo integral. El talento es tu activo más valioso, pero también el más complejo de gestionar. Diseñamos sistemas de gestión de talento que convierten equipos reactivos en organizaciones de alto rendimiento.',
    category: 'Talento & Finanzas',
    breadcrumbs: [
      { label: 'Inicio', href: '/' },
      { label: 'Servicios', href: '/servicios' },
      { label: 'Talento & Finanzas', href: '/servicios/talento-finanzas' },
      { label: 'Gestión de Talento Estratégico', href: '/servicios/talento-finanzas/gestion-talento-estrategico' }
    ],
    backgroundImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
    backgroundAlt: 'Equipo profesional colaborando en estrategia de talento'
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
      title: 'Perfil de Empresas Ideales',
      description: 'CEOs, Directores de RRHH y Gerentes Generales de empresas de 30-200 empleados en crecimiento o transformación, donde el talento es crítico para la operación.'
    }
  },

  problems: [
    {
      id: 'rotacion-alta',
      icon: '🔥',
      iconComponent: 'Flame',
      title: 'Rotación Alta de Personal Clave',
      symptom: 'Cada año perdemos 2-3 personas críticas que se llevan conocimiento operacional. Cada salida nos cuesta 6 meses de productividad perdida mientras entrenamos reemplazos.',
      solution: [
        'Identificación de posiciones críticas y planes de sucesión',
        'Análisis de causas de rotación (entrevistas de salida estructuradas)',
        'Diseño de planes de carrera y desarrollo',
        'Estrategia de compensación competitiva y beneficios',
        'Programa de reconocimiento y engagement'
      ]
    },
    {
      id: 'brecha-competencias',
      icon: '💡',
      iconComponent: 'Lightbulb',
      title: 'Brecha de Competencias para Estrategia',
      symptom: 'Nuestra estrategia requiere capacidades digitales, analíticas y de innovación que nuestro equipo actual no tiene. No sabemos si desarrollar, contratar o externalizar.',
      solution: [
        'Identificación de competencias necesarias para estrategia futura',
        'Evaluación de brecha de competencias (GAP Analysis)',
        'Estrategia make vs buy (desarrollar vs contratar)',
        'Planes de desarrollo por rol crítico',
        'Roadmap de capacitación y upskilling'
      ]
    },
    {
      id: 'bajo-desempeno',
      icon: '📉',
      iconComponent: 'TrendingDown',
      title: 'Bajo Desempeño y Productividad',
      symptom: 'Algunos equipos son altamente productivos, otros no tanto. No tenemos forma objetiva de medir desempeño ni de identificar quién necesita apoyo vs quién merece promoción.',
      solution: [
        'Definición de KPIs de desempeño por rol',
        'Sistema de evaluación objetivo (360°, OKRs, etc.)',
        'Proceso de feedback continuo (no solo anual)',
        'Planes de mejora de desempeño (PIP)',
        'Conexión de desempeño individual con compensación'
      ]
    },
    {
      id: 'cultura-debil',
      icon: '🤝',
      iconComponent: 'Handshake',
      title: 'Cultura Organizacional Débil o Tóxica',
      symptom: 'Los equipos trabajan en silos, hay poca colaboración. La cultura no está definida o existe cultura tóxica que genera conflictos y afecta clima laboral.',
      solution: [
        'Diagnóstico de cultura actual (encuestas, focus groups)',
        'Definición de valores y comportamientos deseados',
        'Plan de cambio cultural con iniciativas concretas',
        'Programa de embajadores de cultura',
        'Medición continua de clima organizacional'
      ]
    },
    {
      id: 'rrhh-administrativo',
      icon: '📋',
      iconComponent: 'ClipboardList',
      title: 'RRHH Administrativo, No Estratégico',
      symptom: 'El área de RRHH solo procesa nómina y contratos. No hay estrategia de talento, no hay desarrollo, no hay métricas de capital humano que apoyen decisiones del negocio.',
      solution: [
        'Rediseño del modelo de RRHH (operativo + estratégico)',
        'Implementación de HRIS (sistema de gestión de RRHH)',
        'Dashboard de People Analytics (métricas de talento)',
        'Upskilling del equipo de RRHH en gestión estratégica',
        'Alineación de estrategia de talento con estrategia de negocio'
      ]
    }
  ],

  components: [
    {
      id: 'modelo-competencias',
      icon: '📋',
      iconComponent: 'ClipboardList',
      title: 'Modelo de Competencias y Perfiles de Cargo',
      description: 'Diseño del modelo de competencias organizacionales (técnicas, conductuales y estratégicas) y definición detallada de perfiles de cargo para todas las posiciones clave de la empresa.',
      includes: [
        {
          subtitle: 'Diseño de Modelo de Competencias',
          items: [
            'Identificación de competencias core organizacionales',
            'Definición de competencias por familia de cargos',
            'Niveles de dominio por competencia (básico, intermedio, avanzado, experto)',
            'Diccionario de competencias (definición + comportamientos observables)',
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
      description: 'Implementación de sistema objetivo de evaluación y gestión del desempeño individual y de equipos, conectado con desarrollo, compensación y planes de carrera.',
      includes: [
        {
          subtitle: 'Diseño del Sistema',
          items: [
            'Definición de metodología de evaluación (360°, OKRs, Balanced Scorecard, MBO)',
            'KPIs de desempeño por rol (cuantitativos + cualitativos)',
            'Escalas de calificación y criterios de evaluación',
            'Proceso de evaluación (frecuencia, responsables, flujo)',
            'Conexión de desempeño con compensación y desarrollo'
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
      description: 'Diseño e implementación de programas de capacitación y desarrollo alineados con brechas de competencias identificadas y estrategia de negocio.',
      includes: [
        {
          subtitle: 'Estrategia de Capacitación',
          items: [
            'Identificación de necesidades de capacitación (por brecha de competencias)',
            'Priorización de programas según impacto en negocio',
            'Diseño de ruta de aprendizaje por rol',
            'Definición de metodologías (presencial, online, blended, on-the-job)',
            'Presupuesto de capacitación y ROI esperado'
          ]
        },
        {
          subtitle: 'Programas de Desarrollo',
          items: [
            'Programa de inducción y onboarding',
            'Capacitación técnica especializada',
            'Desarrollo de habilidades blandas (liderazgo, comunicación, trabajo en equipo)',
            'Programa de mentoring y coaching',
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
      iconComponent: 'Palette',
      title: 'Cultura Organizacional y Engagement',
      description: 'Diseño e implementación de programa de transformación cultural que alinea valores, comportamientos y prácticas organizacionales con la estrategia de negocio.',
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
            'Integración de cultura en procesos de RRHH (selección, inducción, evaluación)',
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
      description: 'Rediseño de la estructura organizacional para optimizar eficiencia, clarificar responsabilidades y preparar la organización para crecimiento escalable.',
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
        'Organigrama Objetivo (3 versiones: corto, mediano, largo plazo)',
        'Matriz RACI por Proceso Crítico',
        'Manual de Roles y Responsabilidades',
        'Plan de Transición Organizacional',
        'Comunicados y Toolkit de Cambio'
      ]
    },
    {
      id: 'atraccion-seleccion',
      icon: '🎯',
      iconComponent: 'Target',
      title: 'Atracción, Selección y Onboarding',
      description: 'Diseño e implementación de procesos profesionales de reclutamiento, selección por competencias y onboarding estructurado para garantizar fit cultural y técnico desde el día 1.',
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
    challenge: 'Rotación anual de 35% (promedio industria: 20%). 70% de contrataciones urgentes por salidas inesperadas. Dependencia total de 3 socios fundadores. Sin planes de carrera ni desarrollo estructurado. Evaluación de desempeño subjetiva (sin criterios claros). Clima laboral deteriorado (eNPS de 12).',
    solution: 'Implementamos transformación completa de gestión de talento: diseño de modelo de competencias (8 competencias core), definición de 15 perfiles de cargo estructurados, sistema de evaluación 360° + OKRs, programa de desarrollo de consultores jr → sr, y estrategia de compensación competitiva. Establecimos programa de mentoring (1 senior por cada 2 juniors) y planes de carrera claros (3 niveles).',
    results: {
      before: [
        { label: 'Rotación anual', value: '35%' },
        { label: 'eNPS (engagement)', value: '12' },
        { label: 'Tiempo de contratación', value: '45 días' },
        { label: 'Retención top talent', value: '60%' },
        { label: 'Productividad ($/empl.)', value: 'Baseline' },
        { label: 'Promociones internas', value: '0' }
      ],
      after: [
        { label: 'Rotación anual', value: '12%' },
        { label: 'eNPS (engagement)', value: '62' },
        { label: 'Tiempo de contratación', value: '25 días' },
        { label: 'Retención top talent', value: '92%' },
        { label: 'Productividad ($/empl.)', value: '+28%' },
        { label: 'Promociones internas', value: '8' }
      ]
    },
    testimonial: {
      quote: 'Antes perdíamos talento clave cada año y nos tomaba 6 meses entrenar reemplazos. FORJA nos ayudó a crear un sistema de gestión de talento profesional: ahora la gente quiere quedarse, sabe hacia dónde puede crecer y tenemos un pipeline interno de futuros líderes. Transformó completamente nuestra capacidad de retener y desarrollar talento.',
      author: 'Juan Carlos Ramírez',
      position: 'Socio Director'
    },
    downloadLink: '/casos-exito/firma-consultoria-auditoria.pdf'
  },

  cta: {
    primary: {
      title: 'Diagnóstico Gratuito de Gestión de Talento',
      description: 'Solicita tu Evaluación de Madurez de Talento sin costo',
      buttonText: 'Solicitar Evaluación GRATIS',
      buttonLink: '/contacto',
      icon: 'Search'
    },
    secondary: {
      title: 'Consulta con Especialista en Talento',
      description: 'Agenda 30 minutos con nuestro experto en gestión de talento',
      buttonText: 'Agendar Llamada Estratégica',
      buttonLink: '/contacto',
      icon: 'Phone'
    }
  }
}
