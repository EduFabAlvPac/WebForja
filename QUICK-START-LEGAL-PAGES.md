# 🚀 Quick Start - Páginas Legales Localizadas

Guía ultra-rápida para usar las páginas legales por país en 2 minutos.

---

## ✅ Ya Implementado

3 páginas legales con rutas por país y contenido adaptado:
- Política de Protección de Datos
- Términos y Condiciones
- Política de Cookies

---

## 📍 URLs

```
/{lc}/legal/politica-datos
/{lc}/legal/terminos
/{lc}/legal/cookies
/{lc}/legal/contratacion-facturacion  (de EXP-9)
```

**Ejemplo**:
```
/es-co/legal/politica-datos    (Colombia)
/es-cl/legal/politica-datos    (Chile + nota transferencia)
/es-pe/legal/politica-datos    (Perú + nota transferencia)
/es-ec/legal/politica-datos    (Ecuador + nota transferencia)
```

---

## 🔗 Footer Automático

El footer ya está configurado con links dinámicos:

```tsx
// Usuario en /es-co/ → links apuntan a /es-co/legal/...
// Usuario en /es-cl/ → links apuntan a /es-cl/legal/...
```

**No necesitas hacer nada**, funciona automáticamente! ✨

---

## 📄 Diferencia por País

### Colombia 🇨🇴

```
/{lc}/legal/politica-datos
```

- Responsable: Forja Digital AE SAS (Colombia)
- **SIN** nota de transferencia internacional
- Datos procesados localmente

### Chile/Perú/Ecuador 🌎

```
/{lc}/legal/politica-datos
```

- Responsable: Forja Digital AE SAS (Colombia)
- **CON** nota de transferencia internacional:

```
⚠️ Transferencia Internacional de Datos

Tus datos serán procesados en Colombia.
Al proporcionarlos, aceptas esta transferencia.

Nota: No estamos sujetos a la Ley [país local],
pero respetamos principios internacionales.
```

---

## 🔧 Cómo Usar el Contenido

### En Client Components

```tsx
'use client';

import { useLegalContent } from '@/lib/hooks/useLegalContent';

export default function MiComponente() {
  const content = useLegalContent();
  
  return (
    <div>
      <p>{content.privacy.intro.text}</p>
      
      {/* Solo para CL/PE/EC */}
      {content.privacy.internationalTransfer && (
        <div className="bg-yellow-50 p-6">
          <h3>{content.privacy.internationalTransfer.title}</h3>
          <p>{content.privacy.internationalTransfer.content}</p>
        </div>
      )}
    </div>
  );
}
```

### En Server Components

```tsx
import { getLegalContent } from '@/lib/hooks/useLegalContent';

export default function MiPagina({ params }: { params: { lc: string } }) {
  const content = getLegalContent(params.lc);
  
  return (
    <div>
      <p>{content.privacy.intro.responsible}</p>
      <ul>
        {content.privacy.dataCollection.identification.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

## 📋 Contenido Disponible

### Privacy

```typescript
content.privacy.intro.text
content.privacy.intro.responsible
content.privacy.dataCollection.identification[]
content.privacy.dataCollection.navigation[]
content.privacy.dataCollection.business[]
content.privacy.purposes.contact
content.privacy.purposes.services
content.privacy.purposes.marketing
content.privacy.purposes.improvement
content.privacy.purposes.legal
content.privacy.rights.access
content.privacy.rights.rectification
content.privacy.rights.deletion
content.privacy.rights.opposition
content.privacy.rights.consultation
content.privacy.rights.complaint
content.privacy.internationalTransfer?.title      // Solo CL/PE/EC
content.privacy.internationalTransfer?.content    // Solo CL/PE/EC
content.privacy.internationalTransfer?.note       // Solo CL/PE/EC
```

### Terms

```typescript
content.terms.acceptance.text
content.terms.acceptance.warning
content.terms.services.description
content.terms.services.list[]
content.terms.jurisdiction.law
content.terms.jurisdiction.courts
```

### Cookies

```typescript
content.cookies.intro
content.cookies.types.necessary.title
content.cookies.types.necessary.description
content.cookies.types.analytics.title
content.cookies.types.analytics.description
content.cookies.types.functional.title
content.cookies.types.functional.description
content.cookies.types.marketing.title
content.cookies.types.marketing.description
```

---

## 🧪 Testing Rápido

### 1. Verificar URLs

```bash
# Abrir en navegador:
http://localhost:3000/es-co/legal/politica-datos
http://localhost:3000/es-cl/legal/politica-datos  # Debe mostrar nota amarilla
http://localhost:3000/es-pe/legal/terminos
http://localhost:3000/es-ec/legal/cookies
```

### 2. Verificar Footer

```bash
# Navegar a cualquier página
# Footer debe tener 4 links legales + gestionar cookies
# Click en "Política de Datos" → debe ir a /{lc}/legal/politica-datos
```

### 3. Verificar Nota Transferencia

```tsx
// Solo visible en /es-cl/, /es-pe/, /es-ec/
// NO visible en /es-co/

if (content.privacy.internationalTransfer) {
  console.log('Nota visible para:', params.lc);
}
```

---

## 💡 Tips

### Agregar Nueva Página Legal

1. Crear `app/[lc]/legal/mi-nueva-pagina/page.tsx`
2. Usar `getLegalContent(params.lc)` o `useLegalContent()`
3. Seguir estructura de páginas existentes
4. Agregar link en footer si necesario

### Modificar Contenido Base

```typescript
// content/base/legal.ts

export const legalContentBase: LegalContent = {
  privacy: {
    intro: {
      text: "Tu nuevo texto aquí",  // ← Editar aquí
      // ...
    }
  }
}
```

### Agregar Overlay por País

```typescript
// content/es-cl/legal.ts

export const legalContentOverlay: Partial<LegalContent> = {
  privacy: {
    // Solo especifica lo que cambia
    rights: {
      complaint: 'Texto específico para Chile'
    }
  }
}
```

---

## 🚨 Importante

### ✅ Lenguaje Correcto

```
✓ "Responsable: Forja Digital AE SAS (Colombia)"
✓ "No estamos sujetos a [ley local]"
✓ "Respetamos principios internacionales"
```

### ❌ Evitar

```
✗ "Cumplimos con la ley de [país]"
✗ "Nos sometemos a autoridades locales"
✗ "Garantizamos protección según [ley local]"
```

**Razón**: Somos exportadores colombianos, no prometemos cumplir leyes específicas de clientes.

---

## 📚 Docs Completas

- 📖 **Guía Técnica**: `docs/LEGAL_PAGES_LOCALIZED.md`
- 📄 **Resumen**: `EXP-10-IMPLEMENTACION-COMPLETA.md`

---

**🎉 Listo para Usar**

Footer configurado, páginas funcionando, contenido adaptado por país! 🚀

