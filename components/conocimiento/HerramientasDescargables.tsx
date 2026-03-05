'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import type { Herramienta } from '@/types/conocimiento'
import { DescargaModal } from './DescargaModal'
import { HERRAMIENTA_ICON } from '@/lib/conocimiento-icons'
import type { DescargaFormValues } from '@/lib/validations/descarga'

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

const FORMATO_LABEL: Record<string, string> = {
  xlsx: '.xlsx',
  pdf: '.pdf',
  docx: '.docx',
}

interface HerramientasDescargablesProps {
  herramientas: Herramienta[]
  onDescargar: (data: DescargaFormValues, herramientaId: string) => Promise<void>
}

export function HerramientasDescargables({
  herramientas,
  onDescargar,
}: HerramientasDescargablesProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const [herramientaSeleccionada, setHerramientaSeleccionada] = useState<Herramienta | null>(null)

  const abrirModal = (h: Herramienta) => {
    setHerramientaSeleccionada(h)
    setModalOpen(true)
  }

  const handleDescargar = async (data: DescargaFormValues, herramientaId: string) => {
    await onDescargar(data, herramientaId)
  }

  return (
    <section className="py-16 md:py-24 bg-brand-blue-anchor">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Herramientas gratuitas
            <br />
            para tu empresa.
          </h2>
          <p className="text-content-on-dark-muted text-lg max-w-2xl mx-auto">
            Plantillas, diagnósticos y calculadoras listas para usar. Desarrolladas por nuestros
            arquitectos empresariales. Sin costo. Sin trampa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {herramientas.map((h, i) => (
            <motion.div
              key={h.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-white/20 bg-white/5 p-6 flex flex-col hover:bg-white/10 transition-colors"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-brand-orange">
                {(function () {
                  const IconComponent = HERRAMIENTA_ICON[h.icono]
                  return IconComponent ? <IconComponent className="h-6 w-6" /> : null
                })()}
              </div>
              <p className="text-xs font-semibold text-content-on-dark-muted uppercase tracking-wider mb-2">
                {CATEGORIA_LABEL[h.categoria] || h.categoria}
              </p>
              <h3 className="text-lg font-bold text-white mb-2 leading-snug">{h.nombre}</h3>
              <p className="text-sm text-content-on-dark-muted mb-4 flex-1">{h.descripcion}</p>
              <p className="text-xs text-content-on-dark-muted mb-4">
                Formato: {FORMATO_LABEL[h.formato] || h.formato}
              </p>
              <button
                type="button"
                onClick={() => abrirModal(h)}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-brand-orange text-white font-semibold hover:bg-brand-orange-dark transition-colors"
              >
                <Download className="h-4 w-4" />
                Descargar gratis
              </button>
              <p className="text-xs text-content-on-dark-muted text-center mt-2">
                Gratis · Solo necesitas tu email
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <DescargaModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        herramienta={herramientaSeleccionada}
        onDescargar={handleDescargar}
      />
    </section>
  )
}
