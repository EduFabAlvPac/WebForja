'use client'

import { motion } from 'framer-motion'
import { ServiceHero } from '@/components/services/ServiceHero'
import { ProblemCard } from '@/components/services/ProblemCard'
import { ServiceAccordion } from '@/components/services/ServiceAccordion'
import { MethodologyTimeline } from '@/components/services/MethodologyTimeline'
import { CaseStudy } from '@/components/services/CaseStudy'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { transformacionDigitalData } from '@/data/services/transformacion-digital'

export default function TransformacionDigitalPage() {
  const data = transformacionDigitalData

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <ServiceHero data={data.hero} />

      {/* PARA QUIÉN ES */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeader
            eyebrow="PERFIL IDEAL"
            title="¿Este Servicio es para Tu Empresa?"
            highlight="Tu Empresa"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {data.targetProfile.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-200 hover:border-brand-turquoise transition-all shadow-md hover:shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-turquoise flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {data.targetProfile.idealProfile && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-brand-turquoise/10 to-brand-purple/5 rounded-2xl p-8 border-2 border-brand-turquoise/30"
            >
              <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-4">
                {data.targetProfile.idealProfile.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {data.targetProfile.idealProfile.description}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* PROBLEMAS QUE RESUELVE */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeader
            eyebrow="TU REALIDAD ACTUAL"
            title="¿Te Identificas con Alguna de Estas Situaciones?"
            highlight="Estas Situaciones"
            description="Transformamos los desafíos digitales más comunes en oportunidades de crecimiento"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.problems.map((problem, index) => (
              <ProblemCard key={problem.id} problem={problem} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* COMPONENTES DEL SERVICIO */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeader
            eyebrow="SERVICIO MODULAR"
            title="Qué Incluye Nuestro Servicio"
            highlight="Nuestro Servicio"
            description="6 componentes modulares. Contrata todos o solo los que necesites según tu situación actual."
          />

          <ServiceAccordion components={data.components} />
        </div>
      </section>

      {/* METODOLOGÍA FORJA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeader
            eyebrow="METODOLOGÍA FORJA®"
            title="Cómo Trabajamos"
            highlight="Trabajamos"
            description="Nuestra metodología garantiza transformación real, no solo implementación de tecnología"
          />

          <MethodologyTimeline phases={data.methodology} />
        </div>
      </section>

      {/* CASO DE ÉXITO */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeader
            eyebrow="CASO DE ÉXITO"
            title="Transformación Digital Real con Resultados Medibles"
            highlight="Resultados Medibles"
          />

          <CaseStudy caseStudy={data.caseStudy} />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-brand-navy via-brand-purple to-brand-navy">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Tu Empresa Necesita Transformación Digital?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Si la tecnología es una barrera en lugar de un facilitador, es momento de actuar
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* CTA 1 - Diagnóstico */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Diagnóstico Gratuito de Madurez Digital
              </h3>
              <p className="text-white/80 mb-6">
                Evaluamos tu nivel de madurez digital y te entregamos un roadmap personalizado
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Evaluación de tu stack tecnológico actual',
                  'Identificación de quick wins digitales',
                  'Benchmark vs mejores prácticas de tu industria',
                  'Roadmap priorizado de transformación'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/90">
                    <svg className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/contacto"
                className="block w-full text-center px-8 py-4 bg-brand-orange text-white font-semibold rounded-xl hover:bg-brand-orange/90 transition-all transform hover:scale-105 shadow-lg"
              >
                Solicitar Diagnóstico GRATIS
              </a>
            </motion.div>

            {/* CTA 2 - Consulta */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
            >
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Consulta con Especialista en Transformación Digital
              </h3>
              <p className="text-white/80 mb-6">
                Agenda 30 minutos con nuestro experto en transformación digital
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Analizamos tus desafíos digitales específicos',
                  'Te orientamos sobre qué componentes necesitas',
                  'Respondemos tus preguntas sobre tecnología',
                  'Te damos recomendación honesta y práctica'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/90">
                    <svg className="w-5 h-5 text-brand-turquoise flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/contacto"
                className="block w-full text-center px-8 py-4 bg-white text-brand-navy font-semibold rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Agendar Llamada Estratégica
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

