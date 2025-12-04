/**
 * FORJA DIGITAL - Pricing Legal Note Component
 * 
 * Componente para mostrar leyenda legal en bloques de precios.
 * Explica que la facturación se emite desde Colombia.
 * 
 * @module components/pricing/PricingLegalNote
 */

'use client';

import { ORG } from '@/lib/org';
import { Info } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface PricingLegalNoteProps {
  /** Clase CSS adicional */
  className?: string;
  
  /** Mostrar icono de información */
  showIcon?: boolean;
  
  /** Variante de estilo */
  variant?: 'default' | 'compact' | 'card';
}

/**
 * PricingLegalNote - Leyenda legal para precios
 * 
 * Muestra información sobre:
 * - Valores orientativos
 * - Entidad que factura (Colombia)
 * - Exportación de servicios
 * 
 * @example
 * // Después de un bloque de precios
 * <PriceCard title="Plan Pro" amountUSD={500} />
 * <PricingLegalNote />
 * 
 * @example
 * // Versión compacta
 * <PricingLegalNote variant="compact" />
 * 
 * @example
 * // En una tarjeta
 * <PricingLegalNote variant="card" />
 */
export function PricingLegalNote({
  className,
  showIcon = true,
  variant = 'default',
}: PricingLegalNoteProps) {
  const variantClasses = {
    default: 'p-4 bg-slate-50 dark:bg-slate-900/20 border border-slate-200 dark:border-slate-700 rounded-lg',
    compact: 'p-3 bg-gray-50 dark:bg-gray-900/10 border-l-2 border-gray-300 dark:border-gray-600',
    card: 'p-6 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm',
  };

  const textSizeClasses = {
    default: 'text-sm',
    compact: 'text-xs',
    card: 'text-sm',
  };

  return (
    <div 
      className={cn(variantClasses[variant], className)}
      role="note"
      aria-label="Información legal sobre precios"
    >
      <div className="flex items-start gap-3">
        {showIcon && (
          <div className="flex-shrink-0">
            <Info className={cn(
              'text-slate-500 dark:text-slate-400',
              variant === 'compact' ? 'h-4 w-4' : 'h-5 w-5'
            )} />
          </div>
        )}
        
        <div className={cn('text-slate-600 dark:text-slate-300', textSizeClasses[variant])}>
          <p className="leading-relaxed">
            <strong className="font-semibold text-slate-700 dark:text-slate-200">
              Valores orientativos.
            </strong>
            {' '}
            Facturación emitida por{' '}
            <span className="font-medium text-slate-800 dark:text-slate-100">
              {ORG.legalName}
            </span>
            {' '}
            ({ORG.nit}) desde{' '}
            <span className="font-medium text-slate-800 dark:text-slate-100">
              {ORG.city}, {ORG.countryOfIncorporation}
            </span>
            . Exportación de servicios de consultoría empresarial.
          </p>
          
          {variant !== 'compact' && (
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 italic">
              Las tasas de cambio son referenciales y pueden variar. 
              Los valores finales se confirman en la cotización formal.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * PricingLegalNoteInline - Versión inline para usar en texto
 * 
 * @example
 * <p>
 *   Nuestros precios... <PricingLegalNoteInline />
 * </p>
 */
export function PricingLegalNoteInline({ className }: { className?: string }) {
  return (
    <span 
      className={cn('text-xs text-slate-500 dark:text-slate-400 italic', className)}
      title={`Facturación emitida por ${ORG.legalName} (${ORG.nit}) desde Colombia`}
    >
      (Valores orientativos. Facturación desde Colombia por {ORG.legalName})
    </span>
  );
}

/**
 * PricingDisclaimerBanner - Banner destacado para páginas de pricing
 * 
 * @example
 * // En la parte superior de la página de precios
 * <PricingDisclaimerBanner />
 */
export function PricingDisclaimerBanner({ className }: { className?: string }) {
  return (
    <div className={cn('bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500 p-4', className)}>
      <div className="flex items-start gap-3">
        <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-blue-900 dark:text-blue-100">
          <p className="font-medium mb-1">
            Información sobre precios y facturación
          </p>
          <p className="text-blue-800 dark:text-blue-200">
            Los precios mostrados son orientativos y están sujetos a confirmación en cotización formal.
            Toda facturación es emitida por <strong>{ORG.legalName}</strong> ({ORG.nit}) desde{' '}
            <strong>{ORG.city}, {ORG.countryOfIncorporation}</strong>, como exportación de servicios de consultoría.
          </p>
          <p className="mt-2 text-xs text-blue-700 dark:text-blue-300 italic">
            Las conversiones de moneda son referenciales y pueden variar según la tasa de cambio vigente.
          </p>
        </div>
      </div>
    </div>
  );
}

