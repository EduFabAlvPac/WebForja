/**
 * FORJA DIGITAL - Español General Home Content Overlay
 * 
 * Para el locale general 'es' (internacional).
 * Usa contenido base sin modificaciones específicas.
 * 
 * @module content/es/home
 */

import { ORG } from '@/lib/org';
import type { HomeContent } from '@/content/base/home';

/**
 * Overlay para español general (internacional)
 * Mantiene contenido neutro con pequeños ajustes
 */
export const homeContentOverlay: Partial<HomeContent> = {
  legal: {
    note: `Servicio de consultoría exportado desde Colombia por ${ORG.legalName} – ${ORG.nit}`,
  },
};

