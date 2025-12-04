# Country Context - Ejemplos de Uso

Este directorio contiene componentes de ejemplo que demuestran cómo usar el `CountryContext` en diferentes escenarios.

## 📁 Archivo: `CountryExample.tsx`

Contiene múltiples componentes de ejemplo listos para usar como referencia.

## 🎯 Componentes Incluidos

### 1. `CountryInfo`
Muestra información básica del país actual (bandera, moneda, impuestos).

```tsx
import { CountryInfo } from '@/components/examples/CountryExample';

<CountryInfo />
```

### 2. `PriceDisplay`
Formatea y muestra precios según la moneda del país.

```tsx
import { PriceDisplay } from '@/components/examples/CountryExample';

<PriceDisplay amount={1500000} />
```

### 3. `TaxCalculator`
Calculadora de impuestos con base, tax y total.

```tsx
import { TaxCalculator } from '@/components/examples/CountryExample';

<TaxCalculator />
```

### 4. `LocalizedForm`
Formulario con campos localizados (NIT/RUT/RUC, teléfono).

```tsx
import { LocalizedForm } from '@/components/examples/CountryExample';

<LocalizedForm />
```

### 5. `WhatsAppButton`
Botón de WhatsApp con número localizado por país.

```tsx
import { WhatsAppButton } from '@/components/examples/CountryExample';

<WhatsAppButton />
```

### 6. `CountrySpecificContent`
Contenido condicional que cambia según el país.

```tsx
import { CountrySpecificContent } from '@/components/examples/CountryExample';

<CountrySpecificContent />
```

### 7. `CountryDashboard`
Dashboard completo que combina todos los ejemplos anteriores.

```tsx
import { CountryDashboard } from '@/components/examples/CountryExample';

<CountryDashboard />
```

## 🚀 Cómo Usar Estos Ejemplos

1. **Copiar el código**: Usa estos componentes como base para tus propios componentes
2. **Adaptar**: Modifica los estilos y funcionalidad según tus necesidades
3. **Aprender**: Estudia cómo se usa el hook `useCountry()` en cada caso

## 📖 Documentación Completa

Ver `docs/COUNTRY_CONTEXT_USAGE.md` para documentación detallada del CountryContext.

## ⚠️ Nota Importante

Estos componentes son **ejemplos educativos** y no están incluidos en la build de producción. Úsalos como referencia para implementar tu propia funcionalidad.

