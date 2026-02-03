'use client'

import { motion } from 'framer-motion'
import { Target, Sparkles, Star, Search, HeartHandshake, BarChart3, Lightbulb, GraduationCap, Globe } from 'lucide-react'

interface Valor {
  icon: React.ElementType
  title: string
  description: string
  iconColor: string
  iconBg: string
}

const valores: Valor[] = [
  {
    icon: Search,
    title: 'Rigor Técnico',
    description: 'Aplicamos frameworks de clase mundial con metodología disciplinada',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
  },
  {
    icon: HeartHandshake,
    title: 'Compromiso Real',
    description: 'Tu éxito es nuestro éxito. No somos proveedores, somos aliados',
    iconColor: 'text-brand-orange',
    iconBg: 'bg-orange-50',
  },
  {
    icon: BarChart3,
    title: 'Resultados Medibles',
    description: 'Todo lo que hacemos se puede medir, validar y mejorar',
    iconColor: 'text-green-600',
    iconBg: 'bg-green-50',
  },
  {
    icon: Lightbulb,
    title: 'Innovación Práctica',
    description: 'Adoptamos tecnología que resuelve problemas reales, no modas',
    iconColor: 'text-yellow-600',
    iconBg: 'bg-yellow-50',
  },
  {
    icon: GraduationCap,
    title: 'Aprendizaje Continuo',
    description: 'Evolucionamos constantemente para entregar más valor',
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-50',
  },
  {
    icon: Globe,
    title: 'Impacto Regional',
    description: 'Creemos en el potencial de Latinoamérica para competir globalmente',
    iconColor: 'text-brand-turquoise',
    iconBg: 'bg-cyan-50',
  },
]

export function MisionVisionValores() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-turquoise/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4 leading-tight"
          >
            Lo Que Nos <span className="text-brand-orange">Define</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-600"
          >
            Nuestros Principios Rectores
          </motion.p>
        </div>

        {/* Grid Layout */}
        <div className="max-w-7xl mx-auto">
          {/* Misión y Visión - 2 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* CARD 1 - MISIÓN */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border-2 border-cyan-100 hover:border-cyan-300 hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 to-brand-turquoise rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Target className="w-10 h-10 text-white" strokeWidth={2.5} />
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                Nuestra <span className="text-brand-turquoise">Misión</span>
              </h3>

              {/* Description */}
              <p className="text-lg text-gray-700 leading-relaxed">
                 Acompañar de cerca a las PYMES latinoamericanas con{' '}
                <strong className="text-brand-navy">consultoría estratégica práctica y accesible,</strong>, combinando experiencia 
                real con herramientas innovadoras, para generar{' '}
                <strong className="text-brand-turquoise">crecimiento sostenible, resultados medibles y la competitividad que merecen.</strong>
              </p>
            </motion.div>

            {/* CARD 2 - VISIÓN */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border-2 border-orange-100 hover:border-orange-300 hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-400 to-brand-orange rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Sparkles className="w-10 h-10 text-white" strokeWidth={2.5} />
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                Nuestra <span className="text-brand-orange">Visión</span>
              </h3>

              {/* Description */}
              <p className="text-lg text-gray-700 leading-relaxed">
                Ser el socio estratégico{' '}
                <strong className="text-brand-navy">de referencia para las PYMES latinoamericanas</strong>, la firma que forja su crecimiento sostenible, 
                genera{' '}
                <strong className="text-brand-orange">valor real y duradero,</strong> y las impulsa a competir y prosperar en cualquier escenario, 
                gracias a nuestra cercanía, innovación accesible y compromiso total con sus resultados.
              </p>
            </motion.div>
          </div>

          {/* CARD 3 - VALORES - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-brand-navy via-brand-purple to-brand-navy rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl mb-6 shadow-xl">
                  <Star className="w-10 h-10 text-white" strokeWidth={2.5} fill="white" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Nuestros <span className="text-brand-orange">Valores</span>
                </h3>

                <p className="text-lg text-white/80">
                  Los principios que guían cada una de nuestras acciones
                </p>
              </div>

              {/* Grid de Valores */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {valores.map((valor, index) => {
                  const Icon = valor.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 hover:border-white/40 transition-all duration-300 group"
                    >
                      {/* Icon */}
                      <div className={`inline-flex items-center justify-center w-12 h-12 ${valor.iconBg} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-6 h-6 ${valor.iconColor}`} strokeWidth={2} />
                      </div>

                      {/* Title */}
                      <h4 className="text-lg font-bold text-white mb-2">
                        {valor.title}
                      </h4>

                      {/* Description */}
                      <p className="text-sm text-white/80 leading-relaxed">
                        {valor.description}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats o Quote Final (opcional) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-brand-turquoise/20">
            <p className="text-xl md:text-2xl font-bold text-brand-navy italic">
              &quot;Estos principios no son solo palabras en una página.<br />
              Son el <span className="text-brand-orange">ADN</span> de cada proyecto que entregamos.&quot;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

