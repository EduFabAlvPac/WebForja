/**
 * FORJA DIGITAL - Format Utilities
 * 
 * Utilidades de formateo para monedas, números, fechas, etc.
 * 
 * @module lib/utils/format
 */

/**
 * Formatear moneda usando Intl.NumberFormat
 * 
 * @param value - Valor numérico a formatear
 * @param currency - Código de moneda ISO 4217 (USD, COP, CLP, PEN)
 * @param locale - Locale para formato regional (es-CO, es-CL, etc.)
 * @param options - Opciones adicionales de formateo
 * @returns Valor formateado como string
 * 
 * @example
 * formatCurrency(1000, 'USD', 'es-CO'); // "$1,000"
 * formatCurrency(1000000, 'COP', 'es-CO'); // "$1.000.000"
 * formatCurrency(1000, 'CLP', 'es-CL'); // "$1.000"
 */
export function formatCurrency(
  value: number,
  currency: string,
  locale: string = 'es-419',
  options?: Partial<Intl.NumberFormatOptions>
): string {
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      ...options,
    }).format(value);
  } catch (error) {
    // Fallback si falla Intl
    console.warn(`Error formatting currency: ${error}`);
    return `${getCurrencySymbol(currency)}${value.toLocaleString(locale)}`;
  }
}

/**
 * Obtener símbolo de moneda
 * 
 * @param currency - Código de moneda ISO 4217
 * @returns Símbolo de moneda
 */
export function getCurrencySymbol(currency: string): string {
  const symbols: Record<string, string> = {
    'USD': '$',
    'COP': '$',
    'CLP': '$',
    'PEN': 'S/',
    'EUR': '€',
    'MXN': '$',
    'ARS': '$',
  };
  
  return symbols[currency.toUpperCase()] || currency;
}

/**
 * Formatear número con separadores
 * 
 * @param value - Valor numérico
 * @param locale - Locale para formato
 * @returns Número formateado
 * 
 * @example
 * formatNumber(1000000, 'es-CO'); // "1.000.000"
 * formatNumber(1000000, 'en-US'); // "1,000,000"
 */
export function formatNumber(
  value: number,
  locale: string = 'es-419'
): string {
  try {
    return new Intl.NumberFormat(locale).format(value);
  } catch (error) {
    return value.toLocaleString();
  }
}

/**
 * Formatear porcentaje
 * 
 * @param value - Valor decimal (0.19 = 19%)
 * @param locale - Locale para formato
 * @returns Porcentaje formateado
 * 
 * @example
 * formatPercentage(0.19, 'es-CO'); // "19%"
 * formatPercentage(0.185, 'es-CO'); // "18,5%"
 */
export function formatPercentage(
  value: number,
  locale: string = 'es-419'
): string {
  try {
    return new Intl.NumberFormat(locale, {
      style: 'percent',
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
    }).format(value);
  } catch (error) {
    return `${(value * 100).toFixed(1)}%`;
  }
}

/**
 * Formatear moneda compacta (K, M)
 * 
 * @param value - Valor numérico
 * @param currency - Código de moneda
 * @param locale - Locale para formato
 * @returns Valor compacto formateado
 * 
 * @example
 * formatCurrencyCompact(1500, 'USD', 'es-CO'); // "$1.5K"
 * formatCurrencyCompact(2000000, 'COP', 'es-CO'); // "$2M"
 */
export function formatCurrencyCompact(
  value: number,
  currency: string,
  locale: string = 'es-419'
): string {
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      notation: 'compact',
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
    }).format(value);
  } catch (error) {
    // Fallback manual
    const symbol = getCurrencySymbol(currency);
    if (value >= 1000000) {
      return `${symbol}${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
      return `${symbol}${(value / 1000).toFixed(1)}K`;
    }
    return formatCurrency(value, currency, locale);
  }
}

/**
 * Parsear string de moneda a número
 * 
 * @param value - String con formato de moneda
 * @returns Valor numérico
 * 
 * @example
 * parseCurrency("$1,000"); // 1000
 * parseCurrency("$1.000.000"); // 1000000
 */
export function parseCurrency(value: string): number {
  // Remover símbolos y espacios
  const cleaned = value.replace(/[^0-9.,]/g, '');
  
  // Reemplazar comas/puntos dependiendo del formato
  // Si hay tanto comas como puntos, el último es el decimal
  if (cleaned.includes(',') && cleaned.includes('.')) {
    const lastComma = cleaned.lastIndexOf(',');
    const lastDot = cleaned.lastIndexOf('.');
    
    if (lastComma > lastDot) {
      // Formato europeo: 1.000,50
      return parseFloat(cleaned.replace(/\./g, '').replace(',', '.'));
    } else {
      // Formato americano: 1,000.50
      return parseFloat(cleaned.replace(/,/g, ''));
    }
  } else if (cleaned.includes(',')) {
    // Solo comas: podría ser miles o decimal
    const parts = cleaned.split(',');
    if (parts.length === 2 && parts[1].length <= 2) {
      // Es decimal: 1000,50
      return parseFloat(cleaned.replace(',', '.'));
    }
    // Es miles: 1,000
    return parseFloat(cleaned.replace(/,/g, ''));
  }
  
  // Solo puntos o números sin formato
  return parseFloat(cleaned.replace(/\./g, ''));
}

