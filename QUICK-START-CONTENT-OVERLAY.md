# 🚀 Quick Start - Content Overlay System

Guía ultra-rápida para usar el sistema de overlays de contenido en 2 minutos.

## ✅ Ya Implementado

El sistema de contenido base + overlays está **activo y funcionando**. No requiere configuración adicional.

---

## 🎯 Cómo Funciona

```
Base Content (100%)
    ↓
    + Overlay por país (solo diferencias)
    ↓
Deep Merge automático
    ↓
Contenido final personalizado
```

---

## 💡 Uso Básico

### En Client Component

```typescript
'use client';

import { useCountryContent } from '@/lib/hooks/useCountryContent';

export function MyComponent() {
  const content = useCountryContent();
  
  return (
    <div>
      <h1>{content.hero.title}</h1>
      <p>{content.hero.subtitle}</p>
      <a href={`tel:${content.contact.whatsapp}`}>
        WhatsApp: {content.contact.whatsapp}
      </a>
    </div>
  );
}
```

### En Server Component

```typescript
import { getCountryContent } from '@/lib/hooks/useCountryContent';

export default function Page({ params }: { params: { lc: string } }) {
  const content = getCountryContent(params.lc);
  
  return <h1>{content.hero.title}</h1>;
}
```

---

## 📦 Estructura

```
content/
├── base/home.ts      ← Contenido neutro (100%)
├── es/home.ts        ← Overlay español general
├── es-co/home.ts     ← Overlay Colombia (solo diferencias)
├── es-cl/home.ts     ← Overlay Chile
├── es-pe/home.ts     ← Overlay Perú
└── es-ec/home.ts     ← Overlay Ecuador
```

---

## 🔧 Campos Disponibles

```typescript
const content = useCountryContent();

// Hero
content.hero.title
content.hero.subtitle
content.hero.cta.primary
content.hero.cta.secondary

// Contacto
content.contact.whatsapp
content.contact.phone
content.contact.email

// Estadísticas
content.stats.companies
content.stats.countries
content.stats.satisfaction
content.stats.growth

// Servicios
content.services.title
content.services.subtitle

// Testimonios
content.testimonials.title
content.testimonials.subtitle

// CTA
content.cta.title
content.cta.subtitle
content.cta.button

// Legal
content.legal.note
```

---

## 🌎 Por País

### Colombia (es-co)

```
title: "...en Colombia"
whatsapp: "+57 300 123 4567"
companies: "+80 empresas colombianas"
```

### Chile (es-cl)

```
title: "...en Chile"
whatsapp: "+56 9 1234 5678"
companies: "+50 empresas chilenas"
```

### Perú (es-pe)

```
title: "...en Perú"
whatsapp: "+51 987 654 321"
companies: "+40 empresas peruanas"
```

### Ecuador (es-ec)

```
title: "...en Ecuador"
whatsapp: "+593 98 765 4321"
companies: "+30 empresas ecuatorianas"
```

---

## 🔄 Ejemplo de Merge

### Base + Overlay

```typescript
// Base
{
  hero: {
    title: "Juntos forjamos el cambio",
    subtitle: "Transformamos PYMEs",
  },
  contact: {
    whatsapp: "+57 300...",
  },
}

// Overlay Colombia
{
  hero: {
    title: "...en Colombia",  // Sobrescribe
    // subtitle heredado del base
  },
  stats: {
    companies: "+80 colombianas",  // Nuevo
  },
}

// Resultado Merged
{
  hero: {
    title: "...en Colombia",        ← Overlay
    subtitle: "Transformamos PYMEs", ← Base
  },
  contact: {
    whatsapp: "+57 300...",          ← Base
  },
  stats: {
    companies: "+80 colombianas",    ← Overlay
  },
}
```

---

## 🧪 Testing Rápido

```typescript
// En console del navegador o Node

// Test 1: Base solo
const content1 = getCountryContent('es-mx'); // No tiene overlay
console.log(content1.hero.title); // Contenido base

// Test 2: Con overlay
const content2 = getCountryContent('es-co'); // Colombia
console.log(content2.hero.title); // "...en Colombia"
console.log(content2.stats.companies); // "+80 colombianas"
```

---

## 📝 Agregar Nuevo Contenido

### Al Base (para todos)

```typescript
// content/base/home.ts
export const baseHomeContent: HomeContent = {
  // ... existente
  
  newSection: {
    title: "Nuevo título",
    text: "Nuevo texto",
  },
};
```

### Solo para un País

```typescript
// content/es-co/home.ts
export const homeContentOverlay: Partial<HomeContent> = {
  // ... existente
  
  newSection: {
    title: "Título para Colombia",
    // text heredado del base
  },
};
```

---

## 🎨 Sin Cambios de Diseño

### ❌ NO Cambia

- Layout
- Estilos CSS
- Estructura HTML
- Componentes
- Navegación

### ✅ SÍ Cambia

- Textos
- Números
- Stats
- CTAs
- Legal note

---

## 🚀 Ejemplos Completos

### Hero Section

```typescript
'use client';

import { useCountryContent } from '@/lib/hooks/useCountryContent';

export function Hero() {
  const content = useCountryContent();
  
  return (
    <section className="hero">
      <h1>{content.hero.title}</h1>
      <p>{content.hero.subtitle}</p>
      
      <div className="cta-buttons">
        <button className="btn-primary">
          {content.hero.cta.primary}
        </button>
        <button className="btn-secondary">
          {content.hero.cta.secondary}
        </button>
      </div>
    </section>
  );
}
```

### Stats Grid

```typescript
'use client';

import { useCountryContent } from '@/lib/hooks/useCountryContent';

export function Stats() {
  const content = useCountryContent();
  
  const stats = [
    { value: content.stats.companies, icon: '🏢' },
    { value: content.stats.countries, icon: '🌎' },
    { value: content.stats.satisfaction, icon: '⭐' },
    { value: content.stats.growth, icon: '📈' },
  ];
  
  return (
    <div className="stats-grid">
      {stats.map((stat, i) => (
        <div key={i} className="stat-card">
          <span className="stat-icon">{stat.icon}</span>
          <span className="stat-value">{stat.value}</span>
        </div>
      ))}
    </div>
  );
}
```

### Contact Banner

```typescript
'use client';

import { useCountry } from '@/context/CountryProvider';
import { useCountryContent } from '@/lib/hooks/useCountryContent';

export function ContactBanner() {
  const { country } = useCountry();
  const content = useCountryContent();
  
  return (
    <div className="contact-banner">
      <p>Contáctanos en {country.name} {country.flag}</p>
      <div className="contact-methods">
        <a href={`tel:${content.contact.phone}`}>
          📞 {content.contact.phone}
        </a>
        <a href={`https://wa.me/${content.contact.whatsapp.replace(/\s/g, '')}`}>
          💬 {content.contact.whatsapp}
        </a>
        <a href={`mailto:${content.contact.email}`}>
          ✉️ {content.contact.email}
        </a>
      </div>
    </div>
  );
}
```

---

## 🐛 Debug

### Verificar Contenido

```typescript
// En component
const content = useCountryContent();
console.log('Content:', content);
```

### Verificar Overlay Cargado

```typescript
// Ver si hay diferencias del base
const content = useCountryContent();
const base = baseHomeContent;

console.log('Title changed?', content.hero.title !== base.hero.title);
```

---

## 📚 Docs Completas

- 📖 **Sistema Completo**: `docs/CONTENT_OVERLAY_SYSTEM.md`
- 📄 **Resumen**: `EXP-5-IMPLEMENTACION-COMPLETA.md`
- 🏢 **Legal Stamp**: `docs/LEGAL_STAMP_USAGE.md`

---

## 🎉 Listo para Usar

El sistema funciona **automáticamente**. Solo importa el hook y úsalo! 🚀

---

**¿Dudas?** Revisa la documentación completa en los links de arriba.

