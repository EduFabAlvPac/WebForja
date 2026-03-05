'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { Articulo } from '@/types/conocimiento'
import { CATEGORIA_ICON, IconoDestacado } from '@/lib/conocimiento-icons'

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

function formatFecha(d: Date): string {
  return new Intl.DateTimeFormat('es', { month: 'long', year: 'numeric' }).format(d)
}

interface ArticuloDestacadoProps {
  articulo: Articulo
  basePath?: string
}

export function ArticuloDestacado({ articulo, basePath = '' }: ArticuloDestacadoProps) {
  const categoriaLabel = CATEGORIA_LABEL[articulo.categoria] || articulo.categoria
  const CategoriaIcon = CATEGORIA_ICON[articulo.categoria]
  const nivelLabel =
    articulo.nivel === 'basico' ? 'Básico' : articulo.nivel === 'intermedio' ? 'Intermedio' : 'Avanzado'

  return (
    <section className="py-16 md:py-24 bg-surface-off">
      <div className="container mx-auto px-4 md:px-8">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <Link href={`${basePath}/conocimiento/${articulo.slug}`} className="block md:flex">
            {/* Imagen con overlay */}
            <div className="relative h-64 md:h-96 md:w-1/2 overflow-hidden">
              <Image
                src={articulo.imagenUrl}
                alt=""
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <span className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-brand-orange text-white text-xs font-bold rounded-full">
                <IconoDestacado className="h-3.5 w-3.5" />
                Destacado del Mes
              </span>
            </div>

            {/* Contenido */}
            <div className="flex flex-col justify-center p-8 md:p-12 md:w-1/2">
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 mb-4">
                <span className="flex items-center gap-1.5">
                  {CategoriaIcon && <CategoriaIcon className="h-4 w-4 shrink-0 text-brand-orange" />}
                  {categoriaLabel}
                </span>
                <span>·</span>
                <span>{articulo.tiempoLectura} min</span>
                <span>·</span>
                <span>Nivel: {nivelLabel}</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-brand-orange transition-colors">
                &ldquo;{articulo.titulo}&rdquo;
              </h2>

              <p className="text-slate-600 leading-relaxed mb-6 line-clamp-4">{articulo.extracto}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {articulo.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="text-sm text-slate-500">
                  <p className="font-medium text-slate-700">
                    {articulo.autor.nombre} · {articulo.autor.cargo || ''} · {articulo.autor.empresa || ''}
                  </p>
                  <p>{formatFecha(articulo.fechaPublicacion)}</p>
                </div>
                <span className="flex items-center gap-1 text-brand-orange font-semibold group-hover:gap-2 transition-all">
                  Leer análisis completo
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </span>
              </div>
            </div>
          </Link>
        </motion.article>
      </div>
    </section>
  )
}
