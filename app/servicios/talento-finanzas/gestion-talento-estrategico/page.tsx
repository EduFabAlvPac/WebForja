'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, ArrowRight, Phone, Target, ClipboardCheck } from 'lucide-react'
import { ServiceHero } from '@/components/services/ServiceHero'
import { ProblemCard } from '@/components/services/ProblemCard'
import { ServiceAccordion } from '@/components/services/ServiceAccordion'
import { MethodologyTimeline } from '@/components/services/MethodologyTimeline'
import { CaseStudy } from '@/components/services/CaseStudy'
import { gestionTalentoEstrategicoData } from '@/data/services/gestion-talento-estrategico'

export default function GestionTalentoEstrategicoPage() {
  const data = gestionTalentoEstrategicoData

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
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-orange/10 to-transparent border-l-4 border-brand-orange rounded-r-lg mb-4"
            >
              <span className="text-brand-orange font-bold text-sm uppercase tracking-wider">
                PERFIL IDEAL
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-4 leading-tight"
            >
              {data.targetProfile.title}
            </motion.h2>
          </div>

          {/* Checklist Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
            {data.targetProfile.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-brand-turquoise hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-turquoise/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex items-start gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow"
                  >
                    <Check className="w-6 h-6 text-white" strokeWidth={3} />
                  </motion.div>
                  <p className="text-gray-700 leading-relaxed font-medium group-hover:text-brand-navy transition-colors">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Perfil Ideal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-5xl mx-auto relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange via-orange-500 to-brand-orange-dark rounded-3xl blur-xl opacity-20" />
            
            <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-12 border-2 border-brand-orange/30 shadow-2xl overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-turquoise/10 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-brand-orange/10 to-transparent rounded-full blur-2xl" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start gap-6 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-brand-orange to-orange-600 rounded-2xl flex items-center justify-center shadow-xl"
                  >
                    <Target className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </motion.div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-2">
                      {data.targetProfile.idealProfile.title}
                    </h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-brand-orange to-transparent rounded-full" />
                  </div>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {data.targetProfile.idealProfile.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN 3 - PROBLEMAS QUE RESUELVE */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4"
            >
              ¿Qué Problemas <span className="text-brand-orange">Resuelve</span>?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              Los 5 problemas críticos que resolvemos con Gestión de Talento Estratégico
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {data.problems.map((problem, index) => (
              <ProblemCard key={problem.id} problem={problem} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 4 - COMPONENTES DEL SERVICIO */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4"
            >
              ¿Qué Incluye el <span className="text-brand-orange">Servicio</span>?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              6 componentes modulares que puedes contratar de forma independiente o completa
            </motion.p>
          </div>

          <div className="max-w-6xl mx-auto">
            <ServiceAccordion components={data.components} />
          </div>
        </div>
      </section>

      {/* SECCIÓN 5 - METODOLOGÍA FORJA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-orange font-bold text-base uppercase tracking-wider mb-4"
            >
              METODOLOGÍA FORJA®
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              Cómo <span className="text-brand-orange">Trabajamos</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Proceso estructurado en 5 fases con entregables tangibles en cada etapa
            </motion.p>
          </div>

          <div className="max-w-7xl mx-auto">
            <MethodologyTimeline phases={data.methodology} />
          </div>
        </div>
      </section>

      {/* SECCIÓN 6 - CASO DE ÉXITO */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4"
            >
              Caso de <span className="text-brand-orange">Éxito</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              Cómo transformamos la gestión de talento en una firma de servicios profesionales
            </motion.p>
          </div>

          <div className="max-w-5xl mx-auto">
            <CaseStudy caseStudy={data.caseStudy} />
          </div>
        </div>
      </section>

      {/* SECCIÓN 7 - CTA FINAL */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-turquoise/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* CTA Primario */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-brand-orange to-orange-600 rounded-3xl p-8 md:p-10 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 group relative overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 0.4 }}
                  className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm"
                >
                  <ClipboardCheck className="w-8 h-8 text-white" strokeWidth={2.5} />
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {data.cta.primary.title}
                </h3>
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  {data.cta.primary.description}
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href={data.cta.primary.buttonLink}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-orange font-bold text-lg rounded-xl hover:bg-gray-50 transition-all shadow-xl group-hover:shadow-2xl"
                  >
                    {data.cta.primary.buttonText}
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* CTA Secundario */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border-2 border-gray-200 hover:border-brand-turquoise transition-all duration-300 group relative overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-turquoise/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 0.4 }}
                  className="w-16 h-16 bg-gradient-to-br from-brand-turquoise/20 to-brand-purple/10 rounded-2xl flex items-center justify-center mb-6"
                >
                  <Phone className="w-8 h-8 text-brand-turquoise" strokeWidth={2.5} />
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4 group-hover:text-brand-orange transition-colors">
                  {data.cta.secondary.title}
                </h3>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {data.cta.secondary.description}
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href={data.cta.secondary.buttonLink}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-brand-navy text-white font-bold text-lg rounded-xl hover:bg-brand-purple transition-all shadow-lg"
                  >
                    {data.cta.secondary.buttonText}
                    <Phone className="w-6 h-6" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
