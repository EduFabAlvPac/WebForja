'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, ArrowRight, Phone, Target, ClipboardCheck } from 'lucide-react'
import { ServiceHero } from '@/components/services/ServiceHero'
import { ProblemCard } from '@/components/services/ProblemCard'
import { ServiceAccordion } from '@/components/services/ServiceAccordion'
import { MethodologyTimeline } from '@/components/services/MethodologyTimeline'
import { CaseStudy } from '@/components/services/CaseStudy'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { ingenieriaFinancieraData } from '@/data/services/ingenieria-financiera'

export default function IngenieriaFinancieraPage() {
  const data = ingenieriaFinancieraData

  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]">
      {/* SECCIÓN 1 - HERO */}
      <ServiceHero data={data.hero} />

      {/* SECCIÓN 2 - PARA QUIÉN ES */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-brand-turquoise/8 to-transparent rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-brand-orange/8 to-transparent rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <SectionHeader
            eyebrow="PERFIL IDEAL"
            title="¿Este Servicio es para Tu Empresa?"
            highlight="Tu Empresa"
          />

          {/* Checklist Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
            {data.targetProfile.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="h-full bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-turquoise/30 transition-all duration-300 shadow-sm hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-brand-turquoise to-brand-turquoise/70 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Check className="h-5 w-5 text-white" strokeWidth={3} />
                    </div>
                    <p className="text-gray-700 leading-relaxed flex-1 text-base">
                      {item}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Perfil Ideal Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative bg-gradient-to-br from-brand-orange/10 via-brand-orange/5 to-transparent rounded-3xl p-8 md:p-10 border-l-4 border-brand-orange shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-orange/10 to-transparent rounded-full blur-3xl" />
              
              <div className="relative flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-orange to-red-500 flex items-center justify-center shadow-lg">
                  <Target className="h-6 w-6 text-white" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-brand-navy mb-3">
                    {data.targetProfile.idealProfile.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {data.targetProfile.idealProfile.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN 3 - PROBLEMAS QUE RESUELVE */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeader eyebrow="TU REALIDAD ACTUAL" title="¿Te Identificas con Alguna de Estas Situaciones?" highlight="Estas Situaciones" />

          {/* Problem Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
            {data.problems.map((problem, index) => (
              <motion.div
                key={problem.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProblemCard problem={problem} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 4 - COMPONENTES DEL SERVICIO */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeader
            eyebrow="SERVICIO MODULAR"
            title="Qué Incluye Nuestro Servicio"
            highlight="Nuestro Servicio"
            description="6 componentes modulares. Contrata todos o solo los que necesites según tu situación actual."
          />

          <div className="max-w-5xl mx-auto">
            <ServiceAccordion components={data.components} />
          </div>
        </div>
      </section>

      {/* SECCIÓN 5 - METODOLOGÍA FORJA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeader
            eyebrow="METODOLOGÍA FORJA®"
            title="Cómo Trabajamos"
            highlight="Trabajamos"
            description="Nuestra metodología probada garantiza transformación real de tu función financiera"
          />

          <div className="max-w-6xl mx-auto">
            <MethodologyTimeline phases={data.methodology} />
          </div>
        </div>
      </section>

      {/* SECCIÓN 6 - CASO DE ÉXITO */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeader
            eyebrow="RESULTADOS REALES"
            title="Caso de Éxito"
            highlight="Éxito"
            description="Cómo transformamos las finanzas de un distribuidor regional"
          />

          <div className="max-w-6xl mx-auto">
            <CaseStudy caseStudy={data.caseStudy} />
          </div>
        </div>
      </section>

      {/* SECCIÓN 7 - CTA FINAL */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-navy via-brand-purple to-brand-navy relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-turquoise/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                ¿Tu Empresa Necesita Transformar su Función Financiera?
              </h2>
              <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                Si la falta de liquidez, información tardía o márgenes que se erosionan están limitando tu crecimiento, es momento de actuar.
              </p>
            </motion.div>

            {/* Dual CTA */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Primary CTA */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange flex items-center justify-center">
                    <ClipboardCheck className="h-6 w-6 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {data.cta.primary.title}
                  </h3>
                </div>
                <p className="text-white/80 mb-6 leading-relaxed">
                  {data.cta.primary.description}
                </p>
                <Link
                  href={data.cta.primary.buttonLink}
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl"
                >
                  {data.cta.primary.buttonText}
                  <ArrowRight className="h-5 w-5" strokeWidth={2} />
                </Link>
              </motion.div>

              {/* Secondary CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-turquoise flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {data.cta.secondary.title}
                  </h3>
                </div>
                <p className="text-white/80 mb-6 leading-relaxed">
                  {data.cta.secondary.description}
                </p>
                <Link
                  href={data.cta.secondary.buttonLink}
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-xl transition-all border border-white/30"
                >
                  {data.cta.secondary.buttonText}
                  <ArrowRight className="h-5 w-5" strokeWidth={2} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


