/**
 * FORJA DIGITAL - Service Content Hook
 * 
 * Hook para obtener contenido de servicios con overlay por país.
 * Hace deep-merge del contenido base con el overlay del país activo.
 * 
 * @module lib/hooks/useServiceContent
 */

'use client';

import { useMemo } from 'react';
import { useCountryOptional } from '@/context/CountryProvider';
import type { ServicePageData } from '@/types/services';

/**
 * Deep merge de dos objetos
 * 
 * @param base - Objeto base
 * @param overlay - Objeto overlay
 * @returns Objeto merged
 */
function deepMerge<T>(base: T, overlay: Partial<T>): T {
  if (!overlay) return base;
  
  const result = { ...base };
  
  for (const key in overlay) {
    const overlayValue = overlay[key];
    const baseValue = (result as any)[key];
    
    if (overlayValue === undefined) continue;
    
    if (
      overlayValue &&
      typeof overlayValue === 'object' &&
      !Array.isArray(overlayValue) &&
      baseValue &&
      typeof baseValue === 'object' &&
      !Array.isArray(baseValue)
    ) {
      // Recursivo para objetos
      (result as any)[key] = deepMerge(baseValue, overlayValue);
    } else {
      // Sobrescribir directamente
      (result as any)[key] = overlayValue;
    }
  }
  
  return result;
}

/**
 * Hook para obtener contenido de servicio con overlay de país
 * 
 * @param serviceslug - Slug del servicio (ej: 'comercial-servicio-cliente')
 * @param baseContent - Contenido base del servicio
 * @returns Contenido merged con overlay del país
 * 
 * @example
 * ```tsx
 * import { baseComercialServicioData } from '@/content/base/servicios/comercial-servicio-cliente';
 * 
 * function ServicePage() {
 *   const content = useServiceContent('comercial-servicio-cliente', baseComercialServicioData);
 *   
 *   return (
 *     <div>
 *       <h1>{content.hero.title}</h1>
 *       <p>{content.caseStudy.company.location}</p> // Localizado
 *     </div>
 *   );
 * }
 * ```
 */
export function useServiceContent(
  serviceSlug: string,
  baseContent: ServicePageData
): ServicePageData {
  const country = useCountryOptional();
  const locale = country?.locale || 'es';
  
  const mergedContent = useMemo(() => {
    // Si no hay locale o es 'es' (internacional), retornar base
    if (!locale || locale === 'es') {
      return baseContent;
    }
    
    // Intentar cargar overlay del país
    try {
      // Dinámicamente importar overlay según locale
      // En runtime, esto debe ser manejado con dynamic imports
      // Por ahora, retornamos base (la implementación completa requiere lazy loading)
      
      // TODO: Implementar lazy loading de overlays
      // const overlay = await import(`@/content/${locale}/servicios/${serviceSlug}`);
      // return deepMerge(baseContent, overlay.default);
      
      return baseContent;
    } catch (error) {
      // Si no existe overlay, retornar base
      console.warn(`No overlay found for ${locale}/${serviceSlug}, using base content`);
      return baseContent;
    }
  }, [locale, serviceSlug, baseContent]);
  
  return mergedContent;
}

/**
 * Función helper para merge manual (uso en Server Components)
 * 
 * @param base - Contenido base
 * @param overlay - Overlay parcial
 * @returns Contenido merged
 * 
 * @example
 * ```tsx
 * import { baseComercialServicioData } from '@/content/base/servicios/comercial-servicio-cliente';
 * import { overlayComercialServicioDataCO } from '@/content/co/servicios/comercial-servicio-cliente';
 * 
 * const content = mergeServiceContent(baseComercialServicioData, overlayComercialServicioDataCO);
 * ```
 */
export function mergeServiceContent(
  base: ServicePageData,
  overlay?: Partial<ServicePageData>
): ServicePageData {
  if (!overlay) return base;
  return deepMerge(base, overlay);
}

/**
 * Helper para obtener overlay de servicio por locale
 * 
 * @param locale - Locale del país
 * @param serviceSlug - Slug del servicio
 * @returns Promise con overlay o null
 * 
 * @example
 * ```tsx
 * const overlay = await getServiceOverlay('co', 'comercial-servicio-cliente');
 * ```
 */
export async function getServiceOverlay(
  locale: string,
  serviceSlug: string
): Promise<Partial<ServicePageData> | null> {
  if (locale === 'es') return null;
  
  try {
    // Intentar cargar overlay
    const overlayModule = await import(`@/content/${locale}/servicios/${serviceSlug}`);
    
    // El overlay puede tener nombres diferentes según el país
    const overlayKey = `overlayComercialServicioData${locale.split('-')[1]?.toUpperCase() || ''}`;
    
    return overlayModule[overlayKey] || overlayModule.default || null;
  } catch (error) {
    console.warn(`Failed to load overlay for ${locale}/${serviceSlug}:`, error);
    return null;
  }
}

