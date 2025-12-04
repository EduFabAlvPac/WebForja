/**
 * FORJA DIGITAL - Pricing Examples
 * 
 * Componentes de ejemplo que demuestran el uso del sistema de precios.
 * Este archivo es solo para referencia.
 * 
 * @module components/examples/PricingExample
 */

'use client';

import { Price, PriceSimple, PriceCard } from '@/components/pricing/Price';
import { PricingLegalNote, PricingDisclaimerBanner, PricingLegalNoteInline } from '@/components/pricing/PricingLegalNote';
import { useCountry } from '@/context/CountryProvider';
import { useFx } from '@/lib/hooks/useFx';
import { formatCurrency } from '@/lib/utils/format';

/**
 * Ejemplo 1: Precio Simple
 */
export function SimplePriceExample() {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Precio Simple</h3>
      <Price amountUSD={500} showLocalRef />
    </div>
  );
}

/**
 * Ejemplo 2: Tres Tamaños
 */
export function PriceSizesExample() {
  return (
    <div className="space-y-4 p-6 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Tamaños de Precio</h3>
      
      <div>
        <p className="text-sm text-gray-600 mb-1">Pequeño (sm)</p>
        <Price amountUSD={100} size="sm" />
      </div>
      
      <div>
        <p className="text-sm text-gray-600 mb-1">Mediano (md)</p>
        <Price amountUSD={100} size="md" />
      </div>
      
      <div>
        <p className="text-sm text-gray-600 mb-1">Grande (lg)</p>
        <Price amountUSD={100} size="lg" />
      </div>
      
      <div>
        <p className="text-sm text-gray-600 mb-1">Extra Grande (xl)</p>
        <Price amountUSD={100} size="xl" />
      </div>
    </div>
  );
}

/**
 * Ejemplo 3: Tabla de Precios
 */
export function PricingTableExample() {
  const plans = [
    {
      name: 'Básico',
      price: 250,
      features: [
        'Consultoría inicial',
        'Análisis de procesos',
        'Reporte mensual',
        'Email support',
      ],
    },
    {
      name: 'Profesional',
      price: 500,
      features: [
        'Todo lo del Básico',
        'Implementación completa',
        'Soporte prioritario',
        'Reuniones semanales',
      ],
    },
    {
      name: 'Empresarial',
      price: 1000,
      features: [
        'Todo lo del Profesional',
        'Dedicación completa',
        'Consultor asignado',
        'Acceso a toda la metodología',
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Planes y Precios</h2>
      
      <PricingDisclaimerBanner />
      
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <PriceCard
            key={plan.name}
            title={plan.name}
            amountUSD={plan.price}
            period="mes"
            features={plan.features}
          />
        ))}
      </div>
      
      <PricingLegalNote />
    </div>
  );
}

/**
 * Ejemplo 4: Conversión Manual
 */
export function CustomConversionExample() {
  const { country } = useCountry();
  const { convert } = useFx();
  
  const usdAmount = 1000;
  const localAmount = convert(usdAmount, 'USD', country.currency);
  
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">
        Conversión Manual - {country.name} {country.flag}
      </h3>
      
      <div className="space-y-2">
        <p>
          <span className="font-medium">USD:</span> ${usdAmount}
        </p>
        <p>
          <span className="font-medium">{country.currency}:</span>{' '}
          {formatCurrency(localAmount, country.currency, country.locale)}
        </p>
        <p className="text-sm text-gray-600">
          Tasa: 1 USD = {convert(1, 'USD', country.currency)} {country.currency}
        </p>
      </div>
    </div>
  );
}

/**
 * Ejemplo 5: Comparación de Monedas
 */
export function CurrencyComparisonExample() {
  const { country } = useCountry();
  const { convert } = useFx();
  
  const usdAmount = 500;
  const currencies = ['COP', 'CLP', 'PEN', 'USD'];
  
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">
        ${usdAmount} USD en Diferentes Monedas
      </h3>
      
      <div className="space-y-2">
        {currencies.map((curr) => (
          <div key={curr} className="flex justify-between items-center py-2 border-b">
            <span className="font-medium">{curr}:</span>
            <span className={curr === country.currency ? 'text-brand-orange font-bold' : ''}>
              {formatCurrency(convert(usdAmount, 'USD', curr), curr, 'es-419')}
            </span>
          </div>
        ))}
      </div>
      
      <p className="mt-4 text-xs text-gray-500">
        * País actual: {country.name} ({country.currency})
      </p>
    </div>
  );
}

/**
 * Ejemplo 6: Página de Pricing Completa
 */
export function FullPricingPageExample() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Planes y Precios</h1>
        <p className="text-xl text-gray-600">
          Elige el plan perfecto para tu empresa
        </p>
      </div>
      
      {/* Disclaimer */}
      <PricingDisclaimerBanner />
      
      {/* Planes */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-brand-orange transition">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Básico</h3>
            <p className="text-gray-600">Para empresas en crecimiento</p>
          </div>
          
          <div className="text-center mb-6">
            <Price amountUSD={250} size="xl" showFrom />
            <p className="text-sm text-gray-500 mt-2">por mes</p>
          </div>
          
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>Consultoría inicial</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>Análisis de procesos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>Reporte mensual</span>
            </li>
          </ul>
          
          <button className="w-full py-3 bg-brand-orange text-white rounded-lg hover:bg-brand-orange-dark transition">
            Comenzar ahora
          </button>
        </div>
        
        {/* Repetir para otros planes */}
      </div>
      
      {/* Legal Note */}
      <PricingLegalNote variant="card" />
      
      {/* FAQ */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          <details className="p-4 bg-white rounded-lg border">
            <summary className="font-medium cursor-pointer">
              ¿Por qué los precios están en USD?
            </summary>
            <p className="mt-2 text-gray-600">
              Operamos como exportadores de servicios desde Colombia. 
              Los precios en USD facilitan la transparencia internacional. <PricingLegalNoteInline />
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}

/**
 * Ejemplo Dashboard: Todos los componentes
 */
export function PricingDashboard() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold">Ejemplos de Pricing System</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <SimplePriceExample />
        <PriceSizesExample />
      </div>
      
      <CustomConversionExample />
      <CurrencyComparisonExample />
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Tabla de Precios Completa</h2>
        <PricingTableExample />
      </div>
    </div>
  );
}

