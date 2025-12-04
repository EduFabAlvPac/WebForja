/**
 * FORJA DIGITAL - Country Content Hook
 * 
 * Hook para cargar contenido base + overlay por país con deep-merge.
 * Permite mantener una sola fuente de verdad con variaciones por país.
 * 
 * @module lib/hooks/useCountryContent
 */

'use client';

import { useMemo } from 'react';
import { useCountryOptional } from '@/context/CountryProvider';
import { baseHomeContent, type HomeContent } from '@/content/base/home';

/**
 * Deep merge de dos objetos
 * Los valores del overlay sobrescriben los del base
 * 
 * @param base - Objeto base
 * @param overlay - Objeto con sobrescrituras
 * @returns Objeto merged
 */
function deepMerge<T extends Record<string, any>>(base: T, overlay: Partial<T>): T {
  const result = { ...base };

  for (const key in overlay) {
    const overlayValue = overlay[key];
    const baseValue = base[key];

    if (overlayValue === undefined) {
      continue;
    }

    // Si ambos son objetos, hacer merge recursivo
    if (
      typeof overlayValue === 'object' &&
      overlayValue !== null &&
      !Array.isArray(overlayValue) &&
      typeof baseValue === 'object' &&
      baseValue !== null &&
      !Array.isArray(baseValue)
    ) {
      result[key] = deepMerge(baseValue, overlayValue);
    } else {
      // Sobrescribir directamente
      result[key] = overlayValue as T[Extract<keyof T, string>];
    }
  }

  return result;
}

/**
 * Hook para obtener contenido de home con overlay por país
 * 
 * Carga el contenido base y lo combina con el overlay específico del país.
 * Si no hay overlay, usa el contenido base.
 * 
 * @returns Contenido de home merged (base + overlay)
 * 
 * @example
 * function HomePage() {
 *   const content = useCountryContent();
 *   
 *   return (
 *     <div>
 *       <h1>{content.hero.title}</h1>
 *       <p>{content.hero.subtitle}</p>
 *       <p>{content.contact.whatsapp}</p>
 *     </div>
 *   );
 * }
 */
export function useCountryContent(): HomeContent {
  const country = useCountryOptional();
  const locale = country?.locale || 'es';

  const content = useMemo(() => {
    // Intentar cargar overlay por país
    let overlay: Partial<HomeContent> = {};

    try {
      // Dinámicamente importar el overlay
      // En Client Component, necesitamos usar require dinámico
      switch (locale) {
        case 'co':
          overlay = require('@/content/co/home').homeContentOverlay;
          break;
        case 'cl':
          overlay = require('@/content/cl/home').homeContentOverlay;
          break;
        case 'pe':
          overlay = require('@/content/pe/home').homeContentOverlay;
          break;
        case 'ec':
          overlay = require('@/content/ec/home').homeContentOverlay;
          break;
        case 'es':
          overlay = require('@/content/es/home').homeContentOverlay;
          break;
        default:
          // Sin overlay, usar base
          overlay = {};
      }
    } catch (error) {
      // Si no hay overlay, usar base
      console.warn(`No overlay found for locale: ${locale}, using base content`);
      overlay = {};
    }

    // Hacer deep merge
    return deepMerge(baseHomeContent, overlay);
  }, [locale]);

  return content;
}

/**
 * Función helper para obtener contenido en Server Components
 * 
 * @param locale - Código de locale
 * @returns Contenido de home merged
 * 
 * @example
 * // En Server Component
 * import { getCountryContent } from '@/lib/hooks/useCountryContent';
 * 
 * export default function Page({ params }: { params: { lc: string } }) {
 *   const content = getCountryContent(params.lc);
 *   
 *   return <h1>{content.hero.title}</h1>;
 * }
 */
export function getCountryContent(locale: string): HomeContent {
  let overlay: Partial<HomeContent> = {};

  try {
    switch (locale) {
      case 'co':
        overlay = require('@/content/co/home').homeContentOverlay;
        break;
      case 'cl':
        overlay = require('@/content/cl/home').homeContentOverlay;
        break;
      case 'pe':
        overlay = require('@/content/pe/home').homeContentOverlay;
        break;
      case 'ec':
        overlay = require('@/content/ec/home').homeContentOverlay;
        break;
      case 'es':
        overlay = require('@/content/es/home').homeContentOverlay;
        break;
      default:
        overlay = {};
    }
  } catch (error) {
    overlay = {};
  }

  return deepMerge(baseHomeContent, overlay);
}

