'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ConocimientoCTAProps {
  basePath?: string
}

export function ConocimientoCTA({ basePath = '' }: ConocimientoCTAProps) {
  return (
    <section className="py-16 md:py-24 bg-brand-blue-anchor">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            El conocimiento es el primer paso.
            <br />
            El diagnóstico es el segundo.
          </h2>
          <p className="text-content-on-dark-muted text-lg mb-8">
            Nuestros lectores más frecuentes son líderes que están buscando respuestas. Si ya tienes
            las preguntas claras, el siguiente paso es entender exactamente qué aplica para tu
            empresa — con datos reales, no teoría genérica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`${basePath}/contacto`}>
              <Button
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange-dark text-white gap-2 w-full sm:w-auto"
              >
                Solicita tu Diagnóstico Empresarial
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Button>
            </Link>
            <Link href={`${basePath}/servicios`}>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
              >
                Conoce nuestros servicios
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
