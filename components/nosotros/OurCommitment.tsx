'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, Calendar, Sparkles, Lock, Rocket, Zap } from 'lucide-react'

interface Compromiso {
  titulo: string
  descripcion: string
}
export function OurCommitment() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-turquoise/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Dual CTA */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* CTA PRIMARIO */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-brand-orange to-orange-600 rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 group overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-4">
                    <Sparkles className="w-4 h-4 text-white" />
                    <span className="text-white font-bold text-sm uppercase tracking-wider">
                      Recomendado
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    ¿Listo para Transformar tu Empresa?
                  </h3>

                  <p className="text-lg text-white/90 mb-8 leading-relaxed">
                    Solicita tu <strong>Evaluación de Madurez Empresarial</strong> y descubre tu nivel de madurez digital
                  </p>

                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-orange font-bold text-lg rounded-xl hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 group/button"
                  >
                    Comenzar Ahora
                    <ArrowRight className="w-6 h-6 group-hover/button:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* CTA SECUNDARIO */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border-2 border-brand-navy hover:shadow-2xl hover:border-brand-turquoise transition-all duration-300 group h-full flex flex-col">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-turquoise/10 rounded-full mb-4">
                    <Calendar className="w-4 h-4 text-brand-turquoise" />
                    <span className="text-brand-turquoise font-bold text-sm uppercase tracking-wider">
                      Sin Compromiso
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">
                    ¿Tienes Preguntas sobre Nuestro Enfoque?
                  </h3>

                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Agenda una <strong>llamada de 30 minutos</strong> sin compromiso con uno de nuestros arquitectos
                  </p>
                </div>

                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-navy text-white font-bold text-lg rounded-xl hover:bg-brand-purple transition-all shadow-lg hover:shadow-xl hover:scale-105 group/button"
                >
                  Hablar con un Arquitecto
                  <Calendar className="w-6 h-6 group-hover/button:scale-110 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-8"
          >
            <p className="text-gray-600 text-sm flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
              <span className="inline-flex items-center gap-1"><Lock className="w-4 h-4 text-brand-turquoise" /><strong>100% Confidencial</strong></span>
              <span className="hidden sm:inline">·</span>
              <span className="inline-flex items-center gap-1"><Rocket className="w-4 h-4 text-brand-orange" /><strong>Sin Compromisos Ocultos</strong></span>
              <span className="hidden sm:inline">·</span>
              <span className="inline-flex items-center gap-1"><Zap className="w-4 h-4 text-brand-purple" /><strong>Respuesta en 24 horas</strong></span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

