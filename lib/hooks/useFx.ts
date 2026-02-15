/**
 * FORJA DIGITAL - Foreign Exchange Rates Hook
 * 
 * Hook para conversión de monedas con tasas de cambio.
 * Actualmente usa tasas MOCK estáticas.
 * 
 * TODO: Integrar fuente real de tasas (API externa como exchangerate-api.com)
 * 
 * @module lib/hooks/useFx
 */

'use client';

import { useMemo } from 'react';

/**
 * Tasas de cambio MOCK (estáticas)
 * Base: 1 USD = X moneda local
 * 
 * TODO: Reemplazar con API real
 * - exchangerate-api.com
 * - openexchangerates.org
 * - fixer.io
 * 
 * Última actualización: Diciembre 2024
 */
const MOCK_FX_RATES: Record<string, number> = {
  'USD': 1,        // Base
  'COP': 4000,     // 1 USD = 4000 COP (aprox)
  'CLP': 900,      // 1 USD = 900 CLP (aprox)
  'PEN': 3.7,      // 1 USD = 3.7 PEN (aprox)
  'EUR': 0.92,     // 1 USD = 0.92 EUR (aprox)
  'MXN': 17,       // 1 USD = 17 MXN (aprox)
  'ARS': 350,      // 1 USD = 350 ARS (aprox)
};

/**
 * Hook para conversión de monedas
 * 
 * @returns Objeto con funciones de conversión y tasas
 * 
 * @example
 * const { convert, getRate } = useFx();
 * 
 * const copAmount = convert(100, 'USD', 'COP'); // 400000
 * const rate = getRate('USD', 'COP'); // 4000
 */
export function useFx() {
  const rates = useMemo(() => MOCK_FX_RATES, []);

  /**
   * Convertir monto de una moneda a otra
   * 
   * @param amount - Monto a convertir
   * @param from - Moneda origen
   * @param to - Moneda destino
   * @returns Monto convertido
   * 
   * @example
   * convert(100, 'USD', 'COP'); // 400000
   * convert(1000, 'COP', 'USD'); // 0.25
   */
  const convert = (amount: number, from: string, to: string): number => {
    if (from === to) return amount;

    const fromRate = rates[from.toUpperCase()];
    const toRate = rates[to.toUpperCase()];

    if (!fromRate || !toRate) {
      console.warn(`Exchange rate not found for ${from} or ${to}`);
      return amount;
    }

    // Convertir a USD primero, luego a moneda destino
    const amountInUSD = amount / fromRate;
    return amountInUSD * toRate;
  };

  /**
   * Obtener tasa de cambio entre dos monedas
   * 
   * @param from - Moneda origen
   * @param to - Moneda destino
   * @returns Tasa de cambio
   * 
   * @example
   * getRate('USD', 'COP'); // 4000
   */
  const getRate = (from: string, to: string): number => {
    if (from === to) return 1;

    const fromRate = rates[from.toUpperCase()];
    const toRate = rates[to.toUpperCase()];

    if (!fromRate || !toRate) {
      return 1;
    }

    return toRate / fromRate;
  };

  /**
   * Verificar si una moneda está disponible
   * 
   * @param currency - Código de moneda
   * @returns true si está disponible
   */
  const isAvailable = (currency: string): boolean => {
    return currency.toUpperCase() in rates;
  };

  /**
   * Obtener todas las monedas disponibles
   * 
   * @returns Array de códigos de moneda
   */
  const getAvailableCurrencies = (): string[] => {
    return Object.keys(rates);
  };

  return {
    convert,
    getRate,
    isAvailable,
    getAvailableCurrencies,
    rates,
    /**
     * Flag para indicar que son tasas mock
     * Útil para mostrar disclaimers en UI
     */
    isMock: true,
  };
}

/**
 * Función helper para convertir sin hook (uso en Server Components)
 * 
 * @param amount - Monto a convertir
 * @param from - Moneda origen
 * @param to - Moneda destino
 * @returns Monto convertido
 * 
 * @example
 * import { convertCurrency } from '@/lib/hooks/useFx';
 * 
 * const copAmount = convertCurrency(100, 'USD', 'COP');
 */
export function convertCurrency(
  amount: number,
  from: string,
  to: string
): number {
  if (from === to) return amount;

  const fromRate = MOCK_FX_RATES[from.toUpperCase()];
  const toRate = MOCK_FX_RATES[to.toUpperCase()];

  if (!fromRate || !toRate) {
    console.warn(`Exchange rate not found for ${from} or ${to}`);
    return amount;
  }

  const amountInUSD = amount / fromRate;
  return amountInUSD * toRate;
}

/**
 * Obtener tasa sin hook (uso en Server Components)
 * 
 * @param from - Moneda origen
 * @param to - Moneda destino
 * @returns Tasa de cambio
 */
export function getExchangeRate(from: string, to: string): number {
  if (from === to) return 1;

  const fromRate = MOCK_FX_RATES[from.toUpperCase()];
  const toRate = MOCK_FX_RATES[to.toUpperCase()];

  if (!fromRate || !toRate) {
    return 1;
  }

  return toRate / fromRate;
}

/**
 * Constante para acceso directo a tasas
 */
export const FX_RATES = MOCK_FX_RATES;

/**
 * TODO: Implementación con API real
 * 
 * Ejemplo de integración con exchangerate-api.com:
 * 
 * ```typescript
 * async function fetchRealRates() {
 *   const response = await fetch(
 *     'https://api.exchangerate-api.com/v4/latest/USD'
 *   );
 *   const data = await response.json();
 *   return data.rates;
 * }
 * 
 * export function useFx() {
 *   const [rates, setRates] = useState(MOCK_FX_RATES);
 *   const [loading, setLoading] = useState(false);
 *   
 *   useEffect(() => {
 *     setLoading(true);
 *     fetchRealRates()
 *       .then(setRates)
 *       .catch(console.error)
 *       .finally(() => setLoading(false));
 *   }, []);
 *   
 *   return { rates, loading, convert, getRate };
 * }
 * ```
 */

