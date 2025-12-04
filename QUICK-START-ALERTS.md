# 🚀 Quick Start - Alertas por País (Solo Home)

Guía ultra-rápida para el sistema de alertas en 2 minutos.

---

## ✅ Ya Implementado

Sistema completo de alertas filtradas por país que aparece **solo en Home**.

---

## 📰 Agregar Nueva Noticia

Editar `content/news.ts`:

```typescript
export const newsData: NewsItem[] = [
  // ... noticias existentes
  
  {
    id: 'mi-nueva-noticia',              // ← Único
    title: '🎉 Mi Título',
    description: 'Descripción de la noticia...',
    countries: ['cl', 'pe'],             // ← Países que la ven
    featured: true,                      // ← Aparece en rail
    type: 'success',                     // info|warning|success|announcement
    link: '/contacto',                   // ← Opcional
    linkText: 'Ver más',                 // ← Opcional
    publishedAt: '2024-12-10',           // ← YYYY-MM-DD
    expiresAt: '2024-12-31',             // ← Opcional
  },
];
```

**¡Listo!** Ya aparece automáticamente en Home para Chile y Perú.

---

## 🌍 Filtrado por País

### Para Todos los Países

```typescript
countries: ['all']
```

### Para Países Específicos

```typescript
countries: ['co']          // Solo Colombia
countries: ['cl', 'pe']    // Chile y Perú
countries: ['co', 'cl', 'pe', 'ec']  // Todos menos genérico
```

---

## 🎨 Tipos de Alerta

### Info (azul) - Información general

```typescript
type: 'info'
```

### Warning (amarillo) - Advertencias

```typescript
type: 'warning'
```

### Success (verde) - Promociones, logros

```typescript
type: 'success'
```

### Announcement (naranja) - Eventos, webinars

```typescript
type: 'announcement'
```

---

## 📍 Dónde Aparece

### ✅ Solo Home

```
/es-co/          ← SÍ ✅
/es-cl/          ← SÍ ✅
/es-pe/          ← SÍ ✅
/es-ec/          ← SÍ ✅
```

### ❌ Nunca en Internas

```
/es-cl/servicios             ← NO
/es-cl/nosotros              ← NO
/es-cl/contacto              ← NO
/es-cl/legal/politica-datos  ← NO
```

**El rail solo aparece en Home**, garantizado por la implementación.

---

## 🔧 Prioridad de Featured

Si hay **múltiples featured** para un país, se muestra la **más reciente**:

```typescript
[
  {
    id: 'noticia-1',
    publishedAt: '2024-12-01',
    featured: true,
    countries: ['cl'],
  },
  {
    id: 'noticia-2',
    publishedAt: '2024-12-10',  // ← Más reciente, se muestra esta
    featured: true,
    countries: ['cl'],
  },
]
```

---

## 📅 Expiración

### Sin Expiración

```typescript
expiresAt: undefined  // o simplemente no incluir el campo
```

La noticia se muestra indefinidamente.

### Con Expiración

```typescript
expiresAt: '2024-12-31'  // Deja de mostrarse el 1 de enero
```

---

## 🎯 Ejemplos Comunes

### Promoción Temporal (Todos los Países)

```typescript
{
  id: 'black-friday-2024',
  title: '🎉 Black Friday: 30% OFF',
  description: '30% de descuento en todos nuestros servicios hasta el 30 de noviembre.',
  countries: ['all'],
  featured: true,
  type: 'success',
  link: '/contacto',
  linkText: 'Aprovechar Oferta',
  publishedAt: '2024-11-25',
  expiresAt: '2024-11-30',  // ← Se oculta automáticamente el 1 de diciembre
}
```

### Webinar Específico (Solo un País)

```typescript
{
  id: 'webinar-chile-diciembre',
  title: '🇨🇱 Webinar Exclusivo para Chile',
  description: 'Transformación Digital para PYMEs Chilenas. Inscripción gratuita.',
  countries: ['cl'],
  featured: true,
  type: 'announcement',
  link: '/eventos/webinar-chile',
  linkText: 'Registrarme Gratis',
  publishedAt: '2024-12-01',
  expiresAt: '2024-12-15',
}
```

### Mantenimiento (Varios Países)

```typescript
{
  id: 'maintenance-dec-2024',
  title: '⚠️ Mantenimiento Programado',
  description: 'Realizaremos mantenimiento el sábado 15 de diciembre de 2am a 6am.',
  countries: ['co', 'pe'],
  featured: true,
  type: 'warning',
  publishedAt: '2024-12-10',
  expiresAt: '2024-12-16',
}
```

### Noticia Sin Link

```typescript
{
  id: 'feriado-aviso',
  title: 'ℹ️ Atención Modificada por Feriado',
  description: 'Durante el 25 de diciembre nuestra atención será limitada. Responderemos el 26.',
  countries: ['all'],
  featured: true,
  type: 'info',
  // Sin link ni linkText
  publishedAt: '2024-12-20',
  expiresAt: '2024-12-26',
}
```

---

## 🚫 Dismiss

El usuario puede cerrar la alerta:

1. Click en **[X]**
2. Se guarda en localStorage: `home-alert-dismissed-${id} = "2024-12-10"`
3. No vuelve a aparecer **ese día**
4. **Al día siguiente**, vuelve a aparecer

**No necesitas configurar nada**, funciona automáticamente.

---

## 📱 Responsive

### Desktop (≥ 1024px)

- Fixed left
- Ancho 320px
- No ocupa espacio del contenido

### Mobile (< 1024px)

- Sticky top (debajo del header)
- Full width con margins
- Se mueve al scrollear

---

## 🧪 Testing Rápido

### 1. Verificar Aparece

```
http://localhost:3000/es-cl/
```

Debe aparecer rail con noticia de Chile o "all".

### 2. Verificar Dismiss

- Click en [X]
- Rail desaparece
- Reload → No aparece (dismissed)

### 3. Verificar NO en Internas

```
http://localhost:3000/es-cl/servicios
```

Rail NO debe aparecer.

### 4. Simular Día Siguiente

- Dev Tools → Application → localStorage
- Buscar key `home-alert-dismissed-...`
- Cambiar fecha: `"2024-12-10"` → `"2024-12-09"`
- Reload → Rail vuelve a aparecer

---

## 💡 Tips

### Varios Featured para un País

Solo se muestra el más reciente. Si quieres cambiar cuál se muestra:

```typescript
// Cambiar publishedAt a una fecha más reciente
publishedAt: '2024-12-15'  // ← Más reciente que otras
```

### Noticia Urgente

```typescript
type: 'warning'
publishedAt: new Date().toISOString().split('T')[0]  // Hoy
```

### Sin CTA

Simplemente no incluir `link` ni `linkText`.

---

## 🚨 Errores Comunes

### ❌ Múltiples Featured Activos

```typescript
// Problema: 3 featured para Chile
countries: ['cl'], featured: true  // Noticia 1
countries: ['cl'], featured: true  // Noticia 2
countries: ['cl'], featured: true  // Noticia 3

// Solo se muestra la más reciente (publishedAt)
```

### ❌ Formato de Fecha Incorrecto

```typescript
// MAL
publishedAt: '02/12/2024'

// BIEN
publishedAt: '2024-12-02'  // YYYY-MM-DD
```

### ❌ ID Duplicado

```typescript
// MAL (mismo ID)
{ id: 'promo', ... }
{ id: 'promo', ... }

// BIEN (IDs únicos)
{ id: 'promo-navidad', ... }
{ id: 'promo-año-nuevo', ... }
```

---

## 📚 Docs Completas

- 📖 **Guía Técnica**: `docs/NEWS_ALERT_RAIL.md`
- 📄 **Resumen**: `EXP-12-IMPLEMENTACION-COMPLETA.md`

---

**🎉 Listo para Usar**

Edita `content/news.ts`, agrega tu noticia, ¡y ya! 🚀

