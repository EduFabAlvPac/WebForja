/**
 * Página de artículo del Centro de Conocimiento
 * @module app/conocimiento/[slug]/page
 */

import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { ARTICULOS } from '@/data/articulos'
import { ORG } from '@/lib/org'

const CATEGORIA_LABEL: Record<string, string> = {
  estrategia: 'Estrategia y Liderazgo',
  operaciones: 'Operaciones y Procesos',
  finanzas: 'Finanzas y Crecimiento',
  talento: 'Talento y Cultura',
  tecnologia: 'Tecnología y Digitalización',
  'ia-automatizacion': 'IA y Automatización',
  datos: 'Datos e Inteligencia',
  'experiencia-cliente': 'Experiencia del Cliente',
}

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const articulo = ARTICULOS.find((a) => a.slug === params.slug)
  if (!articulo) return { title: 'Artículo no encontrado' }
  return {
    title: `${articulo.titulo} | Centro de Conocimiento`,
    description: articulo.extracto,
    alternates: { canonical: `${ORG.baseUrl}/conocimiento/${params.slug}` },
  }
}

export default function ArticuloPage({ params }: PageProps) {
  const articulo = ARTICULOS.find((a) => a.slug === params.slug)
  if (!articulo) notFound()

  const fechaStr = new Intl.DateTimeFormat('es', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(articulo.fechaPublicacion)

  const categoriaLabel = CATEGORIA_LABEL[articulo.categoria] || articulo.categoria
  const nivelLabel =
    articulo.nivel === 'basico'
      ? 'Básico'
      : articulo.nivel === 'intermedio'
        ? 'Intermedio'
        : 'Avanzado'

  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)] min-h-screen bg-slate-50">
      <article className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <Link
          href="/conocimiento"
          className="inline-flex items-center gap-2 text-brand-orange font-medium mb-8 hover:gap-3 transition-all"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al Centro de Conocimiento
        </Link>

        <header className="mb-8">
          <span className="text-sm font-semibold text-brand-orange">{categoriaLabel}</span>
          <p className="text-sm text-slate-500 mt-2">
            {articulo.tiempoLectura} min · Nivel: {nivelLabel}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 leading-tight">
            {articulo.titulo}
          </h1>
          <p className="text-lg text-slate-600 mt-4">{articulo.extracto}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {articulo.tags.map((t) => (
              <span
                key={t}
                className="px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700 text-sm"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-4 text-slate-600">
            <span className="font-medium">
              {articulo.autor.nombre}
              {articulo.autor.cargo && ` · ${articulo.autor.cargo}`}
            </span>
            <span>{fechaStr}</span>
          </div>
        </header>

        <div className="relative aspect-video rounded-2xl overflow-hidden mb-10">
          <Image
            src={articulo.imagenUrl}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-slate-700 leading-relaxed">
            {articulo.contenido || articulo.extracto}
          </p>
          <p className="text-slate-600 mt-6 italic">
            Contenido completo en desarrollo. Este artículo será ampliado próximamente.
          </p>
        </div>
      </article>
    </div>
  )
}
