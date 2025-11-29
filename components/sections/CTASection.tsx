'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, Phone, Target, BookOpen, Lock, Zap, Gift, BarChart3 } from 'lucide-react'
import { trackCTAClick } from '@/lib/analytics'
import { getCTAClaim, siteMetrics } from '@/lib/site-metrics'
import { Button } from '@/components/ui/button'

interface AlternativeCTA {
  icon: React.ElementType
  title: string
  description: string
  buttonText: string
  buttonLink: string
  iconColor: string
  iconBg: string
}

const alternativeCTAs: AlternativeCTA[] = [
  {
    icon: Phone,
    title: '¿Prefieres Hablar Primero?',
    description: 'Agenda una llamada de 30 minutos con uno de nuestros Forjadores.',
    buttonText: 'Habla con un Forjador',
    buttonLink: '/contacto',
    iconColor: 'text-forja-teal',
    iconBg: 'bg-forja-teal/10',
  },
  {
    icon: Target,
    title: 'Explora Casos de Éxito',
    description: 'Lee cómo empresas similares a la tuya han transformado su competitividad con FORJA.',
    buttonText: 'Ver Casos Documentados',
    buttonLink: '/casos-exito',
    iconColor: 'text-forja-purple',
    iconBg: 'bg-forja-purple/10',
  },
  {
    icon: BookOpen,
    title: 'Descarga Recursos Gratuitos',
    description: 'Accede a guías, frameworks y herramientas de arquitectura empresarial sin costo.',
    buttonText: 'Acceder a Recursos',
    buttonLink: '/recursos',
    iconColor: 'text-forja-fire',
    iconBg: 'bg-forja-fire/10',
  },
]

const trustBadges = [
  { icon: Lock, text: siteMetrics.guarantees.confidentiality },
  { icon: Zap, text: `Respuesta en ${siteMetrics.rayosX.deliveryTime}h` },
  { icon: Gift, text: siteMetrics.guarantees.noCommitment },
]

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-turquoise/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Primary CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-brand-turquoise via-brand-navy to-brand-purple rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
            {/* Decorative elements inside */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              {/* Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center leading-tight">
                ¿Listo para Descubrir el Verdadero Potencial de tu Empresa?
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-white/90 mb-8 text-center max-w-3xl mx-auto leading-relaxed">
                {getCTAClaim()}
              </p>

              {/* Benefits List */}
              <div className="max-w-3xl mx-auto mb-10">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Tu nivel de madurez digital actual (score de 6 dimensiones)',
                    'Brechas críticas que frenan tu crecimiento',
                    'Oportunidades de mejora de alto impacto',
                    'Recomendaciones personalizadas para tu industria',
                  ].map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index, duration: 0.4 }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" strokeWidth={3} />
                        </div>
                      </div>
                      <span className="text-white/95 text-base leading-relaxed">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Primary Button */}
              <div className="text-center mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block"
                >
                  <Link
                    href="/contacto"
                    onClick={() => trackCTAClick('contacto_final', 'cta_section', '/contacto')}
                    className="group inline-flex flex-col items-center gap-2 px-10 py-5 bg-forja-fire hover:bg-forja-fire/90 text-white font-bold text-lg md:text-xl rounded-2xl transition-all shadow-2xl hover:shadow-forja-fire/50 relative overflow-hidden"
                  >
                    {/* Glow effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                    
                    <span className="flex items-center gap-3 relative">
                      <BarChart3 className="w-6 h-6" />
                      Rayos-X Empresarial Gratis
                    </span>
                    <span className="text-sm font-normal text-white/90 relative">
                      {siteMetrics.guarantees.noCommitment} · Entrega en {siteMetrics.rayosX.deliveryTime} horas
                    </span>
                  </Link>
                </motion.div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
                {trustBadges.map((badge, index) => {
                  const Icon = badge.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="flex items-center gap-2 text-white/80"
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{badge.text}</span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Alternative CTAs Grid */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
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
                  <div className="h-full bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-brand-turquoise flex flex-col">
                    {/* Icon */}
                    <div className={`w-16 h-16 ${cta.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${cta.iconColor}`} strokeWidth={2} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-turquoise transition-colors">
                      {cta.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                      {cta.description}
                    </p>

                    {/* Button */}
                    <Button
                      variant="secondary"
                      size="md"
                      asChild
                    >
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
                      >
                        {cta.buttonText}
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

