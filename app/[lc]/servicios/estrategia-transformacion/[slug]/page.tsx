/**
 * FORJA DIGITAL - Subpáginas de Estrategia & Transformación Localizadas
 * 
 * Ruta dinámica que maneja arquitectura-estrategica y transformacion-digital
 * 
 * @module app/[lc]/servicios/estrategia-transformacion/[slug]/page
 */

import { notFound } from 'next/navigation'

// Re-export dinámico de las páginas existentes
import ArquitecturaEstrategicaPage from '@/app/servicios/estrategia-transformacion/arquitectura-estrategica/page'
import TransformacionDigitalPage from '@/app/servicios/estrategia-transformacion/transformacion-digital/page'

interface PageProps {
  params: {
    lc: string
    slug: string
  }
}

const VALID_SLUGS = ['arquitectura-estrategica', 'transformacion-digital']

export function generateStaticParams() {
  return VALID_SLUGS.map(slug => ({ slug }))
}

export default function ServiceSubPage({ params }: PageProps) {
  const { slug } = params

  if (!VALID_SLUGS.includes(slug)) {
    notFound()
  }

  // Renderizar la página correspondiente
  switch (slug) {
    case 'arquitectura-estrategica':
      return <ArquitecturaEstrategicaPage />
    case 'transformacion-digital':
      return <TransformacionDigitalPage />
    default:
      notFound()
  }
}

