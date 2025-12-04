# Widget Consciente de País

**Versión**: 1.0  
**Fecha**: Diciembre 2024  
**Objetivo**: Widget que adapta su comportamiento según el país del usuario

---

## 🎯 Concepto

El widget Assistant es **consciente del país** del usuario y adapta:
- **FAQs**: Incluye categoría "Contratación & Facturación" con info sobre exportación desde Colombia
- **Mensajes**: Prellenado con saludo del país detectado
- **WhatsApp**: Usa el número del país si existe, sino el principal
- **Noticias**: Filtradas automáticamente por país
- **Header**: Muestra "Servicio en [País]"

---

## 📁 Estructura de Archivos

```
content/
└── faq.ts                          # FAQs con categoría Contratación

components/widget/
├── Assistant.tsx                   # Widget principal (usa CountryContext)
└── parts/
    ├── FaqAccordion.tsx           # Muestra FAQs (incluye Contratación)
    ├── MessagesForm.tsx           # Saludo prellenado por país
    ├── WhatsAppContact.tsx        # WhatsApp del país
    └── NewsList.tsx               # Noticias filtradas por país
```

---

## 💬 1. FAQs con Contratación & Facturación

**Archivo**: `content/faq.ts`

### Nueva Categoría

```typescript
{
  id: "contratacion",
  title: "Contratación y Facturación",
  items: [
    {
      q: "¿Quién es la entidad legal que presta los servicios?",
      a: "Todos los servicios son prestados por Forja Digital AE SAS, con NIT 900.XXX.XXX-1, domiciliada en Bogotá D.C., Colombia."
    },
    {
      q: "¿Cómo funciona la facturación desde Colombia?",
      a: "Emitimos facturas electrónicas validadas por la DIAN (Colombia). Son válidas internacionalmente..."
    },
    {
      q: "¿En qué moneda facturan?",
      a: "Facturamos en pesos colombianos (COP) para clientes en Colombia, y en dólares estadounidenses (USD) para clientes internacionales."
    },
    {
      q: "¿Qué medios de pago aceptan?",
      a: "Aceptamos transferencia bancaria internacional, tarjetas internacionales, PayPal, Wise, PSE..."
    },
    {
      q: "¿Debo pagar impuestos adicionales en mi país?",
      a: "Como servicios exportados desde Colombia, generalmente no causan IVA. Sin embargo, según tu país..."
    },
    {
      q: "¿La factura colombiana es válida en mi país?",
      a: "Sí. Las facturas electrónicas colombianas son válidas internacionalmente..."
    },
    {
      q: "¿Qué datos necesitan para facturar?",
      a: "Necesitamos: razón social, NIT/RUT/RUC, dirección fiscal, email..."
    },
    {
      q: "¿Cómo protegen mis datos personales?",
      a: "Cumplimos con la Ley 1581 de 2012 de Colombia (Habeas Data)..."
    }
  ]
}
```

**Total**: 8 FAQs específicos sobre contratación y facturación internacional.

---

## 🎨 2. Widget Principal (Assistant.tsx)

### Integración con CountryContext

```tsx
import { useCountryOptional } from '@/context/CountryProvider'

export function Assistant({ isOpen, onClose }: AssistantProps) {
  const country = useCountryOptional()
  
  return (
    <WidgetContainer isOpen={isOpen} onClose={onClose}>
      <header>
        {/* ... */}
        <h2>{tabTitles[activeTab]}</h2>
        <p className="text-xs">
          {country ? `Servicio en ${country.name}` : 'Transformación con foco en resultados'}
        </p>
      </header>
      {/* ... */}
    </WidgetContainer>
  )
}
```

**Resultado**:
- 🇨🇴 Colombia: "Servicio en Colombia"
- 🇨🇱 Chile: "Servicio en Chile"
- 🇵🇪 Perú: "Servicio en Perú"
- 🇪🇨 Ecuador: "Servicio en Ecuador"
- Sin país: "Transformación con foco en resultados"

---

## 💌 3. Mensajes con Saludo Personalizado

**Archivo**: `components/widget/parts/MessagesForm.tsx`

### Prellenado Automático

```tsx
import { useCountryOptional } from '@/context/CountryProvider'

export function MessagesForm() {
  const country = useCountryOptional()
  const { setValue } = useForm()
  
  useEffect(() => {
    if (country) {
      // Prellenar countryCode
      setValue('countryCode', country.code)
      
      // Prellenar saludo
      const greeting = `Hola, les escribo desde ${country.name}. `
      setValue('message', greeting)
    }
  }, [country, setValue])
  
  // ...
}
```

**Resultado**:
```
Usuario desde Chile:
┌────────────────────────────────────┐
│ Email:                             │
│ you@example.com                    │
├────────────────────────────────────┤
│ Mensaje:                           │
│ Hola, les escribo desde Chile.     │
│ [cursor aquí]                      │
└────────────────────────────────────┘
```

**Beneficios**:
- Usuario sabe que detectamos su país
- Contexto claro desde el inicio
- Reduce fricción

---

## 📱 4. WhatsApp del País

**Archivo**: `components/widget/parts/WhatsAppContact.tsx`

### Número Dinámico

```tsx
import { useCountry } from '@/context/CountryProvider'
import config from '@/lib/config'

export function WhatsAppContact() {
  const { country } = useCountry()
  
  // Usar WhatsApp del país si existe, sino usar el principal
  const whatsappNumber = country.whatsappNumber || config.contact.whatsapp
  
  const handleSendMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }
  
  // ...
}
```

**Resultado**:

| País | WhatsApp |
|------|----------|
| Colombia 🇨🇴 | +57300XXXXXXX (si está configurado) |
| Chile 🇨🇱 | +569XXXXXXXX (si está configurado) |
| Otros | +57300XXXXXXX (principal) |

**Configuración** en `lib/country.ts`:

```typescript
export const COUNTRIES = {
  'es-co': {
    code: 'co',
    name: 'Colombia',
    whatsappNumber: '57300XXXXXXX',
    // ...
  },
  'es-cl': {
    code: 'cl',
    name: 'Chile',
    whatsappNumber: '569XXXXXXXX',  // ← Opcional
    // ...
  },
}
```

---

## 📰 5. Noticias Filtradas por País

**Archivo**: `components/widget/parts/NewsList.tsx`

### Filtrado Automático

```tsx
import { getNewsByCountry } from '@/content/news'
import { useCountry } from '@/context/CountryProvider'

export function NewsList() {
  const { countryCode } = useCountry()
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>([])
  
  useEffect(() => {
    // Cargar noticias filtradas por país
    const news = getNewsByCountry(countryCode)
    setFilteredNews(news)
  }, [countryCode])
  
  return (
    <div>
      {filteredNews.map(news => (
        <article key={news.id}>
          <h4>{news.title}</h4>
          <p>{news.description}</p>
        </article>
      ))}
    </div>
  )
}
```

**Resultado**:

```
Usuario desde Chile ve:
- ✅ Noticias con countries: ['all']
- ✅ Noticias con countries: ['cl']
- ❌ Noticias con countries: ['co']
- ❌ Noticias con countries: ['pe']
```

---

## 🎯 6. Flujo del Usuario

### Caso 1: Usuario desde Chile

```
1. Usuario abre widget

   ┌─────────────────────────────┐
   │ 🔮 Forja Digital AE        │
   │ Asistente Virtual          │
   │ Servicio en Chile       ←─┐│  ← País detectado
   └─────────────────────────────┘

2. Usuario va a "Mensajes"

   ┌─────────────────────────────┐
   │ Email: ___________________  │
   │                             │
   │ Mensaje:                    │
   │ Hola, les escribo desde    │
   │ Chile. [cursor]         ←─┐│  ← Saludo prellenado
   └─────────────────────────────┘

3. Usuario va a "Ayuda"

   ┌─────────────────────────────┐
   │ 📂 Servicios y Enfoque     │
   │ 📂 Proceso y Metodología   │
   │ 📂 Resultados y ROI        │
   │ 📂 Contratación y          │
   │    Facturación          ←─┐│  ← Categoría nueva
   │   • ¿Quién es la entidad?  │
   │   • ¿Cómo funciona la      │
   │     facturación?            │
   │   • ¿En qué moneda?        │
   │   • ¿Medios de pago?       │
   └─────────────────────────────┘

4. Usuario expande "¿En qué moneda facturan?"

   "Facturamos en pesos colombianos (COP) 
   para clientes en Colombia, y en dólares 
   estadounidenses (USD) como moneda de 
   exportación para clientes internacionales 
   (Chile, Perú, Ecuador)."

5. Usuario va a "Noticias"

   ┌─────────────────────────────┐
   │ 🎄 Promoción Navideña      │
   │ (countries: ['all'])        │
   │                             │
   │ 🇨🇱 Webinar Chile          │
   │ (countries: ['cl'])     ←─┐│  ← Solo para Chile
   └─────────────────────────────┘
```

### Caso 2: Usuario desde Colombia

```
1. Header muestra:
   "Servicio en Colombia"

2. Mensaje prellenado:
   "Hola, les escribo desde Colombia. "

3. FAQs → Contratación → "¿En qué moneda facturan?"
   Respuesta destaca COP para Colombia

4. Noticias muestra:
   - ✅ Promoción Navideña (all)
   - ✅ Nuevo Servicio Colombia (co)
   - ❌ Webinar Chile (cl)
```

---

## ✅ Checklist de Implementación

### FAQs
- [x] Categoría "Contratación y Facturación"
- [x] 8 FAQs sobre exportación
- [x] Respuestas claras sobre Colombia como proveedor
- [x] Mención de monedas (COP/USD)
- [x] Info sobre impuestos locales

### Widget Principal
- [x] Usa `useCountryOptional()`
- [x] Header muestra "Servicio en [País]"
- [x] Fallback si no hay país

### Mensajes
- [x] Prellenado con país detectado
- [x] `countryCode` enviado al backend
- [x] Saludo personalizado

### WhatsApp
- [x] Lee `country.whatsappNumber`
- [x] Fallback a número principal
- [x] Mensajes rápidos funcionan

### Noticias
- [x] Filtradas por `countryCode`
- [x] Solo muestra relevantes
- [x] Usa `getNewsByCountry()`

---

## 📊 Comparación Antes vs Después

| Aspecto | Antes | Después |
|---------|-------|---------|
| **FAQs** | 6 categorías | 7 categorías (+Contratación) |
| **Mensajes** | Vacío | Prellenado con país |
| **WhatsApp** | Número fijo | Número por país |
| **Noticias** | Todas | Filtradas por país |
| **Header** | Texto fijo | "Servicio en [País]" |
| **UX** | Genérica | Personalizada |

---

## 🔧 Configuración por País

### Agregar WhatsApp Local

```typescript
// lib/country.ts

export const COUNTRIES = {
  'es-cl': {
    code: 'cl',
    name: 'Chile',
    whatsappNumber: '56912345678',  // ← WhatsApp local Chile
    // ...
  },
}
```

### Agregar Noticias por País

```typescript
// content/news.ts

{
  id: 'webinar-peru-2024',
  title: '🇵🇪 Webinar Exclusivo Perú',
  description: 'Transformación Digital para PYMEs peruanas',
  countries: ['pe'],  // ← Solo Perú
  featured: true,
  // ...
}
```

---

## 💡 Ejemplos de Uso

### Ejemplo 1: Usuario desde Ecuador

```
Widget Header:
  "Servicio en Ecuador"

Mensaje Prellenado:
  "Hola, les escribo desde Ecuador. "

WhatsApp:
  - Si hay whatsappNumber Ecuador → usa ese
  - Si no → usa config.contact.whatsapp (principal)

Noticias:
  - ✅ Promoción Navideña (all)
  - ✅ Expansión Ecuador (ec)
  - ❌ Webinar Chile (cl)

FAQs → Contratación:
  "¿En qué moneda facturan?"
  → "...USD para clientes internacionales (Chile, Perú, Ecuador)..."
```

### Ejemplo 2: Usuario Sin País (genérico)

```
Widget Header:
  "Transformación con foco en resultados"

Mensaje:
  [Vacío, sin prellenado]

WhatsApp:
  config.contact.whatsapp (principal)

Noticias:
  Solo countries: ['all']

FAQs:
  Mismas categorías disponibles
```

---

## ♿ Accesibilidad

### Keyboard Navigation

Todas las secciones del widget son navegables por teclado:

- **Tab**: Navegar entre elementos
- **Enter/Space**: Expandir FAQs
- **Escape**: Cerrar widget

### ARIA

```tsx
<header>
  <h2 id="widget-title">
    {tabTitles[activeTab]}
  </h2>
  <p aria-live="polite">
    {country ? `Servicio en ${country.name}` : '...'}
  </p>
</header>
```

---

## 📈 Métricas

| Métrica | Valor |
|---------|-------|
| **FAQs Total** | 7 categorías |
| **FAQs Contratación** | 8 preguntas |
| **Países Soportados** | 4 (CO/CL/PE/EC) |
| **Componentes Actualizados** | 4 |
| **Líneas de Código Modificadas** | ~20 |

---

## 🧪 Testing

### Manual

1. **Widget desde Chile**:
   ```
   http://localhost:3000/es-cl/
   ```
   - Abrir widget
   - ✅ Header: "Servicio en Chile"
   - ✅ Mensajes: "Hola, les escribo desde Chile. "
   - ✅ Noticias: Solo Chile o "all"

2. **FAQs**:
   - Abrir "Ayuda"
   - ✅ Ver categoría "Contratación y Facturación"
   - ✅ 8 preguntas visibles
   - ✅ Respuestas sobre exportación desde Colombia

3. **WhatsApp**:
   - Ir a tab WhatsApp
   - ✅ Usar número del país (si existe)
   - ✅ Mensajes rápidos funcionan

---

**✅ Widget Consciente de País Implementado**

