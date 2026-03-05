/**
 * FORJA DIGITAL - Download Utilities
 * 
 * Utilidades para gestionar descargas de lead magnets.
 * Genera URLs de descarga y maneja la entrega de archivos.
 * 
 * @module utils/download
 */

import { trackEvent } from '@/lib/analytics';

// ═══════════════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════════════

export interface DownloadLeadData {
  name: string;
  email: string;
  company: string;
  country: string;
}

export interface DownloadResult {
  success: boolean;
  downloadUrl?: string;
  error?: string;
}

// ═══════════════════════════════════════════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════════════════════════════════════════

const FILES_BASE_PATH = '/files';

// Mapeo de slugs a nombres de archivos reales
const FILE_MAPPING: Record<string, string> = {
  // Colombia
  'checklist-formalizacion-empresa-colombia': 'co-checklist-formalizacion.pdf',
  // Chile
  'guia-inicio-actividades-sii-chile': 'cl-guia-inicio-actividades.pdf',
  // Perú
  'checklist-formalizacion-empresa-peru': 'pe-checklist-formalizacion.pdf',
  // Ecuador
  'guia-constitucion-empresa-ecuador': 'ec-guia-constitucion-empresa.pdf',
  'checklist-obligaciones-sri-ecuador': 'ec-checklist-obligaciones-sri.pdf',
  // Base/Universal
  'template-plan-digitalizacion': 'plan-digitalizacion-template.xlsx',
  'checklist-seguridad-informatica': 'checklist-seguridad.pdf',
};

// ═══════════════════════════════════════════════════════════════════════════
// FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Genera la URL de descarga para un recurso.
 * 
 * @param slug - Slug del recurso descargable
 * @returns URL de descarga o null si no existe
 */
export function getDownloadUrl(slug: string): string | null {
  const fileName = FILE_MAPPING[slug];
  
  if (!fileName) {
    // Fallback: intentar con el slug directamente
    return `${FILES_BASE_PATH}/${slug}.pdf`;
  }
  
  return `${FILES_BASE_PATH}/${fileName}`;
}

/**
 * Procesa una solicitud de descarga con datos de lead.
 * Registra el lead y devuelve la URL de descarga.
 * 
 * @param slug - Slug del recurso
 * @param leadData - Datos del formulario
 * @param locale - Código de país/locale
 * @returns Resultado con URL de descarga o error
 */
export async function processDownload(
  slug: string,
  leadData: DownloadLeadData,
  locale: string = 'es'
): Promise<DownloadResult> {
  try {
    // 1. Validar que existe el archivo
    const downloadUrl = getDownloadUrl(slug);
    
    if (!downloadUrl) {
      return {
        success: false,
        error: 'Recurso no encontrado',
      };
    }

    // 2. Registrar el lead (en producción, esto iría a un CRM o base de datos)
    await registerLead(slug, leadData, locale);

    // 3. Trackear la descarga
    trackEvent('download_interest', {
      slug,
      lc: locale,
      company: leadData.company,
      country: leadData.country,
    });

    // 4. Devolver URL de descarga
    return {
      success: true,
      downloadUrl,
    };
  } catch (error) {
    console.error('Error processing download:', error);
    return {
      success: false,
      error: 'Error al procesar la descarga. Por favor, intenta de nuevo.',
    };
  }
}

/**
 * Registra un lead en el sistema.
 * En producción, esto enviaría los datos a un CRM o base de datos.
 * 
 * @param slug - Slug del recurso descargado
 * @param leadData - Datos del lead
 * @param locale - Locale actual
 */
async function registerLead(
  slug: string,
  leadData: DownloadLeadData,
  locale: string
): Promise<void> {
  // En desarrollo, solo loggeamos
  if (process.env.NODE_ENV === 'development') {
    console.log('📥 New lead registered:', {
      resource: slug,
      locale,
      ...leadData,
      timestamp: new Date().toISOString(),
    });
    return;
  }

  // En producción, aquí iría la integración con:
  // - API de CRM (HubSpot, Salesforce, etc.)
  // - Base de datos
  // - Email marketing (Mailchimp, SendGrid, etc.)
  
  // Ejemplo de llamada a API:
  // await fetch('/api/leads', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     source: 'interest_download',
  //     resource: slug,
  //     locale,
  //     ...leadData,
  //   }),
  // });
}

/**
 * Inicia la descarga de un archivo.
 * Crea un link temporal y lo activa.
 * 
 * @param url - URL del archivo a descargar
 * @param filename - Nombre sugerido para el archivo
 */
export function triggerDownload(url: string, filename?: string): void {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename || url.split('/').pop() || 'download';
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Valida si un email es corporativo (no gratuito).
 * 
 * @param email - Email a validar
 * @returns true si parece ser un email corporativo
 */
export function isBusinessEmail(email: string): boolean {
  const freeEmailDomains = [
    'gmail.com',
    'yahoo.com',
    'hotmail.com',
    'outlook.com',
    'live.com',
    'msn.com',
    'aol.com',
    'icloud.com',
    'mail.com',
    'protonmail.com',
    'zoho.com',
    'yandex.com',
    'gmx.com',
    'gmx.net',
  ];
  
  const domain = email.split('@')[1]?.toLowerCase();
  
  if (!domain) return false;
  
  // Si está en la lista de dominios gratuitos, no es corporativo
  // Pero para este caso, permitimos todos los emails
  return true; // Cambiar a: !freeEmailDomains.includes(domain) para restringir
}

export default {
  getDownloadUrl,
  processDownload,
  triggerDownload,
  isBusinessEmail,
};

