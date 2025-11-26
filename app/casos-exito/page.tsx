'use client'

import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Quote } from 'lucide-react'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/shared/SectionHeader'

export default function CasosExitoPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section con Imagen */}
      <section className="relative bg-gradient-to-br from-red-50 to-white py-20 md:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <motion.div
            className="w-full h-full"
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 15, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop"
              alt="Casos de éxito - Empresas celebrando resultados de transformación empresarial"
              fill
              className="object-cover"
              quality={90}
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-red-50/60 to-white/70" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-brand-turquoise hover:text-brand-turquoise/80 font-semibold mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver al Inicio
          </Link>

          <div className="max-w-4xl mx-auto text-center">
            {/* Icono */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-24 h-24 bg-red-100 rounded-full mb-8"
            >
              <Quote className="w-12 h-12 text-red-500" strokeWidth={2} />
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-6">
              Casos de <span className="text-red-500">Éxito</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-12">
              Descubre cómo hemos transformado empresas y generado resultados medibles en diferentes industrias
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-12 border-2 border-brand-turquoise/20">
              <p className="text-lg text-gray-700 mb-6">
                🚧 Esta página está en construcción
              </p>
              <p className="text-gray-600">
                Pronto podrás explorar todos nuestros casos de éxito documentados con resultados medibles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


