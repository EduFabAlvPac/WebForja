'use client'

import { motion } from 'framer-motion'
import { Search, Compass, Cog, TrendingUp, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const FASES_FORJA = [
  {
    id: 'fundamentar',
    letter: 'F',
    icon: Search,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    title: 'Fundamentar',
    description: 'Conocemos a fondo tu empresa para entender dónde estás hoy y qué necesitas mejorar.',
    items: [
      'Revisamos cómo trabajas hoy',
      'Identificamos oportunidades',
      'Medimos tu madurez digital',
      'Definimos prioridades claras'
    ],
    color: 'text-blue-600',
    borderColor: 'border-blue-200',
    hoverBg: 'hover:bg-blue-50'
  },
  {
    id: 'orientar',
    letter: 'O',
    icon: Compass,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    title: 'Orientar',
    description: 'Diseñamos juntos el camino a seguir con un plan claro y realista para tu empresa.',
    items: [
      'Creamos tu plan de acción',
      'Definimos metas alcanzables',
      'Estimamos inversión necesaria',
      'Establecemos tiempos reales'
    ],
    color: 'text-purple-600',
    borderColor: 'border-purple-200',
    hoverBg: 'hover:bg-purple-50'
  },
  {
    id: 'redisenar',
    letter: 'R',
    icon: Cog,
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    title: 'Rediseñar',
    description: 'Transformamos tus procesos y herramientas para que tu empresa funcione mejor.',
    items: [
      'Mejoramos tus procesos',
      'Implementamos tecnología',
      'Optimizamos operaciones',
      'Capacitamos a tu equipo'
    ],
    color: 'text-orange-600',
    borderColor: 'border-orange-200',
    hoverBg: 'hover:bg-orange-50'
  },
  {
    id: 'justificar',
    letter: 'J',
    icon: TrendingUp,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    title: 'Justificar',
    description: 'Medimos los resultados para demostrar el valor real de la transformación en tu negocio.',
    items: [
      'Medimos resultados concretos',
      'Calculamos retorno de inversión',
      'Documentamos mejoras',
      'Compartimos aprendizajes'
    ],
    color: 'text-green-600',
    borderColor: 'border-green-200',
    hoverBg: 'hover:bg-green-50'
  },
  {
    id: 'acompanar',
    letter: 'A',
    icon: Users,
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
    title: 'Acompañar',
    description: 'Estamos contigo en cada paso para asegurar que los cambios se mantengan en el tiempo.',
    items: [
      'Seguimiento continuo',
      'Soporte técnico permanente',
      'Ajustes cuando los necesites',
      'Crecemos juntos'
    ],
    color: 'text-cyan-600',
    borderColor: 'border-cyan-200',
    hoverBg: 'hover:bg-cyan-50'
  }
]

export function MetodologiaSection() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-orange rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-turquoise rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-orange font-semibold text-sm uppercase tracking-wider mb-3"
          >
            Nuestra Metodología
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4"
          >
            Metodología <span className="text-brand-orange">FORJA</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            5 pasos simples y claros que han transformado más de 200 empresas en Latinoamérica
          </motion.p>
        </div>

        {/* Timeline de Fases */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {FASES_FORJA.map((fase, index) => {
              const IconComponent = fase.icon

              return (
                <motion.div
                  key={fase.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative"
                >
                  {/* Conector de línea (solo en desktop) */}
                  {index < FASES_FORJA.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-gray-200 to-transparent z-0" />
                  )}

                  <div className={`relative bg-white rounded-2xl p-6 border-2 ${fase.borderColor} ${fase.hoverBg} transition-all duration-300 hover:shadow-xl group h-full`}>
                    {/* Badge con letra */}
                    <div className="absolute -top-3 -left-3 w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {fase.letter}
                    </div>

                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${fase.iconBg} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-7 h-7 ${fase.iconColor}`} strokeWidth={2} />
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl font-bold mb-2 ${fase.color}`}>
                      {fase.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {fase.description}
                    </p>

                    {/* Items List */}
                    <ul className="space-y-2">
                      {fase.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className={`inline-block w-1.5 h-1.5 rounded-full ${fase.color} mt-1.5 flex-shrink-0`} />
                          <span className="text-gray-700 text-xs leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Stats / Resultados */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: '200+', label: 'Empresas Transformadas' },
            { value: '95%', label: 'Tasa de Éxito' },
            { value: '8', label: 'Países en LATAM' },
            { value: '15+', label: 'Años de Experiencia' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100"
            >
              <div className="text-3xl md:text-4xl font-bold text-brand-orange mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-navy hover:bg-brand-navy-dark text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Descubre Cómo Funciona FORJA
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

