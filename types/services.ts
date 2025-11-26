export interface ServiceHeroData {
  eyebrow: string
  icon: string
  title: string
  subtitle: string
  description: string
  category: string
  breadcrumbs: Breadcrumb[]
  backgroundImage?: string
  backgroundAlt?: string
}

export interface Breadcrumb {
  label: string
  href: string
}

export interface TargetProfile {
  title: string
  items: string[]
  idealProfile: {
    title: string
    description: string
  }
}

export interface Problem {
  id: string
  icon: string
  iconComponent?: string
  title: string
  symptom: string
  solution: string[]
}

export interface ServiceComponent {
  id: string
  icon: string
  iconComponent?: string
  title: string
  description: string
  includes: ComponentSection[]
  deliverables: string[]
}

export interface ComponentSection {
  subtitle: string
  items: string[]
}

export interface MethodologyPhase {
  phase: number
  title: string
  tagline: string
  activities: string[]
  deliverables: string[]
}

export interface CaseStudy {
  company: {
    name: string
    industry: string
    size: string
    location: string
  }
  challenge: string
  solution: string
  results: {
    before: ResultMetric[]
    after: ResultMetric[]
  }
  testimonial: {
    quote: string
    author: string
    position: string
  }
  downloadLink?: string
}

export interface ResultMetric {
  label: string
  value: string
}

export interface ServiceCTA {
  primary: {
    title: string
    description: string
    buttonText: string
    buttonLink: string
    icon: string
  }
  secondary: {
    title: string
    description: string
    buttonText: string
    buttonLink: string
    icon: string
  }
}

export interface ServicePageData {
  hero: ServiceHeroData
  targetProfile: TargetProfile
  problems: Problem[]
  components: ServiceComponent[]
  methodology: MethodologyPhase[]
  caseStudy: CaseStudy
  cta: ServiceCTA
}

// ===== TIPOS PARA PÁGINAS DE CATEGORÍA =====

export interface CategoryHeroData {
  eyebrow: string
  title: string
  subtitle: string
  description: string
  stats: CategoryStat[]
  breadcrumbs: Breadcrumb[]
  backgroundImage?: string
  backgroundAlt?: string
}

export interface CategoryStat {
  value: string
  label: string
  icon: string
}

export interface CategoryProblem {
  id: string
  icon: string
  title: string
  symptom: string
  consequence: string
}

export interface CategoryService {
  id: string
  icon: string
  iconComponent?: string
  title: string
  description: string
  forWho: string[]
  includes: string[]
  results: string[]
  caseHighlight: {
    company: string
    result: string
  }
  link: string
  caseLink: string
  borderColor: 'turquoise' | 'green'
}

export interface IntegrationPoint {
  id: string
  icon: string
  iconComponent?: string
  title: string
  description: string
  benefit: string
}

export interface CategoryTargetProfile {
  title: string
  situations: string[]
  idealCompany: {
    title: string
    description: string
  }
}

export interface CategoryCaseStudy {
  company: {
    name: string
    industry: string
    size: string
  }
  challenge: string
  solution: string
  results: {
    talent: ResultMetric[]
    finance: ResultMetric[]
  }
  testimonial: {
    quote: string
    author: string
    position: string
  }
  downloadLink?: string
}

export interface CategoryCTAData {
  primary: {
    title: string
    description: string
    buttonText: string
    buttonLink: string
    icon: string
  }
  secondary: {
    title: string
    description: string
    buttonText: string
    buttonLink: string
    icon: string
  }
  serviceLinks: {
    title: string
    services: {
      name: string
      link: string
    }[]
  }
}

export interface CategoryPageData {
  hero: CategoryHeroData
  whyIntegration: {
    title: string
    subtitle: string
    problems: CategoryProblem[]
    solution: {
      title: string
      description: string
      benefits: string[]
    }
  }
  services: CategoryService[]
  integration: {
    title: string
    subtitle: string
    points: IntegrationPoint[]
    benefitHighlight: {
      stat: string
      description: string
    }
  }
  targetProfile: CategoryTargetProfile
  methodology: MethodologyPhase[]
  caseStudy: CategoryCaseStudy
  cta: CategoryCTAData
}


