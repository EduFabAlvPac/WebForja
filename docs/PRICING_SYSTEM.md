## EXP-6: Sistema de Precios Multi-País

**Sistema implementado**: Precios en USD principal + moneda local referencial

---

### Componentes Implementados

#### 1. `lib/utils/format.ts` - Utilidades de Formato
- `formatCurrency()` - Formato con Intl
- `getCurrencySymbol()` - Símbolos de moneda
- `formatNumber()`, `formatPercentage()` - Formatos adicionales
- `formatCurrencyCompact()` - Formato K/M

#### 2. `lib/hooks/useFx.ts` - Tasas de Cambio
- Hook `useFx()` con conversión
- Tasas MOCK estáticas (USD base)
- TODO: Integrar API real
- Funciones helper para Server Components

#### 3. `components/pricing/Price.tsx` - Componente de Precio
- Colombia (CO): Muestra COP como principal
- Otros países: USD principal + badge con local aprox.
- Props: `amountUSD`, `showLocalRef`, `size`
- Variantes: `PriceSimple`, `PriceCard`

#### 4. `components/pricing/PricingLegalNote.tsx` - Leyenda Legal
- Muestra: "Valores orientativos. Facturación por ORG.legalName (Colombia)"
- Variantes: `default`, `compact`, `card`
- `PricingDisclaimerBanner` para páginas de pricing

---

### Uso Básico

```typescript
import { Price, PricingLegalNote } from '@/components/pricing';

// En Colombia: Muestra $400.000 COP
// En Chile: Muestra $100 USD + "≈ $90.000 CLP aprox."
<Price amountUSD={100} showLocalRef />
<PricingLegalNote />
```

---

### Tasas Mock Actuales

```typescript
USD: 1 (base)
COP: 4000    // 1 USD = 4000 COP
CLP: 900     // 1 USD = 900 CLP
PEN: 3.7     // 1 USD = 3.7 PEN
```

**TODO**: Integrar exchangerate-api.com u otra fuente real

---

### Criterios Cumplidos

✅ USD principal para CL/PE/EC, COP para CO
✅ Moneda local como referencia "aprox."
✅ Leyenda legal con ORG.legalName
✅ Formato correcto por país (Intl)
✅ No afecta LCP (client component)

