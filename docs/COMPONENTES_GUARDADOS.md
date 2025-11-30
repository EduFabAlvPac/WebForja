# 📦 Componentes Guardados para Uso Futuro

Este documento contiene componentes que fueron removidos del flujo principal pero se mantienen disponibles para uso futuro.

---

## 1. ClientLogosSection

**Ubicación**: `components/sections/ClientLogosSection.tsx`

**Estado**: ✅ Componente completo y funcional

**Razón de remoción**: Usuario no lo considera necesario en homepage

**Cuándo usar**:
- Páginas de "Nosotros" o "Clientes"
- Landing pages B2B
- Secciones de credibilidad/confianza
- Footer con logos de partners

### Features
- ✅ 6 logos de clientes (Clearbit CDN)
- ✅ Escala de grises con hover color
- ✅ Lazy loading con next/image
- ✅ Scroll horizontal en móvil
- ✅ Grid 3x2 en desktop
- ✅ ARIA labels claros

### Reactivar
```tsx
import { ClientLogosSection } from '@/components/sections/ClientLogosSection'

<ClientLogosSection />
```

---

## 2. ThreePillarsSection

**Ubicación**: `components/sections/ThreePillarsSection.tsx`

**Estado**: ✅ Componente completo y funcional

**Razón de remoción**: Usuario no lo considera necesario en homepage

**Cuándo usar**:
- Página de servicios principal
- Landing pages de categorías
- Secciones de "Qué Hacemos"
- Páginas de presentación corporativa

### Features
- ✅ 3 Cards con colores distintivos (Navy/Teal/Purple)
- ✅ Iconos lucide-react (Compass, Users, Rocket)
- ✅ Grid 3 cols desktop / 1 móvil
- ✅ CTAs específicos a cada categoría
- ✅ Hover effects (translate + shadow)
- ✅ Textos escaneables con bullets

### Pilares
1. **Estrategia & Transformación** (Navy)
2. **Talento & Finanzas** (Teal)
3. **Comercial & Operaciones** (Purple)

### Reactivar
```tsx
import { ThreePillarsSection } from '@/components/sections/ThreePillarsSection'

<ThreePillarsSection />
```

---

## 3. ProcessStepperSection

**Ubicación**: `components/sections/ProcessStepperSection.tsx`

**Estado**: ✅ Componente completo y funcional

**Razón de remoción**: Contenido redundante con MetodologiaSection

**Cuándo usar**:
- Páginas de servicios individuales
- Landing pages específicas
- Secciones de "Cómo Trabajamos"
- Páginas de onboarding de clientes

### Features
- ✅ 5 fases FORJA® con descripciones
- ✅ Paso actual resaltado con animaciones
- ✅ Progress bar con Radix UI
- ✅ Botones interactivos para explorar fases
- ✅ 3 microcopys de beneficios
- ✅ CTA final con gradiente

### Reactivar
```tsx
import { ProcessStepperSection } from '@/components/sections/ProcessStepperSection'

<ProcessStepperSection />
```

---

## Componentes Base Relacionados

### ProcessStepper (UI Component)

**Ubicación**: `components/ui/process-stepper.tsx`

**Estado**: ✅ Activo y disponible

**Props**:
```typescript
interface ProcessStepperProps {
  currentStep: number
  steps: ProcessStep[]
  orientation?: 'horizontal' | 'vertical'
  className?: string
}
```

---

## Orden Homepage Actual (Limpio)

```
1. HeroSection
2. StatsSection              ← Directo después del Hero
3. PainPointsSection
4. ServicesSection
5. MetodologiaSection
6. CaseStudiesSection
7. CTASection
```

**Componentes removidos**:
- ~~ClientLogosSection~~
- ~~ThreePillarsSection~~
- ~~ProcessStepperSection~~

---

## Historial de Cambios

| Fecha | Componente | Acción | Commit |
|-------|------------|--------|--------|
| 2025-11-30 | ProcessStepperSection | Creado y removido | 963e22e, af80fd1 |
| 2025-11-30 | ClientLogosSection | Creado y removido | 7fd36a4, (pending) |
| 2025-11-30 | ThreePillarsSection | Creado y removido | 7fd36a4, (pending) |

---

**Mantenido por**: AI Assistant  
**Última actualización**: 30 Nov 2025

