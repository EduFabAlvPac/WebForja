/**
 * FORJA DIGITAL - Subpáginas de Comercial & Operaciones Localizadas
 * 
 * Ruta dinámica que maneja excelencia-operativa y comercial-cliente
 * 
 * @module app/[lc]/servicios/comercial-operaciones/[slug]/page
 */

import { notFound } from 'next/navigation'

// Re-export dinámico de las páginas existentes
import ExcelenciaOperativaPage from '@/app/servicios/comercial-operaciones/excelencia-operativa/page'
import ComercialClientePage from '@/app/servicios/comercial-operaciones/comercial-cliente/page'

interface PageProps {
  params: {
    lc: string
    slug: string
  }
}

const VALID_SLUGS = ['excelencia-operativa', 'comercial-cliente']

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
    case 'excelencia-operativa':
      return <ExcelenciaOperativaPage />
    case 'comercial-cliente':
      return <ComercialClientePage />
    default:
      notFound()
  }
}

