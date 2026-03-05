# Country Context - Guía de Uso

## 📋 Resumen

Sistema de rutas localizadas por país que provee contexto de moneda, impuestos, etiquetas fiscales y contacto personalizado para cada región. Soporta Colombia, Chile, Perú, Ecuador y un español general.

## 🎯 URLs Soportadas

```
/es          → Español general (internacional)
/es-co       → Colombia 🇨🇴
/es-cl       → Chile 🇨🇱
/es-pe       → Perú 🇵🇪
/es-ec       → Ecuador 🇪🇨
```

**Redirección Automática**: Navegar a `/` redirige a `/es` por defecto.

## 🏗️ Arquitectura Implementada

### 1. `lib/country.ts` - Configuración de Países

Mapeo completo de países con toda la información localizada:

```typescript
import { COUNTRIES, getCountryByLocale } from '@/lib/country';

// Obtener configuración de Colombia
const colombia = COUNTRIES['es-co'];

console.log(colombia.currency);      // "COP"
console.log(colombia.taxLabelClient); // "NIT"
console.log(colombia.tax.name);      // "IVA"
console.log(colombia.tax.rate);      // 19
```

#### Propiedades Disponibles

```typescript
interface CountryConfig {
  code: 'co' | 'cl' | 'pe' | 'ec' | 'default';
  lc: 'es' | 'es-co' | 'es-cl' | 'es-pe' | 'es-ec';
  name: string;              // "Colombia"
  fullName: string;          // "República de Colombia"
  currency: string;          // "COP", "CLP", "PEN", "USD"
  currencySymbol: string;    // "$", "S/"
  taxLabelClient: string;    // "NIT", "RUT", "RUC"
  taxLabelCompany: string;   // "NIT", "RUT", "RUC"
  whatsapp: string;          // "+57 300 123 4567"
  phone: string;             // "+57 (1) 123 4567"
  locale: string;            // "es-CO", "es-CL", etc.
  dialCode: string;          // "+57", "+56", etc.
  taxIdFormat?: string;      // "XXX.XXX.XXX-X"
  tax: {
    name: string;            // "IVA", "IGV"
    rate: number;            // 19, 18, 12
  };
  flag: string;              // "🇨🇴", "🇨🇱", etc.
}
```

#### Funciones Helper

```typescript
// Formatear precios
import { formatPrice } from '@/lib/country';
formatPrice(1000000, COUNTRIES['es-co']); // "$1.000.000"
formatPrice(1000000, COUNTRIES['es-cl']); // "$1.000.000"
formatPrice(1000, COUNTRIES['es-pe']);    // "S/1.000"

// Obtener label de impuesto
import { getTaxLabel } from '@/lib/country';
getTaxLabel(COUNTRIES['es-co']); // "IVA (19%)"
getTaxLabel(COUNTRIES['es-pe']); // "IGV (18%)"

// Calcular impuestos
import { calculateTax, calculateTotal } from '@/lib/country';
const base = 100000;
calculateTax(base, COUNTRIES['es-co']);    // 19000
calculateTotal(base, COUNTRIES['es-co']);  // 119000
```

### 2. `context/CountryProvider.tsx` - Context Provider

Provee contexto de país a toda la aplicación basado en la URL.

#### Uso en Componentes

```typescript
'use client';

import { useCountry } from '@/context/CountryProvider';

export function ProductPrice({ amount }: { amount: number }) {
  const { country, formatPrice } = useCountry();
  
  return (
    <div>
      <p className="text-2xl font-bold">
        {formatPrice(amount)}
      </p>
      <p className="text-sm text-gray-600">
        Precio en {country.currency} {country.flag}
      </p>
    </div>
  );
}
```

#### Formularios con Labels Dinámicos

```typescript
'use client';

import { useCountry } from '@/context/CountryProvider';

export function ContactForm() {
  const { country } = useCountry();
  
  return (
    <form>
      <label htmlFor="tax-id">
        {country.taxLabelClient}:
      </label>
      <input
        id="tax-id"
        type="text"
        placeholder={country.taxIdFormat}
      />
      
      <label htmlFor="phone">
        Teléfono ({country.dialCode}):
      </label>
      <input
        id="phone"
        type="tel"
        placeholder={country.phone}
      />
    </form>
  );
}
```

#### Información de Contacto Localizada

```typescript
'use client';

import { useCountry } from '@/context/CountryProvider';

export function ContactInfo() {
  const { country } = useCountry();
  
  return (
    <div>
      <h3>Contáctanos en {country.name}</h3>
      <p>WhatsApp: {country.whatsapp}</p>
      <p>Teléfono: {country.phone}</p>
      <a 
        href={`https://wa.me/${country.whatsapp.replace(/\s/g, '')}`}
        className="btn"
      >
        Chatear por WhatsApp {country.flag}
      </a>
    </div>
  );
}
```

#### Verificar País Específico

```typescript
'use client';

import { useCountry } from '@/context/CountryProvider';

export function ColombiaOnlyFeature() {
  const { isCountry } = useCountry();
  
  if (!isCountry('co')) {
    return null; // No mostrar en otros países
  }
  
  return (
    <div>
      <h3>¡Promoción especial para Colombia! 🇨🇴</h3>
      <p>Esta oferta solo está disponible en Colombia.</p>
    </div>
  );
}
```

### 3. Hooks Disponibles

#### `useCountry()` - Hook Principal

```typescript
const {
  country,         // CountryConfig completo
  locale,          // 'es-co', 'es-cl', etc.
  formatPrice,     // (amount) => string
  getTaxLabel,     // () => string
  calculateTax,    // (amount) => number
  calculateTotal,  // (amount) => number
  isCountry,       // (code) => boolean
} = useCountry();
```

#### `useCountryOptional()` - Hook Opcional

Para componentes que pueden funcionar con o sin contexto:

```typescript
import { useCountryOptional } from '@/context/CountryProvider';

export function OptionalCountryComponent() {
  const countryContext = useCountryOptional();
  
  if (!countryContext) {
    return <div>Sin información de país</div>;
  }
  
  return <div>País: {countryContext.country.name}</div>;
}
```

#### `withCountry()` - HOC

Para inyectar el contexto como props:

```typescript
import { withCountry } from '@/context/CountryProvider';
import { CountryConfig } from '@/lib/country';

interface MyComponentProps {
  country: CountryConfig;
  otherProp: string;
}

function MyComponent({ country, otherProp }: MyComponentProps) {
  return <div>{country.name}: {otherProp}</div>;
}

export default withCountry(MyComponent);
```

## 💼 Casos de Uso Comunes

### Precios Dinámicos

```typescript
'use client';

import { useCountry } from '@/context/CountryProvider';

export function ServicePricing() {
  const { country, formatPrice, getTaxLabel } = useCountry();
  
  const basePrice = 1000000; // Precio base
  
  return (
    <div className="pricing-card">
      <h3>Plan Profesional</h3>
      <div className="price">
        {formatPrice(basePrice)}
        <span className="currency">/{country.currency}</span>
      </div>
      <p className="tax-info">
        + {getTaxLabel()} calculado al finalizar
      </p>
    </div>
  );
}
```

### Landing Page Localizada

```typescript
'use client';

import { useCountry } from '@/context/CountryProvider';

export function LocalizedHero() {
  const { country } = useCountry();
  
  const messages = {
    co: "Transformamos PYMEs colombianas",
    cl: "Impulsamos empresas chilenas",
    pe: "Crecimiento para empresas peruanas",
    ec: "Innovación para empresas ecuatorianas",
    default: "Transformación digital en Latinoamérica",
  };
  
  return (
    <section className="hero">
      <h1>{messages[country.code] || messages.default}</h1>
      <p>Operamos en {country.fullName} {country.flag}</p>
    </section>
  );
}
```

### Formulario de Cotización

```typescript
'use client';

import { useCountry } from '@/context/CountryProvider';

export function QuoteCalculator() {
  const { country, formatPrice, calculateTotal } = useCountry();
  const [baseAmount, setBaseAmount] = useState(1000000);
  
  const total = calculateTotal(baseAmount);
  
  return (
    <div>
      <h3>Calculadora de Cotización - {country.name}</h3>
      
      <label>
        Monto Base ({country.currency}):
        <input 
          type="number" 
          value={baseAmount}
          onChange={(e) => setBaseAmount(Number(e.target.value))}
        />
      </label>
      
      <div className="summary">
        <p>Base: {formatPrice(baseAmount)}</p>
        <p>{country.tax.name} ({country.tax.rate}%): {formatPrice(calculateTax(baseAmount))}</p>
        <p className="total">Total: {formatPrice(total)}</p>
      </div>
    </div>
  );
}
```

### Metadata Dinámica (Server Component)

```typescript
import { getCountryByLocale } from '@/lib/country';
import { Metadata } from 'next';

interface PageProps {
  params: { lc: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const country = getCountryByLocale(params.lc);
  
  return {
    title: `Servicios en ${country.name}`,
    description: `Transformación digital para empresas en ${country.fullName}`,
    openGraph: {
      locale: country.locale.replace('-', '_'),
    },
  };
}

export default function ServicesPage({ params }: PageProps) {
  return <div>Servicios localizados</div>;
}
```

## 🔄 Navegación entre Países

### Selector de País

```typescript
'use client';

import { useCountry } from '@/context/CountryProvider';
import { COUNTRIES, SUPPORTED_LOCALES } from '@/lib/country';
import { useRouter, usePathname } from 'next/navigation';

export function CountrySelector() {
  const { locale } = useCountry();
  const router = useRouter();
  const pathname = usePathname();
  
  const handleChange = (newLocale: string) => {
    // Reemplazar el locale en la URL
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };
  
  return (
    <select 
      value={locale} 
      onChange={(e) => handleChange(e.target.value)}
      className="country-selector"
    >
      {SUPPORTED_LOCALES.map((lc) => (
        <option key={lc} value={lc}>
          {COUNTRIES[lc].flag} {COUNTRIES[lc].name}
        </option>
      ))}
    </select>
  );
}
```

### Links Internos

```typescript
import Link from 'next/link';

// En Server Components, recibir params
export function Navigation({ locale }: { locale: string }) {
  return (
    <nav>
      <Link href={`/${locale}/servicios`}>Servicios</Link>
      <Link href={`/${locale}/nosotros`}>Nosotros</Link>
      <Link href={`/${locale}/contacto`}>Contacto</Link>
    </nav>
  );
}

// En Client Components, usar el hook
'use client';
import { useCountry } from '@/context/CountryProvider';

export function ClientNavigation() {
  const { locale } = useCountry();
  
  return (
    <nav>
      <Link href={`/${locale}/servicios`}>Servicios</Link>
      <Link href={`/${locale}/nosotros`}>Nosotros</Link>
      <Link href={`/${locale}/contacto`}>Contacto</Link>
    </nav>
  );
}
```

## ⚙️ Configuración por País

### Colombia 🇨🇴 (`es-co`)

```typescript
{
  code: 'co',
  currency: 'COP',
  currencySymbol: '$',
  taxLabelClient: 'NIT',
  tax: { name: 'IVA', rate: 19 },
  dialCode: '+57',
}
```

### Chile 🇨🇱 (`es-cl`)

```typescript
{
  code: 'cl',
  currency: 'CLP',
  currencySymbol: '$',
  taxLabelClient: 'RUT',
  tax: { name: 'IVA', rate: 19 },
  dialCode: '+56',
}
```

### Perú 🇵🇪 (`es-pe`)

```typescript
{
  code: 'pe',
  currency: 'PEN',
  currencySymbol: 'S/',
  taxLabelClient: 'RUC',
  tax: { name: 'IGV', rate: 18 },
  dialCode: '+51',
}
```

### Ecuador 🇪🇨 (`es-ec`)

```typescript
{
  code: 'ec',
  currency: 'USD',
  currencySymbol: '$',
  taxLabelClient: 'RUC',
  tax: { name: 'IVA', rate: 12 },
  dialCode: '+593',
}
```

## 🧪 Testing

### Testar Componentes con CountryProvider

```typescript
import { render } from '@testing-library/react';
import { CountryProvider } from '@/context/CountryProvider';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders with Colombia context', () => {
    render(
      <CountryProvider locale="es-co">
        <MyComponent />
      </CountryProvider>
    );
    
    // Assertions...
  });
  
  it('renders with Chile context', () => {
    render(
      <CountryProvider locale="es-cl">
        <MyComponent />
      </CountryProvider>
    );
    
    // Assertions...
  });
});
```

## 📝 Notas Importantes

1. **Client Components**: El hook `useCountry()` solo funciona en Client Components (`'use client'`)
2. **Server Components**: Usar `getCountryByLocale(params.lc)` directamente
3. **Middleware**: Redirige automáticamente `/` a `/es`
4. **TypeScript**: Toda la configuración está fuertemente tipada
5. **Performance**: El contexto usa `useMemo` para evitar re-renders innecesarios

## 🚀 Próximas Mejoras (Opcionales)

- [ ] Detectar país automáticamente por IP (GeoIP)
- [ ] Persistir preferencia de país en localStorage
- [ ] Agregar más países (México, Argentina, etc.)
- [ ] Traducción de contenido por país
- [ ] A/B testing por región

---

**Implementado por**: CURSOR (Next.js Architect)  
**Fecha**: Diciembre 2024  
**Estado**: ✅ Completo y listo para uso

