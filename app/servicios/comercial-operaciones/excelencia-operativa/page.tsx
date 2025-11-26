'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, ArrowRight, Phone, Target, ClipboardCheck, TrendingUp, DollarSign, Wallet, Factory } from 'lucide-react'
import { ServiceHero } from '@/components/services/ServiceHero'
import { ProblemCard } from '@/components/services/ProblemCard'
import { ServiceAccordion } from '@/components/services/ServiceAccordion'
import { MethodologyTimeline } from '@/components/services/MethodologyTimeline'
import { CaseStudy } from '@/components/services/CaseStudy'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { excelenciaOperativaData, comparisonMetrics, financialImpact, capacityData } from '@/data/services/excelencia-operativa-lean'

export default function ExcelenciaOperativaPage() {
  const data = excelenciaOperativaData

  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]">
      {/* SECCIÓN 1 - HERO */}
      <ServiceHero data={data.hero} />

      {/* CAPACITY GAUGE - Elemento WOW */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 rounded-3xl p-8 md:p-12 border-2 border-orange-200 shadow-2xl relative overflow-hidden">
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-orange/20 to-transparent rounded-full blur-3xl" />
              
              <div className="relative z-10 text-center">
                <p className="text-lg md:text-xl text-gray-700 mb-8 font-medium">
                  {capacityData.message}
                </p>
                
                {/* Capacity Bars */}
                <div className="space-y-6 mb-8">
                  {/* Current Capacity */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-600">Tu Operación Actual</span>
                      <span className="text-2xl font-bold text-red-600">{capacityData.current}%</span>
                    </div>
                    <div className="h-8 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-end pr-4"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${capacityData.current}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      >
                        <span className="text-white font-bold text-sm">Capacidad Utilizada</span>
                      </motion.div>
                  </div>
                </div>

                  {/* Potential Capacity */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-600">Con Excelencia Operativa Lean</span>
                      <span className="text-2xl font-bold text-green-600">{capacityData.potential}%</span>
                  </div>
                    <div className="h-8 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-end pr-4"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${capacityData.potential}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                      >
                        <span className="text-white font-bold text-sm">Capacidad Real</span>
                      </motion.div>
                </div>
              </div>
              </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200">
                  <p className="text-3xl md:text-4xl font-bold text-brand-navy mb-2">
                    +40% de capacidad oculta
                  </p>
                  <p className="text-gray-600">
                    Sin invertir en nueva maquinaria ni contratar más personal
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN 2 - PARA QUIÉN ES */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-brand-turquoise/8 to-transparent rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-brand-orange/8 to-transparent rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <SectionHeader
            eyebrow="PERFIL IDEAL"
            title="¿Este Servicio es para Tu Empresa?"
            highlight="Tu Empresa"
          />

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
          <SectionHeader
            eyebrow="TU REALIDAD ACTUAL"
            title="¿Te Identificas con Alguna de Estas Situaciones?"
            highlight="Estas Situaciones"
            description="Estos desperdicios están destruyendo tu capacidad operativa"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
            {data.problems.map((problem, index) => (
              <motion.div
                key={problem.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProblemCard problem={problem} />
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
            description="6 componentes modulares Lean. Contrata todos o solo los que necesites."
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
            description="Resultados visibles desde la semana 10"
          />

          <div className="max-w-6xl mx-auto">
            <MethodologyTimeline phases={data.methodology} />
          </div>
        </div>
      </section>

      {/* SECCIÓN 6 - CASO DE ÉXITO CON TABLA COMPARATIVA WOW */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeader
            eyebrow="RESULTADOS REALES"
            title="Caso de Éxito"
            highlight="Éxito"
          />

          <div className="max-w-6xl mx-auto space-y-8">
            <CaseStudy caseStudy={data.caseStudy} />

            {/* COMPARISON TABLE - Elemento WOW */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-green-200"
            >
              <h3 className="text-3xl font-bold text-brand-navy mb-8 text-center">
                Resultados Medibles en 8 Meses
              </h3>
              
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-4 px-4 text-gray-600 font-semibold">Métrica</th>
                      <th className="text-center py-4 px-4 text-red-600 font-semibold">Antes</th>
                      <th className="text-center py-4 px-4 text-green-600 font-semibold">Después</th>
                      <th className="text-center py-4 px-4 text-brand-navy font-semibold">Mejora</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonMetrics.map((metric, index) => (
                    <motion.tr
                        key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                        <td className="py-4 px-4 font-medium text-gray-700">{metric.metric}</td>
                      <td className="py-4 px-4 text-center">
                          <span className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-lg font-semibold">
                          {metric.before}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center">
                          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-lg font-semibold">
                          {metric.after}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center">
                          <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-navy text-white rounded-lg font-bold text-lg">
                            <ArrowRight className="h-5 w-5" />
                            {metric.improvement}
                          </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            </motion.div>

            {/* FINANCIAL IMPACT - Elemento WOW */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-brand-navy via-brand-purple to-brand-navy rounded-3xl p-8 md:p-12 shadow-2xl text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Impacto Financiero Total
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {financialImpact.items.map((item, index) => {
                    const IconComponent = item.icon === 'DollarSign' ? DollarSign : 
                                        item.icon === 'Wallet' ? Wallet :
                                        item.icon === 'TrendingUp' ? TrendingUp : Factory
                    
                    return (
            <motion.div
                        key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
            >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-brand-orange flex items-center justify-center flex-shrink-0">
                            <IconComponent className="h-6 w-6 text-white" strokeWidth={2} />
              </div>
                          <div className="flex-1">
                            <p className="text-white/80 text-sm mb-2">{item.label}</p>
                            <p className="text-3xl md:text-4xl font-bold text-white">{item.value}</p>
              </div>
              </div>
            </motion.div>
                    )
                  })}
          </div>

                <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-brand-orange">
                  <p className="text-white/80 text-lg mb-3">Retorno de Inversión (ROI)</p>
                  <p className="text-7xl md:text-8xl font-bold text-brand-orange mb-2">
                    {financialImpact.roi}%
                  </p>
                  <p className="text-white/90 text-xl">
                    Cada $1 invertido generó ${(financialImpact.roi / 100).toFixed(1)} en valor
                  </p>
                </div>
            </div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 7 - CTA FINAL */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-navy via-brand-purple to-brand-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-turquoise/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                ¿Tu Empresa Necesita Liberar Capacidad Oculta?
              </h2>
              <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                Si tu operación está al límite pero sabes que podría ser más eficiente, es momento de aplicar Lean.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
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

            {/* Guarantee Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md rounded-2xl p-6 border-2 border-green-400/50 text-center"
            >
              <p className="text-2xl md:text-3xl font-bold text-white mb-2">
                ✅ Garantía de Resultados
              </p>
              <p className="text-white/90 text-lg">
                Garantizamos mínimo 20% de mejora en productividad o trabajamos gratis hasta lograrlo
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
