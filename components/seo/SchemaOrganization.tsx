/**
 * FORJA DIGITAL - Schema.org Organization
 * 
 * Componente para generar JSON-LD de tipo Organization.
 * Representa la entidad legal única (Forja Digital AE SAS, Colombia).
 * 
 * @module components/seo/SchemaOrganization
 */

import { ORG } from '@/lib/org';

export interface SchemaOrganizationProps {
  /** URL completa de la página actual (opcional, usa baseUrl por defecto) */
  url?: string;
  /** Agregar datos adicionales al schema */
  additionalData?: Record<string, any>;
}

/**
 * Schema.org Organization para SEO
 * 
 * Representa la empresa como una única entidad legal global.
 * 
 * @example
 * ```tsx
 * import { SchemaOrganization } from '@/components/seo/SchemaOrganization';
 * 
 * export default function Page() {
 *   return (
 *     <>
 *       <SchemaOrganization />
 *       {// contenido }
 *     </>
 *   );
 * }
 * ```
 */
export function SchemaOrganization({ url, additionalData }: SchemaOrganizationProps = {}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${ORG.baseUrl}/#organization`,
    name: ORG.brandName,
    legalName: ORG.legalName,
    url: url || ORG.baseUrl,
    logo: `${ORG.baseUrl}/logo.png`,
    description: 'Consultoría empresarial especializada en arquitectura estratégica y transformación digital para PYMEs en Latinoamérica.',
    email: ORG.email,
    telephone: ORG.phoneMain || undefined,
    address: {
      '@type': 'PostalAddress',
      addressCountry: ORG.countryOfIncorporation,
      addressLocality: ORG.city,
    },
    taxID: ORG.nit,
    foundingDate: '2024',
    foundingLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressCountry: ORG.countryOfIncorporation,
        addressLocality: ORG.city,
      },
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'Colombia',
      },
      {
        '@type': 'Country',
        name: 'Chile',
      },
      {
        '@type': 'Country',
        name: 'Perú',
      },
      {
        '@type': 'Country',
        name: 'Ecuador',
      },
    ],
    sameAs: [
      'https://www.linkedin.com/company/forjadigitalae',
      'https://www.facebook.com/forjadigitalae',
      'https://twitter.com/forjadigitalae',
      'https://www.instagram.com/forjadigitalae',
    ],
    ...additionalData,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Función para generar el schema sin renderizarlo
 * Útil para páginas que necesitan combinar múltiples schemas
 */
export function getOrganizationSchema(url?: string, additionalData?: Record<string, any>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${ORG.baseUrl}/#organization`,
    name: ORG.brandName,
    legalName: ORG.legalName,
    url: url || ORG.baseUrl,
    logo: `${ORG.baseUrl}/logo.png`,
    description: 'Consultoría empresarial especializada en arquitectura estratégica y transformación digital para PYMEs en Latinoamérica.',
    email: ORG.email,
    telephone: ORG.phoneMain || undefined,
    address: {
      '@type': 'PostalAddress',
      addressCountry: ORG.countryOfIncorporation,
      addressLocality: ORG.city,
    },
    taxID: ORG.nit,
    foundingDate: '2024',
    foundingLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressCountry: ORG.countryOfIncorporation,
        addressLocality: ORG.city,
      },
    },
    areaServed: [
      { '@type': 'Country', name: 'Colombia' },
      { '@type': 'Country', name: 'Chile' },
      { '@type': 'Country', name: 'Perú' },
      { '@type': 'Country', name: 'Ecuador' },
    ],
    sameAs: [
      'https://www.linkedin.com/company/forjadigitalae',
      'https://www.facebook.com/forjadigitalae',
      'https://twitter.com/forjadigitalae',
      'https://www.instagram.com/forjadigitalae',
    ],
    ...additionalData,
  };
}

