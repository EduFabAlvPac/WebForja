# Sistema de Formularios Localizados

**Versión**: 1.0  
**Fecha**: Diciembre 2024  
**Objetivo**: Formularios con campos de ID fiscal localizados + leyenda del proveedor

---

## 🎯 Concepto

Sistema que permite recoger el **ID fiscal del cliente** (NIT/RUT/RUC) según su país, mientras se mantiene fijo el **NIT del proveedor** (Forja Digital).

```
Campo dinámico:  Cliente → NIT/RUT/RUC (según país)
Campo fijo:      Proveedor → NIT 900.XXX.XXX-1 (Colombia)
```

---

## 📁 Componentes Implementados

### 1. `CompanyIdField` - Campo de ID Fiscal

**Ubicación**: `components/forms/CompanyIdField.tsx`

**Características**:
- Lee `taxLabelClient` del CountryContext
- Muestra placeholder con formato del país
- Validación simple por país
- Integración con React Hook Form

**Comportamiento por País**:

| País | Label | Formato | Validación |
|------|-------|---------|------------|
| 🇨🇴 Colombia | NIT | `900.XXX.XXX-X` | 9-12 dígitos |
| 🇨🇱 Chile | RUT | `XX.XXX.XXX-X` | 7-8 dígitos + DV |
| 🇵🇪 Perú | RUC | `XXXXXXXXXXX` | 11 dígitos |
| 🇪🇨 Ecuador | RUC | `XXXXXXXXXXXXX` | 13 dígitos |
| 🌎 Internacional | ID Fiscal | `N/A` | Mín. 5 caracteres |

**Uso Básico**:

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

**Props**:

```typescript
interface CompanyIdFieldProps {
  id?: string;                // ID del campo (default: 'companyId')
  error?: string;             // Mensaje de error
  touched?: boolean;          // Si el campo fue tocado
  className?: string;         // Clase CSS adicional
  showLabel?: boolean;        // Mostrar label (default: true)
  required?: boolean;         // Campo requerido (default: false)
}
```

### 2. `ProviderLegalNote` - Leyenda del Proveedor

**Ubicación**: `components/forms/ProviderLegalNote.tsx`

**Características**:
- Muestra información fija de Forja Digital
- Razón social, NIT, país, tipo de servicio
- 3 variantes de estilo

**Variantes**:

```tsx
// Default: Con fondo y borde
<ProviderLegalNote />

// Compact: Sin fondo
<ProviderLegalNote variant="compact" />

// Inline: Para usar en texto
<ProviderLegalNoteInline />
```

**Contenido**:

```
Proveedor: Forja Digital AE SAS – NIT 900.XXX.XXX-1 (Colombia). 
Exportación de servicios.

Todos los servicios se prestan desde Colombia bajo legislación colombiana.
```

---

## 💻 Integración en Formularios

### Formulario de Contacto

**Archivo**: `app/(marketing)/contacto/_components/contact-form.tsx`

**Cambios**:

1. **Importaciones**:
```typescript
import { CompanyIdField } from '@/components/forms/CompanyIdField';
import { ProviderLegalNote } from '@/components/forms/ProviderLegalNote';
import { useCountryOptional } from '@/context/CountryProvider';
```

2. **Hook de país**:
```typescript
const country = useCountryOptional();

// Guardar código de país
useEffect(() => {
  if (country) {
    setValue('countryCode', country.code);
  }
}, [country, setValue]);
```

3. **Campo de ID fiscal** (después de "Empresa"):
```tsx
<CompanyIdField
  {...register('companyId')}
  error={errors.companyId?.message}
  touched={touchedFields.companyId}
  required={false}
/>
```

4. **Leyenda del proveedor** (antes del botón):
```tsx
<Button type="submit">Enviar Mensaje</Button>
<ProviderLegalNote variant="compact" className="mt-2" />
```

5. **Envío con countryCode**:
```typescript
body: JSON.stringify({
  nombre: data.nombre,
  email: data.email,
  empresa: data.empresa,
  companyId: data.companyId,  // ✨ Nuevo
  reto: data.reto,
  countryCode: data.countryCode || country?.code || 'es',  // ✨ Nuevo
})
```

### Widget de Mensajes

**Archivo**: `components/widget/parts/MessagesForm.tsx`

**Cambios**:

1. **Importación**:
```typescript
import { useCountryOptional } from '@/context/CountryProvider';
```

2. **Hook de país**:
```typescript
const country = useCountryOptional();

useEffect(() => {
  if (country) {
    setValue('countryCode', country.code);
  }
}, [country, setValue]);
```

3. **Envío con countryCode**:
```typescript
body: JSON.stringify({
  email: data.email,
  message: data.message,
  countryCode: data.countryCode || country?.code || 'es',  // ✨ Nuevo
})
```

---

## 🗂️ Schema de Validación

**Archivo**: `lib/validations/contact-form.ts`

**Actualizado**:

```typescript
export const contactFormSchema = z.object({
  nombre: z.string().min(2, '...').max(100, '...'),
  email: z.string().email('...').refine(isCorpEmail, {...}),
  empresa: z.string().min(2, '...').max(150, '...'),
  
  // ✨ Nuevo: ID Fiscal (opcional)
  companyId: z
    .string()
    .max(50, 'ID fiscal demasiado largo')
    .optional()
    .or(z.literal('')),
  
  reto: z.string().min(10, '...').max(2000, '...'),
  aceptaPoliticas: z.boolean().refine((val) => val === true, {...}),
  
  // ✨ Nuevo: Código del país
  countryCode: z.string().optional(),
  
  website: z.string().max(0, '...').optional(), // Honeypot
});
```

**Valores por Defecto**:

```typescript
export const contactFormDefaults: ContactFormValues = {
  nombre: '',
  email: '',
  empresa: '',
  companyId: '',        // ✨ Nuevo
  reto: '',
  aceptaPoliticas: false,
  countryCode: '',      // ✨ Nuevo
  website: '',
};
```

---

## 🎨 Diseño Visual

### Campo de ID Fiscal

```
┌─────────────────────────────────────┐
│ NIT 🇨🇴 (de tu empresa) (opcional) │
│ ┌─────────────────────────────────┐ │
│ │ 900.XXX.XXX-X                  │ │ (placeholder)
│ └─────────────────────────────────┘ │
│ Formato: 900.XXX.XXX-X             │ (hint)
└─────────────────────────────────────┘
```

### Leyenda del Proveedor (Compact)

```
┌─────────────────────────────────────────────┐
│ ℹ️ Proveedor: Forja Digital AE SAS –       │
│    NIT 900.XXX.XXX-1 (Colombia).           │
│    Exportación de servicios.               │
└─────────────────────────────────────────────┘
```

---

## 🔄 Flujo por País

### Colombia 🇨🇴

```
1. Usuario colombiano visita /es-co/contacto
2. CountryProvider detecta: country.code = 'co'
3. CompanyIdField muestra:
   Label: "NIT 🇨🇴 (de tu empresa)"
   Placeholder: "900.XXX.XXX-X"
   Hint: "Formato: 900.XXX.XXX-X"
4. Usuario ingresa: "900123456"
5. Validación: /^\d{9,12}$/ ✅
6. Formulario envía:
   {
     companyId: "900123456",
     countryCode: "co"
   }
7. ProviderLegalNote muestra:
   "Proveedor: Forja Digital AE SAS – NIT 900.XXX.XXX-1 (Colombia)"
```

### Chile 🇨🇱

```
1. Usuario chileno visita /es-cl/contacto
2. CountryProvider detecta: country.code = 'cl'
3. CompanyIdField muestra:
   Label: "RUT 🇨🇱 (de tu empresa)"
   Placeholder: "XX.XXX.XXX-X"
   Hint: "Formato: XX.XXX.XXX-X"
4. Usuario ingresa: "12345678-9"
5. Validación: /^\d{7,8}[0-9kK]$/ ✅
6. Formulario envía:
   {
     companyId: "12345678-9",
     countryCode: "cl"
   }
7. ProviderLegalNote muestra:
   "Proveedor: Forja Digital AE SAS – NIT 900.XXX.XXX-1 (Colombia)"
```

---

## 🧪 Validación por País

### Funciones Helper

```typescript
/**
 * Validar ID fiscal según país
 */
export function validateCompanyId(
  value: string,
  countryCode?: string
): true | string {
  const cleaned = value.replace(/[\s.-]/g, '');
  
  switch (countryCode?.toLowerCase()) {
    case 'co': // Colombia - NIT
      if (!/^\d{9,12}$/.test(cleaned)) {
        return 'NIT inválido. Debe contener 9-12 dígitos';
      }
      break;
    
    case 'cl': // Chile - RUT
      if (!/^\d{7,8}[0-9kK]$/.test(cleaned)) {
        return 'RUT inválido. Formato: XX.XXX.XXX-X';
      }
      break;
    
    case 'pe': // Perú - RUC
      if (!/^\d{11}$/.test(cleaned)) {
        return 'RUC inválido. Debe contener 11 dígitos';
      }
      break;
    
    case 'ec': // Ecuador - RUC
      if (!/^\d{13}$/.test(cleaned)) {
        return 'RUC inválido. Debe contener 13 dígitos';
      }
      break;
    
    default: // Internacional
      if (cleaned.length < 5) {
        return 'ID Fiscal inválido. Mínimo 5 caracteres';
      }
  }
  
  return true;
}

/**
 * Formatear ID fiscal según país
 */
export function formatCompanyId(
  value: string,
  countryCode?: string
): string {
  const cleaned = value.replace(/[\s.-]/g, '');
  
  switch (countryCode?.toLowerCase()) {
    case 'co': // 900.XXX.XXX-X
      const parts = cleaned.match(/^(\d{3})(\d{3})(\d{3})(\d?)$/);
      if (parts) {
        return `${parts[1]}.${parts[2]}.${parts[3]}${parts[4] ? `-${parts[4]}` : ''}`;
      }
      return value;
    
    case 'cl': // XX.XXX.XXX-X
      const dv = cleaned.slice(-1);
      const number = cleaned.slice(0, -1);
      const formatted = number.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      return `${formatted}-${dv}`;
    
    default:
      return value;
  }
}
```

---

## 📊 Testing

### Test 1: Campo por País

```typescript
import { CompanyIdField } from '@/components/forms/CompanyIdField';
import { CountryProvider } from '@/context/CountryProvider';

// Colombia
<CountryProvider initialLocale="es-co">
  <CompanyIdField />
</CountryProvider>
// Muestra: "NIT 🇨🇴 (de tu empresa)"
// Placeholder: "900.XXX.XXX-X"

// Chile
<CountryProvider initialLocale="es-cl">
  <CompanyIdField />
</CountryProvider>
// Muestra: "RUT 🇨🇱 (de tu empresa)"
// Placeholder: "XX.XXX.XXX-X"
```

### Test 2: Validación

```typescript
import { validateCompanyId } from '@/components/forms/CompanyIdField';

// Colombia
expect(validateCompanyId('900123456', 'co')).toBe(true);
expect(validateCompanyId('123', 'co')).toBe('NIT inválido. Debe contener 9-12 dígitos');

// Chile
expect(validateCompanyId('12345678-9', 'cl')).toBe(true);
expect(validateCompanyId('123', 'cl')).toBe('RUT inválido. Formato: XX.XXX.XXX-X');
```

### Test 3: Envío de Formulario

```typescript
// Usuario en Colombia envía formulario
const payload = {
  nombre: 'Juan Pérez',
  email: 'juan@empresa.com',
  empresa: 'Mi Empresa SAS',
  companyId: '900123456',      // NIT
  reto: 'Necesitamos...',
  countryCode: 'co'            // ✅ País incluido
};

// Backend puede identificar el país y tipo de ID fiscal
```

---

## 🔍 Verificación Técnica

```bash
✅ TypeScript: Sin errores
✅ Linter: 0 errores
✅ CompanyIdField: Funcional por país
✅ ProviderLegalNote: Muestra info correcta
✅ Validación: Patrones por país
✅ Envío: countryCode incluido
```

---

## 📝 Checklist de Uso

### Para Desarrolladores

- [ ] Importar `CompanyIdField` en formulario
- [ ] Importar `ProviderLegalNote` en formulario
- [ ] Agregar `companyId` al schema de validación
- [ ] Agregar `countryCode` al schema de validación
- [ ] Integrar con React Hook Form (`register`)
- [ ] Incluir `countryCode` en payload de envío
- [ ] Mostrar `ProviderLegalNote` al pie del formulario

### Para Backend

- [ ] Recibir `companyId` en API
- [ ] Recibir `countryCode` en API
- [ ] Validar formato según `countryCode`
- [ ] Almacenar ambos campos
- [ ] Usar para análisis por país

---

## 🚀 Ejemplos de Uso

### Formulario Completo

```tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CompanyIdField } from '@/components/forms/CompanyIdField';
import { ProviderLegalNote } from '@/components/forms/ProviderLegalNote';
import { useCountryOptional } from '@/context/CountryProvider';

export function MyForm() {
  const country = useCountryOptional();
  
  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: zodResolver(myFormSchema),
  });
  
  useEffect(() => {
    if (country) {
      setValue('countryCode', country.code);
    }
  }, [country, setValue]);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Otros campos */}
      
      <CompanyIdField
        {...register('companyId')}
        error={formState.errors.companyId?.message}
        touched={formState.touchedFields.companyId}
      />
      
      <button type="submit">Enviar</button>
      
      <ProviderLegalNote variant="compact" className="mt-4" />
    </form>
  );
}
```

---

## ✨ Beneficios

1. **Localización Automática**: Campo se adapta al país del usuario
2. **Validación por País**: Patrones específicos de cada país
3. **Transparencia Legal**: Leyenda clara del proveedor
4. **Type-Safe**: TypeScript completo
5. **Reutilizable**: Componentes independientes
6. **Mantenible**: Fácil agregar países
7. **Tracking**: countryCode para analytics

---

**✅ Sistema Implementado y Funcional**

