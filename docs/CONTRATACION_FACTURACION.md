# Página de Contratación y Facturación

**Versión**: 1.0  
**Fecha**: Diciembre 2024  
**Objetivo**: Página informativa sobre exportación de servicios desde Colombia

---

## 🎯 Concepto

Página legal/informativa única que explica en lenguaje claro cómo funciona la contratación y facturación de servicios exportados desde Colombia.

**Características**:
- Mismo contenido para todos los países
- Ruta localizada: `/{lc}/legal/contratacion-facturacion`
- SEO optimizado
- FAQ integrada
- CTA a contacto

---

## 📄 Contenido de la Página

### 1. Hero Section

```
┌──────────────────────────────────────────┐
│           📄                              │
│                                           │
│   Contratación y Facturación             │
│                                           │
│   Todo lo que necesitas saber sobre      │
│   cómo contratar, facturar y pagar       │
│   servicios de consultoría exportados    │
│   desde Colombia                          │
│                                           │
│   📅 Actualizado: Diciembre 2024         │
└──────────────────────────────────────────┘
```

### 2. Introducción (Info Box)

```
ℹ️ Servicios de Exportación desde Colombia

Todos nuestros servicios de consultoría son prestados como
exportación de servicios desde Colombia por Forja Digital AE SAS,
con domicilio en Bogotá D.C., Colombia.
```

### 3. Secciones Principales

#### 🏢 1. Entidad Legal

- Razón Social: Forja Digital AE SAS
- NIT: 900.XXX.XXX-1
- Domicilio: Bogotá D.C., Colombia
- Actividad: Exportación de servicios

#### 🧾 2. Facturación Electrónica DIAN

- Facturas electrónicas validadas por DIAN
- Válidas internacionalmente
- Código CUFE único
- Formato PDF + XML

#### 💵 3. Moneda de Cobro

**Colombia 🇨🇴**
- Facturación en COP
- Precios incluyen impuestos

**Internacional 🌎**
- Facturación en USD
- Moneda de exportación

#### 💳 4. Medios de Pago

- Transferencia bancaria internacional (Wire Transfer)
- Tarjetas de crédito/débito (Visa, Mastercard, Amex)
- Plataformas de pago (PayPal, Wise)
- Transferencia local Colombia (PSE, Bancolombia)

#### 🌍 5. Impuestos y Retenciones

**Importante**: Cliente responsable de:
- Retenciones en la fuente (según su país)
- IVA de importación de servicios (si aplica)
- Informar operación a autoridad fiscal local

**Recomendación**: Consultar con contador local

#### 🛡️ 6. Protección de Datos

- Cumplimiento Ley 1581 de 2012 (Colombia)
- Seguridad de la información
- Acuerdo de confidencialidad (NDA)

### 4. FAQ (5 preguntas)

1. ¿La factura desde Colombia es válida en mi país?
2. ¿Debo pagar impuestos adicionales en mi país?
3. ¿Cuándo recibo la factura?
4. ¿Qué datos necesito proporcionar para facturar?
5. ¿Ofrecen planes de pago?

### 5. CTA Final

```
┌──────────────────────────────────────────┐
│   ¿Tienes Más Preguntas sobre           │
│   Facturación?                            │
│                                           │
│   [Contáctanos →]                        │
│                                           │
│   Respuesta en menos de 24 horas         │
└──────────────────────────────────────────┘
```

### 6. Legal Stamp

```
<LegalStamp />
```

---

## 🔗 Integración en el Sitio

### Footer

**Archivo**: `components/layout/footer/Footer.tsx`

```tsx
<Link href="/es/legal/contratacion-facturacion">
  <Lock className="h-4 w-4" />
  <span>Contratación y Facturación</span>
</Link>
```

**Ubicación**: Junto a Política de Privacidad, Términos, Cookies

### Secciones de Precios

**Componente**: `components/pricing/BillingInfoLink.tsx`

```tsx
import { BillingInfoLink, BillingInfoBanner } from '@/components/pricing';

// Variante 1: Box con fondo (default)
<PriceCard {...} />
<BillingInfoLink className="mt-4" />

// Variante 2: Banner destacado
<BillingInfoBanner className="mb-8" />
<PricingTable />

// Variante 3: Link compacto
<BillingInfoLink variant="compact" />

// Variante 4: Inline en texto
<p>
  Ver precios... <BillingInfoLink variant="inline" />.
</p>
```

---

## 🎨 Diseño Visual

### Estética Consistente

- ✅ Usa `gradient-hero` (igual que otras páginas legales)
- ✅ Íconos lucide-react con círculos de fondo
- ✅ ScrollReveal para animaciones
- ✅ Cards blancos con sombra
- ✅ Info boxes con bordes de color
- ✅ FAQ con `<details>` estándar
- ✅ CTA con gradiente navy-purple

### Paleta de Colores

- **Hero**: Gradiente brand-navy → brand-purple
- **Secciones**:
  - Entidad Legal: Navy
  - Facturación: Orange
  - Moneda: Turquoise
  - Medios Pago: Purple
  - Impuestos: Red
  - Protección: Green

---

## 🔍 SEO

### Metadata

```typescript
{
  title: 'Contratación y Facturación | Forja Digital',
  description: 'Información sobre contratación, facturación electrónica, medios de pago y cumplimiento legal para servicios de exportación desde Colombia.',
  keywords: 'contratación, facturación, exportación de servicios, DIAN, medios de pago, compliance, Ley 1581',
  robots: 'index, follow',
}
```

### JSON-LD

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Contratación y Facturación",
  "publisher": {
    "@type": "Organization",
    "name": "Forja Digital - AE",
    "legalName": "Forja Digital AE SAS"
  },
  "datePublished": "2024-12-01",
  "inLanguage": "es"
}
```

---

## 📍 Rutas por País

```
https://www.forjadigital.com/es/legal/contratacion-facturacion
https://www.forjadigital.com/es-co/legal/contratacion-facturacion
https://www.forjadigital.com/es-cl/legal/contratacion-facturacion
https://www.forjadigital.com/es-pe/legal/contratacion-facturacion
https://www.forjadigital.com/es-ec/legal/contratacion-facturacion
```

**Nota**: Todas apuntan al mismo contenido (único).

---

## 💡 Uso de `BillingInfoLink`

### En Páginas de Precios

```tsx
'use client';

import { PriceCard, BillingInfoBanner } from '@/components/pricing';

export function PricingPage() {
  return (
    <div>
      <h1>Nuestros Precios</h1>
      
      {/* Banner informativo superior */}
      <BillingInfoBanner className="mb-8" />
      
      <div className="grid grid-cols-3 gap-6">
        <PriceCard title="Básico" amountUSD={250} />
        <PriceCard title="Pro" amountUSD={500} />
        <PriceCard title="Enterprise" amountUSD={1000} />
      </div>
      
      {/* Link inferior */}
      <BillingInfoLink className="mt-8" />
    </div>
  );
}
```

### Después de Precio Individual

```tsx
import { Price, BillingInfoLink } from '@/components/pricing';

<div>
  <Price amountUSD={500} showLocalRef />
  <PricingLegalNote className="mt-4" />
  <BillingInfoLink variant="compact" className="mt-2" />
</div>
```

### En Texto Corrido

```tsx
<p>
  Los precios mostrados son orientativos. Para conocer más sobre
  cómo facturamos, consulta <BillingInfoLink variant="inline" />.
</p>
```

---

## ✅ Checklist de Contenido

- [x] Entidad legal explicada (Forja Digital AE SAS)
- [x] Facturación electrónica DIAN explicada
- [x] Moneda de cobro (USD/COP) explicada
- [x] Medios de pago internacionales listados
- [x] Retenciones locales mencionadas
- [x] Compliance de datos (Ley 1581) incluido
- [x] FAQ con 5 preguntas
- [x] CTA a contacto
- [x] Legal Stamp al final
- [x] Link en footer
- [x] Componente para links desde pricing

---

## 📊 Métricas

| Elemento | Cantidad |
|----------|----------|
| Secciones principales | 6 |
| Medios de pago | 4 |
| Preguntas FAQ | 5 |
| Info boxes | 8 |
| CTAs | 1 |
| Links externos | 1 (Política Privacidad) |

---

## 🚀 Beneficios

1. **Transparencia**: Cliente sabe cómo funciona todo
2. **Legal Compliance**: Cumple con requisitos de información
3. **Reduce Fricciones**: Responde dudas antes de contratar
4. **SEO**: Contenido indexable con keywords relevantes
5. **Trust**: Muestra profesionalismo y claridad
6. **Escalable**: Fácil actualizar para todos los países

---

**✅ Página Implementada y Funcional**

