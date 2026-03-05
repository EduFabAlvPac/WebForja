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
  'enfoque-cliente',
] as const

export const DISABLED_SERVICE_IDS = [
  'gestion-talento-estrategico',
  'ingenieria-financiera',
  'comercial-cliente',
  'experiencia-cliente',
  'comercial',
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
    href.includes('comercial-cliente') ||
    href.includes('enfoque-cliente/experiencia-cliente') ||
    href.includes('enfoque-cliente/comercial')
  )
}

export const PROXIMAMENTE_LABEL = 'Próximamente'

/** Categorías que no muestran "Próximamente" en el título y usan texto negro (no gris) */
export const CATEGORIES_NO_PROXIMAMENTE_DARK_TITLE = [
  'estrategia-transformacion',
  'comercial-operaciones',
] as const

export function categoryHidesProximamenteAndDarkTitle(id: string): boolean {
  return (CATEGORIES_NO_PROXIMAMENTE_DARK_TITLE as readonly string[]).includes(id)
}
