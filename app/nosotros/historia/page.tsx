'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Clock, Target, Rocket, Heart, Lightbulb, Users, CheckCircle2, ArrowRight,
  Shield, Zap, XCircle, TrendingUp
} from 'lucide-react'

export default function HistoriaPage() {
  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-purple to-brand-navy py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
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
              className="inline-flex items-center justify-center w-20 h-20 bg-cyan-500/20 border-2 border-cyan-400 rounded-full mb-6"
            >
              <Clock className="w-10 h-10 text-cyan-400" strokeWidth={2} />
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Nuestra <span className="text-brand-orange">Historia</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Forjando el futuro digital de las empresas desde nuestros inicios, con pasión, innovación y compromiso con la excelencia
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
            {/* 2015 - El Comienzo */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {/* Imagen */}
              <div className="order-2 lg:order-1">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <div className="aspect-[4/3] bg-gradient-to-br from-cyan-100 to-cyan-50">
                    {/* Placeholder - Reemplazar con imagen real */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Lightbulb className="w-32 h-32 text-cyan-300" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Contenido */}
              <div className="order-1 lg:order-2">
                <div className="inline-block px-6 py-2 bg-cyan-500 text-white font-bold text-sm rounded-full mb-4">
                  2015 - El Comienzo
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                  Nace una Visión
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Forja Digital - AE nació de la visión de un grupo de consultores apasionados por la transformación empresarial. Identificamos una necesidad crítica en el mercado: empresas con gran potencial que necesitaban orientación estratégica para navegar la era digital.
                  </p>
                  <p className="font-semibold text-brand-orange">
                    Comenzamos con un equipo de 5 personas y un compromiso inquebrantable: ofrecer consultoría de clase mundial con un enfoque personalizado y resultados medibles.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 2017-2019 - Expansión */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {/* Contenido */}
              <div className="order-1">
                <div className="inline-block px-6 py-2 bg-brand-orange text-white font-bold text-sm rounded-full mb-4">
                  2017-2019 - Expansión
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                  Crecimiento Sostenido
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Nuestro enfoque centrado en resultados nos permitió crecer rápidamente. <strong className="text-brand-orange">Expandimos nuestro equipo a más de 50 consultores</strong> especializados en diferentes industrias y áreas de expertise.
                  </p>
                  <p>
                    Implementamos proyectos de transformación digital en sectores clave como <strong>retail, manufactura, agroindustria y servicios profesionales</strong>, generando impactos medibles en la rentabilidad y eficiencia de nuestros clientes.
                  </p>
                </div>
              </div>

              {/* Imagen */}
              <div className="order-2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-orange-50">
                    {/* Placeholder - Reemplazar con imagen real */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Users className="w-32 h-32 text-orange-300" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </motion.div>

            {/* 2020-2024 - Innovación */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {/* Imagen */}
              <div className="order-2 lg:order-1">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-purple-50">
                    {/* Placeholder - Reemplazar con imagen real */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Rocket className="w-32 h-32 text-purple-300" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Contenido */}
              <div className="order-1 lg:order-2">
                <div className="inline-block px-6 py-2 bg-brand-purple text-white font-bold text-sm rounded-full mb-4">
                  2020-2024 - Innovación
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                  Líderes en Transformación
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    La pandemia aceleró la necesidad de transformación digital. Nos adaptamos rápidamente, desarrollando <strong className="text-brand-orange">metodologías innovadoras</strong> para consultoría remota y soluciones digitales avanzadas.
                  </p>
                  <p className="font-semibold text-brand-orange">
                    Hoy somos reconocidos como líderes en consultoría estratégica y transformación digital, con más de 200 proyectos exitosos y un equipo de 80+ profesionales especializados en IA, Business Intelligence, y excelencia operacional.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Propuesta de Valor Única */}
      <section className="py-16 md:py-24 bg-gray-50">
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

      {/* Misión y Visión */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
              Misión y <span className="text-brand-orange">Visión</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los pilares que guían cada decisión y acción en Forja Digital
            </p>
          </div>

          {/* Cards de Misión y Visión */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Misión */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-full mb-6 mx-auto">
                <Target className="w-8 h-8 text-cyan-600" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4 text-center">
                Misión
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Transformar empresas a través de consultoría estratégica de excelencia, combinando metodologías probadas con innovación tecnológica para generar resultados sostenibles y medibles que impulsen el crecimiento y la competitividad de nuestros clientes.
              </p>
            </motion.div>

            {/* Visión */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6 mx-auto">
                <Rocket className="w-8 h-8 text-orange-600" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4 text-center">
                Visión
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Ser la firma de consultoría líder en América Latina, reconocida por nuestra capacidad de transformar organizaciones y crear valor sostenible a través de la innovación, el talento excepcional y un compromiso inquebrantable con la excelencia y los resultados de nuestros clientes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principios y Valores FORJAR */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
              Principios y Valores <span className="text-brand-orange">FORJAR</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cada letra representa nuestro compromiso inquebrantable contigo
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

      {/* ¿Quiénes Somos? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
              ¿Quiénes <span className="text-brand-orange">Somos?</span>
            </h2>
            <p className="text-2xl font-bold text-brand-orange mb-2">
              Somos los Forjadores del Crecimiento PYME
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestra identidad se define por lo que hacemos, no por lo que decimos
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

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-navy to-brand-purple">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              ¿Quieres Conocer Más Sobre <span className="text-brand-orange">Nosotros?</span>
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Descubre nuestro equipo de expertos y los casos de éxito de nuestros clientes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/nosotros/equipo"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Conoce Nuestro Equipo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/nosotros/testimonios"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-brand-navy font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Ver Casos de Éxito
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

