# 🔄 PLAN DE REFACTOR - DESIGN TOKENS

**Fecha:** 27 de Noviembre, 2025  
**Objetivo:** Normalizar colores a tokens FORJA sin cambios visuales  
**Estrategia:** Reemplazos mecánicos graduales con validación A/B

---

## 📋 FASE 1: MAPEO DE CAMBIOS

### Tabla de Equivalencias (Sin Cambio Visual)

| Color Actual | Color Nuevo | Hex | Cambio Visual |
|--------------|-------------|-----|---------------|
| `brand-navy` | `forja-navy` | `#22335A` | ❌ NINGUNO |
| `brand-navy-light` | `forja-navy-700` | `#34497A` | ❌ NINGUNO |
| `brand-orange` | `forja-fire` | `#ED7442` | ❌ NINGUNO |
| `brand-turquoise` | `forja-teal` | `#52D6DE` | ❌ NINGUNO |
| `brand-purple` | `forja-purple` | `#8060BF` | ❌ NINGUNO |

**✅ GARANTÍA:** Todos los reemplazos mantienen el mismo valor hexadecimal.

---

## 🎯 ESTRATEGIA DE MIGRACIÓN

### Sprint 1: Componentes de Bajo Riesgo (🟢)

**Archivos a modificar:**
- `components/ui/ReadingProgressBar.tsx`
- `components/ui/StickyCTABar.tsx`
- `components/services/ProblemCard.tsx`
- `components/services/CaseStudy.tsx`
- `components/shared/CookieConsent.tsx`

**Estimación:** 30 minutos  
**Impacto:** Mínimo (componentes decorativos)  
**Testing:** Visual básico

### Sprint 2: Componentes de Medio Riesgo (🟡)

**Archivos a modificar:**
- `components/services/ServiceHero.tsx`
- `components/services/ServiceAccordion.tsx`
- `components/services/MethodologyTimeline.tsx`
- `components/shared/SectionHeader.tsx`
- `components/layout/footer/Footer.tsx`

**Estimación:** 1-2 horas  
**Impacto:** Moderado (páginas de servicio)  
**Testing:** Comparación A/B de 2-3 páginas

### Sprint 3: Componentes de Alto Riesgo (🔴)

**Archivos a modificar:**
- `components/sections/HeroSection.tsx`
- `components/sections/ServicesSection.tsx`
- `components/sections/CTASection.tsx`
- `components/layout/header/Header.tsx`
- `components/layout/header/MegaMenuServicios.tsx`

**Estimación:** 2-3 horas  
**Impacto:** Alto (homepage, navegación)  
**Testing:** QA completo con capturas A/B

### Sprint 4: Páginas (app/)

**Archivos a modificar:**
- `app/page.tsx` (Homepage)
- `app/servicios/*/page.tsx` (6 páginas de servicio)
- `app/nosotros/*/page.tsx` (4 páginas)
- `app/contacto/page.tsx`
- `app/casos-exito/page.tsx`

**Estimación:** 3-4 horas  
**Impacto:** Alto (todas las páginas)  
**Testing:** QA completo de todas las rutas

---

## 🔍 ANÁLISIS DE CAMBIOS POR ARCHIVO

### Componentes UI (Bajo Riesgo)

#### ReadingProgressBar.tsx
```
Cambios:
- brand-orange → forja-fire (1 instancia)

Riesgo: 🟢 BAJO
Razón: Componente decorativo, no afecta conversión
Testing: Visual básico
```

#### StickyCTABar.tsx
```
Cambios:
- brand-orange → forja-fire (2 instancias)
- brand-navy → forja-navy (1 instancia)

Riesgo: 🟡 MEDIO
Razón: CTA global, visible en todas las páginas
Testing: Verificar en 3 páginas diferentes
```

### Componentes Services (Medio Riesgo)

#### ServiceHero.tsx
```
Cambios:
- brand-navy → forja-navy (5+ instancias)
- brand-orange → forja-fire (2 instancias)
- brand-turquoise → forja-teal (1 instancia)

Riesgo: 🟡 MEDIO
Razón: Usado en 6 páginas de servicio
Testing: Comparar 2 páginas antes/después
```

#### ServiceAccordion.tsx
```
Cambios:
- brand-turquoise → forja-teal (3 instancias)
- brand-navy → forja-navy (2 instancias)

Riesgo: 🟡 MEDIO
Razón: Componente interactivo importante
Testing: Verificar expansión/colapso
```

### Componentes Sections (Alto Riesgo)

#### HeroSection.tsx
```
Cambios:
- brand-navy → forja-navy (3 instancias)
- brand-orange → forja-fire (2 instancias)

Riesgo: 🔴 ALTO
Razón: Primera impresión del sitio, conversión crítica
Testing: Captura A/B completa, verificar CTAs
```

#### ServicesSection.tsx
```
Cambios:
- brand-turquoise → forja-teal (5+ instancias)
- brand-orange → forja-fire (3 instancias)
- brand-navy → forja-navy (4 instancias)

Riesgo: 🔴 ALTO
Razón: Conversión principal de homepage
Testing: Captura A/B completa, verificar hover states
```

---

## 📸 PLAN DE CAPTURAS A/B

### Páginas a Capturar (Antes/Después)

1. **Homepage** (`/`)
   - Hero section (scroll 0%)
   - Services section (scroll 40%)
   - CTA section (scroll 90%)

2. **Servicio Individual** (`/servicios/estrategia-transformacion/arquitectura-estrategica`)
   - Hero
   - Problemas que resuelve
   - Componentes del servicio (accordion)

3. **Nosotros** (`/nosotros`)
   - Hero
   - Misión/Visión/Valores
   - Diferenciadores

4. **Contacto** (`/contacto`)
   - Formulario completo

### Checklist de Validación Visual

- [ ] Colores idénticos (comparar hex en DevTools)
- [ ] Hover states funcionan igual
- [ ] Focus rings visibles
- [ ] Sombras idénticas
- [ ] Gradientes sin cambios
- [ ] Tipografía sin cambios
- [ ] Espaciado sin cambios
- [ ] CTAs destacan igual

---

## 🧪 PROCESO DE TESTING

### 1. Pre-Refactor (ANTES)

```bash
# Capturar estado actual
1. Abrir http://localhost:3001/
2. Capturar screenshot completo
3. Abrir DevTools → Computed → Verificar colores
4. Documentar valores RGB de elementos clave
```

### 2. Refactor

```bash
# Hacer cambios mecánicos
1. Reemplazar brand-* por forja-*
2. Verificar build: npm run build
3. Verificar TypeScript: npx tsc --noEmit
```

### 3. Post-Refactor (DESPUÉS)

```bash
# Validar estado nuevo
1. Abrir http://localhost:3001/
2. Capturar screenshot completo
3. Comparar lado a lado con ANTES
4. Verificar colores en DevTools
5. Confirmar RGB idénticos
```

### 4. Validación Funcional

```bash
# Probar interacciones
1. Hover en botones → Color debe ser idéntico
2. Click en CTAs → Navegación correcta
3. Abrir mega menu → Colores idénticos
4. Scroll → Sticky bar aparece igual
5. Abrir modales → Estilos idénticos
```

---

## ⚠️ RIESGOS Y MITIGACIONES

### Riesgo 1: Cambio Visual Accidental

**Probabilidad:** Baja  
**Impacto:** Alto  
**Mitigación:**
- Usar tabla de equivalencias estricta
- Validar con capturas A/B
- Verificar valores RGB en DevTools

### Riesgo 2: Romper Build

**Probabilidad:** Baja  
**Impacto:** Alto  
**Mitigación:**
- Ejecutar `npx tsc --noEmit` después de cada cambio
- Ejecutar `npm run build` antes de commit
- Mantener rama de respaldo

### Riesgo 3: Afectar Conversión

**Probabilidad:** Muy Baja  
**Impacto:** Crítico  
**Mitigación:**
- NO cambiar colores de CTAs principales
- Validar que botones destaquen igual
- Testing exhaustivo de homepage

---

## 📊 MÉTRICAS DE ÉXITO

### KPIs Técnicos

- [ ] Build exitoso sin errores
- [ ] 0 errores de TypeScript
- [ ] 0 warnings de Tailwind
- [ ] Tiempo de build < 60s

### KPIs Visuales

- [ ] 100% de colores idénticos (verificado con DevTools)
- [ ] 0 cambios en espaciado
- [ ] 0 cambios en tipografía
- [ ] 0 cambios en sombras

### KPIs de Negocio

- [ ] CTAs mantienen mismo contraste
- [ ] Jerarquía visual sin cambios
- [ ] Accesibilidad mantenida (WCAG AA)

---

## 🚀 EJECUCIÓN

### Comando de Inicio

```bash
# 1. Crear rama de refactor
git checkout -b refactor/design-tokens

# 2. Hacer cambios mecánicos
# (Usar search/replace con tabla de equivalencias)

# 3. Validar
npx tsc --noEmit
npm run build

# 4. Testing local
npm run dev
# Abrir http://localhost:3001 y comparar

# 5. Si todo OK, commit
git add .
git commit -m "refactor: normalizar colores a tokens FORJA (sin cambio visual)"

# 6. Merge a main (después de aprobación)
git checkout main
git merge refactor/design-tokens
git push origin main
```

---

## 📝 NOTAS FINALES

### ✅ Ventajas del Refactor

1. **Consistencia:** Un solo sistema de colores
2. **Mantenibilidad:** Más fácil cambiar colores en el futuro
3. **Escalabilidad:** Nuevos componentes usan tokens claros
4. **Documentación:** Nombres más descriptivos (fire vs orange)

### ⚠️ Consideraciones

1. **No es urgente:** El código actual funciona bien
2. **Requiere tiempo:** 6-10 horas de trabajo total
3. **Requiere testing:** QA exhaustivo para garantizar 0 cambios visuales
4. **Puede esperar:** Priorizar features de negocio primero

### 🎯 Recomendación Final

**Proceder con refactor SI:**
- Hay tiempo disponible (1-2 sprints)
- Hay recursos de QA para validar
- No hay features urgentes en desarrollo

**Posponer SI:**
- Hay deadlines cercanos
- Recursos de QA limitados
- Hay features de negocio prioritarias

---

**Estado:** 📋 PLAN COMPLETO - Listo para ejecución  
**Próximo paso:** Aprobación de stakeholders + inicio de Sprint 1

