'use client'

import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'
import { HistoriaSection } from '@/components/nosotros/HistoriaSection'
import { MisionVisionValores } from '@/components/nosotros/MisionVisionValores'
import { DiferenciadoresSection } from '@/components/nosotros/DiferenciadoresSection'
import { OurCommitment } from '@/components/nosotros/OurCommitment'

export default function HistoriaPage() {
  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-purple to-brand-navy py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-cyan-500/20 border-2 border-cyan-400 rounded-full mb-6"
            >
              <Clock className="w-10 h-10 text-cyan-400" strokeWidth={2} />
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Nuestra <span className="text-brand-orange">Historia</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Una frustración que se convirtió en <strong className="text-brand-orange">revolución</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Historia Section Component */}
      <HistoriaSection />

      {/* Misión, Visión y Valores */}
      <MisionVisionValores />

      {/* Diferenciadores */}
      <DiferenciadoresSection />

      {/* Compromiso y CTA */}
      <OurCommitment />
    </div>
  )
}
