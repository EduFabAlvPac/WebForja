/**
 * FORJA DIGITAL - Country Configuration
 * 
 * Mapeo de países soportados con configuración localizada para
 * monedas, etiquetas fiscales, contacto y formato regional.
 * 
 * Soporta: Colombia, Chile, Perú, Ecuador + default español (general).
 * 
 * @module lib/country
 */

/**
 * Código de país ISO 3166-1 alpha-2
 */
export type CountryCode = 'co' | 'cl' | 'pe' | 'ec' | 'default';

/**
 * Código de locale (país simplificado)
 */
export type LocaleCode = 'es' | 'co' | 'cl' | 'pe' | 'ec';

/**
 * Configuración completa de un país
 */
export interface CountryConfig {
  /** Código de país (ISO alpha-2) */
  code: CountryCode;
  
  /** Código de locale completo */
  lc: LocaleCode;
  
  /** Nombre del país */
  name: string;
  
  /** Nombre completo del país */
  fullName: string;
  
  /** Código de moneda (ISO 4217) */
  currency: string;
  
  /** Símbolo de moneda */
  currencySymbol: string;
  
  /** Etiqueta fiscal para clientes (NIT, RUT, RUC, etc.) */
  taxLabelClient: string;
  
  /** Etiqueta fiscal para empresas */
  taxLabelCompany: string;
  
  /** Número de WhatsApp con código de país */
  whatsapp: string;
  
  /** Número de teléfono principal */
  phone: string;
  
  /** Locale para Intl (formato de números, fechas) */
  locale: string;
  
  /** Prefijo telefónico internacional */
  dialCode: string;
  
  /** Formato de número de identificación fiscal */
  taxIdFormat?: string;
  
  /** Configuración de IVA/Impuestos */
  tax: {
    /** Nombre del impuesto (IVA, IGV, etc.) */
    name: string;
    /** Tasa estándar */
    rate: number;
  };
  
  /** Flag emoji del país */
  flag: string;
}

/**
 * Mapeo completo de países soportados
 */
export const COUNTRIES: Record<LocaleCode, CountryConfig> = {
  // ========================================
  // ESPAÑOL GENERAL (Default)
  // ========================================
  'es': {
    code: 'default',
    lc: 'es',
    name: 'Internacional',
    fullName: 'América Latina',
    currency: 'USD',
    currencySymbol: '$',
    taxLabelClient: 'ID Fiscal',
    taxLabelCompany: 'ID Fiscal',
    whatsapp: '+57 312 2415413', // Default Colombia
    phone: '+57 312 2415413',
    locale: 'es-419', // Español Latinoamericano
    dialCode: '+1',
    tax: {
      name: 'IVA',
      rate: 19,
    },
    flag: '🌎',
  },

  // ========================================
  // COLOMBIA 🇨🇴
  // ========================================
  'co': {
    code: 'co',
    lc: 'co',
    name: 'Colombia',
    fullName: 'República de Colombia',
    currency: 'COP',
    currencySymbol: '$',
    taxLabelClient: 'NIT',
    taxLabelCompany: 'NIT',
    whatsapp: '+57 312 2415413',
    phone: '+57 312 2415413',
    locale: 'es-CO',
    dialCode: '+57',
    taxIdFormat: 'XXX.XXX.XXX-X',
    tax: {
      name: 'IVA',
      rate: 19,
    },
    flag: '🇨🇴',
  },

  // ========================================
  // CHILE 🇨🇱
  // ========================================
  'cl': {
    code: 'cl',
    lc: 'cl',
    name: 'Chile',
    fullName: 'República de Chile',
    currency: 'CLP',
    currencySymbol: '$',
    taxLabelClient: 'RUT',
    taxLabelCompany: 'RUT',
    whatsapp: '+56 9 1234 5678',
    phone: '+56 2 1234 5678',
    locale: 'es-CL',
    dialCode: '+56',
    taxIdFormat: 'XX.XXX.XXX-X',
    tax: {
      name: 'IVA',
      rate: 19,
    },
    flag: '🇨🇱',
  },

  // ========================================
  // PERÚ 🇵🇪
  // ========================================
  'pe': {
    code: 'pe',
    lc: 'pe',
    name: 'Perú',
    fullName: 'República del Perú',
    currency: 'PEN',
    currencySymbol: 'S/',
    taxLabelClient: 'RUC',
    taxLabelCompany: 'RUC',
    whatsapp: '+51 987 654 321',
    phone: '+51 1 234 5678',
    locale: 'es-PE',
    dialCode: '+51',
    taxIdFormat: 'XXXXXXXXXXX',
    tax: {
      name: 'IGV',
      rate: 18,
    },
    flag: '🇵🇪',
  },

  // ========================================
  // ECUADOR 🇪🇨
  // ========================================
  'ec': {
    code: 'ec',
    lc: 'ec',
    name: 'Ecuador',
    fullName: 'República del Ecuador',
    currency: 'USD',
    currencySymbol: '$',
    taxLabelClient: 'RUC',
    taxLabelCompany: 'RUC',
    whatsapp: '+593 98 765 4321',
    phone: '+593 2 234 5678',
    locale: 'es-EC',
    dialCode: '+593',
    taxIdFormat: 'XXXXXXXXXXXXX',
    tax: {
      name: 'IVA',
      rate: 12,
    },
    flag: '🇪🇨',
  },
} as const;

/**
 * Lista de todos los locales soportados (países específicos)
 * La raíz '/' es Internacional (sin locale en URL)
 */
export const SUPPORTED_LOCALES: LocaleCode[] = ['co', 'cl', 'pe', 'ec'];

/**
 * Locale para la versión Internacional (raíz /)
 */
export const INTERNATIONAL_LOCALE: LocaleCode = 'es';

/**
 * Locale por defecto (español general)
 */
export const DEFAULT_LOCALE: LocaleCode = 'es';

/**
 * Obtener configuración de país por locale
 * 
 * @param lc - Código de locale
 * @returns Configuración del país
 * 
 * @example
 * const colombiaConfig = getCountryByLocale('es-co');
 * console.log(colombiaConfig.currency); // "COP"
 */
export function getCountryByLocale(lc: string | undefined): CountryConfig {
  if (!lc || !isValidLocale(lc)) {
    return COUNTRIES[DEFAULT_LOCALE];
  }
  return COUNTRIES[lc as LocaleCode];
}

/**
 * Verificar si un locale es válido
 * 
 * @param lc - Código de locale a verificar
 * @returns true si el locale es soportado
 */
export function isValidLocale(lc: string): lc is LocaleCode {
  return SUPPORTED_LOCALES.includes(lc as LocaleCode);
}

/**
 * Obtener configuración de país por código de país
 * 
 * @param code - Código de país (co, cl, pe, ec)
 * @returns Configuración del país o undefined si no existe
 */
export function getCountryByCode(code: string): CountryConfig | undefined {
  return Object.values(COUNTRIES).find(country => country.code === code);
}

/**
 * Formatear precio según la moneda del país
 * 
 * @param amount - Monto a formatear
 * @param country - Configuración del país
 * @returns Precio formateado
 * 
 * @example
 * formatPrice(1000000, COUNTRIES['es-co']); // "$1.000.000"
 * formatPrice(1000000, COUNTRIES['es-cl']); // "$1.000.000"
 */
export function formatPrice(amount: number, country: CountryConfig): string {
  try {
    return new Intl.NumberFormat(country.locale, {
      style: 'currency',
      currency: country.currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  } catch (error) {
    // Fallback si falla el formateo
    return `${country.currencySymbol}${amount.toLocaleString()}`;
  }
}

/**
 * Obtener etiqueta de impuesto con tasa
 * 
 * @param country - Configuración del país
 * @returns Texto del impuesto con tasa
 * 
 * @example
 * getTaxLabel(COUNTRIES['es-co']); // "IVA (19%)"
 * getTaxLabel(COUNTRIES['es-pe']); // "IGV (18%)"
 */
export function getTaxLabel(country: CountryConfig): string {
  return `${country.tax.name} (${country.tax.rate}%)`;
}

/**
 * Calcular impuesto sobre un monto
 * 
 * @param amount - Monto base
 * @param country - Configuración del país
 * @returns Monto del impuesto
 */
export function calculateTax(amount: number, country: CountryConfig): number {
  return amount * (country.tax.rate / 100);
}

/**
 * Calcular total con impuesto incluido
 * 
 * @param amount - Monto base
 * @param country - Configuración del país
 * @returns Monto total (base + impuesto)
 */
export function calculateTotal(amount: number, country: CountryConfig): number {
  return amount + calculateTax(amount, country);
}

/**
 * Tipo derivado para uso en TypeScript
 */
export type CountryInfo = typeof COUNTRIES;

