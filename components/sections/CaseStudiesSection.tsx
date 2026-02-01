'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, ArrowRight, Factory, Briefcase, ShoppingCart, TrendingUp } from 'lucide-react'

interface CaseStudyResult {
  text: string
  highlight?: string
}

interface CaseStudy {
  id: string
  industry: string
  industryIcon: React.ElementType
  accentColor: string // Color de acento para borde superior
  badgeBg: string
  badgeText: string
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
    accentColor: 'from-blue-500 to-blue-600',
    badgeBg: 'bg-blue-500',
    badgeText: 'text-white',
    companyName: 'Textilera Regional',
    location: 'Medellín, Colombia · 85 empleados',
    challenge: 'Procesos manuales, inventarios desactualizados, pérdida de clientes por tiempos de entrega lentos.',
    solution: 'Arquitectura de procesos Lean + ERP integrado + automatización de producción',
    results: [
      { text: 'reducción en tiempo de entrega', highlight: '45%' },
      { text: 'aumento en capacidad productiva', highlight: '30%' },
      { text: 'menos errores de inventario', highlight: '60%' },
      { text: 'ROI en primer año', highlight: '320%' },
    ],
    link: '/nosotros/testimonios',
  },
  {
    id: 'firma-contable',
    industry: 'Servicios Profesionales',
    industryIcon: Briefcase,
    accentColor: 'from-purple-500 to-purple-600',
    badgeBg: 'bg-purple-500',
    badgeText: 'text-white',
    companyName: 'Firma Contable',
    location: 'Bogotá, Colombia · 35 empleados',
    challenge: 'Dependencia de socios fundadores, falta de escalabilidad, sistemas obsoletos, rotación de personal.',
    solution: 'Gobierno corporativo + automatización de procesos contables + gestión de talento por competencias',
    results: [
      { text: 'más clientes sin aumentar headcount', highlight: '50%' },
      { text: 'reducción en tareas administrativas', highlight: '70%' },
      { text: 'retención de talento clave', highlight: '85%' },
      { text: 'aumento en EBITDA', highlight: '40%' },
    ],
    link: '/nosotros/testimonios',
  },
  {
    id: 'cadena-retail',
    industry: 'Retail',
    industryIcon: ShoppingCart,
    accentColor: 'from-forja-fire to-orange-500',
    badgeBg: 'bg-forja-fire',
    badgeText: 'text-white',
    companyName: 'Cadena de Tiendas Especializadas',
    location: 'Cali, Colombia · 120 empleados · 8 tiendas',
    challenge: 'Experiencia de cliente desarticulada entre canales físicos y digitales, datos fragmentados, ineficiencias operativas.',
    solution: 'Estrategia omnicanal + CRM unificado + integración eCommerce-POS + análisis predictivo',
    results: [
      { text: 'crecimiento en ventas online', highlight: '120%' },
      { text: 'aumento en ticket promedio', highlight: '35%' },
      { text: 'visibilidad de inventario en tiempo real', highlight: '90%' },
      { text: 'NPS incrementó de 42 a', highlight: '78' },
    ],
    link: '/nosotros/testimonios',
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
      className="group h-full"
    >
      <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-slate-300 flex flex-col relative">
        {/* Borde superior de color - Acento por industria */}
        <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${caseStudy.accentColor}`} />
        
        {/* Header */}
        <div className="p-6 pt-8">
          {/* Industry Badge - Sólido con icono */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${caseStudy.badgeBg} ${caseStudy.badgeText} text-sm font-semibold mb-4 shadow-sm`}>
            <Icon className="w-4 h-4" />
            {caseStudy.industry}
          </div>

          {/* Company Name */}
          <h3 className="text-xl font-bold text-forja-navy mb-2 group-hover:text-forja-teal transition-colors">
            {caseStudy.companyName}
          </h3>

          {/* Location */}
          <p className="text-sm text-slate-500">{caseStudy.location}</p>
        </div>

        {/* Challenge */}
        <div className="px-6 py-5 bg-slate-50/80 border-y border-slate-100">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            Desafío
          </h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            {caseStudy.challenge}
          </p>
        </div>

        {/* Solution */}
        <div className="px-6 py-5 bg-forja-teal/5 border-b border-slate-100">
          <h4 className="text-xs font-bold text-forja-teal uppercase tracking-wider mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-forja-teal" />
            Solución FORJA
          </h4>
          <p className="text-sm text-slate-700 leading-relaxed font-medium">
            {caseStudy.solution}
          </p>
        </div>

        {/* Results - Diseño mejorado */}
        <div className="p-6 flex-grow flex flex-col">
          <h4 className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-4 flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Resultados
          </h4>
          
          <ul className="space-y-3 mb-6 flex-grow">
            {caseStudy.results.map((result, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-emerald-600" strokeWidth={3} />
                  </div>
                </div>
                <span className="text-sm text-slate-600 leading-snug">
                  {result.highlight && (
                    <span className="text-forja-fire font-bold text-lg mr-1">
                      {result.highlight}
                    </span>
                  )}
                  {result.text}
                </span>
              </li>
            ))}
          </ul>

          {/* Link - Más prominente */}
          <Link
            href={caseStudy.link}
            className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-forja-navy text-slate-700 hover:text-white font-semibold text-sm transition-all duration-300 group/link"
          >
            <span>Ver caso completo</span>
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export function CaseStudiesSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t-2 border-slate-200 section-shadow relative overflow-hidden">
      {/* Decorative background elements - Más sutiles */}
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-forja-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-forja-purple/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header - Mejorado */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forja-fire/10 text-forja-fire font-bold text-sm uppercase tracking-wider mb-4"
          >
            <TrendingUp className="w-4 h-4" />
            Resultados Reales
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-forja-navy mb-4 leading-tight"
          >
            Empresas que Confiaron en{' '}
            <span className="text-forja-fire relative">
              FORJA
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 8" preserveAspectRatio="none">
                <path d="M0 7 Q 50 0, 100 7" stroke="currentColor" strokeWidth="3" fill="none" className="text-forja-fire/30" />
              </svg>
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Transformaciones reales con resultados medibles en empresas de diferentes industrias
          </motion.p>
        </div>

        {/* Grid de Casos - Gap aumentado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} index={index} />
          ))}
        </div>

        {/* CTA Ver Todos - Mejorado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Link
            href="/nosotros/testimonios"
            className="inline-flex items-center gap-3 px-8 py-4 bg-forja-navy text-white font-bold text-lg rounded-xl hover:bg-forja-navy/90 transition-all shadow-lg hover:shadow-2xl hover:-translate-y-0.5 group"
          >
            <span>Ver Todos los Casos de Éxito</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}


