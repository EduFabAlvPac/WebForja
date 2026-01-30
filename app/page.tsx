/**
 * FORJA DIGITAL - Homepage Internacional
 * 
 * Homepage principal para la versión Internacional (raíz /).
 * Sin locale en la URL.
 * 
 * @module app/page
 */

import { Metadata } from 'next';
import { headers } from 'next/headers';
import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/sections/HeroSection';
import { HomeJsonLd } from '@/components/seo/HomeJsonLd';
import { NotificationBell } from '@/components/alerts/NotificationBell';
import { CountrySuggest } from '@/components/country/CountrySuggest';
import { HomeViewTracker } from '@/components/analytics/HomeViewTracker';
import { CountryProvider } from '@/context/CountryProvider';
import { ORG } from '@/lib/org';

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

/**
 * Metadata para la homepage Internacional
 */
export const metadata: Metadata = {
  title: 'Inicio',
  description: 'Forja Digital - Arquitectos del Crecimiento PYME en América Latina. Transformación digital y arquitectura empresarial para PYMEs. Metodología FORJA® probada con +200 empresas.',
  alternates: {
    canonical: ORG.baseUrl,
  },
  openGraph: {
    title: `${ORG.brandName} | Arquitectos del Crecimiento PYME`,
    description: 'Transformación digital y arquitectura empresarial para PYMEs. +200 empresas transformadas en 8 países.',
    url: ORG.baseUrl,
    locale: 'es_419',
  },
};

/**
 * Homepage Internacional
 * 
 * Página principal sin locale en la URL.
 * Usa locale 'es' (Internacional) por defecto.
 */
export default function HomePage() {
  // Leer header de geolocalización del middleware
  const headersList = headers();
  const geoCountry = headersList.get('x-geo-country');

  return (
    <CountryProvider locale="es">
      <HomeJsonLd />
      <HomeViewTracker />
      
      {/* Sugerencia de país basada en geolocalización */}
      <CountrySuggest 
        suggestedLocale={geoCountry} 
        currentLocale="es"
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
    </CountryProvider>
  );
}
