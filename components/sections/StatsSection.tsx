'use client'

import { motion } from 'framer-motion'
import { KpiCard, StatBadge } from '@/components/ui'
import { TrendingUp, Users, Target, Award, Zap, CheckCircle2 } from 'lucide-react'
import { siteMetrics } from '@/lib/site-metrics'

/**
 * StatsSection - Muestra KPIs clave de FORJA Digital
 * Usa los nuevos componentes KpiCard y StatBadge
 */
export function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t-2 border-slate-200 section-shadow-alt" data-cta-primary>
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <StatBadge variant="primary">Resultados Comprobados</StatBadge>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-forja-navy mb-4">
            Números que{' '}
            <span className="text-forja-fire">Hablan por Sí Solos</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Más de {siteMetrics.company.yearsInBusiness} años transformando PYMEs en {siteMetrics.reach.countries} países
          </p>
        </motion.div>

        {/* KPI Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <KpiCard
              variant="primary"
              title="Clientes Activos"
              value={siteMetrics.clients.activeClients}
              description={`En ${siteMetrics.reach.countries} países`}
              icon={Users}
              trend="up"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <KpiCard
              variant="success"
              title="NPS Score"
              value={siteMetrics.satisfaction.nps}
              description="Satisfacción de clientes"
              icon={Award}
              trend="up"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <KpiCard
              variant="primary"
              title="Años de Experiencia"
              value={`${siteMetrics.company.yearsInBusiness}+`}
              description="Transformando PYMEs"
              icon={TrendingUp}
              trend="up"
            />
          </motion.div>
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <KpiCard
              title="Evaluación de Madurez"
              value={`${siteMetrics.rayosX.averageTime} min`}
              description={`Entrega en ${siteMetrics.rayosX.deliveryTime}h`}
              icon={Zap}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <KpiCard
              title="Tasa de Éxito"
              value={`${siteMetrics.satisfaction.projectSuccessRate}%`}
              description="Proyectos completados exitosamente"
              icon={Target}
              trend="up"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <KpiCard
              variant="success"
              title="Garantía"
              value="100%"
              description="Satisfacción garantizada"
              icon={CheckCircle2}
            />
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <StatBadge variant="success" dot>
            {siteMetrics.guarantees.noCommitment}
          </StatBadge>
          <StatBadge variant="info" dot>
            Entrega en {siteMetrics.rayosX.deliveryTime} horas
          </StatBadge>
          <StatBadge variant="primary" dot>
            Metodología FORJA® Probada
          </StatBadge>
          <StatBadge variant="secondary" dot>
            Soporte Continuo
          </StatBadge>
        </motion.div>
      </div>
    </section>
  )
}

