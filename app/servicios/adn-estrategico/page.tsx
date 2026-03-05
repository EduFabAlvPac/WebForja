'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Target, Building2, Leaf, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Target,
    title: 'Estrategia',
    description: 'Visión, Planificación Estratégica, Modelo de Negocio',
    href: '/servicios/adn-estrategico/estrategia',
  },
  {
    icon: Building2,
    title: 'Gobierno',
    description: 'Gobierno Corporativo, Estructura Organizacional, Compliance',
    href: '/servicios/adn-estrategico/gobierno',
  },
  {
    icon: Leaf,
    title: 'Sostenibilidad',
    description: 'ESG, Responsabilidad Social, Impacto Ambiental',
    href: '/servicios/adn-estrategico/sostenibilidad',
  },
]

export default function AdnEstrategicoPage() {
  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]">
      <section className="bg-gradient-to-br from-brand-navy via-brand-purple to-brand-navy py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-brand-orange/20 border border-brand-orange rounded-full text-brand-orange font-bold text-sm uppercase tracking-wider mb-6">
            Categoría de Servicios
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ADN <span className="text-brand-orange">Estratégico</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Definimos la esencia estratégica de tu organización para construir un futuro sostenible.
          </p>
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 mt-6 text-white/70 hover:text-white transition-colors text-sm"
          >
            ← Volver a Servicios
          </Link>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={s.href}
                  className="block p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl border border-slate-100 transition-all group"
                >
                  <s.icon className="h-10 w-10 text-brand-orange mb-4" />
                  <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-orange transition-colors">
                    {s.title}
                  </h2>
                  <p className="text-slate-600 text-sm mb-4">{s.description}</p>
                  <span className="inline-flex items-center gap-1 text-brand-orange font-semibold text-sm">
                    Ver más <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
