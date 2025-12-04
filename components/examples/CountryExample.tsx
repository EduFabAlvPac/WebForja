/**
 * FORJA DIGITAL - Country Context Example Component
 * 
 * Componente de ejemplo que demuestra el uso del CountryContext.
 * Este archivo es solo para referencia y no se usa en producción.
 * 
 * @module components/examples/CountryExample
 */

'use client';

import { useCountry } from '@/context/CountryProvider';

/**
 * Ejemplo 1: Mostrar información básica del país
 */
export function CountryInfo() {
  const { country } = useCountry();
  
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2">
        {country.flag} {country.name}
      </h3>
      <div className="space-y-1 text-sm text-gray-600">
        <p>Moneda: {country.currency} ({country.currencySymbol})</p>
        <p>ID Fiscal: {country.taxLabelClient}</p>
        <p>Impuesto: {country.tax.name} ({country.tax.rate}%)</p>
        <p>Código de país: +{country.dialCode}</p>
      </div>
    </div>
  );
}

/**
 * Ejemplo 2: Formatear precios según el país
 */
export function PriceDisplay({ amount }: { amount: number }) {
  const { formatPrice, country } = useCountry();
  
  return (
    <div className="p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg">
      <p className="text-sm text-gray-600 mb-1">Precio en {country.name}</p>
      <p className="text-3xl font-bold text-orange-600">
        {formatPrice(amount)}
      </p>
    </div>
  );
}

/**
 * Ejemplo 3: Calculadora de impuestos
 */
export function TaxCalculator() {
  const { country, formatPrice, calculateTax, calculateTotal, getTaxLabel } = useCountry();
  
  const baseAmount = 1000000;
  const tax = calculateTax(baseAmount);
  const total = calculateTotal(baseAmount);
  
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">
        Calculadora de Cotización - {country.name} {country.flag}
      </h3>
      
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">Base:</span>
          <span className="font-semibold">{formatPrice(baseAmount)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">{getTaxLabel()}:</span>
          <span className="font-semibold text-orange-600">{formatPrice(tax)}</span>
        </div>
        
        <div className="border-t pt-3 flex justify-between">
          <span className="font-bold">Total:</span>
          <span className="font-bold text-2xl">{formatPrice(total)}</span>
        </div>
      </div>
    </div>
  );
}

/**
 * Ejemplo 4: Formulario con campos localizados
 */
export function LocalizedForm() {
  const { country } = useCountry();
  
  return (
    <form className="space-y-4 p-6 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">
        Formulario de Contacto - {country.name}
      </h3>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {country.taxLabelClient}
        </label>
        <input
          type="text"
          placeholder={country.taxIdFormat || `Ingresa tu ${country.taxLabelClient}`}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Teléfono ({country.dialCode})
        </label>
        <input
          type="tel"
          placeholder={country.phone}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      
      <button 
        type="submit"
        className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition"
      >
        Enviar
      </button>
    </form>
  );
}

/**
 * Ejemplo 5: Botón de WhatsApp localizado
 */
export function WhatsAppButton() {
  const { country } = useCountry();
  
  const whatsappUrl = `https://wa.me/${country.whatsapp.replace(/[\s-]/g, '')}`;
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
      Contáctanos vía WhatsApp {country.flag}
    </a>
  );
}

/**
 * Ejemplo 6: Contenido condicional por país
 */
export function CountrySpecificContent() {
  const { isCountry, country } = useCountry();
  
  if (isCountry('co')) {
    return (
      <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
        <h4 className="font-semibold text-yellow-800">¡Promoción especial para Colombia! 🇨🇴</h4>
        <p className="text-sm text-yellow-700 mt-1">
          Obtén un 20% de descuento en todos nuestros servicios.
        </p>
      </div>
    );
  }
  
  return (
    <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
      <h4 className="font-semibold text-blue-800">Servicios en {country.name} {country.flag}</h4>
      <p className="text-sm text-blue-700 mt-1">
        Descubre nuestras soluciones personalizadas para tu región.
      </p>
    </div>
  );
}

/**
 * Ejemplo Completo: Dashboard con múltiples usos del contexto
 */
export function CountryDashboard() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Ejemplos de Country Context</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CountryInfo />
        <PriceDisplay amount={1500000} />
        <TaxCalculator />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LocalizedForm />
        <div className="space-y-4">
          <WhatsAppButton />
          <CountrySpecificContent />
        </div>
      </div>
    </div>
  );
}

