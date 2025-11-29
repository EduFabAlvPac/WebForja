/**
 * FORJA DIGITAL AE - Métricas y Claims Centralizados
 * 
 * Este archivo es la ÚNICA fuente de verdad para todas las métricas,
 * estadísticas y claims del sitio. Cualquier cambio aquí se refleja
 * automáticamente en todo el portal.
 * 
 * ⚠️ IMPORTANTE: NO duplicar estas métricas en otros archivos.
 * Siempre importar desde este módulo.
 */

export const siteMetrics = {
  // ============================================
  // MÉTRICAS PRINCIPALES DE LA EMPRESA
  // ============================================
  company: {
    name: 'FORJA DIGITAL AE',
    foundedYear: 2014,
    yearsInBusiness: new Date().getFullYear() - 2014,
    tagline: 'Arquitectura Empresarial que Convierte tu Negocio en Líder de Mercado',
    mission: 'Diseñamos ecosistemas empresariales donde cada decisión impulsa objetivos estratégicos y cada proceso potencia a tu equipo.',
  },

  // ============================================
  // ALCANCE Y COBERTURA
  // ============================================
  reach: {
    countries: 3, // Colombia, México, Chile
    countriesList: ['Colombia', 'México', 'Chile'],
    cities: 8,
    mainCity: 'Medellín, Colombia',
  },

  // ============================================
  // CLIENTES Y PROYECTOS
  // ============================================
  clients: {
    totalCompanies: 150, // Empresas transformadas
    totalProjects: 200, // Proyectos exitosos completados
    activeClients: 45, // Clientes activos actualmente
    ceosTrained: 200, // CEOs que han usado Rayos-X o servicios
    industries: 12, // Sectores atendidos
  },

  // ============================================
  // SATISFACCIÓN Y RESULTADOS
  // ============================================
  satisfaction: {
    nps: 95, // Net Promoter Score
    npsDescription: 'Tasa de Satisfacción NPS 9+',
    clientRetention: 92, // % de retención de clientes
    projectSuccessRate: 98, // % de proyectos exitosos
    recommendationRate: 94, // % de clientes que nos recomiendan
  },

  // ============================================
  // IMPACTO FINANCIERO
  // ============================================
  impact: {
    totalValueGenerated: 50_000_000, // $50M+ USD generados para clientes
    totalValueGeneratedLabel: '$50M+',
    averageROI: 3.2, // ROI promedio 3.2x
    averageROILabel: '3.2x',
    paybackPeriod: 6, // Meses promedio para recuperar inversión
  },

  // ============================================
  // EQUIPO Y CAPACIDADES
  // ============================================
  team: {
    totalMembers: 12,
    seniorConsultants: 6,
    certifications: 25, // Certificaciones del equipo
    yearsExperience: 15, // Años promedio de experiencia del equipo
  },

  // ============================================
  // ESTADÍSTICAS DE TRANSFORMACIÓN DIGITAL
  // ============================================
  digitalTransformation: {
    pymeFailureRate: 73, // % de PYMEs que fracasan sin estrategia
    pymeFailureRateDescription: 'El 73% de las PYMEs colombianas fracasan en transformación digital por falta de estrategia',
    averageCapacityUtilization: 60, // % de capacidad operativa promedio
    averageCapacityUtilizationDescription: 'Las empresas promedio operan al 60% de su capacidad real',
    integratedGrowthMultiplier: 3.2, // Empresas con gestión integrada crecen 3.2x más
    integratedGrowthDescription: 'Las empresas con gestión integrada de Talento y Finanzas crecen 3.2 veces más rápido',
    integratedProfitabilityMultiplier: 2.3, // Mayor rentabilidad con gestión integrada
  },

  // ============================================
  // RAYOS-X EMPRESARIAL (DIAGNÓSTICO)
  // ============================================
  rayosX: {
    completedAssessments: 200, // Diagnósticos completados
    averageTime: 15, // Minutos promedio
    dimensions: 6, // Dimensiones evaluadas
    deliveryTime: 48, // Horas para entrega de resultados
    conversionRate: 42, // % que se convierten en clientes
  },

  // ============================================
  // METODOLOGÍA FORJA®
  // ============================================
  methodology: {
    phases: 5, // Fundamentar, Orientar, Rediseñar, Justificar, Acompañar
    phasesList: ['Fundamentar', 'Orientar', 'Rediseñar', 'Justificar', 'Acompañar'],
    averageProjectDuration: 6, // Meses promedio
    deliverables: 50, // Entregables promedio por proyecto completo
  },

  // ============================================
  // SERVICIOS Y CATEGORÍAS
  // ============================================
  services: {
    categories: 3, // Estrategia & Transformación, Talento & Finanzas, Comercial & Operaciones
    totalServices: 6,
    servicesList: [
      'Arquitectura Estratégica',
      'Transformación Digital 360°',
      'Gestión de Talento Estratégico',
      'Gestión Financiera',
      'Excelencia Operativa Lean',
      'Comercial y Servicio al Cliente',
    ],
  },

  // ============================================
  // CASOS DE ÉXITO - RESULTADOS TÍPICOS
  // ============================================
  typicalResults: {
    // Arquitectura Estratégica
    strategicAlignment: {
      timeToMarketReduction: 40, // % reducción
      decisionSpeedIncrease: 60, // % aumento
      strategicClarityIncrease: 85, // % aumento
    },

    // Transformación Digital
    digitalTransformation: {
      processAutomation: 65, // % de procesos automatizados
      dataAccuracyIncrease: 90, // % mejora en precisión
      operationalEfficiencyIncrease: 45, // % aumento
    },

    // Gestión de Talento
    talentManagement: {
      turnoverReduction: 50, // % reducción
      topTalentRetention: 92, // % retención
      employeeEngagementIncrease: 68, // % aumento (eNPS)
      timeToHireReduction: 40, // % reducción
    },

    // Gestión Financiera
    financialManagement: {
      cashFlowImprovement: 45, // % mejora
      marginIncrease: 8, // puntos porcentuales
      workingCapitalReduction: 30, // % reducción
      profitabilityIncrease: 35, // % aumento
    },

    // Excelencia Operativa
    operationalExcellence: {
      capacityIncrease: 40, // % aumento sin CAPEX
      wasteReduction: 35, // % reducción
      onTimeDeliveryIncrease: 25, // puntos porcentuales (60% → 85%)
      productivityIncrease: 50, // % aumento
    },

    // Comercial y Servicio
    commercialService: {
      clientRetentionIncrease: 24, // puntos porcentuales (65% → 89%)
      npsIncrease: 50, // puntos (18 → 68)
      responseTimeReduction: 83, // % reducción (24h → 4h)
      repurchaseRateIncrease: 42, // puntos porcentuales (30% → 72%)
      lifetimeValueIncrease: 133, // % aumento
    },
  },

  // ============================================
  // PERFILES DE EMPRESAS IDEALES
  // ============================================
  idealClient: {
    companySize: {
      min: 10,
      max: 200,
      description: '10-200 empleados',
    },
    revenue: {
      min: 500_000_000, // $500M COP
      max: 15_000_000_000, // $15.000M COP
      description: '$500M-$15.000M COP anuales',
    },
    industries: [
      'Manufactura',
      'Distribución',
      'Servicios Profesionales',
      'Tecnología',
      'Retail',
      'Salud',
      'Educación',
      'Logística',
      'Construcción',
      'Agroindustria',
      'Fintech',
      'E-commerce',
    ],
    roles: [
      'CEO',
      'Director General',
      'Gerente General',
      'Director de Operaciones',
      'Director de Transformación',
      'Director Financiero',
      'Director de RRHH',
      'Director Comercial',
    ],
  },

  // ============================================
  // GARANTÍAS Y COMPROMISOS
  // ============================================
  guarantees: {
    confidentiality: '100% Confidencial',
    responseTime: 'Respuesta en 48h',
    noCommitment: 'Sin compromiso',
    moneyBackGuarantee: false, // Trabajamos al éxito, no garantía de devolución
    successBasedPayment: true, // Modelo de pago al éxito disponible
  },

  // ============================================
  // CONTACTO Y SOPORTE
  // ============================================
  contact: {
    email: 'contacto@forjadigital.ae',
    phone: '+57 300 123 4567',
    whatsapp: '+57 300 123 4567',
    address: 'Medellín, Colombia',
    businessHours: 'Lunes a Viernes, 8:00 AM - 6:00 PM',
    responseTime: '48 horas',
  },

  // ============================================
  // REDES SOCIALES
  // ============================================
  social: {
    linkedin: 'https://www.linkedin.com/company/forja-digital-ae',
    twitter: 'https://twitter.com/forjadigitalae',
    facebook: 'https://www.facebook.com/forjadigitalae',
    instagram: 'https://www.instagram.com/forjadigitalae',
    youtube: 'https://www.youtube.com/@forjadigitalae',
  },

  // ============================================
  // CERTIFICACIONES Y RECONOCIMIENTOS
  // ============================================
  certifications: {
    iso9001: false,
    pmi: true,
    scrum: true,
    lean: true,
    sixSigma: false,
  },
} as const

// ============================================
// HELPERS - Funciones de utilidad
// ============================================

/**
 * Obtiene el texto formateado de años en el negocio
 * @returns string - "10+ Años" o "10 Años"
 */
export function getYearsInBusinessLabel(): string {
  const years = siteMetrics.company.yearsInBusiness
  return years >= 10 ? `${years}+ Años` : `${years} Años`
}

/**
 * Obtiene el texto formateado de empresas transformadas
 * @returns string - "150+ Empresas"
 */
export function getCompaniesTransformedLabel(): string {
  return `${siteMetrics.clients.totalCompanies}+ Empresas`
}

/**
 * Obtiene el texto formateado de proyectos exitosos
 * @returns string - "200+ Proyectos"
 */
export function getProjectsLabel(): string {
  return `${siteMetrics.clients.totalProjects}+ Proyectos`
}

/**
 * Obtiene el texto formateado de CEOs entrenados
 * @returns string - "200 CEOs"
 */
export function getCEOsLabel(): string {
  return `${siteMetrics.clients.ceosTrained} CEOs`
}

/**
 * Obtiene el texto formateado de NPS
 * @returns string - "95% Tasa de Satisfacción NPS 9+"
 */
export function getNPSLabel(): string {
  return `${siteMetrics.satisfaction.nps}% ${siteMetrics.satisfaction.npsDescription}`
}

/**
 * Obtiene el texto formateado de países
 * @returns string - "3 Países"
 */
export function getCountriesLabel(): string {
  return `${siteMetrics.reach.countries} Países`
}

/**
 * Obtiene estadísticas para el Hero Section
 */
export function getHeroStats() {
  return [
    { 
      value: `+${siteMetrics.clients.totalCompanies}`, 
      label: 'Empresas Transformadas' 
    },
    { 
      value: `${siteMetrics.satisfaction.nps}%`, 
      label: siteMetrics.satisfaction.npsDescription 
    },
    { 
      value: getYearsInBusinessLabel(), 
      label: 'Forjando Líderes Digitales' 
    },
  ]
}

/**
 * Obtiene estadísticas para la página de Testimonios
 */
export function getTestimonialsStats() {
  return [
    { 
      value: `${siteMetrics.clients.totalProjects}+`, 
      label: 'Proyectos Exitosos', 
      color: 'text-cyan-500' 
    },
    { 
      value: `${siteMetrics.satisfaction.nps}%`, 
      label: 'Satisfacción Cliente', 
      color: 'text-orange-500' 
    },
    { 
      value: `${siteMetrics.clients.totalCompanies}+`, 
      label: 'Empresas Transformadas', 
      color: 'text-purple-500' 
    },
    { 
      value: siteMetrics.impact.totalValueGeneratedLabel, 
      label: 'Valor Generado', 
      color: 'text-red-500' 
    },
  ]
}

/**
 * Obtiene el claim de transformación digital para PYMEs
 */
export function getDigitalTransformationClaim(): string {
  return siteMetrics.digitalTransformation.pymeFailureRateDescription
}

/**
 * Obtiene el claim de CEOs para CTA Section
 */
export function getCTAClaim(): string {
  return `Más de ${siteMetrics.clients.ceosTrained} CEOs han comenzado su transformación con nuestro Rayos-X Empresarial Gratis. En solo ${siteMetrics.rayosX.averageTime} minutos descubres:`
}

// ============================================
// TYPE EXPORTS
// ============================================

export type SiteMetrics = typeof siteMetrics
export type MetricCategory = keyof typeof siteMetrics

