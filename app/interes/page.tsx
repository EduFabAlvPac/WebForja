/**
 * FORJA DIGITAL - Interest Hub Page (International)
 * 
 * Página hub de contenido de interés - versión internacional.
 * Incluye SEO con hreflang y metadata optimizado.
 * 
 * @module app/interes/page
 */

import { Metadata } from 'next';
import { CountryProvider } from '@/context/CountryProvider';
import { InterestHubClient } from '@/components/interest/InterestHubClient';
import { ORG } from '@/lib/org';

// ═══════════════════════════════════════════════════════════════════════════
// METADATA
// ═══════════════════════════════════════════════════════════════════════════

export const metadata: Metadata = {
  title: 'Recursos de Interés para PYMEs | Forja Digital',
  description: 'Artículos, guías, programas gubernamentales y recursos para impulsar la transformación digital de tu empresa en Latinoamérica.',
  keywords: [
    'recursos pymes',
    'transformación digital',
    'programas gubernamentales',
    'guías empresariales',
    'financiamiento pymes',
    'latinoamérica',
    'forja digital',
  ],
  alternates: {
    canonical: `${ORG.baseUrl}/interes`,
    languages: {
      'es': `${ORG.baseUrl}/interes`,
      'es-CO': `${ORG.baseUrl}/co/interes`,
      'es-CL': `${ORG.baseUrl}/cl/interes`,
      'es-PE': `${ORG.baseUrl}/pe/interes`,
      'es-EC': `${ORG.baseUrl}/ec/interes`,
      'x-default': `${ORG.baseUrl}/interes`,
    },
  },
  openGraph: {
    title: 'Recursos de Interés para PYMEs | Forja Digital',
    description: 'Artículos, guías, programas gubernamentales y recursos para impulsar la transformación digital de tu empresa.',
    url: `${ORG.baseUrl}/interes`,
    siteName: ORG.brandName,
    locale: 'es',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recursos de Interés para PYMEs | Forja Digital',
    description: 'Artículos, guías y programas para impulsar la transformación digital de tu empresa.',
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// SCHEMA JSON-LD
// ═══════════════════════════════════════════════════════════════════════════

function SchemaCollectionPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Recursos de Interés para PYMEs',
    description: 'Colección de artículos, guías y recursos para la transformación digital de PYMEs en Latinoamérica.',
    url: `${ORG.baseUrl}/interes`,
    inLanguage: 'es',
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

export default function InterestPage() {
  return (
    <CountryProvider locale="es">
      <SchemaCollectionPage />
      <InterestHubClient locale="es" />
    </CountryProvider>
  );
}
