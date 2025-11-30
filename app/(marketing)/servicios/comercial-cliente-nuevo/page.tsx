'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Check, 
  ArrowRight, 
  Phone, 
  Target, 
  ClipboardCheck, 
  TrendingUp,
  X,
  CheckCircle,
  AlertCircle,
  Star,
  BarChart3
} from 'lucide-react'
import { ServiceLayout } from '../_components/ServiceLayout'
import { ProblemCard } from '@/components/services/ProblemCard'
import { ServiceAccordion } from '@/components/services/ServiceAccordion'
import { MethodologyTimeline } from '@/components/services/MethodologyTimeline'
import { CaseStudy } from '@/components/services/CaseStudy'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { Button } from '@/components/ui/button'
import { 
  comercialServicioData as data, 
  transformationMetrics,
  customerComparison,
  statisticBadge,
  guarantees
} from '@/data/services/comercial-servicio-cliente'

/**
 * Página de Servicio con ServiceLayout
 * 
 * Secciones ancladas:
 * - #por-que: Para quién es + Problemas
 * - #que: Qué incluye el servicio
 * - #como: Metodología
 * - #prueba: Casos de éxito
 * - #cta: Call to action final
 */

export default function ComercialServicioPage() {
  return (
    <ServiceLayout
      title="Motor Comercial de Alto Rendimiento"
      subtitle="Transforma tu equipo comercial en una máquina de ventas predecible y escalable"
      breadcrumbs={[
        { label: 'Servicios', href: '/servicios' },
        { label: 'Comercial & Operaciones', href: '/servicios/comercial-operaciones' },
        { label: 'Motor Comercial', href: '/servicios/comercial-operaciones/comercial-cliente' }
      ]}
      anchors={[
        { id: 'por-que', label: '¿Para quién?' },
        { id: 'que', label: '¿Qué incluye?' },
        { id: 'como', label: '¿Cómo lo hacemos?' },
        { id: 'prueba', label: 'Casos de Éxito' },
        { id: 'cta', label: 'Comienza Ahora' }
      ]}
      cta={{
        label: 'Diagnóstico Comercial Gratis',
        href: '/contacto'
      }}
    >
      {/* STATISTIC BADGE - Elemento WOW */}
      <section className="mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 rounded-2xl p-6 md:p-8 border-2 border-orange-300 shadow-xl text-center"
        >
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <AlertCircle className="h-8 w-8 text-brand-orange flex-shrink-0" strokeWidth={2} />
            <p className="text-2xl md:text-3xl font-bold text-brand-navy">
              <span className="text-4xl md:text-5xl text-brand-orange">{statisticBadge.value}</span> {statisticBadge.text}
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECCIÓN 1 - PARA QUIÉN ES (Anchor: #por-que) */}
      <section id="por-que" className="scroll-mt-24 mb-16">
        <SectionHeader
          eyebrow="PERFIL IDEAL"
          title="¿Este Servicio es para Tu Empresa?"
          highlight="Tu Empresa"
          className="mb-8"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {data.targetProfile.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-brand-turquoise hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-brand-turquoise to-brand-turquoise/70 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-brand-navy mb-2 text-lg">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Problemas que Resolvemos */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-8 text-center">
            Problemas que <span className="text-brand-orange">Resolvemos</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.problems.map((problem, index) => (
              <ProblemCard key={index} problem={problem} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 - QUÉ INCLUYE (Anchor: #que) */}
      <section id="que" className="scroll-mt-24 mb-16">
        <SectionHeader
          eyebrow="SOLUCIÓN COMPLETA"
          title="Qué Incluye Este Servicio"
          highlight="Incluye"
          className="mb-8"
        />

        <div className="bg-white rounded-2xl border-2 border-slate-200 p-8">
          <ServiceAccordion items={data.deliverables} />
        </div>
      </section>

      {/* SECCIÓN 3 - CÓMO LO HACEMOS (Anchor: #como) */}
      <section id="como" className="scroll-mt-24 mb-16">
        <SectionHeader
          eyebrow="METODOLOGÍA FORJA®"
          title="Cómo Transformamos tu Área Comercial"
          highlight="Transformamos"
          className="mb-8"
        />

        <MethodologyTimeline phases={data.methodology.phases} />
      </section>

      {/* SECCIÓN 4 - CASOS DE ÉXITO (Anchor: #prueba) */}
      <section id="prueba" className="scroll-mt-24 mb-16">
        <SectionHeader
          eyebrow="RESULTADOS REALES"
          title="Casos de Éxito"
          highlight="Éxito"
          className="mb-8"
        />

        <div className="space-y-8">
          {data.caseStudies.map((caseStudy, index) => (
            <CaseStudy key={index} caseStudy={caseStudy} index={index} />
          ))}
        </div>
      </section>

      {/* SECCIÓN 5 - CTA FINAL (Anchor: #cta) */}
      <section id="cta" className="scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-forja-navy via-forja-purple to-forja-navy rounded-2xl p-8 md:p-12 text-center shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para Multiplicar tus Ventas?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Comienza con un diagnóstico gratuito de tu área comercial y descubre tu potencial de crecimiento
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              className="bg-white text-forja-navy hover:bg-slate-100"
              asChild
            >
              <Link href="/contacto" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>Solicita tu Diagnóstico Gratis</span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
              asChild
            >
              <Link href="/casos-exito" className="flex items-center gap-2">
                <span>Ver Más Casos de Éxito</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </ServiceLayout>
  )
}

