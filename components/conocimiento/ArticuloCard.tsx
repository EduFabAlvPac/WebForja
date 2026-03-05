'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { Articulo } from '@/types/conocimiento'
import { CATEGORIA_ICON } from '@/lib/conocimiento-icons'

const CATEGORIA_LABEL: Record<string, string> = {
  estrategia: 'Estrategia',
  operaciones: 'Operaciones',
  finanzas: 'Finanzas',
  talento: 'Talento',
  tecnologia: 'Tecnología',
  'ia-automatizacion': 'IA y Automatización',
  datos: 'Datos',
  'experiencia-cliente': 'CX',
}

function formatFecha(d: Date): string {
  return new Intl.DateTimeFormat('es', { day: 'numeric', month: 'short', year: 'numeric' }).format(d)
}

interface ArticuloCardProps {
  articulo: Articulo
  basePath?: string
}

export function ArticuloCard({ articulo, basePath = '' }: ArticuloCardProps) {
  const categoriaLabel = CATEGORIA_LABEL[articulo.categoria] || articulo.categoria
  const CategoriaIcon = CATEGORIA_ICON[articulo.categoria]

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Link
        href={`${basePath}/conocimiento/${articulo.slug}`}
        className="block h-full overflow-hidden rounded-2xl bg-white shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300 hover:border-brand-orange/20"
      >
        {/* Imagen categoría */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={articulo.imagenUrl}
            alt=""
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 text-slate-700 text-xs font-semibold backdrop-blur-sm">
              {CategoriaIcon && <CategoriaIcon className="h-3.5 w-3.5 shrink-0" />}
              {categoriaLabel}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-white/90 text-slate-600 text-xs backdrop-blur-sm">
              {articulo.tiempoLectura} min
            </span>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-6 border-t border-slate-100 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand-orange transition-all duration-300 group-hover:w-full" />
          <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-brand-orange transition-colors">
            {articulo.titulo}
          </h3>
          <p className="text-sm text-slate-600 line-clamp-3 mb-4">{articulo.extracto}</p>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="font-medium text-slate-700">{articulo.autor.nombre}</span>
              <span>·</span>
              <span>{formatFecha(articulo.fechaPublicacion)}</span>
            </div>
            <span className="flex items-center gap-1 text-brand-orange text-sm font-semibold group-hover:gap-2 transition-all">
              Leer
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
