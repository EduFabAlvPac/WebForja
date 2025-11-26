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
        category: 'Estrategia & Transformación',
        items: [
          {
            title: 'Arquitectura Estratégica',
            description: 'Visión, Gobierno Corporativo, Modelo Financiero',
            href: '/servicios/estrategia-transformacion/arquitectura-estrategica',
            icon: 'Lightbulb',
            iconBg: 'bg-cyan-100 text-cyan-600'
          },
          {
            title: 'Transformación Digital 360°',
            description: 'Innovación, BI, Tech Stack, Integración de IA',
            href: '/servicios/estrategia-transformacion/transformacion-digital',
            icon: 'Smartphone',
            iconBg: 'bg-orange-100 text-orange-600'
          }
        ]
      },
      {
        category: 'Talento & Finanzas',
        items: [
          {
            title: 'Gestión de Talento Estratégico',
            description: 'Desarrollo, Capacitación, Cultura Organizacional',
            href: '/servicios/talento-finanzas/gestion-talento-estrategico',
            icon: 'Users',
            iconBg: 'bg-purple-100 text-purple-600'
          },
          {
            title: 'Gestión Financiera',
            description: 'Planeación, Análisis, Control de Impuestos, Pricing',
            href: '/servicios/talento-finanzas/ingenieria-financiera',
            icon: 'DollarSign',
            iconBg: 'bg-teal-100 text-teal-600'
          }
        ]
      },
      {
        category: 'Comercial & Operaciones',
        items: [
          {
            title: 'Excelencia Operativa Lean',
            description: 'BPM, Automatización, Mejora Continua',
            href: '/servicios/comercial-operaciones/excelencia-operativa',
            icon: 'Settings',
            iconBg: 'bg-red-100 text-red-600'
          },
          {
            title: 'Comercial y Servicio al Cliente',
            description: 'Ventas, Atención al Cliente, Fidelización',
            href: '/servicios/comercial-operaciones/comercial-cliente',
            icon: 'Headphones',
            iconBg: 'bg-violet-100 text-violet-600'
          }
        ]
      }
    ]
  },
  {
    id: 'interes',
    label: 'Interés',
    href: '/casos-exito'
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
    id: 'estrategia-transformacion',
    title: 'Estrategia & Transformación',
    services: [
      {
        id: 'estrategia-empresarial',
        title: 'Arquitectura Estratégica',
        description: 'Construimos el mapa desde dónde estás hasta dónde necesitas llegar',
        href: '/servicios/estrategia-transformacion/arquitectura-estrategica',
        icon: 'Lightbulb',
        iconBg: 'bg-cyan-100',
        iconColor: 'text-cyan-500',
      },
      {
        id: 'transformacion-digital',
        title: 'Transformación Digital 360°',
        description: 'Convertimos la tecnología en ventaja competitiva medible',
        href: '/servicios/estrategia-transformacion/transformacion-digital',
        icon: 'Smartphone',
        iconBg: 'bg-orange-100',
        iconColor: 'text-orange-500',
      },
    ]
  },
  {
    id: 'talento-finanzas',
    title: 'Talento & Finanzas',
    services: [
      {
        id: 'gestion-talento-estrategico',
        title: 'Gestión de Talento Estratégico',
        description: 'Equipos alineados, productivos y comprometidos con la estrategia',
        href: '/servicios/talento-finanzas/gestion-talento-estrategico',
        icon: 'Users',
        iconBg: 'bg-purple-100',
        iconColor: 'text-purple-500',
      },
      {
        id: 'ingenieria-financiera',
        title: 'Gestión Financiera',
        description: 'Finanzas que financian el crecimiento, no que lo frenan',
        href: '/servicios/talento-finanzas/ingenieria-financiera',
        icon: 'DollarSign',
        iconBg: 'bg-teal-100',
        iconColor: 'text-teal-500',
      },
    ]
  },
  {
    id: 'comercial-operaciones',
    title: 'Comercial & Operaciones',
    services: [
      {
        id: 'excelencia-operativa',
        title: 'Excelencia Operativa Lean',
        description: 'Procesos eficientes que liberan recursos para crecer',
        href: '/servicios/comercial-operaciones/excelencia-operativa',
        icon: 'Settings',
        iconBg: 'bg-red-100',
        iconColor: 'text-red-500',
      },
      {
        id: 'comercial-cliente',
        title: 'Comercial y Servicio al Cliente',
        description: 'Sistemas comerciales integrados con servicio que convierten prospectos en clientes recurrentes',
        href: '/servicios/comercial-operaciones/comercial-cliente',
        icon: 'Headphones',
        iconBg: 'bg-violet-100',
        iconColor: 'text-violet-500',
      },
    ]
  }
]

