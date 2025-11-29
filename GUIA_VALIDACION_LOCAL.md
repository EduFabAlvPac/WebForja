# 📋 GUÍA DE VALIDACIÓN LOCAL - Antes del Push

## ✅ **2 COMMITS LISTOS PARA PUSH**

### **Commit 1:** `35a153b` - Componentes de Alto Valor
- 11 archivos
- +1,427 líneas / -374 líneas

### **Commit 2:** `02a8371` - Mejoras Complementarias
- 55 archivos
- +8,722 líneas / -205 líneas

**Total:** 66 archivos modificados/creados

---

## 🧪 **CHECKLIST DE VALIDACIÓN LOCAL**

### **1. Homepage** (`http://localhost:3001/`)

Verifica en orden de scroll:

- [ ] **HeroSection:**
  - [ ] Botón "Rayos-X Empresarial Gratis" (Fire/Primary) funciona
  - [ ] Botón "Habla con un Forjador" (Teal/Secondary) funciona
  - [ ] Iconos Lock y Target visibles
  - [ ] Hover effects funcionan

- [ ] **StatsSection (NUEVA):**
  - [ ] Badge "Resultados Comprobados" visible
  - [ ] Título "Números que **Hablan por Sí Solos**" correcto
  - [ ] 6 KpiCards visibles:
    - [ ] Clientes Activos: 45 (fondo beige/primary)
    - [ ] NPS Score: 95 (fondo verde/success)
    - [ ] Años de Experiencia: 11+ (fondo beige/primary)
    - [ ] Rayos-X: 15 min (blanco/default)
    - [ ] Tasa Éxito: 98% (blanco/default)
    - [ ] Garantía: 100% (verde/success)
  - [ ] Iconos en esquinas superiores visibles
  - [ ] Trend indicators (↑) funcionando
  - [ ] 4 StatBadges al final con dots
  - [ ] Hover en KpiCards (sombra más grande)

- [ ] **PainPointsSection:**
  - [ ] 4 ProblemCards con iconos
  - [ ] Borders Teal visibles
  - [ ] Badges "SÍNTOMA" funcionando
  - [ ] Hover effects en cards

- [ ] **ServicesSection:**
  - [ ] ServiceCards con borders
  - [ ] Botones funcionando
  - [ ] Hover effects en cards

- [ ] **MetodologiaSection (NUEVA):**
  - [ ] Badge "NUESTRO MÉTODO PROBADO" visible
  - [ ] Título "Metodología **FORJA®**" correcto
  - [ ] Subtítulo "El Sistema de 5 Fases..." visible
  - [ ] Contexto "200 empresas en 8 países" visible
  - [ ] **5 fases expandibles:**
    - [ ] **01 - Fundamentar** (Cyan): Click para expandir
    - [ ] **02 - Orientar** (Purple): Click para expandir
    - [ ] **03 - Rediseñar** (Orange): Click para expandir
    - [ ] **04 - Justificar** (Green): Click para expandir
    - [ ] **05 - Acompañar** (Red): Click para expandir
  - [ ] Al expandir, ver 4 entregables por fase
  - [ ] Duración visible (2-3 sem, 8-12 sem, etc.)
  - [ ] **Footer CTA:**
    - [ ] Título "¿Quieres Ver Esta Metodología..." en **BLANCO** (legible)
    - [ ] Keywords "Sesión Estratégica" en Fire (naranja)
    - [ ] Keyword "FORJA®" en Teal (turquesa)
    - [ ] Botón "Agendar Sesión..." funciona
    - [ ] Botón "Descargar Metodología..." funciona
    - [ ] Hover effects en ambos botones

- [ ] **CaseStudiesSection:**
  - [ ] Cards de casos visibles
  - [ ] Hover effects funcionan

- [ ] **CTASection:**
  - [ ] 3 CTAs con Buttons secondary
  - [ ] Hover effects funcionan

---

### **2. Página de Servicios** (`http://localhost:3001/servicios`)

- [ ] **Hero:**
  - [ ] Título "Nuestros **Servicios**" (Servicios en Fire)
  - [ ] Gradiente Navy-Purple visible

- [ ] **ServiceCards (3 categorías):**
  - [ ] Estrategia & Transformación (Teal)
  - [ ] Talento & Finanzas (Purple)
  - [ ] Comercial & Operaciones (Orange)
  - [ ] Hover effects en cards

- [ ] **MetodologiaSection (NUEVA):**
  - [ ] Mismo contenido que Homepage
  - [ ] 5 fases expandibles funcionan
  - [ ] Footer CTA con título **blanco** legible

- [ ] **CTA Final:**
  - [ ] "¿No estás seguro por dónde empezar?"
  - [ ] Botón funciona

---

### **3. Servicios Individuales** (Ejemplo: `/servicios/estrategia-transformacion/arquitectura-estrategica`)

- [ ] **Hero:**
  - [ ] Título visible y legible

- [ ] **ProblemCards:**
  - [ ] 4 cards con iconos
  - [ ] Borders Teal
  - [ ] Badges "SÍNTOMA"
  - [ ] Sección "CÓMO LO RESOLVEMOS"
  - [ ] Hover effects

- [ ] **Perfil Ideal:**
  - [ ] Cards con checks teal
  - [ ] Card "Perfil Ideal" destacada

- [ ] **CaseStudy:**
  - [ ] **CRÍTICO:** Título "Distribuidora Regional ABC*" en **BLANCO** (no azul oscuro)
  - [ ] Badge "Descargar Caso" (Teal) funciona
  - [ ] Tabla Antes/Después legible
  - [ ] Quote card visible

- [ ] **Garantías:**
  - [ ] 5 items con iconos Teal
  - [ ] Quote card con gradiente

- [ ] **CTAs finales:**
  - [ ] 2 cards (Naranja + Blanca)
  - [ ] Badges funcionan
  - [ ] Botones funcionan

---

### **4. Nosotros** (`http://localhost:3001/nosotros`)

- [ ] **Hero:**
  - [ ] Gradiente Navy-Purple visible
  - [ ] Título legible

- [ ] **Misión/Visión:**
  - [ ] Card Teal (Misión)
  - [ ] Card Naranja (Visión)
  - [ ] Card Gradiente (Valores con 6 items)

- [ ] **Diferenciadores:**
  - [ ] 6 cards con iconos de colores
  - [ ] Comparación "NO SOMOS" vs "SÍ SOMOS"

---

### **5. Historia** (`http://localhost:3001/nosotros/historia`)

- [ ] **Timeline:**
  - [ ] 2024 (Amarillo)
  - [ ] 2025 (Teal)
  - [ ] 2026 (Naranja)
  - [ ] CTA Card gradiente

- [ ] **Origen:**
  - [ ] 2 cards (Narrativa + "Lo Que Nos Mueve")
  - [ ] 6 items con iconos

---

### **6. Otras Páginas**

- [ ] **Equipo** (`/nosotros/equipo`): Cards funcionan
- [ ] **Testimonios** (`/nosotros/testimonios`): Cards funcionan
- [ ] **Contacto** (`/contacto`): Formulario funciona

---

## 🔴 **PUNTOS CRÍTICOS A VERIFICAR**

### **1. CaseStudy Header (BUG CORREGIDO):**
**Ubicación:** Cualquier página de servicio individual con casos de éxito

**Validar:**
- ✅ Título "Distribuidora Regional ABC*" debe estar en **BLANCO**
- ❌ NO debe estar en azul oscuro (invisible)

**Cómo verificar:**
1. Ir a `/servicios/comercial-operaciones/comercial-cliente`
2. Scroll hasta "Caso de Éxito"
3. Verificar que el título sea **legible**

---

### **2. MetodologiaForja CTA Footer:**
**Ubicación:** Homepage y /servicios

**Validar:**
- ✅ Título "¿Quieres Ver Esta Metodología..." en **BLANCO**
- ✅ "Sesión Estratégica" en **Fire (naranja)**
- ✅ "FORJA®" en **Teal (turquesa)**
- ❌ NO debe estar en negro (como en imagen que compartiste)

---

### **3. StatsSection:**
**Ubicación:** Homepage (después de Hero)

**Validar:**
- ✅ 6 KpiCards en grid 3 columnas
- ✅ Colores correctos (beige, verde, blanco)
- ✅ Iconos visibles en esquinas
- ✅ 4 StatBadges con dots al final

---

## 📊 **RESUMEN DE VALIDACIÓN**

| Componente | Dónde | Qué Verificar |
|------------|-------|---------------|
| **MetodologiaForja** | Homepage, Servicios | 5 fases expandibles, CTA título blanco |
| **StatsSection** | Homepage | 6 KPIs + 4 Badges |
| **CaseStudy** | Servicios individuales | Título en BLANCO (no azul oscuro) |
| **ProblemCards** | Servicios individuales | Iconos, borders Teal, hover |
| **Buttons** | Todas las páginas | Primary/Secondary funcionan |

---

## ✅ **CHECKLIST FINAL**

Antes de hacer push, confirma:

- [ ] Servidor local corriendo: `http://localhost:3001/`
- [ ] Homepage se ve correcta (StatsSection + MetodologiaForja)
- [ ] Servicios tiene MetodologiaForja antes del CTA
- [ ] **CaseStudy títulos en BLANCO** (BUG CRÍTICO CORREGIDO)
- [ ] **MetodologiaForja CTA título en BLANCO** (WCAG AAA)
- [ ] No hay errores en consola del navegador
- [ ] Responsive funciona en mobile
- [ ] Hover effects funcionan correctamente

---

## 🚀 **CUANDO TERMINES LA VALIDACIÓN:**

```bash
git push origin main
```

---

## 📝 **NOTAS IMPORTANTES**

### **Cambios de Alto Impacto (Commit 1):**
✅ MetodologiaForja
✅ StatsSection
✅ Fix CaseStudy

### **Cambios Complementarios (Commit 2):**
✅ Button/Card mejorados
✅ Shadcn/ui base
✅ Design tokens
✅ Documentación

---

**🎯 Valida cuidadosamente cada punto crítico antes de hacer push.**

