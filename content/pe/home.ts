/**
 * FORJA DIGITAL - Perú Home Content Overlay
 * 
 * Solo define diferencias específicas para Perú.
 * El resto se hereda de content/base/home.ts
 * 
 * @module content/es-pe/home
 */

import { ORG } from '@/lib/org';
import type { HomeContent } from '@/content/base/home';

/**
 * Overlay para Perú
 * Solo sobrescribe lo que es diferente
 */
export const homeContentOverlay: Partial<HomeContent> = {
  hero: {
    title: "Juntos forjamos el cambio que impulsa tu futuro en Perú",
    subtitle: "Transformamos PYMEs peruanas mediante arquitectura empresarial y estrategia digital. Metodología FORJA® adaptada al contexto peruano.",
    cta: {
      primary: "Habla con un Forjador",
      secondary: "Rayos X Empresarial",
    },
  },
  
  contact: {
    whatsapp: "+51 987 654 321",
    phone: "+51 1 234 5678",
    email: "contacto@forjadigital.com",
  },
  
  stats: {
    companies: "+40 empresas peruanas transformadas",
    countries: "Expansión en Perú y Latinoamérica",
    satisfaction: "98% satisfacción del cliente",
    growth: "+36% crecimiento promedio en Perú",
  },
  
  services: {
    title: "Servicios diseñados para empresas peruanas",
    subtitle: "Soluciones integrales adaptadas al entorno empresarial peruano y regulaciones SUNAT.",
  },
  
  testimonials: {
    title: "Empresas peruanas que confiaron en nosotros",
    subtitle: "Casos de éxito de PYMEs en Lima, Arequipa, Trujillo y más ciudades",
  },
  
  cta: {
    title: "¿Listo para transformar tu empresa en Perú?",
    subtitle: "Agenda una sesión estratégica sin costo. Entendemos el mercado peruano y sus particularidades.",
    button: "Comenzar ahora",
  },
  
  legal: {
    note: `Servicio de consultoría exportado desde Colombia por ${ORG.legalName} – ${ORG.nit}`,
  },
};

