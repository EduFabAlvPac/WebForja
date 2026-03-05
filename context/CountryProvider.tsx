/**
 * FORJA DIGITAL - Country Context Provider
 * 
 * Provee contexto de país basado en el parámetro [lc] de la ruta.
 * Expone información de moneda, impuestos, etiquetas fiscales y contacto
 * localizado para cada país soportado.
 * 
 * @module context/CountryProvider
 */

'use client';

import React, { createContext, useContext, useMemo } from 'react';
import { 
  CountryConfig, 
  getCountryByLocale, 
  DEFAULT_LOCALE,
  LocaleCode,
  formatPrice,
  getTaxLabel,
  calculateTax,
  calculateTotal,
} from '@/lib/country';

/**
 * Forma del contexto de país
 */
interface CountryContextValue {
  /** Configuración completa del país actual */
  country: CountryConfig;
  
  /** Código de locale actual */
  locale: LocaleCode;
  
  /** Helpers de formateo */
  formatPrice: (amount: number) => string;
  getTaxLabel: () => string;
  calculateTax: (amount: number) => number;
  calculateTotal: (amount: number) => number;
  
  /** Helper para verificar si es un país específico */
  isCountry: (code: string) => boolean;
}

/**
 * Context de país
 */
const CountryContext = createContext<CountryContextValue | undefined>(undefined);

/**
 * Props del CountryProvider
 */
export interface CountryProviderProps {
  /** Código de locale desde params (ej: 'es-co') */
  locale?: string;
  
  /** Children a renderizar */
  children: React.ReactNode;
}

/**
 * CountryProvider - Proveedor de contexto de país
 * 
 * Lee el parámetro [lc] de la ruta y provee información localizada
 * del país correspondiente.
 * 
 * @example
 * // En app/[lc]/layout.tsx
 * <CountryProvider locale={params.lc}>
 *   {children}
 * </CountryProvider>
 */
export function CountryProvider({ locale, children }: CountryProviderProps) {
  // Obtener configuración del país basado en locale
  const country = useMemo(() => {
    return getCountryByLocale(locale);
  }, [locale]);

  // Crear el valor del contexto con helpers
  const value = useMemo<CountryContextValue>(() => ({
    country,
    locale: (locale as LocaleCode) || DEFAULT_LOCALE,
    
    // Helpers pre-configurados para el país actual
    formatPrice: (amount: number) => formatPrice(amount, country),
    getTaxLabel: () => getTaxLabel(country),
    calculateTax: (amount: number) => calculateTax(amount, country),
    calculateTotal: (amount: number) => calculateTotal(amount, country),
    
    // Helper para verificar país
    isCountry: (code: string) => country.code === code,
  }), [country, locale]);

  return (
    <CountryContext.Provider value={value}>
      {children}
    </CountryContext.Provider>
  );
}

/**
 * Hook para usar el contexto de país
 * 
 * @throws Error si se usa fuera de CountryProvider
 * @returns Contexto de país con configuración y helpers
 * 
 * @example
 * function ProductPrice({ amount }: { amount: number }) {
 *   const { formatPrice, country } = useCountry();
 *   
 *   return (
 *     <div>
 *       <p>Precio: {formatPrice(amount)}</p>
 *       <p>Moneda: {country.currency}</p>
 *     </div>
 *   );
 * }
 * 
 * @example
 * function ContactForm() {
 *   const { country } = useCountry();
 *   
 *   return (
 *     <label>
 *       {country.taxLabelClient}:
 *       <input placeholder={country.taxIdFormat} />
 *     </label>
 *   );
 * }
 */
export function useCountry(): CountryContextValue {
  const context = useContext(CountryContext);
  
  if (context === undefined) {
    throw new Error(
      'useCountry debe ser usado dentro de un CountryProvider. ' +
      'Asegúrate de envolver tu componente con <CountryProvider>.'
    );
  }
  
  return context;
}

/**
 * Hook opcional que retorna undefined si no hay provider
 * Útil para componentes que pueden funcionar con o sin contexto
 * 
 * @returns Contexto de país o undefined
 * 
 * @example
 * function OptionalCountryComponent() {
 *   const countryContext = useCountryOptional();
 *   
 *   if (!countryContext) {
 *     return <div>Sin contexto de país</div>;
 *   }
 *   
 *   return <div>{countryContext.country.name}</div>;
 * }
 */
export function useCountryOptional(): CountryContextValue | undefined {
  return useContext(CountryContext);
}

/**
 * HOC para inyectar el contexto de país como props
 * 
 * @example
 * interface MyComponentProps {
 *   country: CountryConfig;
 * }
 * 
 * function MyComponent({ country }: MyComponentProps) {
 *   return <div>{country.name}</div>;
 * }
 * 
 * export default withCountry(MyComponent);
 */
export function withCountry<P extends { country: CountryConfig }>(
  Component: React.ComponentType<P>
) {
  return function WithCountryComponent(props: Omit<P, 'country'>) {
    const { country } = useCountry();
    return <Component {...(props as P)} country={country} />;
  };
}

