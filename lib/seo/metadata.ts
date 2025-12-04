/**
 * FORJA DIGITAL - SEO Metadata Helpers
 * 
 * Helpers para generar metadata con hreflang y canonical correctos
 * 
 * @module lib/seo/metadata
 */

import { Metadata } from 'next';
import { ORG } from '@/lib/org';

export const SUPPORTED_LOCALES = ['es', 'es-co', 'es-cl', 'es-pe', 'es-ec'] as const;
export type SupportedLocale = typeof SUPPORTED_LOCALES[number];

export interface GenerateI18nMetadataParams {
  /** Locale code actual (es-co, es-cl, etc.) */
  lc: string;
  /** Path relativo sin el locale (ej: /servicios/arquitectura) */
  pathname: string;
  /** Title de la página */
  title: string;
  /** Description de la página */
  description: string;
  /** Keywords (opcional) */
  keywords?: string;
  /** Metadata adicional */
  additionalMetadata?: Partial<Metadata>;
}

/**
 * Genera metadata completo con hreflang, canonical y alternates
 * 
 * @param params - Parámetros para generar metadata
 * @returns Metadata de Next.js con hreflang y canonical
 * 
 * @example
 * ```tsx
 * export async function generateMetadata({ params }: { params: { lc: string } }): Promise<Metadata> {
 *   return generateI18nMetadata({
 *     lc: params.lc,
 *     pathname: '/servicios/arquitectura',
 *     title: 'Arquitectura Estratégica | Forja Digital',
 *     description: 'Diseño y optimización de estructuras empresariales.',
 *   });
 * }
 * ```
 */
export function generateI18nMetadata({
  lc,
  pathname,
  title,
  description,
  keywords,
  additionalMetadata = {},
}: GenerateI18nMetadataParams): Metadata {
  // Asegurar que pathname empieza con /
  const cleanPathname = pathname.startsWith('/') ? pathname : `/${pathname}`;
  
  // URL canonical: baseUrl + locale + pathname
  const canonicalUrl = `${ORG.baseUrl}/${lc}${cleanPathname}`;
  
  // Generar alternates para cada locale
  const languages: Record<string, string> = {};
  SUPPORTED_LOCALES.forEach((locale) => {
    languages[locale] = `${ORG.baseUrl}/${locale}${cleanPathname}`;
  });
  
  // x-default apunta al español genérico
  languages['x-default'] = `${ORG.baseUrl}/es${cleanPathname}`;

  return {
    title,
    description,
    ...(keywords && { keywords }),
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: ORG.brandName,
      locale: lc,
      type: 'website',
      ...additionalMetadata.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...additionalMetadata.twitter,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    ...additionalMetadata,
  };
}

/**
 * Genera solo las alternates (hreflang + canonical)
 * Útil cuando necesitas más control sobre el resto de metadata
 * 
 * @param lc - Locale code
 * @param pathname - Path sin locale
 * @returns Object con canonical y languages
 */
export function generateAlternates(lc: string, pathname: string) {
  const cleanPathname = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const canonicalUrl = `${ORG.baseUrl}/${lc}${cleanPathname}`;
  
  const languages: Record<string, string> = {};
  SUPPORTED_LOCALES.forEach((locale) => {
    languages[locale] = `${ORG.baseUrl}/${locale}${cleanPathname}`;
  });
  languages['x-default'] = `${ORG.baseUrl}/es${cleanPathname}`;

  return {
    canonical: canonicalUrl,
    languages,
  };
}

/**
 * Obtiene la URL completa para un path y locale
 */
export function getFullUrl(lc: string, pathname: string): string {
  const cleanPathname = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${ORG.baseUrl}/${lc}${cleanPathname}`;
}

/**
 * Obtiene todas las URLs alternativas para un path
 */
export function getAllAlternateUrls(pathname: string): Array<{ lc: string; url: string }> {
  const cleanPathname = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return SUPPORTED_LOCALES.map((lc) => ({
    lc,
    url: `${ORG.baseUrl}/${lc}${cleanPathname}`,
  }));
}
