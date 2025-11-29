# 🎨 FORJA Design Tokens

Sistema de diseño implementado con Tailwind CSS 3.4 + Next.js 14

---

## 📋 Paleta de Colores

### Colores Principales (FORJA)

```tsx
// Navy - Color principal de marca
className="bg-forja-navy text-white"
className="bg-forja-navy-700"  // Variante más clara

// Fire - Acento principal (CTAs, highlights)
className="bg-forja-fire text-white"
className="text-forja-fire"

// Teal - Acento secundario
className="bg-forja-teal text-white"
className="text-forja-teal"

// Purple - Acento terciario
className="bg-forja-purple text-white"
className="text-forja-purple"
```

### Escala Slate (Neutros)

```tsx
// Fondos
className="bg-slate-50"   // Fondo principal (60% regla 60-30-10)
className="bg-slate-100"  // Fondos de cards
className="bg-slate-200"  // Bordes sutiles

// Textos
className="text-slate-600"  // Texto secundario
className="text-slate-700"  // Texto principal
className="text-slate-900"  // Texto enfático
```

---

## 🔤 Tipografías

### Plus Jakarta Sans (Headings)

```tsx
// Automático en h1-h6
<h1 className="hero-title">Título Principal</h1>
<h2 className="section-title">Título de Sección</h2>

// Manual
className="font-heading font-bold text-4xl"
```

### DM Sans (Body)

```tsx
// Automático en body
<p className="body-text">Texto de párrafo</p>

// Manual
className="font-body text-base"
```

---

## 📐 Border Radius

```tsx
className="rounded-xl"   // 16px - Cards grandes
className="rounded-2xl"  // 24px - Modales, secciones destacadas
className="rounded-card" // 12px - Cards estándar
```

---

## 🌑 Sombras

```tsx
// Card estándar
className="shadow-card"  // 0 10px 30px rgba(15,23,42,.12)

// Card hover
className="shadow-card-hover"

// Glow effects
className="shadow-glow-orange"
className="shadow-glow-turquoise"
```

---

## 🎯 Regla 60-30-10

### Aplicación en layouts:

```tsx
<section className="bg-slate-50">  {/* 60% Neutro */}
  <div className="container">
    <h2 className="text-forja-navy">  {/* 30% Navy */}
      Título de Sección
    </h2>
    <p className="text-slate-700">
      Contenido principal
    </p>
    <button className="bg-forja-fire">  {/* 10% Fire */}
      Call to Action
    </button>
  </div>
</section>
```

---

## 📦 Clases Helper

### Container

```tsx
<div className="container">
  {/* Contenido centrado con padding responsive */}
</div>
```

### Prose (Contenido de texto)

```tsx
<article className="prose">
  <h1>Título</h1>
  <p>Párrafo con estilos automáticos</p>
  <a href="#">Enlaces con color forja-fire</a>
</article>
```

### Gradientes

```tsx
className="gradient-hero"  // Navy → Purple
className="gradient-cta"   // Teal → Purple
className="gradient-fire"  // Fire degradado
```

---

## ✅ Ejemplos de Uso

### Hero Section

```tsx
<section className="bg-gradient-hero text-white">
  <div className="container section-padding">
    <h1 className="hero-title">
      Transformamos tu <span className="text-forja-fire">PYME</span>
    </h1>
    <p className="hero-description opacity-90">
      Arquitectura estratégica que impulsa resultados
    </p>
    <button className="bg-forja-fire hover:bg-forja-fire/90 px-8 py-4 rounded-xl">
      Comenzar Ahora
    </button>
  </div>
</section>
```

### Card Component

```tsx
<div className="bg-white rounded-2xl shadow-card p-6 hover:shadow-card-hover transition-shadow">
  <h3 className="card-title mb-4">
    Título de Card
  </h3>
  <p className="card-description text-slate-600">
    Descripción del contenido
  </p>
</div>
```

### CTA Section

```tsx
<section className="bg-slate-50 section-padding">
  <div className="container text-center">
    <h2 className="section-title mb-4">
      ¿Listo para <span className="text-forja-fire">transformar</span> tu empresa?
    </h2>
    <p className="section-description mb-8">
      Agenda una consulta gratuita con nuestros expertos
    </p>
    <div className="flex gap-4 justify-center">
      <button className="bg-forja-fire text-white px-8 py-3 rounded-xl shadow-glow-orange">
        Agendar Consulta
      </button>
      <button className="bg-white text-forja-navy border-2 border-forja-navy px-8 py-3 rounded-xl">
        Ver Casos de Éxito
      </button>
    </div>
  </div>
</section>
```

---

## 🧪 Testing

Para validar que los tokens funcionan:

```bash
npm run dev
```

Luego en tu navegador, abre DevTools y verifica:

1. ✅ `text-forja-navy` aplica `#22335A`
2. ✅ `bg-forja-fire` aplica `#ED7442`
3. ✅ `font-heading` usa Plus Jakarta Sans
4. ✅ `font-body` usa DM Sans
5. ✅ `shadow-card` aplica la sombra correcta

---

## 📚 Referencias

- **Tailwind Config**: `tailwind.config.ts`
- **Fuentes**: `app/layout.tsx`
- **Estilos Globales**: `app/globals.css`

