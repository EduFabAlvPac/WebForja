/**
 * FORJA DIGITAL - Base Home Content
 * 
 * Contenido base neutro para la homepage.
 * Los overlays por país (content/{lc}/home.ts) solo definen diferencias.
 * 
 * @module content/base/home
 */

export interface HomeContent {
  hero: {
    title: string;
    subtitle: string;
    cta: {
      primary: string;
      secondary: string;
    };
  };
  
  contact: {
    whatsapp: string;
    phone: string;
    email: string;
  };
  
  stats: {
    companies: string;
    countries: string;
    satisfaction: string;
    growth: string;
  };
  
  services: {
    title: string;
    subtitle: string;
  };
  
  testimonials: {
    title: string;
    subtitle: string;
  };
  
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  
  legal: {
    note: string;
  };
}

/**
 * Contenido base neutro (español general)
 */
export const baseHomeContent: HomeContent = {
  hero: {
    title: "Juntos forjamos el cambio que impulsa tu futuro",
    subtitle: "Transformamos PYMEs latinoamericanas mediante arquitectura empresarial y estrategia digital. Metodología FORJA® probada con +200 empresas en 8 países.",
    cta: {
      primary: "Habla con un Forjador",
      secondary: "Evaluación de Madurez Empresarial",
    },
  },
  
  contact: {
    whatsapp: "+57 300 123 4567",
    phone: "+57 (1) 123 4567",
    email: "contacto@forjadigital.com",
  },
  
  stats: {
    companies: "+200 empresas transformadas",
    countries: "8 países en Latinoamérica",
    satisfaction: "98% satisfacción del cliente",
    growth: "+35% crecimiento promedio",
  },
  
  services: {
    title: "Servicios que impulsan tu transformación",
    subtitle: "Soluciones integrales de arquitectura empresarial y estrategia digital adaptadas a la realidad de las PYMEs latinoamericanas.",
  },
  
  testimonials: {
    title: "Historias de éxito que inspiran",
    subtitle: "Empresas que ya transformaron su futuro con Forja Digital",
  },
  
  cta: {
    title: "¿Listo para forjar tu transformación?",
    subtitle: "Agenda una sesión estratégica sin costo y descubre cómo podemos impulsar el crecimiento de tu empresa.",
    button: "Comenzar ahora",
  },
  
  legal: {
    note: "Servicio de consultoría exportado desde Colombia",
  },
};

