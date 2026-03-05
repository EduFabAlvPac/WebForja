'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Lock, ArrowRight } from 'lucide-react'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'

export function ServiceHero() {
  return (
    <section className="relative min-h-[100vh] w-full flex flex-col md:flex-row items-center overflow-hidden">
      {/* Fondo imagen + overlay */}
      <div className="absolute inset-0 bg-brand-blue-anchor">
        <Image
          src={HERO_IMAGE}
          alt="Sala ejecutiva, ambiente profesional"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          unoptimized
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(30,58,95,0.9) 0%, rgba(30,58,95,0.7) 100%)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 py-20 md:py-0">
        <div className="flex items-center min-h-[100vh] py-24 md:py-0 max-w-4xl">
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.4 }}
              className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold text-white/90 bg-white/10 mb-6"
            >
              ADN Estratégico · Arquitectura de Negocio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
            >
              Tu negocio trabaja duro.
              <br />
              ¿Pero sabe exactamente{' '}
              <span style={{ color: '#F97316' }}>hacia dónde va?</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg md:text-xl text-white/90 font-medium mb-6 max-w-xl"
            >
              Diseñamos la brújula estratégica que convierte tu visión en un plan ejecutable con
              resultados medibles.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              className="text-white/80 text-sm md:text-base leading-relaxed mb-8 max-w-xl"
            >
              El 73% de las PYMEs en Latinoamérica no fracasan por falta de esfuerzo — fracasan
              porque estrategia, procesos y tecnología nunca estuvieron alineados. En ForjaConsulting
              construimos ese mapa: desde donde estás hasta donde mereces estar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                href="#cta-final"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-white shadow-lg transition-all hover:opacity-95"
                style={{ backgroundColor: '#F97316' }}
              >
                <Lock className="w-5 h-5" />
                Solicita tu Diagnóstico Estratégico Gratuito
              </a>
              <Link
                href="#casos-exito"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold border-2 border-white text-white bg-transparent transition-all hover:bg-white/10"
              >
                Ver casos de transformación real
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
