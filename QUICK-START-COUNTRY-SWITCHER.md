# 🚀 Quick Start - Country Switcher

Guía ultra-rápida para entender y usar el Country Switcher en 2 minutos.

## ✅ Ya Implementado y Funcionando

El selector de país está **ya integrado en el header** (desktop y mobile). No requiere configuración adicional.

---

## 🎯 Dónde Está

### Desktop
```
Header → Lado derecho → Entre Navigation y botones CTA
[Logo]  [Nav]  [🌐 🇨🇴 Colombia ▼]  [Rayos X] [Habla con Forjador]
```

### Mobile
```
Menú hamburguesa → Sección "Seleccionar País"
Antes de los botones "Rayos X" y "Habla con Forjador"
```

---

## 💡 Cómo Funciona

### Usuario Final

```
1. Click en selector → Dropdown se abre
2. Selecciona Chile 🇨🇱
3. ✨ Mágicamente:
   - URL cambia de /es-co/* a /es-cl/*
   - Página recarga con contexto chileno
   - Cookie guardada por 6 meses
   - Próximas visitas: auto Chile
```

### Developer

```typescript
// El componente ya usa:
import { useCountry } from '@/context/CountryProvider';
import { setCountryPreference } from '@/lib/utils/cookies-country';

// Cuando usuario cambia país:
setCountryPreference('es-cl');  // Cookie por 6 meses
router.push('/es-cl/servicios'); // Nueva URL
```

---

## 🍪 Cookie Guardada

**Nombre**: `forja_lc`  
**Valor**: `es-co`, `es-cl`, `es-pe`, `es-ec`, o `es`  
**Duración**: 180 días (6 meses)  
**Path**: `/` (todo el sitio)

### Ver en DevTools

```
Chrome DevTools
  → Application
    → Cookies
      → localhost
        → forja_lc
```

---

## 🎨 Países Disponibles

| Bandera | País | Locale | Moneda |
|---------|------|--------|--------|
| 🌎 | Internacional | `es` | USD |
| 🇨🇴 | Colombia | `es-co` | COP |
| 🇨🇱 | Chile | `es-cl` | CLP |
| 🇵🇪 | Perú | `es-pe` | PEN |
| 🇪🇨 | Ecuador | `es-ec` | USD |

---

## 🔧 Uso en Tu Código

### Leer Preferencia Guardada

```typescript
import { getCountryPreference } from '@/lib/utils/cookies-country';

const savedLocale = getCountryPreference();
if (savedLocale) {
  console.log(`Usuario prefiere: ${savedLocale}`);
}
```

### Guardar Preferencia Manualmente

```typescript
import { setCountryPreference } from '@/lib/utils/cookies-country';

// Guardar Colombia
setCountryPreference('es-co');
```

### Verificar Si Existe

```typescript
import { hasCountryPreference } from '@/lib/utils/cookies-country';

if (hasCountryPreference()) {
  console.log('Usuario ya tiene preferencia guardada');
}
```

### Limpiar Preferencia

```typescript
import { clearCountryPreference } from '@/lib/utils/cookies-country';

clearCountryPreference();
```

---

## 🧪 Probar

### Test 1: Cambio Básico

```bash
1. Abrir: http://localhost:3000/es-co/servicios
2. Click en selector (muestra 🇨🇴 Colombia)
3. Seleccionar 🇨🇱 Chile
4. ✅ URL ahora: /es-cl/servicios
5. ✅ Cookie: forja_lc=es-cl
```

### Test 2: Persistencia

```bash
1. Seleccionar un país
2. Cerrar navegador
3. Abrir de nuevo
4. ✅ Sigue en el país seleccionado
```

---

## 📦 Componente Standalone

Si quieres usar el selector en otra parte:

```tsx
import { CountrySwitcher } from '@/components/country/CountrySwitcher';

// Estándar
<CountrySwitcher />

// Compacto (solo bandera)
<CountrySwitcher compact />

// Solo desktop
<CountrySwitcher desktopOnly />

// Solo mobile
<CountrySwitcher mobileOnly />
```

---

## 🎯 Props Disponibles

```typescript
interface CountrySwitcherProps {
  className?: string;        // CSS adicional
  desktopOnly?: boolean;     // Ocultar en mobile
  mobileOnly?: boolean;      // Ocultar en desktop
  compact?: boolean;         // Solo bandera, sin texto
}
```

---

## ⚡ Features

- ✅ Banderas emoji visuales
- ✅ Información de moneda e impuesto
- ✅ Actualización automática de URL
- ✅ Cookie persistente (6 meses)
- ✅ Cierre con Escape o clic fuera
- ✅ Accesible por teclado
- ✅ Responsive design
- ✅ Animaciones suaves

---

## 🐛 Debug Rápido

### Cookie no se guarda

```typescript
// En console del navegador
import { getCountryPreference } from '@/lib/utils/cookies-country';
console.log(getCountryPreference());
```

### URL no cambia

```typescript
// Verificar que estás en ruta localizada
console.log(window.location.pathname); // Debe ser /es-co/...
```

---

## 📚 Docs Completas

- 📖 **Implementación Detallada**: `docs/COUNTRY_SWITCHER_IMPLEMENTATION.md`
- 📄 **Resumen Ejecutivo**: `EXP-3-IMPLEMENTACION-COMPLETA.md`
- 🌎 **Country Context**: `docs/COUNTRY_CONTEXT_USAGE.md`

---

## 🎉 Listo para Usar

El Country Switcher está **completamente funcional** y no requiere configuración adicional. Solo úsalo! 🚀

---

**¿Dudas?** Revisa la documentación completa en los links de arriba.

