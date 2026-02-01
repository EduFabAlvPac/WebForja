'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingDown, DollarSign, Zap, Eye, ArrowRight, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

interface PainPointCardProps {
  icon: React.ElementType
  title: string
  description: string
  delay: number
  accentColor: string
  iconGradient: string
  number: number
}

const PainPointCard = ({ icon: Icon, title, description, delay, accentColor, iconGradient, number }: PainPointCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group h-full"
    >
      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl border border-slate-200 hover:border-slate-300 transition-all duration-300 h-full relative overflow-hidden">
        {/* Top accent bar */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${iconGradient}`} />
        
        {/* Number indicator */}
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
          <span className="text-xs font-bold text-slate-400">{number}</span>
        </div>
        
        {/* Warning indicator - subtle */}
        <div className={`absolute -top-10 -right-10 w-24 h-24 ${accentColor} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
        
        <div className="flex flex-col h-full relative z-10">
          {/* Icon with gradient background */}
          <div className={`mb-5 w-14 h-14 rounded-xl bg-gradient-to-br ${iconGradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
            <Icon className="w-7 h-7 text-white" strokeWidth={2} />
          </div>
          
          {/* Title with warning icon */}
          <div className="flex items-start gap-2 mb-3">
            <h3 className="text-lg font-bold text-forja-navy group-hover:text-slate-800 transition-colors leading-tight">
              {title}
            </h3>
          </div>
          
          {/* Description - left aligned for readability */}
          <p className="text-slate-600 leading-relaxed text-sm flex-grow">
            {description}
          </p>
          
          {/* Bottom indicator */}
          <div className="mt-4 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Problema común en PYMEs</span>
            </div>
          </div>
        </div>
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
      accentColor: "bg-red-500",
      iconGradient: "from-red-500 to-rose-400",
    },
    {
      icon: DollarSign,
      title: "Inversión Sin Retorno",
      description: "Has invertido en software, consultores y capacitaciones, pero nada se integra. Tienes herramientas que nadie usa y datos dispersos.",
      accentColor: "bg-amber-500",
      iconGradient: "from-amber-500 to-orange-400",
    },
    {
      icon: Zap,
      title: "Competidores Te Superan",
      description: "Ves cómo otras empresas de tu sector avanzan más rápido, captan mejores clientes y operan con mayor eficiencia. Te quedas atrás.",
      accentColor: "bg-violet-500",
      iconGradient: "from-violet-500 to-purple-400",
    },
    {
      icon: Eye,
      title: "Decisiones a Ciegas",
      description: "No tienes visibilidad real de tu operación. Tomas decisiones por intuición, no por datos. El caos digital te paraliza.",
      accentColor: "bg-cyan-500",
      iconGradient: "from-cyan-500 to-teal-400",
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t-2 border-slate-200 section-shadow-alt relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header - Mejorado */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-600 font-bold text-sm uppercase tracking-wider mb-4"
          >
            <AlertTriangle className="w-4 h-4" />
            Tu Realidad Actual
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-forja-navy mb-4 leading-tight"
          >
            ¿Te Identificas con Alguna de{' '}
            <span className="relative">
              <span className="relative z-10 text-forja-fire">Estas Situaciones</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-forja-fire/20 -skew-x-2" />
            </span>
            ?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Si alguno de estos problemas te suena familiar, no estás solo. Son los desafíos más comunes que enfrentan las PYMEs en crecimiento.
          </motion.p>
        </div>

        {/* Cards Grid - Mejorado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-16">
          {painPoints.map((point, index) => (
            <PainPointCard
              key={index}
              icon={point.icon}
              title={point.title}
              description={point.description}
              delay={index * 0.1}
              accentColor={point.accentColor}
              iconGradient={point.iconGradient}
              number={index + 1}
            />
          ))}
        </div>

        {/* CTA Final - Rediseñado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-forja-navy via-forja-purple to-forja-navy rounded-[2rem] blur-lg opacity-30" />
            
            <div className="relative bg-gradient-to-br from-forja-navy via-slate-800 to-forja-purple rounded-3xl p-8 md:p-12 text-center overflow-hidden shadow-2xl">
              {/* Decorative mesh */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                  backgroundSize: '32px 32px'
                }} />
              </div>
              
              {/* Decorative orbs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-forja-teal/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-forja-fire/20 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                {/* Strikethrough text */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                  <span className="text-white/60 text-lg line-through decoration-2">Tu equipo</span>
                  <span className="text-white/60 text-lg line-through decoration-2">Tu mercado</span>
                  <span className="text-white/60 text-lg line-through decoration-2">Falta de recursos</span>
                </div>
                
                <p className="text-white/90 text-lg md:text-xl mb-2">
                  El problema <span className="font-bold text-white">NO</span> es ninguno de estos.
                </p>
                
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-8 leading-snug max-w-3xl mx-auto">
                  Es la falta de{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-forja-fire">arquitectura estratégica</span>
                    <span className="absolute bottom-0 left-0 w-full h-2 bg-forja-fire/30 -skew-x-2" />
                  </span>
                  {' '}que conecte tecnología, procesos y personas.
                </h3>
                
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block"
                >
                  <Link 
                    href="#metodologia"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-forja-navy font-bold text-lg rounded-xl hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl group"
                  >
                    <span>Descubre Cómo FORJA Resuelve Esto</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

