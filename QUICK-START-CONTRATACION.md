# 🚀 Quick Start - Página Contratación y Facturación

Guía ultra-rápida para usar la página de información legal en 2 minutos.

---

## ✅ Ya Implementado

Página completa sobre exportación de servicios desde Colombia con FAQ y CTA.

---

## 📍 URL de la Página

```
/es/legal/contratacion-facturacion
/es-co/legal/contratacion-facturacion
/es-cl/legal/contratacion-facturacion
/es-pe/legal/contratacion-facturacion
/es-ec/legal/contratacion-facturacion
```

**Mismo contenido** para todos los países.

---

## 🔗 Cómo Linkear

### Desde Footer

Ya integrado automáticamente:

```
[Política Privacidad] [Términos] [Cookies] [Contratación y Facturación] ← ✨
```

### Desde Precios

```tsx
import { BillingInfoLink, BillingInfoBanner } from '@/components/pricing';

// Banner superior (antes de precios)
<BillingInfoBanner className="mb-8" />

// Box inferior (después de precios)
<BillingInfoLink className="mt-6" />

// Link compacto
<BillingInfoLink variant="compact" />

// Inline en texto
<p>
  Ver más sobre <BillingInfoLink variant="inline" />.
</p>
```

---

## 📋 Qué Incluye la Página

### 6 Secciones Principales

1. **🏢 Entidad Legal**
   - Forja Digital AE SAS
   - NIT 900.XXX.XXX-1
   - Colombia

2. **🧾 Facturación DIAN**
   - Facturas electrónicas
   - Válidas internacionalmente
   - PDF + XML

3. **💵 Moneda de Cobro**
   - Colombia: COP
   - Internacional: USD

4. **💳 Medios de Pago**
   - Wire Transfer
   - Tarjetas
   - PayPal/Wise
   - Local Colombia

5. **🌍 Impuestos**
   - Responsabilidad del cliente
   - Retenciones locales
   - Consultar contador

6. **🛡️ Protección Datos**
   - Ley 1581 de 2012
   - NDA incluido

### FAQ (5 Preguntas)

1. ¿Factura válida en mi país?
2. ¿Impuestos adicionales?
3. ¿Cuándo recibo factura?
4. ¿Qué datos necesito?
5. ¿Planes de pago?

---

## 🎯 Uso Típico

### Caso 1: Usuario ve precios, tiene dudas

```
Usuario: "¿Cómo funciona la facturación?"
   ↓
<BillingInfoLink /> debajo de precios
   ↓
Click → Página explicativa
   ↓
Lee → Entiende proceso
   ↓
CTA → Contacto si tiene más dudas
```

### Caso 2: Usuario en footer

```
Usuario busca info legal
   ↓
Footer → Link "Contratación y Facturación"
   ↓
Click → Página explicativa
```

---

## 💡 Ejemplos de Integración

### En Página de Servicios

```tsx
import { BillingInfoLink } from '@/components/pricing';

<section>
  <h2>Nuestros Servicios</h2>
  
  <div className="service-cards">
    {/* servicios */}
  </div>
  
  <BillingInfoLink className="mt-8" />
</section>
```

### En Checkout/Cotización

```tsx
import { BillingInfoBanner } from '@/components/pricing';

<div>
  <h1>Cotización</h1>
  
  <BillingInfoBanner className="mb-6" />
  
  <div className="quote-details">
    {/* detalles */}
  </div>
</div>
```

---

## 🌎 Por País

Todos ven la misma página pero con énfasis diferente:

```
Colombia 🇨🇴:
"En Colombia facturamos en COP. Para clientes internacionales en USD."

Chile 🇨🇱:
"Para Chile facturamos en USD como exportación de servicios."
```

---

## 🎨 Variantes de Link

### Default (Box con fondo)

```tsx
<BillingInfoLink />
```

Visual:
```
┌──────────────────────────────────┐
│ ℹ️ ¿Cómo funciona la            │
│    contratación y facturación?  │
│                                  │
│ Facturamos desde Colombia...    │
│ → Ver detalles                  │
└──────────────────────────────────┘
```

### Compact (Link simple)

```tsx
<BillingInfoLink variant="compact" />
```

Visual:
```
ℹ️ Información sobre contratación y facturación →
```

### Inline (Dentro de texto)

```tsx
<p>
  Para más detalles, consulta <BillingInfoLink variant="inline" />.
</p>
```

Visual:
```
Para más detalles, consulta más información sobre facturación →.
```

### Banner (Destacado)

```tsx
<BillingInfoBanner />
```

Visual:
```
┌────────────────────────────────────────┐
│ ℹ️ Sobre Contratación y Facturación   │
│                                        │
│ Todos los servicios son prestados por │
│ Forja Digital AE SAS desde Colombia   │
│ como exportación de servicios.        │
│                                        │
│ → Ver información completa            │
└────────────────────────────────────────┘
```

---

## 🐛 Debug

### Verificar Link

```tsx
const country = useCountryOptional();
console.log('Locale:', country?.lc);
// Link será: /{lc}/legal/contratacion-facturacion
```

### Verificar Render

```bash
# Visita en navegador
http://localhost:3000/es-co/legal/contratacion-facturacion
```

---

## ✅ Checklist

- [ ] Página creada y funcional
- [ ] Link en footer visible
- [ ] BillingInfoLink importado donde se necesite
- [ ] FAQ responde dudas comunes
- [ ] CTA apunta a contacto correcto

---

## 📚 Docs Completas

- 📖 **Guía Técnica**: `docs/CONTRATACION_FACTURACION.md`
- 📄 **Resumen**: `EXP-9-IMPLEMENTACION-COMPLETA.md`

---

**🎉 Listo para Usar**

Link desde footer y pricing. Los usuarios pueden entender fácilmente cómo funciona todo! 🚀

