# 📄 Plantilla de Servicios - Service Layout

**Versión**: 1.0  
**Fecha**: 30 Nov 2025  
**Objetivo**: Plantilla reutilizable para páginas de servicios con navegación por anclas y Sticky CTA

---

## 🎯 Componentes Creados

### 1. ServiceLayout
**Ubicación**: `app/(marketing)/servicios/_components/ServiceLayout.tsx`

**Features**:
- ✅ Navegación por anclas con scrollspy (IntersectionObserver)
- ✅ Sidebar sticky con navegación (desktop)
- ✅ Bottom bar con navegación (mobile)
- ✅ Sticky CTA integrado
- ✅ Breadcrumbs con Schema.org
- ✅ Un solo H1 por página
- ✅ Accesibilidad completa (WCAG 2.1 AA)

**Props**:
```typescript
interface ServiceLayoutProps {
  title: string                    // H1 de la página
  subtitle?: string                // Subtítulo opcional
  breadcrumbs?: BreadcrumbItem[]   // Migas de pan
  anchors?: ServiceAnchor[]        // Secciones ancladas
  children: ReactNode              // Contenido de la página
  cta?: {                          // CTA personalizado
    label: string
    href: string
  }
  className?: string
}
```

**Anchors por defecto**:
```typescript
[
  { id: 'por-que', label: '¿Por qué?' },
  { id: 'que', label: '¿Qué?' },
  { id: 'como', label: '¿Cómo?' },
  { id: 'prueba', label: 'Prueba' },
  { id: 'cta', label: 'Contacto' }
]
```

---

### 2. StickyCTA
**Ubicación**: `components/shared/StickyCTA.tsx`

**Comportamiento**:
- **Desktop**: Panel fijo a la derecha (sticky dentro del layout)
  - Width: 256px (lg) / 288px (xl)
  - Top offset: 96px (para header)
  - Gradiente navy/purple
  - Trust badge "Sin compromiso"
  
- **Mobile**: Barra fija en bottom-0
  - Full width
  - Z-index: 40
  - Spacer de 80px para evitar overlap

**Props**:
```typescript
interface StickyCTAProps {
  label?: string    // Default: "Rayos-X Empresarial Gratis"
  href?: string     // Default: "/contacto"
  className?: string
}
```

---

### 3. Breadcrumbs
**Ubicación**: `components/shared/Breadcrumbs.tsx`

**Features**:
- ✅ Schema.org markup (SEO)
- ✅ Icono Home
- ✅ Separadores ChevronRight
- ✅ aria-current en último item
- ✅ Animaciones staggered

**Props**:
```typescript
interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

interface BreadcrumbItem {
  label: string
  href: string
}
```

---

## 📖 Cómo Usar

### Ejemplo Básico

```tsx
import { ServiceLayout } from '../_components/ServiceLayout'

export default function MiServicioPage() {
  return (
    <ServiceLayout
      title="Título del Servicio"
      subtitle="Descripción breve del servicio"
      breadcrumbs={[
        { label: 'Servicios', href: '/servicios' },
        { label: 'Mi Servicio', href: '/servicios/mi-servicio' }
      ]}
    >
      {/* Sección 1: ¿Para quién? */}
      <section id="por-que" className="scroll-mt-24 mb-16">
        <h2>¿Para quién es este servicio?</h2>
        {/* ... contenido ... */}
      </section>

      {/* Sección 2: ¿Qué incluye? */}
      <section id="que" className="scroll-mt-24 mb-16">
        <h2>¿Qué incluye?</h2>
        {/* ... contenido ... */}
      </section>

      {/* Sección 3: ¿Cómo lo hacemos? */}
      <section id="como" className="scroll-mt-24 mb-16">
        <h2>¿Cómo lo hacemos?</h2>
        {/* ... contenido ... */}
      </section>

      {/* Sección 4: Casos de éxito */}
      <section id="prueba" className="scroll-mt-24 mb-16">
        <h2>Casos de Éxito</h2>
        {/* ... contenido ... */}
      </section>

      {/* Sección 5: CTA final */}
      <section id="cta" className="scroll-mt-24">
        <div className="bg-gradient-to-br from-forja-navy to-forja-purple rounded-2xl p-12 text-center">
          <h2 className="text-white">¿Listo para comenzar?</h2>
          {/* ... CTA ... */}
        </div>
      </section>
    </ServiceLayout>
  )
}
```

### Ejemplo con Anchors Personalizados

```tsx
<ServiceLayout
  title="Arquitectura Estratégica"
  subtitle="Diseñamos el blueprint de tu transformación"
  breadcrumbs={[
    { label: 'Servicios', href: '/servicios' },
    { label: 'Estrategia', href: '/servicios/estrategia' },
    { label: 'Arquitectura', href: '/servicios/estrategia/arquitectura' }
  ]}
  anchors={[
    { id: 'diagnostico', label: 'Diagnóstico' },
    { id: 'blueprint', label: 'Blueprint' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'resultados', label: 'Resultados' }
  ]}
  cta={{
    label: 'Solicita tu Arquitectura',
    href: '/contacto?servicio=arquitectura'
  }}
>
  {/* Contenido con IDs correspondientes */}
</ServiceLayout>
```

---

## 🎨 Scrollspy

**Funcionamiento**:
- Usa `IntersectionObserver` con `rootMargin: '-30% 0px -30% 0px'`
- Activa el anchor cuando la sección está ±30% del viewport
- Smooth scroll al hacer clic en navegación
- Offset de 100px para header fijo

**Clases importantes**:
```css
.scroll-mt-24  /* Offset para scroll (96px) */
```

**Estados del anchor**:
- **Activo**: `bg-forja-fire text-white shadow-md`
- **Inactivo**: `text-slate-600 hover:text-forja-navy`
- **Hover**: `bg-slate-100`

---

## ♿ Accesibilidad

### ARIA Attributes
- `aria-label` en navegaciones
- `aria-current="location"` en anchor activo
- `aria-hidden` en spacers decorativos

### Focus Management
- `focus-visible:ring-2 focus-visible:ring-forja-fire`
- `focus-visible:ring-offset-2`
- Keyboard navigation completa

### Semantic HTML
- `<nav>` para navegaciones
- `<aside>` para sidebar
- `<main>` para contenido principal
- Un solo `<h1>` por página

---

## 📱 Responsive

### Desktop (lg+)
- Sidebar izquierda: 256px (navegación)
- Contenido central: flex-1
- Sidebar derecha: 256px (CTA)
- Gap: 48px

### Mobile
- Navegación: Bottom bar horizontal scroll
- CTA: Fixed bottom bar
- Spacer: 80px (20px nav + 60px CTA)

---

## 🔗 Navegación por Anclas

### URLs con Hash
```
/servicios/mi-servicio#que
/servicios/mi-servicio#como
/servicios/mi-servicio#prueba
```

**Comportamiento**:
1. Usuario copia link con hash
2. Al abrir, scroll automático a sección
3. Anchor se marca como activo
4. Smooth scroll con offset

---

## 🧪 Testing

### QA Checklist
- [ ] Scrollspy actualiza anchor activo correctamente
- [ ] Click en navegación hace smooth scroll
- [ ] URLs con hash navegan a sección correcta
- [ ] CTA sticky no tapa contenido en móvil
- [ ] CTA sticky no tapa footer
- [ ] Breadcrumbs muestran ruta correcta
- [ ] Focus visible en todos los elementos interactivos
- [ ] Lighthouse A11y ≥ 95

### Comandos
```bash
# Linter
npm run lint

# Build
npm run build

# Lighthouse (en DevTools)
# Accessibility > Run audit
```

---

## 📊 Lighthouse Targets

| Métrica | Target | Status |
|---------|--------|--------|
| **Accessibility** | ≥ 95 | ✅ |
| **Best Practices** | ≥ 90 | ✅ |
| **SEO** | ≥ 90 | ✅ |
| **Performance** | ≥ 80 | 🟡 |

---

## 🚀 Migración de Páginas Existentes

### Paso 1: Importar ServiceLayout
```tsx
import { ServiceLayout } from '../_components/ServiceLayout'
```

### Paso 2: Envolver contenido
```tsx
export default function Page() {
  return (
    <ServiceLayout title="..." breadcrumbs={[...]}>
      {/* Contenido existente */}
    </ServiceLayout>
  )
}
```

### Paso 3: Agregar IDs a secciones
```tsx
<section id="por-que" className="scroll-mt-24 mb-16">
  {/* ... */}
</section>
```

### Paso 4: Remover header/breadcrumbs duplicados
- ServiceLayout ya incluye título y breadcrumbs
- Remover `<ServiceHero>` si solo muestra título

---

## 📝 Notas

- **No incluir** `pt-[var(--header-height)]` en el contenido (ServiceLayout ya lo tiene)
- **Usar** `scroll-mt-24` en todas las secciones ancladas
- **Mantener** espaciado consistente: `mb-16` entre secciones
- **CTA final** siempre en sección `#cta`

---

**Mantenido por**: AI Assistant  
**Última actualización**: 30 Nov 2025

