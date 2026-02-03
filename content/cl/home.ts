/**
 * FORJA DIGITAL - Chile Home Content Overlay
 * 
 * Solo define diferencias específicas para Chile.
 * El resto se hereda de content/base/home.ts
 * 
 * @module content/es-cl/home
 */

import { ORG } from '@/lib/org';
import type { HomeContent } from '@/content/base/home';

/**
 * Overlay para Chile
 * Solo sobrescribe lo que es diferente
 */
export const homeContentOverlay: Partial<HomeContent> = {
  hero: {
    title: "Juntos forjamos el cambio que impulsa tu futuro en Chile",
    subtitle: "Transformamos PYMEs chilenas mediante arquitectura empresarial y estrategia digital. Metodología FORJA® adaptada al mercado chileno.",
    cta: {
      primary: "Habla con un Forjador",
      secondary: "Evaluación de Madurez Empresarial",
    },
  },
  
  contact: {
    whatsapp: "+56 9 1234 5678",
    phone: "+56 2 1234 5678",
    email: "contacto@forjadigital.com",
  },
  
  stats: {
    companies: "+50 empresas chilenas transformadas",
    countries: "Presencia en Chile y Latinoamérica",
    satisfaction: "98% satisfacción del cliente",
    growth: "+38% crecimiento promedio en Chile",
  },
  
  services: {
    title: "Servicios diseñados para empresas chilenas",
    subtitle: "Soluciones integrales adaptadas al mercado chileno y cumplimiento de normativas locales.",
  },
  
  testimonials: {
    title: "Empresas chilenas que confiaron en nosotros",
    subtitle: "Casos de éxito de PYMEs en Santiago, Valparaíso, Concepción y más regiones",
  },
  
  cta: {
    title: "¿Listo para transformar tu empresa en Chile?",
    subtitle: "Agenda una sesión estratégica sin costo. Conocemos el mercado chileno y sus oportunidades.",
    button: "Comenzar ahora",
  },
  
  legal: {
    note: `Servicio de consultoría exportado desde Colombia por ${ORG.legalName} – ${ORG.nit}`,
  },
};

