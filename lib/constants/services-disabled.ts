/**
 * Servicios y categorías temporalmente deshabilitados.
 * Se muestran en la UI pero sin enlace ni interacción (estilo "Próximamente").
 *
 * Categorías: Estrategia & Transformación, Talento & Finanzas, Comercial & Operaciones
 * Servicios: Gestión de Talento, Gestión Financiera, Comercial y Servicio al Cliente
 */

export const DISABLED_CATEGORY_IDS = [
  'estrategia-transformacion',
  'talento-finanzas',
  'comercial-operaciones',
] as const

export const DISABLED_SERVICE_IDS = [
  'gestion-talento-estrategico',
  'ingenieria-financiera',
  'comercial-cliente',
] as const

export function isCategoryDisabled(id: string): boolean {
  return (DISABLED_CATEGORY_IDS as readonly string[]).includes(id)
}

export function isServiceDisabled(id: string): boolean {
  return (DISABLED_SERVICE_IDS as readonly string[]).includes(id)
}

/** Para Footer y otros que usan href en lugar de id (con o sin locale) */
export function isServiceHrefDisabled(href: string): boolean {
  return (
    href.includes('gestion-talento-estrategico') ||
    href.includes('ingenieria-financiera') ||
    href.includes('comercial-cliente')
  )
}

export const PROXIMAMENTE_LABEL = 'Próximamente'
