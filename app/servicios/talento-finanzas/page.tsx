'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  Scale, 
  Target, 
  Rocket,
  CheckCircle,
  ArrowRight,
  AlertCircle,
  Search,
  Calendar,
  Download
} from 'lucide-react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { talentoFinanzasCategoryData } from '@/data/services/talento-finanzas-category'

const iconMap: Record<string, any> = {
  Users,
  DollarSign,
  TrendingUp,
  Scale,
  Target,
  Rocket,
  Search,
  Calendar
}

export default function TalentoFinanzasPage() {
  const data = talentoFinanzasCategoryData

  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]">
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Image con Ken Burns effect */}
        <div className="absolute inset-0">
          <motion.div
            className="w-full h-full"
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 15, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca8849d1?q=80&w=2070&auto=format&fit=crop"
              alt="Equipo colaborando en estrategia de talento y finanzas"
              fill
              className="object-cover"
              quality={90}
              priority
            />
          </motion.div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-purple/80 to-transparent" />
        
        {/* Content */}
        <div className="container-custom relative z-10">
          <ScrollReveal>
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm mb-6 text-white/80">
              {data.hero.breadcrumbs.map((crumb, index) => (
                <div key={crumb.href} className="flex items-center gap-2">
                  {index > 0 && <span>›</span>}
                  <Link 
                    href={crumb.href}
                    className="hover:text-white transition-colors"
                  >
                    {crumb.label}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Eyebrow */}
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 text-white">
              {data.hero.eyebrow}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              {data.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl font-semibold mb-4 text-brand-turquoise">
              {data.hero.subtitle}
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-12">
              {data.hero.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
              {data.hero.stats.map((stat) => {
                const Icon = iconMap[stat.icon]
                return (
                  <motion.div
                    key={stat.label}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      {Icon && <Icon className="h-8 w-8 text-brand-turquoise" />}
                      <span className="text-4xl font-bold text-white">{stat.value}</span>
                    </div>
                    <p className="text-sm text-white/80">{stat.label}</p>
                  </motion.div>
                )
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Integration Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-navy">
                {data.whyIntegration.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {data.whyIntegration.subtitle}
              </p>
            </div>
          </ScrollReveal>

          {/* Problems */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {data.whyIntegration.problems.map((problem, index) => (
              <ScrollReveal key={problem.id} delay={index * 0.1}>
                <div className="bg-white border-l-4 border-red-500 rounded-lg p-6 shadow-card hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{problem.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-brand-navy">{problem.title}</h3>
                  
                  <div className="mb-4">
                    <div className="flex items-start gap-2 mb-2">
                      <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-red-700">SÍNTOMA:</p>
                        <p className="text-sm text-gray-700">{problem.symptom}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 rounded-lg p-3">
                    <p className="text-sm font-semibold text-red-800 mb-1">CONSECUENCIA:</p>
                    <p className="text-sm text-gray-700">{problem.consequence}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Solution */}
          <ScrollReveal>
            <div className="bg-gradient-to-br from-brand-turquoise/10 to-brand-purple/10 rounded-2xl p-8 md:p-12 border-l-4 border-brand-turquoise">
              <h3 className="text-2xl font-bold mb-4 text-brand-navy">
                {data.whyIntegration.solution.title}
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                {data.whyIntegration.solution.description}
              </p>
              <ul className="space-y-3">
                {data.whyIntegration.solution.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-navy">
                Nuestros 2 Servicios Integrados
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dos servicios complementarios que trabajan como un solo sistema
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {data.services.map((service, index) => {
              const Icon = iconMap[service.iconComponent || '']
              const borderColor = service.borderColor === 'turquoise' ? 'border-brand-turquoise' : 'border-green-500'
              
              return (
                <ScrollReveal key={service.id} delay={index * 0.2}>
                  <motion.div
                    className={`bg-white rounded-2xl p-8 shadow-card border-l-4 ${borderColor} h-full flex flex-col`}
                    whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      {Icon && (
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.borderColor === 'turquoise' ? 'from-brand-turquoise/20 to-brand-purple/20' : 'from-green-100 to-emerald-100'} flex items-center justify-center`}>
                          <Icon className={`h-8 w-8 ${service.borderColor === 'turquoise' ? 'text-brand-turquoise' : 'text-green-600'}`} />
                        </div>
                      )}
                      <h3 className="text-2xl font-bold text-brand-navy">{service.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-6">{service.description}</p>

                    {/* For Who */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-brand-navy mb-3">PARA QUIÉN:</h4>
                      <ul className="space-y-2">
                        {service.forWho.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-brand-turquoise flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Includes */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-brand-navy mb-3">QUÉ INCLUYE:</h4>
                      <ul className="space-y-2">
                        {service.includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Results */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-brand-navy mb-3">RESULTADOS TÍPICOS:</h4>
                      <ul className="space-y-2">
                        {service.results.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                            <TrendingUp className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Case Highlight */}
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <p className="text-xs font-semibold text-brand-navy mb-2">CASO DESTACADO:</p>
                      <p className="text-sm font-medium text-gray-800 mb-1">{service.caseHighlight.company}</p>
                      <p className="text-sm text-gray-700">{service.caseHighlight.result}</p>
                    </div>

                    {/* CTA */}
                    <div className="mt-auto space-y-3">
                      <Link
                        href={service.link}
                        className="block w-full text-center px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg transition-colors"
                      >
                        Conocer Servicio Completo
                      </Link>
                      <Link
                        href={service.caseLink}
                        className="block w-full text-center text-brand-navy hover:text-brand-orange transition-colors text-sm font-medium"
                      >
                        Ver Caso de Éxito →
                      </Link>
                    </div>
                  </motion.div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-brand-navy to-brand-purple">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                ¿No sabes por dónde empezar?
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Nuestro <strong>Diagnóstico Gratuito</strong> es el primer paso. Evaluamos tu situación actual y te entregamos un roadmap claro con los pasos a seguir.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-col md:flex-row gap-6 justify-center max-w-4xl mx-auto">
            <ScrollReveal delay={0.1}>
              <Link
                href={data.cta.primary.buttonLink}
                className="flex-1 bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 rounded-xl font-bold text-center transition-all shadow-lg hover:shadow-xl"
              >
                {data.cta.primary.buttonText}
              </Link>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <Link
                href={data.cta.secondary.buttonLink}
                className="flex-1 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-center transition-all"
              >
                {data.cta.secondary.buttonText}
              </Link>
            </ScrollReveal>
          </div>

          {/* Service Links */}
          <ScrollReveal delay={0.3}>
            <div className="mt-12 text-center">
              <p className="text-white/80 mb-4">{data.cta.serviceLinks.title}</p>
              <div className="flex flex-wrap justify-center gap-4">
                {data.cta.serviceLinks.services.map((service) => (
                  <Link
                    key={service.link}
                    href={service.link}
                    className="text-brand-turquoise hover:text-white transition-colors font-medium flex items-center gap-2"
                  >
                    {service.name}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  )
}

