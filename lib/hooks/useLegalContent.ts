/**
 * FORJA DIGITAL - Legal Content Hook
 * 
 * Hook para obtener contenido legal mergeado (base + overlay por país)
 * 
 * @module lib/hooks/useLegalContent
 */

'use client';

import { useMemo } from 'react';
import { useCountryOptional } from '@/context/CountryProvider';
import { legalContentBase, LegalContent } from '@/content/base/legal';

/**
 * Deep merge de objetos
 */
function deepMerge<T>(base: T, overlay: Partial<T>): T {
  if (!overlay) return base;
  
  const result = { ...base };
  
  for (const key in overlay) {
    const overlayValue = overlay[key];
    const baseValue = base[key];
    
    if (overlayValue === undefined) {
      // Si overlay es undefined, usa base
      continue;
    }
    
    if (
      typeof overlayValue === 'object' &&
      overlayValue !== null &&
      !Array.isArray(overlayValue) &&
      typeof baseValue === 'object' &&
      baseValue !== null &&
      !Array.isArray(baseValue)
    ) {
      // Recursivo para objetos anidados
      result[key] = deepMerge(baseValue, overlayValue) as any;
    } else {
      // Usa valor de overlay
      result[key] = overlayValue as any;
    }
  }
  
  return result;
}

/**
 * Hook para obtener contenido legal localizado
 * 
 * @returns Contenido legal mergeado (base + país)
 * 
 * @example
 * ```tsx
 * function PrivacyPage() {
 *   const content = useLegalContent();
 *   
 *   return (
 *     <div>
 *       <p>{content.privacy.intro.text}</p>
 *       {content.privacy.internationalTransfer && (
 *         <div>
 *           <h3>{content.privacy.internationalTransfer.title}</h3>
 *           <p>{content.privacy.internationalTransfer.content}</p>
 *         </div>
 *       )}
 *     </div>
 *   );
 * }
 * ```
 */
export function useLegalContent(): LegalContent {
  const country = useCountryOptional();
  const lc = country?.locale || 'es';
  
  return useMemo(() => {
    // Cargar overlay por país
    let overlay: Partial<LegalContent> = {};
    
    try {
      switch (lc) {
        case 'co':
          overlay = require('@/content/co/legal').legalContentOverlay;
          break;
        case 'cl':
          overlay = require('@/content/cl/legal').legalContentOverlay;
          break;
        case 'pe':
          overlay = require('@/content/pe/legal').legalContentOverlay;
          break;
        case 'ec':
          overlay = require('@/content/ec/legal').legalContentOverlay;
          break;
        default:
          // Sin overlay, usa solo base
          overlay = {};
      }
    } catch (error) {
      console.warn(`No overlay found for ${lc}, using base content only`);
      overlay = {};
    }
    
    // Deep merge base + overlay
    return deepMerge(legalContentBase, overlay);
  }, [lc]);
}

/**
 * Versión server-side para obtener contenido legal
 * 
 * @param lc - Locale code
 * @returns Contenido legal mergeado
 */
export function getLegalContent(lc: string): LegalContent {
  let overlay: Partial<LegalContent> = {};
  
  try {
    switch (lc) {
      case 'co':
        overlay = require('@/content/co/legal').legalContentOverlay;
        break;
      case 'cl':
        overlay = require('@/content/cl/legal').legalContentOverlay;
        break;
      case 'pe':
        overlay = require('@/content/pe/legal').legalContentOverlay;
        break;
      case 'ec':
        overlay = require('@/content/ec/legal').legalContentOverlay;
        break;
      default:
        overlay = {};
    }
  } catch (error) {
    console.warn(`No overlay found for ${lc}, using base content only`);
    overlay = {};
  }
  
  return deepMerge(legalContentBase, overlay);
}

