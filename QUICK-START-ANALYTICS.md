# 🚀 Quick Start: Analytics Multi-País

Guía rápida para usar el sistema de analytics con dimensión de país.

## ⚡ Setup (Ya está hecho)

El sistema ya está configurado en `app/layout.tsx`:

```tsx
<body>
  <AnalyticsTracker /> {/* Sincroniza país automáticamente */}
  {children}
</body>
```

## 🎯 Tracking de Eventos

### Importar funciones

```tsx
import { 
  trackCTAClick,
  trackFormSubmit,
  trackWhatsAppClick,
  trackAlertAction,
  trackHomeView 
} from '@/lib/analytics'
```

### Ejemplos de Uso

#### 1. CTA Click
```tsx
const handleCTA = () => {
  trackCTAClick(
    'Contactar Ahora',     // nombre del CTA
    'hero_section',        // ubicación
    '/contacto'            // URL destino (opcional)
  )
}

<Button onClick={handleCTA}>Contactar</Button>
```

#### 2. Form Submit
```tsx
const onSubmit = async (data) => {
  try {
    await submitToAPI(data)
    trackFormSubmit('contact', true)  // ✅ Éxito
  } catch (error) {
    trackFormSubmit('contact', false) // ❌ Error
  }
}
```

#### 3. WhatsApp Click
```tsx
const handleWhatsApp = () => {
  trackWhatsAppClick(
    'widget',      // source: 'widget' | 'sticky_cta' | 'float' | 'hero'
    true           // ¿Número específico del país?
  )
  window.open(whatsappUrl, '_blank')
}
```

#### 4. Alert Actions
```tsx
const handleAlertClick = () => {
  trackAlertAction('click', 'promo-black-friday')
}

const handleAlertDismiss = () => {
  trackAlertAction('dismiss', 'promo-black-friday')
}
```

#### 5. Home View (automático)
```tsx
// En cualquier página que quieras trackear view:
import { HomeViewTracker } from '@/components/analytics/HomeViewTracker'

export default function Page() {
  return (
    <>
      <HomeViewTracker />
      {/* contenido */}
    </>
  )
}
```

## 🔍 Verificar en Desarrollo

```bash
npm run dev
# Abre la consola del navegador
# Verás: [Analytics] event_name { lc: 'es-co', country_code: 'co', ... }
```

## 📊 Ver en Producción

### Vercel Analytics
1. Dashboard → tu-proyecto → Analytics
2. Events → Filtra por dimensión
3. Segmenta por `country_code` o `lc`

### Google Analytics 4
1. Configura `NEXT_PUBLIC_GA_MEASUREMENT_ID` en `.env.local`
2. GA4 → Custom Definitions → Crear dimensiones `lc` y `country_code`
3. Reports → Realtime → Events

## 🎨 Propiedades Automáticas

**Todos** los eventos incluyen automáticamente:

```js
{
  lc: 'es-co',           // Locale del país
  country_code: 'co',    // Código del país
  // ... tus propiedades personalizadas
}
```

## 🧪 Testing Rápido

```tsx
// 1. Importa
import { trackEvent } from '@/lib/analytics'

// 2. Usa
const handleTest = () => {
  trackEvent('test_event', { 
    button: 'test',
    value: 123 
  })
}

// 3. Verifica en consola:
// [Analytics] test_event { button: 'test', value: 123, lc: 'es-cl', country_code: 'cl' }
```

## 📈 Métricas Clave

| Métrica | Evento | Propiedad |
|---------|--------|-----------|
| Conversión Forms | `form_submit` | `success: true` |
| Engagement WhatsApp | `whatsapp_click` | `source` |
| CTAs Efectivos | `cta_click` | `cta_location` |
| Alertas Relevantes | `alert_action` | `action: 'click'` |

## 🚨 Troubleshooting

**Eventos no aparecen en consola:**
- Verifica que estás en desarrollo (`NODE_ENV=development`)
- Revisa que `CountryProvider` está activo

**Eventos no llegan a GA4:**
- Verifica `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- Revisa Network tab → Busca requests a `google-analytics.com`
- Espera ~5 min para ver en Realtime

**Dimensiones no aparecen en GA4:**
- Ve a Admin → Custom Definitions
- Crea dimensiones personalizadas: `lc` y `country_code` (event-scoped)

## 📚 Más Info

- [Documentación Completa](./docs/ANALYTICS_MULTI_COUNTRY.md)
- [Implementación Detallada](./EXP-14-IMPLEMENTACION-COMPLETA.md)

