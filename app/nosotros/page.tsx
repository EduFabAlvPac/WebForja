'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Target, Rocket, Zap, Heart, Users, TrendingUp, Clock,
  Award, Shield, Lightbulb, CheckCircle2, XCircle,
  Flame, Star, ArrowRight, MessageSquareQuote
} from 'lucide-react'
import { MisionVisionValores } from '@/components/nosotros/MisionVisionValores'
import { DiferenciadoresSection } from '@/components/nosotros/DiferenciadoresSection'
import { OurCommitment } from '@/components/nosotros/OurCommitment'

export default function NosotrosPage() {
  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]">
      {/* Hero Section - Impactante */}
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-purple to-brand-navy py-12 md:py-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <motion.div
            className="w-full h-full"
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 15, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
              alt="Equipo de FORJA Digital - Forjadores del crecimiento PYME"
              fill
              className="object-cover"
              quality={90}
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/50 via-brand-purple/40 to-brand-navy/50" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange/20 border border-brand-orange rounded-full mb-6"
            >
              <Flame className="w-5 h-5 text-brand-orange" />
              <span className="text-brand-orange font-bold text-sm uppercase tracking-wider">
                Los Forjadores del Crecimiento PYME
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              Somos la Revolución Silenciosa <br className="hidden md:block" />
              de las <span className="text-brand-orange">PYMEs</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              No vendemos horas. <strong className="text-brand-orange">Forjamos futuros.</strong><br />
              No adaptamos, nos adaptamos. No prometemos. <strong className="text-brand-orange">Garantizamos.</strong>
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Habla con un Forjador
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#propuesta-valor"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm border border-white/30 transition-all duration-300"
              >
                Descubre Nuestra Propuesta
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Propuesta de Valor Única */}
      <section id="propuesta-valor" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-50 text-brand-orange font-bold text-sm uppercase tracking-wider rounded-full border border-orange-200 mb-6"
            >
              💎 NUESTRA PROPUESTA DE VALOR ÚNICA
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4"
            >
              Del Caos a la <span className="text-brand-orange">Escalabilidad</span>
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-orange mb-6"
            >
              En 6 Meses
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4 text-lg text-gray-600 max-w-4xl mx-auto"
            >
              <p>
                Dejamos de lado los <strong className="text-brand-navy">diagnósticos teóricos</strong> para enfocarnos en la <strong className="text-brand-orange">acción</strong>.
              </p>
              <p>
                Nuestro <strong className="text-brand-orange">Framework FORJA®</strong> es la metodología de Arquitectura Empresarial creada exclusivamente para la realidad PYME.
              </p>
              <p>
                En lugar de entregarte un PDF, <strong className="text-brand-orange">implementamos contigo</strong>, garantizando un <strong className="text-brand-navy">ROI medible</strong>.
              </p>
            </motion.div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                value: '6 Meses', 
                label: 'Resultados Visibles',
                icon: Clock,
                iconBg: 'bg-blue-100',
                iconColor: 'text-blue-600'
              },
              { 
                value: 'ROI', 
                label: 'Medible Garantizado',
                icon: TrendingUp,
                iconBg: 'bg-orange-100',
                iconColor: 'text-orange-600'
              },
              { 
                value: '100%', 
                label: 'Implementación',
                icon: CheckCircle2,
                iconBg: 'bg-green-100',
                iconColor: 'text-green-600'
              }
            ].map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.iconBg} rounded-full mb-6`}>
                    <IconComponent className={`w-8 h-8 ${stat.iconColor}`} strokeWidth={2} />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-brand-orange mb-3">
                    {stat.value}
                  </div>
                  <div className="text-base text-brand-navy font-semibold">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Misión, Visión y Valores */}
      <MisionVisionValores />

      {/* Navegación a las 3 secciones principales */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
              Conoce Más Sobre <span className="text-brand-orange">Nosotros</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explora nuestra historia, equipo y casos de éxito
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Historia */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href="/nosotros/historia" className="block">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-brand-orange/20 transition-all duration-300 h-full">
                  <div className="flex items-center justify-center w-20 h-20 bg-cyan-100 rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-10 h-10 text-cyan-500" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-3 text-center group-hover:text-brand-orange transition-colors">
                    Historia
                  </h3>
                  <p className="text-gray-600 text-center mb-6">
                    Descubre cómo hemos forjado el futuro digital de las empresas desde 2015
                  </p>
                  <div className="flex items-center justify-center gap-2 text-brand-orange font-semibold group-hover:gap-3 transition-all">
                    <span>Conocer más</span>
                    <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Equipo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <Link href="/nosotros/equipo" className="block">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-brand-orange/20 transition-all duration-300 h-full">
                  <div className="flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-10 h-10 text-purple-500" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-3 text-center group-hover:text-brand-orange transition-colors">
                    Equipo Profesional
                  </h3>
                  <p className="text-gray-600 text-center mb-6">
                    Conoce a los 6 expertos que transformarán tu empresa
                  </p>
                  <div className="flex items-center justify-center gap-2 text-brand-orange font-semibold group-hover:gap-3 transition-all">
                    <span>Conocer más</span>
                    <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Testimonios */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <Link href="/nosotros/testimonios" className="block">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-brand-orange/20 transition-all duration-300 h-full">
                  <div className="flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <MessageSquareQuote className="w-10 h-10 text-red-500" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-3 text-center group-hover:text-brand-orange transition-colors">
                    Testimonios
                  </h3>
                  <p className="text-gray-600 text-center mb-6">
                    Lee los casos de éxito de nuestros clientes satisfechos
                  </p>
                  <div className="flex items-center justify-center gap-2 text-brand-orange font-semibold group-hover:gap-3 transition-all">
                    <span>Conocer más</span>
                    <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principios y Valores FORJAR */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
              Principios que nos <span className="text-brand-orange">FORJAN</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cada letra representa nuestro compromiso contigo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                letter: 'F',
                icon: Target,
                iconBg: 'bg-blue-100',
                iconColor: 'text-blue-600',
                title: 'FOCO EN RESULTADOS',
                subtitle: '"El ROI no es una promesa, es una garantía"',
                items: ['Medimos todo, garantizamos impacto', 'Pragmatismo sobre perfección']
              },
              {
                letter: 'O',
                icon: Heart,
                iconBg: 'bg-red-100',
                iconColor: 'text-red-600',
                title: 'OBSESIÓN POR EL CLIENTE',
                subtitle: '"Tu éxito es nuestro único KPI"',
                items: ['No consultores rotativos', 'Co-creación, no imposición']
              },
              {
                letter: 'R',
                icon: Zap,
                iconBg: 'bg-orange-100',
                iconColor: 'text-orange-600',
                title: 'RAPIDEZ Y AGILIDAD',
                subtitle: '"Mejor hecho que perfecto"',
                items: ['2 semanas para diagnóstico, no 2 meses', 'Iteración constante']
              },
              {
                letter: 'J',
                icon: Shield,
                iconBg: 'bg-green-100',
                iconColor: 'text-green-600',
                title: 'JUSTICIA Y TRANSPARENCIA',
                subtitle: '"Sin letra pequeña, sin sorpresas"',
                items: ['Precios claros y modulares', 'Comunicación directa y honesta']
              },
              {
                letter: 'A',
                icon: Lightbulb,
                iconBg: 'bg-purple-100',
                iconColor: 'text-purple-600',
                title: 'APRENDIZAJE CONTINUO',
                subtitle: '"Cada PYME nos hace mejores"',
                items: ['Metodología viva que evoluciona', 'Comunidad de conocimiento compartido']
              },
              {
                letter: 'R',
                icon: Users,
                iconBg: 'bg-cyan-100',
                iconColor: 'text-cyan-600',
                title: 'RESPONSABILIDAD SOCIAL',
                subtitle: '"Forjamos el futuro de Colombia"',
                items: ['Democratizamos el acceso a asesorías de calidad', 'Generamos empleo y competitividad']
              }
            ].map((principio, index) => {
              const IconComponent = principio.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  {/* Badge con letra */}
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {principio.letter}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${principio.iconBg} mb-4`}>
                    <IconComponent className={`w-7 h-7 ${principio.iconColor}`} strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-brand-navy mb-2">
                    {principio.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-sm text-brand-orange font-semibold mb-4 italic">
                    {principio.subtitle}
                  </p>

                  {/* Items */}
                  <ul className="space-y-2">
                    {principio.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ¿Quiénes Somos? - NO SOMOS vs SÍ SOMOS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
              🏆 ¿Quiénes <span className="text-brand-orange">Somos?</span>
            </h2>
            <p className="text-2xl font-bold text-brand-orange mb-2">
              Los Forjadores del Crecimiento PYME
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* NO SOMOS */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-red-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-10 h-10 text-red-500" strokeWidth={2} />
                <h3 className="text-2xl font-bold text-red-600">
                  NO SOMOS
                </h3>
              </div>

              <ul className="space-y-4">
                {[
                  'Consultores tradicionales que venden horas',
                  'Teóricos que dejan PDFs sin ejecutar',
                  'Generalistas sin una metodología propia'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* SÍ SOMOS */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-500" strokeWidth={2} />
                <h3 className="text-2xl font-bold text-green-600">
                  SÍ SOMOS
                </h3>
              </div>

              <ul className="space-y-4">
                {[
                  'Arquitectos que viven la realidad PYME',
                  'Partners de Transformación con resultados tangibles',
                  'Forjadores del Crecimiento con una metodología propia'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diferenciadores */}
      <DiferenciadoresSection />

      {/* Manifiesto FORJA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-navy via-brand-purple to-brand-navy text-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/30 rounded-full mb-8">
              <Star className="w-5 h-5 text-brand-orange" />
              <span className="text-white font-bold text-sm uppercase tracking-wider">
                Manifiesto ForjaDigitalAE
              </span>
            </div>

            <div className="space-y-6 text-lg md:text-xl leading-relaxed mb-8">
              <p>
                Creemos que <strong className="text-brand-orange">cada PYME tiene el potencial de convertirse en un gigante</strong>.
              </p>
              <p>
                No necesitan consultores que cobren $200M.<br />
                No necesitan metodologías diseñadas para multinacionales.<br />
                No necesitan esperar 24 meses para ver resultados.
              </p>
              <p>
                Necesitan una <strong className="text-brand-orange">arquitectura democrática</strong>.<br />
                Necesitan una <strong className="text-brand-orange">metodología diseñada para su realidad</strong>.<br />
                Necesitan <strong className="text-brand-orange">resultados medibles desde el primer mes</strong>.
              </p>
              <p className="text-2xl font-bold text-brand-orange">
                Por eso creamos FORJA.
              </p>
              <p className="text-xl">
                No vendemos horas. <strong>Forjamos futuros.</strong><br />
                No adaptamos, <strong>nos adaptamos.</strong><br />
                No prometemos. <strong>Garantizamos.</strong>
              </p>
              <p className="text-2xl font-bold">
                Somos la revolución silenciosa de las PYMEs.
              </p>
            </div>

            <div className="text-3xl font-bold text-brand-orange italic">
              &quot;Una empresa a la vez. Un resultado a la vez. Un gigante a la vez.&quot;
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compromiso y CTA */}
      <OurCommitment />
    </div>
  )
}
