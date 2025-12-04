'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, Phone, Target, BookOpen, Lock, Zap, Gift, BarChart3, ArrowRight, Shield, Clock, Sparkles } from 'lucide-react'
import { trackCTAClick } from '@/lib/analytics'
import { getCTAClaim, siteMetrics } from '@/lib/site-metrics'

interface AlternativeCTA {
  icon: React.ElementType
  title: string
  description: string
  buttonText: string
  buttonLink: string
  accentColor: string
  hoverBg: string
}

const alternativeCTAs: AlternativeCTA[] = [
  {
    icon: Phone,
    title: '¿Prefieres Hablar Primero?',
    description: 'Agenda una llamada de 30 minutos con uno de nuestros Forjadores.',
    buttonText: 'Habla con un Forjador',
    buttonLink: '/contacto',
    accentColor: 'from-forja-teal to-cyan-400',
    hoverBg: 'hover:bg-forja-teal',
  },
  {
    icon: Target,
    title: 'Explora Casos de Éxito',
    description: 'Lee cómo empresas similares a la tuya han transformado su competitividad con FORJA.',
    buttonText: 'Ver Casos Documentados',
    buttonLink: '/nosotros/testimonios',
    accentColor: 'from-forja-purple to-violet-400',
    hoverBg: 'hover:bg-forja-purple',
  },
  {
    icon: BookOpen,
    title: 'Explora Recursos de Interés',
    description: 'Accede a guías, artículos y programas para impulsar tu transformación empresarial.',
    buttonText: 'Ver Recursos',
    buttonLink: '/interes',
    accentColor: 'from-forja-fire to-orange-400',
    hoverBg: 'hover:bg-forja-fire',
  },
]

const trustBadges = [
  { icon: Shield, text: siteMetrics.guarantees.confidentiality, color: 'text-emerald-400' },
  { icon: Clock, text: `Respuesta en ${siteMetrics.rayosX.deliveryTime}h`, color: 'text-cyan-400' },
  { icon: Sparkles, text: siteMetrics.guarantees.noCommitment, color: 'text-amber-400' },
]

const benefits = [
  'Tu nivel de madurez digital actual (score de 6 dimensiones)',
  'Brechas críticas que frenan tu crecimiento',
  'Oportunidades de mejora de alto impacto',
  'Recomendaciones personalizadas para tu industria',
]

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50/50 to-slate-100 relative overflow-hidden">
      {/* Decorative elements - más sutiles */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-forja-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-forja-purple/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Primary CTA Box - Diseño premium mejorado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="relative">
            {/* Glow effect behind card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-forja-teal via-forja-navy to-forja-purple rounded-[2rem] blur-lg opacity-30" />
            
            <div className="relative bg-gradient-to-br from-forja-teal via-forja-navy to-forja-purple rounded-3xl p-8 md:p-12 lg:p-14 overflow-hidden shadow-2xl">
              {/* Decorative mesh pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                  backgroundSize: '40px 40px'
                }} />
              </div>
              
              {/* Decorative orbs */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-forja-fire/20 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-forja-teal/20 rounded-full blur-2xl" />

              <div className="relative z-10">
                {/* Title - Mejorado */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 text-center leading-tight">
                  ¿Listo para Descubrir el{' '}
                  <span className="relative">
                    <span className="relative z-10">Verdadero Potencial</span>
                    <span className="absolute bottom-1 left-0 w-full h-3 bg-forja-fire/40 -skew-x-3" />
                  </span>
                  {' '}de tu Empresa?
                </h2>

                {/* Description */}
                <p className="text-lg md:text-xl text-white/90 mb-10 text-center max-w-3xl mx-auto leading-relaxed">
                  {getCTAClaim()}
                </p>

                {/* Benefits List - Grid mejorado */}
                <div className="max-w-4xl mx-auto mb-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index, duration: 0.4 }}
                        className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                            <Check className="w-4 h-4 text-white" strokeWidth={3} />
                          </div>
                        </div>
                        <span className="text-white text-sm md:text-base leading-relaxed font-medium">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Primary Button - Más prominente */}
                <div className="text-center mb-8">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-block"
                  >
                    <Link
                      href="/contacto"
                      onClick={() => trackCTAClick('contacto_final', 'cta_section', '/contacto')}
                      className="group inline-flex flex-col items-center gap-2 px-12 py-6 bg-forja-fire hover:bg-forja-fire/90 text-white font-bold text-lg md:text-xl rounded-2xl transition-all shadow-2xl shadow-forja-fire/40 hover:shadow-forja-fire/60 relative overflow-hidden border-2 border-white/20"
                    >
                      {/* Shine effect */}
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                      
                      <span className="flex items-center gap-3 relative">
                        <BarChart3 className="w-6 h-6" />
                        <span>Rayos-X Empresarial Gratis</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <span className="text-sm font-medium text-white/90 relative">
                        {siteMetrics.guarantees.noCommitment} · Entrega en {siteMetrics.rayosX.deliveryTime} horas
                      </span>
                    </Link>
                  </motion.div>
                </div>

                {/* Trust Badges - Mejorados con colores */}
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                  {trustBadges.map((badge, index) => {
                    const Icon = badge.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
                      >
                        <Icon className={`w-5 h-5 ${badge.color}`} />
                        <span className="text-sm font-medium text-white">{badge.text}</span>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Separator */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-slate-300" />
          <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">O también puedes</span>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-slate-300" />
        </div>

        {/* Alternative CTAs Grid - Rediseñadas */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {alternativeCTAs.map((cta, index) => {
              const Icon = cta.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  <div className="h-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-slate-300 flex flex-col relative overflow-hidden">
                    {/* Top accent gradient */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cta.accentColor}`} />
                    
                    {/* Icon - Más grande y con gradiente */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cta.accentColor} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-forja-navy mb-2 group-hover:text-forja-teal transition-colors">
                      {cta.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm mb-5 leading-relaxed flex-grow">
                      {cta.description}
                    </p>

                    {/* Button - Mejorado */}
                    <Link
                      href={cta.buttonLink}
                      onClick={() => {
                        const ctaName = cta.buttonLink.includes('contacto') 
                          ? 'contacto' 
                          : cta.buttonLink.includes('casos-exito') 
                          ? 'casos_exito' 
                          : 'recursos'
                        trackCTAClick(ctaName, 'alternative_cta', cta.buttonLink)
                      }}
                      className={`inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl border-2 border-slate-200 text-forja-navy font-semibold text-sm transition-all duration-300 ${cta.hoverBg} hover:text-white hover:border-transparent group/btn`}
                    >
                      <span>{cta.buttonText}</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

