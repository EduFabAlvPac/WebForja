# Widget Asistente Virtual - Forja Digital AE

## 📋 Descripción

Widget flotante interactivo con 5 secciones principales: Inicio (NPS), WhatsApp, Email, Ayuda (FAQ) y Noticias.

## 🎨 Características de Diseño

### Header
- Gradiente `from-forja-purple to-forja-teal`
- Borde inferior con luz suave
- Sombra profunda (`shadow-2xl`)
- Mesh decorativo con opacidad 10%

### Container
- `rounded-2xl` con border `1px slate-200`
- `shadow-2xl` para profundidad
- Padding generoso y consistente
- Máximo 600px de altura con scroll interno

### Navegación
- Radix Tabs para accesibilidad
- 5 tabs: Inicio, WhatsApp, Email, Ayuda, Noticias
- Indicador activo con gradiente animado
- Iconos Lucide React con estados hover

### Botones Flotantes
- **Widget**: `rounded-full`, gradiente morado/turquesa, posición `bottom-24`
- **WhatsApp**: `rounded-2xl`, gradiente verde, posición `bottom-6`
- Animación de pulso en ambos
- Badge de notificación en widget
- Posicionamiento sin colisiones

## 🏗️ Estructura de Archivos

```
components/widget/
├── Assistant.tsx           # Componente principal con Radix Tabs
├── WidgetLauncher.tsx      # Botón flotante y wrapper
├── parts/
│   ├── HomeRate.tsx        # Rating NPS con emojis
│   ├── WhatsAppContact.tsx # Chat directo con mensajes rápidos
│   ├── MessagesForm.tsx    # Formulario de contacto por email
│   ├── FaqAccordion.tsx    # Acordeón de preguntas frecuentes
│   └── NewsList.tsx        # Lista de noticias con miniaturas
└── README.md               # Este archivo

content/
├── faq.ts                  # Datos de preguntas frecuentes
└── news.ts                 # Datos de noticias
```

## ♿ Accesibilidad

- ✅ Focus visible en todos los controles (`focus:ring-2`)
- ✅ Soporte para `prefers-reduced-motion`
- ✅ Roles ARIA (`dialog`, `aria-modal`, `aria-labelledby`)
- ✅ Navegación por teclado (Escape para cerrar)
- ✅ Labels descriptivos en todos los inputs
- ✅ Contraste WCAG AA cumplido

## 📱 Responsive

- **Móvil (320px+)**: Widget ocupa `calc(100vw-2rem)`
- **Desktop**: Máximo `448px` (max-w-md)
- Backdrop blur solo en móvil
- Sin desbordes, scroll interno en secciones largas

## 🎭 Animaciones

- Duración: ≤200ms para todas las transiciones
- Sin CLS al abrir/cerrar
- Animaciones deshabilitadas con `prefers-reduced-motion`
- Framer Motion para animaciones fluidas

## 🔧 Uso

El widget se carga automáticamente en el layout principal:

```tsx
// app/layout.tsx
const WidgetLauncher = dynamic(
  () => import('@/components/widget/WidgetLauncher').then(mod => mod.WidgetLauncher),
  { ssr: false }
)

// En el body
<WidgetLauncher />
```

## 📊 Datos

### FAQ (`content/faq.ts`)
- 7 categorías
- Formato: `{ id, title, items: [{ q, a }] }`
- Búsqueda en tiempo real

### Noticias (`content/news.ts`)
- Formato: `{ id, title, summary, source, dateISO, href, image, tags }`
- Miniaturas 80x80px
- Fallback con icono si imagen no carga

## 🎯 Lighthouse Targets

- **Accessibility**: ≥95
- **Performance**: Sin impacto en CLS
- **Best Practices**: Lazy loading, SSR disabled

## 🔄 Estados

### HomeRate
- 5 niveles de rating con emojis
- Estado submitted con mensaje de agradecimiento

### WhatsAppContact
- 4 mensajes rápidos predefinidos
- Horario de atención visible
- Abre WhatsApp Web o app nativa
- Estado confirmación después de enviar

### MessagesForm (Email)
- Validación de email y mensaje
- Estado loading durante envío
- Estado submitted con opción de enviar otro

### FaqAccordion
- Búsqueda en tiempo real
- Acordeón con animación suave
- Scroll interno para contenido largo

### NewsList
- Cards con hover effect
- Formato de fecha localizado (es-CO)
- Tags de categoría

## 🎨 Tokens de Color

- **forja-purple**: `#7C3AED`
- **forja-teal**: `#14B8A6`
- **forja-navy**: `#1E293B`
- **forja-fire**: `#F97316`

## 📝 Notas de Implementación

1. El widget usa `position: fixed` y `z-index: 50`
2. El botón flotante tiene `z-index: 40`
3. Backdrop solo visible en móvil (`lg:hidden`)
4. Todas las animaciones respetan `prefers-reduced-motion`
5. Focus trap dentro del modal cuando está abierto

