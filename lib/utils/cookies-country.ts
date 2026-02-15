/**
 * FORJA DIGITAL - Country Cookie Utilities
 * 
 * Utilidades para persistir la preferencia de país del usuario
 * usando cookies con duración de 6 meses.
 * 
 * @module lib/utils/cookies-country
 */

import { LocaleCode } from '@/lib/country';

/**
 * Nombre de la cookie de preferencia de país
 */
export const COUNTRY_COOKIE_NAME = 'forja_lc';

/**
 * Duración de la cookie en días (6 meses ≈ 180 días)
 */
export const COUNTRY_COOKIE_DAYS = 180;

/**
 * Obtener el valor de una cookie por nombre
 * 
 * @param name - Nombre de la cookie
 * @returns Valor de la cookie o null si no existe
 */
function getCookie(name: string): string | null {
  if (typeof document === 'undefined') {
    return null;
  }

  const nameEQ = `${name}=`;
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length, cookie.length);
    }
  }

  return null;
}

/**
 * Establecer una cookie con expiración
 * 
 * @param name - Nombre de la cookie
 * @param value - Valor de la cookie
 * @param days - Días hasta expiración
 */
function setCookie(name: string, value: string, days: number): void {
  if (typeof document === 'undefined') {
    return;
  }

  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = `; expires=${date.toUTCString()}`;
  }

  // SameSite=Lax para seguridad
  document.cookie = `${name}=${value}${expires}; path=/; SameSite=Lax`;
}

/**
 * Eliminar una cookie
 * 
 * @param name - Nombre de la cookie
 */
function deleteCookie(name: string): void {
  if (typeof document === 'undefined') {
    return;
  }

  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

/**
 * Obtener la preferencia de país guardada
 * 
 * @returns Locale guardado o null si no existe
 * 
 * @example
 * const savedLocale = getCountryPreference();
 * if (savedLocale) {
 *   console.log(`Usuario prefiere: ${savedLocale}`);
 * }
 */
export function getCountryPreference(): LocaleCode | null {
  const value = getCookie(COUNTRY_COOKIE_NAME);
  
  if (!value) {
    return null;
  }

  // Validar que sea un locale válido (Internacional + países)
  const validLocales: LocaleCode[] = ['es', 'co', 'cl', 'pe', 'ec'];
  if (validLocales.includes(value as LocaleCode)) {
    return value as LocaleCode;
  }

  return null;
}

/**
 * Guardar la preferencia de país
 * 
 * @param locale - Código de locale a guardar
 * 
 * @example
 * setCountryPreference('es-co'); // Guardar Colombia
 * setCountryPreference('es-cl'); // Guardar Chile
 */
export function setCountryPreference(locale: LocaleCode): void {
  setCookie(COUNTRY_COOKIE_NAME, locale, COUNTRY_COOKIE_DAYS);
}

/**
 * Eliminar la preferencia de país guardada
 * 
 * @example
 * clearCountryPreference(); // Usuario eligió no guardar preferencia
 */
export function clearCountryPreference(): void {
  deleteCookie(COUNTRY_COOKIE_NAME);
}

/**
 * Verificar si existe una preferencia guardada
 * 
 * @returns true si hay preferencia guardada
 * 
 * @example
 * if (hasCountryPreference()) {
 *   console.log('Usuario ya tiene preferencia guardada');
 * }
 */
export function hasCountryPreference(): boolean {
  return getCountryPreference() !== null;
}

