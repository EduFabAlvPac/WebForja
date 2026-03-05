/**
 * FORJA DIGITAL - Billing Info Link
 * 
 * Link reutilizable para incluir en secciones de precios que apunta
 * a la página de Contratación y Facturación.
 * 
 * @module components/pricing/BillingInfoLink
 */

'use client';

import Link from 'next/link';
import { Info, ExternalLink } from 'lucide-react';
import { useCountryOptional } from '@/context/CountryProvider';
import { cn } from '@/lib/utils';
import { ORG } from '@/lib/org';

export interface BillingInfoLinkProps {
  /** Clase CSS adicional */
  className?: string;
  /** Variante de estilo */
  variant?: 'default' | 'compact' | 'inline';
  /** Mostrar icono */
  showIcon?: boolean;
}

/**
 * Link a página de Contratación y Facturación
 * 
 * Uso típico: Después de mostrar precios, para que usuarios
 * entiendan cómo funciona la facturación desde Colombia.
 * 
 * @example
 * ```tsx
 * import { BillingInfoLink } from '@/components/pricing/BillingInfoLink';
 * 
 * // Después de una tabla de precios
 * <PriceCard {...} />
 * <BillingInfoLink className="mt-4" />
 * ```
 */
export function BillingInfoLink({
  className,
  variant = 'default',
  showIcon = true,
}: BillingInfoLinkProps) {
  const country = useCountryOptional();
  const locale = country?.locale || 'es';

  // Inline: link simple dentro de texto
  if (variant === 'inline') {
    return (
      <Link
        href={`/${locale}/legal/contratacion-facturacion`}
        className={cn(
          'text-brand-orange hover:text-brand-orange-dark underline inline-flex items-center gap-1',
          className
        )}
      >
        <span>más información sobre facturación</span>
        {showIcon && <ExternalLink className="h-3 w-3" />}
      </Link>
    );
  }

  // Compact: link sin mucho padding
  if (variant === 'compact') {
    return (
      <Link
        href={`/${locale}/legal/contratacion-facturacion`}
        className={cn(
          'inline-flex items-center gap-2 text-sm text-slate-600 hover:text-brand-orange transition-colors',
          className
        )}
      >
        {showIcon && <Info className="h-4 w-4" />}
        <span className="underline">Información sobre contratación y facturación</span>
      </Link>
    );
  }

  // Default: box con fondo
  return (
    <Link
      href={`/${locale}/legal/contratacion-facturacion`}
      className={cn(
        'block p-4 rounded-lg border border-slate-200 hover:border-brand-orange',
        'bg-slate-50 hover:bg-slate-100 transition-all',
        'group',
        className
      )}
    >
      <div className="flex items-start gap-3">
        {showIcon && (
          <Info className="h-5 w-5 text-brand-orange flex-shrink-0 mt-0.5" />
        )}
        <div className="flex-1">
          <p className="font-semibold text-slate-900 group-hover:text-brand-orange transition-colors mb-1">
            ¿Cómo funciona la contratación y facturación?
          </p>
          <p className="text-sm text-slate-600">
            Facturamos desde Colombia como exportación de servicios.
            Conoce más sobre medios de pago, impuestos y aspectos legales.
          </p>
          <div className="flex items-center gap-1 text-sm text-brand-orange mt-2">
            <span>Ver detalles</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}

/**
 * Banner destacado para páginas de pricing
 * 
 * @example
 * ```tsx
 * // En página de precios
 * <BillingInfoBanner className="mb-8" />
 * <PricingTable />
 * ```
 */
export function BillingInfoBanner({ className }: { className?: string }) {
  const country = useCountryOptional();
  const locale = country?.locale || 'es';

  return (
    <div className={cn('bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg', className)}>
      <div className="flex items-start gap-4">
        <Info className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-bold text-blue-900 mb-2">
            Sobre Contratación y Facturación
          </h3>
          <p className="text-sm text-blue-800 leading-relaxed mb-3">
            Todos los servicios son prestados por <strong>{ORG.legalName}</strong> desde{' '}
            {ORG.countryOfIncorporation} como exportación de servicios. Facturamos
            en COP (Colombia) o USD (internacional) con medios de pago internacionales.
          </p>
          <Link
            href={`/${locale}/legal/contratacion-facturacion`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 underline"
          >
            Ver información completa sobre facturación
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

