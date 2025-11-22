import { Metadata } from 'next'
import config from '@/lib/config'

interface PageMetadata {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonical?: string
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  ogImage,
  canonical,
}: PageMetadata): Metadata {
  const fullTitle = title.includes('|') ? title : `${title} | ${config.app.name}`
  const url = canonical || config.app.url
  const image = ogImage || `${config.app.url}/logo-color.png`

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    metadataBase: new URL(config.app.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: config.app.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'es_CO',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
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
  }
}

// Metadata preconfigurados para páginas comunes
export const commonMetadata = {
  home: generateMetadata({
    title: 'Transformación Digital y Arquitectura Empresarial',
    description: 'Consultora líder en transformación digital y arquitectura empresarial para PYMEs en Colombia y Latinoamérica. Metodología FORJA probada.',
    keywords: ['transformación digital', 'arquitectura empresarial', 'consultoría digital', 'Colombia', 'PYMEs', 'FORJA'],
  }),
  services: generateMetadata({
    title: 'Nuestros Servicios',
    description: 'Servicios especializados en arquitectura empresarial, transformación digital, optimización de procesos y más. Soluciones a medida para PYMEs.',
    keywords: ['servicios de consultoría', 'arquitectura empresarial', 'transformación digital', 'optimización de procesos'],
  }),
  contact: generateMetadata({
    title: 'Contacto',
    description: 'Contáctanos para iniciar tu transformación digital. Estamos en Bogotá, Colombia, y atendemos toda Latinoamérica.',
    keywords: ['contacto', 'consultoría', 'Bogotá', 'Colombia'],
  }),
  rayosX: generateMetadata({
    title: 'Rayos X Empresarial Gratuito',
    description: 'Descubre el nivel de madurez digital de tu empresa en 5 minutos. Diagnóstico gratuito y personalizado con recomendaciones accionables.',
    keywords: ['diagnóstico digital', 'madurez digital', 'evaluación empresarial', 'gratis'],
  }),
}


