# Pricing Components

Sistema completo de precios multi-país con conversión de monedas y leyendas legales.

## 📦 Componentes Disponibles

### `<Price />`
Componente principal que muestra precios con conversión automática.

**Comportamiento por país**:
- **Colombia**: Muestra COP como principal
- **Otros**: Muestra USD + badge con moneda local aproximada

```tsx
<Price amountUSD={500} showLocalRef />
```

### `<PriceSimple />`
Versión simplificada sin badge de referencia local.

```tsx
<PriceSimple amountUSD={250} size="lg" />
```

### `<PriceCard />`
Tarjeta completa con título, precio y lista de características.

```tsx
<PriceCard
  title="Plan Profesional"
  amountUSD={500}
  period="mes"
  features={['Feature 1', 'Feature 2']}
/>
```

### `<PricingLegalNote />`
Leyenda legal sobre facturación desde Colombia.

```tsx
<PricingLegalNote />
<PricingLegalNote variant="compact" />
<PricingLegalNote variant="card" />
```

### `<PricingLegalNoteInline />`
Versión inline para usar dentro de párrafos.

```tsx
<p>Precios orientativos. <PricingLegalNoteInline /></p>
```

### `<PricingDisclaimerBanner />`
Banner destacado para páginas de pricing.

```tsx
<PricingDisclaimerBanner className="mb-8" />
```

---

## 🌎 Ejemplos por País

### Colombia 🇨🇴

```tsx
<Price amountUSD={100} />
// Output: $400.000 COP
```

### Chile 🇨🇱

```tsx
<Price amountUSD={100} showLocalRef />
// Output: $100 USD
//         ≈ $90.000 CLP aprox.
```

### Perú 🇵🇪

```tsx
<Price amountUSD={100} showLocalRef />
// Output: $100 USD
//         ≈ S/370 PEN aprox.
```

---

## 📚 Documentación

- 📖 **Sistema Completo**: `docs/PRICING_SYSTEM.md`
- 🎨 **Ejemplos**: `components/examples/PricingExample.tsx`
- 🚀 **Quick Start**: `QUICK-START-PRICING.md`

---

## ⚠️ Nota Importante

Las tasas de cambio actuales son **MOCK (estáticas)**. Para producción, integrar API real. Ver TODO en `lib/hooks/useFx.ts`.

