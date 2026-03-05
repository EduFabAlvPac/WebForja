/**
 * FORJA DIGITAL - Legal Content (Server-side)
 * 
 * Funciones para obtener contenido legal en Server Components.
 * Este archivo NO tiene 'use client' para poder ser usado en Server Components.
 * 
 * @module lib/legal-content
 */

import { legalContentBase, LegalContent } from '@/content/base/legal';

/**
 * Deep merge de objetos
 */
export function deepMerge<T>(base: T, overlay: Partial<T>): T {
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
      result[key] = deepMerge(baseValue, overlayValue) as T[Extract<keyof T, string>];
    } else {
      // Usa valor de overlay
      result[key] = overlayValue as T[Extract<keyof T, string>];
    }
  }
  
  return result;
}

/**
 * Obtiene contenido legal localizado (Server-side)
 * 
 * @param lc - Locale code (co, cl, pe, ec)
 * @returns Contenido legal mergeado (base + país)
 * 
 * @example
 * ```tsx
 * // En un Server Component
 * export default function PrivacyPage({ params }: { params: { lc: string } }) {
 *   const content = getLegalContent(params.lc);
 *   return <div>{content.privacy.intro.text}</div>;
 * }
 * ```
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

