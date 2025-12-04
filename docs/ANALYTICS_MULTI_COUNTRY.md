# Analytics Multi-País

Sistema de tracking con dimensión de país automática para segmentación en Vercel Analytics y Google Analytics 4.

## 📊 Características

- **Contexto automático**: Todos los eventos incluyen `lc` y `country_code`
- **Eventos específicos**: Tracking de acciones clave multi-país
- **Compatible con GA4 y Vercel Analytics**
- **No-op en desarrollo**: Solo logs en consola

## 🎯 Eventos Trackeados

### Core Events

| Evento | Propiedades | Descripción |
|--------|------------|-------------|
| `view_home` | `lc`, `country_code` | Vista de la homepage |
| `form_submit` | `form_type`, `success`, `lc`, `country_code` | Envío de formulario |
| `whatsapp_click` | `source`, `country_specific`, `lc`, `country_code` | Click en WhatsApp |
| `cta_click` | `cta_name`, `cta_location`, `cta_url`, `lc`, `country_code` | Click en CTA |
| `alert_action` | `action`, `alert_id`, `lc`, `country_code` | Interacción con alertas |

### Propiedades Globales

Automáticamente añadidas a TODOS los eventos:

- `lc`: Locale del país (ej: `es-co`, `es-cl`)
- `country_code`: Código del país (ej: `co`, `cl`)

## 🔧 Uso

### Setup Global

El sistema ya está integrado en `app/layout.tsx`:

```tsx
import { AnalyticsTracker } from '@/components/analytics/AnalyticsTracker'

<body>
  <AnalyticsProvider />
  <AnalyticsTracker /> {/* Sincroniza contexto de país */}
  {children}
</body>
```

### Tracking Manual

```tsx
import { 
  trackCTAClick, 
  trackFormSubmit, 
  trackWhatsAppClick 
} from '@/lib/analytics'

// CTA Click
const handleCTA = () => {
  trackCTAClick('Contactar', 'hero', '/contacto')
}

// Form Submit
const onSubmit = async () => {
  try {
    await submitForm()
    trackFormSubmit('contact', true)
  } catch (error) {
    trackFormSubmit('contact', false)
  }
}

// WhatsApp Click
const handleWhatsApp = () => {
  trackWhatsAppClick('widget', true) // true = country-specific number
}
```

## 📍 Componentes Instrumentados

### Homepage
- **`HomeViewTracker`**: Trackea `view_home` al montar
- **`HeroSection`**: CTAs primarios y secundarios
- **`HomeAlertRail`**: View, dismiss y click

### Forms
- **`ContactForm`**: Submit exitoso/fallido
- **`MessagesForm`** (widget): Submit exitoso/fallido

### WhatsApp
- **`StickyCTA`**: Click en link de WhatsApp
- **`FloatingWhatsApp`**: Click en botón flotante
- **`WhatsAppContact`** (widget): Click en mensajes rápidos

### CTAs
- **`StickyCTA`**: Desktop y mobile
- **`HeroSection`**: Primario y secundario

## 🔍 Verificación

### Desarrollo (Local)
```bash
npm run dev
# Abrir consola del navegador
# Los eventos aparecen como: [Analytics] event_name { ...props }
```

### Producción (Vercel)

1. **Vercel Analytics**:
   - Dashboard → Analytics → Events
   - Filtra por `country_code` o `lc`

2. **Google Analytics 4**:
   ```bash
   # 1. Configura NEXT_PUBLIC_GA_MEASUREMENT_ID en .env.local
   # 2. Ve a GA4 → Reports → Realtime → Events
   # 3. Busca dimensiones personalizadas: lc, country_code
   ```

3. **Chrome DevTools**:
   - Network tab → Filtra "collect" o "analytics"
   - Verifica payloads con `lc` y `country_code`

## 📊 Análisis en Vercel/GA4

### Segmentación por País

**Vercel Analytics:**
```
Events → Filter by country_code:
- co: Colombia
- cl: Chile  
- pe: Perú
- ec: Ecuador
```

**Google Analytics 4:**
```
Configure Custom Dimensions:
1. Admin → Data display → Custom Definitions
2. Create dimension "lc" (event-scoped)
3. Create dimension "country_code" (event-scoped)
4. Reports → Exploration → Add dimensions
```

### Métricas Clave por País

- **Conversión**: `form_submit` (success=true) por país
- **Engagement WhatsApp**: `whatsapp_click` por país
- **CTAs más efectivos**: `cta_click` por país
- **Alertas relevantes**: `alert_action` (action=click) por país

## 🧪 Testing

### Unit Test Simulation
```tsx
import { trackEvent, setCountryContext } from '@/lib/analytics'

// Simular contexto
setCountryContext('es-cl', 'cl')

// Trackear
trackEvent('test_event', { test: 'value' })
// Output: { test: 'value', lc: 'es-cl', country_code: 'cl' }
```

### E2E Testing
```bash
# 1. Cambia de país con el switcher
# 2. Interactúa con la página
# 3. Verifica en consola que lc/country_code cambian
```

## 🚀 Próximos Pasos

1. **Revenue por País**: Integrar con pagos
2. **A/B Testing**: Experimentos por país
3. **Heatmaps**: Hotjar/Clarity con segmentación
4. **Dashboards**: Looker Studio con dimensiones de país

## 🔗 Referencias

- [Vercel Analytics Docs](https://vercel.com/docs/analytics)
- [GA4 Custom Dimensions](https://support.google.com/analytics/answer/10075209)
- `lib/analytics.ts` - Funciones de tracking
- `lib/hooks/useAnalyticsCountry.ts` - Hook de sincronización

