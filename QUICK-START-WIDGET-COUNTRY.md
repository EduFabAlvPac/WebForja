# 🚀 Quick Start - Widget Consciente de País

Guía ultra-rápida del widget adaptado por país en 2 minutos.

---

## ✅ Ya Implementado

Widget que adapta su comportamiento según el país del usuario:
- FAQs con categoría "Contratación & Facturación"
- Mensajes prellenados con país
- WhatsApp del país
- Noticias filtradas

---

## 💬 FAQs: Categoría Contratación

**Ubicación**: Widget → Ayuda → "Contratación y Facturación"

**8 Preguntas**:
1. ¿Quién es la entidad legal?
2. ¿Cómo funciona la facturación?
3. ¿En qué moneda facturan?
4. ¿Qué medios de pago?
5. ¿Impuestos adicionales en mi país?
6. ¿Factura colombiana válida?
7. ¿Qué datos necesitan?
8. ¿Cómo protegen mis datos?

**Ya funciona** - Solo abrir widget → Ayuda → Expandir categoría ✨

---

## 💌 Mensajes: Saludo Prellenado

**Automático**:

```
Usuario desde Chile abre widget → Mensajes:

┌────────────────────────────────┐
│ Email: ______________________  │
│                                │
│ Mensaje:                       │
│ Hola, les escribo desde        │
│ Chile. [cursor aquí]           │
└────────────────────────────────┘
```

**No necesitas configurar nada** ✨

---

## 📱 WhatsApp: Número por País

**Configuración** en `lib/country.ts`:

```typescript
export const COUNTRIES = {
  'es-cl': {
    code: 'cl',
    name: 'Chile',
    whatsappNumber: '56912345678',  // ← Opcional (agrega si tienes)
    // ...
  },
}
```

**Si no hay** `whatsappNumber` → usa número principal (`config.contact.whatsapp`)

---

## 📰 Noticias: Filtradas por País

**Ya funciona automáticamente**:

```
Usuario desde Chile:
- ✅ Ve noticias con countries: ['all']
- ✅ Ve noticias con countries: ['cl']
- ❌ NO ve noticias de otros países
```

---

## 🎯 Header: Muestra País

**Automático**:

```
Chile:    "Servicio en Chile"
Colombia: "Servicio en Colombia"
Perú:     "Servicio en Perú"
Ecuador:  "Servicio en Ecuador"
```

---

## 💡 Ejemplos

### Usuario desde Perú

```
1. Abre widget:
   Header: "Servicio en Perú"

2. Va a Mensajes:
   Campo prellenado: "Hola, les escribo desde Perú. "

3. Va a Ayuda:
   Ve categoría "Contratación y Facturación"
   Expande: "¿En qué moneda facturan?"
   Lee: "...USD para clientes internacionales (Chile, Perú, Ecuador)..."

4. Va a Noticias:
   Ve solo noticias para Perú o "all"
```

---

## 🔧 Configurar WhatsApp Local

Si tienes número de WhatsApp por país:

```typescript
// lib/country.ts

'es-cl': {
  code: 'cl',
  name: 'Chile',
  whatsappNumber: '56912345678',  // ← Agregar
  // ...
}
```

**Ya funciona** - El widget lo usará automáticamente ✨

---

## 📚 Docs Completas

- 📖 **Guía Técnica**: `docs/WIDGET_COUNTRY_AWARE.md`
- 📄 **Resumen**: `EXP-13-IMPLEMENTACION-COMPLETA.md`

---

**🎉 Listo para Usar**

Widget ya está configurado y funciona por país. Solo abre y prueba! 🚀

