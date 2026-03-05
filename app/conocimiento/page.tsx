/**
 * Centro de Conocimiento ForjaConsulting
 * Conocimiento que tu empresa necesita para crecer hoy.
 *
 * @module app/conocimiento/page
 */

import { Metadata } from 'next'
import { ConocimientoPageClient } from '@/components/conocimiento/ConocimientoPageClient'
import { ORG } from '@/lib/org'

export const metadata: Metadata = {
  title: 'Centro de Conocimiento | ForjaConsulting',
  description:
    'Guías prácticas, análisis de tendencias y herramientas concretas para líderes de PYMEs en América Latina. Sin teoría innecesaria. Sin jerga corporativa.',
  keywords: [
    'conocimiento empresarial',
    'guías PYMEs',
    'liderazgo',
    'operaciones',
    'finanzas',
    'talento',
    'tecnología',
    'IA pymes',
    'ForjaConsulting',
  ],
  alternates: {
    canonical: `${ORG.baseUrl}/conocimiento`,
  },
  openGraph: {
    title: 'Centro de Conocimiento | ForjaConsulting',
    description:
      'Guías prácticas, análisis y herramientas para líderes de PYMEs en América Latina.',
    url: `${ORG.baseUrl}/conocimiento`,
  },
}

export default function ConocimientoPage() {
  return <ConocimientoPageClient />
}
