'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { 
  Settings,
  Target,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  TrendingDown,
  Users,
  CheckCircle,
  Rocket,
  Star,
  BarChart3,
  Search,
  Calendar
} from 'lucide-react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { comercialOperacionesCategoryData } from '@/data/services/comercial-operaciones-category'

const iconMap: Record<string, any> = {
  AlertTriangle,
  TrendingDown,
  Users,
  CheckCircle,
  Rocket,
  Star,
  BarChart3,
  Settings,
  Target
}

export default function ComercialOperacionesPage() {
  const data = comercialOperacionesCategoryData

  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]">
      
      {/* Hero Section con imagen de fondo */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Image con Ken Burns effect */}
        {data.hero.backgroundImage && (
          <div className="absolute inset-0">
            <motion.div
              className="w-full h-full"
              initial={{ scale: 1 }}
              animate={{ scale: 1.05 }}
              transition={{ duration: 15, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
            >
              <Image
                src={data.hero.backgroundImage}
                alt={data.hero.backgroundAlt || 'Background'}
                fill
                className="object-cover"
                quality={90}
                priority
              />
            </motion.div>
          </div>
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-purple/80 to-transparent" />
        
        {/* Content */}
        <div className="container-custom relative z-10">
          <ScrollReveal>
            {/* Eyebrow Badge */}
            <div className="inline-block px-4 py-2 bg-brand-orange rounded-full text-sm font-medium mb-6 text-white uppercase tracking-wide">
              {data.hero.eyebrow}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white max-w-4xl">
              Comercial & <span className="text-brand-orange">Operaciones</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl leading-relaxed">
              {data.hero.subtitle}
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-white/80 max-w-3xl leading-relaxed">
              {data.hero.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Integration */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeader
              eyebrow="INTEGRACIÓN ESTRATÉGICA"
              title={data.whyIntegration.title}
              highlight="integrados"
              description={data.whyIntegration.subtitle}
            />
          </ScrollReveal>

          {/* Problems Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {data.whyIntegration.problems.map((problem, index) => {
              const IconComponent = iconMap[problem.iconComponent || 'AlertTriangle']
              
              return (
                <ScrollReveal key={problem.id} delay={index * 0.1}>
                  <motion.div 
                    className="relative bg-white rounded-2xl p-6 shadow-card hover:shadow-lg transition-all border-t-4 border-brand-orange group h-full flex flex-col"
                    whileHover={{ y: -4 }}
                  >
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-orange/20 to-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="h-7 w-7 text-brand-orange" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-brand-navy mb-3">
                      {problem.title}
                    </h3>

                    {/* Symptom */}
                    <div className="mb-4 flex-grow">
                      <p className="text-sm font-semibold text-red-600 mb-2 uppercase tracking-wide">
                        Síntoma
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        {problem.symptom}
                      </p>
                    </div>

                    {/* Consequence */}
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                        Consecuencia
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        {problem.consequence}
                      </p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              )
            })}
          </div>

          {/* Solution Box */}
          <ScrollReveal>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-10 border-2 border-green-200 shadow-2xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-2">
                    {data.whyIntegration.solution.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {data.whyIntegration.solution.description}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                {data.whyIntegration.solution.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-gray-700 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeader
              eyebrow="NUESTROS SERVICIOS"
              title="Los 2 Servicios de Esta Categoría"
              highlight="Categoría"
              description="Optimización operativa + Sistema comercial = Crecimiento sostenible"
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {data.services.map((service, index) => {
              const IconComponent = iconMap[service.iconComponent || 'Target']
              const borderColorClass = service.borderColor === 'red' ? 'border-red-500' : 'border-purple-500'
              const bgColorClass = service.borderColor === 'red' ? 'from-red-500/20 to-orange-500/20' : 'from-purple-500/20 to-violet-500/20'
              const iconColorClass = service.borderColor === 'red' ? 'text-red-600' : 'text-purple-600'
              
              return (
                <ScrollReveal key={service.id} delay={index * 0.2}>
                  <motion.div
                    className={`bg-white rounded-3xl p-8 shadow-card hover:shadow-2xl transition-all border-l-4 ${borderColorClass} h-full flex flex-col`}
                    whileHover={{ y: -8 }}
                  >
                    {/* Icon & Title */}
                    <div className="mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${bgColorClass} flex items-center justify-center mb-4`}>
                        <IconComponent className={`h-8 w-8 ${iconColorClass}`} strokeWidth={2} />
                      </div>
                      <h3 className="text-2xl font-bold text-brand-navy mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Para Quién */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">
                        Para Quién Es
                      </h4>
                      <ul className="space-y-2">
                        {service.forWho.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="h-4 w-4 text-brand-turquoise flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Qué Incluye */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">
                        Qué Incluye
                      </h4>
                      <ul className="space-y-2">
                        {service.includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-turquoise flex-shrink-0 mt-2" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Resultados */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">
                        Resultados Típicos
                      </h4>
                      <ul className="space-y-2">
                        {service.results.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                            <Rocket className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Case Highlight */}
                    <div className="bg-gray-50 rounded-xl p-4 mb-6">
                      <p className="text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide">
                        Caso Destacado
                      </p>
                      <p className="text-sm font-semibold text-brand-navy mb-1">
                        {service.caseHighlight.company}
                      </p>
                      <p className="text-sm text-gray-700">
                        {service.caseHighlight.description}
                      </p>
                    </div>

                    {/* CTAs */}
                    <div className="mt-auto space-y-3">
                      <Link
                        href={service.link}
                        className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg"
                      >
                        Conocer Servicio Completo
                        <ArrowRight className="h-5 w-5" strokeWidth={2} />
                      </Link>
                      <Link
                        href={service.caseLink}
                        className="flex items-center justify-center gap-2 w-full px-6 py-3 border-2 border-gray-200 hover:border-brand-turquoise text-brand-navy font-semibold rounded-xl transition-all"
                      >
                        Ver Caso de Éxito
                      </Link>
                    </div>
                  </motion.div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Integration Points */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeader
              eyebrow="SINERGIA TOTAL"
              title={data.integration.title}
              highlight="Integración"
              description={data.integration.subtitle}
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            {data.integration.points.map((point, index) => {
              const IconComponent = iconMap[point.iconComponent || 'CheckCircle']
              
              return (
                <ScrollReveal key={point.id} delay={index * 0.1}>
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-brand-turquoise hover:shadow-lg transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-turquoise/20 to-brand-purple/20 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-brand-turquoise" strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-brand-navy mb-2">
                          {point.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>

          {/* Statistic */}
          {data.integration.statistic && (
            <ScrollReveal>
              <div className="bg-gradient-to-r from-brand-navy to-brand-purple rounded-3xl p-8 text-center shadow-2xl">
                <div className="text-5xl md:text-6xl font-bold text-brand-orange mb-3">
                  {data.integration.statistic.value}
                </div>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  {data.integration.statistic.label}
                </p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-to-br from-brand-navy via-brand-purple to-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                {data.cta.headline}
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                {data.cta.intro}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
            <ScrollReveal delay={0.1}>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange flex items-center justify-center">
                    <Search className="h-6 w-6 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {data.cta.primary.title}
                  </h3>
                </div>
                <p className="text-white/80 mb-6 leading-relaxed">
                  {data.cta.primary.description}
                </p>
                <Link
                  href={data.cta.primary.buttonLink}
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl"
                >
                  {data.cta.primary.buttonText}
                  <ArrowRight className="h-5 w-5" strokeWidth={2} />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-turquoise flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {data.cta.secondary.title}
                  </h3>
                </div>
                <p className="text-white/80 mb-6 leading-relaxed">
                  {data.cta.secondary.description}
                </p>
                <Link
                  href={data.cta.secondary.buttonLink}
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-xl transition-all border border-white/30"
                >
                  {data.cta.secondary.buttonText}
                  <ArrowRight className="h-5 w-5" strokeWidth={2} />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {data.cta.links && data.cta.links.length > 0 && (
            <ScrollReveal delay={0.3}>
              <div className="text-center">
                <p className="text-white/70 mb-4">O explora los servicios individuales:</p>
                <div className="flex flex-wrap justify-center gap-4">
                  {data.cta.links.map((link, i) => (
                    <Link
                      key={i}
                      href={link.href}
                      className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all border border-white/20 text-sm font-semibold"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>
    </div>
  )
}

