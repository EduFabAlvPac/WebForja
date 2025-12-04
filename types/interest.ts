/**
 * FORJA DIGITAL - Interest Content Model
 * 
 * Modelo de contenido unificado para la sección "Interés" multi-país.
 * Soporta artículos, guías, programas gubernamentales, descargables y eventos.
 * 
 * @module types/interest
 */

/**
 * Códigos de país soportados
 * - "all" indica contenido disponible para todos los países
 */
export type CountryCode = "co" | "cl" | "pe" | "ec" | "all";

/**
 * Tipos de contenido de interés
 */
export type InterestType = 
  | "articulo"      // Artículos de blog/noticias
  | "guia"          // Guías paso a paso
  | "programa"      // Programas gubernamentales/institucionales
  | "descargable"   // PDFs, templates, recursos
  | "evento";       // Webinars, talleres, conferencias

/**
 * Categorías de contenido
 */
export type InterestCategory =
  | "Regulación"
  | "Financiamiento"
  | "Programas"
  | "Transformación Digital"
  | "IA & Automatización"
  | "Operaciones"
  | "Datos & Seguridad";

/**
 * Imagen de contenido
 */
export interface InterestImage {
  src: string;
  alt: string;
}

/**
 * Item de contenido de interés
 */
export interface InterestItem {
  /** Identificador único */
  id: string;
  
  /** Slug para URLs (sin caracteres especiales) */
  slug: string;
  
  /** Título del contenido */
  title: string;
  
  /** Resumen corto (máx ~160 caracteres para SEO) */
  summary: string;
  
  /** Tipo de contenido */
  type: InterestType;
  
  /** Categoría principal */
  category: InterestCategory;
  
  /** Tags para filtrado y SEO */
  tags: string[];
  
  /** Países donde aplica este contenido */
  countries: CountryCode[];
  
  /** Si es contenido destacado */
  featured?: boolean;
  
  /** Fecha de publicación en formato ISO */
  dateISO: string;
  
  /** URL externa (si aplica, ej: sitio gubernamental) */
  href?: string;
  
  /** Imagen de miniatura */
  image: InterestImage;
  
  /** Autor del contenido */
  author?: string;
  
  /** Tiempo estimado de lectura en minutos */
  readMins?: number;
  
  /** Fuente del contenido (ej: "MinCIT", "Gobierno de Chile") */
  source?: string;
  
  /** Icono de la fuente (emoji o ruta) */
  sourceIcon?: string;
}

/**
 * Filtros disponibles para contenido de interés
 */
export interface InterestFilters {
  country?: CountryCode;
  type?: InterestType;
  category?: InterestCategory;
  tag?: string;
  featured?: boolean;
}

/**
 * Respuesta paginada de contenido
 */
export interface InterestPaginatedResponse {
  items: InterestItem[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

