'use client'

/**
 * Nombre de marca con colores oficiales:
 * - "Forja" en azul (brand-navy)
 * - "Consulting" en naranja (brand-orange)
 * En fondos oscuros (variant="dark") "Forja" se muestra en blanco para contraste.
 */
export function BrandName({
  variant = 'light',
  className = '',
}: {
  variant?: 'light' | 'dark'
  className?: string
}) {
  const forjaColor = variant === 'dark' ? 'text-white' : 'text-brand-navy'
  return (
    <span className={`font-semibold inline-flex ${className}`}>
      <span className={forjaColor}>Forja</span>
      <span className="text-brand-orange">Consulting</span>
    </span>
  )
}
