'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Target, Hammer, Rocket, Lightbulb, Heart, ArrowRight, Calendar, Users } from 'lucide-react'

interface Proposito {
  icon: React.ElementType
  text: string
  iconColor: string
  iconBg: string
}

interface TimelineEvent {
  year: string
  title: string
  description: string
  icon: React.ElementType
  iconColor: string
  iconBg: string
}

const propositos: Proposito[] = [
  {
    icon: Target,
    text: 'Democratizar el acceso a arquitectura empresarial y estrategias alineadas a las necesidades de las pequeñas y medianas empresas.',
    iconColor: 'text-brand-turquoise',
    iconBg: 'bg-cyan-50',
  },
  {
    icon: Hammer,
    text: 'Diseñar soluciones prácticas, medibles y accionables, no documentos que terminan archivados.',
    iconColor: 'text-brand-orange',
    iconBg: 'bg-orange-50',
  },
  {
    icon: Rocket,
    text: 'Acompañar a las empresas para que tengan claro dónde están y el horizonte a desarrollar para llegar a ser competitivos en otros escenarios, incluso en mercados con oportunidad de crecimiento.',
    iconColor: 'text-brand-purple',
    iconBg: 'bg-purple-50',
  },
  {
    icon: Heart,
    text: 'Construir relaciones a largo plazo, no transacciones.',
    iconColor: 'text-brand-coral',
    iconBg: 'bg-red-50',
  },
]

const timeline: TimelineEvent[] = [
  {
    year: '2024',
    title: 'Ideación y Estructuración',
    description: 'Nació la idea de negocio y comenzamos a validar el modelo con PYMEs reales',
    icon: Lightbulb,
    iconColor: 'text-yellow-600',
    iconBg: 'bg-yellow-50',
  },
  {
    year: '2025',
    title: 'Fundación y Primeros Clientes',
    description: 'Lanzamiento oficial y definición de la Metodología FORJA®',
    icon: Rocket,
    iconColor: 'text-brand-turquoise',
    iconBg: 'bg-cyan-50',
  },
  {
    year: '2026',
    title: 'Formalización y Expansión',
    description: 'Expansión a 2 países y consolidación de casos de éxito',
    icon: Target,
    iconColor: 'text-brand-orange',
    iconBg: 'bg-orange-50',
  },
]

export function HistoriaSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-turquoise/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-orange font-bold text-sm uppercase tracking-wider mb-3"
          >
            NOSOTROS
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6 leading-tight"
          >
            <span className="text-brand-orange">Nosotros</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-bold text-brand-turquoise"
          >
            La Historia detrás de FORJA/STRATX
          </motion.p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto mb-20 lg:items-stretch">
          {/* Columna 1: La Historia */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex"
          >
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border-2 border-brand-turquoise/20 w-full flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                La Historia detrás de <span className="text-brand-orange">FORJA/STRATX</span>
              </h3>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed flex-1">
                <p>
                  Trabajando más de 14 años en compañías en la búsqueda de proveedores de productos y servicios,
                  vimos cómo la economía latinoamericana se mueve a través de miles de empresas pequeñas y medianas.
                </p>

                <p>
                  Estas empresas no crecen o desaparecen por falta de claridad estratégica, procesos eficientes,
                  cultura preparada para transformarse, y por la carencia o insuficiencia de capital de trabajo
                  por errores en la gestión financiera.
                </p>

                <p>
                  Eso hace que rápidamente desaparezcan del mercado, independientemente de si tenían o no un buen
                  producto o servicio.
                </p>

                <p>
                  Desafortunadamente estas compañías son abordadas por consultorías genéricas con modelos copiados
                  de otros sectores que nunca funcionaban.
                </p>

                <p>
                  El resultado era siempre el mismo: <strong className="text-red-600">inversiones perdidas</strong>,
                  dueños de empresas y colaboradores frustrados, y negocios brillantes que desaparecieron o no
                  progresaron.
                </p>

                <p className="text-xl font-bold text-brand-navy pt-4 border-t-2 border-brand-turquoise/30">
                  Comprometidos en cambiar esta historia, nos reunimos un grupo de ejecutivos con experiencia en
                  sector real de arquitectura empresarial, finanzas, cadena de abastecimiento, servicio al cliente
                  y desarrollo de talento, para desarrollar una metodología de trabajo abordable y clara, alineada
                  con la pequeña y mediana empresa que requieren acompañamiento para generar resultados reales y
                  sostenibles.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Columna 2: El Propósito */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex"
          >
            <div className="bg-gradient-to-br from-brand-navy via-brand-purple to-brand-navy rounded-2xl p-8 md:p-10 shadow-2xl w-full flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                A qué nos <span className="text-brand-orange">comprometemos</span>
              </h3>

              <div className="space-y-6 flex-1">
                {propositos.map((proposito, index) => {
                  const Icon = proposito.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300"
                    >
                      <div className={`flex-shrink-0 w-12 h-12 ${proposito.iconBg} rounded-xl flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${proposito.iconColor}`} strokeWidth={2} />
                      </div>
                      <p className="text-white/95 text-base leading-relaxed">
                        {proposito.text}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-brand-turquoise/10 border border-brand-turquoise rounded-full mb-4">
              <Calendar className="w-5 h-5 text-brand-turquoise" />
              <span className="text-brand-turquoise font-bold text-sm uppercase tracking-wider">
                Nuestro Camino
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-brand-navy">
              De la <span className="text-brand-orange">Visión</span> a la Realidad
            </h3>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-turquoise via-brand-purple to-brand-orange transform -translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((event, index) => {
                const Icon = event.icon
                const isEven = index % 2 === 0

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                      isEven ? '' : 'md:grid-flow-dense'
                    }`}
                  >
                    {/* Content */}
                    <div className={`${isEven ? 'md:text-right' : 'md:col-start-2'}`}>
                      <div className={`bg-white rounded-2xl p-6 shadow-lg border-2 ${
                        index === 0 ? 'border-yellow-200' : index === 1 ? 'border-cyan-200' : 'border-orange-200'
                      }`}>
                        <div className={`text-4xl font-bold ${
                          index === 0 ? 'text-yellow-600' : index === 1 ? 'text-brand-turquoise' : 'text-brand-orange'
                        } mb-2`}>
                          {event.year}
                        </div>
                        <h4 className="text-xl font-bold text-brand-navy mb-2">
                          {event.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className={`${isEven ? 'md:col-start-2' : 'md:col-start-1'} flex ${
                      isEven ? 'justify-start' : 'justify-end'
                    } md:justify-center`}>
                      <div className={`relative w-20 h-20 ${event.iconBg} rounded-full flex items-center justify-center shadow-xl border-4 border-white z-10`}>
                        <Icon className={`w-10 h-10 ${event.iconColor}`} strokeWidth={2} />
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-brand-turquoise to-brand-purple rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                ¿Quieres ser parte de esta <span className="text-brand-orange">historia</span>?
              </h3>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Únete a las empresas que están transformando su futuro con FORJA
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-navy font-bold text-lg rounded-xl hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl group"
                >
                  Agenda una Conversación
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

