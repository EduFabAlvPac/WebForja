'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Globe, DollarSign, Zap } from 'lucide-react'
import { ParticleBackground } from './ParticleBackground'

const H1_WORDS = [
  'Propósito',
  'y',
  'rentabilidad',
  'no',
  'son',
  'opuestos.',
  'Son',
  'tu',
  'ventaja',
  'competitiva.',
]

const METRICS = [
  {
    icon: Globe,
    value: '73%',
    text: 'de los consumidores LATAM prefieren marcas con prácticas sostenibles verificadas',
  },
  {
    icon: DollarSign,
    value: '2.5x',
    text: 'más acceso a financiamiento verde para PYMEs con marco ESG documentado · IFC 2024',
  },
  {
    icon: Zap,
    value: '40%',
    text: 'reducción promedio en costos operativos al optimizar recursos bajo criterios de eficiencia sostenible',
  },
]

export function SostenibilidadHero() {
  const wrapperClassName =
    'relative min-h-[100vh] w-full flex flex-col md:flex-row items-center overflow-hidden'
  return (
    <>
      <div className={wrapperClassName}>
        <div className="absolute inset-0 bg-brand-blue-anchor" />
        <ParticleBackground />

        <div className="container mx-auto px-4 md:px-8 relative z-10 py-20 md:py-0">
          <div className="flex items-center min-h-[100vh] py-24 md:py-0 max-w-4xl">
            <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center px-3 py-1.5 rounded-full text-sm text-white mb-6"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.3)',
                }}
              >
                ADN Estratégico · Arquitectura de Negocio
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
                {H1_WORDS.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                    className={
                      word === 'ventaja' || word === 'competitiva.'
                        ? 'bg-gradient-to-r from-[#4ADE80] to-[#F97316] bg-clip-text text-transparent'
                        : 'inline'
                    }
                  >
                    {word}{' '}
                  </motion.span>
                ))}
              </h1>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="h-1 w-[120px] rounded-full mb-6 md:mx-0 mx-auto"
                style={{
                  background: 'linear-gradient(90deg, #4ADE80, #F97316)',
                  transformOrigin: 'left',
                }}
              />

              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="text-lg md:text-xl font-light leading-relaxed mb-6 max-w-xl"
                style={{ color: '#94A3B8' }}
              >
                Integramos propósito, rentabilidad y responsabilidad en la arquitectura de tu
                negocio — para que la sostenibilidad sea un motor de crecimiento, no una carga
                operativa.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="text-base mb-8 max-w-xl"
                style={{ color: '#64748B' }}
              >
                Las PYMEs que integran sostenibilidad en su modelo de negocio no solo reducen
                riesgos regulatorios — acceden a nuevos mercados, atraen talento más comprometido,
                obtienen mejores condiciones de financiamiento y construyen una reputación que sus
                competidores no pueden copiar de la noche a la mañana.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center md:items-start mb-10"
              >
                <Link
                  href="/contacto?servicio=sostenibilidad"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all hover:brightness-110 w-full sm:w-auto justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #4ADE80, #16A34A)',
                    color: '#1E3A5F',
                  }}
                >
                  Descubre tu Índice de Sostenibilidad
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="#mitos"
                  className="text-brand-teal font-medium underline decoration-brand-teal/50 underline-offset-4 hover:decoration-brand-teal transition-colors text-center md:text-left"
                >
                  ¿Qué es sostenibilidad empresarial real?
                </a>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.15 } },
                  hidden: {},
                }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl"
              >
                {METRICS.map(({ icon: Icon, value, text }, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    className="flex items-start gap-4 p-4 rounded-xl text-left"
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.15)',
                    }}
                  >
                    <div className="shrink-0 mt-0.5" style={{ color: '#4ADE80' }}>
                      <Icon className="w-5 h-5" strokeWidth={2} />
                    </div>
                    <div>
                      <span className="text-xl font-bold block mb-1" style={{ color: '#4ADE80' }}>
                        {value}
                      </span>
                      <span className="text-sm" style={{ color: '#94A3B8' }}>
                        {text}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
