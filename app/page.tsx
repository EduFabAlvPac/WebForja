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
import { HeroSection } from '@/components/sections/HeroSection';
import { HomeJsonLd } from '@/components/seo/HomeJsonLd';
import { NotificationBell } from '@/components/alerts/NotificationBell';
import { CountrySuggest } from '@/components/country/CountrySuggest';
import { HomeViewTracker } from '@/components/analytics/HomeViewTracker';
import { CountryProvider } from '@/context/CountryProvider';
import { ORG } from '@/lib/org';

// Todas las secciones estáticas para orden garantizado (1 → 2 → 3 → 4)
import { ServicesSection } from '@/components/sections/ServicesSection';
import { PainPointsSection } from '@/components/sections/PainPointsSection';
import { MetodologiaSection } from '@/components/sections/MetodologiaSection';
import { StatsSection } from '@/components/sections/StatsSection';

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
      
      {/* 1. 3 Pilares Estratégicos */}
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
