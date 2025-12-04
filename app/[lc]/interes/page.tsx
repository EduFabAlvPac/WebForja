/**
 * FORJA DIGITAL - Interest Hub Page
 * 
 * Página hub de contenido de interés multi-país.
 * Incluye SEO con hreflang, canonical y metadata optimizado.
 * 
 * @module app/[lc]/interes/page
 */

import { Metadata } from 'next';
import { InterestHubClient } from '@/components/interest/InterestHubClient';
import { ORG } from '@/lib/org';
import { COUNTRIES, SUPPORTED_LOCALES } from '@/lib/country';

// ═══════════════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════════════

interface PageProps {
  params: {
    lc: string;
  };
}

// ═══════════════════════════════════════════════════════════════════════════
// SEO HELPERS
// ═══════════════════════════════════════════════════════════════════════════

const COUNTRY_NAMES: Record<string, string> = {
  es: 'Internacional',
  co: 'Colombia',
  cl: 'Chile',
  pe: 'Perú',
  ec: 'Ecuador',
};

function getCountryTitle(locale: string): string {
  return COUNTRY_NAMES[locale] || 'Internacional';
}

// ═══════════════════════════════════════════════════════════════════════════
// METADATA
// ═══════════════════════════════════════════════════════════════════════════

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = params.lc;
  const countryName = getCountryTitle(locale);
  const isInternational = locale === 'es';
  
  const title = isInternational
    ? 'Recursos de Interés para PYMEs | Forja Digital'
    : `Recursos de Interés para PYMEs en ${countryName} | Forja Digital`;
  
  const description = isInternational
    ? 'Artículos, guías, programas gubernamentales y recursos para impulsar la transformación digital de tu empresa en Latinoamérica.'
    : `Artículos, guías, programas gubernamentales y recursos para impulsar la transformación digital de tu empresa en ${countryName}.`;

  const canonicalUrl = `${ORG.baseUrl}/${locale}/interes`;

  // Construir alternates para hreflang
  const languages: Record<string, string> = {
    'es': `${ORG.baseUrl}/interes`,
    'es-CO': `${ORG.baseUrl}/co/interes`,
    'es-CL': `${ORG.baseUrl}/cl/interes`,
    'es-PE': `${ORG.baseUrl}/pe/interes`,
    'es-EC': `${ORG.baseUrl}/ec/interes`,
    'x-default': `${ORG.baseUrl}/interes`,
  };

  return {
    title,
    description,
    keywords: [
      'recursos pymes',
      'transformación digital',
      'programas gubernamentales',
      'guías empresariales',
      'financiamiento pymes',
      countryName.toLowerCase(),
      'forja digital',
    ],
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: ORG.brandName,
      locale: isInternational ? 'es' : `es_${locale.toUpperCase()}`,
      type: 'website',
      images: [
        {
          url: `${ORG.baseUrl}/og/interes.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${ORG.baseUrl}/og/interes.jpg`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// ═══════════════════════════════════════════════════════════════════════════
// STATIC PARAMS
// ═══════════════════════════════════════════════════════════════════════════

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map(lc => ({ lc }));
}

// ═══════════════════════════════════════════════════════════════════════════
// SCHEMA JSON-LD
// ═══════════════════════════════════════════════════════════════════════════

function SchemaCollectionPage({ locale }: { locale: string }) {
  const countryName = getCountryTitle(locale);
  const isInternational = locale === 'es';
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: isInternational
      ? 'Recursos de Interés para PYMEs'
      : `Recursos de Interés para PYMEs en ${countryName}`,
    description: isInternational
      ? 'Colección de artículos, guías y recursos para la transformación digital de PYMEs.'
      : `Colección de artículos, guías y recursos para PYMEs en ${countryName}.`,
    url: `${ORG.baseUrl}/${locale}/interes`,
    inLanguage: isInternational ? 'es' : `es-${locale.toUpperCase()}`,
    isPartOf: {
      '@type': 'WebSite',
      name: ORG.brandName,
      url: ORG.baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: ORG.brandName,
      url: ORG.baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${ORG.baseUrl}/logo.png`,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 0) }}
    />
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// PAGE COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export default function InterestPage({ params }: PageProps) {
  return (
    <>
      <SchemaCollectionPage locale={params.lc} />
      <InterestHubClient locale={params.lc} />
    </>
  );
}
