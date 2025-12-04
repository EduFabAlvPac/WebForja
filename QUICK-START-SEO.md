# 🚀 Quick Start - SEO Multi-País

Guía ultra-rápida para implementar SEO internacional en 3 minutos.

---

## ✅ Ya Implementado

Sistema SEO completo con:
- hreflang y canonical automáticos
- Schema Organization (entidad única)
- Schema Service (por país)
- Sitemap multi-país
- Robots.txt

---

## 📄 Paso 1: Metadata con hreflang

En cualquier página con `[lc]`:

```tsx
import { Metadata } from 'next';
import { generateI18nMetadata } from '@/lib/seo/metadata';

export async function generateMetadata({ params }: { params: { lc: string } }): Promise<Metadata> {
  return generateI18nMetadata({
    lc: params.lc,
    pathname: '/servicios',  // ← Path SIN el locale
    title: 'Servicios | Forja Digital',
    description: 'Consultoría empresarial para PYMEs',
  });
}
```

**¡Listo!** Ya tienes:
- ✅ Canonical único
- ✅ 6 tags hreflang (5 locales + x-default)
- ✅ Open Graph correcto
- ✅ Twitter Card

---

## 🏢 Paso 2: Schema Organization

Agregar al inicio del componente:

```tsx
import { SchemaOrganization } from '@/components/seo';

export default function Page() {
  return (
    <>
      <SchemaOrganization />
      {/* tu contenido */}
    </>
  );
}
```

**¡Listo!** Google sabe que es una empresa única en Colombia.

---

## 🛠️ Paso 3: Schema Service (solo páginas de servicios)

```tsx
import { SchemaService, getCountryName, getCountryCode } from '@/components/seo';

export default function ServicePage({ params }: { params: { lc: string } }) {
  const countryName = getCountryName(params.lc);  // "Chile"
  const countryCode = getCountryCode(params.lc);  // "CL"
  const priceCurrency = params.lc === 'es-co' ? 'COP' : 'USD';

  return (
    <>
      <SchemaOrganization />
      
      <SchemaService
        name="Arquitectura Estratégica"
        description="Diseño y optimización de estructuras empresariales"
        url={`https://www.forjadigital.com/${params.lc}/servicios/arquitectura`}
        areaServed={countryName}
        areaServedCode={countryCode}
        priceCurrency={priceCurrency}
      />
      
      {/* tu contenido */}
    </>
  );
}
```

**¡Listo!** Google sabe que el servicio está disponible en ese país.

---

## 🗺️ Sitemap y Robots

**Ya funcionan automáticamente**:

```
https://www.forjadigital.com/sitemap.xml  ← ~200+ URLs
https://www.forjadigital.com/robots.txt   ← Apunta al sitemap
```

**No necesitas hacer nada!** ✨

---

## 💡 Ejemplo Completo

```tsx
// app/[lc]/servicios/arquitectura/page.tsx

import { Metadata } from 'next';
import { generateI18nMetadata } from '@/lib/seo/metadata';
import { SchemaOrganization, SchemaService, getCountryName, getCountryCode } from '@/components/seo';

// 1. Metadata
export async function generateMetadata({ params }: { params: { lc: string } }): Promise<Metadata> {
  return generateI18nMetadata({
    lc: params.lc,
    pathname: '/servicios/arquitectura',
    title: 'Arquitectura Estratégica | Forja Digital',
    description: 'Diseño y optimización de estructuras empresariales.',
  });
}

// 2. Página
export default function ArquitecturaPage({ params }: { params: { lc: string } }) {
  return (
    <>
      {/* Schemas */}
      <SchemaOrganization />
      <SchemaService
        name="Arquitectura Estratégica"
        description="Diseño y optimización de estructuras empresariales"
        url={`https://www.forjadigital.com/${params.lc}/servicios/arquitectura`}
        areaServed={getCountryName(params.lc)}
        areaServedCode={getCountryCode(params.lc)}
        priceCurrency={params.lc === 'es-co' ? 'COP' : 'USD'}
      />

      {/* Contenido */}
      <div>
        <h1>Arquitectura Estratégica</h1>
      </div>
    </>
  );
}
```

---

## 🔍 Verificar que Funciona

### 1. Ver hreflang en HTML

```bash
curl http://localhost:3000/es-cl/servicios | grep "hreflang"
```

Debe mostrar 6 tags.

### 2. Ver Sitemap

```
http://localhost:3000/sitemap.xml
```

Debe listar todas las URLs.

### 3. Ver Robots

```
http://localhost:3000/robots.txt
```

Debe apuntar al sitemap.

---

## 📋 Helpers Disponibles

```tsx
import { generateI18nMetadata } from '@/lib/seo/metadata';
import { SchemaOrganization, SchemaService } from '@/components/seo';
import { getCountryName, getCountryCode } from '@/components/seo';

// Metadata completo
const metadata = generateI18nMetadata({
  lc: 'es-cl',
  pathname: '/servicios',
  title: 'Servicios',
  description: 'Descripción',
});

// Solo alternates
import { generateAlternates } from '@/lib/seo/metadata';
const alternates = generateAlternates('es-cl', '/servicios');

// URL completa
import { getFullUrl } from '@/lib/seo/metadata';
const url = getFullUrl('es-cl', '/servicios');
// → "https://www.forjadigital.com/es-cl/servicios"

// País desde locale
getCountryName('es-cl');  // → "Chile"
getCountryCode('es-cl');  // → "CL"
```

---

## 🎯 Checklist por Página

- [ ] `generateMetadata` con `generateI18nMetadata`
- [ ] `<SchemaOrganization />` en el componente
- [ ] `<SchemaService />` si es servicio
- [ ] Props correctos: `areaServed`, `priceCurrency`, `url`

---

## 🚨 Errores Comunes

### ❌ Pathname con locale

```tsx
// MAL
pathname: '/es-cl/servicios'

// BIEN
pathname: '/servicios'
```

### ❌ URL sin locale

```tsx
// MAL
url: 'https://www.forjadigital.com/servicios'

// BIEN
url: `https://www.forjadigital.com/${params.lc}/servicios`
```

### ❌ Sin areaServed

```tsx
// MAL
<SchemaService name="..." description="..." url="..." />

// BIEN
<SchemaService 
  name="..." 
  description="..." 
  url="..."
  areaServed={getCountryName(params.lc)}
  areaServedCode={getCountryCode(params.lc)}
/>
```

---

## 📚 Docs Completas

- 📖 **Guía Técnica**: `docs/SEO_MULTI_PAIS.md`
- 📄 **Resumen**: `EXP-11-IMPLEMENTACION-COMPLETA.md`
- 💻 **Ejemplos**: `components/examples/SEOExample.tsx`

---

**🎉 Listo para SEO Internacional**

3 pasos: metadata → organization → service (si aplica). ¡Así de simple! 🚀

