'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, ArrowRight, Factory, Briefcase, ShoppingCart } from 'lucide-react'

interface CaseStudyResult {
  text: string
  highlight?: string
}

interface CaseStudy {
  id: string
  industry: string
  industryIcon: React.ElementType
  industryColor: string
  industryBg: string
  companyName: string
  location: string
  challenge: string
  solution: string
  results: CaseStudyResult[]
  link: string
}

const caseStudies: CaseStudy[] = [
  {
    id: 'textilera-regional',
    industry: 'Manufactura',
    industryIcon: Factory,
    industryColor: 'text-blue-600',
    industryBg: 'bg-blue-50 border-blue-200',
    companyName: 'Textilera Regional',
    location: 'Medellín, Colombia · 85 empleados',
    challenge: 'Procesos manuales, inventarios desactualizados, pérdida de clientes por tiempos de entrega lentos.',
    solution: 'Arquitectura de procesos Lean + ERP integrado + automatización de producción',
    results: [
      { text: '45% reducción en tiempo de entrega', highlight: '45%' },
      { text: '30% aumento en capacidad productiva', highlight: '30%' },
      { text: '60% menos errores de inventario', highlight: '60%' },
      { text: 'ROI de 320% en primer año', highlight: '320%' },
    ],
    link: '/casos-exito/textilera-regional',
  },
  {
    id: 'firma-contable',
    industry: 'Servicios Profesionales',
    industryIcon: Briefcase,
    industryColor: 'text-purple-600',
    industryBg: 'bg-purple-50 border-purple-200',
    companyName: 'Firma Contable',
    location: 'Bogotá, Colombia · 35 empleados',
    challenge: 'Dependencia de socios fundadores, falta de escalabilidad, sistemas obsoletos, rotación de personal.',
    solution: 'Gobierno corporativo + automatización de procesos contables + gestión de talento por competencias',
    results: [
      { text: '50% más clientes sin aumentar headcount', highlight: '50%' },
      { text: '70% reducción en tareas administrativas', highlight: '70%' },
      { text: '85% retención de talento clave', highlight: '85%' },
      { text: 'EBITDA aumentó 40%', highlight: '40%' },
    ],
    link: '/casos-exito/firma-contable',
  },
  {
    id: 'cadena-retail',
    industry: 'Retail',
    industryIcon: ShoppingCart,
    industryColor: 'text-orange-600',
    industryBg: 'bg-orange-50 border-orange-200',
    companyName: 'Cadena de Tiendas Especializadas',
    location: 'Cali, Colombia · 120 empleados · 8 tiendas',
    challenge: 'Experiencia de cliente desarticulada entre canales físicos y digitales, datos fragmentados, ineficiencias operativas.',
    solution: 'Estrategia omnicanal + CRM unificado + integración eCommerce-POS + análisis predictivo',
    results: [
      { text: '120% crecimiento en ventas online', highlight: '120%' },
      { text: '35% aumento en ticket promedio', highlight: '35%' },
      { text: '90% visibilidad de inventario en tiempo real', highlight: '90%' },
      { text: 'NPS incrementó de 42 a 78', highlight: '42 a 78' },
    ],
    link: '/casos-exito/cadena-retail',
  },
]

const CaseStudyCard = ({ caseStudy, index }: { caseStudy: CaseStudy; index: number }) => {
  const Icon = caseStudy.industryIcon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group"
    >
      <div className="h-full bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-brand-turquoise flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          {/* Industry Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 ${caseStudy.industryBg} ${caseStudy.industryColor} text-sm font-semibold mb-4`}>
            <Icon className="w-4 h-4" />
            {caseStudy.industry}
          </div>

          {/* Company Name */}
          <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-turquoise transition-colors">
            {caseStudy.companyName}
          </h3>

          {/* Location */}
          <p className="text-sm text-gray-600">{caseStudy.location}</p>
        </div>

        {/* Challenge */}
        <div className="p-6 bg-gray-50 border-b border-gray-100">
          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
            Desafío
          </h4>
          <p className="text-sm text-gray-700 leading-relaxed">
            {caseStudy.challenge}
          </p>
        </div>

        {/* Solution */}
        <div className="p-6 bg-cyan-50/50 border-b border-gray-100">
          <h4 className="text-xs font-bold text-brand-turquoise uppercase tracking-wider mb-2">
            Solución FORJA
          </h4>
          <p className="text-sm text-gray-700 leading-relaxed">
            {caseStudy.solution}
          </p>
        </div>

        {/* Results */}
        <div className="p-6 flex-grow">
          <h4 className="text-xs font-bold text-green-600 uppercase tracking-wider mb-4">
            Resultados
          </h4>
          <ul className="space-y-3 mb-6">
            {caseStudy.results.map((result, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-600" strokeWidth={3} />
                  </div>
                </div>
                <span className="text-sm text-gray-700 leading-relaxed">
                  {result.highlight ? (
                    <>
                      {result.text.split(result.highlight).map((part, i, arr) => (
                        <span key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <strong className="text-brand-turquoise font-bold text-base">
                              {result.highlight}
                            </strong>
                          )}
                        </span>
                      ))}
                    </>
                  ) : (
                    result.text
                  )}
                </span>
              </li>
            ))}
          </ul>

          {/* Link */}
          <Link
            href={caseStudy.link}
            className="inline-flex items-center gap-2 text-brand-turquoise hover:text-brand-turquoise/80 font-semibold text-sm group/link transition-colors"
          >
            <span className="border-b-2 border-transparent group-hover/link:border-brand-turquoise transition-all">
              Leer caso completo
            </span>
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export function CaseStudiesSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-turquoise/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-orange font-bold text-sm uppercase tracking-wider mb-3"
          >
            RESULTADOS REALES
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6 leading-tight"
          >
            Empresas que Confiaron en <span className="text-brand-orange">FORJA</span> y Transformaron su Competitividad
          </motion.h2>
        </div>

        {/* Grid de Casos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} index={index} />
          ))}
        </div>

        {/* CTA Ver Todos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Link
            href="/casos-exito"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-navy text-white font-bold text-lg rounded-xl hover:bg-brand-navy/90 transition-all shadow-lg hover:shadow-2xl group"
          >
            Ver Todos los Casos de Éxito (12+)
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}


