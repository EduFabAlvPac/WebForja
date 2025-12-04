# Legal Stamp - Guía de Uso

## 📋 Resumen

Se ha implementado un sistema centralizado de constantes de organización y componentes de sello legal para Forja Digital AE SAS, operando en `www.forjadigital.com` como exportadora de servicios desde Colombia.

## 🎯 Entregables Completados

### 1. `lib/org.ts` - Constantes Globales ✅

Archivo con todas las constantes de marca y entidad legal:

```typescript
import { ORG } from '@/lib/org';

// Información disponible:
ORG.legalName              // "Forja Digital AE SAS"
ORG.nit                    // "NIT 900.XXX.XXX-1"
ORG.countryOfIncorporation // "Colombia"
ORG.city                   // "Bogotá D.C."
ORG.email                  // "contacto@forjadigital.com"
ORG.phoneMain              // "+57 XXX XXX XXXX"
ORG.baseUrl                // URL base del sitio
ORG.businessType           // "Exportación de servicios"
ORG.brandName              // "Forja Digital - AE"
ORG.tagline                // "Arquitectos del Crecimiento PYME"
```

### 2. `app/layout.tsx` - Metadata Actualizado ✅

El archivo de layout ahora utiliza las constantes de `ORG` para:

- ✅ `metadataBase`: `new URL(ORG.baseUrl)`
- ✅ `title`: Usa `ORG.brandName`
- ✅ `authors`, `creator`, `publisher`: Usan `ORG.legalName`
- ✅ OpenGraph: Usa `ORG.baseUrl`, `ORG.brandName`, `ORG.tagline`
- ✅ Twitter: Usa `ORG.social.twitter`

### 3. `components/site/LegalStamp.tsx` - Componente de Sello Legal ✅

Componente reutilizable con dos variantes y una versión inline.

## 📖 Ejemplos de Uso

### Uso Estándar (Footer, Páginas Legales)

```tsx
import { LegalStamp } from '@/components/site/LegalStamp';

export function Footer() {
  return (
    <footer>
      {/* Contenido del footer */}
      
      <div className="mt-8">
        <LegalStamp />
      </div>
    </footer>
  );
}
```

**Output:**
```
┃ Operado por Forja Digital AE SAS
┃ NIT 900.XXX.XXX-1 • Bogotá D.C., Colombia
┃ 
┃ Exportación de servicios
┃ 
┃ Contacto: contacto@forjadigital.com
┃ Teléfono: +57 XXX XXX XXXX
```

### Modo Compacto (Mobile, Espacios Reducidos)

```tsx
import { LegalStamp } from '@/components/site/LegalStamp';

export function MobileFooter() {
  return (
    <footer className="md:hidden">
      <LegalStamp compact />
    </footer>
  );
}
```

**Output:**
```
Forja Digital AE SAS
NIT 900.XXX.XXX-1 (Colombia)
Exportación de servicios
```

### Versión Inline (En Párrafos)

```tsx
import { LegalStampInline } from '@/components/site/LegalStamp';

export function LegalPage() {
  return (
    <div>
      <p>
        © 2024 Todos los derechos reservados. <LegalStampInline />
      </p>
    </div>
  );
}
```

**Output:**
```
© 2024 Todos los derechos reservados. Operado por Forja Digital AE SAS – NIT 900.XXX.XXX-1 (Colombia). Exportación de servicios.
```

## 🎨 Props del Componente

### `LegalStamp`

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `compact` | `boolean` | `false` | Activa el modo compacto para espacios reducidos |
| `className` | `string` | `''` | Clases CSS adicionales para personalización |

### `LegalStampInline`

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `className` | `string` | `''` | Clases CSS adicionales para personalización |

## 🔧 Personalización con Clases

```tsx
// Con fondo personalizado
<LegalStamp className="bg-slate-100 p-4 rounded-lg" />

// Con tamaño de fuente personalizado
<LegalStamp compact className="text-base" />

// Con alineación personalizada
<LegalStamp className="text-center" />
```

## ♿ Accesibilidad

Todos los componentes incluyen:

- ✅ `role="contentinfo"` para identificación semántica
- ✅ `aria-label` descriptivo
- ✅ Contraste adecuado para WCAG AA
- ✅ Responsive y mobile-friendly

## 🔄 Integración Sugerida

### Footer Principal

Reemplazar las líneas 206-208 en `components/layout/footer/Footer.tsx`:

```tsx
// ❌ ANTES
<p className="text-xs text-gray-500">
  Registro Mercantil | NIT: En trámite | Cámara de Comercio de Bogotá
</p>

// ✅ DESPUÉS
import { LegalStamp } from '@/components/site/LegalStamp';

<LegalStamp compact className="text-gray-300" />
```

### Páginas Legales

En páginas como `/politica-privacidad`, `/terminos-condiciones`:

```tsx
import { LegalStamp } from '@/components/site/LegalStamp';

export default function PoliticaPrivacidad() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1>Política de Privacidad</h1>
      
      {/* Contenido */}
      
      <div className="mt-12 border-t pt-8">
        <LegalStamp />
      </div>
    </div>
  );
}
```

## ✅ Criterios de Aceptación Cumplidos

- ✅ **Constantes Globales**: Archivo `lib/org.ts` creado con toda la información legal
- ✅ **Layout Actualizado**: `app/layout.tsx` usa `ORG.baseUrl` y constantes en metadata
- ✅ **Componente Disponible**: `<LegalStamp/>` creado con prop `compact`
- ✅ **No Altera Look & Feel**: Solo disponibilidad de recursos, sin cambios visuales automáticos
- ✅ **Profesional**: Código documentado, tipado y con ejemplos
- ✅ **Accesible**: Componentes cumplen estándares WCAG

## 🚀 Próximos Pasos (Opcionales)

1. **Actualizar NIT Real**: Reemplazar `"NIT 900.XXX.XXX-1"` con el número real
2. **Actualizar Teléfono**: Agregar el número completo en `ORG.phoneMain`
3. **Integrar en Footer**: Usar `<LegalStamp compact />` en el footer actual
4. **Variables de Entorno**: Configurar `NEXT_PUBLIC_BASE_URL` en `.env`

## 📝 Variables de Entorno

Crear/actualizar `.env.local`:

```bash
# URL base del sitio (producción)
NEXT_PUBLIC_BASE_URL=https://www.forjadigital.com

# Para desarrollo local
# NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## 🎓 TypeScript Support

El archivo exporta el tipo `OrgInfo` para uso en TypeScript:

```typescript
import { ORG, type OrgInfo } from '@/lib/org';

function useOrgInfo(): OrgInfo {
  return ORG;
}
```

---

**Implementado por**: CURSOR (Next.js Architect)  
**Fecha**: Diciembre 2024  
**Estado**: ✅ Completo y listo para uso

