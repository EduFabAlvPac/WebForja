# 📦 Componentes Guardados para Uso Futuro

Este documento contiene componentes que fueron removidos del flujo principal pero se mantienen disponibles para uso futuro.

---

## ProcessStepperSection

**Ubicación**: `components/sections/ProcessStepperSection.tsx`

**Estado**: ✅ Componente completo y funcional

**Razón de remoción**: Contenido redundante con MetodologiaSection

**Cuándo usar**:
- Páginas de servicios individuales
- Landing pages específicas
- Secciones de "Cómo Trabajamos"
- Páginas de onboarding de clientes

### Features Implementadas

- ✅ 5 fases FORJA® con descripciones
- ✅ Paso actual resaltado con animaciones
- ✅ Progress bar con Radix UI
- ✅ Botones interactivos para explorar fases
- ✅ 3 microcopys de beneficios
- ✅ CTA final con gradiente
- ✅ Animaciones framer-motion
- ✅ Accesibilidad completa (ARIA)

### Cómo Reactivar

```tsx
// En cualquier página:
import { ProcessStepperSection } from '@/components/sections/ProcessStepperSection'

export default function Page() {
  return (
    <>
      {/* ... otras secciones ... */}
      <ProcessStepperSection />
      {/* ... */}
    </>
  )
}
```

### Ejemplo de Uso

```tsx
// app/servicios/estrategia-transformacion/page.tsx
import { ProcessStepperSection } from '@/components/sections/ProcessStepperSection'

export default function EstrategiaPage() {
  return (
    <div>
      <ServiceHero data={estrategiaData} />
      <ProcessStepperSection /> {/* Aquí se vería bien */}
      <CaseStudiesSection />
    </div>
  )
}
```

---

## Componentes Base Relacionados

### ProcessStepper (UI Component)

**Ubicación**: `components/ui/process-stepper.tsx`

**Estado**: ✅ Activo y disponible

**Props**:
```typescript
interface ProcessStepperProps {
  currentStep: number        // Paso actual (1-5)
  steps: ProcessStep[]       // Array de pasos
  orientation?: 'horizontal' | 'vertical'
  className?: string
}

interface ProcessStep {
  label: string
  description?: string
}
```

**Ejemplo de uso directo**:
```tsx
import { ProcessStepper } from '@/components/ui/process-stepper'

const steps = [
  { label: 'Paso 1', description: 'Descripción' },
  { label: 'Paso 2', description: 'Descripción' },
  // ...
]

<ProcessStepper 
  currentStep={2} 
  steps={steps} 
  orientation="horizontal"
/>
```

---

## Estilos y Tokens Utilizados

### Colores
- `forja-navy` - Background principal
- `forja-fire` - Acentos y highlights
- `forja-teal` - Secundario
- `forja-purple` - Gradientes

### Animaciones
- Pulse ring en paso actual
- Check animation con spring
- Fade-in staggered
- Progress bar smooth transition

### Shadows
- `shadow-card` - Cards estándar
- `shadow-2xl` - CTA destacado

---

## Historial de Cambios

| Fecha | Acción | Commit |
|-------|--------|--------|
| 2025-11-30 | Creado | 963e22e |
| 2025-11-30 | Removido de homepage | (pending) |

---

## Notas

- El componente está **completamente funcional** y listo para usar
- **No requiere configuración adicional**
- Compatible con el sistema de diseño FORJA
- Accesibilidad validada (WCAG 2.1 AA)
- Responsive (mobile-first)

---

**Mantenido por**: AI Assistant  
**Última actualización**: 30 Nov 2025

