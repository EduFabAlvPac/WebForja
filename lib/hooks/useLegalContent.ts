/**
 * FORJA DIGITAL - Legal Content Hook (Client-side)
 * 
 * Hook para obtener contenido legal mergeado (base + overlay por país)
 * en Client Components.
 * 
 * Para Server Components, usa getLegalContent de '@/lib/legal-content'
 * 
 * @module lib/hooks/useLegalContent
 */

'use client';

import { useMemo } from 'react';
import { useCountryOptional } from '@/context/CountryProvider';
import { legalContentBase, LegalContent } from '@/content/base/legal';
import { deepMerge } from '@/lib/legal-content';

// Re-export para backwards compatibility
export { getLegalContent } from '@/lib/legal-content';

/**
 * Hook para obtener contenido legal localizado (Client-side)
 * 
 * @returns Contenido legal mergeado (base + país)
 * 
 * @example
 * ```tsx
 * 'use client';
 * 
 * function PrivacySection() {
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
