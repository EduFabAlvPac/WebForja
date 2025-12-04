/**
 * FORJA DIGITAL - Constantes de Organización
 * 
 * Definición centralizada de la entidad legal y constantes de marca
 * para operar en www.forjadigital.com como exportadora de servicios desde Colombia.
 * 
 * @module lib/org
 */

export const ORG = {
  /**
   * Información Legal - Entidad colombiana única
   */
  legalName: "Forja Digital AE SAS",
  nit: "NIT 900.XXX.XXX-1",
  countryOfIncorporation: "Colombia",
  city: "Bogotá D.C.",
  
  /**
   * Datos de Contacto Principal
   */
  email: "contacto@forjadigital.com",
  phoneMain: "+57 XXX XXX XXXX",
  
  /**
   * URLs y Dominios
   */
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "https://www.forjadigital.com",
  
  /**
   * Información adicional para contexto legal
   */
  businessType: "Exportación de servicios",
  taxRegime: "Régimen Ordinario",
  
  /**
   * Branding
   */
  brandName: "Forja Digital - AE",
  tagline: "Arquitectos del Crecimiento PYME",
  
  /**
   * Social Media (para uso futuro)
   */
  social: {
    twitter: "@forjadigitalae",
    linkedin: "forja-digital-ae",
  }
} as const;

/**
 * Tipo derivado para uso en TypeScript
 */
export type OrgInfo = typeof ORG;

