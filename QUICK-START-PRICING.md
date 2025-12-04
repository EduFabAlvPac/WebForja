# 🚀 Quick Start - Sistema de Precios Multi-País

Guía ultra-rápida para usar el sistema de precios en 2 minutos.

## ✅ Ya Implementado

Sistema completo de precios con USD/COP principal y referencias locales. Funciona automáticamente por país.

---

## 🎯 Cómo Funciona

```
Colombia (CO):
  Input: $100 USD
  Output: $400.000 COP (principal)

Chile (CL):
  Input: $100 USD
  Output: $100 USD (principal)
          ≈ $90.000 CLP aprox. (referencia)

Perú (PE):
  Input: $100 USD
  Output: $100 USD (principal)
          ≈ S/370 PEN aprox. (referencia)
```

---

## 💡 Uso Básico

### Mostrar Precio Simple

```typescript
import { Price } from '@/components/pricing/Price';

// Con referencia local
<Price amountUSD={500} showLocalRef />

// Sin referencia local
<Price amountUSD={500} />
```

### Con Leyenda Legal

```typescript
import { Price, PricingLegalNote } from '@/components/pricing';

<Price amountUSD={500} showLocalRef />
<PricingLegalNote className="mt-4" />
```

### Tarjeta de Precio

```typescript
import { PriceCard } from '@/components/pricing/Price';

<PriceCard
  title="Plan Profesional"
  amountUSD={500}
  period="mes"
  features={[
    'Consultoría estratégica',
    'Implementación',
    'Soporte 24/7',
  ]}
/>
```

---

## 🌎 Por País

### Colombia 🇨🇴
```tsx
<Price amountUSD={100} />
// Muestra: $400.000 COP
```

### Chile 🇨🇱
```tsx
<Price amountUSD={100} showLocalRef />
// Muestra: $100 USD
//          ≈ $90.000 CLP aprox.
```

### Perú 🇵🇪
```tsx
<Price amountUSD={100} showLocalRef />
// Muestra: $100 USD
//          ≈ S/370 PEN aprox.
```

### Ecuador 🇪🇨
```tsx
<Price amountUSD={100} />
// Muestra: $100 USD
// (USD es moneda oficial, no muestra badge)
```

---

## 📦 Componentes Disponibles

### `<Price />`
Componente principal de precio

**Props**:
```typescript
amountUSD: number          // Monto en USD (requerido)
showLocalRef?: boolean     // Mostrar referencia local
size?: 'sm'|'md'|'lg'|'xl' // Tamaño
showFrom?: boolean         // Mostrar "Desde"
className?: string
```

### `<PriceSimple />`
Versión simplificada (sin badge)

### `<PriceCard />`
Tarjeta completa con features

### `<PricingLegalNote />`
Leyenda legal

**Variantes**:
- `variant="default"` - Con padding y border
- `variant="compact"` - Compacto
- `variant="card"` - En tarjeta

### `<PricingDisclaimerBanner />`
Banner destacado para páginas de pricing

---

## 🔧 Utilidades

### Formatear Moneda

```typescript
import { formatCurrency } from '@/lib/utils/format';

formatCurrency(1000000, 'COP', 'es-CO'); // "$1.000.000"
formatCurrency(1000, 'USD', 'es-CL'); // "$1,000"
formatCurrency(1000, 'PEN', 'es-PE'); // "S/1,000"
```

### Convertir Moneda

```typescript
import { useFx } from '@/lib/hooks/useFx';

const { convert } = useFx();

convert(100, 'USD', 'COP'); // 400000
convert(100, 'USD', 'CLP'); // 90000
convert(100, 'USD', 'PEN'); // 370
```

### Obtener Tasa

```typescript
const { getRate } = useFx();

getRate('USD', 'COP'); // 4000
getRate('USD', 'CLP'); // 900
```

---

## 🎨 Tamaños Disponibles

```tsx
<Price amountUSD={100} size="sm" />   // Texto pequeño
<Price amountUSD={100} size="md" />   // Texto mediano (default)
<Price amountUSD={100} size="lg" />   // Texto grande
<Price amountUSD={100} size="xl" />   // Texto extra grande
```

---

## 💰 Tasas Mock Actuales

| Moneda | Tasa (1 USD = X) |
|--------|------------------|
| USD | 1 (base) |
| COP | 4,000 |
| CLP | 900 |
| PEN | 3.7 |

⚠️ **Tasas MOCK**: Reemplazar con API real en producción

---

## 🧪 Testing Rápido

```typescript
// Test 1: Colombia
const { country } = useCountry(); // es-co
<Price amountUSD={100} />
// ✅ Debe mostrar: "$400.000 COP"

// Test 2: Chile con referencia
const { country } = useCountry(); // es-cl
<Price amountUSD={100} showLocalRef />
// ✅ Debe mostrar: "$100 USD"
// ✅ Badge: "≈ $90.000 CLP aprox."

// Test 3: Sin referencia
<Price amountUSD={100} showLocalRef={false} />
// ✅ Solo muestra USD, sin badge
```

---

## 📊 Ejemplo Completo

```typescript
'use client';

import { Price, PricingLegalNote, PricingDisclaimerBanner } from '@/components/pricing';

export function PricingSection() {
  return (
    <section className="py-12">
      <h2>Nuestros Precios</h2>
      
      {/* Disclaimer superior */}
      <PricingDisclaimerBanner className="mb-8" />
      
      <div className="grid md:grid-cols-3 gap-6">
        {/* Plan 1 */}
        <div className="pricing-card">
          <h3>Básico</h3>
          <Price amountUSD={250} size="xl" showFrom />
          <p className="text-sm text-gray-600">por mes</p>
        </div>
        
        {/* Plan 2 */}
        <div className="pricing-card">
          <h3>Profesional</h3>
          <Price amountUSD={500} size="xl" showFrom />
          <p className="text-sm text-gray-600">por mes</p>
        </div>
        
        {/* Plan 3 */}
        <div className="pricing-card">
          <h3>Empresarial</h3>
          <Price amountUSD={1000} size="xl" showFrom />
          <p className="text-sm text-gray-600">por mes</p>
        </div>
      </div>
      
      {/* Legal note inferior */}
      <PricingLegalNote className="mt-8" />
    </section>
  );
}
```

---

## ⚠️ Importante

### Tasas Mock

Las tasas actuales son **estáticas y aproximadas**. Para producción:

```typescript
// TODO: Integrar API real
// Ver comentarios en lib/hooks/useFx.ts
```

### API Recomendadas

1. **exchangerate-api.com** (gratis hasta 1500/mes)
2. **openexchangerates.org** (gratis limitado)
3. **fixer.io** (gratis limitado)

---

## 🐛 Debug

### Verificar Conversión

```typescript
const { convert } = useFx();
console.log(convert(100, 'USD', 'COP')); // 400000
```

### Verificar Formato

```typescript
import { formatCurrency } from '@/lib/utils/format';
console.log(formatCurrency(400000, 'COP', 'es-CO'));
```

### Verificar País

```typescript
const { country } = useCountry();
console.log(country.code); // 'co', 'cl', etc.
console.log(country.currency); // 'COP', 'CLP', etc.
```

---

## 📚 Docs Completas

- 📖 **Guía Completa**: `docs/PRICING_SYSTEM.md`
- 📄 **Resumen**: `EXP-6-IMPLEMENTACION-COMPLETA.md`
- 🌎 **Country Context**: `docs/COUNTRY_CONTEXT_USAGE.md`

---

## 🎉 Listo para Usar

El sistema funciona **automáticamente** según el país del usuario. Solo importa y usa! 🚀

---

**¿Dudas?** Revisa la documentación completa en los links de arriba.

