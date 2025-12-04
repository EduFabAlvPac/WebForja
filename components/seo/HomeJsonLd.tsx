/**
 * HomeJsonLd - JSON-LD estructurado para la página de inicio
 * 
 * Incluye:
 * - Organization (datos del negocio)
 * - WebSite con SearchAction
 * - LocalBusiness para SEO local
 */

const SITE_URL = 'https://forjadigital.co'

export function HomeJsonLd() {
  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Forja Digital - AE',
    alternateName: 'ForjaDigitalAE',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo-color.png`,
      width: 512,
      height: 512,
    },
    image: `${SITE_URL}/og-image.png`,
    description: 'Consultora líder en transformación digital y arquitectura empresarial para PYMEs en Colombia y Latinoamérica. Metodología FORJA® probada con +200 empresas en 8 países.',
    slogan: 'El futuro no se espera, se forja',
    foundingDate: '2015',
    founder: {
      '@type': 'Person',
      name: 'Eduardo Fabián Álvarez Pacheco',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bogotá',
      addressRegion: 'Bogotá D.C.',
      addressCountry: 'CO',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+57-300-123-4567',
        contactType: 'customer service',
        email: 'forjadigitalae@gmail.com',
        availableLanguage: ['es', 'en'],
        areaServed: ['CO', 'MX', 'PE', 'EC', 'CL', 'AR', 'PA', 'CR'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+57-300-123-4567',
        contactType: 'sales',
        email: 'forjadigitalae@gmail.com',
        availableLanguage: ['es'],
      },
    ],
    sameAs: [
      'https://www.linkedin.com/company/forjadigitalae',
      'https://www.facebook.com/forjadigitalae',
      'https://twitter.com/forjadigitalae',
      'https://www.instagram.com/forjadigitalae',
    ],
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 5,
      maxValue: 15,
    },
    knowsAbout: [
      'Arquitectura Empresarial',
      'Transformación Digital',
      'Consultoría Estratégica',
      'Optimización de Procesos',
      'Analítica de Negocios',
      'Gestión del Talento',
      'Ingeniería Financiera',
      'Excelencia Operativa',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Consultoría FORJA',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Rayos-X Empresarial',
            description: 'Diagnóstico empresarial gratuito en 15 minutos',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Arquitectura Estratégica',
            description: 'Diseño de la estructura empresarial óptima',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Transformación Digital',
            description: 'Modernización integral de procesos y tecnología',
          },
        },
      ],
    },
  }

  // WebSite Schema con SearchAction
  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Forja Digital - AE',
    description: 'Arquitectos del Crecimiento PYME - Consultoría empresarial especializada en transformación digital',
    inLanguage: 'es-CO',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/servicios?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  // WebPage Schema para Home
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: 'Forja Digital - AE | Transformación Digital y Arquitectura Empresarial',
    description: 'Consultora líder en transformación digital y arquitectura empresarial para PYMEs en Colombia y Latinoamérica.',
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
    about: {
      '@id': `${SITE_URL}/#organization`,
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/og-image.png`,
    },
    inLanguage: 'es-CO',
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
    </>
  )
}

