# 🚀 Quick Start - Country Context

Guía rápida para empezar a usar el Country Context en 5 minutos.

## ✅ Ya Implementado

El sistema de rutas por país ya está configurado y funcionando:

```
✅ /es       → Español general
✅ /es-co    → Colombia 🇨🇴
✅ /es-cl    → Chile 🇨🇱
✅ /es-pe    → Perú 🇵🇪
✅ /es-ec    → Ecuador 🇪🇨
```

## 🎯 Uso Básico en 3 Pasos

### Paso 1: Importar el Hook

```tsx
'use client';

import { useCountry } from '@/context/CountryProvider';
```

### Paso 2: Usar en tu Componente

```tsx
export function MyComponent() {
  const { country, formatPrice } = useCountry();
  
  return (
    <div>
      <h1>Bienvenido a {country.name} {country.flag}</h1>
      <p>Precio: {formatPrice(100000)}</p>
    </div>
  );
}
```

### Paso 3: ¡Listo!

Tu componente ahora se adapta automáticamente según la URL:
- `/es-co/tu-pagina` → Muestra "Colombia 🇨🇴" y "$100.000"
- `/es-cl/tu-pagina` → Muestra "Chile 🇨🇱" y "$100.000"
- `/es-pe/tu-pagina` → Muestra "Perú 🇵🇪" y "S/100.000"

## 📦 Qué Incluye

```typescript
const {
  country,         // Info completa del país
  locale,          // 'es-co', 'es-cl', etc.
  formatPrice,     // Formatea precios
  getTaxLabel,     // "IVA (19%)", "IGV (18%)"
  calculateTax,    // Calcula impuestos
  calculateTotal,  // Base + impuestos
  isCountry,       // Verifica país específico
} = useCountry();
```

## 💡 Ejemplos Rápidos

### Formatear Precio

```tsx
const { formatPrice } = useCountry();
formatPrice(1500000); // "$1.500.000" en CO/CL, "S/1.500.000" en PE
```

### Campo de Formulario Dinámico

```tsx
const { country } = useCountry();

<label>
  {country.taxLabelClient}: {/* "NIT" en CO, "RUT" en CL, "RUC" en PE/EC */}
  <input placeholder={country.taxIdFormat} />
</label>
```

### WhatsApp Localizado

```tsx
const { country } = useCountry();

<a href={`https://wa.me/${country.whatsapp.replace(/\s/g, '')}`}>
  Contactar {country.flag}
</a>
```

### Contenido por País

```tsx
const { isCountry } = useCountry();

{isCountry('co') && (
  <div>Promoción exclusiva para Colombia! 🇨🇴</div>
)}
```

## 📚 Documentación Completa

- 📖 **Guía Detallada**: `docs/COUNTRY_CONTEXT_USAGE.md`
- 🎨 **Ejemplos Visuales**: `components/examples/CountryExample.tsx`
- 📄 **Resumen Técnico**: `EXP-2-IMPLEMENTACION-COMPLETA.md`

## 🧪 Probar Localmente

```bash
# Iniciar servidor
npm run dev

# Probar diferentes países
http://localhost:3000/es      # Internacional
http://localhost:3000/es-co   # Colombia
http://localhost:3000/es-cl   # Chile
http://localhost:3000/es-pe   # Perú
http://localhost:3000/es-ec   # Ecuador
```

## 🎓 Países Configurados

| País | Moneda | Tax ID | Impuesto | WhatsApp |
|------|--------|--------|----------|----------|
| 🇨🇴 Colombia | COP $ | NIT | IVA 19% | +57 300... |
| 🇨🇱 Chile | CLP $ | RUT | IVA 19% | +56 9... |
| 🇵🇪 Perú | PEN S/ | RUC | IGV 18% | +51 987... |
| 🇪🇨 Ecuador | USD $ | RUC | IVA 12% | +593 98... |

## ⚡ Pro Tips

1. **Client Components**: El hook `useCountry()` requiere `'use client'`
2. **Server Components**: Usa `getCountryByLocale(params.lc)` directamente
3. **Links**: Siempre incluye el locale: `/${locale}/servicios`
4. **TypeScript**: Aprovecha el autocompletado automático

## 🔗 Navegación

```tsx
import Link from 'next/link';

// ✅ Correcto
<Link href={`/${locale}/servicios`}>Servicios</Link>

// ❌ Incorrecto (sin locale)
<Link href="/servicios">Servicios</Link>
```

## 🎨 UI Sin Cambios

La UI visual **NO cambia automáticamente**. El contexto está disponible para que lo uses cuando lo necesites. Esto te da control total sobre qué personalizar y cuándo.

## 🚀 Próximos Pasos

1. Ver ejemplos en `components/examples/CountryExample.tsx`
2. Adaptar componentes existentes para usar el contexto
3. Agregar selector de país en el header (opcional)
4. Personalizar precios y formularios por país

---

**¿Dudas?** Revisa la documentación completa en `docs/COUNTRY_CONTEXT_USAGE.md`

