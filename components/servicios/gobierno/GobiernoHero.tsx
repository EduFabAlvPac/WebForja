'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Building2, Scale, RefreshCw } from 'lucide-react'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop'

const PILLS = [
  { Icon: Building2, text: 'Estructura que soporta el crecimiento' },
  { Icon: Scale, text: 'Gobierno que protege el patrimonio' },
  { Icon: RefreshCw, text: 'Procesos que funcionan sin supervisión constante' },
] as const

export function GobiernoHero() {
  return (
    <section className="relative min-h-[100vh] w-full flex flex-col md:flex-row items-center overflow-hidden">
      {/* Fondo imagen + overlay — misma estructura que Estrategia */}
      <div className="absolute inset-0 bg-brand-blue-anchor">
        <Image
          src={HERO_IMAGE}
          alt="Sala de juntas, liderazgo y toma de decisiones empresariales"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          unoptimized
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(30,58,95,0.9) 0%, rgba(30,58,95,0.75) 50%, rgba(30,58,95,0.55) 100%)',
          }}
        />
      </div>

      {/* Mismo contenedor y capas que /servicios/adn-estrategico/estrategia */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 py-20 md:py-0">
        <div className="flex items-center min-h-[100vh] py-24 md:py-0 max-w-4xl">
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.4 }}
              className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium border border-brand-orange text-brand-orange bg-transparent mb-6"
            >
              ADN Estratégico · Arquitectura de Negocio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
            >
              Una empresa sin estructura
              <br />
              es un barco{' '}
              <span className="border-b-4 border-brand-orange pb-1">sin timón.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg md:text-xl text-white/90 font-medium mb-6 max-w-xl"
            >
              Construimos la estructura organizacional que hace que tu empresa funcione — con o sin ti
              presente.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="flex flex-col gap-3 mb-8 w-full max-w-xl"
            >
              {PILLS.map(({ Icon, text }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 px-4 py-3 rounded-xl bg-white/10 border border-white/20"
                >
                  <div
                    className="flex shrink-0 items-center justify-center w-10 h-10 rounded-xl bg-white/15"
                    style={{ color: '#F97316' }}
                  >
                    <Icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <span className="text-white text-sm font-medium">{text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="flex flex-col gap-2 w-full sm:w-auto"
            >
              <Link
                href="#cta-gobierno"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-white shadow-lg transition-all hover:opacity-95 w-fit"
                style={{ backgroundColor: '#F97316' }}
              >
                Evalúa el Gobierno de tu Empresa
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-white/80 text-sm">Diagnóstico sin costo · Resultados en 48 horas</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
