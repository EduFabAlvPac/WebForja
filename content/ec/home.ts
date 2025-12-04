/**
 * FORJA DIGITAL - Ecuador Home Content Overlay
 * 
 * Solo define diferencias específicas para Ecuador.
 * El resto se hereda de content/base/home.ts
 * 
 * @module content/es-ec/home
 */

import { ORG } from '@/lib/org';
import type { HomeContent } from '@/content/base/home';

/**
 * Overlay para Ecuador
 * Solo sobrescribe lo que es diferente
 */
export const homeContentOverlay: Partial<HomeContent> = {
  hero: {
    title: "Juntos forjamos el cambio que impulsa tu futuro en Ecuador",
    subtitle: "Transformamos PYMEs ecuatorianas mediante arquitectura empresarial y estrategia digital. Metodología FORJA® adaptada al mercado ecuatoriano.",
    cta: {
      primary: "Habla con un Forjador",
      secondary: "Rayos X Empresarial",
    },
  },
  
  contact: {
    whatsapp: "+593 98 765 4321",
    phone: "+593 2 234 5678",
    email: "contacto@forjadigital.com",
  },
  
  stats: {
    companies: "+30 empresas ecuatorianas transformadas",
    countries: "Crecimiento en Ecuador y Latinoamérica",
    satisfaction: "98% satisfacción del cliente",
    growth: "+35% crecimiento promedio en Ecuador",
  },
  
  services: {
    title: "Servicios diseñados para empresas ecuatorianas",
    subtitle: "Soluciones integrales adaptadas al contexto empresarial ecuatoriano y regulaciones del SRI.",
  },
  
  testimonials: {
    title: "Empresas ecuatorianas que confiaron en nosotros",
    subtitle: "Casos de éxito de PYMEs en Quito, Guayaquil, Cuenca y más ciudades",
  },
  
  cta: {
    title: "¿Listo para transformar tu empresa en Ecuador?",
    subtitle: "Agenda una sesión estratégica sin costo. Conocemos el mercado ecuatoriano y sus oportunidades.",
    button: "Comenzar ahora",
  },
  
  legal: {
    note: `Servicio de consultoría exportado desde Colombia por ${ORG.legalName} – ${ORG.nit}`,
  },
};

