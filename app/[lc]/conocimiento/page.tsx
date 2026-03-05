/**
 * Centro de Conocimiento ForjaConsulting (localizado)
 * @module app/[lc]/conocimiento/page
 */

import { Metadata } from 'next'
import { ConocimientoPageClient } from '@/components/conocimiento/ConocimientoPageClient'
import { ORG } from '@/lib/org'
import { getCountryByLocale } from '@/lib/country'

interface PageProps {
  params: { lc: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lc } = params
  const country = getCountryByLocale(lc)
  const countryName = country?.name ?? 'LATAM'

  return {
    title: `Centro de Conocimiento | ForjaConsulting${countryName !== 'LATAM' ? ` en ${countryName}` : ''}`,
    description:
      'Guías prácticas, análisis de tendencias y herramientas concretas para líderes de PYMEs en América Latina.',
    alternates: {
      canonical: `${ORG.baseUrl}/${lc}/conocimiento`,
    },
  }
}

export default function ConocimientoLocalePage() {
  return <ConocimientoPageClient />
}
