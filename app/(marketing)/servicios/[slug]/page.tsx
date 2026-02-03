import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CheckCircle2, AlertCircle, Phone, ArrowRight } from 'lucide-react'
import { ServiceLayout } from '../_components/service-layout'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { ProblemCard } from '@/components/services/ProblemCard'
import { ServiceAccordion } from '@/components/services/ServiceAccordion'
import { MethodologyTimeline } from '@/components/services/MethodologyTimeline'
import { CaseStudy } from '@/components/services/CaseStudy'
import { Button } from '@/components/ui/button'
import { ServiceJsonLd } from '@/components/seo/ServiceJsonLd'
import { comercialServicioData } from '@/data/services/comercial-servicio-cliente'
import type { ServicePageData } from '@/types/services'

const SITE_URL = 'https://forjadigital.co'

interface ServiceConfig {
  data: ServicePageData
  slug: string
  category: string
}

const SERVICES: Record<string, ServiceConfig> = {
  'comercial-servicio-cliente': {
    data: comercialServicioData,
    slug: 'comercial-servicio-cliente',
    category: 'Comercial y Operaciones',
  },
}

const ANCHORS = [
  { id: 'por-que', label: '¿Por qué?' },
  { id: 'que', label: '¿Qué?' },
  { id: 'como', label: '¿Cómo?' },
  { id: 'prueba', label: 'Prueba' },
  { id: 'cta', label: 'CTA' },
]

const getPhases = (data: ServicePageData) => {
  const maybeArray = data.methodology as unknown
  if (Array.isArray(maybeArray)) return maybeArray
  if (maybeArray && typeof maybeArray === 'object' && 'phases' in maybeArray && Array.isArray((maybeArray as { phases: unknown[] }).phases)) {
    return (maybeArray as { phases: unknown[] }).phases
  }
  return []
}

// Generate static params for all services
export function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({ slug }))
}

// Generate metadata for each service page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = SERVICES[params.slug]
  
  if (!service) {
    return {
      title: 'Servicio no encontrado',
    }
  }

  const { data, slug } = service
  const canonicalUrl = `${SITE_URL}/servicios/${slug}`

  return {
    title: data.hero.title,
    description: data.hero.subtitle || `${data.hero.title} - Servicio de consultoría empresarial de Forja Digital`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${data.hero.title} | Forja Digital - AE`,
      description: data.hero.subtitle || data.hero.title,
      url: canonicalUrl,
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: data.hero.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.hero.title,
      description: data.hero.subtitle || data.hero.title,
    },
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = SERVICES[params.slug]

  if (!service) {
    notFound()
  }

  const { data, slug, category } = service
  const phases = getPhases(data)
  const ctaPrimary = data.cta?.primary
  const ctaSecondary = data.cta?.secondary

  const breadcrumbs = [
    { label: 'Servicios', href: '/servicios' },
    { label: data.hero.title, href: `/servicios/${slug}` },
  ]

  // Breadcrumbs for JSON-LD
  const jsonLdBreadcrumbs = [
    { name: 'Inicio', url: SITE_URL },
    { name: 'Servicios', url: `${SITE_URL}/servicios` },
    { name: data.hero.title, url: `${SITE_URL}/servicios/${slug}` },
  ]

  return (
    <>
      {/* JSON-LD Structured Data */}
      <ServiceJsonLd
        name={data.hero.title}
        description={data.hero.subtitle || `${data.hero.title} - Servicio de consultoría empresarial`}
        slug={slug}
        category={category}
        priceCurrency="COP"
        priceRange="Consultar"
        breadcrumbs={jsonLdBreadcrumbs}
      />

      <ServiceLayout
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        breadcrumbs={breadcrumbs}
        anchors={ANCHORS}
        cta={{
          label: ctaPrimary?.buttonText ?? 'Evaluación de Madurez Empresarial',
          href: ctaPrimary?.buttonLink ?? '/contacto',
        }}
      >
        {/* WHY SECTION */}
        <section id="por-que" className="scroll-mt-32 mb-16">
          <SectionHeader
            eyebrow="PERFIL IDEAL"
            title="¿Este Servicio es para Tu Empresa?"
            highlight="Tu Empresa"
            className="mb-8"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {data.targetProfile.items.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="bg-white rounded-xl p-6 border-2 border-slate-100 hover:border-forja-teal/40 transition-all duration-300 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-forja-teal/15 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-forja-teal" />
                  </div>
                  <p className="text-slate-700 leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-forja-fire/10 via-forja-fire/5 to-white border-l-4 border-forja-fire rounded-2xl p-6 md:p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-forja-navy mb-3">{data.targetProfile.idealProfile.title}</h3>
            <p className="text-slate-700 text-lg leading-relaxed">{data.targetProfile.idealProfile.description}</p>
          </div>

          <SectionHeader
            eyebrow="PROBLEMAS QUE RESOLVEMOS"
            title="¿Te Identificas con Alguna de Estas Situaciones?"
            highlight="Situaciones"
            className="mb-8"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.problems.map((problem, index) => (
              <ProblemCard key={problem.id} problem={problem} index={index} />
            ))}
          </div>
        </section>

        {/* WHAT SECTION */}
        <section id="que" className="scroll-mt-32 mb-16">
          <SectionHeader
            eyebrow="SERVICIO MODULAR"
            title="¿Qué Incluye Este Servicio?"
            highlight="Incluye"
            className="mb-8"
          />

          <div className="bg-white rounded-2xl border-2 border-slate-100 p-4 md:p-6 shadow-lg">
            <ServiceAccordion components={data.components} />
          </div>
        </section>

        {/* HOW SECTION */}
        <section id="como" className="scroll-mt-32 mb-16">
          <SectionHeader
            eyebrow="METODOLOGÍA FORJA®"
            title="¿Cómo Ejecutamos la Transformación?"
            highlight="Transformación"
            className="mb-8"
          />

          {phases.length > 0 ? (
            <MethodologyTimeline phases={phases} />
          ) : (
            <p className="text-slate-600">Estamos actualizando la metodología para este servicio.</p>
          )}
        </section>

        {/* PROOF SECTION */}
        <section id="prueba" className="scroll-mt-32 mb-16">
          <SectionHeader eyebrow="RESULTADOS REALES" title="Casos de Éxito" highlight="Éxito" className="mb-8" />

          <div className="space-y-8">
            <CaseStudy caseStudy={data.caseStudy} />
          </div>

          <div className="mt-8 rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4">
            <AlertCircle className="w-8 h-8 text-emerald-600" />
            <p className="text-emerald-800 font-semibold text-lg">
              Garantizamos mejoras medibles en retención, NPS y velocidad comercial. Si no avanzamos, no cobramos.
            </p>
          </div>
        </section>

        {/* CTA SECTION */}
        <section id="cta" className="scroll-mt-32" data-cta-primary>
          <div className="bg-gradient-to-br from-forja-navy via-forja-purple to-forja-navy rounded-2xl p-8 md:p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{ctaPrimary?.title ?? '¿Listo para Transformar tu Empresa?'}</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              {ctaPrimary?.description ?? 'Comienza con un diagnóstico gratuito de tu operación y descubre tu potencial de crecimiento.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="bg-white text-forja-navy hover:bg-slate-100" asChild>
                <Link href={ctaPrimary?.buttonLink ?? '/contacto'} className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>{ctaPrimary?.buttonText ?? 'Evaluación de Madurez Empresarial'}</span>
                </Link>
              </Button>
              {ctaSecondary && (
                <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20" asChild>
                  <Link href={ctaSecondary.buttonLink} className="flex items-center gap-2">
                    <span>{ctaSecondary.buttonText}</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </section>
      </ServiceLayout>
    </>
  )
}
