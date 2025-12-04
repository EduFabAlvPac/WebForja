# Noticias y Rail de Alerta por País

**Versión**: 1.0  
**Fecha**: Diciembre 2024  
**Objetivo**: Sistema de alertas filtradas por país, solo en Home

---

## 🎯 Concepto

Sistema de noticias y alertas que:
- **Filtra por país**: Cada noticia define `countries: ['co', 'cl', 'pe', 'ec', 'all']`
- **Featured**: Una noticia featured por país se muestra en rail
- **Solo Home**: El rail NUNCA aparece en páginas internas
- **Dismiss por día**: El usuario puede cerrar la alerta (persiste por 24h)
- **Accesible**: Navegable por teclado, ARIA completo

---

## 📁 Estructura de Archivos

```
content/
└── news.ts                         # Datos de noticias con filtrado

components/alerts/
├── HomeAlertRail.tsx              # Rail de alerta (desktop + mobile)
└── index.ts                       # Exports

app/[lc]/
└── page.tsx                       # Home (único lugar donde se muestra)
```

---

## 📰 1. Contenido de Noticias

**Archivo**: `content/news.ts`

### Estructura

```typescript
export interface NewsItem {
  id: string;                        // ID único
  title: string;                     // Título
  description: string;               // Descripción
  countries: CountryCode[];          // ['co', 'cl'] o ['all']
  featured?: boolean;                // Si true, se muestra en rail
  type?: 'info' | 'warning' | 'success' | 'announcement';
  link?: string;                     // URL del CTA
  linkText?: string;                 // Texto del botón
  publishedAt: string;               // Fecha YYYY-MM-DD
  expiresAt?: string;                // Fecha de expiración (opcional)
}
```

### Ejemplo

```typescript
export const newsData: NewsItem[] = [
  {
    id: 'promo-navidad-2024',
    title: '🎄 Promoción Navideña 2024',
    description: 'Descuento especial del 20% en todos nuestros servicios...',
    countries: ['all'],              // ← Todos los países
    featured: true,                  // ← Se muestra en rail
    type: 'success',
    link: '/contacto',
    linkText: 'Solicitar Cotización',
    publishedAt: '2024-12-01',
    expiresAt: '2024-12-31',
  },
  {
    id: 'webinar-chile-2024',
    title: '🇨🇱 Webinar Gratuito: Transformación Digital en Chile',
    description: 'Únete a nuestro webinar exclusivo...',
    countries: ['cl'],               // ← Solo Chile
    featured: true,
    type: 'announcement',
    link: '/eventos/webinar-chile',
    linkText: 'Registrarme',
    publishedAt: '2024-12-01',
    expiresAt: '2024-12-15',
  },
];
```

### Helpers

```typescript
import { getNewsByCountry, getFeaturedNews, hasFeaturedNews } from '@/content/news';

// Todas las noticias del país (no expiradas)
const news = getNewsByCountry('cl');

// Solo featured
const featured = getNewsByCountry('cl', true);

// La noticia featured (más reciente)
const featuredNews = getFeaturedNews('cl');

// Verificar si hay featured
if (hasFeaturedNews('cl')) {
  // ...
}
```

---

## 🚨 2. Componente HomeAlertRail

**Archivo**: `components/alerts/HomeAlertRail.tsx`

### Características

#### Desktop (≥ lg)
```
┌─────────────────────────────────────────────┐
│ Header (sticky)                              │
└─────────────────────────────────────────────┘

┌────────────┐  ┌─────────────────────────────┐
│ Alert Rail │  │ Contenido Principal         │
│ (fixed)    │  │                             │
│ Left: 1rem │  │                             │
│            │  │                             │
│ [X] Cerrar │  │                             │
│            │  │                             │
│ 🎄 Título  │  │                             │
│            │  │                             │
│ Descripción│  │                             │
│            │  │                             │
│ [CTA →]    │  │                             │
└────────────┘  └─────────────────────────────┘
```

**Posición**: `fixed left-4 top-[calc(var(--header-height-desktop)+2rem)]`

#### Mobile (< lg)
```
┌─────────────────────────────────────────────┐
│ Header (sticky)                              │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│ Alert Rail (sticky top)         [X] Cerrar  │
│                                              │
│ 🎄 Título                                   │
│ Descripción breve...                        │
│ [CTA →]                                     │
└─────────────────────────────────────────────┘

Contenido Principal...
```

**Posición**: `sticky top-[var(--header-height-mobile)]`

### Uso

```tsx
// Solo en Home (app/[lc]/page.tsx)
import { HomeAlertRail } from '@/components/alerts';

export default function HomePage() {
  return (
    <>
      {/* Lee país automáticamente del CountryContext */}
      <HomeAlertRail />
      
      {/* Resto del contenido */}
    </>
  );
}
```

**NO usar en otras páginas** - El rail solo debe aparecer en Home.

### Lógica de Mostrar/Ocultar

1. ✅ **Mostrar si**:
   - Hay noticia featured para el país
   - No fue dismissed hoy
   - No expiró

2. ❌ **No mostrar si**:
   - No hay noticia featured
   - Fue dismissed hoy
   - Ya expiró (`expiresAt` pasó)

### Dismiss por Día

```typescript
// localStorage key: `home-alert-dismissed-${newsId}`
// Valor: "2024-12-02" (fecha del dismiss)

// Al abrir el navegador otro día, la alerta vuelve a aparecer
```

---

## 🎨 3. Tipos de Alerta

### Info (default)
```
┌──────────────────────────────┐
│ ℹ️  Nuevo Servicio           │
│                              │
│ Descripción...               │
│ [Ver más →]                  │
└──────────────────────────────┘
```
- Fondo: `bg-blue-50`
- Icono: `Info` (azul)
- Botón: `bg-blue-600`

### Warning
```
┌──────────────────────────────┐
│ ⚠️  Mantenimiento Programado │
│                              │
│ Descripción...               │
│ [Ver más →]                  │
└──────────────────────────────┘
```
- Fondo: `bg-yellow-50`
- Icono: `AlertTriangle` (amarillo)
- Botón: `bg-yellow-600`

### Success
```
┌──────────────────────────────┐
│ ✅ Promoción Especial        │
│                              │
│ Descripción...               │
│ [Aprovechar →]               │
└──────────────────────────────┘
```
- Fondo: `bg-green-50`
- Icono: `CheckCircle` (verde)
- Botón: `bg-green-600`

### Announcement
```
┌──────────────────────────────┐
│ 📢 Nuevo Webinar            │
│                              │
│ Descripción...               │
│ [Registrarme →]              │
└──────────────────────────────┘
```
- Fondo: `bg-orange-50`
- Icono: `Megaphone` (naranja)
- Botón: `bg-brand-orange`

---

## 🔄 4. Flujo de Usuario

### Primera Visita a Home

```
Usuario llega a /es-cl/

┌──────────────────────────────┐
│ 🇨🇱 Webinar Chile    [X]    │
│                              │
│ Únete a nuestro webinar...  │
│ [Registrarme →]              │
└──────────────────────────────┘

Contenido...
```

### Usuario Cierra (Dismiss)

```
Usuario click en [X]

→ localStorage: "home-alert-dismissed-webinar-chile-2024" = "2024-12-02"
→ Rail desaparece con fade out
```

### Misma Sesión

```
Usuario navega a /es-cl/servicios

Rail NO aparece (solo Home)

Usuario vuelve a /es-cl/

Rail NO aparece (dismissed hoy)
```

### Día Siguiente

```
Usuario abre navegador (2024-12-03)

→ localStorage: "home-alert-dismissed-webinar-chile-2024" = "2024-12-02"
→ Fecha diferente → Rail vuelve a aparecer

Usuario va a /es-cl/

┌──────────────────────────────┐
│ 🇨🇱 Webinar Chile    [X]    │
│                              │
│ Únete a nuestro webinar...  │
│ [Registrarme →]              │
└──────────────────────────────┘
```

---

## 📱 5. Responsive

### Desktop (≥ 1024px)

- **Posición**: Fixed left
- **Ancho**: 320px (80rem)
- **Top**: Debajo del header + 2rem
- **Max Height**: Viewport - header - 4rem
- **Overflow**: Auto (si contenido largo)

### Mobile (< 1024px)

- **Posición**: Sticky top (debajo del header)
- **Ancho**: Full width - 2rem margins
- **Forma**: Redondeado solo abajo
- **Sin overflow**: Contenido compacto

---

## ♿ 6. Accesibilidad

### ARIA

```html
<aside role="complementary" aria-label="Alerta destacada">
  <button aria-label="Cerrar alerta">
    <X />
  </button>
</aside>
```

### Teclado

- **Tab**: Navegar al botón de cerrar
- **Enter/Space**: Cerrar alerta
- **Tab**: Navegar al CTA (si existe)
- **Enter**: Seguir link

### Focus

```css
focus:outline-none 
focus:ring-2 
focus:ring-offset-2 
focus:ring-brand-orange
```

---

## 💡 Ejemplos de Uso

### Ejemplo 1: Promoción para Todos

```typescript
{
  id: 'black-friday-2024',
  title: '🎉 Black Friday: 30% OFF',
  description: '30% de descuento en todos nuestros servicios. Válido hasta el 30 de noviembre.',
  countries: ['all'],              // ← Todos los países ven esto
  featured: true,
  type: 'success',
  link: '/contacto',
  linkText: 'Aprovechar Oferta',
  publishedAt: '2024-11-25',
  expiresAt: '2024-11-30',
}
```

**Resultado**:
- 🇨🇴 Colombia: Ve la alerta
- 🇨🇱 Chile: Ve la alerta
- 🇵🇪 Perú: Ve la alerta
- 🇪🇨 Ecuador: Ve la alerta

### Ejemplo 2: Webinar Solo Chile

```typescript
{
  id: 'webinar-chile-transformacion',
  title: '🇨🇱 Webinar Exclusivo Chile',
  description: 'Transformación Digital para PYMEs Chilenas. Casos de éxito locales.',
  countries: ['cl'],               // ← Solo Chile
  featured: true,
  type: 'announcement',
  link: '/eventos/webinar-chile',
  linkText: 'Registrarme Gratis',
  publishedAt: '2024-12-01',
  expiresAt: '2024-12-15',
}
```

**Resultado**:
- 🇨🇴 Colombia: NO ve la alerta
- 🇨🇱 Chile: ✅ Ve la alerta
- 🇵🇪 Perú: NO ve la alerta
- 🇪🇨 Ecuador: NO ve la alerta

### Ejemplo 3: Mantenimiento Colombia y Perú

```typescript
{
  id: 'maintenance-co-pe',
  title: '⚠️ Mantenimiento Programado',
  description: 'Realizaremos mantenimiento el sábado 5 de diciembre de 2am a 6am.',
  countries: ['co', 'pe'],         // ← Solo Colombia y Perú
  featured: true,
  type: 'warning',
  publishedAt: '2024-12-01',
  expiresAt: '2024-12-06',
}
```

**Resultado**:
- 🇨🇴 Colombia: ✅ Ve la alerta
- 🇨🇱 Chile: NO ve la alerta
- 🇵🇪 Perú: ✅ Ve la alerta
- 🇪🇨 Ecuador: NO ve la alerta

---

## 🚫 7. Dónde NO Aparece

### ❌ Páginas Internas

```
/es-cl/servicios                ← NO
/es-cl/servicios/arquitectura   ← NO
/es-cl/nosotros                 ← NO
/es-cl/contacto                 ← NO
/es-cl/legal/politica-datos     ← NO
```

### ✅ Solo Home

```
/es-cl/                         ← SÍ ✅
/es-co/                         ← SÍ ✅
/es-pe/                         ← SÍ ✅
/es-ec/                         ← SÍ ✅
```

---

## 🔧 8. Hook useHasActiveAlert

Para ajustar layout si hay alerta activa:

```tsx
import { useHasActiveAlert } from '@/components/alerts';

export function MyComponent() {
  const hasAlert = useHasActiveAlert();
  
  return (
    <div className={cn(
      'content',
      hasAlert && 'lg:ml-80' // Dejar espacio para rail en desktop
    )}>
      {/* contenido */}
    </div>
  );
}
```

**Nota**: Actualmente el Home NO ajusta el layout, el rail es overlay. Pero este hook está disponible si se necesita en el futuro.

---

## ✅ Checklist

### Configuración
- [x] `content/news.ts` con noticias
- [x] Al menos una noticia `featured: true`
- [x] `countries` especificados correctamente
- [x] `publishedAt` en formato YYYY-MM-DD

### Integración
- [x] `<HomeAlertRail />` en `app/[lc]/page.tsx`
- [x] NO en otras páginas

### Testing
- [ ] Verificar aparece en Home
- [ ] Verificar NO aparece en páginas internas
- [ ] Dismiss funciona
- [ ] Alerta vuelve al día siguiente
- [ ] Responsive desktop y mobile
- [ ] Navegación por teclado funciona

---

**✅ Sistema de Noticias y Alertas Implementado**

