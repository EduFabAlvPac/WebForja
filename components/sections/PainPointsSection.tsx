'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingDown, DollarSign, Zap, Eye, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface PainPointCardProps {
  icon: React.ElementType
  title: string
  description: string
  delay: number
  bgColor: string
  iconColor: string
  borderHoverClass: string
}

const PainPointCard = ({ icon: Icon, title, description, delay, bgColor, iconColor, borderHoverClass }: PainPointCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white p-8 rounded-xl shadow-card border-2 border-gray-100 hover:shadow-xl ${borderHoverClass} transition-all duration-300 group h-full relative overflow-hidden`}
    >
      {/* Decorative gradient on hover */}
      <div className={`absolute inset-0 ${bgColor} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
      
      <div className="flex flex-col items-center text-center h-full relative z-10">
        <motion.div 
          className={`mb-6 p-5 rounded-2xl ${bgColor} shadow-sm group-hover:shadow-lg transition-all duration-300`}
          whileHover={{ scale: 1.08, rotate: [0, -3, 3, 0] }}
          transition={{ duration: 0.4 }}
        >
          <Icon className={`w-12 h-12 ${iconColor}`} strokeWidth={2} />
        </motion.div>
        <h3 className="text-xl font-bold text-brand-navy mb-4 font-heading">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

export const PainPointsSection = () => {
  const painPoints = [
    {
      icon: TrendingDown,
      title: "Crecimiento Estancado",
      description: "Trabajas más horas pero los resultados no mejoran. Tu equipo está sobrecargado y los procesos colapsan cuando intentas escalar.",
      bgColor: "bg-red-50",
      iconColor: "text-brand-coral",
      borderHoverClass: "hover:border-brand-coral"
    },
    {
      icon: DollarSign,
      title: "Inversión Sin Retorno",
      description: "Has invertido en software, consultores y capacitaciones, pero nada se integra. Tienes herramientas que nadie usa y datos dispersos.",
      bgColor: "bg-orange-50",
      iconColor: "text-brand-orange",
      borderHoverClass: "hover:border-brand-orange"
    },
    {
      icon: Zap,
      title: "Competidores Te Superan",
      description: "Ves cómo otras empresas de tu sector avanzan más rápido, captan mejores clientes y operan con mayor eficiencia. Te quedas atrás.",
      bgColor: "bg-purple-50",
      iconColor: "text-brand-purple",
      borderHoverClass: "hover:border-brand-purple"
    },
    {
      icon: Eye,
      title: "Decisiones a Ciegas",
      description: "No tienes visibilidad real de tu operación. Tomas decisiones por intuición, no por datos. El caos digital te paraliza.",
      bgColor: "bg-cyan-50",
      iconColor: "text-brand-turquoise",
      borderHoverClass: "hover:border-brand-turquoise"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-orange font-bold text-sm uppercase tracking-wider mb-3"
          >
            TU REALIDAD ACTUAL
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6 leading-tight"
          >
            ¿Te Identificas con Alguna de <span className="text-brand-orange">Estas Situaciones?</span>
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {painPoints.map((point, index) => (
            <PainPointCard
              key={index}
              icon={point.icon}
              title={point.title}
              description={point.description}
              delay={index * 0.1}
              bgColor={point.bgColor}
              iconColor={point.iconColor}
              borderHoverClass={point.borderHoverClass}
            />
          ))}
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-brand-navy to-brand-purple rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-turquoise/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <p className="text-white/80 text-lg md:text-xl mb-4 leading-relaxed">
                El problema NO es tu equipo. NO es tu mercado. NO es falta de recursos.
              </p>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-8 leading-snug">
                El problema es la falta de <span className="text-brand-orange">arquitectura estratégica</span> que conecte tecnología, procesos y personas hacia un objetivo común.
              </h3>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Link 
                  href="#metodologia"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-navy font-bold text-lg rounded-xl hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl group"
                >
                  <span className="relative">Descubre Cómo FORJA Resuelve Esto</span>
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

