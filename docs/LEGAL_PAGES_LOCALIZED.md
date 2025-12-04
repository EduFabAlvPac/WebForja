# Páginas Legales Localizadas por País

**Versión**: 1.0  
**Fecha**: Diciembre 2024  
**Objetivo**: Páginas legales con rutas por país y contenido adaptado

---

## 🎯 Concepto

Sistema de páginas legales localizadas que mantiene contenido base neutral pero añade notas específicas por país sobre transferencia internacional de datos, sin prometer cumplimiento de leyes locales específicas.

**Características**:
- Contenido base único + overlays mínimos por país
- 3 páginas: Política de Datos, Términos, Cookies
- Rutas localizadas: `/{lc}/legal/[página]`
- Footer actualizado con links dinámicos
- Sin cambios de estilos

---

## 📁 Estructura de Archivos

```
app/[lc]/legal/
├── layout.tsx                      # Layout simple
├── politica-datos/
│   └── page.tsx                    # Política de Protección de Datos
├── terminos/
│   └── page.tsx                    # Términos y Condiciones
└── cookies/
    └── page.tsx                    # Política de Cookies

content/
├── base/
│   └── legal.ts                    # Contenido base neutro
├── es-co/
│   └── legal.ts                    # Overlay Colombia
├── es-cl/
│   └── legal.ts                    # Overlay Chile (+transferencia)
├── es-pe/
│   └── legal.ts                    # Overlay Perú (+transferencia)
└── es-ec/
    └── legal.ts                    # Overlay Ecuador (+transferencia)

lib/hooks/
└── useLegalContent.ts              # Hook para mergear contenido

components/layout/footer/
└── Footer.tsx                      # Actualizado con rutas dinámicas
```

---

## 🌍 Contenido por País

### Colombia (es-co)

```
/{lc}/legal/politica-datos
```

- Responsable: Forja Digital AE SAS (Colombia)
- Base legal: Ley 1581 de 2012 (Colombia)
- **NO** muestra nota de transferencia internacional
- Derechos: Reclamo ante SIC (Superintendencia de Industria y Comercio)

### Chile (es-cl)

```
/{lc}/legal/politica-datos
```

- Responsable: Forja Digital AE SAS (Colombia)
- Base legal: Ley 1581 de 2012 (Colombia)
- **✅ Muestra nota de transferencia internacional:**
  ```
  Tus datos personales serán procesados y almacenados por
  Forja Digital AE SAS en Colombia. Al proporcionar tus datos,
  aceptas esta transferencia internacional.
  
  Nota: Como proveedor colombiano de servicios exportados,
  no estamos sujetos a la Ley N° 19.628 de Chile, pero
  respetamos los principios internacionales de protección
  de datos personales.
  ```

### Perú (es-pe)

```
/{lc}/legal/politica-datos
```

- Responsable: Forja Digital AE SAS (Colombia)
- Base legal: Ley 1581 de 2012 (Colombia)
- **✅ Muestra nota de transferencia internacional:**
  ```
  Tus datos personales serán procesados y almacenados por
  Forja Digital AE SAS en Colombia. Al proporcionar tus datos,
  aceptas esta transferencia internacional.
  
  Nota: Como proveedor colombiano de servicios exportados,
  no estamos sujetos a la Ley N° 29733 de Perú, pero
  respetamos los principios internacionales de protección
  de datos personales.
  ```

### Ecuador (es-ec)

```
/{lc}/legal/politica-datos
```

- Responsable: Forja Digital AE SAS (Colombia)
- Base legal: Ley 1581 de 2012 (Colombia)
- **✅ Muestra nota de transferencia internacional:**
  ```
  Tus datos personales serán procesados y almacenados por
  Forja Digital AE SAS en Colombia. Al proporcionar tus datos,
  aceptas esta transferencia internacional.
  
  Nota: Como proveedor colombiano de servicios exportados,
  no estamos sujetos a la Ley Orgánica de Protección de Datos
  Personales de Ecuador, pero respetamos los principios
  internacionales de protección de datos personales.
  ```

---

## 📄 Contenido Base (content/base/legal.ts)

### Estructura

```typescript
export interface LegalContent {
  privacy: {
    intro: {
      text: string;
      responsible: string;
    };
    dataCollection: {
      identification: string[];
      navigation: string[];
      business: string[];
    };
    purposes: {
      contact: string;
      services: string;
      marketing: string;
      improvement: string;
      legal: string;
    };
    rights: {
      access: string;
      rectification: string;
      deletion: string;
      opposition: string;
      consultation: string;
      complaint: string;
    };
    internationalTransfer?: {
      title: string;
      content: string;
      note?: string;
    };
  };
  terms: {
    acceptance: {
      text: string;
      warning: string;
    };
    services: {
      description: string;
      list: Array<{ title: string; description: string }>;
    };
    jurisdiction: {
      law: string;
      courts: string;
    };
  };
  cookies: {
    intro: string;
    types: {
      necessary: { title: string; description: string };
      analytics: { title: string; description: string };
      functional: { title: string; description: string };
      marketing: { title: string; description: string };
    };
  };
}
```

### Datos que se Recopilan

1. **Identificación**:
   - Nombre completo
   - Correo electrónico
   - Teléfono
   - Cargo y empresa (opcional)
   - ID fiscal (NIT/RUT/RUC) para facturación

2. **Navegación**:
   - IP
   - Navegador y dispositivo
   - Páginas visitadas
   - Cookies

3. **Empresariales**:
   - Info de empresa
   - Desafíos y objetivos
   - Respuestas diagnóstico

### Finalidades

- **Contacto**: Responder consultas
- **Servicios**: Proporcionar consultoría
- **Marketing**: Enviar info (con consentimiento)
- **Mejora**: Analizar uso del sitio
- **Legal**: Cumplimiento regulatorio

### Derechos del Titular

- 🔍 **Acceso**: Conocer qué datos tenemos
- ✏️ **Rectificación**: Corregir datos inexactos
- 🗑️ **Supresión**: Eliminar datos
- 🚫 **Oposición**: Oponerse al tratamiento
- 📋 **Consulta**: Consultar datos
- ⚠️ **Reclamo**: Presentar quejas

---

## 🔧 Hook useLegalContent

### Uso en Client Components

```tsx
'use client';

import { useLegalContent } from '@/lib/hooks/useLegalContent';

export default function PoliticaDatosPage() {
  const content = useLegalContent();
  
  return (
    <div>
      <p>{content.privacy.intro.text}</p>
      
      {/* Solo para CL/PE/EC */}
      {content.privacy.internationalTransfer && (
        <div className="bg-yellow-50 p-6">
          <h3>{content.privacy.internationalTransfer.title}</h3>
          <p>{content.privacy.internationalTransfer.content}</p>
          {content.privacy.internationalTransfer.note && (
            <p className="text-xs italic">
              {content.privacy.internationalTransfer.note}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
```

### Uso en Server Components

```tsx
import { getLegalContent } from '@/lib/hooks/useLegalContent';

export default function PoliticaDatosPage({ params }: { params: { lc: string } }) {
  const content = getLegalContent(params.lc);
  
  return (
    <div>
      <p>{content.privacy.intro.text}</p>
    </div>
  );
}
```

---

## 🗺️ Rutas por País

```
/es/legal/politica-datos           (Genérico)
/es-co/legal/politica-datos         (Colombia)
/es-cl/legal/politica-datos         (Chile + nota transferencia)
/es-pe/legal/politica-datos         (Perú + nota transferencia)
/es-ec/legal/politica-datos         (Ecuador + nota transferencia)

/es/legal/terminos                  (Todos iguales)
/es-co/legal/terminos
/es-cl/legal/terminos
/es-pe/legal/terminos
/es-ec/legal/terminos

/es/legal/cookies                   (Todos iguales)
/es-co/legal/cookies
/es-cl/legal/cookies
/es-pe/legal/cookies
/es-ec/legal/cookies

/es/legal/contratacion-facturacion  (Todos iguales, de EXP-9)
/es-co/legal/contratacion-facturacion
/es-cl/legal/contratacion-facturacion
/es-pe/legal/contratacion-facturacion
/es-ec/legal/contratacion-facturacion
```

---

## 🔄 Footer Dinámico

### Antes (URLs fijas)

```tsx
<Link href="/politica-privacidad">
  Política de Privacidad
</Link>
<Link href="/terminos-condiciones">
  Términos y Condiciones
</Link>
<Link href="/politica-cookies">
  Política de Cookies
</Link>
```

### Después (URLs dinámicas por país)

```tsx
'use client';

import { useCountryOptional } from '@/context/CountryProvider';

export function Footer() {
  const country = useCountryOptional();
  const locale = country?.lc || 'es';
  
  return (
    <footer>
      <Link href={`/${locale}/legal/politica-datos`}>
        Política de Datos
      </Link>
      <Link href={`/${locale}/legal/terminos`}>
        Términos
      </Link>
      <Link href={`/${locale}/legal/cookies`}>
        Cookies
      </Link>
      <Link href={`/${locale}/legal/contratacion-facturacion`}>
        Facturación
      </Link>
    </footer>
  );
}
```

**Resultado**:
- Usuario en `es-co`: Links apuntan a `/es-co/legal/...`
- Usuario en `es-cl`: Links apuntan a `/es-cl/legal/...`
- Usuario sin país: Links apuntan a `/es/legal/...`

---

## 🎨 Diseño Consistente

### Hero (igual que otras legales)

```tsx
<section className="gradient-hero py-16">
  <div className="container-custom text-center">
    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
      <Shield className="h-8 w-8 text-white" />
    </div>
    <h1 className="text-h1-mobile md:text-h1-desktop text-white mb-4">
      Política de Protección de Datos
    </h1>
    {/* ... */}
  </div>
</section>
```

### Secciones

```tsx
<div className="bg-white rounded-card shadow-card p-8 mb-8">
  <h2 className="text-2xl font-bold mb-4">Título</h2>
  {/* contenido */}
</div>
```

### Info Boxes

```tsx
// Azul (info)
<div className="bg-blue-50 border-l-4 border-brand-turquoise p-4 rounded">

// Amarillo (advertencia - solo CL/PE/EC)
<div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">

// Verde (success)
<div className="bg-green-100 rounded-full">
```

---

## ⚖️ Aspectos Legales Clave

### 1. Responsable Único

```
Forja Digital AE SAS (Colombia)
- NIT: 900.XXX.XXX-1
- Domicilio: Bogotá D.C., Colombia
- Ley aplicable: Ley 1581 de 2012 (Colombia)
```

### 2. Transferencia Internacional (CL/PE/EC)

**Lenguaje claro**:
- ✅ "Tus datos serán procesados en Colombia"
- ✅ "Al proporcionar tus datos, aceptas esta transferencia"
- ✅ "No estamos sujetos a [ley local], pero respetamos principios internacionales"

**Lo que NO decimos**:
- ❌ "Cumplimos con la ley [país local]"
- ❌ "Nos sometemos a autoridades locales"
- ❌ "Proveemos garantías según [ley local]"

### 3. Derechos del Titular

**Todos los países**:
- Acceso, rectificación, supresión, oposición

**Colombia específico**:
- Reclamo ante SIC (Superintendencia de Industria y Comercio)

**Otros países**:
- Reclamo ante "autoridad de protección de datos correspondiente" (genérico)

---

## 📊 Comparación Páginas Antiguas vs Nuevas

| Aspecto | Antiguas | Nuevas |
|---------|----------|--------|
| **Rutas** | `/politica-privacidad` | `/{lc}/legal/politica-datos` |
| | `/terminos-condiciones` | `/{lc}/legal/terminos` |
| | `/politica-cookies` | `/{lc}/legal/cookies` |
| **Contenido** | Hardcoded | Base + Overlay |
| **Transferencia Internacional** | No mencionada | Explícita para CL/PE/EC |
| **Responsable** | "ForjaDigitalAE" | {ORG.legalName} |
| **País-específico** | No | Sí (overlays) |
| **Footer** | URLs fijas | URLs dinámicas por país |
| **SEO** | Por página | Por página + país |

---

## ✅ Checklist

### Contenido Base
- [x] Interface `LegalContent` definida
- [x] `legalContentBase` completo
- [x] Datos que recopilamos (3 categorías)
- [x] Finalidades (5 tipos)
- [x] Derechos (6 tipos)
- [x] Términos y servicios
- [x] Cookies (4 tipos)

### Overlays por País
- [x] Colombia: Sin transferencia internacional
- [x] Chile: Con nota transferencia + Ley 19.628
- [x] Perú: Con nota transferencia + Ley 29733
- [x] Ecuador: Con nota transferencia + Ley Orgánica

### Páginas
- [x] Layout simple
- [x] Política de Datos
- [x] Términos y Condiciones
- [x] Política de Cookies
- [x] Contratación y Facturación (de EXP-9)

### Integración
- [x] Hook `useLegalContent` (client)
- [x] Función `getLegalContent` (server)
- [x] Footer actualizado con URLs dinámicas
- [x] Deep merge para overlays

### SEO y Estilo
- [x] Metadata por página
- [x] Schema.org JSON-LD
- [x] Mismo diseño que legales anteriores
- [x] Responsive
- [x] Accesibilidad

---

## 🚀 Próximos Pasos

### Prioridad Alta

1. **Deprecar rutas antiguas**:
   - [ ] Crear redirects 301:
     - `/politica-privacidad` → `/es/legal/politica-datos`
     - `/terminos-condiciones` → `/es/legal/terminos`
     - `/politica-cookies` → `/es/legal/cookies`

2. **Sitemap**:
   - [ ] Agregar todas las rutas legales al sitemap
   - [ ] Canonical URLs por país

### Prioridad Media

3. **Contenido Expandido**:
   - [ ] Ejemplos concretos de uso de datos
   - [ ] Proceso detallado para ejercer derechos
   - [ ] Tabla de cookies específicas usadas

4. **Testing**:
   - [ ] Verificar todas las URLs funcionan
   - [ ] Verificar overlay se aplica correctamente
   - [ ] Verificar footer links funcionan

---

**✅ Páginas Legales Localizadas Implementadas**

