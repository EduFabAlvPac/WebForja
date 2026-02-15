/**
 * FORJA DIGITAL - Subpáginas de Talento & Finanzas Localizadas
 * 
 * Ruta dinámica que maneja gestion-talento-estrategico e ingenieria-financiera
 * 
 * @module app/[lc]/servicios/talento-finanzas/[slug]/page
 */

import { notFound } from 'next/navigation'

// Re-export dinámico de las páginas existentes
import GestionTalentoEstrategicoPage from '@/app/servicios/talento-finanzas/gestion-talento-estrategico/page'
import IngenieriaFinancieraPage from '@/app/servicios/talento-finanzas/ingenieria-financiera/page'

interface PageProps {
  params: {
    lc: string
    slug: string
  }
}

const VALID_SLUGS = ['gestion-talento-estrategico', 'ingenieria-financiera']

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
    case 'gestion-talento-estrategico':
      return <GestionTalentoEstrategicoPage />
    case 'ingenieria-financiera':
      return <IngenieriaFinancieraPage />
    default:
      notFound()
  }
}

