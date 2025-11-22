'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, Calendar, Sparkles } from 'lucide-react'

interface Compromiso {
  titulo: string
  descripcion: string
}

const compromisos: Compromiso[] = [
  {
    titulo: 'TRANSPARENCIA TOTAL',
    descripcion: 'Reportes semanales de avance. Comunicación abierta en cada etapa.',
  },
  {
    titulo: 'RESULTADOS MEDIBLES',
    descripcion: 'Si no cumplimos, ajustamos sin costo adicional. Tu éxito es nuestro éxito.',
  },
  {
    titulo: 'TRANSFERENCIA DE CONOCIMIENTO',
    descripcion: 'Tu equipo aprende en el proceso. No creamos dependencia, creamos autonomía. Documentación completa incluida.',
  },
  {
    titulo: 'SOPORTE POST-IMPLEMENTACIÓN',
    descripcion: 'No desaparecemos al entregar. Te acompañamos en la adopción, ajustes y mejora continua.',
  },
  {
    titulo: 'CONFIDENCIALIDAD ABSOLUTA',
    descripcion: 'Acuerdos de confidencialidad (NDA) en todos los proyectos. Tu información está protegida.',
  },
]

export function OurCommitment() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-turquoise/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6 leading-tight"
          >
            Nuestro <span className="text-brand-orange">Compromiso</span> Contigo
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-700 leading-relaxed"
          >
            Cuando decides trabajar con FORJA, no contratas un &quot;proveedor&quot;.{' '}
            <strong className="text-brand-orange">Ganas un socio estratégico</strong> comprometido con tu éxito.
          </motion.p>
        </div>

        {/* Compromisos */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
            <div className="grid grid-cols-1 gap-6">
              {compromisos.map((compromiso, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  {/* Checkmark */}
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-turquoise/10 rounded-full flex items-center justify-center group-hover:bg-brand-turquoise/20 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-brand-turquoise" strokeWidth={2.5} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-brand-navy mb-2">
                      {compromiso.titulo}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {compromiso.descripcion}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote Destacado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="bg-gradient-to-br from-brand-navy via-brand-purple to-brand-navy rounded-2xl p-8 md:p-12 shadow-2xl border-l-8 border-brand-turquoise relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <Sparkles className="w-12 h-12 text-brand-orange mb-6" />
              <blockquote className="text-2xl md:text-3xl font-bold text-white leading-relaxed italic mb-6">
                &quot;No prometemos milagros. Prometemos <span className="text-brand-orange">método, rigor</span> y compromiso con <span className="text-brand-turquoise">resultados reales</span>.&quot;
              </blockquote>
              <p className="text-lg text-white/80 font-semibold">
                - Equipo FORJA
              </p>
            </div>
          </div>
        </motion.div>

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
                    Solicita tu <strong>Rayos-X Empresarial Gratuito</strong> y descubre tu nivel de madurez digital
                  </p>

                  <Link
                    href="/rayos-x-empresarial"
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
            <p className="text-gray-600 text-sm">
              🔒 <strong>100% Confidencial</strong> · 🚀 <strong>Sin Compromisos Ocultos</strong> · ⚡ <strong>Respuesta en 24 horas</strong>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

