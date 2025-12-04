# 🚀 Quick Start - Formularios Localizados

Guía ultra-rápida para usar formularios localizados en 2 minutos.

---

## ✅ Ya Implementado

Sistema completo de formularios con ID fiscal localizado + leyenda del proveedor.

---

## 💡 Concepto en 30 Segundos

```
Cliente (dinámico):  NIT/RUT/RUC según país 🇨🇴🇨🇱🇵🇪🇪🇨
Proveedor (fijo):    NIT 900.XXX.XXX-1 (Colombia)
```

---

## 🎯 Cómo Funciona

### Colombia 🇨🇴

```tsx
// Usuario en /es-co/contacto ve:

NIT 🇨🇴 (de tu empresa) (opcional)
[900.XXX.XXX-X_________________]
Formato: 900.XXX.XXX-X

ℹ️ Proveedor: Forja Digital AE SAS – NIT 900.XXX.XXX-1 (Colombia)
```

### Chile 🇨🇱

```tsx
// Usuario en /es-cl/contacto ve:

RUT 🇨🇱 (de tu empresa) (opcional)
[XX.XXX.XXX-X__________________]
Formato: XX.XXX.XXX-X

ℹ️ Proveedor: Forja Digital AE SAS – NIT 900.XXX.XXX-1 (Colombia)
```

---

## 📦 Componentes Disponibles

### `<CompanyIdField />` - Campo ID Fiscal

```tsx
import { CompanyIdField } from '@/components/forms/CompanyIdField';

// Con React Hook Form
<CompanyIdField
  {...register('companyId')}
  error={errors.companyId?.message}
  touched={touchedFields.companyId}
  required={false}
/>
```

**Automáticamente muestra**:
- Label correcto (NIT/RUT/RUC)
- Placeholder con formato
- Hint con formato
- Bandera del país

### `<ProviderLegalNote />` - Leyenda Legal

```tsx
import { ProviderLegalNote } from '@/components/forms/ProviderLegalNote';

// Compacta (recomendada para formularios)
<ProviderLegalNote variant="compact" />

// Con fondo
<ProviderLegalNote />

// Inline
<ProviderLegalNoteInline />
```

---

## 🔧 Uso en Formulario

### Setup (Una Vez)

```tsx
'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { CompanyIdField } from '@/components/forms/CompanyIdField';
import { ProviderLegalNote } from '@/components/forms/ProviderLegalNote';
import { useCountryOptional } from '@/context/CountryProvider';

export function MyContactForm() {
  const country = useCountryOptional();
  
  const { register, handleSubmit, setValue, formState } = useForm({
    // ... config
  });
  
  // Guardar código de país
  useEffect(() => {
    if (country) {
      setValue('countryCode', country.code);
    }
  }, [country, setValue]);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Otros campos */}
      
      {/* Campo ID Fiscal */}
      <CompanyIdField
        {...register('companyId')}
        error={formState.errors.companyId?.message}
        touched={formState.touchedFields.companyId}
      />
      
      <button type="submit">Enviar</button>
      
      {/* Leyenda del proveedor */}
      <ProviderLegalNote variant="compact" className="mt-2" />
    </form>
  );
}
```

---

## 🌎 Por País

### Colombia 🇨🇴

```tsx
// Label: "NIT 🇨🇴 (de tu empresa)"
// Placeholder: "900.XXX.XXX-X"
// Validación: 9-12 dígitos
// countryCode: "co"
```

### Chile 🇨🇱

```tsx
// Label: "RUT 🇨🇱 (de tu empresa)"
// Placeholder: "XX.XXX.XXX-X"
// Validación: 7-8 dígitos + DV
// countryCode: "cl"
```

### Perú 🇵🇪

```tsx
// Label: "RUC 🇵🇪 (de tu empresa)"
// Placeholder: "XXXXXXXXXXX"
// Validación: 11 dígitos
// countryCode: "pe"
```

### Ecuador 🇪🇨

```tsx
// Label: "RUC 🇪🇨 (de tu empresa)"
// Placeholder: "XXXXXXXXXXXXX"
// Validación: 13 dígitos
// countryCode: "ec"
```

---

## 📝 Actualizar Schema

```typescript
import { z } from 'zod';

export const myFormSchema = z.object({
  // ... campos existentes
  
  // ✨ Agregar estos dos
  companyId: z
    .string()
    .max(50, 'ID fiscal demasiado largo')
    .optional()
    .or(z.literal('')),
  
  countryCode: z.string().optional(),
});
```

---

## 📤 Enviar con País

```typescript
const onSubmit = async (data) => {
  const response = await fetch('/api/contacto', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      nombre: data.nombre,
      email: data.email,
      companyId: data.companyId,      // ✨ ID Fiscal
      countryCode: data.countryCode,  // ✨ País
      // ... otros campos
    }),
  });
};
```

---

## 💾 Backend (API)

```typescript
// app/api/contacto/route.ts

export async function POST(request: Request) {
  const body = await request.json();
  
  // Extraer nuevos campos
  const {
    companyId,     // NIT/RUT/RUC del cliente
    countryCode,   // 'co', 'cl', 'pe', 'ec'
    // ... otros campos
  } = body;
  
  // Saber qué tipo de ID fiscal es
  const taxType = {
    'co': 'NIT',
    'cl': 'RUT',
    'pe': 'RUC',
    'ec': 'RUC',
  }[countryCode] || 'ID Fiscal';
  
  // Guardar en BD o Google Sheets
  // ...
}
```

---

## 🧪 Testing Rápido

### Verificar Localización

```typescript
import { CompanyIdField } from '@/components/forms/CompanyIdField';
import { CountryProvider } from '@/context/CountryProvider';

// Test Colombia
<CountryProvider initialLocale="es-co">
  <CompanyIdField />
</CountryProvider>
// Debe mostrar: "NIT 🇨🇴 (de tu empresa)"

// Test Chile
<CountryProvider initialLocale="es-cl">
  <CompanyIdField />
</CountryProvider>
// Debe mostrar: "RUT 🇨🇱 (de tu empresa)"
```

### Verificar Validación

```typescript
import { validateCompanyId } from '@/components/forms/CompanyIdField';

// Colombia
console.log(validateCompanyId('900123456', 'co')); // true ✅
console.log(validateCompanyId('123', 'co')); // Error ❌

// Chile
console.log(validateCompanyId('12345678-9', 'cl')); // true ✅
console.log(validateCompanyId('123', 'cl')); // Error ❌
```

---

## 🎨 Variantes de Leyenda

```tsx
// Compacta (para formularios)
<ProviderLegalNote variant="compact" />

// Con fondo (para páginas)
<ProviderLegalNote />

// Inline (para texto)
<p>
  Al enviar... <ProviderLegalNoteInline />
</p>
```

---

## 💰 Beneficios

| Aspecto | Beneficio |
|---------|-----------|
| **Localización** | Automática según país |
| **Validación** | Patrones por país |
| **Transparencia** | NIT Forja siempre visible |
| **Analytics** | countryCode para tracking |
| **UX** | Campo opcional |

---

## 🐛 Debug

### Verificar País Detectado

```typescript
const country = useCountryOptional();
console.log('País:', country?.code); // 'co', 'cl', etc.
console.log('Label:', country?.taxLabelClient); // 'NIT', 'RUT', etc.
```

### Verificar Payload

```typescript
const onSubmit = (data) => {
  console.log('CompanyId:', data.companyId);
  console.log('CountryCode:', data.countryCode);
};
```

---

## 📚 Docs Completas

- 📖 **Guía Técnica**: `docs/FORMULARIOS_LOCALIZADOS.md`
- 📄 **Resumen**: `EXP-8-IMPLEMENTACION-COMPLETA.md`

---

## ✅ Checklist

- [ ] Importar `CompanyIdField`
- [ ] Importar `ProviderLegalNote`
- [ ] Agregar `companyId` al schema
- [ ] Agregar `countryCode` al schema
- [ ] Usar `useCountryOptional()`
- [ ] Guardar `countryCode` con `useEffect`
- [ ] Integrar con `register()`
- [ ] Incluir en payload
- [ ] Mostrar leyenda legal

---

**🎉 Listo para Usar**

El sistema funciona **automáticamente** según el país del usuario! 🚀

