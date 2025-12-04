# Sistema de Overlays para Servicios

**Versión**: 1.0  
**Fecha**: Diciembre 2024  
**Objetivo**: Contenido base + overlays por país para páginas de servicios

---

## 🎯 Concepto

Sistema que permite tener un **contenido base neutro** de servicios y **overlays específicos por país** que sobrescriben únicamente las partes que cambian (testimonios, casos de estudio, ubicaciones, teléfonos).

```
BASE (neutral) + OVERLAY (país específico) = CONTENIDO FINAL
```

---

## 📁 Estructura de Archivos

```
content/
├── base/
│   └── servicios/
│       └── comercial-servicio-cliente.ts    ✨ Base neutro
│
├── es-co/
│   └── servicios/
│       └── comercial-servicio-cliente.ts    ✨ Overlay Colombia
│
├── es-cl/
│   └── servicios/
│       └── comercial-servicio-cliente.ts    ✨ Overlay Chile
│
├── es-pe/
│   └── servicios/
│       └── comercial-servicio-cliente.ts    ✨ Overlay Perú
│
└── es-ec/
    └── servicios/
        └── comercial-servicio-cliente.ts    ✨ Overlay Ecuador
```

---

## 🔧 Cómo Funciona

### 1. Contenido Base

El archivo base contiene **todo el contenido** del servicio de forma neutra:

```typescript
// content/base/servicios/comercial-servicio-cliente.ts

export const baseComercialServicioData: ServicePageData = {
  hero: {
    title: 'Comercial y Servicio al Cliente',
    subtitle: '...',
    // ... todo el contenido base
  },
  problems: [...],
  components: [...],
  methodology: [...],
  caseStudy: {
    company: {
      name: 'Empresa Internacional',
      location: 'Latinoamérica',  // Genérico
    },
    // ...
  },
  cta: {...}
};
```

### 2. Overlays por País

Los overlays son **parciales** y solo sobrescriben lo que cambia:

```typescript
// content/es-co/servicios/comercial-servicio-cliente.ts

export const overlayComercialServicioDataCO: Partial<ServicePageData> = {
  caseStudy: {
    company: {
      name: 'Empresa de Software como Servicio',
      location: 'Medellín, Colombia',  // 🇨🇴 Específico
    },
    results: {
      before: [
        { label: 'Valor vida cliente', value: '$48M COP' },  // 🇨🇴 En COP
      ],
      after: [
        { label: 'Valor vida cliente', value: '$112M COP' },
      ]
    },
    testimonial: {
      quote: '...',
      author: 'María Fernanda Ruiz',
      position: 'Directora Comercial, Medellín'  // 🇨🇴 Colombia
    }
  },
  
  targetProfile: {
    idealProfile: {
      description: '...Facturación $3.000M-$60.000M COP anuales...',  // 🇨🇴 COP
    }
  }
};
```

### 3. Merge Automático

El hook `mergeServiceContent` hace un **deep merge**:

```typescript
import { mergeServiceContent } from '@/lib/hooks/useServiceContent';

const finalContent = mergeServiceContent(
  baseComercialServicioData,
  overlayComercialServicioDataCO
);

// Resultado:
// - hero, problems, components, methodology → del base
// - caseStudy, targetProfile → merged con overlay CO
```

---

## 💻 Uso en Código

### Opción 1: Server Component (Recomendado)

```typescript
import { baseComercialServicioData } from '@/content/base/servicios/comercial-servicio-cliente';
import { overlayComercialServicioDataCO } from '@/content/es-co/servicios/comercial-servicio-cliente';
import { mergeServiceContent } from '@/lib/hooks/useServiceContent';
import { getCountryByLocale } from '@/lib/country';

export default function ServicePage({ params }: { params: { lc: string } }) {
  const country = getCountryByLocale(params.lc);
  
  // Cargar overlay según país
  let overlay = null;
  if (params.lc === 'es-co') {
    overlay = overlayComercialServicioDataCO;
  }
  // ... otros países
  
  const content = mergeServiceContent(baseComercialServicioData, overlay);
  
  return (
    <div>
      <h1>{content.hero.title}</h1>
      <p>{content.caseStudy.company.location}</p>  {/* Localizado */}
      <p>{content.caseStudy.testimonial.author}</p>  {/* Localizado */}
    </div>
  );
}
```

### Opción 2: Client Component

```typescript
'use client';

import { useServiceContent } from '@/lib/hooks/useServiceContent';
import { baseComercialServicioData } from '@/content/base/servicios/comercial-servicio-cliente';

export function ServiceContent() {
  const content = useServiceContent('comercial-servicio-cliente', baseComercialServicioData);
  
  return (
    <div>
      <h1>{content.hero.title}</h1>
      <p>{content.caseStudy.company.location}</p>
    </div>
  );
}
```

---

## 🎨 Qué Sobrescriben los Overlays

### Elementos Comunes a Sobrescribir

1. **CaseStudy** 🎯
   - `company.name` - Nombre empresa local
   - `company.location` - Ciudad y país
   - `challenge` - Desafío específico
   - `results` - Valores en moneda local
   - `testimonial` - Testimonio local

2. **Target Profile** 👥
   - `idealProfile.description` - Facturación en moneda local

3. **CTA** (opcional)
   - Teléfonos/WhatsApp locales

### Elementos que NO Cambian

- `hero` - Título y descripción del servicio
- `problems` - Problemas son universales
- `components` - Componentes del servicio
- `methodology` - Metodología FORJA es igual

---

## ✅ Ejemplo Completo: Colombia

```typescript
// content/es-co/servicios/comercial-servicio-cliente.ts

export const overlayComercialServicioDataCO: Partial<ServicePageData> = {
  caseStudy: {
    company: {
      name: 'Empresa de Software como Servicio',
      industry: 'Tecnología',
      size: '12 personas (5 comercial, 4 servicio)',
      location: 'Medellín, Colombia' // 🇨🇴
    },
    challenge: 'Empresa con buena adquisición de clientes (15-20 nuevos/mes) pero retención del 65% anual...',
    solution: 'Implementamos sistema integrado...',
    results: {
      before: [
        { label: 'Retención anual', value: '65%' },
        { label: 'NPS', value: '18' },
        { label: 'Valor vida cliente', value: '$48M COP' }, // 🇨🇴 COP
      ],
      after: [
        { label: 'Retención anual', value: '89%' },
        { label: 'NPS', value: '68' },
        { label: 'Valor vida cliente', value: '$112M COP' }, // 🇨🇴 COP
      ]
    },
    testimonial: {
      quote: 'Antes vendíamos bien pero los clientes se iban...',
      author: 'María Fernanda Ruiz', // 🇨🇴 Nombre colombiano
      position: 'Directora Comercial, Medellín' // 🇨🇴 Colombia
    }
  },
  
  targetProfile: {
    title: '¿Este Servicio es para Tu Empresa?',
    items: [...], // Pueden ser los mismos
    idealProfile: {
      title: 'Perfil Ideal',
      description: 'Directores Comerciales... Facturación $3.000M-$60.000M COP anuales...' // 🇨🇴 COP
    }
  }
};
```

---

## 🔄 Flujo de Ejecución

```
1. Usuario navega a /es-co/servicios/comercial-servicio-cliente
   ↓
2. Server Component detecta locale = 'es-co'
   ↓
3. Carga base: baseComercialServicioData
   ↓
4. Carga overlay: overlayComercialServicioDataCO
   ↓
5. Deep merge: mergeServiceContent(base, overlay)
   ↓
6. Renderiza contenido merged:
   - Hero: del base
   - Problems: del base
   - Components: del base
   - CaseStudy: de overlay CO (Medellín, COP)
   - Testimonial: de overlay CO (María Fernanda)
```

---

## 🎯 Ventajas del Sistema

### 1. DRY (Don't Repeat Yourself)
- El 90% del contenido está en el base
- Solo 10% se repite en overlays

### 2. Mantenibilidad
- Cambio en base → afecta todos los países
- Cambio en overlay → solo ese país

### 3. Escalabilidad
- Agregar país = crear overlay
- No duplicar todo el contenido

### 4. Type-Safe
- TypeScript valida estructura
- `Partial<ServicePageData>` garantiza compatibilidad

---

## 📊 Comparación: Sin vs Con Overlays

### ❌ Sin Overlays (Duplicación)

```
content/es-co/comercial-servicio-cliente.ts  →  800 líneas
content/es-cl/comercial-servicio-cliente.ts  →  800 líneas
content/es-pe/comercial-servicio-cliente.ts  →  800 líneas
content/es-ec/comercial-servicio-cliente.ts  →  800 líneas

Total: 3,200 líneas (mucha duplicación)
```

### ✅ Con Overlays

```
content/base/comercial-servicio-cliente.ts   →  800 líneas (base)
content/es-co/comercial-servicio-cliente.ts  →   80 líneas (overlay)
content/es-cl/comercial-servicio-cliente.ts  →   60 líneas (overlay)
content/es-pe/comercial-servicio-cliente.ts  →   60 líneas (overlay)
content/es-ec/comercial-servicio-cliente.ts  →   60 líneas (overlay)

Total: 1,060 líneas (67% menos)
```

---

## 🧪 Testing

```typescript
import { mergeServiceContent } from '@/lib/hooks/useServiceContent';
import { baseComercialServicioData } from '@/content/base/servicios/comercial-servicio-cliente';
import { overlayComercialServicioDataCO } from '@/content/es-co/servicios/comercial-servicio-cliente';

describe('Service Content Overlay', () => {
  it('should merge base with overlay', () => {
    const merged = mergeServiceContent(baseComercialServicioData, overlayComercialServicioDataCO);
    
    // Base content preserved
    expect(merged.hero.title).toBe('Comercial y Servicio al Cliente');
    expect(merged.problems.length).toBe(5);
    
    // Overlay content applied
    expect(merged.caseStudy.company.location).toBe('Medellín, Colombia');
    expect(merged.caseStudy.testimonial.author).toBe('María Fernanda Ruiz');
  });
  
  it('should use base when no overlay', () => {
    const merged = mergeServiceContent(baseComercialServicioData, null);
    
    expect(merged.caseStudy.company.location).toBe('Latinoamérica');
  });
});
```

---

## 📝 Checklist para Nuevo Servicio

- [ ] Crear `content/base/servicios/[slug].ts` con contenido completo
- [ ] Crear `content/es-co/servicios/[slug].ts` con overlay CO
- [ ] Crear `content/es-cl/servicios/[slug].ts` con overlay CL
- [ ] Crear `content/es-pe/servicios/[slug].ts` con overlay PE
- [ ] Crear `content/es-ec/servicios/[slug].ts` con overlay EC
- [ ] Verificar TypeScript sin errores
- [ ] Probar render en cada país

---

## 🚀 Ejemplo de Migración

### Antes (archivo único duplicado)

```typescript
// data/services/comercial-servicio-cliente.ts
export const comercialServicioData: ServicePageData = {
  hero: {...},
  problems: {...},
  caseStudy: {
    company: {
      name: 'Empresa de Software como Servicio',
      location: 'Medellín, Colombia' // ❌ Hardcoded
    }
  }
};
```

### Después (base + overlay)

```typescript
// content/base/servicios/comercial-servicio-cliente.ts
export const baseComercialServicioData: ServicePageData = {
  hero: {...},
  problems: {...},
  caseStudy: {
    company: {
      name: 'Empresa Internacional',
      location: 'Latinoamérica' // ✅ Genérico
    }
  }
};

// content/es-co/servicios/comercial-servicio-cliente.ts
export const overlayComercialServicioDataCO: Partial<ServicePageData> = {
  caseStudy: {
    company: {
      name: 'Empresa de Software como Servicio',
      location: 'Medellín, Colombia' // ✅ Overlay
    }
  }
};
```

---

**✅ Sistema Implementado y Funcional**

