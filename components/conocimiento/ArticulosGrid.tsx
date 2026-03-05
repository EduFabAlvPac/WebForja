'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArticuloCard } from './ArticuloCard'
import { Button } from '@/components/ui/button'
import type { Articulo } from '@/types/conocimiento'

const INICIAL = 9

interface ArticulosGridProps {
  articulosFiltrados: Articulo[]
  cargaMas: number
  onCargarMas: () => void
  basePath?: string
}

export function ArticulosGrid({
  articulosFiltrados,
  cargaMas,
  onCargarMas,
  basePath = '',
}: ArticulosGridProps) {
  const mostrar = articulosFiltrados.slice(0, cargaMas)
  const hayMas = articulosFiltrados.length > cargaMas

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {mostrar.map((articulo) => (
              <ArticuloCard key={articulo.id} articulo={articulo} basePath={basePath} />
            ))}
          </AnimatePresence>
        </div>

        {hayMas && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 flex justify-center"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={onCargarMas}
              className="border-slate-300 hover:border-brand-orange hover:text-brand-orange"
            >
              Cargar más
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
