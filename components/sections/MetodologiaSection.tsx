'use client'

import { MetodologiaForja } from '@/components/ui/metodologia-forja'

/**
 * MetodologiaSection - Homepage
 * 
 * Muestra la Metodología FORJA® completa con accordion interactivo
 * Reemplaza la versión anterior con el nuevo componente optimizado
 */
export function MetodologiaSection() {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-200 shadow-[0_1px_0_0_rgba(255,255,255,0.9)_inset]">
      <div className="container mx-auto px-4 md:px-8">
        <MetodologiaForja />
      </div>
    </section>
  )
}
