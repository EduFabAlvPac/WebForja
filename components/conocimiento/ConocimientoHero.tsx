'use client'

import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import type { CategoriaSlug } from '@/types/conocimiento'
import { CATEGORIA_ICON, IconoTendencias } from '@/lib/conocimiento-icons'

const CATEGORIAS: { slug: CategoriaSlug | 'todos'; label: string }[] = [
  { slug: 'todos', label: 'Todos' },
  { slug: 'estrategia', label: 'Estrategia' },
  { slug: 'operaciones', label: 'Operaciones' },
  { slug: 'finanzas', label: 'Finanzas' },
  { slug: 'talento', label: 'Talento' },
  { slug: 'tecnologia', label: 'Tecnología' },
  { slug: 'ia-automatizacion', label: 'IA y Automatización' },
  { slug: 'datos', label: 'Datos' },
  { slug: 'experiencia-cliente', label: 'CX' },
]

interface ConocimientoHeroProps {
  categoriaActiva: CategoriaSlug | 'todos'
  setCategoriaActiva: (c: CategoriaSlug | 'todos') => void
  busqueda: string
  setBusqueda: (v: string) => void
  onBuscar?: () => void
}

export function ConocimientoHero({
  categoriaActiva,
  setCategoriaActiva,
  busqueda,
  setBusqueda,
  onBuscar,
}: ConocimientoHeroProps) {
  const sugerencias = ['IA para PYMEs', 'Flujo de caja', 'OKRs prácticos']

  return (
    <section className="relative w-full min-w-full bg-brand-blue-anchor py-16 md:py-24 overflow-hidden">
      {/* Patrón sutil de puntos */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-block px-4 py-2 bg-brand-orange text-white font-semibold rounded-full text-sm mb-6"
        >
          Centro de Conocimiento ForjaConsulting
        </motion.span>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.05 }}
          className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight"
        >
          El conocimiento que tu empresa
          <br />
          necesita para{' '}
          <span className="text-brand-orange">crecer hoy.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="text-lg text-content-on-dark-muted mb-8 max-w-2xl"
        >
          Guías prácticas, análisis de tendencias y herramientas concretas para líderes de
          PYMEs en América Latina.
          <br />
          Sin teoría innecesaria. Sin jerga corporativa.
        </motion.p>

        {/* Barra de búsqueda */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="flex gap-2 rounded-2xl bg-white p-2 shadow-lg"
        >
          <div className="flex flex-1 items-center gap-3 px-4">
            <Search className="h-5 w-5 text-slate-400 shrink-0" />
            <input
              type="search"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && onBuscar?.()}
              placeholder="Busca por tema, sector o desafío... ej: 'flujo de caja', 'liderazgo remoto', 'IA para pymes'"
              className="flex-1 min-w-0 bg-transparent text-slate-800 placeholder:text-slate-400 outline-none text-base"
            />
          </div>
          <button
            type="button"
            onClick={onBuscar}
            className="px-6 py-3 bg-brand-orange text-white font-semibold rounded-xl hover:bg-brand-orange-dark transition-colors shrink-0"
          >
            Buscar
          </button>
        </motion.div>

        {/* Búsquedas sugeridas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-4 flex flex-wrap items-center gap-2"
        >
          <span className="text-sm text-content-on-dark-muted mr-1 flex items-center gap-1.5">
            <IconoTendencias className="h-4 w-4 text-brand-orange" />
            Tendencias:
          </span>
          {sugerencias.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => {
                setBusqueda(s)
                onBuscar?.()
              }}
              className="px-3 py-1.5 rounded-full bg-white/15 text-content-on-dark-muted text-sm hover:bg-white/25 transition-colors"
            >
              {s}
            </button>
          ))}
        </motion.div>

        {/* Tabs categoría */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 overflow-x-auto pb-2 custom-scrollbar"
        >
          <div className="flex gap-2 min-w-max">
            {CATEGORIAS.map((c) => {
              const activo = categoriaActiva === c.slug
              const IconComponent = c.slug !== 'todos' ? CATEGORIA_ICON[c.slug as CategoriaSlug] : null
              return (
                <button
                  key={c.slug}
                  type="button"
                  onClick={() => setCategoriaActiva(c.slug)}
                  className={`shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-colors ${
                    activo
                      ? 'bg-brand-orange text-white'
                      : 'bg-white/15 text-content-on-dark-muted hover:bg-white/25'
                  }`}
                >
                  {IconComponent && <IconComponent className="h-4 w-4 shrink-0" />}
                  {c.label}
                </button>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
