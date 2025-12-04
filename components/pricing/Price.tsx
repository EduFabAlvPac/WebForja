/**
 * FORJA DIGITAL - Price Component
 * 
 * Componente para mostrar precios con conversión multi-país.
 * - Colombia (CO): Muestra COP como principal
 * - Otros países: Muestra USD como principal + referencia local
 * 
 * @module components/pricing/Price
 */

'use client';

import { useCountryOptional } from '@/context/CountryProvider';
import { useFx } from '@/lib/hooks/useFx';
import { formatCurrency } from '@/lib/utils/format';
import { cn } from '@/lib/utils';

export interface PriceProps {
  /** Monto base en USD */
  amountUSD: number;
  
  /** Mostrar referencia en moneda local */
  showLocalRef?: boolean;
  
  /** Clase CSS adicional */
  className?: string;
  
  /** Tamaño del texto */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  
  /** Mostrar símbolo "desde" */
  showFrom?: boolean;
}

/**
 * Price - Componente de precio multi-país
 * 
 * Lógica de presentación:
 * - Colombia: COP como principal (convertido desde USD)
 * - Chile, Perú, Ecuador: USD como principal + badge con moneda local aproximada
 * 
 * @example
 * // En Colombia: Muestra $400.000 COP
 * // En Chile: Muestra $100 USD + badge "≈ $90.000 CLP"
 * <Price amountUSD={100} showLocalRef />
 * 
 * @example
 * // Sin referencia local
 * <Price amountUSD={500} />
 * 
 * @example
 * // Tamaño grande
 * <Price amountUSD={1000} size="xl" showFrom />
 */
export function Price({
  amountUSD,
  showLocalRef = true,
  className,
  size = 'md',
  showFrom = false,
}: PriceProps) {
  const countryContext = useCountryOptional();
  const country = countryContext?.country || { code: 'co', currency: 'COP', locale: 'es-co' };
  const { convert } = useFx();

  // Colombia usa COP como principal
  const isColombia = country.code === 'co';
  
  // Determinar moneda principal y referencial
  const primaryCurrency = isColombia ? 'COP' : 'USD';
  const primaryAmount = isColombia ? convert(amountUSD, 'USD', 'COP') : amountUSD;
  
  // Calcular referencia local (si aplica y si showLocalRef)
  const shouldShowLocalRef = showLocalRef && !isColombia && country.currency !== 'USD';
  const localAmount = shouldShowLocalRef 
    ? convert(amountUSD, 'USD', country.currency) 
    : null;

  // Clases de tamaño
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  const badgeSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg',
  };

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {/* Precio principal */}
      <div className="flex items-baseline gap-2">
        {showFrom && (
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Desde
          </span>
        )}
        <span className={cn('font-bold text-slate-900 dark:text-white', sizeClasses[size])}>
          {formatCurrency(primaryAmount, primaryCurrency, country.locale)}
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
          {primaryCurrency}
        </span>
      </div>

      {/* Referencia en moneda local (solo para no-Colombia) */}
      {shouldShowLocalRef && localAmount && (
        <div 
          className={cn(
            'inline-flex items-center gap-1.5 px-2 py-1 rounded-md',
            'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800',
            'w-fit'
          )}
        >
          <span className={cn('text-blue-700 dark:text-blue-300', badgeSizeClasses[size])}>
            ≈ {formatCurrency(localAmount, country.currency, country.locale)}
          </span>
          <span className={cn('text-blue-600 dark:text-blue-400 font-medium', badgeSizeClasses[size])}>
            {country.currency}
          </span>
          <span 
            className={cn('text-blue-500 dark:text-blue-500 italic', badgeSizeClasses[size])}
            title="Valor aproximado calculado con tasa de cambio referencial"
          >
            aprox.
          </span>
        </div>
      )}
    </div>
  );
}

/**
 * PriceSimple - Versión simplificada sin badge de referencia
 * 
 * @example
 * <PriceSimple amountUSD={250} />
 */
export function PriceSimple({
  amountUSD,
  className,
  size = 'md',
}: Omit<PriceProps, 'showLocalRef' | 'showFrom'>) {
  return <Price amountUSD={amountUSD} showLocalRef={false} className={className} size={size} />;
}

/**
 * PriceCard - Precio en formato de tarjeta
 * 
 * @example
 * <PriceCard 
 *   title="Plan Profesional"
 *   amountUSD={500}
 *   period="mes"
 * />
 */
export function PriceCard({
  title,
  amountUSD,
  period = 'mes',
  features,
  showLocalRef = true,
  className,
}: {
  title: string;
  amountUSD: number;
  period?: string;
  features?: string[];
  showLocalRef?: boolean;
  className?: string;
}) {
  return (
    <div className={cn('p-6 border border-gray-200 dark:border-gray-700 rounded-lg', className)}>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      
      <div className="mb-2">
        <Price amountUSD={amountUSD} showLocalRef={showLocalRef} size="lg" />
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          por {period}
        </p>
      </div>

      {features && features.length > 0 && (
        <ul className="mt-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <span className="text-green-500 mt-0.5">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

