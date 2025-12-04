/**
 * FORJA DIGITAL - Schema.org Service
 * 
 * Componente para generar JSON-LD de tipo Service.
 * Representa un servicio específico con areaServed por país.
 * 
 * @module components/seo/SchemaService
 */

import { ORG } from '@/lib/org';

export interface SchemaServiceProps {
  /** Nombre del servicio */
  name: string;
  /** Descripción del servicio */
  description: string;
  /** URL del servicio */
  url: string;
  /** País al que se dirige el servicio */
  areaServed: string;
  /** Código ISO del país (CO, CL, PE, EC) */
  areaServedCode?: string;
  /** Moneda para el precio (opcional, USD o COP) */
  priceCurrency?: 'USD' | 'COP';
  /** Precio base (opcional) */
  price?: number;
  /** Categoría del servicio */
  category?: string;
  /** Imagen del servicio */
  image?: string;
}

/**
 * Schema.org Service para SEO
 * 
 * Representa un servicio específico dirigido a un país.
 * 
 * @example
 * ```tsx
 * import { SchemaService } from '@/components/seo/SchemaService';
 * 
 * export default function ServicePage() {
 *   return (
 *     <>
 *       <SchemaService
 *         name="Arquitectura Estratégica"
 *         description="Diseño y optimización de estructuras empresariales"
 *         url="https://www.forjadigital.com/es-cl/servicios/arquitectura"
 *         areaServed="Chile"
 *         areaServedCode="CL"
 *         priceCurrency="USD"
 *       />
 *       {// contenido }
 *     </>
 *   );
 * }
 * ```
 */
export function SchemaService({
  name,
  description,
  url,
  areaServed,
  areaServedCode,
  priceCurrency,
  price,
  category,
  image,
}: SchemaServiceProps) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    description,
    url,
    provider: {
      '@type': 'Organization',
      '@id': `${ORG.baseUrl}/#organization`,
      name: ORG.brandName,
      legalName: ORG.legalName,
      taxID: ORG.nit,
      address: {
        '@type': 'PostalAddress',
        addressCountry: ORG.countryOfIncorporation,
        addressLocality: ORG.city,
      },
    },
    areaServed: {
      '@type': 'Country',
      name: areaServed,
      ...(areaServedCode && { identifier: areaServedCode }),
    },
    serviceType: category || 'Business Consulting',
    termsOfService: `${ORG.baseUrl}/es/legal/terminos`,
  };

  // Agregar precio si está disponible
  if (priceCurrency && price) {
    schema.offers = {
      '@type': 'Offer',
      priceCurrency,
      price: price.toString(),
      availability: 'https://schema.org/InStock',
      url,
      validFrom: new Date().toISOString().split('T')[0],
    };
  } else if (priceCurrency) {
    // Solo indicar la moneda sin precio específico
    schema.offers = {
      '@type': 'Offer',
      priceCurrency,
      availability: 'https://schema.org/InStock',
      url,
    };
  }

  // Agregar imagen si está disponible
  if (image) {
    schema.image = image;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Función helper para obtener el nombre del país desde el locale code
 */
export function getCountryName(lc: string): string {
  const countryMap: Record<string, string> = {
    'es-co': 'Colombia',
    'es-cl': 'Chile',
    'es-pe': 'Perú',
    'es-ec': 'Ecuador',
    'es': 'América Latina',
  };
  return countryMap[lc] || 'América Latina';
}

/**
 * Función helper para obtener el código ISO del país
 */
export function getCountryCode(lc: string): string | undefined {
  const codeMap: Record<string, string> = {
    'es-co': 'CO',
    'es-cl': 'CL',
    'es-pe': 'PE',
    'es-ec': 'EC',
  };
  return codeMap[lc];
}

/**
 * Función para generar el schema sin renderizarlo
 * Útil para páginas que necesitan combinar múltiples schemas
 */
export function getServiceSchema(props: SchemaServiceProps) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${props.url}#service`,
    name: props.name,
    description: props.description,
    url: props.url,
    provider: {
      '@type': 'Organization',
      '@id': `${ORG.baseUrl}/#organization`,
      name: ORG.brandName,
      legalName: ORG.legalName,
      taxID: ORG.nit,
      address: {
        '@type': 'PostalAddress',
        addressCountry: ORG.countryOfIncorporation,
        addressLocality: ORG.city,
      },
    },
    areaServed: {
      '@type': 'Country',
      name: props.areaServed,
      ...(props.areaServedCode && { identifier: props.areaServedCode }),
    },
    serviceType: props.category || 'Business Consulting',
    termsOfService: `${ORG.baseUrl}/es/legal/terminos`,
  };

  if (props.priceCurrency && props.price) {
    schema.offers = {
      '@type': 'Offer',
      priceCurrency: props.priceCurrency,
      price: props.price.toString(),
      availability: 'https://schema.org/InStock',
      url: props.url,
      validFrom: new Date().toISOString().split('T')[0],
    };
  } else if (props.priceCurrency) {
    schema.offers = {
      '@type': 'Offer',
      priceCurrency: props.priceCurrency,
      availability: 'https://schema.org/InStock',
      url: props.url,
    };
  }

  if (props.image) {
    schema.image = props.image;
  }

  return schema;
}

