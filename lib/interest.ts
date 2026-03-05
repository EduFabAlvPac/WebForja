/**
 * FORJA DIGITAL - Interest Library
 * 
 * Funciones para gestionar y filtrar contenido de interés multi-país.
 * Provee merge de contenido base + país y helpers de filtrado.
 * 
 * @module lib/interest
 */

import type { 
  CountryCode, 
  InterestItem, 
  InterestType, 
  InterestCategory,
  InterestFilters,
  InterestPaginatedResponse 
} from '@/types/interest';

import { interestBase } from '@/content/interest/base';
import { interestCO } from '@/content/interest/by-country/co';
import { interestCL } from '@/content/interest/by-country/cl';
import { interestPE } from '@/content/interest/by-country/pe';
import { interestEC } from '@/content/interest/by-country/ec';

// ═══════════════════════════════════════════════════════════════════════════
// COUNTRY CONTENT MAPPING
// ═══════════════════════════════════════════════════════════════════════════

const countryContent: Record<Exclude<CountryCode, 'all'>, InterestItem[]> = {
  co: interestCO,
  cl: interestCL,
  pe: interestPE,
  ec: interestEC,
};

// ═══════════════════════════════════════════════════════════════════════════
// MERGE FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Mergea contenido base con contenido específico del país.
 * Elimina duplicados por ID, priorizando el contenido del país.
 * 
 * @param country - Código del país
 * @returns Array de InterestItem combinado y deduplicado
 * 
 * @example
 * const items = mergeInterest('co');
 * // Retorna: base items (con countries incluyendo 'co' o 'all') + CO specific items
 */
export function mergeInterest(country: CountryCode): InterestItem[] {
  // Si es 'all', retornar solo el contenido base que tenga 'all' en countries
  if (country === 'all') {
    return [...interestBase].sort(sortByDateDesc);
  }

  // Obtener contenido específico del país
  const countrySpecific = countryContent[country] || [];

  // Filtrar base para incluir solo items que apliquen al país o a todos
  const filteredBase = interestBase.filter(
    item => item.countries.includes('all') || item.countries.includes(country)
  );

  // Crear mapa para deduplicar por ID (priorizar contenido del país)
  const itemMap = new Map<string, InterestItem>();

  // Agregar contenido base primero
  filteredBase.forEach(item => {
    itemMap.set(item.id, item);
  });

  // Agregar/sobrescribir con contenido del país
  countrySpecific.forEach(item => {
    itemMap.set(item.id, item);
  });

  // Convertir a array y ordenar por fecha descendente
  return Array.from(itemMap.values()).sort(sortByDateDesc);
}

/**
 * Obtiene todo el contenido de interés sin filtrar por país.
 * Útil para vistas administrativas o búsquedas globales.
 * 
 * @returns Array con todo el contenido disponible
 */
export function getAllInterest(): InterestItem[] {
  const allContent = [
    ...interestBase,
    ...interestCO,
    ...interestCL,
    ...interestPE,
    ...interestEC,
  ];

  // Deduplicar por ID
  const itemMap = new Map<string, InterestItem>();
  allContent.forEach(item => {
    itemMap.set(item.id, item);
  });

  return Array.from(itemMap.values()).sort(sortByDateDesc);
}

// ═══════════════════════════════════════════════════════════════════════════
// FILTER HELPERS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Filtra contenido por categoría.
 * 
 * @param items - Array de items a filtrar
 * @param category - Categoría a buscar
 * @returns Items filtrados por categoría
 */
export function byCategory(
  items: InterestItem[], 
  category: InterestCategory
): InterestItem[] {
  return items.filter(item => item.category === category);
}

/**
 * Filtra contenido por tipo.
 * 
 * @param items - Array de items a filtrar
 * @param type - Tipo de contenido a buscar
 * @returns Items filtrados por tipo
 */
export function byType(
  items: InterestItem[], 
  type: InterestType
): InterestItem[] {
  return items.filter(item => item.type === type);
}

/**
 * Filtra contenido por tag.
 * 
 * @param items - Array de items a filtrar
 * @param tag - Tag a buscar (case-insensitive)
 * @returns Items que contienen el tag
 */
export function byTag(
  items: InterestItem[], 
  tag: string
): InterestItem[] {
  const normalizedTag = tag.toLowerCase();
  return items.filter(item => 
    item.tags.some(t => t.toLowerCase() === normalizedTag)
  );
}

/**
 * Obtiene el contenido destacado de un país.
 * 
 * @param country - Código del país
 * @returns Items marcados como featured para el país
 */
export function featuredOfCountry(country: CountryCode): InterestItem[] {
  const items = mergeInterest(country);
  return items.filter(item => item.featured === true);
}

/**
 * Obtiene el item destacado principal de un país.
 * Retorna el más reciente si hay varios.
 * 
 * @param country - Código del país
 * @returns El item destacado más reciente o undefined
 */
export function getFeaturedItem(country: CountryCode): InterestItem | undefined {
  const featured = featuredOfCountry(country);
  return featured[0]; // Ya está ordenado por fecha desc
}

/**
 * Filtra contenido aplicando múltiples criterios.
 * 
 * @param items - Array de items a filtrar
 * @param filters - Objeto con filtros a aplicar
 * @returns Items que cumplen todos los filtros
 */
export function filterInterest(
  items: InterestItem[], 
  filters: InterestFilters
): InterestItem[] {
  let result = [...items];

  if (filters.type) {
    result = byType(result, filters.type);
  }

  if (filters.category) {
    result = byCategory(result, filters.category);
  }

  if (filters.tag) {
    result = byTag(result, filters.tag);
  }

  if (filters.featured !== undefined) {
    result = result.filter(item => item.featured === filters.featured);
  }

  return result;
}

// ═══════════════════════════════════════════════════════════════════════════
// PAGINATION
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Pagina un array de items.
 * 
 * @param items - Array de items a paginar
 * @param page - Número de página (1-indexed)
 * @param pageSize - Cantidad de items por página
 * @returns Objeto con items paginados y metadata
 */
export function paginateInterest(
  items: InterestItem[],
  page: number = 1,
  pageSize: number = 10
): InterestPaginatedResponse {
  const total = items.length;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedItems = items.slice(start, end);

  return {
    items: paginatedItems,
    total,
    page,
    pageSize,
    hasMore: end < total,
  };
}

// ═══════════════════════════════════════════════════════════════════════════
// SEARCH
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Busca contenido por texto en título, resumen y tags.
 * 
 * @param items - Array de items a buscar
 * @param query - Texto de búsqueda (case-insensitive)
 * @returns Items que coinciden con la búsqueda
 */
export function searchInterest(
  items: InterestItem[], 
  query: string
): InterestItem[] {
  const normalizedQuery = query.toLowerCase().trim();
  
  if (!normalizedQuery) {
    return items;
  }

  return items.filter(item => {
    const searchableText = [
      item.title,
      item.summary,
      ...item.tags,
      item.category,
      item.source || '',
    ].join(' ').toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Ordena items por fecha descendente (más reciente primero).
 */
function sortByDateDesc(a: InterestItem, b: InterestItem): number {
  return new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime();
}

/**
 * Obtiene todas las categorías únicas de un conjunto de items.
 * 
 * @param items - Array de items
 * @returns Array de categorías únicas
 */
export function getUniqueCategories(items: InterestItem[]): InterestCategory[] {
  const categories = new Set<InterestCategory>();
  items.forEach(item => categories.add(item.category));
  return Array.from(categories);
}

/**
 * Obtiene todos los tipos únicos de un conjunto de items.
 * 
 * @param items - Array de items
 * @returns Array de tipos únicos
 */
export function getUniqueTypes(items: InterestItem[]): InterestType[] {
  const types = new Set<InterestType>();
  items.forEach(item => types.add(item.type));
  return Array.from(types);
}

/**
 * Obtiene todos los tags únicos de un conjunto de items.
 * 
 * @param items - Array de items
 * @returns Array de tags únicos ordenados alfabéticamente
 */
export function getUniqueTags(items: InterestItem[]): string[] {
  const tags = new Set<string>();
  items.forEach(item => item.tags.forEach(tag => tags.add(tag)));
  return Array.from(tags).sort();
}

/**
 * Agrupa items por categoría.
 * 
 * @param items - Array de items
 * @returns Objeto con categorías como keys y arrays de items como values
 */
export function groupByCategory(
  items: InterestItem[]
): Record<InterestCategory, InterestItem[]> {
  const grouped = {} as Record<InterestCategory, InterestItem[]>;
  
  items.forEach(item => {
    if (!grouped[item.category]) {
      grouped[item.category] = [];
    }
    grouped[item.category].push(item);
  });

  return grouped;
}

/**
 * Agrupa items por tipo.
 * 
 * @param items - Array de items
 * @returns Objeto con tipos como keys y arrays de items como values
 */
export function groupByType(
  items: InterestItem[]
): Record<InterestType, InterestItem[]> {
  const grouped = {} as Record<InterestType, InterestItem[]>;
  
  items.forEach(item => {
    if (!grouped[item.type]) {
      grouped[item.type] = [];
    }
    grouped[item.type].push(item);
  });

  return grouped;
}

/**
 * Obtiene items relacionados basados en categoría y tags.
 * 
 * @param item - Item de referencia
 * @param allItems - Pool de items para buscar relacionados
 * @param limit - Cantidad máxima de items a retornar
 * @returns Items relacionados ordenados por relevancia
 */
export function getRelatedItems(
  item: InterestItem,
  allItems: InterestItem[],
  limit: number = 3
): InterestItem[] {
  // Excluir el item actual
  const otherItems = allItems.filter(i => i.id !== item.id);

  // Calcular score de relevancia
  const scored = otherItems.map(other => {
    let score = 0;
    
    // Misma categoría = +3
    if (other.category === item.category) {
      score += 3;
    }
    
    // Por cada tag compartido = +1
    const sharedTags = item.tags.filter(tag => 
      other.tags.includes(tag)
    ).length;
    score += sharedTags;

    // Mismo tipo = +1
    if (other.type === item.type) {
      score += 1;
    }

    return { item: other, score };
  });

  // Ordenar por score y retornar los primeros
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(s => s.item);
}

