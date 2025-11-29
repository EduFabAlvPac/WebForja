# 🎨 QA VISUAL - DESIGN TOKENS REFACTOR

**Fecha:** 27 de Noviembre, 2025  
**Tipo de Cambio:** Normalización de Design Tokens  
**Impacto Visual Esperado:** ❌ NINGUNO (refactor sin cambios visuales)

---

## 📋 CHECKLIST DE VALIDACIÓN

### ✅ PRE-REFACTOR (ANTES)

Captura screenshots de:

1. **Homepage** (`/`)
   - [ ] Hero section completo
   - [ ] Services section
   - [ ] Pain points section
   - [ ] CTA final

2. **Página de Servicio** (`/servicios/estrategia-transformacion/arquitectura-estrategica`)
   - [ ] Hero section
   - [ ] Para quién es section
   - [ ] Problemas que resuelve
   - [ ] Componentes del servicio (accordion)
   - [ ] Metodología FORJA
   - [ ] CTA final

3. **Elementos Globales**
   - [ ] Header (desktop)
   - [ ] Header (mobile)
   - [ ] Footer
   - [ ] Botones flotantes (WhatsApp + Widget)
   - [ ] Sticky CTA Bar

### ✅ POST-REFACTOR (DESPUÉS)

Captura las mismas screenshots y compara:

- [ ] Colores idénticos
- [ ] Espaciado idéntico
- [ ] Tipografía idéntica
- [ ] Sombras idénticas
- [ ] Border radius idénticos
- [ ] Hover states idénticos

---

## 🔍 PUNTOS CRÍTICOS A VERIFICAR

### Colores

| Elemento | Color Esperado | Clase CSS | Verificar |
|----------|----------------|-----------|-----------|
| Títulos principales | Navy (#22335A) | `text-forja-navy` | [ ] |
| CTAs principales | Fire (#ED7442) | `bg-forja-fire` | [ ] |
| Acentos secundarios | Teal (#52D6DE) | `bg-forja-teal` | [ ] |
| Fondos | Slate 50 (#f8fafc) | `bg-slate-50` | [ ] |
| Texto body | Slate 700 (#334155) | `text-slate-700` | [ ] |

### Tipografía

| Elemento | Fuente Esperada | Clase CSS | Verificar |
|----------|-----------------|-----------|-----------|
| H1, H2, H3 | Plus Jakarta Sans | `font-heading` | [ ] |
| Body text | DM Sans | `font-body` | [ ] |
| Hero title | Plus Jakarta Sans Bold | `.hero-title` | [ ] |
| Card title | Plus Jakarta Sans Bold | `.card-title` | [ ] |

### Espaciado

| Elemento | Padding Esperado | Clase CSS | Verificar |
|----------|------------------|-----------|-----------|
| Secciones | 64px-96px | `.section-padding` | [ ] |
| Container | 24px-48px | `.container-prose` | [ ] |
| Cards | 24px-32px | `.card-padded` | [ ] |

### Border Radius

| Elemento | Radio Esperado | Clase CSS | Verificar |
|----------|----------------|-----------|-----------|
| Cards | 1rem (16px) | `rounded-xl` | [ ] |
| Botones grandes | 1.5rem (24px) | `rounded-2xl` | [ ] |
| Botones normales | 0.5rem (8px) | `rounded-button` | [ ] |

### Sombras

| Elemento | Sombra Esperada | Clase CSS | Verificar |
|----------|-----------------|-----------|-----------|
| Cards | Sutil (0 10px 30px) | `shadow-card` | [ ] |
| Cards hover | Más pronunciada | `shadow-card-hover` | [ ] |
| CTAs | Glow naranja | `shadow-glow-orange` | [ ] |

---

## 🧪 PRUEBAS FUNCIONALES

### Interacciones

- [ ] Hover en botones (cambio de color suave)
- [ ] Click en CTAs (navegación correcta)
- [ ] Accordion en servicios (expansión/colapso)
- [ ] Mega menu (apertura/cierre)
- [ ] Botones flotantes (visibilidad y posición)
- [ ] Formulario de contacto (validación y envío)

### Responsive

- [ ] Mobile (375px) - Todo se ve correcto
- [ ] Tablet (768px) - Grid adapta correctamente
- [ ] Desktop (1280px) - Layout completo
- [ ] Desktop XL (1920px) - Sin desbordamiento

### Navegadores

- [ ] Chrome (principal)
- [ ] Firefox
- [ ] Safari (si disponible)
- [ ] Edge

---

## 📸 CAPTURAS A/B REQUERIDAS

### Set 1: Homepage

**ANTES:**
- `qa-screenshots/before/homepage-hero.png`
- `qa-screenshots/before/homepage-services.png`
- `qa-screenshots/before/homepage-cta.png`

**DESPUÉS:**
- `qa-screenshots/after/homepage-hero.png`
- `qa-screenshots/after/homepage-services.png`
- `qa-screenshots/after/homepage-cta.png`

### Set 2: Página de Servicio

**ANTES:**
- `qa-screenshots/before/service-hero.png`
- `qa-screenshots/before/service-problems.png`
- `qa-screenshots/before/service-accordion.png`

**DESPUÉS:**
- `qa-screenshots/after/service-hero.png`
- `qa-screenshots/after/service-problems.png`
- `qa-screenshots/after/service-accordion.png`

### Set 3: Elementos Globales

**ANTES:**
- `qa-screenshots/before/header-desktop.png`
- `qa-screenshots/before/footer.png`
- `qa-screenshots/before/floating-buttons.png`

**DESPUÉS:**
- `qa-screenshots/after/header-desktop.png`
- `qa-screenshots/after/footer.png`
- `qa-screenshots/after/floating-buttons.png`

---

## ✅ CRITERIOS DE ACEPTACIÓN

### Obligatorios

- [ ] **Build exitoso** - `npm run build` sin errores
- [ ] **TypeScript OK** - `npx tsc --noEmit` sin errores
- [ ] **Colores idénticos** - Comparación visual A/B
- [ ] **Tipografía idéntica** - Fuentes y tamaños iguales
- [ ] **Espaciado idéntico** - Padding y margins iguales
- [ ] **Sombras idénticas** - Shadow-card igual
- [ ] **CTAs funcionan** - Todos los links correctos
- [ ] **Responsive OK** - Mobile, tablet, desktop

### Opcionales (Mejoras sin cambio visual)

- [ ] Código más limpio
- [ ] Mejor organización de utilidades
- [ ] Documentación mejorada

---

## 🚨 RED FLAGS (Detener si ocurre)

| Problema | Acción |
|----------|--------|
| Color diferente en CTAs | ❌ ROLLBACK inmediato |
| Tipografía cambia de fuente | ❌ ROLLBACK inmediato |
| Espaciado diferente | ❌ ROLLBACK inmediato |
| Botones no funcionan | ❌ ROLLBACK inmediato |
| Build falla | ❌ ROLLBACK inmediato |
| Errores de TypeScript | ❌ ROLLBACK inmediato |

---

## 📊 RESULTADO ESPERADO

### Cambios en Código

- ✅ Archivo `styles/tokens.css` creado
- ✅ Import en `app/globals.css`
- ✅ Utilidades CSS adicionales disponibles
- ✅ Documentación actualizada

### Sin Cambios Visuales

- ❌ Colores
- ❌ Tipografía
- ❌ Espaciado
- ❌ Sombras
- ❌ Border radius
- ❌ Animaciones

---

## 🎯 PRÓXIMOS PASOS (Después de QA)

1. **Si QA pasa:** Desplegar a GitHub
2. **Si QA falla:** Revisar diferencias y corregir
3. **Siguiente sprint:** Migración gradual de `brand-*` a `forja-*`

---

**Documento preparado para:** QA Team  
**Aprobación requerida de:** Product Owner + Tech Lead

