/**
 * FORJA DIGITAL - Legal Stamp Component
 * 
 * Componente para mostrar información legal de la entidad colombiana.
 * Útil para footers, páginas legales y cualquier lugar donde se requiera
 * identificación formal de la empresa.
 * 
 * @module components/site/LegalStamp
 */

import { ORG } from '@/lib/org';

export interface LegalStampProps {
  /**
   * Modo compacto para espacios reducidos (ej: mobile footer)
   * @default false
   */
  compact?: boolean;
  
  /**
   * Clase CSS adicional para personalización
   */
  className?: string;
}

/**
 * LegalStamp - Sello legal de la organización
 * 
 * Muestra la razón social, NIT, país de incorporación y tipo de negocio.
 * 
 * @example
 * // Uso estándar en footer
 * <LegalStamp />
 * 
 * @example
 * // Modo compacto para mobile
 * <LegalStamp compact />
 */
export function LegalStamp({ compact = false, className = '' }: LegalStampProps) {
  if (compact) {
    return (
      <div 
        className={`text-xs text-slate-600 dark:text-slate-400 ${className}`}
        role="contentinfo"
        aria-label="Información legal de la empresa"
      >
        <p className="font-medium">
          {ORG.legalName}
        </p>
        <p className="mt-1">
          {ORG.nit} ({ORG.countryOfIncorporation})
        </p>
        <p className="mt-1 text-slate-500 dark:text-slate-500">
          {ORG.businessType}
        </p>
      </div>
    );
  }

  return (
    <div 
      className={`text-sm text-slate-700 dark:text-slate-300 space-y-2 ${className}`}
      role="contentinfo"
      aria-label="Información legal de la empresa"
    >
      <div className="border-l-4 border-orange-500 pl-4 py-2">
        <p className="font-semibold text-slate-900 dark:text-white">
          Operado por {ORG.legalName}
        </p>
        <p className="mt-1">
          {ORG.nit} • {ORG.city}, {ORG.countryOfIncorporation}
        </p>
        <p className="mt-2 text-slate-600 dark:text-slate-400 italic">
          {ORG.businessType}
        </p>
      </div>
      
      <div className="text-xs text-slate-500 dark:text-slate-500">
        <p>Contacto: {ORG.email}</p>
        {ORG.phoneMain && <p>Teléfono: {ORG.phoneMain}</p>}
      </div>
    </div>
  );
}

/**
 * LegalStampInline - Versión inline para uso en párrafos
 * 
 * @example
 * <p>Todos los derechos reservados. <LegalStampInline /></p>
 */
export function LegalStampInline({ className = '' }: Pick<LegalStampProps, 'className'>) {
  return (
    <span 
      className={`text-inherit ${className}`}
      role="contentinfo"
    >
      Operado por <strong>{ORG.legalName}</strong> – {ORG.nit} ({ORG.countryOfIncorporation}). {ORG.businessType}.
    </span>
  );
}

