'use client'

export function OrganizationStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ForjaDigitalAE',
    alternateName: 'Forja Digital - AE',
    url: 'https://forjadigitalae.com',
    logo: 'https://forjadigitalae.com/logo.png',
    description: 'Consultoría empresarial especializada en arquitectura estratégica y transformación digital para PYMEs latinoamericanas',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bogotá',
      addressCountry: 'CO',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+57-300-123-4567',
      contactType: 'customer service',
      email: 'forjadigitalae@gmail.com',
      availableLanguage: ['es', 'en'],
      areaServed: ['CO', 'LATAM'],
    },
    sameAs: [
      'https://www.linkedin.com/company/forjadigitalae',
      'https://www.facebook.com/forjadigitalae',
      'https://twitter.com/forjadigitalae',
      'https://www.instagram.com/forjadigitalae',
    ],
    founder: {
      '@type': 'Person',
      name: 'Eduardo Fabián Álvarez Pacheco',
    },
    foundingDate: '2024',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '5-10',
    },
    slogan: 'El futuro no se espera, se forja',
    knowsAbout: [
      'Arquitectura Empresarial',
      'Transformación Digital',
      'Consultoría Estratégica',
      'Optimización de Procesos',
      'Analítica de Negocios',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function WebSiteStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ForjaDigitalAE',
    url: 'https://forjadigitalae.com',
    description: 'Arquitectos del Crecimiento PYME - Consultoría empresarial especializada',
    inLanguage: 'es-CO',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://forjadigitalae.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function ServiceStructuredData({ service }: { service: string }) {
  const services: Record<string, any> = {
    'arquitectura-estrategica': {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Arquitectura Estratégica Empresarial',
      provider: {
        '@type': 'Organization',
        name: 'ForjaDigitalAE',
      },
      description: 'Diseño y optimización de la estructura empresarial para alinear estrategia, procesos y tecnología',
      areaServed: 'LATAM',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: 'https://forjadigitalae.com/servicios/estrategia-transformacion/arquitectura-estrategica',
      },
    },
    'transformacion-digital': {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Transformación Digital 360°',
      provider: {
        '@type': 'Organization',
        name: 'ForjaDigitalAE',
      },
      description: 'Modernización integral de procesos, tecnología y cultura empresarial',
      areaServed: 'LATAM',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: 'https://forjadigitalae.com/servicios/estrategia-transformacion/transformacion-digital',
      },
    },
  }

  const structuredData = services[service]

  if (!structuredData) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function BreadcrumbStructuredData({ items }: { items: Array<{ name: string; url: string }> }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function FAQStructuredData({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

