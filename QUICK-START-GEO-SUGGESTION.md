# 🚀 Quick Start - Geo Suggestion

Guía ultra-rápida de la geosugerencia no intrusiva en 2 minutos.

## ✅ Ya Implementado y Funcionando

El sistema de sugerencia de país está **activo en la homepage** y funciona automáticamente. No requiere configuración adicional.

---

## 🎯 Cómo Funciona

### Para el Usuario

```
1. Visita www.forjadigital.com (primera vez)
   ↓
2. Sistema detecta: "Estás en Colombia"
   ↓
3. Snackbar aparece (1.5s después):
   
   ┌───────────────────────────────────────┐
   │ 🗺️ Parece que estás en Colombia 🇨🇴  │
   │ ¿Quieres ver el contenido para Colombia? │
   │ [Sí, cambiar a Colombia] [No, gracias] │
   └───────────────────────────────────────┘
   
4a. Click "Sí" → Navega a /es-co + Cookie guardada
4b. Click "No" → Cierra + No vuelve a molestar
```

### Características Clave

- ✅ **No Intrusivo**: Usuario decide
- ✅ **Una Sola Vez**: No repite la pregunta
- ✅ **Respeta Preferencias**: Si ya eligió, no sugiere
- ❌ **NUNCA redirige automáticamente**

---

## 🏗️ Arquitectura Simple

```typescript
Middleware (Edge)
  ↓ detecta país por IP
  ↓ agrega header x-geo-country
  ↓
Homepage
  ↓ lee header
  ↓ verifica condiciones
  ↓
Snackbar (si aplica)
  ↓ usuario interactúa
  ↓
Cookie + LocalStorage
```

---

## 📦 Componentes

### 1. Middleware

```typescript
// middleware.ts
const geoCountry = request.geo?.country;  // 'CO', 'CL', etc.
const locale = mapCountryToLocale(geoCountry);  // 'es-co'
response.headers.set('x-geo-country', locale);
```

### 2. Homepage

```typescript
// app/[lc]/page.tsx
const headersList = headers();
const geoCountry = headersList.get('x-geo-country');

<CountrySuggest 
  suggestedLocale={geoCountry} 
  currentLocale={params.lc}
/>
```

### 3. Snackbar

```typescript
// components/country/CountrySuggest.tsx
// Verifica 4 condiciones:
1. ¿Hay sugerencia válida? ✓
2. ¿Es diferente al actual? ✓
3. ¿Sin cookie existente? ✓
4. ¿No se mostró antes? ✓

// Solo muestra si todas pasan
```

---

## 🔧 Verificaciones

### ¿Se está mostrando?

El snackbar se muestra **SOLO SI**:

| Condición | Verificar |
|-----------|-----------|
| País soportado | CO, CL, PE, EC |
| Primera visita | Sin cookie `forja_lc` |
| No rechazó antes | LocalStorage vacío |
| En homepage | URL = `/es` |

---

## 🧪 Testing Rápido

### Test 1: Primera Visita

```bash
# 1. Limpiar
localStorage.clear();
document.cookie = "forja_lc=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

# 2. Visitar
http://localhost:3000/es

# 3. Esperar 1.5s

# ✅ Snackbar aparece
```

### Test 2: Segunda Visita

```bash
# Ya viste el snackbar antes

# ✅ NO aparece (localStorage marcado)
```

### Test 3: Con Preferencia

```bash
# Ya tienes cookie forja_lc=es-cl

# ✅ NO aparece (respeta preferencia)
```

---

## 🗺️ Países Soportados

| Flag | País | Detecta | Sugiere |
|------|------|---------|---------|
| 🇨🇴 | Colombia | CO | es-co |
| 🇨🇱 | Chile | CL | es-cl |
| 🇵🇪 | Perú | PE | es-pe |
| 🇪🇨 | Ecuador | EC | es-ec |

Otros países → No sugiere nada

---

## 💾 Persistencia

### Cookie (si acepta)

```
Nombre:  forja_lc
Valor:   es-co
Duración: 180 días (6 meses)
```

### LocalStorage (siempre)

```
Clave:  forja_geo_suggest_shown
Valor:  true
Duración: Permanente (hasta limpiar navegador)
```

---

## 🐛 Debug Rápido

### Problema: No Aparece

```javascript
// En console del navegador

// 1. ¿Hay header?
// (Solo funciona en Vercel Edge, no en localhost)

// 2. ¿Hay cookie?
console.log(document.cookie.includes('forja_lc'));

// 3. ¿Ya se mostró?
console.log(localStorage.getItem('forja_geo_suggest_shown'));
```

### Problema: Aparece Siempre

```javascript
// Verificar que se marca en localStorage
localStorage.getItem('forja_geo_suggest_shown'); // debe ser 'true'
```

### Resetear para Testing

```javascript
// Borrar marca
localStorage.removeItem('forja_geo_suggest_shown');

// Recargar
location.reload();
```

---

## ⚙️ Configuración

### Cambiar Delay

```typescript
// components/country/CountrySuggest.tsx
// Línea ~45

setTimeout(() => {
  setIsVisible(true);
}, 1500);  // ← Cambiar aquí (milisegundos)
```

### Agregar País

```typescript
// middleware.ts
const countryMap: Record<string, string> = {
  'CO': 'es-co',
  'CL': 'es-cl',
  'PE': 'es-pe',
  'EC': 'es-ec',
  'MX': 'es-mx',  // ← Agregar México
};
```

---

## 🎨 Personalización

### Cambiar Mensaje

```typescript
// CountrySuggest.tsx
<p>Parece que estás en {suggestedCountry.name}</p>
// ↓ Cambiar a:
<p>¡Hola desde {suggestedCountry.name}!</p>
```

### Cambiar Posición

```typescript
// CountrySuggest.tsx
className="fixed bottom-6 left-1/2"
// ↓ Cambiar a top:
className="fixed top-6 left-1/2"
```

---

## ✨ Características

### UX

- 🎯 No intrusivo
- ⏱️ Delay de 1.5s (no interrumpe)
- 🔔 Una sola vez
- 🍪 Respeta preferencias
- 📱 Responsive

### Técnico

- ⚡ Edge detection (Vercel)
- 🔒 Privacy-friendly
- ♿ Accesible (ARIA)
- 🎨 Animado
- 📦 TypeScript

---

## 📊 Métricas

| Métrica | Valor |
|---------|-------|
| Delay | 1.5s |
| Duración cookie | 6 meses |
| LocalStorage | Permanente |
| Países | 4 |
| Líneas de código | ~200 |

---

## 🚀 Production

### Vercel Edge

```typescript
// Funciona automáticamente en Vercel
request.geo.country  // Auto-detectado
```

### Local Development

```typescript
// request.geo no está disponible
// Snackbar no aparece (normal)
```

### Testing con VPN

```typescript
// Usar VPN a Colombia
// Deployar a Vercel
// Visitar URL de producción
```

---

## 📚 Docs Completas

- 📖 **Implementación**: `docs/GEO_SUGGESTION_IMPLEMENTATION.md`
- 📄 **Resumen**: `EXP-4-IMPLEMENTACION-COMPLETA.md`
- 🌎 **Country Context**: `docs/COUNTRY_CONTEXT_USAGE.md`

---

## 🎉 Listo para Usar

El sistema funciona **out of the box** en producción. Solo asegúrate de estar en Vercel Edge para geolocalización automática.

---

**¿Dudas?** Revisa la documentación completa en los links de arriba.

