# ✅ CHECKLIST DE VALIDACIÓN QA - REFACTOR DESIGN TOKENS

**Fecha:** 27 de Noviembre, 2025  
**Tipo de Cambio:** Refactor de colores (brand-* → forja-*)  
**Expectativa:** CERO cambios visuales

---

## 📸 CAPTURAS A/B REQUERIDAS

### Homepage (/)

| Sección | Estado | Elementos a Verificar |
|---------|--------|----------------------|
| **Hero** | ⬜ Pendiente | - Color de título (navy)<br>- Color de CTA (fire)<br>- Gradiente de fondo |
| **Services** | ⬜ Pendiente | - Cards de servicios<br>- Iconos (teal, purple)<br>- Hover states |
| **Pain Points** | ⬜ Pendiente | - Cards de problemas<br>- Iconos<br>- Bordes |
| **Metodología** | ⬜ Pendiente | - Timeline<br>- Números de fase<br>- Conectores |
| **Casos de Éxito** | ⬜ Pendiente | - Cards<br>- Badges<br>- CTAs |
| **CTA Final** | ⬜ Pendiente | - Botones primarios<br>- Gradiente de fondo<br>- Texto |

### Servicio Individual (/servicios/estrategia-transformacion/arquitectura-estrategica)

| Sección | Estado | Elementos a Verificar |
|---------|--------|----------------------|
| **Hero** | ⬜ Pendiente | - Breadcrumbs<br>- Título<br>- Badge eyebrow |
| **Para Quién Es** | ⬜ Pendiente | - Cards<br>- Checkmarks (teal) |
| **Problemas** | ⬜ Pendiente | - Cards de problemas<br>- Iconos<br>- Bordes |
| **Componentes** | ⬜ Pendiente | - Accordion headers<br>- Iconos (teal)<br>- Expansion |
| **Metodología** | ⬜ Pendiente | - Timeline<br>- Fases<br>- Entregables |
| **Caso de Éxito** | ⬜ Pendiente | - Card<br>- Tabla comparativa<br>- Quote |
| **CTA Final** | ⬜ Pendiente | - Botones<br>- Gradiente |

---

## 🎨 VALIDACIÓN DE COLORES

### Método de Verificación

1. **Abrir DevTools** (F12)
2. **Inspeccionar elemento**
3. **Ir a "Computed"**
4. **Verificar valor RGB**

### Tabla de Valores Esperados

| Elemento | Propiedad | Valor RGB Esperado | Antes | Después |
|----------|-----------|-------------------|-------|---------|
| Título H1 | color | `rgb(34, 51, 90)` | ⬜ | ⬜ |
| CTA Primary | background-color | `rgb(237, 116, 66)` | ⬜ | ⬜ |
| Accent Teal | color | `rgb(82, 214, 222)` | ⬜ | ⬜ |
| Purple | color | `rgb(128, 96, 191)` | ⬜ | ⬜ |
| Slate 50 | background-color | `rgb(248, 250, 252)` | ⬜ | ⬜ |

**✅ CRITERIO:** Todos los valores RGB deben ser IDÉNTICOS.

---

## 🖱️ VALIDACIÓN DE INTERACCIONES

### Hover States

| Elemento | Comportamiento Esperado | Estado |
|----------|------------------------|--------|
| **Button Primary** | Fire → Fire/90 (más oscuro) | ⬜ |
| **Button Outline** | Transparente → Navy + texto blanco | ⬜ |
| **Service Card** | Sombra aumenta | ⬜ |
| **Link** | Fire → Fire/80 | ⬜ |
| **Mega Menu Item** | Texto cambia a fire | ⬜ |

### Focus States

| Elemento | Comportamiento Esperado | Estado |
|----------|------------------------|--------|
| **Input** | Ring fire visible | ⬜ |
| **Button** | Ring fire visible | ⬜ |
| **Link** | Ring fire visible | ⬜ |

### Active States

| Elemento | Comportamiento Esperado | Estado |
|----------|------------------------|--------|
| **Button** | Scale 0.95 | ⬜ |
| **Card** | Sombra más pronunciada | ⬜ |

---

## 📱 VALIDACIÓN RESPONSIVE

### Breakpoints a Probar

| Breakpoint | Ancho | Elementos Críticos | Estado |
|------------|-------|-------------------|--------|
| **Mobile** | 375px | - Hero<br>- CTAs<br>- Cards stack | ⬜ |
| **Tablet** | 768px | - Grid 2 cols<br>- Mega menu | ⬜ |
| **Desktop** | 1280px | - Grid 3 cols<br>- Full layout | ⬜ |
| **Wide** | 1920px | - Max-width containers | ⬜ |

---

## 🧪 TESTS FUNCIONALES

### Navegación

- [ ] Header links funcionan
- [ ] Mega menu se abre/cierra
- [ ] Mobile menu funciona
- [ ] Footer links funcionan
- [ ] Breadcrumbs funcionan

### CTAs

- [ ] CTA primary redirige a /contacto
- [ ] CTA secondary redirige correctamente
- [ ] WhatsApp float abre WhatsApp
- [ ] Widget ayuda se abre
- [ ] Sticky bar funciona

### Formularios

- [ ] Input focus ring visible
- [ ] Textarea focus ring visible
- [ ] Checkbox funciona
- [ ] Submit funciona
- [ ] Validación funciona

---

## 📊 MÉTRICAS DE COMPARACIÓN

### Lighthouse Scores (Antes/Después)

| Métrica | Antes | Después | Diferencia |
|---------|-------|---------|------------|
| **Performance** | ___ | ___ | ___ |
| **Accessibility** | ___ | ___ | ___ |
| **Best Practices** | ___ | ___ | ___ |
| **SEO** | ___ | ___ | ___ |

**✅ CRITERIO:** Diferencia máxima permitida: ±2 puntos

### Bundle Size (Antes/Después)

| Archivo | Antes | Después | Diferencia |
|---------|-------|---------|------------|
| **CSS** | ___ KB | ___ KB | ___ KB |
| **JS** | ___ KB | ___ KB | ___ KB |
| **Total** | ___ KB | ___ KB | ___ KB |

**✅ CRITERIO:** Diferencia máxima permitida: ±5%

---

## 🔍 CHECKLIST FINAL

### Pre-Deploy

- [ ] Build exitoso (`npm run build`)
- [ ] TypeScript sin errores (`npx tsc --noEmit`)
- [ ] Todas las capturas A/B tomadas
- [ ] Todos los colores verificados (RGB idénticos)
- [ ] Todas las interacciones probadas
- [ ] Responsive validado (3 breakpoints)
- [ ] Lighthouse scores similares

### Deploy

- [ ] Commit con mensaje descriptivo
- [ ] Push a GitHub
- [ ] Vercel build exitoso
- [ ] Validación en producción
- [ ] Rollback plan listo (si es necesario)

### Post-Deploy

- [ ] Verificar homepage en producción
- [ ] Verificar 2-3 páginas de servicio
- [ ] Verificar formulario de contacto
- [ ] Monitorear errores en Vercel
- [ ] Confirmar con stakeholders

---

## 🎯 CRITERIOS DE ACEPTACIÓN

### Técnicos

✅ Build sin errores  
✅ TypeScript sin errores  
✅ Tailwind sin warnings  
✅ Bundle size sin cambios significativos  

### Visuales

✅ Colores RGB 100% idénticos  
✅ Espaciado sin cambios  
✅ Tipografía sin cambios  
✅ Sombras sin cambios  
✅ Gradientes sin cambios  

### Funcionales

✅ Navegación funciona  
✅ CTAs funcionan  
✅ Formularios funcionan  
✅ Modales funcionan  
✅ Animaciones funcionan  

### Negocio

✅ CTAs destacan igual  
✅ Jerarquía visual mantenida  
✅ Conversión no afectada  
✅ UX sin cambios  

---

## 📞 CONTACTO EN CASO DE ISSUES

**Si encuentras algún problema durante QA:**

1. **Tomar screenshot** del problema
2. **Anotar:** Página, sección, elemento afectado
3. **Verificar:** ¿Es un cambio visual o funcional?
4. **Reportar:** Con screenshot y descripción detallada

**Rollback rápido:**
```bash
git checkout main
git push origin main --force
```

---

**Documento preparado por:** Staff Engineer  
**Fecha:** 27 de Noviembre, 2025  
**Estado:** 📋 LISTO PARA QA

