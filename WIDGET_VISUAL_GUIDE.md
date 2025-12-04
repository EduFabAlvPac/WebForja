# 🎨 Guía Visual del Widget - Diseño Implementado

## 📱 Vista General

El widget tiene un diseño elegante y profesional con gradientes y sombras, exactamente como en tu referencia.

---

## 🎯 Componentes Visuales

### 1. **Header del Widget**

```
┌─────────────────────────────────────────┐
│ ╔═══════════════════════════════════╗  │
│ ║  [🔵] Hola 👋                    [X] ║  ← Gradiente morado → turquesa
│ ║  ¿Cómo podemos ayudarte?            ║
│ ╚═══════════════════════════════════╝  │
└─────────────────────────────────────────┘
```

**Características**:
- ✅ Gradiente `from-forja-purple to-forja-teal`
- ✅ Mesh decorativo sutil (opacidad 10%)
- ✅ Icono con backdrop blur
- ✅ Botón cerrar (X) con hover

---

### 2. **Sección Inicio (Home)**

```
┌─────────────────────────────────────────┐
│                                         │
│         [👋]  ← Icono grande con        │
│              gradiente                  │
│                                         │
│            Hola                         │
│      ¿Cómo podemos ayudarte?           │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ [🟣] Inicio                     │   │ ← Card con gradiente morado
│  │     Califica tu experiencia     │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ [🔵] Mensajes                   │   │ ← Card con gradiente cyan
│  │     Nuestro equipo te ayudará   │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ [🟣] Ayuda                      │   │ ← Card con gradiente violeta
│  │     Preguntas frecuentes        │   │
│  └─────────────────────────────────┘   │
│                                         │
└─────────────────────────────────────────┘
```

**Características**:
- ✅ Icono central grande (64x64px) con gradiente
- ✅ 3 cards con gradientes distintivos
- ✅ Iconos circulares con sombra
- ✅ Hover effect (escala 1.02)
- ✅ Sombras suaves que aumentan al hover

---

### 3. **Sección WhatsApp**

```
┌─────────────────────────────────────────┐
│                                         │
│         [💚]  ← Icono WhatsApp          │
│                                         │
│      Chatea con un Forjador            │
│         🟢 En línea ahora               │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ 🕐 Horario de Atención          │   │
│  │ Lunes a Viernes: 8AM - 6PM      │   │
│  │ Sábados: 9AM - 1PM              │   │
│  │ ⚡ Respuesta rápida garantizada  │   │
│  └─────────────────────────────────┘   │
│                                         │
│  Selecciona un tema:                   │
│  [ ] 🔍 Rayos-X Empresarial            │
│  [ ] 💼 Servicios                      │
│  [ ] 💬 Consulta General               │
│  [ ] 📅 Agendar Reunión                │
│                                         │
│  [  Abrir WhatsApp  ]  ← Botón verde   │
│                                         │
└─────────────────────────────────────────┘
```

**Características**:
- ✅ Icono gradiente verde
- ✅ Indicador "En línea" con punto pulsante
- ✅ Card de horario con icono de reloj
- ✅ 4 opciones de mensaje rápido
- ✅ Botón verde para abrir WhatsApp

---

### 4. **Sección Email (Mensajes)**

```
┌─────────────────────────────────────────┐
│                                         │
│         [📧]  ← Icono Email             │
│                                         │
│       Envíanos un Mensaje              │
│    Respuesta en menos de 24h hábiles   │
│                                         │
│  Email *                               │
│  [___________________________]         │
│                                         │
│  Mensaje *                             │
│  [                           ]         │
│  [                           ]         │
│  [                           ]         │
│                                         │
│  [  Enviar Mensaje  ]  ← Botón primary │
│                                         │
│  Al enviar, aceptas nuestra            │
│  Política de Privacidad                │
│                                         │
└─────────────────────────────────────────┘
```

**Características**:
- ✅ Icono con gradiente morado/turquesa
- ✅ Inputs con focus ring turquesa
- ✅ Labels con asterisco requerido
- ✅ Botón con loading state
- ✅ Link a política de privacidad

---

### 5. **Navegación (Tabs)**

```
┌─────────────────────────────────────────┐
│  [🏠]    [💚]    [📧]    [❓]    [📰]   │
│ Inicio WhatsApp Email  Ayuda Noticias  │
│   ▔▔▔                                   │ ← Indicador activo
└─────────────────────────────────────────┘
```

**Características**:
- ✅ 5 tabs con iconos distintivos
- ✅ Indicador activo con gradiente animado
- ✅ Transición suave al cambiar (200ms)
- ✅ Focus rings visibles
- ✅ Hover states en todos los tabs

---

### 6. **Botones Flotantes**

```
                                    [🟣]  ← Widget (bottom-24)
                                          Gradiente morado/turquesa
                                          Badge rojo
                                          
                                    [🟢]  ← WhatsApp (bottom-6)
                                          Gradiente verde
                                          Pulso animado
```

**Posicionamiento**:
- ✅ Widget: `bottom-24 right-6` (96px desde abajo)
- ✅ WhatsApp: `bottom-6 right-6` (24px desde abajo)
- ✅ Separación: 72px entre botones
- ✅ Sin colisiones en ninguna resolución

---

## 🎨 Paleta de Colores Usada

### Gradientes Principales

**Header**:
```css
background: linear-gradient(to right, #7C3AED, #14B8A6);
/* forja-purple → forja-teal */
```

**Inicio Card (Morado)**:
```css
background: linear-gradient(to bottom right, #F3E8FF, #E9D5FF);
icon: linear-gradient(to bottom right, #7C3AED, #9333EA);
```

**Mensajes Card (Cyan)**:
```css
background: linear-gradient(to bottom right, #ECFEFF, #CFFAFE);
icon: linear-gradient(to bottom right, #14B8A6, #0891B2);
```

**Ayuda Card (Violeta)**:
```css
background: linear-gradient(to bottom right, #F5F3FF, #EDE9FE);
icon: linear-gradient(to bottom right, #8B5CF6, #9333EA);
```

**WhatsApp (Verde)**:
```css
background: linear-gradient(to bottom right, #22C55E, #16A34A);
```

---

## 📐 Espaciado y Tamaños

### Contenedor Principal
- **Ancho**: `calc(100vw - 2rem)` móvil, `448px` desktop
- **Alto máximo**: `600px`
- **Padding**: `px-4 py-6`
- **Border radius**: `rounded-2xl` (16px)
- **Sombra**: `shadow-2xl`

### Iconos
- **Grandes** (header/hero): `64x64px`, `rounded-2xl`
- **Medianos** (cards): `48x48px`, `rounded-xl`
- **Pequeños** (tabs): `20x20px`

### Cards
- **Padding**: `p-4` (16px)
- **Gap**: `gap-4` (16px)
- **Border radius**: `rounded-2xl` (16px)
- **Sombra**: `shadow-sm` → `shadow-md` al hover

### Botones
- **Altura**: `h-14` (56px) - Large
- **Padding**: `px-8 py-3`
- **Border radius**: `rounded-xl` (12px)
- **Transición**: `200ms ease-out`

---

## ✨ Animaciones

### Entrada del Widget
```javascript
initial: { opacity: 0, scale: 0.95, y: 20 }
animate: { opacity: 1, scale: 1, y: 0 }
duration: 200ms
easing: ease-out
```

### Hover en Cards
```javascript
whileHover: { scale: 1.02 }
transition: 200ms
```

### Indicador de Tab Activo
```javascript
layoutId: "activeTab"
transition: 200ms
```

### Pulso en Botón Flotante
```javascript
animate: { scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }
duration: 2s
repeat: Infinity
```

---

## 🚀 Para Ver el Diseño

1. **Inicia el servidor**:
   ```cmd
   npm run dev
   ```

2. **Abre el navegador**:
   ```
   http://localhost:3000
   ```

3. **Busca los botones flotantes**:
   - Esquina inferior derecha
   - Botón morado/turquesa arriba
   - Botón verde WhatsApp abajo

4. **Haz clic en el botón morado** para ver el widget

5. **Explora las secciones**:
   - Inicio: Cards con gradientes
   - WhatsApp: Mensajes rápidos
   - Email: Formulario
   - Ayuda: FAQ con búsqueda
   - Noticias: Cards con imágenes

---

## 📱 Responsive

### Móvil (< 1024px)
- Widget ocupa casi toda la pantalla
- Backdrop blur visible
- Posicionado `bottom-24` para no chocar con WhatsApp

### Desktop (≥ 1024px)
- Widget tamaño máximo `448px`
- Posicionado `bottom-4 right-4`
- Sin backdrop (solo sombra)

---

## 🎯 Características Destacadas

✅ **Gradientes en todos lados**: Header, iconos, cards, botones
✅ **Sombras profundas**: `shadow-2xl` en container, `shadow-lg` en iconos
✅ **Hover effects**: Escala, sombras, colores
✅ **Animaciones suaves**: ≤200ms en todas las transiciones
✅ **Accesibilidad**: Focus rings, ARIA labels, navegación por teclado
✅ **Responsive**: Funciona desde 320px hasta 4K

---

**🎨 El diseño está 100% implementado según tu referencia.**

Para verlo en acción, solo necesitas iniciar el servidor de desarrollo.






