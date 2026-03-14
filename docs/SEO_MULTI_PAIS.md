# SEO Multi-País: hreflang, Canonical, Sitemaps y Schema

**Versión**: 1.0  
**Fecha**: Diciembre 2024  
**Objetivo**: SEO i18n completo respetando entidad legal única

---

## 🎯 Concepto

Sistema SEO internacional que:
- **hreflang**: Indica a Google las variantes de idioma/país
- **Canonical**: URL canónica única por versión
- **Sitemap**: Todas las URLs para todos los países
- **Schema.org**: Organization única + Service por país con `areaServed`

**Países soportados**: 🇨🇴 Colombia | 🇨🇱 Chile | 🇵🇪 Perú | 🇪🇨 Ecuador | 🌎 Genérico (es)

---

## 📁 Estructura de Archivos

```
components/seo/
├── SchemaOrganization.tsx          # Schema Organization (entidad única)
├── SchemaService.tsx               # Schema Service (por país)
└── index.ts                        # Exports

lib/seo/
└── metadata.ts                     # Helpers hreflang/canonical

app/
├── sitemap.ts                      # Sitemap multi-país
└── robots.ts                       # Robots.txt

components/examples/
└── SEOExample.tsx                  # Ejemplos de uso
```

---

## 🔗 1. hreflang y Canonical

### ¿Qué es hreflang?

Indica a Google que existen versiones alternativas de una página para diferentes idiomas/regiones:

```html
<link rel="alternate" hreflang="es" href="https://www.forjadigital.com/es/servicios" />
<link rel="alternate" hreflang="es-CO" href="https://www.forjadigital.com/es-co/servicios" />
<link rel="alternate" hreflang="es-CL" href="https://www.forjadigital.com/es-cl/servicios" />
<link rel="alternate" hreflang="es-PE" href="https://www.forjadigital.com/es-pe/servicios" />
<link rel="alternate" hreflang="es-EC" href="https://www.forjadigital.com/es-ec/servicios" />
<link rel="alternate" hreflang="x-default" href="https://www.forjadigital.com/es/servicios" />
```

### Uso en Pages

```tsx
// app/[lc]/servicios/page.tsx

import { Metadata } from 'next';
import { generateI18nMetadata } from '@/lib/seo/metadata';

export async function generateMetadata({ params }: { params: { lc: string } }): Promise<Metadata> {
  return generateI18nMetadata({
    lc: params.lc,
    pathname: '/servicios',
    title: 'Nuestros Servicios | ForjaConsulting',
    description: 'Servicios de consultoría empresarial para PYMEs.',
    keywords: 'consultoría, servicios, arquitectura empresarial',
  });
}
```

**Resultado automático**:
- ✅ `<link rel="canonical" href="https://www.forjadigital.com/es-co/servicios" />`
- ✅ 5 tags `hreflang` (es, es-CO, es-CL, es-PE, es-EC)
- ✅ 1 tag `x-default` (apunta a `/es/`)
- ✅ Open Graph con URL correcta

---

## 🏢 2. Schema Organization (Entidad Legal Única)

### Concepto

**Una sola organización** para todos los países: ForjaConsulting SAS (Colombia).

### Uso

```tsx
import { SchemaOrganization } from '@/components/seo';

export default function Page() {
  return (
    <>
      <SchemaOrganization />
      {/* contenido */}
    </>
  );
}
```

### Schema Generado

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.forjadigital.com/#organization",
  "name": "ForjaConsulting",
  "legalName": "ForjaConsulting SAS",
  "url": "https://www.forjadigital.com",
  "logo": "https://www.forjadigital.com/logo.png",
  "email": "contacto@forjaconsulting.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "Colombia",
    "addressLocality": "Bogotá D.C."
  },
  "taxID": "900.XXX.XXX-1",
  "areaServed": [
    { "@type": "Country", "name": "Colombia" },
    { "@type": "Country", "name": "Chile" },
    { "@type": "Country", "name": "Perú" },
    { "@type": "Country", "name": "Ecuador" }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/forjadigitalae",
    "https://www.facebook.com/forjadigitalae"
  ]
}
```

**Importante**:
- Mismo `@id` para todas las páginas → Google entiende que es una sola empresa
- `areaServed` lista todos los países

---

## 🛠️ 3. Schema Service (Por País)

### Concepto

Cada servicio indica **qué país sirve** con `areaServed`.

### Uso

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
        category="Business Consulting"
      />
      
      {/* contenido */}
    </>
  );
}
```

### Schema Generado

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.forjadigital.com/es-cl/servicios/arquitectura#service",
  "name": "Arquitectura Estratégica",
  "description": "Diseño y optimización...",
  "url": "https://www.forjadigital.com/es-cl/servicios/arquitectura",
  "provider": {
    "@type": "Organization",
    "@id": "https://www.forjadigital.com/#organization",
    "name": "ForjaConsulting",
    "legalName": "ForjaConsulting SAS"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Chile",
    "identifier": "CL"
  },
  "serviceType": "Business Consulting",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
}
```

**Importante**:
- `provider` referencia a la Organization con `@id`
- `areaServed` específico por país
- `priceCurrency` correcto (COP para Colombia, USD para otros)

---

## 🗺️ 4. Sitemap Multi-País

### Estructura

**Archivo**: `app/sitemap.ts`

Genera automáticamente todas las URLs para todos los locales.

### Ejemplo de URLs Generadas

```
https://www.forjadigital.com/es/servicios
https://www.forjadigital.com/es-co/servicios
https://www.forjadigital.com/es-cl/servicios
https://www.forjadigital.com/es-pe/servicios
https://www.forjadigital.com/es-ec/servicios

https://www.forjadigital.com/es/legal/politica-datos
https://www.forjadigital.com/es-co/legal/politica-datos
https://www.forjadigital.com/es-cl/legal/politica-datos
...
```

### Prioridades

| Tipo de Página | Priority | Change Frequency |
|----------------|----------|------------------|
| Home | 1.0 | weekly |
| Servicios (main) | 0.9 | weekly |
| Servicios específicos | 0.8 | monthly |
| Contacto | 0.9 | weekly |
| Nosotros | 0.7 | monthly |
| Legales | 0.5 | yearly |

### Alternates en Sitemap

Cada URL incluye sus alternativas:

```xml
<url>
  <loc>https://www.forjadigital.com/es-cl/servicios</loc>
  <lastmod>2024-12-02</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.9</priority>
  <xhtml:link rel="alternate" hreflang="es" href="https://www.forjadigital.com/es/servicios"/>
  <xhtml:link rel="alternate" hreflang="es-CO" href="https://www.forjadigital.com/es-co/servicios"/>
  <xhtml:link rel="alternate" hreflang="es-CL" href="https://www.forjadigital.com/es-cl/servicios"/>
  <xhtml:link rel="alternate" hreflang="es-PE" href="https://www.forjadigital.com/es-pe/servicios"/>
  <xhtml:link rel="alternate" hreflang="es-EC" href="https://www.forjadigital.com/es-ec/servicios"/>
</url>
```

---

## 🤖 5. robots.txt

**Archivo**: `app/robots.ts`

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: *.json
Disallow: /*?*utm_*

Sitemap: https://www.forjadigital.com/sitemap.xml
Host: https://www.forjadigital.com
```

**Configuración**:
- ✅ Permite todo el contenido público
- ❌ Bloquea API, admin, archivos internos
- ❌ Evita indexar URLs con parámetros UTM
- 🗺️ Apunta al sitemap XML

---

## 💡 Ejemplos de Uso

### Ejemplo 1: Página de Servicio Completa

```tsx
// app/[lc]/servicios/arquitectura/page.tsx

import { Metadata } from 'next';
import { generateI18nMetadata } from '@/lib/seo/metadata';
import { SchemaOrganization, SchemaService, getCountryName, getCountryCode } from '@/components/seo';

export async function generateMetadata({ params }: { params: { lc: string } }): Promise<Metadata> {
  return generateI18nMetadata({
    lc: params.lc,
    pathname: '/servicios/arquitectura',
    title: 'Arquitectura Estratégica | ForjaConsulting',
    description: 'Diseño y optimización de estructuras empresariales para PYMEs.',
    keywords: 'arquitectura empresarial, consultoría estratégica',
  });
}

export default function ArquitecturaPage({ params }: { params: { lc: string } }) {
  const countryName = getCountryName(params.lc);
  const countryCode = getCountryCode(params.lc);
  const priceCurrency = params.lc === 'es-co' ? 'COP' : 'USD';

  return (
    <>
      {/* SEO Schemas */}
      <SchemaOrganization />
      <SchemaService
        name="Arquitectura Estratégica"
        description="Diseño y optimización de estructuras empresariales"
        url={`https://www.forjadigital.com/${params.lc}/servicios/arquitectura`}
        areaServed={countryName}
        areaServedCode={countryCode}
        priceCurrency={priceCurrency}
        category="Business Consulting"
      />

      {/* Contenido de la página */}
      <div>
        <h1>Arquitectura Estratégica</h1>
        <p>Servicio disponible en {countryName}</p>
        {/* ... */}
      </div>
    </>
  );
}
```

### Ejemplo 2: Home Simple

```tsx
// app/[lc]/page.tsx

import { Metadata } from 'next';
import { generateI18nMetadata } from '@/lib/seo/metadata';
import { SchemaOrganization } from '@/components/seo';

export async function generateMetadata({ params }: { params: { lc: string } }): Promise<Metadata> {
  return generateI18nMetadata({
    lc: params.lc,
    pathname: '',
    title: 'ForjaConsulting - Consultoría Empresarial',
    description: 'Transformamos PYMEs latinoamericanas mediante arquitectura empresarial.',
  });
}

export default function HomePage() {
  return (
    <>
      <SchemaOrganization />
      
      <div>
        <h1>Bienvenido a ForjaConsulting</h1>
        {/* ... */}
      </div>
    </>
  );
}
```

### Ejemplo 3: Múltiples Schemas

```tsx
import { getOrganizationSchema, getServiceSchema } from '@/components/seo';

const orgSchema = getOrganizationSchema();
const service1 = getServiceSchema({...});
const service2 = getServiceSchema({...});

const combinedSchema = {
  '@context': 'https://schema.org',
  '@graph': [orgSchema, service1, service2],
};

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
/>
```

---

## ✅ Checklist de Implementación

### Por Página

- [ ] `generateMetadata` usa `generateI18nMetadata`
- [ ] `<SchemaOrganization />` en el componente
- [ ] `<SchemaService />` si es página de servicio
- [ ] Props correctos para `SchemaService`:
  - [ ] `areaServed` = nombre del país
  - [ ] `priceCurrency` = USD o COP según país
  - [ ] `url` = URL completa con locale

### Global

- [ ] `app/sitemap.ts` generando todas las URLs
- [ ] `app/robots.ts` apuntando al sitemap
- [ ] Todas las rutas principales en `MAIN_PATHS`
- [ ] Servicios listados en `SERVICE_PATHS`

---

## 🔍 Validación

### 1. Ver HTML Source

```bash
curl https://www.forjadigital.com/es-cl/servicios | grep "hreflang"
```

Debe mostrar 6 tags hreflang (5 locales + x-default).

### 2. Google Search Console

- Rich Results Test: https://search.google.com/test/rich-results
- Validar schema Organization
- Validar schema Service

### 3. Sitemap

```
https://www.forjadigital.com/sitemap.xml
```

Debe listar todas las URLs para todos los países.

### 4. Robots

```
https://www.forjadigital.com/robots.txt
```

Debe apuntar al sitemap correcto.

---

## 📊 Métricas SEO

| Elemento | Cantidad | Estado |
|----------|----------|--------|
| **Locales Soportados** | 5 | ✅ |
| **Páginas Principales** | 9 | ✅ |
| **Servicios** | 9 | ✅ |
| **URLs Totales en Sitemap** | ~200+ | ✅ |
| **Schema Organization** | 1 (única) | ✅ |
| **Schema Service** | Por página | ✅ |

---

## 🚀 Beneficios SEO

1. **hreflang correcto**:
   - Google muestra la versión correcta según país del usuario
   - Evita contenido duplicado

2. **Canonical único**:
   - Cada versión tiene su URL canónica
   - No compiten entre sí

3. **Schema Organization único**:
   - Google entiende que es una sola empresa
   - Consolida autoridad y trust

4. **Schema Service por país**:
   - Google sabe que servicios están disponibles en cada país
   - Mejora relevancia local

5. **Sitemap completo**:
   - Google indexa todas las versiones
   - Descubrimiento más rápido

---

**✅ SEO Multi-País Implementado Correctamente**

