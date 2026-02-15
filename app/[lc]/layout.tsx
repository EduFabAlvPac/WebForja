/**
 * FORJA DIGITAL - Localized Layout
 * 
 * Layout dinámico por país que envuelve el contenido con CountryProvider.
 * Lee el parámetro [lc] de la URL y provee contexto de país a toda la aplicación.
 * 
 * Rutas soportadas: /es, /es-co, /es-cl, /es-pe, /es-ec
 * 
 * @module app/[lc]/layout
 */

import { CountryProvider } from '@/context/CountryProvider';
import { SUPPORTED_LOCALES } from '@/lib/country';

/**
 * Generar params estáticos para todos los locales soportados
 * Mejora el build time y performance
 */
export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((lc) => ({
    lc,
  }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {
    lc: string;
  };
}

/**
 * LocaleLayout - Layout por país
 * 
 * Este layout NO renderiza estructura visual adicional,
 * solo provee el contexto de país al árbol de componentes.
 * El layout visual está en el RootLayout padre.
 * 
 * @example
 * // Usuario navega a /es-co/servicios
 * // Este layout recibe: params.lc = "es-co"
 * // Provee contexto con country = COUNTRIES['es-co']
 */
export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  return (
    <CountryProvider locale={params.lc}>
      {children}
    </CountryProvider>
  );
}

