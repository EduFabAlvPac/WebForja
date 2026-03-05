'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { 
  Users, 
  DollarSign, 
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Target,
  Zap,
  Award,
  BarChart3,
  Scale,
  Rocket,
  Wallet,
  Crosshair,
  PieChart
} from 'lucide-react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { talentoFinanzasCategoryData } from '@/data/services/talento-finanzas-category'

const iconMap: Record<string, any> = {
  TrendingUp,
  Users,
  DollarSign,
  Target,
  Scale,
  Rocket,
  BarChart3
}

export default function TalentoFinanzasPage() {
  const data = talentoFinanzasCategoryData

  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]">
      
      {/* Hero Section - Estilo Estrategia & Transformación */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-r from-brand-navy via-brand-purple to-brand-navy">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        {/* Content */}
        <div className="container-custom relative z-10">
          <ScrollReveal>
            {/* Eyebrow Badge */}
            <div className="inline-block px-4 py-2 bg-brand-orange rounded-full text-sm font-medium mb-6 text-white uppercase tracking-wide">
              Categoría de Servicios
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white max-w-4xl">
              Talento & <span className="text-brand-orange">Finanzas</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl leading-relaxed">
              La ecuación del crecimiento sostenible
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-white/80 max-w-3xl leading-relaxed">
              Integramos la gestión estratégica del talento con ingeniería financiera para construir empresas rentables, escalables y con equipos de alto rendimiento.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Integration - Diseño impactante */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeader
              eyebrow="INTEGRACIÓN ESTRATÉGICA"
              title="¿Por qué Talento y Finanzas deben gestionarse juntos?"
              highlight="juntos"
              description="La desconexión entre estas dos áreas es la causa #1 de estancamiento en PYMEs"
            />
          </ScrollReveal>

          {/* Problems Cards con diseño mejorado */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {data.whyIntegration.problems.map((problem, index) => {
              // Mapeo de iconos modernos únicos
              const ProblemIcon = index === 0 ? Wallet : index === 1 ? Crosshair : PieChart
              
              return (
                <ScrollReveal key={problem.id} delay={index * 0.1}>
                  <motion.div 
                    className="relative bg-white rounded-2xl p-6 shadow-card hover:shadow-lg transition-all border-t-4 border-brand-orange group h-full flex flex-col"
                    whileHover={{ y: -4 }}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-50 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative flex-1 flex flex-col">
                      {/* Icono moderno de Lucide */}
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-orange to-red-500 flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform">
                        <ProblemIcon className="h-7 w-7 text-white" strokeWidth={2} />
                      </div>
                      
                      <h3 className="text-lg font-bold text-brand-navy mb-3 leading-tight">
                        {problem.title}
                      </h3>
                      
                      <div className="mb-3 bg-orange-50/50 rounded-lg p-3 flex-1">
                        <p className="text-xs font-bold text-brand-orange uppercase mb-1">Síntoma</p>
                        <p className="text-sm text-gray-700 leading-relaxed">{problem.symptom}</p>
                      </div>

                      <div className="bg-gradient-to-br from-brand-orange to-red-500 rounded-lg p-3 text-white">
                        <p className="text-xs font-bold uppercase mb-1">Consecuencia</p>
                        <p className="text-sm leading-relaxed">{problem.consequence}</p>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              )
            })}
          </div>

          {/* Solution Box - Efecto WOW */}
          <ScrollReveal>
            <motion.div 
              className="relative bg-gradient-to-br from-brand-turquoise/10 via-brand-purple/5 to-white rounded-3xl p-10 md:p-12 border-2 border-brand-turquoise/30 shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-brand-turquoise/10 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-brand-purple/10 to-transparent rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-turquoise to-brand-purple flex items-center justify-center shadow-xl">
                    <Zap className="h-8 w-8 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-brand-navy mb-2">
                      {data.whyIntegration.solution.title}
                    </h3>
                    <p className="text-lg text-gray-700">
                      {data.whyIntegration.solution.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {data.whyIntegration.solution.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-brand-turquoise/20 hover:border-brand-turquoise/50 hover:shadow-md transition-all"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4 text-white" strokeWidth={2} />
                      </div>
                      <span className="text-sm text-gray-700 leading-relaxed font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section - Estilo Estrategia & Transformación mejorado */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
            {data.services.map((service, index) => {
              const Icon = service.iconComponent === 'Users' ? Users : DollarSign
              const bgColor = service.borderColor === 'turquoise' ? 'bg-brand-turquoise' : 'bg-orange-500'
              const checkColor = service.borderColor === 'turquoise' ? 'text-brand-turquoise' : 'text-orange-500'
              
              return (
                <ScrollReveal key={service.id} delay={index * 0.2}>
                  <motion.div
                    className="bg-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all h-full flex flex-col border border-gray-100"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Header con icono grande */}
                    <div className="flex items-start gap-5 mb-6">
                      <div className={`w-20 h-20 rounded-2xl ${bgColor} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <Icon className="h-10 w-10 text-white" strokeWidth={2} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-brand-navy leading-tight">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-8 leading-relaxed text-base">
                      {service.description}
                    </p>

                    {/* Includes List */}
                    <ul className="space-y-4 mb-8 flex-grow">
                      {service.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className={`h-6 w-6 ${checkColor} flex-shrink-0 mt-0.5`} strokeWidth={2} />
                          <span className="text-gray-700 text-base leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link
                      href={service.link}
                      className={`group flex items-center justify-center gap-3 w-full px-8 py-5 ${bgColor} hover:opacity-90 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl text-lg`}
                    >
                      Conocer Más
                      <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" strokeWidth={2} />
                    </Link>
                  </motion.div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Integration Points - Diseño impactante */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeader
              eyebrow="SINERGIA TOTAL"
              title="El Poder de la Integración"
              highlight="Integración"
              description="Cuando Talento y Finanzas trabajan como un solo sistema"
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {data.integration.points.map((point, index) => {
              const Icon = iconMap[point.iconComponent || '']
              return (
                <ScrollReveal key={point.id} delay={index * 0.1}>
                  <motion.div 
                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
                    whileHover={{ y: -4 }}
                  >
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-turquoise to-brand-purple flex items-center justify-center mb-4 shadow-md">
                      {Icon && <Icon className="h-7 w-7 text-white" strokeWidth={2} />}
                    </div>
                    <h3 className="text-lg font-bold text-brand-navy mb-3 leading-tight">{point.title}</h3>
                    <p className="text-sm text-gray-700 mb-3 leading-relaxed">{point.description}</p>
                    <p className="text-xs font-semibold text-brand-turquoise leading-relaxed">{point.benefit}</p>
                  </motion.div>
                </ScrollReveal>
              )
            })}
          </div>

          {data.integration.benefitHighlight && (
            <ScrollReveal>
              <div className="bg-gradient-to-r from-brand-navy to-brand-purple rounded-3xl p-10 text-center text-white shadow-2xl">
                <p className="text-6xl font-bold mb-4">{data.integration.benefitHighlight.stat}</p>
                <p className="text-xl max-w-3xl mx-auto leading-relaxed">{data.integration.benefitHighlight.description}</p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* CTA Section - Estilo Estrategia & Transformación */}
      <section className="section-padding bg-gradient-to-br from-brand-navy via-brand-purple to-brand-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-turquoise/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                ¿No sabes por dónde empezar?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Nuestro <strong className="text-brand-turquoise">Diagnóstico Gratuito</strong> es el primer paso. Evaluamos tu madurez digital y te entregamos un roadmap claro con los pasos a seguir.
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl"
              >
                Solicitar Diagnóstico Gratuito
                <ArrowRight className="h-5 w-5" strokeWidth={2} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  )
}

