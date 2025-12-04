# 🚀 Quick Start - Sistema de Overlays para Servicios

Guía ultra-rápida para usar contenido base + overlays en 2 minutos.

---

## ✅ Ya Implementado

Sistema completo de contenido base + overlays por país + CTA con leyenda legal.

---

## 💡 Concepto en 30 Segundos

```
BASE (neutral) + OVERLAY (país) = CONTENIDO FINAL

content/base/servicios/[slug].ts       →  536 líneas (todo el servicio)
content/es-co/servicios/[slug].ts      →   80 líneas (solo lo que cambia)
                                          ──────────────────────────────
mergeServiceContent(base, overlay)     →  Contenido personalizado 🇨🇴
```

---

## 🎯 Cómo Funciona

### Archivo Base (Una Vez)

```typescript
// content/base/servicios/comercial-servicio-cliente.ts

export const baseComercialServicioData: ServicePageData = {
  hero: {...},           // Universal
  problems: [...],       // Universal
  components: [...],     // Universal
  methodology: [...],    // Universal
  caseStudy: {           // Genérico
    company: {
      name: 'Empresa Internacional',
      location: 'Latinoamérica',
    },
    // ...
  },
};
```

### Overlay por País (Solo Diferencias)

```typescript
// content/es-co/servicios/comercial-servicio-cliente.ts

export const overlayComercialServicioDataCO: Partial<ServicePageData> = {
  caseStudy: {           // Solo esto cambia
    company: {
      name: 'Empresa SaaS',
      location: 'Medellín, Colombia',  // 🇨🇴
    },
    testimonial: {
      author: 'María Fernanda Ruiz',
      position: 'Directora Comercial, Medellín'
    }
  }
};
```

### Uso en Página

```typescript
import { baseComercialServicioData } from '@/content/base/servicios/comercial-servicio-cliente';
import { overlayComercialServicioDataCO } from '@/content/es-co/servicios/comercial-servicio-cliente';
import { mergeServiceContent } from '@/lib/hooks/useServiceContent';

export default function ServicePage({ params }) {
  const overlay = params.lc === 'es-co' ? overlayComercialServicioDataCO : null;
  const content = mergeServiceContent(baseComercialServicioData, overlay);
  
  return (
    <div>
      <h1>{content.hero.title}</h1>
      <p>{content.caseStudy.company.location}</p> {/* Medellín, Colombia */}
    </div>
  );
}
```

---

## 📦 Archivos Disponibles

### Base
```
content/base/servicios/comercial-servicio-cliente.ts
```

### Overlays
```
content/es-co/servicios/comercial-servicio-cliente.ts  🇨🇴
content/es-cl/servicios/comercial-servicio-cliente.ts  🇨🇱
content/es-pe/servicios/comercial-servicio-cliente.ts  🇵🇪
content/es-ec/servicios/comercial-servicio-cliente.ts  🇪🇨
```

---

## 🔧 Uso en Código

### Server Component (Recomendado)

```typescript
import { baseComercialServicioData } from '@/content/base/servicios/comercial-servicio-cliente';
import { overlayComercialServicioDataCO } from '@/content/es-co/servicios/comercial-servicio-cliente';
import { mergeServiceContent } from '@/lib/hooks/useServiceContent';

export default function ServicePage({ params }) {
  // Seleccionar overlay
  const overlays = {
    'es-co': overlayComercialServicioDataCO,
    'es-cl': overlayComercialServicioDataCL,
    'es-pe': overlayComercialServicioDataPE,
    'es-ec': overlayComercialServicioDataEC,
  };
  
  const overlay = overlays[params.lc] || null;
  
  // Merge
  const content = mergeServiceContent(baseComercialServicioData, overlay);
  
  return (
    <div>
      <h1>{content.hero.title}</h1>
      <p>{content.caseStudy.company.location}</p>
    </div>
  );
}
```

---

## 🎨 CTA con Leyenda Legal

### Uso Básico

```tsx
import { StickyCTA } from '@/components/sticky-cta';

<StickyCTA
  label="Rayos-X Empresarial Gratis"
  href="/contacto"
  showLegalNote={true}  // ✨ Activa leyenda legal
/>
```

### Resultado Desktop

```
┌──────────────────────────────┐
│  🔒                          │
│  ¿Listo para Transformar?   │
│  ┌────────────────────────┐ │
│  │  Rayos-X Empresarial   │ │
│  └────────────────────────┘ │
│  ✓ Sin compromiso · Gratis  │
│                              │
│  Servicio exportado desde   │
│  Colombia. Contrato regido  │
│  por ley colombiana.        │
│  (10px, opacity 50%)        │
│                              │
│  💬 WhatsApp 🇨🇴            │
└──────────────────────────────┘
```

---

## 🌎 Qué Cambia por País

### Colombia 🇨🇴

```typescript
caseStudy: {
  company: {
    name: 'Empresa de Software como Servicio',
    location: 'Medellín, Colombia',
  },
  results: {
    before: [{ label: 'Valor vida cliente', value: '$48M COP' }],
    after: [{ label: 'Valor vida cliente', value: '$112M COP' }],
  },
  testimonial: {
    author: 'María Fernanda Ruiz',
    position: 'Directora Comercial, Medellín'
  }
}
```

### Chile 🇨🇱

```typescript
caseStudy: {
  company: {
    location: 'Santiago, Chile',
  },
  testimonial: {
    author: 'Carlos Mora',
    position: 'Gerente Comercial, Santiago'
  }
}
```

---

## 📝 Crear Nuevo Overlay

### 1. Copia Template

```bash
cp content/es-co/servicios/comercial-servicio-cliente.ts \
   content/es-mx/servicios/comercial-servicio-cliente.ts
```

### 2. Edita Solo lo Necesario

```typescript
export const overlayComercialServicioDataMX: Partial<ServicePageData> = {
  caseStudy: {
    company: {
      name: 'Tu Empresa Mexicana',
      location: 'Ciudad de México, México',  // 🇲🇽
    },
    results: {
      before: [{ label: 'Valor vida cliente', value: '$240K MXN' }],
      after: [{ label: 'Valor vida cliente', value: '$560K MXN' }],
    },
    testimonial: {
      quote: '...',
      author: 'Juan Pérez',
      position: 'Director Comercial, CDMX'  // 🇲🇽
    }
  }
};
```

### 3. Usa en Página

```typescript
import { overlayComercialServicioDataMX } from '@/content/es-mx/servicios/comercial-servicio-cliente';

const overlays = {
  'es-co': overlayComercialServicioDataCO,
  'es-cl': overlayComercialServicioDataCL,
  'es-mx': overlayComercialServicioDataMX,  // ✨ Nuevo
};
```

---

## 💰 Beneficios

| Aspecto | Sin Overlays | Con Overlays |
|---------|--------------|--------------|
| **Líneas por país** | 578 líneas | 80 líneas |
| **Total (4 países)** | 2,312 líneas | 796 líneas |
| **Ahorro** | 0% | 66% |
| **Mantenimiento** | Cambio en 4 archivos | Cambio en 1 archivo |

---

## 🐛 Debug

### Verificar Merge

```typescript
import { mergeServiceContent } from '@/lib/hooks/useServiceContent';

const content = mergeServiceContent(baseComercialServicioData, overlayComercialServicioDataCO);

console.log(content.hero.title); // Del base
console.log(content.caseStudy.company.location); // Del overlay: "Medellín, Colombia"
```

### Verificar Overlay Cargado

```typescript
const overlay = overlays[params.lc];
console.log('Overlay:', overlay ? 'Loaded' : 'Not found, using base');
```

---

## 📚 Docs Completas

- 📖 **Guía Técnica**: `docs/SERVICIOS_CONTENT_OVERLAY.md`
- 📄 **Resumen**: `EXP-7-IMPLEMENTACION-COMPLETA.md`

---

## ✅ Checklist

- [ ] Importar base content
- [ ] Importar overlay del país
- [ ] Usar `mergeServiceContent(base, overlay)`
- [ ] Renderizar contenido merged
- [ ] Activar `showLegalNote={true}` en CTA

---

**🎉 Listo para Usar**

El sistema funciona **automáticamente**. Solo importa, merge y renderiza! 🚀

