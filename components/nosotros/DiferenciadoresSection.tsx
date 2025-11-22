'use client'

import { motion } from 'framer-motion'
import { Target, Hammer, BarChart3, HeartHandshake, Globe, DollarSign, Check, X } from 'lucide-react'

interface Diferenciador {
  icon: React.ElementType
  title: string
  description: string
  iconColor: string
  iconBg: string
  borderColor: string
}

interface Comparacion {
  aspecto: string
  tradicional: string
  forja: string
}

const diferenciadores: Diferenciador[] = [
  {
    icon: Target,
    title: 'Especializados en PYMEs, No en Corporaciones',
    description: 'No adaptamos metodologías de grandes empresas. Diseñamos frameworks específicos para la realidad de empresas de 20-200 empleados con recursos limitados pero ambiciones ilimitadas.',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    icon: Hammer,
    title: 'Arquitectos, No Vendedores de Software',
    description: 'No vendemos CRM, ERP o plataformas. Diseñamos la arquitectura estratégica y LUEGO recomendamos las herramientas apropiadas. La tecnología sirve a la estrategia, no al revés.',
    iconColor: 'text-brand-orange',
    iconBg: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
  {
    icon: BarChart3,
    title: 'Resultados Medibles, No Documentos Archivados',
    description: 'Cada proyecto tiene KPIs claros y ROI calculado. No entregamos PDFs de 200 páginas que nadie lee. Entregamos dashboards, procesos funcionando y equipos empoderados.',
    iconColor: 'text-green-600',
    iconBg: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  {
    icon: HeartHandshake,
    title: 'Acompañamiento Continuo, No "Fire and Forget"',
    description: 'No desaparecemos después de la implementación. Te acompañamos en la evolución, ajustamos lo necesario y nos aseguramos que el cambio se sostenga en el tiempo.',
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
  {
    icon: Globe,
    title: 'Contexto Latinoamericano, Estándares Globales',
    description: 'Entendemos los desafíos únicos de operar en LATAM (regulación, talento, infraestructura) pero aplicamos metodologías a la medida (FORJA).',
    iconColor: 'text-brand-turquoise',
    iconBg: 'bg-cyan-50',
    borderColor: 'border-cyan-200',
  },
  {
    icon: DollarSign,
    title: 'Inversión Inteligente, No Gasto Inaccesible',
    description: 'Estructuramos proyectos para que la inversión se pague sola con eficiencias ganadas. No cobramos por Horas, Trabajamos al Éxito.',
    iconColor: 'text-yellow-600',
    iconBg: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
  },
]

const comparaciones: Comparacion[] = [
  {
    aspecto: 'Enfoque',
    tradicional: 'Venden software o horas consultor',
    forja: 'Diseñamos arquitectura estratégica integral',
  },
  {
    aspecto: 'Metodología',
    tradicional: 'Genérica (one-size-fits-all)',
    forja: 'FORJA® adaptada a PYMEs latinoamericanas',
  },
  {
    aspecto: 'Duración',
    tradicional: 'Proyectos puntuales de 2-3 meses',
    forja: 'Acompañamiento continuo 6-12+ meses',
  },
  {
    aspecto: 'Resultados',
    tradicional: 'Documentos técnicos',
    forja: 'ROI medible y sostenible',
  },
  {
    aspecto: 'Relación',
    tradicional: 'Cliente-proveedor',
    forja: 'Aliados estratégicos',
  },
]

export function DiferenciadoresSection() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-turquoise/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-orange font-bold text-sm uppercase tracking-wider mb-3"
          >
            LO QUE NOS HACE ÚNICOS
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6 leading-tight"
          >
            Por Qué <span className="text-brand-orange">FORJA</span>, No Otra Consultoría
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 italic"
          >
            No somos para todos. Somos para quienes quieren <strong className="text-brand-orange">resultados</strong>, no documentos.
          </motion.p>
        </div>

        {/* Grid de Diferenciadores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {diferenciadores.map((diferenciador, index) => {
            const Icon = diferenciador.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`bg-white rounded-2xl p-8 shadow-lg border-2 ${diferenciador.borderColor} hover:shadow-2xl transition-all duration-300 group`}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 ${diferenciador.iconBg} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${diferenciador.iconColor}`} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-brand-navy mb-4 leading-tight">
                  {diferenciador.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {diferenciador.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Comparación Rápida */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header de Comparación */}
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">
              Comparación <span className="text-brand-orange">Directa</span>
            </h3>
            <p className="text-lg text-gray-600">
              Así nos diferenciamos de las consultorías tradicionales
            </p>
          </div>

          {/* Comparación Elegante - Dos Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card NO SOMOS */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-xl border-2 border-red-200 hover:shadow-2xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full">
                  <X className="w-6 h-6 text-red-600" strokeWidth={3} />
                </div>
                <h4 className="text-2xl font-bold text-red-600">
                  NO SOMOS
                </h4>
              </div>

              {/* Lista */}
              <ul className="space-y-5">
                {comparaciones.map((comp, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-gray-700 leading-relaxed">
                      {comp.tradicional}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Card SÍ SOMOS */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-xl border-2 border-green-200 hover:shadow-2xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                  <Check className="w-6 h-6 text-green-600" strokeWidth={3} />
                </div>
                <h4 className="text-2xl font-bold text-green-600">
                  SÍ SOMOS
                </h4>
              </div>

              {/* Lista */}
              <ul className="space-y-5">
                {comparaciones.map((comp, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-brand-navy font-semibold leading-relaxed">
                      {comp.forja}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Quote Final */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-br from-brand-navy via-brand-purple to-brand-navy rounded-2xl p-8 md:p-10 shadow-2xl">
              <p className="text-2xl md:text-3xl font-bold text-white italic leading-relaxed">
                &quot;Si buscas el camino fácil, no somos tu opción.<br />
                Si buscas <span className="text-brand-orange">resultados reales</span>, bienvenido a FORJA.&quot;
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

