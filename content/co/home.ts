/**
 * FORJA DIGITAL - Colombia Home Content Overlay
 * 
 * Solo define diferencias específicas para Colombia.
 * El resto se hereda de content/base/home.ts
 * 
 * @module content/es-co/home
 */

import { ORG } from '@/lib/org';
import type { HomeContent } from '@/content/base/home';

/**
 * Overlay para Colombia
 * Solo sobrescribe lo que es diferente
 */
export const homeContentOverlay: Partial<HomeContent> = {
  hero: {
    title: "Juntos forjamos el cambio que impulsa tu futuro en Colombia",
    subtitle: "Transformamos PYMEs colombianas mediante arquitectura empresarial y estrategia digital. Metodología FORJA® probada con +200 empresas.",
    cta: {
      primary: "Habla con un Forjador",
      secondary: "Rayos X Empresarial",
    },
  },
  
  contact: {
    whatsapp: "+57 300 123 4567",
    phone: "+57 (1) 123 4567",
    email: "contacto@forjadigital.com",
  },
  
  stats: {
    companies: "+80 empresas colombianas transformadas",
    countries: "Líder en Colombia y Latinoamérica",
    satisfaction: "98% satisfacción del cliente",
    growth: "+40% crecimiento promedio en Colombia",
  },
  
  services: {
    title: "Servicios diseñados para empresas colombianas",
    subtitle: "Soluciones integrales adaptadas a la realidad del mercado colombiano y el marco regulatorio local.",
  },
  
  testimonials: {
    title: "Empresas colombianas que confiaron en nosotros",
    subtitle: "Casos de éxito de PYMEs en Bogotá, Medellín, Cali y más ciudades",
  },
  
  cta: {
    title: "¿Listo para transformar tu empresa en Colombia?",
    subtitle: "Agenda una sesión estratégica sin costo. Entendemos el mercado colombiano y sus desafíos únicos.",
    button: "Comenzar ahora",
  },
  
  legal: {
    note: `Servicio de consultoría exportado desde Colombia por ${ORG.legalName} – ${ORG.nit}`,
  },
};

