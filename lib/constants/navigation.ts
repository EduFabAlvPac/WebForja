export interface NavigationItem {
  id: string
  label: string
  href?: string
  megaMenu?: MegaMenuItem[]
  megaMenuColumns?: MegaMenuColumn[]
}

export interface MegaMenuItem {
  title: string
  description?: string
  href: string
  icon?: string
  iconBg?: string
  iconColor?: string
}

export interface MegaMenuColumn {
  category: string
  items: MegaMenuItem[]
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    id: 'nosotros',
    label: 'Nosotros',
    megaMenu: [
      {
        title: 'Historia',
        description: 'Misión, Visión y Valores',
        href: '/nosotros#historia',
        icon: 'Clock',
        iconBg: 'bg-cyan-100 text-cyan-600'
      },
      {
        title: 'Equipo Profesional',
        description: 'Nuestros expertos',
        href: '/nosotros#equipo',
        icon: 'Users',
        iconBg: 'bg-purple-100 text-purple-600'
      },
      {
        title: 'Testimonios',
        description: 'Casos de éxito',
        href: '/nosotros#testimonios',
        icon: 'MessageSquareQuote',
        iconBg: 'bg-rose-100 text-rose-600'
      }
    ]
  },
  // ==========================================
  // INDUSTRIAS - TEMPORALMENTE OCULTO
  // Descomentar cuando sea necesario mostrar
  // ==========================================
  // {
  //   id: 'industrias',
  //   label: 'Industrias',
  //   megaMenu: [
  //     {
  //       title: 'Servicios Profesionales',
  //       description: 'Consultoría y asesoría',
  //       href: '/industrias/servicios-profesionales',
  //       icon: 'Briefcase',
  //       iconBg: 'bg-blue-100 text-blue-600'
  //     },
  //     {
  //       title: 'Comercio Minorista',
  //       description: 'Retail y E-commerce',
  //       href: '/industrias/comercio-minorista',
  //       icon: 'Store',
  //       iconBg: 'bg-orange-100 text-orange-600'
  //     },
  //     {
  //       title: 'Fabricación',
  //       description: 'Manufactura e Industria 4.0',
  //       href: '/industrias/fabricacion',
  //       icon: 'Factory',
  //       iconBg: 'bg-indigo-100 text-indigo-600'
  //     },
  //     {
  //       title: 'Agroindustria',
  //       description: 'Agricultura y procesamiento',
  //       href: '/industrias/agroindustria',
  //       icon: 'Sprout',
  //       iconBg: 'bg-red-100 text-red-600'
  //     },
  //     {
  //       title: 'Salud',
  //       description: 'Servicios de salud',
  //       href: '/industrias/salud',
  //       icon: 'Heart',
  //       iconBg: 'bg-teal-100 text-teal-600'
  //     }
  //   ]
  // },
  // ==========================================
  {
    id: 'servicios',
    label: 'Servicios',
    megaMenuColumns: [
      {
        category: 'ADN Estratégico',
        items: [
          {
            title: 'Estrategia',
            description: 'Visión, Planificación Estratégica, Modelo de Negocio',
            href: '/servicios/adn-estrategico/estrategia',
            icon: 'Target',
            iconBg: 'bg-cyan-100 text-cyan-600'
          },
          {
            title: 'Gobierno',
            description: 'Gobierno Corporativo, Estructura Organizacional, Compliance',
            href: '/servicios/adn-estrategico/gobierno',
            icon: 'Building2',
            iconBg: 'bg-blue-100 text-blue-600'
          },
          {
            title: 'Sostenibilidad',
            description: 'ESG, Responsabilidad Social, Impacto Ambiental',
            href: '/servicios/adn-estrategico/sostenibilidad',
            icon: 'Leaf',
            iconBg: 'bg-green-100 text-green-600'
          }
        ]
      },
      {
        category: 'Motor Operativo',
        items: [
          {
            title: 'Operaciones (Supply Chain)',
            description: 'BPM, Automatización, Mejora Continua, Cadena de Suministros',
            href: '/servicios/motor-operativo/operaciones',
            icon: 'Settings',
            iconBg: 'bg-red-100 text-red-600'
          },
          {
            title: 'Finanzas',
            description: 'Planeación, Análisis, Control de Impuestos, Pricing',
            href: '/servicios/motor-operativo/finanzas',
            icon: 'DollarSign',
            iconBg: 'bg-teal-100 text-teal-600'
          },
          {
            title: 'Talento',
            description: 'Desarrollo, Capacitación, Cultura Organizacional',
            href: '/servicios/motor-operativo/talento',
            icon: 'Users',
            iconBg: 'bg-purple-100 text-purple-600'
          }
        ]
      },
      {
        category: 'Inteligencia Digital',
        items: [
          {
            title: 'Estrategia Tecnológica',
            description: 'Arquitectura Tecnológica, Tech Stack, Roadmap Digital',
            href: '/servicios/inteligencia-digital/estrategia-tecnologica',
            icon: 'Cpu',
            iconBg: 'bg-slate-100 text-slate-600'
          },
          {
            title: 'Inteligencia de Datos',
            description: 'BI, Analytics, Big Data, Integración de IA',
            href: '/servicios/inteligencia-digital/inteligencia-datos',
            icon: 'Database',
            iconBg: 'bg-sky-100 text-sky-600'
          },
          {
            title: 'Innovación y Agilidad',
            description: 'Transformación Digital, Metodologías Ágiles, Innovación',
            href: '/servicios/inteligencia-digital/innovacion-agilidad',
            icon: 'Rocket',
            iconBg: 'bg-amber-100 text-amber-600'
          }
        ]
      },
      {
        category: 'Enfoque al Cliente',
        items: [
          {
            title: 'Experiencia del Cliente (CX)',
            description: 'Diseño de Experiencia, Journey Mapping, Fidelización',
            href: '/servicios/enfoque-cliente/experiencia-cliente',
            icon: 'Heart',
            iconBg: 'bg-rose-100 text-rose-600'
          },
          {
            title: 'Comercial',
            description: 'Ventas, CRM, Estrategia Comercial, Conversión',
            href: '/servicios/enfoque-cliente/comercial',
            icon: 'TrendingUp',
            iconBg: 'bg-fuchsia-100 text-fuchsia-600'
          }
        ]
      }
    ]
  },
  {
    id: 'interes',
    label: 'Interés',
    href: '/interes'
  },
  {
    id: 'contacto',
    label: 'Contacto',
    href: '/contacto'
  }
]

// Interfaces para el Mega Menú de Servicios
export interface ServicioMegaMenu {
  id: string
  title: string
  description: string
  href: string
  icon: string
  iconBg: string
  iconColor: string
}

export interface CategoriaMegaMenu {
  id: string
  title: string
  services: ServicioMegaMenu[]
}

// Datos del Mega Menú de Servicios con diseño del mockup
export const SERVICIOS_MEGA_MENU: CategoriaMegaMenu[] = [
  {
    id: 'adn-estrategico',
    title: 'ADN Estratégico',
    services: [
      {
        id: 'estrategia',
        title: 'Estrategia',
        description: 'Construimos el mapa desde dónde estás hasta dónde necesitas llegar',
        href: '/servicios/adn-estrategico/estrategia',
        icon: 'Target',
        iconBg: 'bg-cyan-100',
        iconColor: 'text-cyan-600',
      },
      {
        id: 'gobierno',
        title: 'Gobierno',
        description: 'Estructura organizacional sólida que soporta el crecimiento sostenible',
        href: '/servicios/adn-estrategico/gobierno',
        icon: 'Building2',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
      },
      {
        id: 'sostenibilidad',
        title: 'Sostenibilidad',
        description: 'Integramos propósito y rentabilidad para crear valor a largo plazo',
        href: '/servicios/adn-estrategico/sostenibilidad',
        icon: 'Leaf',
        iconBg: 'bg-green-100',
        iconColor: 'text-green-600',
      },
    ]
  },
  {
    id: 'motor-operativo',
    title: 'Motor Operativo',
    services: [
      {
        id: 'operaciones',
        title: 'Operaciones (Supply Chain)',
        description: 'Procesos eficientes que liberan recursos para crecer',
        href: '/servicios/motor-operativo/operaciones',
        icon: 'Settings',
        iconBg: 'bg-red-100',
        iconColor: 'text-red-600',
      },
      {
        id: 'finanzas',
        title: 'Finanzas',
        description: 'Finanzas que financian el crecimiento, no que lo frenan',
        href: '/servicios/motor-operativo/finanzas',
        icon: 'DollarSign',
        iconBg: 'bg-teal-100',
        iconColor: 'text-teal-600',
      },
      {
        id: 'talento',
        title: 'Talento',
        description: 'Equipos alineados, productivos y comprometidos con la estrategia',
        href: '/servicios/motor-operativo/talento',
        icon: 'Users',
        iconBg: 'bg-purple-100',
        iconColor: 'text-purple-600',
      },
    ]
  },
  {
    id: 'inteligencia-digital',
    title: 'Inteligencia Digital',
    services: [
      {
        id: 'estrategia-tecnologica',
        title: 'Estrategia Tecnológica',
        description: 'Arquitectura tecnológica que potencia tu ventaja competitiva',
        href: '/servicios/inteligencia-digital/estrategia-tecnologica',
        icon: 'Cpu',
        iconBg: 'bg-slate-100',
        iconColor: 'text-slate-600',
      },
      {
        id: 'inteligencia-datos',
        title: 'Inteligencia de Datos',
        description: 'Convierte datos en decisiones estratégicas con BI e IA',
        href: '/servicios/inteligencia-digital/inteligencia-datos',
        icon: 'Database',
        iconBg: 'bg-sky-100',
        iconColor: 'text-sky-600',
      },
      {
        id: 'innovacion-agilidad',
        title: 'Innovación y Agilidad',
        description: 'Metodologías ágiles que aceleran la transformación digital',
        href: '/servicios/inteligencia-digital/innovacion-agilidad',
        icon: 'Rocket',
        iconBg: 'bg-amber-100',
        iconColor: 'text-amber-600',
      },
    ]
  },
  {
    id: 'enfoque-cliente',
    title: 'Enfoque al Cliente',
    services: [
      {
        id: 'experiencia-cliente',
        title: 'Experiencia del Cliente (CX)',
        description: 'Diseñamos experiencias que convierten clientes en embajadores',
        href: '/servicios/enfoque-cliente/experiencia-cliente',
        icon: 'Heart',
        iconBg: 'bg-rose-100',
        iconColor: 'text-rose-600',
      },
      {
        id: 'comercial',
        title: 'Comercial',
        description: 'Sistemas comerciales integrados que convierten prospectos en clientes recurrentes',
        href: '/servicios/enfoque-cliente/comercial',
        icon: 'TrendingUp',
        iconBg: 'bg-fuchsia-100',
        iconColor: 'text-fuchsia-600',
      },
    ]
  }
]

