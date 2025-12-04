/**
 * FORJA DIGITAL - Provider Legal Note
 * 
 * Leyenda legal que muestra información del proveedor (Forja Digital).
 * Se usa en el pie de formularios para indicar exportación de servicios.
 * 
 * @module components/forms/ProviderLegalNote
 */

'use client';

import { ORG } from '@/lib/org';
import { Info } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ProviderLegalNoteProps {
  /** Clase CSS adicional */
  className?: string;
  /** Mostrar icono */
  showIcon?: boolean;
  /** Variante de estilo */
  variant?: 'default' | 'compact' | 'inline';
}

/**
 * Leyenda legal del proveedor
 * 
 * Muestra información de Forja Digital como proveedor único:
 * - Razón social
 * - NIT
 * - País de incorporación
 * - Tipo de servicio (exportación)
 * 
 * @example
 * ```tsx
 * import { ProviderLegalNote } from '@/components/forms/ProviderLegalNote';
 * 
 * // En el pie de un formulario
 * <form>
 *   <input type="text" />
 *   <button type="submit">Enviar</button>
 *   <ProviderLegalNote className="mt-4" />
 * </form>
 * ```
 */
export function ProviderLegalNote({
  className,
  showIcon = true,
  variant = 'default',
}: ProviderLegalNoteProps) {
  const content = (
    <>
      <strong>Proveedor:</strong> {ORG.legalName} – {ORG.nit} ({ORG.countryOfIncorporation}).{' '}
      {ORG.businessType}.
    </>
  );

  // Inline: solo texto
  if (variant === 'inline') {
    return (
      <span className={cn('text-xs text-gray-600 dark:text-gray-400', className)}>
        {content}
      </span>
    );
  }

  // Compact: sin borde, solo texto
  if (variant === 'compact') {
    return (
      <div className={cn('flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400', className)}>
        {showIcon && <Info className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" />}
        <p>{content}</p>
      </div>
    );
  }

  // Default: con fondo y borde
  return (
    <div
      className={cn(
        'flex items-start gap-3 p-4 rounded-lg',
        'bg-slate-50 dark:bg-slate-900/20',
        'border border-slate-200 dark:border-slate-700',
        className
      )}
      role="note"
      aria-label="Información del proveedor"
    >
      {showIcon && (
        <Info className="h-4 w-4 text-slate-500 dark:text-slate-400 mt-0.5 flex-shrink-0" />
      )}
      <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
        <p>{content}</p>
        <p className="mt-1 text-slate-500 dark:text-slate-400">
          Todos los servicios se prestan desde Colombia bajo legislación colombiana.
        </p>
      </div>
    </div>
  );
}

/**
 * Variante inline para usar dentro de texto
 * 
 * @example
 * ```tsx
 * <p>
 *   Al enviar este formulario... <ProviderLegalNoteInline />
 * </p>
 * ```
 */
export function ProviderLegalNoteInline({ className }: { className?: string }) {
  return <ProviderLegalNote variant="inline" showIcon={false} className={className} />;
}

/**
 * Variante compacta sin fondo
 * 
 * @example
 * ```tsx
 * <ProviderLegalNoteCompact className="mt-4" />
 * ```
 */
export function ProviderLegalNoteCompact({ className }: { className?: string }) {
  return <ProviderLegalNote variant="compact" className={className} />;
}

