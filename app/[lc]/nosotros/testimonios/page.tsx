/**
 * FORJA DIGITAL - Página Testimonios Localizada
 * 
 * Re-exporta la página de Testimonios con contexto de país.
 * 
 * @module app/[lc]/nosotros/testimonios/page
 */

'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import { SectionHeader } from '@/components/shared/SectionHeader'
import Link from 'next/link'
import { MessageSquareQuote, Star, ArrowRight, Factory, ShoppingBag, Briefcase, Sprout, Heart, TrendingUp, Calendar } from 'lucide-react'
import { useState } from 'react'
import { getTestimonialsStats, siteMetrics } from '@/lib/site-metrics'

export default function TestimoniosLocalePage() {
  const params = useParams()
  const lc = params.lc as string
  const [activeFilter, setActiveFilter] = useState('todos')

  const localizedLink = (path: string) => `/${lc}${path}`

  const industrias = [
    { id: 'todos', label: 'Todos', icon: TrendingUp },
    { id: 'retail', label: 'Retail', icon: ShoppingBag },
    { id: 'manufactura', label: 'Manufactura', icon: Factory },
    { id: 'agroindustria', label: 'Agroindustria', icon: Sprout },
    { id: 'servicios', label: 'Servicios', icon: Briefcase },
    { id: 'salud', label: 'Salud', icon: Heart }
  ]

  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]">
      {/* Hero Section */}
      <section className="py-10 md:py-14 bg-gradient-to-b from-pink-50 to-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <motion.div
            className="w-full h-full"
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 15, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop"
              alt="Testimonios de clientes satisfechos - Empresarios celebrando éxito con FORJA Digital"
              fill
              className="object-cover"
              quality={90}
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-pink-50/60 via-white/50 to-white/60" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Icono circular */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-24 h-24 bg-red-100 rounded-full mb-8"
            >
              <MessageSquareQuote className="w-12 h-12 text-red-500" strokeWidth={2} />
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-6 leading-tight">
              Casos de Éxito
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Descubre cómo hemos transformado empresas y generado resultados medibles en diferentes industrias
            </p>
          </motion.div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {getTestimonialsStats().map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-brand-navy font-semibold text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filtros por Industria */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-2">
              Filtra por Industria
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {industrias.map((industria) => {
              const IconComponent = industria.icon
              return (
                <button
                  key={industria.id}
                  onClick={() => setActiveFilter(industria.id)}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeFilter === industria.id
                      ? 'bg-brand-orange text-white shadow-lg scale-105'
                      : 'bg-white text-brand-navy hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  {industria.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonios con estrellas y resultados */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                company: 'TechRetail Solutions',
                industry: 'Retail',
                rating: 5,
                testimonial: '"Forja Digital transformó completamente nuestra operación. Su enfoque en transformación digital nos permitió aumentar nuestras ventas en un 45% en solo 8 meses. El equipo es excepcional y los resultados hablan por sí mismos."',
                results: ['+45% en ventas', '-30% costos operativos'],
                author: 'Roberto Sánchez',
                role: 'CEO',
                company_name: 'TechRetail Solutions',
                avatar: '/testimonials/roberto.jpg'
              },
              {
                company: 'Manufactura del Norte',
                industry: 'Manufactura',
                rating: 5,
                testimonial: '"La implementación de excelencia operacional que realizó Forja Digital superó todas nuestras expectativas. Redujimos desperdicios en un 35% y mejoramos la productividad significativamente. Un equipo verdaderamente profesional."',
                results: ['+40% productividad', '-35% desperdicios'],
                author: 'Carmen Delgado',
                role: 'Directora de Operaciones',
                company_name: 'Manufactura del Norte',
                avatar: '/testimonials/carmen.jpg'
              },
              {
                company: 'AgroTech Innovación',
                industry: 'Agroindustria',
                rating: 5,
                testimonial: '"Gracias a la estrategia de transformación digital de Forja Digital, modernizamos toda nuestra cadena de suministro. Ahora tenemos trazabilidad completa y hemos reducido pérdidas en un 40%. Excelente inversión."',
                results: ['-40% pérdidas', '+50% eficiencia logística'],
                author: 'Miguel Ángel Torres',
                role: 'Gerente General',
                company_name: 'AgroTech Innovación',
                avatar: '/testimonials/miguel.jpg'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-brand-orange/20 transition-all duration-300"
              >
                {/* Estrellas */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange-400 fill-orange-400" />
                  ))}
                </div>

                {/* Testimonial */}
                <p className="text-gray-700 leading-relaxed mb-6 italic text-sm">
                  {testimonial.testimonial}
                </p>

                {/* Resultados */}
                <div className="bg-cyan-50 rounded-lg p-4 mb-6">
                  <p className="text-sm font-semibold text-brand-navy mb-2">Resultados:</p>
                  <div className="space-y-1">
                    {testimonial.results.map((result, idx) => (
                      <p key={idx} className="text-sm text-gray-700">{result}</p>
                    ))}
                  </div>
                </div>

                {/* Autor */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-gray-600">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-brand-navy">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-brand-orange font-semibold">{testimonial.company_name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-navy to-brand-navy-dark">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              ¿Listo para Transformar tu <span className="text-brand-orange">Empresa?</span>
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Únete a las más de {siteMetrics.clients.totalCompanies} empresas que han confiado en nosotros para alcanzar sus objetivos
            </p>
            <Link
              href={localizedLink("/contacto")}
              className="inline-flex items-center gap-2 px-10 py-5 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
            >
              <Calendar className="w-5 h-5" />
              Agenda una Consulta Gratuita
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

