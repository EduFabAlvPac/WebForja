'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Lightbulb, Rocket, Users, DollarSign, Settings, Headphones, ArrowRight } from 'lucide-react'

const SERVICE_GROUPS = [
  {
    id: 'estrategia-transformacion',
    category: 'Estrategia & Transformación',
    description: 'Diseñamos la visión estratégica y ejecutamos la transformación digital de tu empresa',
    services: [
      {
        id: 'estrategia',
        icon: Lightbulb,
        iconBg: 'bg-cyan-100',
        iconColor: 'text-cyan-600',
        bulletColor: 'text-cyan-600',
        title: 'Estrategia Empresarial',
        description: 'Definimos la visión estratégica, estructuras de gobierno corporativo y arquitectura empresarial que impulsan el crecimiento sostenible.',
        items: [
          'Visión Estratégica',
          'Gobierno Corporativo',
          'Arquitectura empresarial',
          'Planificación Financiera'
        ],
        link: '/servicios/estrategia-empresarial'
      },
      {
        id: 'transformacion',
        icon: Rocket,
        iconBg: 'bg-orange-100',
        iconColor: 'text-orange-600',
        bulletColor: 'text-orange-600',
        title: 'Transformación Digital',
        description: 'Implementamos tecnologías disruptivas como IA, automatización y análisis de datos para revolucionar tu operación.',
        items: [
          'Innovación',
          'Business Intelligence',
          'Tecnología (Tech)',
          'Customer Experience (CX)',
          'Inteligencia Artificial (IA)'
        ],
        link: '/servicios/transformacion-digital'
      }
    ]
  },
  {
    id: 'talento-finanzas',
    category: 'Talento & Finanzas',
    description: 'Desarrollamos tu capital humano y fortalecemos tu gestión financiera',
    services: [
      {
        id: 'talento-humano',
        icon: Users,
        iconBg: 'bg-purple-100',
        iconColor: 'text-purple-600',
        bulletColor: 'text-purple-600',
        title: 'Talento Humano',
        description: 'Desarrollamos las competencias de tu equipo y optimizamos la gestión del capital humano para maximizar el rendimiento.',
        items: [
          'Evaluación de Competencias',
          'Programas de Capacitación',
          'Desarrollo de Liderazgo',
          'Cultura Organizacional'
        ],
        link: '/servicios/talento-humano'
      },
      {
        id: 'finanzas',
        icon: DollarSign,
        iconBg: 'bg-teal-100',
        iconColor: 'text-teal-600',
        bulletColor: 'text-teal-600',
        title: 'Finanzas',
        description: 'Optimizamos la gestión financiera con análisis de cartera, planeación fiscal y estrategias de crecimiento rentable.',
        items: [
          'Gestión de Cartera',
          'Análisis Financiero',
          'Planeación de Impuestos',
          'Estrategia Financiera'
        ],
        link: '/servicios/finanzas'
      }
    ]
  },
  {
    id: 'comercial-operaciones',
    category: 'Comercial & Operaciones',
    description: 'Impulsamos tus ventas y optimizamos tu eficiencia operacional',
    services: [
      {
        id: 'excelencia-operativa',
        icon: Settings,
        iconBg: 'bg-red-100',
        iconColor: 'text-red-600',
        bulletColor: 'text-red-600',
        title: 'Excelencia Operativa',
        description: 'Automatizamos procesos, mejoramos eficiencia y implementamos mejores prácticas para operaciones de clase mundial.',
        items: [
          'Optimización de Procesos',
          'Automatización',
          'Mejora Continua',
          'Gestión de Calidad'
        ],
        link: '/servicios/excelencia-operativa'
      },
      {
        id: 'comercial-servicio',
        icon: Headphones,
        iconBg: 'bg-violet-100',
        iconColor: 'text-violet-600',
        bulletColor: 'text-violet-600',
        title: 'Comercial y Servicio al Cliente',
        description: 'Fortalecemos tu estrategia comercial y elevamos la experiencia del cliente para impulsar tus ventas.',
        items: [
          'Estrategia de Ventas',
          'CRM y Gestión Comercial',
          'Servicio al Cliente',
          'Experiencia del Cliente (CX)'
        ],
        link: '/servicios/comercial-servicio'
      }
    ]
  }
]

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-orange font-semibold text-sm uppercase tracking-wider mb-3"
          >
            Nuestros Servicios
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4"
          >
            Soluciones Integrales para tu Empresa
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Transformamos organizaciones con estrategias personalizadas y tecnología de vanguardia
          </motion.p>
        </div>

        {/* Service Groups */}
        <div className="space-y-16">
          {SERVICE_GROUPS.map((group, groupIndex) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.2, duration: 0.6 }}
            >
              {/* Group Header */}
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">
                  {group.category}
                </h3>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  {group.description}
                </p>
              </div>

              {/* Services Grid dentro del grupo */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                {group.services.map((service, serviceIndex) => {
                  const IconComponent = service.icon
                  
                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: serviceIndex * 0.1, duration: 0.5 }}
                    >
                      <Link
                        href={service.link}
                        className="group block h-full"
                      >
                        <div className="h-full bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-orange/20">
                          {/* Icon */}
                          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.iconBg} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className={`w-8 h-8 ${service.iconColor}`} strokeWidth={2} />
                          </div>

                          {/* Title */}
                          <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-orange transition-colors">
                            {service.title}
                          </h4>

                          {/* Description */}
                          <p className="text-gray-600 text-sm leading-relaxed mb-6">
                            {service.description}
                          </p>

                          {/* Items List */}
                          <ul className="space-y-2.5 mb-6">
                            {service.items.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className={`inline-block w-1.5 h-1.5 rounded-full ${service.bulletColor} mt-2 flex-shrink-0`} />
                                <span className="text-gray-700 text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Link */}
                          <div className="flex items-center gap-2 text-brand-navy font-semibold text-sm group-hover:text-brand-orange group-hover:gap-3 transition-all">
                            <span>Conocer más</span>
                            <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Ver Todos los Servicios
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
