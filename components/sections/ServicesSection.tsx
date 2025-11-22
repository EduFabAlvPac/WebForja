'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Building2, Users, Settings, ArrowRight, Check, Star, ClipboardCheck, TrendingUp } from 'lucide-react'

interface ServiceBenefit {
  text: string
}

interface ServiceCardProps {
  icon: React.ElementType
  title: string
  description: string
  benefits: ServiceBenefit[]
  link: string
  isFeatured?: boolean
}

const ServiceCard = ({ icon: Icon, title, description, benefits, link, isFeatured }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group ${
        isFeatured 
          ? 'border-2 border-brand-turquoise lg:scale-105 lg:z-10' 
          : 'border border-gray-200 hover:border-brand-orange/30'
      }`}
    >
      {/* Badge "Más Solicitado" */}
      {isFeatured && (
        <div className="absolute top-4 right-4 z-20">
          <div className="flex items-center gap-1.5 bg-gradient-to-r from-brand-orange to-brand-orange-dark text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg animate-pulse">
            <Star className="w-3.5 h-3.5 fill-current" />
            MÁS SOLICITADO
          </div>
        </div>
      )}

      {/* Decorative gradient overlay */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
        isFeatured 
          ? 'bg-gradient-to-br from-brand-turquoise/5 to-brand-purple/5' 
          : 'bg-gradient-to-br from-brand-orange/5 to-brand-orange/0'
      }`} />

      {/* Content */}
      <div className={`relative z-10 ${isFeatured ? 'p-8 lg:p-10' : 'p-8'}`}>
        {/* Icon */}
        <motion.div 
          className={`inline-flex items-center justify-center rounded-2xl mb-6 ${
            isFeatured 
              ? 'w-20 h-20 bg-gradient-to-br from-brand-turquoise/20 to-brand-turquoise/10' 
              : 'w-16 h-16 bg-gray-50'
          }`}
          whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.4 }}
        >
          <Icon 
            className={`${isFeatured ? 'w-10 h-10 text-brand-turquoise' : 'w-8 h-8 text-brand-orange'}`} 
            strokeWidth={2} 
          />
        </motion.div>

        {/* Title */}
        <h3 className={`font-bold text-brand-navy mb-4 ${isFeatured ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
          {title}
        </h3>

        {/* Description */}
        <p className={`text-gray-600 leading-relaxed mb-6 ${isFeatured ? 'text-base' : 'text-sm'}`}>
          {description}
        </p>

        {/* Benefits List */}
        <ul className="space-y-3 mb-6">
          {benefits.map((benefit, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3"
            >
              <div className={`flex-shrink-0 ${isFeatured ? 'mt-1' : 'mt-0.5'}`}>
                <Check className={`${isFeatured ? 'w-5 h-5' : 'w-4 h-4'} text-green-500`} strokeWidth={3} />
              </div>
              <span className={`text-gray-700 ${isFeatured ? 'text-base font-medium' : 'text-sm'}`}>
                {benefit.text}
              </span>
            </motion.li>
          ))}
        </ul>

        {/* Trabajamos al Éxito - Solo para featured */}
        {isFeatured && (
          <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-200">
            <div className="flex items-center justify-center gap-3">
              <motion.div
                whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                transition={{ duration: 0.4 }}
              >
                <TrendingUp className="w-8 h-8 text-brand-coral" strokeWidth={2.5} />
              </motion.div>
              <h4 className="text-lg font-bold text-brand-navy">
                Trabajamos al Éxito
              </h4>
            </div>
          </div>
        )}

        {/* CTA Buttons */}
        <div className={`flex flex-col gap-3 ${isFeatured ? 'pt-2' : ''}`}>
          <Link href={link}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                isFeatured
                  ? 'bg-gradient-to-r from-brand-orange to-brand-orange-dark text-white shadow-lg hover:shadow-xl'
                  : 'bg-brand-navy text-white hover:bg-brand-navy-dark'
              }`}
            >
              {isFeatured ? 'Evalúa tu Arquitectura Actual' : 'Conocer más'}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
          
          {isFeatured && (
            <Link 
              href="/casos-exito#estrategia"
              className="text-center text-brand-orange hover:text-brand-orange-dark font-semibold text-sm transition-colors flex items-center justify-center gap-1"
            >
              Ver casos de éxito
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>

      {/* Glow effect en hover para featured */}
      {isFeatured && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-turquoise/10 via-transparent to-brand-purple/10 blur-xl" />
        </div>
      )}
    </motion.div>
  )
}

export function ServicesSection() {
  const services = [
    {
      icon: Building2,
      title: 'Estrategia & Transformación',
      description: 'Construimos la arquitectura estratégica que alinea tu visión, gobierno corporativo, tecnología y finanzas hacia objetivos de crecimiento medibles.',
      benefits: [
        { text: 'Arquitectura Empresarial' },
        { text: 'Roadmap de Transformación Digital 360°' },
        { text: 'Gobierno Corporativo & Estructura Financiera' },
        { text: 'Integración de IA y Tecnologías Emergentes' },
      ],
      link: '/servicios/estrategia-transformacion/arquitectura-estrategica',
      isFeatured: true,
    },
    {
      icon: Users,
      title: 'Talento & Finanzas',
      description: 'Equipos alineados + finanzas saludables = crecimiento sostenible. Optimizamos tu capital humano y estructura financiera simultáneamente.',
      benefits: [
        { text: 'Gestión de Talento por Competencias' },
        { text: 'Cultura Organizacional & Engagement' },
        { text: 'Ingeniería Financiera & Control de Gestión' },
        { text: 'Pricing Estratégico & Análisis de Rentabilidad' },
      ],
      link: '/servicios/talento-humano',
    },
    {
      icon: Settings,
      title: 'Comercial & Operaciones',
      description: 'Procesos eficientes que liberan recursos + sistemas comerciales que convierten leads en clientes recurrentes.',
      benefits: [
        { text: 'Excelencia Operativa Lean & BPM' },
        { text: 'Automatización de Procesos (RPA)' },
        { text: 'Motor Comercial & CRM Estratégico' },
        { text: 'Experiencia de Cliente (CX) Omnicanal' },
      ],
      link: '/servicios/excelencia-operativa',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-turquoise/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-orange font-bold text-sm uppercase tracking-wider mb-3"
          >
            NUESTRO ENFOQUE
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6 leading-tight"
          >
            3 Frentes Estratégicos que <span className="text-brand-orange">Transforman tu PYME</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            No vendemos servicios aislados. Diseñamos <strong>ecosistemas integrados</strong> donde cada componente potencia al otro para resultados exponenciales.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 mb-16 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              benefits={service.benefits}
              link={service.link}
              isFeatured={service.isFeatured}
            />
          ))}
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-brand-navy to-brand-purple rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-turquoise/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                ¿No Sabes Por Dónde Empezar?
              </h3>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Nuestro <strong>Rayos-X Empresarial</strong> evalúa tu madurez digital y te recomienda el camino más efectivo para tu situación específica.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Link 
                  href="/rayos-x-empresarial"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-navy font-bold text-lg rounded-xl hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl group"
                >
                  <ClipboardCheck className="w-6 h-6 text-brand-orange" />
                  Solicita tu Diagnóstico Estratégico GRATIS
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
