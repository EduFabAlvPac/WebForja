# ProcessStepper Component - FORJA® Design System

## 📋 Descripción

Componente de stepper (indicador de progreso por pasos) construido con **Radix UI Progress** y **Framer Motion** para mostrar el progreso de un proceso de múltiples pasos.

---

## ✨ Características

### ✅ Funcionalidades Core:
- **5 pasos configurables** (o cualquier número)
- **Current step indicator** con animación pulsante
- **Check marks** para pasos completados
- **Labels y descripciones** personalizables
- **Barra de progreso** con Radix UI Progress

### ✅ Accesibilidad (WCAG 2.1):
- ✅ `aria-valuemin="0"`
- ✅ `aria-valuemax="100"`
- ✅ `aria-valuenow="{progressPercentage}"`
- ✅ `aria-label` descriptivo

### ✅ Responsive:
- **Horizontal layout** en desktop
- **Vertical layout** en mobile (opcional)
- Adaptación automática de tamaños

### ✅ Animaciones:
- Entrada escalonada (stagger) con Framer Motion
- Pulso en el paso actual
- Transición suave de la barra de progreso
- Check mark animado para pasos completados

---

## 🎨 Variantes de Estado

### Estados de Paso:

| Estado | Visual | Descripción |
|--------|--------|-------------|
| **Completed** | ✅ Verde con check | Pasos anteriores al actual |
| **Current** | 🔥 Gradiente Fire→Teal + Pulso | Paso en progreso |
| **Pending** | ⚪ Gris | Pasos futuros |

---

## 📦 Uso

### Importación:

```tsx
import { ProcessStepper } from '@/components/ui/process-stepper'
// o
import { ProcessStepper } from '@/components/ui'
```

### Ejemplo Básico:

```tsx
<ProcessStepper
  currentStep={3}
  steps={[
    { label: 'Diagnóstico', description: 'Rayos-X Empresarial' },
    { label: 'Diseño', description: 'Arquitectura de Solución' },
    { label: 'Desarrollo', description: 'Implementación Ágil' },
    { label: 'Despliegue', description: 'Puesta en Producción' },
    { label: 'Soporte', description: 'Acompañamiento Continuo' },
  ]}
/>
```

### Ejemplo con Orientación Vertical:

```tsx
<ProcessStepper
  currentStep={2}
  orientation="vertical"
  steps={[
    { label: 'Paso 1' },
    { label: 'Paso 2' },
    { label: 'Paso 3' },
  ]}
/>
```

### Ejemplo Sin Descripciones:

```tsx
<ProcessStepper
  currentStep={4}
  steps={[
    { label: 'Inicio' },
    { label: 'Progreso' },
    { label: 'Revisión' },
    { label: 'Aprobación' },
    { label: 'Finalizado' },
  ]}
/>
```

---

## 🔧 Props

### `ProcessStepperProps`

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `currentStep` | `number` | **Required** | Paso actual (1-indexed) |
| `steps` | `ProcessStep[]` | **Required** | Array de pasos |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Orientación del stepper |
| `className` | `string` | `undefined` | Clases CSS adicionales |

### `ProcessStep`

| Prop | Tipo | Descripción |
|------|------|-------------|
| `label` | `string` | Texto del paso (requerido) |
| `description` | `string` | Descripción opcional del paso |

---

## 🎯 Casos de Uso

### 1. Metodología FORJA® (5 Fases)

**El Sistema de 5 Fases que Elimina el Caos Digital**

```tsx
<ProcessStepper
  currentStep={3}
  steps={[
    { label: 'Fundamentar', description: 'No Puedes Mejorar lo que No Mides' },
    { label: 'Orientar', description: 'Estrategia Clara, Ejecución Efectiva' },
    { label: 'Rediseñar', description: 'Transformación en Acción' },
    { label: 'Justificar', description: 'Los Números No Mienten' },
    { label: 'Acompañar', description: 'El Cambio se Sostiene con Acompañamiento' },
  ]}
/>
```

**Descripción de cada fase:**

1. **01 - Fundamentar**: Diagnóstico profundo de tu arquitectura actual (estrategia, procesos, tecnología, talento y finanzas)
2. **02 - Orientar**: Co-diseñamos el blueprint estratégico que integra la visión de negocio con capacidades tecnológicas
3. **03 - Rediseñar**: Ejecutamos el plan: optimizamos procesos, implementamos tecnología, capacitamos equipos
4. **04 - Justificar**: Medimos el impacto real de la transformación con KPIs objetivos, ROI y valor creado
5. **05 - Acompañar**: No te dejamos solo. Hacemos seguimiento continuo y te acompañamos en la evolución

### 2. Proceso de Venta

```tsx
<ProcessStepper
  currentStep={2}
  steps={[
    { label: 'Contacto', description: 'Primera reunión' },
    { label: 'Propuesta', description: 'Presentación de solución' },
    { label: 'Contrato', description: 'Firma de acuerdo' },
    { label: 'Kickoff', description: 'Inicio del proyecto' },
    { label: 'Entrega', description: 'Proyecto finalizado' },
  ]}
/>
```

### 3. Onboarding de Usuario

```tsx
<ProcessStepper
  currentStep={1}
  steps={[
    { label: 'Registro', description: 'Crear cuenta' },
    { label: 'Perfil', description: 'Completar información' },
    { label: 'Verificación', description: 'Confirmar email' },
    { label: 'Configuración', description: 'Preferencias' },
    { label: 'Listo', description: 'Comenzar a usar' },
  ]}
/>
```

---

## 🎨 Personalización

### Colores

El componente usa las variables de color de FORJA®:

- **Current step**: Gradiente `from-forja-fire to-forja-teal`
- **Completed**: Verde (`bg-green-500`)
- **Pending**: Gris (`bg-slate-200`)

### Tamaños

- **Horizontal**: Círculos de 12x12 (3rem)
- **Vertical**: Círculos de 10x10 (2.5rem)

---

## ♿ Accesibilidad

### ARIA Attributes:

```tsx
<Progress.Root
  aria-valuemin={0}
  aria-valuemax={100}
  aria-valuenow={progressPercentage}
  aria-label={`Progreso: Paso ${currentStep} de ${steps.length}`}
>
```

### Keyboard Navigation:

El componente es visual y no requiere interacción directa. Si necesitas navegación por teclado, envuelve cada paso en un botón.

---

## 🧪 Testing

### Validar en Sandbox:

```
http://localhost:3001/sandbox
```

Scroll hasta la sección **"Process Stepper - Metodología FORJA®"**

### Ejemplos en Sandbox:

1. ✅ **Paso 1** - Inicio del proyecto
2. ✅ **Paso 3** - En desarrollo
3. ✅ **Paso 5** - Proyecto completado
4. ✅ **Pasos personalizados** - Proceso de venta
5. ✅ **Responsive** - Adaptación automática

---

## 📊 Validaciones

### TypeScript:
```bash
npx tsc --noEmit --skipLibCheck
```
✅ **0 errores**

### Linter:
```bash
npm run lint
```
✅ **0 errores**

### Accesibilidad:
- ✅ ARIA attributes correctos
- ✅ Contraste de colores WCAG AA
- ✅ Texto legible en todos los estados

---

## 🚀 Implementación Técnica

### Stack:
- **Radix UI Progress** (`@radix-ui/react-progress`)
- **Framer Motion** (animaciones)
- **Tailwind CSS** (estilos)
- **Lucide React** (iconos)

### Características Técnicas:

1. **Validación de currentStep**: 
   - Asegura que esté entre 1 y `steps.length`
   
2. **Cálculo de progreso**:
   ```tsx
   const progressPercentage = ((currentStep - 1) / (steps.length - 1)) * 100
   ```

3. **Animaciones escalonadas**:
   ```tsx
   transition={{ delay: index * 0.1 }}
   ```

4. **Pulso en paso actual**:
   ```tsx
   animate={{
     boxShadow: [
       '0 0 0 0 rgba(237, 116, 66, 0.4)',
       '0 0 0 10px rgba(237, 116, 66, 0)',
     ],
   }}
   ```

---

## 📁 Archivos

- **Componente**: `components/ui/process-stepper.tsx`
- **Export**: `components/ui/index.ts`
- **Sandbox**: `app/sandbox/page.tsx` (5 ejemplos)
- **Documentación**: `docs/PROCESS_STEPPER_COMPONENT.md`

---

## ✅ Checklist de Implementación

- ✅ Componente creado con TypeScript
- ✅ Radix UI Progress integrado
- ✅ Framer Motion para animaciones
- ✅ ARIA attributes correctos (`aria-valuemin/max/now`)
- ✅ Responsive (horizontal/vertical)
- ✅ 5 ejemplos en Sandbox
- ✅ Exportado en `components/ui/index.ts`
- ✅ 0 errores TypeScript
- ✅ 0 errores Linter
- ✅ Documentación completa

---

## 🎉 Resultado

El componente `ProcessStepper` está **100% implementado** y listo para usar en cualquier parte del portal.

**Características destacadas:**
- ✅ Animaciones fluidas y profesionales
- ✅ Accesibilidad WCAG 2.1
- ✅ Responsive design
- ✅ Fácil de usar y personalizar
- ✅ Integrado con el Design System FORJA®

---

**🎯 ¿Listo para usar en producción!**

