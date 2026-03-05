/**
 * FORJA DIGITAL - Company ID Field
 * 
 * Campo de ID fiscal de empresa localizado por país.
 * Lee taxLabelClient y taxIdFormat del CountryContext.
 * 
 * @module components/forms/CompanyIdField
 */

'use client';

import { forwardRef } from 'react';
import { useCountryOptional } from '@/context/CountryProvider';
import { Input } from '@/components/ui/input';
import { AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface CompanyIdFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** ID del campo */
  id?: string;
  /** Error message (si hay) */
  error?: string;
  /** Si el campo ha sido tocado */
  touched?: boolean;
  /** Clase CSS adicional */
  className?: string;
  /** Mostrar label */
  showLabel?: boolean;
  /** Campo requerido */
  required?: boolean;
}

/**
 * Campo de ID fiscal localizado por país
 * 
 * Lógica por país:
 * - Colombia (CO): NIT (xxx.xxx.xxx-x)
 * - Chile (CL): RUT (xx.xxx.xxx-x)
 * - Perú (PE): RUC (xxxxxxxxxxx)
 * - Ecuador (EC): RUC (xxxxxxxxxxxxxxxxx)
 * - Internacional: ID Fiscal
 * 
 * @example
 * ```tsx
 * import { CompanyIdField } from '@/components/forms/CompanyIdField';
 * 
 * // Con React Hook Form
 * <CompanyIdField
 *   {...register('companyId')}
 *   error={errors.companyId?.message}
 *   touched={touchedFields.companyId}
 *   required
 * />
 * ```
 */
export const CompanyIdField = forwardRef<HTMLInputElement, CompanyIdFieldProps>(
  (
    {
      id = 'companyId',
      error,
      touched,
      className,
      showLabel = true,
      required = false,
      ...props
    },
    ref
  ) => {
    const countryContext = useCountryOptional();

    // Datos por defecto si no hay country context
    const taxLabel = countryContext?.country?.taxLabelClient || 'ID Fiscal';
    const taxFormat = countryContext?.country?.taxIdFormat || 'N/A';
    const countryFlag = countryContext?.country?.flag || '🌎';

    return (
      <div className={className}>
        {showLabel && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            {taxLabel} {countryFlag} (de tu empresa)
            {required && <span className="text-red-500 ml-1">*</span>}
            {!required && (
              <span className="text-gray-500 text-xs ml-1">(opcional)</span>
            )}
          </label>
        )}

        <Input
          ref={ref}
          id={id}
          type="text"
          placeholder={taxFormat}
          autoComplete="off"
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(
            error && touched && 'border-red-500 focus-visible:ring-red-500'
          )}
          {...props}
        />

        {taxFormat && taxFormat !== 'N/A' && (
          <p className="mt-1 text-xs text-gray-500">
            Formato: {taxFormat}
          </p>
        )}

        {error && touched && (
          <p
            id={`${id}-error`}
            className="mt-1 text-sm text-red-600 flex items-center gap-1"
          >
            <AlertCircle className="h-4 w-4" />
            {error}
          </p>
        )}
      </div>
    );
  }
);

CompanyIdField.displayName = 'CompanyIdField';

/**
 * Validación simple de ID fiscal por país
 * 
 * Patrones básicos (no exhaustivos, solo formato general):
 * - Colombia: 9-12 dígitos con separadores opcionales
 * - Chile: 8-9 dígitos con guión antes del último
 * - Perú: 11 dígitos
 * - Ecuador: 13 dígitos
 * 
 * @param value - Valor a validar
 * @param countryCode - Código del país ('co', 'cl', 'pe', 'ec')
 * @returns true si es válido, string con error si no
 */
export function validateCompanyId(
  value: string,
  countryCode?: string
): true | string {
  if (!value || value.trim() === '') {
    return 'El ID fiscal es requerido';
  }

  // Limpiar espacios y caracteres especiales para validación
  const cleaned = value.replace(/[\s.-]/g, '');

  switch (countryCode?.toLowerCase()) {
    case 'co': // Colombia - NIT
      // Formato: 900.XXX.XXX-X (9-12 dígitos)
      if (!/^\d{9,12}$/.test(cleaned)) {
        return 'NIT inválido. Debe contener 9-12 dígitos';
      }
      break;

    case 'cl': // Chile - RUT
      // Formato: XX.XXX.XXX-X (7-8 dígitos + verificador)
      if (!/^\d{7,8}[0-9kK]$/.test(cleaned)) {
        return 'RUT inválido. Formato: XX.XXX.XXX-X';
      }
      break;

    case 'pe': // Perú - RUC
      // Formato: XXXXXXXXXXX (11 dígitos)
      if (!/^\d{11}$/.test(cleaned)) {
        return 'RUC inválido. Debe contener 11 dígitos';
      }
      break;

    case 'ec': // Ecuador - RUC
      // Formato: XXXXXXXXXXXXXXXXXXX (13 dígitos)
      if (!/^\d{13}$/.test(cleaned)) {
        return 'RUC inválido. Debe contener 13 dígitos';
      }
      break;

    default:
      // Genérico: al menos 5 caracteres alfanuméricos
      if (cleaned.length < 5) {
        return 'ID Fiscal inválido. Debe contener al menos 5 caracteres';
      }
  }

  return true;
}

/**
 * Helper para formatear ID fiscal según país
 * 
 * @param value - Valor sin formato
 * @param countryCode - Código del país
 * @returns Valor formateado
 * 
 * @example
 * formatCompanyId('900123456', 'co') // "900.123.456-X"
 * formatCompanyId('12345678', 'cl') // "12.345.678-X"
 */
export function formatCompanyId(value: string, countryCode?: string): string {
  if (!value) return '';

  const cleaned = value.replace(/[\s.-]/g, '');

  switch (countryCode?.toLowerCase()) {
    case 'co': // Colombia - NIT: 900.XXX.XXX-X
      if (cleaned.length >= 9) {
        const parts = cleaned.match(/^(\d{3})(\d{3})(\d{3})(\d?)$/);
        if (parts) {
          return `${parts[1]}.${parts[2]}.${parts[3]}${parts[4] ? `-${parts[4]}` : ''}`;
        }
      }
      return value;

    case 'cl': // Chile - RUT: XX.XXX.XXX-X
      if (cleaned.length >= 8) {
        const dv = cleaned.slice(-1);
        const number = cleaned.slice(0, -1);
        const formatted = number.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        return `${formatted}-${dv}`;
      }
      return value;

    default:
      return value;
  }
}

