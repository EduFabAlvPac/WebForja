# 🧪 GUÍA DE TESTING - MEGA MENÚ MOCKUP

## 🚀 ANTES DE EMPEZAR

### 1. Instalar Dependencias
```bash
npm install
```

### 2. Iniciar Servidor de Desarrollo
```bash
npm run dev
```

### 3. Abrir Navegador
```
http://localhost:3000
```

---

## 🖥️ TESTING DESKTOP (Pantalla ≥ 1024px)

### Test 1: Apertura del Mega Menú
**Pasos:**
1. Abrir http://localhost:3000
2. Ubicar el menú de navegación en el header
3. Hacer hover sobre "Servicios"

**Resultado Esperado:**
- ✅ El mega menú aparece suavemente (300ms)
- ✅ Animación de fade + slide down
- ✅ No hay saltos ni glitches

**Captura de Pantalla:** `test-1-apertura.png`

---

### Test 2: Borde Dibujado a Mano
**Pasos:**
1. Mantener el mouse sobre "Servicios"
2. Observar el borde rojo alrededor del mega menú
3. Esperar 1.2 segundos

**Resultado Esperado:**
- ✅ Borde rojo comienza a dibujarse después de 100ms
- ✅ Animación completa en 1.2 segundos
- ✅ Efecto de "dibujado a mano" visible
- ✅ Color: rojo (#EF4444)
- ✅ Grosor: 3px

**Captura de Pantalla:** `test-2-borde.png`

---

### Test 3: Layout de 3 Columnas
**Pasos:**
1. Con el mega menú abierto, observar la estructura
2. Contar las columnas visibles

**Resultado Esperado:**
- ✅ Exactamente 3 columnas visibles
- ✅ Gap de 48px entre columnas
- ✅ Padding de 48px alrededor del contenido
- ✅ Sombra profunda visible
- ✅ Esquinas redondeadas

**Columnas:**
1. Estrategia & Transformación
2. Talento & Operaciones
3. Finanzas & Sostenibilidad

**Captura de Pantalla:** `test-3-layout.png`

---

### Test 4: Iconos y Colores Pasteles
**Pasos:**
1. Observar cada servicio en las 3 columnas
2. Verificar que cada icono tenga un fondo de color pastel

**Resultado Esperado:**

#### Columna 1: Estrategia & Transformación
- ✅ **Estrategia Empresarial**
  - Icono: Lightbulb (bombilla) 💡
  - Fondo: Celeste claro (#E0F7FA)
  - Icono color: Celeste oscuro (#00BCD4)
  - Tamaño: 48x48px

- ✅ **Transformación Digital**
  - Icono: Smartphone (móvil) 📱
  - Fondo: Naranja claro (#FFE0B2)
  - Icono color: Naranja oscuro (#FF9800)
  - Tamaño: 48x48px

#### Columna 2: Talento & Operaciones
- ✅ **Talento**
  - Icono: Users (personas) 👥
  - Fondo: Púrpura claro (#E1BEE7)
  - Icono color: Púrpura oscuro (#9C27B0)
  - Tamaño: 48x48px

- ✅ **Excelencia Operacional**
  - Icono: Settings (engranaje) ⚙️
  - Fondo: Rojo claro (#FFCDD2)
  - Icono color: Rojo oscuro (#F44336)
  - Tamaño: 48x48px

#### Columna 3: Finanzas & Sostenibilidad
- ✅ **Finanzas**
  - Icono: DollarSign (signo de dólar) 💰
  - Fondo: Teal claro (#B2DFDB)
  - Icono color: Teal oscuro (#009688)
  - Tamaño: 48x48px

- ✅ **Sostenibilidad**
  - Icono: Leaf (hoja) 🍃
  - Fondo: Violeta claro (#D1C4E9)
  - Icono color: Violeta oscuro (#673AB7)
  - Tamaño: 48x48px

**Captura de Pantalla:** `test-4-iconos.png`

---

### Test 5: Animación Staggered (Escalonada)
**Pasos:**
1. Quitar el mouse de "Servicios" (cerrar menú)
2. Esperar 1 segundo
3. Volver a hacer hover sobre "Servicios"
4. Observar cómo aparecen los items

**Resultado Esperado:**
- ✅ Los items NO aparecen todos al mismo tiempo
- ✅ Primera columna aparece primero
- ✅ Segunda columna aparece después
- ✅ Tercera columna aparece al final
- ✅ Dentro de cada columna, items aparecen uno tras otro
- ✅ Delay perceptible pero fluido

**Timing:**
- Columna 1: 0ms, 50ms
- Columna 2: 100ms, 150ms
- Columna 3: 200ms, 250ms

**Captura de Video:** `test-5-animacion.mp4`

---

### Test 6: Hover Effects en Cards
**Pasos:**
1. Con el mega menú abierto
2. Hacer hover sobre cada servicio (card)

**Resultado Esperado por Card:**
- ✅ Fondo cambia a gris claro (#F9FAFB)
- ✅ Título cambia a color naranja (#F47D3B)
- ✅ Icono escala al 110%
- ✅ Transición suave (300ms)
- ✅ No hay saltos

**Probar con:**
- Estrategia Empresarial
- Transformación Digital
- Talento
- Excelencia Operacional
- Finanzas
- Sostenibilidad

**Captura de Pantalla:** `test-6-hover.png`

---

### Test 7: ChevronDown Animado
**Pasos:**
1. Observar el ícono junto a "Servicios"
2. Hacer hover sobre "Servicios"
3. Observar la rotación del chevron

**Resultado Esperado:**
- ✅ Chevron inicia apuntando abajo (▼)
- ✅ Al abrir menú, rota 180° (▲)
- ✅ Rotación suave con transición
- ✅ Al cerrar, vuelve a la posición original

**Captura de Pantalla:** `test-7-chevron.png`

---

### Test 8: Tipografía y Espaciado
**Pasos:**
1. Con el mega menú abierto
2. Observar los textos en detalle

**Resultado Esperado:**

#### Títulos de Columna
- ✅ Tamaño: text-xl (20px)
- ✅ Peso: font-bold (700)
- ✅ Color: Negro (#111827)
- ✅ Margen inferior: 32px (mb-8)
- ✅ Línea inferior: border-b gris
- ✅ Padding inferior en línea: 12px (pb-3)

#### Títulos de Servicio
- ✅ Tamaño: text-base (16px)
- ✅ Peso: font-semibold (600)
- ✅ Color: Gris oscuro (#1F2937)
- ✅ Hover: Naranja (#F47D3B)
- ✅ Margen inferior: 4px (mb-1)

#### Descripciones
- ✅ Tamaño: text-sm (14px)
- ✅ Peso: normal
- ✅ Color: Gris (#4B5563)
- ✅ Line height: leading-relaxed

**Captura de Pantalla:** `test-8-tipografia.png`

---

### Test 9: Footer del Mega Menú
**Pasos:**
1. Con el mega menú abierto
2. Scroll hacia abajo si es necesario
3. Observar el footer

**Resultado Esperado:**
- ✅ Línea superior gris (border-t)
- ✅ Padding superior: 24px (pt-6)
- ✅ Margen superior: 32px (mt-8)
- ✅ Link "Ver todos los servicios"
- ✅ Color naranja con icono de flecha
- ✅ Hover: color naranja más oscuro

**Captura de Pantalla:** `test-9-footer.png`

---

### Test 10: Cierre del Mega Menú
**Pasos:**
1. Con el mega menú abierto
2. Mover el mouse fuera del área de "Servicios"
3. Observar el cierre

**Resultado Esperado:**
- ✅ El menú se cierra suavemente
- ✅ Animación inversa (fade out + slide up)
- ✅ Duración: 300ms
- ✅ No hay parpadeos

**Captura de Video:** `test-10-cierre.mp4`

---

## 📱 TESTING MOBILE (Pantalla < 1024px)

### Test 11: Menú Hamburguesa
**Pasos:**
1. Reducir ventana a < 1024px (o usar DevTools)
2. Observar el header
3. Tocar/click en el ícono de menú hamburguesa

**Resultado Esperado:**
- ✅ Ícono hamburguesa visible (3 líneas)
- ✅ Al tocar, menú se desliza desde la derecha
- ✅ Ícono cambia a X
- ✅ Animación fluida

**Captura de Pantalla:** `test-11-hamburguesa.png`

---

### Test 12: Item Servicios en Mobile
**Pasos:**
1. Con el menú mobile abierto
2. Localizar "Servicios"
3. Observar el chevron a la derecha

**Resultado Esperado:**
- ✅ "Servicios" visible como item
- ✅ ChevronRight visible (►)
- ✅ Área touch grande (44x44px mínimo)

**Captura de Pantalla:** `test-12-servicios-mobile.png`

---

### Test 13: Accordion - Expansión
**Pasos:**
1. Tocar/click en "Servicios"
2. Observar la expansión

**Resultado Esperado:**
- ✅ Se expande suavemente (animación de altura)
- ✅ ChevronRight rota 90° (apunta abajo: ▼)
- ✅ Muestra 3 secciones colapsables:
  - Estrategia & Transformación
  - Talento & Operaciones
  - Finanzas & Sostenibilidad
- ✅ Cada sección tiene su propio chevron

**Captura de Pantalla:** `test-13-accordion-expandido.png`

---

### Test 14: Accordion - Subsección
**Pasos:**
1. Con "Servicios" expandido
2. Tocar "Estrategia & Transformación"
3. Observar

**Resultado Esperado:**
- ✅ Subsección se expande
- ✅ Chevron de subsección rota 180°
- ✅ Muestra 2 servicios:
  - Estrategia Empresarial (icono Lightbulb celeste)
  - Transformación Digital (icono Smartphone naranja)
- ✅ Iconos de 40x40px
- ✅ Fondos pasteles visibles

**Captura de Pantalla:** `test-14-subseccion.png`

---

### Test 15: Iconos Mobile
**Pasos:**
1. Expandir todas las subsecciones
2. Verificar los 6 iconos

**Resultado Esperado:**

#### Tamaños Mobile
- ✅ Iconos: 40x40px (w-10 h-10)
- ✅ Iconos internos: 20x20px (w-5 h-5)
- ✅ Colores pasteles correctos
- ✅ Visibles y legibles

#### Todos los Servicios Visibles
- ✅ Estrategia Empresarial (celeste)
- ✅ Transformación Digital (naranja)
- ✅ Talento (púrpura)
- ✅ Excelencia Operacional (rojo)
- ✅ Finanzas (teal)
- ✅ Sostenibilidad (violeta)

**Captura de Pantalla:** `test-15-iconos-mobile.png`

---

### Test 16: Navegación desde Mobile
**Pasos:**
1. Con el accordion expandido
2. Tocar cualquier servicio (ej: "Talento")

**Resultado Esperado:**
- ✅ Navega a la página correcta (/servicios/talento)
- ✅ El menú mobile se cierra automáticamente
- ✅ Sin delay perceptible
- ✅ Transición suave

**Captura de Video:** `test-16-navegacion-mobile.mp4`

---

### Test 17: Múltiples Expansiones
**Pasos:**
1. Expandir "Estrategia & Transformación"
2. SIN colapsar la anterior, expandir "Talento & Operaciones"
3. Expandir "Finanzas & Sostenibilidad"

**Resultado Esperado:**
- ✅ TODAS las secciones pueden estar expandidas simultáneamente
- ✅ No se colapsan automáticamente
- ✅ Scroll funciona si el contenido es muy largo
- ✅ Cada subsección funciona independientemente

**Captura de Pantalla:** `test-17-multiples-expandidas.png`

---

## 📱 TESTING TABLET (768px - 1023px)

### Test 18: Breakpoint Tablet
**Pasos:**
1. Ajustar ventana a 768px de ancho
2. Observar el menú

**Resultado Esperado:**
- ✅ Mega menú desktop visible
- ✅ 3 columnas (puede ser más estrecho)
- ✅ Todo el contenido visible
- ✅ Sin scroll horizontal
- ✅ Padding ajustado

**Captura de Pantalla:** `test-18-tablet.png`

---

## 🖼️ TESTING RESPONSIVE

### Test 19: Breakpoints Principales

**320px (Mobile Small)**
- ✅ Menú hamburguesa
- ✅ Logo visible y escalado
- ✅ Todo el contenido accesible
- ✅ Sin overflow

**375px (iPhone)**
- ✅ Igual que 320px
- ✅ Mejor espaciado

**768px (Tablet Portrait)**
- ✅ Mega menú desktop empieza a aparecer
- ✅ O menú mobile dependiendo de lg breakpoint

**1024px (Tablet Landscape)**
- ✅ Mega menú desktop definitivo
- ✅ 3 columnas visibles
- ✅ Espaciado completo

**1280px (Desktop)**
- ✅ Layout óptimo
- ✅ Espaciado generoso
- ✅ Mega menú centrado

**1920px (Desktop Large)**
- ✅ Mega menú centrado
- ✅ No se estira demasiado
- ✅ Max-width respetado

**Captura de Pantalla por Breakpoint:**
- `test-19-320px.png`
- `test-19-768px.png`
- `test-19-1024px.png`
- `test-19-1920px.png`

---

## 🔧 TESTING DE CONSOLA

### Test 20: Consola del Navegador
**Pasos:**
1. Abrir DevTools (F12)
2. Ir a la pestaña "Console"
3. Interactuar con el mega menú

**Resultado Esperado:**
- ✅ Sin errores en rojo
- ✅ Sin warnings importantes
- ✅ Sin errores de imports
- ✅ Sin errores de React
- ✅ Sin errores de TypeScript

**Captura de Pantalla:** `test-20-consola.png`

---

### Test 21: Network Tab
**Pasos:**
1. Recargar la página con DevTools abierto
2. Ir a la pestaña "Network"
3. Verificar las peticiones

**Resultado Esperado:**
- ✅ Logo LOGO COLOR.jpg se carga correctamente
- ✅ Sin errores 404
- ✅ Todos los assets cargan
- ✅ Tiempos de carga razonables

**Captura de Pantalla:** `test-21-network.png`

---

## ⚡ TESTING DE PERFORMANCE

### Test 22: Lighthouse Audit
**Pasos:**
1. Abrir DevTools
2. Ir a "Lighthouse"
3. Seleccionar "Desktop"
4. Run audit

**Resultado Esperado:**
- ✅ Performance: > 90
- ✅ Accessibility: > 90
- ✅ Best Practices: > 90
- ✅ SEO: > 90

**Captura de Pantalla:** `test-22-lighthouse.png`

---

### Test 23: FPS durante Animaciones
**Pasos:**
1. Abrir DevTools
2. Performance tab
3. Grabar mientras abres/cierras el mega menú

**Resultado Esperado:**
- ✅ 60 FPS constante
- ✅ Sin drops significativos
- ✅ Animaciones fluidas
- ✅ Sin janks

**Captura de Pantalla:** `test-23-fps.png`

---

## ♿ TESTING DE ACCESIBILIDAD

### Test 24: Navegación con Teclado
**Pasos:**
1. Recargar la página
2. Usar solo el teclado (Tab, Enter, Escape)

**Resultado Esperado:**
- ✅ Tab navega por los items del menú
- ✅ Enter abre submenús
- ✅ Escape cierra el mega menú
- ✅ Focus visible en elementos
- ✅ Orden lógico de navegación

---

### Test 25: Screen Reader
**Pasos:**
1. Activar screen reader (NVDA, JAWS, VoiceOver)
2. Navegar por el menú

**Resultado Esperado:**
- ✅ Anuncia "Servicios, button"
- ✅ Anuncia cuando se expande
- ✅ Lee los títulos de servicio
- ✅ Lee las descripciones
- ✅ Todo el contenido accesible

---

## 🌐 TESTING CROSS-BROWSER

### Test 26: Navegadores Desktop

**Chrome (latest)**
- ✅ Todo funciona
- ✅ Animaciones fluidas
- ✅ Colores correctos

**Firefox (latest)**
- ✅ Todo funciona
- ✅ Animaciones fluidas
- ✅ Colores correctos

**Safari (latest)**
- ✅ Todo funciona
- ✅ Animaciones fluidas
- ✅ Colores correctos

**Edge (latest)**
- ✅ Todo funciona
- ✅ Animaciones fluidas
- ✅ Colores correctos

---

### Test 27: Navegadores Mobile

**Safari iOS**
- ✅ Touch events funcionan
- ✅ Accordion funciona
- ✅ No hay problemas de scroll

**Chrome Android**
- ✅ Touch events funcionan
- ✅ Accordion funciona
- ✅ No hay problemas de scroll

---

## ✅ CHECKLIST FINAL

### Pre-Testing
- [ ] `npm install` ejecutado
- [ ] `npm run dev` corriendo
- [ ] http://localhost:3000 abierto
- [ ] DevTools abierto (F12)

### Desktop (27 tests)
- [ ] Test 1: Apertura del mega menú
- [ ] Test 2: Borde dibujado a mano
- [ ] Test 3: Layout de 3 columnas
- [ ] Test 4: Iconos y colores pasteles (6 servicios)
- [ ] Test 5: Animación staggered
- [ ] Test 6: Hover effects en cards
- [ ] Test 7: ChevronDown animado
- [ ] Test 8: Tipografía y espaciado
- [ ] Test 9: Footer del mega menú
- [ ] Test 10: Cierre del mega menú

### Mobile (7 tests)
- [ ] Test 11: Menú hamburguesa
- [ ] Test 12: Item Servicios en mobile
- [ ] Test 13: Accordion - Expansión
- [ ] Test 14: Accordion - Subsección
- [ ] Test 15: Iconos mobile (6 servicios)
- [ ] Test 16: Navegación desde mobile
- [ ] Test 17: Múltiples expansiones

### Responsive (2 tests)
- [ ] Test 18: Breakpoint tablet
- [ ] Test 19: Breakpoints principales (6 tamaños)

### Técnico (8 tests)
- [ ] Test 20: Consola sin errores
- [ ] Test 21: Network tab limpio
- [ ] Test 22: Lighthouse audit > 90
- [ ] Test 23: FPS 60 constante
- [ ] Test 24: Navegación con teclado
- [ ] Test 25: Screen reader
- [ ] Test 26: Cross-browser desktop (4 navegadores)
- [ ] Test 27: Cross-browser mobile (2 navegadores)

---

## 📊 REPORTE DE TESTING

Después de completar todos los tests, crea un reporte con:

1. **Tests Pasados:** X/27
2. **Tests Fallidos:** X/27
3. **Bugs Encontrados:** Lista
4. **Mejoras Sugeridas:** Lista
5. **Capturas:** Anexar carpeta con imágenes/videos

---

## 🐛 REPORTE DE BUGS

Si encuentras un bug, reporta con:

```markdown
### Bug #X: [Título descriptivo]

**Severidad:** Alta/Media/Baja
**Test:** Test #X
**Navegador:** Chrome 120.0
**Dispositivo:** Desktop 1920x1080

**Pasos para reproducir:**
1. ...
2. ...
3. ...

**Resultado esperado:**
...

**Resultado actual:**
...

**Capturas:**
- bug-X-screenshot.png
- bug-X-video.mp4
```

---

**Fecha de Testing:** _________
**Testeado por:** _________
**Versión:** 1.0.0
**Estado:** ✅ / ⚠️ / ❌

