# ✅ CHECKLIST DE VALIDACIÓN PRE-COMMIT

## 📋 VALIDACIÓN COMPLETADA AUTOMÁTICAMENTE

- ✅ **TypeScript:** Sin errores
- ✅ **Linter:** Sin errores
- ✅ **Componentes shadcn/ui:** 10 componentes instalados
- ✅ **Archivos temporales:** Movidos a `docs/`
- ✅ **Estructura de archivos:** Correcta

---

## 🧪 VALIDACIÓN MANUAL REQUERIDA

### 1️⃣ Página `/sandbox` (CRÍTICO)

**URL:** `http://localhost:3001/sandbox` (o el puerto que estés usando)

**Verificar:**
- [ ] Título "🧪 Sandbox - shadcn/ui Components" visible
- [ ] Sección **Buttons**: 6 variantes visibles y clickeables
- [ ] Sección **Cards**: 3 cards con contenido
- [ ] Sección **Inputs & Forms**: Campos permiten escribir
- [ ] Sección **Badges**: 4 variantes visibles
- [ ] Sección **Progress**: Barra de progreso + botones +10%/-10% funcionan
- [ ] Sección **Tooltips**: Al hacer hover aparecen tooltips
- [ ] Sección **Dialogs**: Botón "Open Dialog" abre modal
- [ ] Sección **Separators**: Líneas horizontales y verticales visibles
- [ ] Banner verde final: "✅ shadcn/ui Components Validados"

---

### 2️⃣ Página Principal `/` (IMPORTANTE)

**URL:** `http://localhost:3001/`

**Verificar:**
- [ ] Hero section carga correctamente
- [ ] Slides del hero funcionan (flechas izq/der)
- [ ] CTAs visibles: "Rayos-X Empresarial Gratis" (naranja) y "Habla con un Forjador" (teal outline)
- [ ] Sección de servicios carga
- [ ] Sección "Pain Points" carga
- [ ] Footer carga correctamente

---

### 3️⃣ Botones Flotantes (CRÍTICO)

**En cualquier página, verificar:**

**WhatsApp Button (Verde, abajo a la derecha):**
- [ ] Botón verde visible en `bottom-6 right-6`
- [ ] Forma: cuadrado con esquinas redondeadas (`rounded-2xl`)
- [ ] Al hacer click: se expande con mensaje contextual
- [ ] Al hacer click en "Iniciar Chat": abre WhatsApp

**Widget de Ayuda (Morado/Azul, arriba del WhatsApp):**
- [ ] Botón morado/azul visible en `bottom-24 right-6`
- [ ] Forma: cuadrado con esquinas redondeadas (`rounded-2xl`)
- [ ] Icono: ❓ (HelpCircle)
- [ ] Efecto pulsante visible
- [ ] Al hacer click: abre modal con 4 opciones (Inicio, Mensajes, Ayuda, Noticias)
- [ ] Opción "Inicio" muestra feedback con estrellas
- [ ] Opción "Mensajes" muestra formulario
- [ ] Opción "Ayuda" muestra FAQ
- [ ] Opción "Noticias" muestra lista de noticias

**Z-index correcto:**
- [ ] WhatsApp está DEBAJO del Widget de Ayuda
- [ ] Ambos botones son clickeables
- [ ] Modal del Widget aparece SOBRE todo lo demás

---

### 4️⃣ Página `/design-tokens-test` (OPCIONAL)

**URL:** `http://localhost:3001/design-tokens-test`

**Verificar:**
- [ ] Paleta de colores FORJA visible (navy, fire, teal, purple)
- [ ] Escala de grises (slate 50-900)
- [ ] Ejemplos de tipografía (Plus Jakarta Sans, DM Sans)
- [ ] Ejemplos de border-radius
- [ ] Ejemplos de sombras

---

### 5️⃣ Otras Páginas (OPCIONAL)

**Servicios:**
- [ ] `/servicios/estrategia-transformacion` carga
- [ ] `/servicios/talento-finanzas` carga
- [ ] `/servicios/comercial-operaciones` carga

**Nosotros:**
- [ ] `/nosotros` carga
- [ ] `/nosotros/testimonios` carga

---

## 🚨 ERRORES ESPERADOS (IGNORAR)

### En la Consola del Navegador:

✅ **PUEDES IGNORAR:**
```
GET /_next/image?url=https://images.unsplash.com/... 500 (Internal Server Error)
```
**Causa:** Red corporativa bloquea Unsplash  
**Impacto:** Solo en desarrollo, funciona en producción

✅ **PUEDES IGNORAR:**
```
Unchecked runtime.lastError: A listener indicated an asynchronous response
```
**Causa:** Extensiones de Chrome  
**Impacto:** Ninguno

### En la Terminal:

✅ **PUEDES IGNORAR:**
```
FetchError: request to https://fonts.gstatic.com/... self-signed certificate
```
**Causa:** Red corporativa  
**Impacto:** Ninguno en desarrollo

---

## ❌ ERRORES QUE **NO** DEBES IGNORAR

### En la Consola del Navegador:

❌ **REPORTAR:**
- Errores de JavaScript (no relacionados con imágenes o runtime.lastError)
- Errores de React (componentes que no renderizan)
- Errores de TypeScript
- Errores 404 en rutas internas (no imágenes externas)

### En la Terminal:

❌ **REPORTAR:**
- Errores de compilación de Next.js
- Errores de TypeScript
- Errores de módulos no encontrados

---

## 📊 RESUMEN DE ARCHIVOS A COMMITEAR

**Total:** 44 archivos

**Modificados (21):**
- `app/globals.css`
- `app/layout.tsx`
- `app/nosotros/testimonios/page.tsx`
- `components/sections/CTASection.tsx`
- `components/sections/HeroSection.tsx`
- `components/ui/StickyCTABar.tsx`
- `components/ui/button.tsx`
- `components/ui/card.tsx`
- `components/ui/progress.tsx`
- `data/services/*` (varios archivos)
- `package.json`
- `package-lock.json`
- `tailwind.config.ts`

**Nuevos (23):**
- `components/ui/badge.tsx`
- `components/ui/dialog.tsx`
- `components/ui/input.tsx`
- `components/ui/separator.tsx`
- `components/ui/textarea.tsx`
- `components/ui/toast.tsx`
- `components/ui/tooltip.tsx`
- `components/ui/index.ts`
- `components.json`
- `dev-no-ssl.js`
- `.env.development.local.example`
- `app/sandbox/page.tsx`
- `app/design-tokens-test/page.tsx`
- `lib/site-metrics.ts`
- `docs/DESARROLLO_RED_CORPORATIVA.md`
- `docs/ERRORES_SSL_SOLUCION.md`
- `docs/QA_VALIDATION.md`
- `docs/README_REFACTOR.md`
- `docs/REFACTOR_PLAN.md`
- `COMMIT_MESSAGE.md`
- `VALIDACION_PREVIA_COMMIT.md` (este archivo)

---

## ✅ APROBACIÓN PARA COMMIT

**Una vez validado todo lo anterior, confirma:**

- [ ] Todos los componentes de `/sandbox` funcionan correctamente
- [ ] Los botones flotantes (WhatsApp y Widget) funcionan correctamente
- [ ] No hay errores críticos en la consola del navegador
- [ ] La página principal carga correctamente

**Si todo está OK, procede con:**

```bash
# 1. Agregar todos los cambios
git add .

# 2. Commit con mensaje descriptivo
git commit -m "feat: install shadcn/ui components + design tokens + SSL dev fixes

- Add 10 shadcn/ui components (Button, Card, Input, Textarea, Badge, Progress, Tooltip, Dialog, Toast, Separator)
- Integrate FORJA design tokens (colors, typography, shadows)
- Centralize site metrics in lib/site-metrics.ts
- Unify CTAs across the site
- Add dev tools for corporate network SSL issues
- Create /sandbox and /design-tokens-test pages for validation
- Add comprehensive documentation"

# 3. Push a GitHub
git push origin main
```

---

## 🆘 SI ENCUENTRAS PROBLEMAS

**Reporta:**
1. Captura de pantalla del error
2. URL donde ocurre
3. Pasos para reproducir
4. Mensaje de error completo

**No hagas commit si:**
- Hay errores críticos de JavaScript
- Los componentes no renderizan
- Los botones flotantes no funcionan
- La página principal no carga

