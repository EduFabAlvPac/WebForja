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


