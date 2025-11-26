'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Lightbulb, Smartphone, Check, Target } from 'lucide-react'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/shared/SectionHeader'

const colorClasses = {
  cyan: {
    gradient: 'from-cyan-400 to-cyan-600',
    text: 'text-cyan-500',
  },
  orange: {
    gradient: 'from-orange-400 to-orange-600',
    text: 'text-orange-500',
  },
}

const services = [
  {
    icon: Lightbulb,
    title: 'Arquitectura Estratégica',
    description: 'Diseñamos la arquitectura integral que alinea tu estrategia de negocio con capacidades tecnológicas, procesos optimizados y una estructura organizacional preparada para escalar.',
    href: '/servicios/estrategia-transformacion/arquitectura-estrategica',
    highlights: [
      'Blueprint de transformación digital',
      'Roadmap de implementación a 12-36 meses',
      'Diseño de modelo operativo y gobernanza',
      'Alineación de TI con objetivos de negocio',
    ],
    color: 'cyan'
  },
  {
    icon: Smartphone,
    title: 'Transformación Digital 360°',
    description: 'Convertimos la tecnología en una ventaja competitiva medible, integrando innovación, inteligencia de negocio y automatización en tu ADN empresarial.',
    href: '/servicios/estrategia-transformacion/transformacion-digital',
    highlights: [
      'Innovación y nuevos modelos de negocio',
      'Inteligencia de Negocio (BI) y Analytics',
      'Definición de Tech Stack y modernización',
      'Integración de Inteligencia Artificial (IA)',
    ],
    color: 'orange'
  },
]

export default function EstrategiaTransformacionPage() {
  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy via-brand-purple to-brand-navy py-20 md:py-28 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <motion.div
            className="w-full h-full"
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 15, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
              alt="Equipo colaborando en estrategia de transformación empresarial"
              fill
              className="object-cover"
              quality={90}
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-purple/80 to-brand-navy/90" />
        </div>
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-brand-orange/20 border border-brand-orange rounded-full mb-6"
          >
            <span className="text-brand-orange font-bold text-sm uppercase tracking-wider">
              Categoría de Servicios
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Estrategia & <span className="text-brand-orange">Transformación</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto"
          >
            El Blueprint para alinear tu visión de negocio con la ejecución tecnológica, garantizando un crecimiento sostenible y una ventaja competitiva real.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-brand-turquoise group"
              >
                <div className="p-8 md:p-10">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-6 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                      className={`flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg bg-gradient-to-br ${colorClasses[service.color as keyof typeof colorClasses].gradient}`}
                    >
                      <service.icon className="w-10 h-10 text-white" strokeWidth={2} />
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-4 mb-8">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <Check className={`w-6 h-6 ${colorClasses[service.color as keyof typeof colorClasses].text} flex-shrink-0`} strokeWidth={3} />
                        <span className="text-gray-800 font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href={service.href}
                      className="inline-flex items-center justify-center gap-3 w-full px-8 py-4 bg-brand-navy text-white font-bold text-lg rounded-xl hover:bg-brand-purple transition-all shadow-lg"
                    >
                      Conocer Más
                      <ArrowRight className="w-6 h-6" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-brand-orange/10 to-brand-turquoise/10 rounded-3xl p-8 md:p-12 text-center border-2 border-brand-orange/30 shadow-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center mb-6"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-brand-orange to-orange-600 rounded-2xl flex items-center justify-center shadow-xl">
                <Target className="w-10 h-10 text-white" strokeWidth={2.5} />
              </div>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              ¿No sabes por dónde empezar?
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Nuestro **Diagnóstico Gratuito** es el primer paso. Evaluamos tu madurez digital y te entregamos un roadmap claro con los pasos a seguir.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand-orange text-white font-bold text-lg rounded-xl hover:bg-brand-orange-dark transition-all shadow-xl"
              >
                Solicitar Diagnóstico Gratuito
                <ArrowRight className="w-6 h-6" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

