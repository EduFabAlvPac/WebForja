/**
 * FORJA DIGITAL - Localized Homepage
 * 
 * Homepage dinámica por país. Renderiza el mismo contenido que la homepage
 * principal pero con contexto de país disponible para personalización.
 * 
 * @module app/[lc]/page
 */

import { Metadata } from 'next';
import { headers } from 'next/headers';
import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/sections/HeroSection';
import { HomeJsonLd } from '@/components/seo/HomeJsonLd';
import { NotificationBell } from '@/components/alerts/NotificationBell';
import { CountrySuggest } from '@/components/country/CountrySuggest';
import { HomeViewTracker } from '@/components/analytics/HomeViewTracker';
import { getCountryByLocale, SUPPORTED_LOCALES } from '@/lib/country';
import { ORG } from '@/lib/org';

/**
 * Generar params estáticos para todas las rutas de país
 * Esto permite que Next.js pre-renderice las páginas /co, /cl, /pe, /ec
 */
export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((lc) => ({
    lc,
  }));
}

// Secciones above-the-fold: importación estática para primer paint
import { StatsSection } from '@/components/sections/StatsSection';

// Secciones below-the-fold: dynamic imports para mejor TBT
const PainPointsSection = dynamic(
  () => import('@/components/sections/PainPointsSection').then(mod => mod.PainPointsSection),
  { loading: () => <SectionSkeleton /> }
);

const ServicesSection = dynamic(
  () => import('@/components/sections/ServicesSection').then(mod => mod.ServicesSection),
  { loading: () => <SectionSkeleton /> }
);

const MetodologiaSection = dynamic(
  () => import('@/components/sections/MetodologiaSection').then(mod => mod.MetodologiaSection),
  { loading: () => <SectionSkeleton /> }
);

// Skeleton loader para secciones en carga
function SectionSkeleton({ height = '400px' }: { height?: string }) {
  return (
    <div 
      className="animate-pulse bg-slate-100" 
      style={{ height, minHeight: height }}
      aria-hidden="true"
    />
  );
}

interface LocaleHomeProps {
  params: {
    lc: string;
  };
}

/**
 * Generar metadata dinámica por país
 */
export async function generateMetadata({ params }: LocaleHomeProps): Promise<Metadata> {
  const country = getCountryByLocale(params.lc);
  const locale = country.locale.replace('-', '_'); // es-CO -> es_CO para OpenGraph
  
  return {
    title: 'Inicio',
    description: `Forja Digital - Arquitectos del Crecimiento PYME en ${country.name}. Transformación digital y arquitectura empresarial para PYMEs. Metodología FORJA® probada con +200 empresas.`,
    alternates: {
      canonical: `${ORG.baseUrl}/${params.lc}`,
    },
    openGraph: {
      title: `${ORG.brandName} | Arquitectos del Crecimiento PYME - ${country.name}`,
      description: `Transformación digital y arquitectura empresarial para PYMEs en ${country.name}. +200 empresas transformadas en 8 países.`,
      url: `${ORG.baseUrl}/${params.lc}`,
      locale: locale,
    },
  };
}

/**
 * Homepage localizada por país
 * 
 * Renderiza el mismo contenido que la homepage principal,
 * pero con contexto de país disponible (a través de CountryProvider).
 */
export default function LocaleHome({ params }: LocaleHomeProps) {
  // Leer header de geolocalización del middleware
  const headersList = headers();
  const geoCountry = headersList.get('x-geo-country');

  return (
    <>
      <HomeJsonLd />
      <HomeViewTracker />
      
      {/* Sugerencia de país basada en geolocalización */}
      <CountrySuggest 
        suggestedLocale={geoCountry} 
        currentLocale={params.lc}
      />
      
      {/* Hero */}
      <div id="hero">
        <HeroSection />
      </div>
      
      {/* 1. 3 Frentes Estratégicos */}
      <div id="services">
        <ServicesSection />
      </div>
      
      {/* 2. ¿Te Identificas con Alguna de Estas Situaciones? */}
      <div id="pain-points">
        <PainPointsSection />
      </div>
      
      {/* 3. Metodología FORJA® */}
      <div id="metodologia">
        <MetodologiaSection />
      </div>
      
      {/* 4. Números que Hablan por Sí Solos */}
      <div id="stats">
        <StatsSection />
      </div>
      
      {/* Botón Flotante de Notificaciones - Solo en Home */}
      <NotificationBell className="bottom-24 left-6" />
    </>
  );
}

