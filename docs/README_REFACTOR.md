# 📋 INVENTARIO DE CÓDIGO - FORJA DIGITAL AE

**Fecha de Auditoría:** 27 de Noviembre, 2025  
**Auditor:** Staff Engineer  
**Objetivo:** Mapear UI/UX y rutas sin modificar código productivo  
**Estado:** ✅ Completado

---

## 📊 RESUMEN EJECUTIVO

| Métrica | Cantidad | Notas |
|---------|----------|-------|
| **Páginas Totales** | 29 | Incluyendo páginas de servicio, nosotros, casos de éxito |
| **Componentes UI** | 13 | shadcn/ui + componentes custom |
| **Componentes Custom** | 45+ | Layout, sections, services, shared |
| **Colores en Uso** | 2 sistemas | `forja-*` (nuevo) + `brand-*` (legacy) |
| **Archivos con Estilos** | 73 | Archivos que usan colores FORJA/Brand |
| **Instancias de Estilos** | 1,986 | Total de clases bg-/text- encontradas |

---

## 🎨 SISTEMA DE COLORES

### Colores FORJA (Design Tokens - Nuevo)

| Color | Hex | Uso | Archivos Afectados |
|-------|-----|-----|-------------------|
| `forja-navy` | `#22335A` | Textos principales, títulos | 73 archivos |
| `forja-navy-700` | `#34497A` | Variante más clara | 5 archivos |
| `forja-fire` | `#ED7442` | CTAs, acentos principales | 73 archivos |
| `forja-teal` | `#52D6DE` | Acentos secundarios | 73 archivos |
| `forja-purple` | `#8060BF` | Acentos terciarios | 73 archivos |

**Ubicación:** `tailwind.config.ts` líneas 40-48

### Colores Brand (Legacy - Mantener compatibilidad)

| Color | Hex | Uso | Estado |
|-------|-----|-----|--------|
| `brand-navy` | `#22335A` | Igual a forja-navy | ⚠️ Duplicado |
| `brand-orange` | `#ED7442` | Igual a forja-fire | ⚠️ Duplicado |
| `brand-turquoise` | `#52D6DE` | Igual a forja-teal | ⚠️ Duplicado |
| `brand-purple` | `#8060BF` | Igual a forja-purple | ⚠️ Duplicado |
| `brand-coral` | `#E74C3C` | Usado en pain points | ✅ Único |
| `brand-gray` | `#B8B8B8` | Textos secundarios | ✅ Único |

**Ubicación:** `tailwind.config.ts` líneas 63-94

**⚠️ RIESGO:** Hay duplicación entre `forja-*` y `brand-*`. Migración debe ser gradual.

---

## 🧩 COMPONENTES SHADCN/UI

### Inventario de Componentes

| Componente | Archivo | Props Clave | Variantes | Riesgo | Recomendación |
|------------|---------|-------------|-----------|--------|---------------|
| **Button** | `components/ui/button.tsx` | `variant`, `size`, `asChild` | default, secondary, outline, ghost, link, destructive | 🟡 MEDIO | Usado en 19 archivos. Cambios afectan CTAs globales |
| **Card** | `components/ui/card.tsx` | N/A (composición) | N/A | 🟢 BAJO | Componente wrapper, cambios son seguros |
| **Input** | `components/ui/input.tsx` | `type`, `placeholder` | N/A | 🟢 BAJO | Solo en formularios |
| **Textarea** | `components/ui/textarea.tsx` | `rows`, `placeholder` | N/A | 🟢 BAJO | Solo en formularios |
| **Badge** | `components/ui/badge.tsx` | `variant` | default, secondary, outline, destructive | 🟢 BAJO | Decorativo, bajo impacto |
| **Progress** | `components/ui/progress.tsx` | `value` | N/A | 🟢 BAJO | Solo en ReadingProgressBar |
| **Tooltip** | `components/ui/tooltip.tsx` | `sideOffset` | N/A | 🟢 BAJO | Mejora UX, no crítico |
| **Dialog** | `components/ui/dialog.tsx` | N/A (composición) | N/A | 🟡 MEDIO | Usado en modales críticos |
| **Toast** | `components/ui/toast.tsx` | `variant` | default, destructive | 🟢 BAJO | Sistema de notificaciones |
| **Separator** | `components/ui/separator.tsx` | `orientation` | horizontal, vertical | 🟢 BAJO | Decorativo |

### Componentes UI Custom (No shadcn)

| Componente | Archivo | Propósito | Riesgo |
|------------|---------|-----------|--------|
| **ReadingProgressBar** | `components/ui/ReadingProgressBar.tsx` | Barra de progreso de lectura | 🟢 BAJO |
| **StickyCTABar** | `components/ui/StickyCTABar.tsx` | Barra flotante de CTA | 🟡 MEDIO |

---

## 📄 PÁGINAS Y RUTAS

### Estructura de Rutas

```
/                                    → Homepage
├── /nosotros                        → Sobre nosotros
│   ├── /equipo                      → Equipo profesional
│   ├── /historia                    → Nuestra historia
│   └── /testimonios                 → Testimonios
├── /servicios                       → Listado de servicios
│   ├── /estrategia-transformacion   → Categoría 1
│   │   ├── /arquitectura-estrategica
│   │   └── /transformacion-digital
│   ├── /talento-finanzas            → Categoría 2
│   │   ├── /gestion-talento-estrategico
│   │   └── /ingenieria-financiera
│   └── /comercial-operaciones       → Categoría 3
│       ├── /excelencia-operativa
│       └── /comercial-cliente
├── /casos-exito                     → Casos de éxito
│   ├── /cadena-retail
│   ├── /firma-contable
│   └── /textilera-regional
├── /contacto                        → Formulario de contacto
├── /politica-privacidad             → Legal
├── /politica-cookies                → Legal
├── /terminos-condiciones            → Legal
├── /design-tokens-test              → 🧪 TEST (eliminar)
└── /sandbox                         → 🧪 TEST (eliminar)
```

### Análisis de Páginas

| Página | Archivo | Componentes Clave | CTAs | Riesgo |
|--------|---------|-------------------|------|--------|
| **Homepage** | `app/page.tsx` | HeroSection, ServicesSection, PainPointsSection, MetodologiaSection, CaseStudiesSection, CTASection | 5+ CTAs | 🔴 ALTO |
| **Nosotros** | `app/nosotros/page.tsx` | PageHero, MisionVisionValores, DiferenciadoresSection, OurCommitment | 2 CTAs | 🟡 MEDIO |
| **Servicios (Lista)** | `app/servicios/page.tsx` | Cards de categorías | 3 CTAs | 🟡 MEDIO |
| **Servicio Individual** | `app/servicios/*/page.tsx` | ServiceHero, ProblemCard, ServiceAccordion, MethodologyTimeline, CaseStudy | 2-3 CTAs | 🟡 MEDIO |
| **Contacto** | `app/contacto/page.tsx` | Formulario completo | 1 CTA | 🟡 MEDIO |
| **Casos de Éxito** | `app/casos-exito/page.tsx` | Cards de casos | 3 CTAs | 🟢 BAJO |

---

## 🎯 CALL-TO-ACTIONS (CTAs)

### Inventario de CTAs por Tipo

| Tipo de CTA | Texto Común | Destino | Color | Archivos |
|-------------|-------------|---------|-------|----------|
| **Primary** | "Solicitar Diagnóstico", "Iniciar Evaluación" | `/contacto` | `forja-fire` / `brand-orange` | 15+ páginas |
| **Secondary** | "Ver Casos de Éxito", "Conocer Más" | `/casos-exito`, `/servicios/*` | `forja-navy` / `brand-navy` | 10+ páginas |
| **WhatsApp** | Icono flotante | WhatsApp externo | Verde | Global (WhatsAppFloat) |
| **Widget Ayuda** | Icono flotante | Modal interno | Morado/Azul | Global (FloatingActionWidget) |
| **Sticky Bar** | "Agenda tu Sesión Estratégica" | `/contacto` | `forja-fire` | Global (StickyCTABar) |

### CTAs Críticos (Alto Tráfico Esperado)

| Ubicación | CTA | Destino | Importancia |
|-----------|-----|---------|-------------|
| Homepage Hero | "Descubre tu Madurez Digital - GRATIS" | `/contacto` | 🔴 CRÍTICO |
| Homepage CTA Final | "Agenda tu Sesión Estratégica GRATIS" | `/contacto` | 🔴 CRÍTICO |
| Servicios (Cards) | "Conocer Servicio Completo" | `/servicios/*` | 🟡 IMPORTANTE |
| Sticky Bar | "Agenda tu Sesión Estratégica" | `/contacto` | 🟡 IMPORTANTE |
| WhatsApp Float | Icono | WhatsApp | 🟡 IMPORTANTE |

---

## 🔤 TIPOGRAFÍAS

### Fuentes Configuradas

| Fuente | Uso | Variable CSS | Peso | Ubicación |
|--------|-----|--------------|------|-----------|
| **Plus Jakarta Sans** | Headings (h1-h6) | `--font-heading` | 400, 500, 600, 700, 800 | `app/layout.tsx` líneas 18-23 |
| **DM Sans** | Body text | `--font-body` | 400, 500, 700 | `app/layout.tsx` líneas 26-31 |

### Clases de Tipografía

| Clase | Uso | Tamaño | Peso | Archivos |
|-------|-----|--------|------|----------|
| `.hero-title` | Títulos hero | 4xl-6xl | bold | `app/globals.css` línea 124 |
| `.hero-subtitle` | Subtítulos hero | xl-3xl | semibold | `app/globals.css` línea 128 |
| `.hero-description` | Descripciones hero | lg-xl | normal | `app/globals.css` línea 132 |
| `.section-title` | Títulos de sección | 3xl-4xl | bold | `app/globals.css` línea 136 |
| `.section-subtitle` | Subtítulos de sección | xl-2xl | semibold | `app/globals.css` línea 140 |
| `.card-title` | Títulos de cards | xl-2xl | bold | `app/globals.css` línea 148 |
| `.card-description` | Descripciones de cards | base-lg | normal | `app/globals.css` línea 152 |
| `.body-text` | Texto general | base | normal | `app/globals.css` línea 156 |

**⚠️ RIESGO:** Cambios en tipografía afectan toda la jerarquía visual del sitio.

---

## 🧱 COMPONENTES CUSTOM PRINCIPALES

### Layout Components

| Componente | Archivo | Propósito | Dependencias | Riesgo |
|------------|---------|-----------|--------------|--------|
| **Header** | `components/layout/header/Header.tsx` | Navegación principal | MegaMenuServicios, Navigation | 🔴 ALTO |
| **Footer** | `components/layout/footer/Footer.tsx` | Pie de página | Links a servicios, legal | 🟡 MEDIO |
| **MegaMenuServicios** | `components/layout/header/MegaMenuServicios.tsx` | Menú de servicios | SERVICIOS_MEGA_MENU data | 🔴 ALTO |
| **MobileMenu** | `components/layout/header/MobileMenu.tsx` | Menú móvil | Navigation items | 🟡 MEDIO |

### Section Components

| Componente | Archivo | Propósito | Usado En | Riesgo |
|------------|---------|-----------|----------|--------|
| **HeroSection** | `components/sections/HeroSection.tsx` | Hero homepage | Homepage | 🔴 ALTO |
| **ServicesSection** | `components/sections/ServicesSection.tsx` | Listado servicios | Homepage | 🔴 ALTO |
| **PainPointsSection** | `components/sections/PainPointsSection.tsx` | Problemas que resuelve | Homepage | 🟡 MEDIO |
| **MetodologiaSection** | `components/sections/MetodologiaSection.tsx` | Metodología FORJA | Homepage | 🟡 MEDIO |
| **CaseStudiesSection** | `components/sections/CaseStudiesSection.tsx` | Casos de éxito | Homepage | 🟡 MEDIO |
| **CTASection** | `components/sections/CTASection.tsx` | CTA final | Homepage | 🔴 ALTO |

### Service Components

| Componente | Archivo | Propósito | Usado En | Riesgo |
|------------|---------|-----------|----------|--------|
| **ServiceHero** | `components/services/ServiceHero.tsx` | Hero de servicio | 6 páginas de servicio | 🟡 MEDIO |
| **ProblemCard** | `components/services/ProblemCard.tsx` | Card de problema | 6 páginas de servicio | 🟢 BAJO |
| **ServiceAccordion** | `components/services/ServiceAccordion.tsx` | Componentes del servicio | 6 páginas de servicio | 🟡 MEDIO |
| **MethodologyTimeline** | `components/services/MethodologyTimeline.tsx` | Timeline metodología | 6 páginas de servicio | 🟡 MEDIO |
| **CaseStudy** | `components/services/CaseStudy.tsx` | Caso de éxito | 6 páginas de servicio | 🟢 BAJO |

### Shared Components

| Componente | Archivo | Propósito | Ubicación | Riesgo |
|------------|---------|-----------|-----------|--------|
| **WhatsAppFloat** | `components/shared/WhatsAppFloat.tsx` | Botón flotante WhatsApp | Global (layout) | 🟡 MEDIO |
| **FloatingActionWidget** | `components/shared/FloatingActionWidget.tsx` | Widget multi-opción | Global (layout) | 🟡 MEDIO |
| **CookieConsent** | `components/shared/CookieConsent.tsx` | Banner de cookies | Global (layout) | 🟢 BAJO |
| **SectionHeader** | `components/shared/SectionHeader.tsx` | Header de sección | 18+ páginas | 🟡 MEDIO |
| **FeedbackTrigger** | `components/shared/FeedbackTrigger.tsx` | Trigger de feedback | Global (layout) | 🟢 BAJO |

---

## ⚙️ CONFIGURACIÓN CRÍTICA

### tailwind.config.ts

| Sección | Líneas | Contenido | Riesgo |
|---------|--------|-----------|--------|
| **Colors - FORJA** | 40-48 | Paleta principal (navy, fire, teal, purple) | 🔴 ALTO |
| **Colors - Brand** | 63-94 | Paleta legacy (compatibilidad) | 🟡 MEDIO |
| **Colors - Slate** | 50-61 | Escala de neutros | 🟢 BAJO |
| **Border Radius** | 173-181 | xl, 2xl, card, button | 🟡 MEDIO |
| **Box Shadow** | 182-188 | card, card-hover, glow-* | 🟡 MEDIO |
| **Font Family** | 155-159 | heading, body, sans | 🔴 ALTO |
| **Font Size** | 160-168 | h1-h3 mobile/desktop | 🟡 MEDIO |

**⚠️ ADVERTENCIA:** Cambios en `tailwind.config.ts` requieren rebuild completo.

### app/layout.tsx

| Elemento | Líneas | Propósito | Riesgo |
|----------|--------|-----------|--------|
| **Font Imports** | 2, 18-31 | Plus Jakarta Sans + DM Sans | 🔴 ALTO |
| **Global Components** | 102-105 | StickyCTABar, CookieConsent, FeedbackTrigger | 🟡 MEDIO |
| **Metadata** | 33-82 | SEO, Open Graph, Twitter Cards | 🟡 MEDIO |
| **Body Classes** | 100 | Font variables aplicadas | 🔴 ALTO |

### app/globals.css

| Sección | Líneas | Contenido | Riesgo |
|---------|--------|-----------|--------|
| **CSS Variables** | 13-62 | Colors, spacing, z-index | 🔴 ALTO |
| **Body Styles** | 72-80 | bg-slate-50, text-forja-navy, font-body | 🔴 ALTO |
| **Container** | 87-98 | max-width, padding | 🟡 MEDIO |
| **Prose** | 104-118 | Tipografía de contenido | 🟡 MEDIO |
| **Typography Classes** | 123-157 | hero-*, section-*, card-* | 🔴 ALTO |
| **Gradients** | 162-172 | gradient-hero, gradient-cta, gradient-fire | 🟡 MEDIO |

---

## 📊 ANÁLISIS DE RIESGO

### Componentes de ALTO RIESGO (🔴)

| Componente | Razón | Impacto | Archivos Afectados |
|------------|-------|---------|-------------------|
| **tailwind.config.ts** | Configuración global de colores y tipografía | TODO el sitio | 73 archivos |
| **app/globals.css** | Estilos base y clases utility | TODO el sitio | 73 archivos |
| **app/layout.tsx** | Layout raíz, fuentes, metadata | TODO el sitio | 1 archivo |
| **Header** | Navegación principal | Todas las páginas | 1 archivo |
| **Button (shadcn)** | Usado en todos los CTAs | 19 archivos | 1 archivo |
| **HeroSection** | Primera impresión del sitio | Homepage | 1 archivo |
| **ServicesSection** | Conversión principal | Homepage | 1 archivo |
| **CTASection** | Conversión final | Homepage | 1 archivo |

### Componentes de MEDIO RIESGO (🟡)

- Footer (links, SEO)
- MegaMenuServicios (navegación compleja)
- ServiceHero (6 páginas)
- ServiceAccordion (6 páginas)
- MethodologyTimeline (6 páginas)
- StickyCTABar (global)
- WhatsAppFloat (global)
- FloatingActionWidget (global)
- SectionHeader (18+ páginas)
- Dialog (modales)

### Componentes de BAJO RIESGO (🟢)

- Card, Input, Textarea, Badge, Progress, Tooltip, Toast, Separator
- ProblemCard, CaseStudy
- CookieConsent, FeedbackTrigger
- ReadingProgressBar

---

## 🔄 DUPLICACIÓN Y DEUDA TÉCNICA

### Duplicación de Colores

**Problema:** Existen 2 sistemas de colores (`forja-*` y `brand-*`) con valores idénticos.

| Color FORJA | Color Brand | Hex | Archivos con `brand-*` |
|-------------|-------------|-----|------------------------|
| `forja-navy` | `brand-navy` | `#22335A` | ~40 archivos |
| `forja-fire` | `brand-orange` | `#ED7442` | ~40 archivos |
| `forja-teal` | `brand-turquoise` | `#52D6DE` | ~40 archivos |
| `forja-purple` | `brand-purple` | `#8060BF` | ~40 archivos |

**Recomendación:** Migración gradual de `brand-*` a `forja-*` en sprints.

### Páginas de Test

**Problema:** Existen 2 páginas de test en producción.

| Página | Ruta | Acción |
|--------|------|--------|
| Design Tokens Test | `/design-tokens-test` | 🗑️ ELIMINAR |
| Sandbox | `/sandbox` | 🗑️ ELIMINAR |

**Recomendación:** Eliminar antes de lanzamiento.

---

## 📈 MÉTRICAS DE COMPLEJIDAD

### Distribución de Archivos

```
Total de archivos analizados: 150+

Páginas (app/):              29 archivos
Componentes (components/):   45+ archivos
  - Layout:                  8 archivos
  - Sections:                10 archivos
  - Services:                6 archivos
  - Shared:                  12 archivos
  - UI:                      13 archivos
  - Nosotros:                4 archivos
  - Otros:                   5+ archivos
```

### Uso de Colores

```
Total de instancias de colores: 807 matches

forja-navy:        ~200 instancias
forja-fire:        ~150 instancias
forja-teal:        ~100 instancias
forja-purple:      ~80 instancias
brand-navy:        ~120 instancias
brand-orange:      ~100 instancias
brand-turquoise:   ~40 instancias
brand-purple:      ~17 instancias
```

### Uso de Componentes

```
Button:            64 instancias en 19 archivos
Card:              50+ instancias
Input:             15+ instancias (formularios)
Badge:             20+ instancias
Dialog:            5+ instancias
```

---

## 🎯 RECOMENDACIONES PRIORITARIAS

### 1. Unificación de Colores (ALTA PRIORIDAD)

**Problema:** Duplicación `forja-*` vs `brand-*`

**Solución:**
1. Crear script de migración automática
2. Ejecutar en sprints por carpeta:
   - Sprint 1: `components/ui/`
   - Sprint 2: `components/sections/`
   - Sprint 3: `components/services/`
   - Sprint 4: `app/`
3. Deprecar `brand-*` en `tailwind.config.ts`

**Riesgo:** 🟡 MEDIO (con testing adecuado)

### 2. Eliminar Páginas de Test (ALTA PRIORIDAD)

**Acción:**
- Eliminar `/design-tokens-test`
- Eliminar `/sandbox`
- Actualizar `sitemap.ts`

**Riesgo:** 🟢 BAJO

### 3. Estandarización de Tipografía (MEDIA PRIORIDAD)

**Problema:** Uso inconsistente de clases de tipografía

**Solución:**
1. Auditar uso de `.hero-title`, `.section-title`, etc.
2. Aplicar clases consistentemente
3. Documentar guía de uso

**Riesgo:** 🟡 MEDIO

### 4. Optimización de Componentes (BAJA PRIORIDAD)

**Oportunidades:**
- Consolidar variantes de Button
- Crear más componentes reutilizables
- Extraer lógica duplicada

**Riesgo:** 🟢 BAJO

---

## 📝 NOTAS FINALES

### Puntos Fuertes del Código Actual

✅ Buena estructura de carpetas  
✅ Componentes bien separados (UI, sections, services)  
✅ Design tokens bien definidos  
✅ Tipografía consistente (Plus Jakarta Sans + DM Sans)  
✅ Uso de shadcn/ui para componentes base  
✅ Responsive design implementado  

### Áreas de Mejora

⚠️ Duplicación de colores (`forja-*` vs `brand-*`)  
⚠️ Páginas de test en producción  
⚠️ Algunos componentes con lógica duplicada  
⚠️ Falta documentación de componentes  

### Estimación de Impacto de Cambios

| Tipo de Cambio | Archivos Afectados | Tiempo Estimado | Riesgo |
|----------------|-------------------|-----------------|--------|
| **Cambio de color** | 1-73 archivos | 1-5 días | 🟡-🔴 |
| **Cambio de tipografía** | 73 archivos | 3-7 días | 🔴 |
| **Nuevo componente UI** | 1-5 archivos | 1-2 días | 🟢 |
| **Modificar Button** | 19 archivos | 2-3 días | 🟡 |
| **Modificar Header** | 1 archivo | 1-2 días | 🔴 |
| **Eliminar páginas test** | 2 archivos | 1 hora | 🟢 |

---

## 🔍 CÓMO USAR ESTE DOCUMENTO

### Para Desarrolladores

1. **Antes de modificar un componente:**
   - Busca el componente en este documento
   - Revisa el nivel de riesgo
   - Verifica "Archivos Afectados"
   - Lee la recomendación

2. **Antes de cambiar colores:**
   - Revisa la sección "Sistema de Colores"
   - Verifica duplicación `forja-*` vs `brand-*`
   - Estima impacto en 73 archivos

3. **Antes de modificar tipografía:**
   - Revisa la sección "Tipografías"
   - Verifica jerarquía de clases
   - Considera impacto en TODO el sitio

### Para Product Managers

- **Cambios de bajo riesgo:** Componentes con 🟢
- **Cambios que requieren testing:** Componentes con 🟡
- **Cambios críticos (requieren QA completo):** Componentes con 🔴

### Para QA

- **Testing de colores:** Verificar 73 archivos después de cambios
- **Testing de tipografía:** Verificar jerarquía visual en todas las páginas
- **Testing de CTAs:** Verificar 15+ CTAs principales
- **Testing responsive:** Verificar en mobile, tablet, desktop

---

**Documento generado:** 27 de Noviembre, 2025  
**Versión:** 1.0  
**Próxima revisión:** Después de cada sprint de refactoring  

---

## 📞 CONTACTO

Para preguntas sobre este inventario:
- **Auditor:** Staff Engineer
- **Fecha:** 27/11/2025
- **Estado:** ✅ Completado - Listo para refactoring

