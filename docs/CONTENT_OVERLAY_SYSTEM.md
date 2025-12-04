# Content Overlay System - Documentación

## 📋 Resumen

Sistema de contenido base + overlays por país que permite mantener una sola estructura de diseño mientras se personaliza el contenido para cada país. Usa deep-merge para combinar contenido base con variaciones locales.

## ✅ Implementación Completada

**Fecha**: Diciembre 2024  
**Estado**: ✅ **COMPLETADO** - Sistema funcional con 5 países

---

## 🎯 Objetivo

Personalizar contenido por país sin duplicar diseño:

- ✅ Contenido base neutro (español general)
- ✅ Overlays por país (solo diferencias)
- ✅ Deep-merge automático
- ✅ Sin cambios en layout/estilos
- ✅ Legal stamp integrado en footer

---

## 🏗️ Arquitectura

### Estructura de Archivos

```
content/
├── base/
│   └── home.ts           ← Contenido neutro base
├── es/
│   └── home.ts           ← Overlay español general
├── es-co/
│   └── home.ts           ← Overlay Colombia
├── es-cl/
│   └── home.ts           ← Overlay Chile
├── es-pe/
│   └── home.ts           ← Overlay Perú
└── es-ec/
    └── home.ts           ← Overlay Ecuador
```

### Flujo de Merge

```
Base Content (100%)
    ↓
    + Overlay (solo diferencias)
    ↓
Deep Merge
    ↓
Content Final
```

---

## 📦 Componentes Implementados

### 1. `content/base/home.ts` - Contenido Base ✅

**Interface**:

```typescript
interface HomeContent {
  hero: {
    title: string;
    subtitle: string;
    cta: {
      primary: string;
      secondary: string;
    };
  };
  
  contact: {
    whatsapp: string;
    phone: string;
    email: string;
  };
  
  stats: {
    companies: string;
    countries: string;
    satisfaction: string;
    growth: string;
  };
  
  services: {
    title: string;
    subtitle: string;
  };
  
  testimonials: {
    title: string;
    subtitle: string;
  };
  
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  
  legal: {
    note: string;
  };
}
```

**Contenido Base**:

```typescript
export const baseHomeContent: HomeContent = {
  hero: {
    title: "Juntos forjamos el cambio que impulsa tu futuro",
    subtitle: "Transformamos PYMEs latinoamericanas...",
    cta: {
      primary: "Habla con un Forjador",
      secondary: "Rayos X Empresarial",
    },
  },
  // ... resto del contenido
};
```

### 2. Overlays por País ✅

Cada país define solo las diferencias:

**Colombia (`content/es-co/home.ts`)**:

```typescript
export const homeContentOverlay: Partial<HomeContent> = {
  hero: {
    title: "...en Colombia",  // Solo cambio específico
    // subtitle y cta heredan del base
  },
  
  contact: {
    whatsapp: "+57 300 123 4567",  // WhatsApp colombiano
    phone: "+57 (1) 123 4567",     // Teléfono colombiano
  },
  
  legal: {
    note: `...por ${ORG.legalName} – ${ORG.nit}`,
  },
};
```

**Chile (`content/es-cl/home.ts`)**:

```typescript
export const homeContentOverlay: Partial<HomeContent> = {
  hero: {
    title: "...en Chile",
  },
  
  contact: {
    whatsapp: "+56 9 1234 5678",
    phone: "+56 2 1234 5678",
  },
  // ... solo diferencias
};
```

### 3. Hook `useCountryContent` ✅

**Ubicación**: `lib/hooks/useCountryContent.ts`

**Características**:

```typescript
// En Client Component
const content = useCountryContent();

// En Server Component
const content = getCountryContent(params.lc);
```

**Lógica de Deep Merge**:

```typescript
function deepMerge<T>(base: T, overlay: Partial<T>): T {
  const result = { ...base };
  
  for (const key in overlay) {
    const overlayValue = overlay[key];
    const baseValue = base[key];
    
    // Si ambos son objetos → merge recursivo
    if (isObject(overlayValue) && isObject(baseValue)) {
      result[key] = deepMerge(baseValue, overlayValue);
    } else {
      // Sobrescribir directamente
      result[key] = overlayValue;
    }
  }
  
  return result;
}
```

### 4. Legal Stamp en Footer ✅

**Integración**: `components/layout/footer/Footer.tsx`

```typescript
import { LegalStamp } from '@/components/site/LegalStamp';

<LegalStamp compact className="text-gray-400" />
```

**Resultado Visual**:

```
Footer (bottom):
  © 2024 Forja Digital - AE. Todos los derechos reservados.
  
  Forja Digital AE SAS
  NIT 900.XXX.XXX-1 (Colombia)
  Exportación de servicios
```

---

## 💻 Ejemplos de Uso

### Caso 1: Usar en Client Component

```typescript
'use client';

import { useCountryContent } from '@/lib/hooks/useCountryContent';

export function Hero() {
  const content = useCountryContent();
  
  return (
    <div>
      <h1>{content.hero.title}</h1>
      <p>{content.hero.subtitle}</p>
      <button>{content.hero.cta.primary}</button>
    </div>
  );
}
```

### Caso 2: Usar en Server Component

```typescript
import { getCountryContent } from '@/lib/hooks/useCountryContent';

export default function HomePage({ params }: { params: { lc: string } }) {
  const content = getCountryContent(params.lc);
  
  return (
    <div>
      <h1>{content.hero.title}</h1>
      <p>{content.contact.whatsapp}</p>
    </div>
  );
}
```

### Caso 3: Mostrar Stats Localizados

```typescript
'use client';

import { useCountryContent } from '@/lib/hooks/useCountryContent';

export function Stats() {
  const content = useCountryContent();
  
  return (
    <div>
      <Stat value={content.stats.companies} />
      <Stat value={content.stats.countries} />
      <Stat value={content.stats.satisfaction} />
      <Stat value={content.stats.growth} />
    </div>
  );
}
```

---

## 🔄 Flujo de Contenido

### Colombia (es-co)

```
Base:
  hero.title = "Juntos forjamos el cambio que impulsa tu futuro"
  
Overlay:
  hero.title = "...en Colombia"
  
Merge:
  hero.title = "Juntos forjamos el cambio que impulsa tu futuro en Colombia"
```

### Chile (es-cl)

```
Base:
  contact.whatsapp = "+57 300 123 4567"
  
Overlay:
  contact.whatsapp = "+56 9 1234 5678"
  
Merge:
  contact.whatsapp = "+56 9 1234 5678"
```

### Sin Overlay

```
Si no hay overlay para un país:
  → Usa 100% del contenido base
  → No hay errores
  → Funciona perfectamente
```

---

## 📊 Contenido por País

### Colombia 🇨🇴

- **Título**: "...en Colombia"
- **WhatsApp**: +57 300 123 4567
- **Stats**: "+80 empresas colombianas"
- **Legal**: Incluye NIT y razón social

### Chile 🇨🇱

- **Título**: "...en Chile"
- **WhatsApp**: +56 9 1234 5678
- **Stats**: "+50 empresas chilenas"
- **Legal**: Incluye NIT y razón social

### Perú 🇵🇪

- **Título**: "...en Perú"
- **WhatsApp**: +51 987 654 321
- **Stats**: "+40 empresas peruanas"
- **Legal**: Incluye NIT y razón social

### Ecuador 🇪🇨

- **Título**: "...en Ecuador"
- **WhatsApp**: +593 98 765 4321
- **Stats**: "+30 empresas ecuatorianas"
- **Legal**: Incluye NIT y razón social

---

## 🎨 Sin Cambios en Diseño

### ✅ Lo que NO Cambia

- Layout de componentes
- Estilos CSS
- Estructura HTML
- Animaciones
- Navegación
- Header/Footer estructura

### ✨ Lo que SÍ Cambia

- Textos (títulos, descripciones)
- Números de contacto
- Estadísticas
- Nota legal

---

## 🧪 Testing

### Test 1: Contenido Base

```typescript
// Sin overlay definido
const content = getCountryContent('es-mx'); // México no tiene overlay

// ✅ Usa contenido base
expect(content.hero.title).toBe("Juntos forjamos el cambio...");
```

### Test 2: Overlay Colombia

```typescript
const content = getCountryContent('es-co');

// ✅ Usa overlay
expect(content.hero.title).toContain("en Colombia");
expect(content.contact.whatsapp).toBe("+57 300 123 4567");
```

### Test 3: Deep Merge

```typescript
const base = {
  hero: {
    title: "Base",
    subtitle: "Base subtitle",
  },
};

const overlay = {
  hero: {
    title: "Overlay",  // Sobrescribe
    // subtitle heredado
  },
};

const result = deepMerge(base, overlay);

expect(result.hero.title).toBe("Overlay");
expect(result.hero.subtitle).toBe("Base subtitle");
```

---

## 📝 Agregar Nuevo País

### Paso 1: Crear Overlay

```typescript
// content/es-mx/home.ts
import { ORG } from '@/lib/org';
import type { HomeContent } from '@/content/base/home';

export const homeContentOverlay: Partial<HomeContent> = {
  hero: {
    title: "Juntos forjamos el cambio que impulsa tu futuro en México",
  },
  
  contact: {
    whatsapp: "+52 55 1234 5678",
    phone: "+52 55 8765 4321",
  },
  
  stats: {
    companies: "+60 empresas mexicanas transformadas",
    countries: "Presencia en México y Latinoamérica",
  },
  
  legal: {
    note: `...por ${ORG.legalName} – ${ORG.nit}`,
  },
};
```

### Paso 2: Actualizar Hook

```typescript
// lib/hooks/useCountryContent.ts
switch (locale) {
  // ... casos existentes
  case 'es-mx':
    overlay = require('@/content/es-mx/home').homeContentOverlay;
    break;
}
```

### Paso 3: Listo!

```typescript
// Ya funciona automáticamente
const content = useCountryContent(); // En es-mx
console.log(content.contact.whatsapp); // "+52 55 1234 5678"
```

---

## 🔧 Mantenimiento

### Agregar Nueva Sección

**Paso 1**: Actualizar interface en `content/base/home.ts`

```typescript
interface HomeContent {
  // ... existentes
  
  faq: {
    title: string;
    items: Array<{ q: string; a: string }>;
  };
}
```

**Paso 2**: Agregar en base

```typescript
export const baseHomeContent: HomeContent = {
  // ... existentes
  
  faq: {
    title: "Preguntas frecuentes",
    items: [
      { q: "¿Qué es FORJA?", a: "..." },
    ],
  },
};
```

**Paso 3**: Sobrescribir en overlays (opcional)

```typescript
// content/es-co/home.ts
export const homeContentOverlay: Partial<HomeContent> = {
  // ... existentes
  
  faq: {
    title: "Preguntas frecuentes en Colombia",
    // items heredados del base
  },
};
```

---

## ♿ Accesibilidad

- ✅ Textos localizados mantienen semántica
- ✅ Legal Stamp con ARIA labels
- ✅ No afecta navegación por teclado
- ✅ Screen readers leen contenido correcto

---

## 🚀 Performance

- ✅ **Build Time**: Overlays se compilan una vez
- ✅ **Runtime**: Merge solo al cargar componente
- ✅ **Caching**: useMemo previene re-merge
- ✅ **Bundle Size**: Solo carga overlay necesario

---

## ✨ Beneficios

1. **DRY**: Sin duplicar estructura
2. **Mantenible**: Cambios en un lugar
3. **Escalable**: Fácil agregar países
4. **Type-Safe**: TypeScript en todo
5. **Flexible**: Sobrescribe lo necesario
6. **Legal**: Nota legal automática

---

## 📚 Referencias

- **Base Content**: `content/base/home.ts`
- **Hook**: `lib/hooks/useCountryContent.ts`
- **Legal Stamp**: `components/site/LegalStamp.tsx`
- **Footer**: `components/layout/footer/Footer.tsx`

---

**🎉 IMPLEMENTACIÓN COMPLETADA**

El sistema de overlays permite personalización por país sin duplicar código ni diseño.

---

_Generado por CURSOR - UX Engineer_  
_Fecha: Diciembre 2024_

