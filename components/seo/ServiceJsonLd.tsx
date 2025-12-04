/**
 * ServiceJsonLd - JSON-LD estructurado para páginas de servicios
 * 
 * Incluye:
 * - Service schema completo
 * - Provider (Organization)
 * - AreaServed
 * - Offers con pricing
 * - BreadcrumbList
 */

const SITE_URL = 'https://forjadigital.co'

interface ServiceJsonLdProps {
  name: string
  description: string
  slug: string
  category?: string
  image?: string
  priceCurrency?: 'COP' | 'USD'
  priceRange?: string
  duration?: string
  breadcrumbs?: Array<{ name: string; url: string }>
}

export function ServiceJsonLd({
  name,
  description,
  slug,
  category,
  image,
  priceCurrency = 'COP',
  priceRange = 'Consultar',
  duration,
  breadcrumbs,
}: ServiceJsonLdProps) {
  const serviceUrl = `${SITE_URL}/servicios/${slug}`

  // Service Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${serviceUrl}/#service`,
    name,
    description,
    url: serviceUrl,
    image: image || `${SITE_URL}/og-image.png`,
    provider: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Forja Digital - AE',
      url: SITE_URL,
      logo: `${SITE_URL}/logo-color.png`,
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'Colombia',
        '@id': 'https://www.wikidata.org/wiki/Q739',
      },
      {
        '@type': 'Country',
        name: 'México',
      },
      {
        '@type': 'Country',
        name: 'Perú',
      },
      {
        '@type': 'Country',
        name: 'Ecuador',
      },
      {
        '@type': 'Country',
        name: 'Chile',
      },
      {
        '@type': 'Country',
        name: 'Argentina',
      },
      {
        '@type': 'Country',
        name: 'Panamá',
      },
      {
        '@type': 'Country',
        name: 'Costa Rica',
      },
    ],
    serviceType: category || 'Consultoría Empresarial',
    category: category || 'Business Consulting',
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'PYMEs',
      geographicArea: {
        '@type': 'AdministrativeArea',
        name: 'Latinoamérica',
      },
    },
    offers: {
      '@type': 'Offer',
      url: serviceUrl,
      priceCurrency,
      price: priceRange,
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency,
        price: priceRange,
      },
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString().split('T')[0],
    },
    ...(duration && {
      providerMobility: 'dynamic',
      termsOfService: `Duración estimada: ${duration}`,
    }),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Opciones de ${name}`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Diagnóstico Inicial',
            description: 'Evaluación gratuita de la situación actual',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Implementación Completa',
            description: 'Servicio integral con acompañamiento',
          },
        },
      ],
    },
  }

  // WebPage Schema
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${serviceUrl}/#webpage`,
    url: serviceUrl,
    name: `${name} | Forja Digital - AE`,
    description,
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
    about: {
      '@id': `${serviceUrl}/#service`,
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: image || `${SITE_URL}/og-image.png`,
    },
    inLanguage: 'es-CO',
    dateModified: new Date().toISOString().split('T')[0],
  }

  // Breadcrumb Schema
  const breadcrumbSchema = breadcrumbs
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
        })),
      }
    : {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Inicio',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Servicios',
            item: `${SITE_URL}/servicios`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name,
            item: serviceUrl,
          },
        ],
      }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}

