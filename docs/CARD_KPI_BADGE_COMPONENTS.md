# 🎨 Card, KPI Card & Stat Badge Components - FORJA Design System

## 📋 Overview

Este documento describe tres componentes reutilizables del sistema de diseño FORJA:
1. **Card** - Contenedor base mejorado con hover sutil
2. **KpiCard** - Tarjeta especializada para mostrar KPIs (título, valor, descripción)
3. **StatBadge** - Badge pequeño para estados y métricas (default, success, warning)

---

## 1️⃣ Card Component

### 📝 Description

Componente base de tarjeta con bordes consistentes, sombras y efectos hover sutiles.

### ✨ Features

- ✅ **Border:** `border-slate-200` - Borde gris claro consistente
- ✅ **Shadow:** `shadow-card` - Sombra definida en design tokens
- ✅ **Hover Effect:** 
  - `hover:shadow-lg` - Sombra más grande
  - `hover:border-slate-300` - Borde más oscuro
- ✅ **Transition:** `transition-all duration-200` - Animación suave
- ✅ **Border Radius:** `rounded-xl` - Esquinas redondeadas

### 🚀 Usage

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui'

// Basic Card
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>

// Simple Card (no header/footer)
<Card>
  <CardContent>
    <p>Simple content</p>
  </CardContent>
</Card>
```

### 🎨 Design Tokens

| Property | Value | Description |
|----------|-------|-------------|
| **Border** | `border-slate-200` | Light gray border |
| **Shadow** | `shadow-card` | `0 10px 30px rgba(15,23,42,.12)` |
| **Hover Shadow** | `shadow-lg` | Larger shadow on hover |
| **Hover Border** | `border-slate-300` | Darker border on hover |
| **Border Radius** | `rounded-xl` | 12px |
| **Background** | `bg-white` | White background |
| **Text Color** | `text-forja-navy` | Navy text |

### 📦 Sub-components

- **CardHeader** - `p-6` padding, `space-y-1.5` vertical spacing
- **CardTitle** - `<h3>` heading, `font-heading font-semibold`
- **CardDescription** - `<div>` for description, `text-sm text-slate-600`
- **CardContent** - `p-6 pt-0` padding (no top padding)
- **CardFooter** - `p-6 pt-0` padding, `flex items-center`

---

## 2️⃣ KpiCard Component

### 📝 Description

Tarjeta especializada para mostrar Key Performance Indicators (KPIs) con título, valor principal, descripción opcional, icono opcional y trend indicator.

### ✨ Features

- ✅ **Title** - Label del KPI (e.g., "Total Revenue")
- ✅ **Value** - Valor principal (e.g., "$1.2M", "8,234")
- ✅ **Description** - Contexto opcional (e.g., "+12% from last month")
- ✅ **Icon** - Icono opcional (Lucide icons)
- ✅ **Trend** - Indicador de tendencia: `up` ↑, `down` ↓, `neutral` →
- ✅ **Variants** - 5 variantes de color: default, primary, success, warning, danger

### 🚀 Usage

```tsx
import { KpiCard } from '@/components/ui'
import { DollarSign, Users, TrendingUp } from 'lucide-react'

// Basic KPI Card
<KpiCard
  title="Total Revenue"
  value="$1.2M"
  description="+12% from last month"
  icon={DollarSign}
  trend="up"
/>

// With variant
<KpiCard
  variant="primary"
  title="Active Users"
  value="8,234"
  description="+5.2% this week"
  icon={Users}
  trend="up"
/>

// Without icon
<KpiCard
  title="Conversion Rate"
  value="3.2%"
  description="Steady performance"
/>

// Success variant
<KpiCard
  variant="success"
  title="Uptime"
  value="99.9%"
  description="All systems operational"
  icon={TrendingUp}
  trend="up"
/>
```

### 🎨 Variants

| Variant | Border | Background | Icon BG | Value Color | Use Case |
|---------|--------|------------|---------|-------------|----------|
| **default** | `slate-200` | `white` | `slate-100` | `forja-navy` | General metrics |
| **primary** | `forja-fire/20` | `forja-fire/5` | `forja-fire/10` | `forja-fire` | Key metrics |
| **success** | `green-200` | `green-50/50` | `green-100` | `green-700` | Positive metrics |
| **warning** | `amber-200` | `amber-50/50` | `amber-100` | `amber-700` | Caution metrics |
| **danger** | `red-200` | `red-50/50` | `red-100` | `red-700` | Negative metrics |

### 📊 Props

```typescript
interface KpiCardProps {
  title: string                    // Required: KPI label
  value: string | number           // Required: Main value
  description?: string             // Optional: Context
  icon?: LucideIcon               // Optional: Icon component
  trend?: "up" | "down" | "neutral" // Optional: Trend indicator
  variant?: "default" | "primary" | "success" | "warning" | "danger"
  className?: string              // Optional: Additional classes
}
```

### 🎯 Best Practices

#### ✅ DO

```tsx
// Use appropriate variants
<KpiCard variant="success" title="Revenue" value="$1.2M" trend="up" />

// Provide context with description
<KpiCard 
  title="Active Users" 
  value="8,234" 
  description="+5.2% this week"
/>

// Use icons for visual clarity
<KpiCard title="Sales" value="$847K" icon={DollarSign} />
```

#### ❌ DON'T

```tsx
// Don't use success variant for negative metrics
<KpiCard variant="success" title="Error Rate" value="5%" trend="down" />

// Don't omit description for metrics that need context
<KpiCard title="Revenue" value="$1.2M" /> // Is this good or bad?

// Don't use too many variants in the same view
<KpiCard variant="primary" />
<KpiCard variant="success" />
<KpiCard variant="warning" />
<KpiCard variant="danger" />
// Too many colors, use default for most
```

---

## 3️⃣ StatBadge Component

### 📝 Description

Badge pequeño para mostrar estados, métricas o estadísticas con colores semánticos.

### ✨ Features

- ✅ **Variants** - 7 variantes de color: default, success, warning, danger, info, primary, secondary
- ✅ **Sizes** - 3 tamaños: sm, md (default), lg
- ✅ **Dot Indicator** - Punto de color opcional para estados
- ✅ **Icon Support** - Soporte para iconos personalizados
- ✅ **Hover Effect** - Cambio de color sutil en hover

### 🚀 Usage

```tsx
import { StatBadge } from '@/components/ui'

// Basic badges
<StatBadge variant="default">Default</StatBadge>
<StatBadge variant="success">Success</StatBadge>
<StatBadge variant="warning">Warning</StatBadge>
<StatBadge variant="danger">Danger</StatBadge>

// With dot indicator
<StatBadge variant="success" dot>Active</StatBadge>
<StatBadge variant="warning" dot>Pending</StatBadge>
<StatBadge variant="danger" dot>Offline</StatBadge>

// Different sizes
<StatBadge size="sm">Small</StatBadge>
<StatBadge size="md">Medium</StatBadge>
<StatBadge size="lg">Large</StatBadge>

// Metrics use cases
<StatBadge variant="success">+12.5%</StatBadge>
<StatBadge variant="danger">-3.2%</StatBadge>
<StatBadge variant="info">↑ 234</StatBadge>
```

### 🎨 Variants

| Variant | Background | Text | Border | Use Case |
|---------|-----------|------|--------|----------|
| **default** | `slate-100` | `slate-700` | `slate-200` | Neutral status |
| **success** | `green-100` | `green-700` | `green-200` | Positive metrics, success states |
| **warning** | `amber-100` | `amber-700` | `amber-200` | Caution, pending states |
| **danger** | `red-100` | `red-700` | `red-200` | Errors, negative metrics |
| **info** | `blue-100` | `blue-700` | `blue-200` | Informational |
| **primary** | `forja-fire/10` | `forja-fire` | `forja-fire/20` | Brand highlight |
| **secondary** | `forja-teal/10` | `forja-teal` | `forja-teal/20` | Secondary brand |

### 📊 Props

```typescript
interface StatBadgeProps {
  variant?: "default" | "success" | "warning" | "danger" | "info" | "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  dot?: boolean              // Show dot indicator
  icon?: React.ReactNode     // Custom icon
  className?: string
  children: React.ReactNode
}
```

### 🎯 Use Cases

#### Status Indicators
```tsx
<StatBadge variant="success" dot>Active</StatBadge>
<StatBadge variant="warning" dot>Pending</StatBadge>
<StatBadge variant="danger" dot>Offline</StatBadge>
<StatBadge variant="default" dot>Inactive</StatBadge>
```

#### Metrics
```tsx
<StatBadge variant="success">+12.5%</StatBadge>
<StatBadge variant="danger">-3.2%</StatBadge>
<StatBadge variant="info">↑ 234 users</StatBadge>
```

#### Combined with KPI Cards
```tsx
<div className="space-y-2">
  <KpiCard
    title="Website Traffic"
    value="45.2K"
    description="+18% this month"
    icon={Activity}
    trend="up"
  />
  <div className="flex gap-2">
    <StatBadge variant="success" size="sm">High Performance</StatBadge>
    <StatBadge variant="info" size="sm">Trending</StatBadge>
  </div>
</div>
```

---

## 🎨 Design System Integration

### Color Palette

Todos los componentes usan los colores del sistema FORJA:

| Color | Hex | Usage |
|-------|-----|-------|
| **forja-navy** | `#22335A` | Primary text, default values |
| **forja-fire** | `#ED7442` | Primary variant, brand highlight |
| **forja-teal** | `#52D6DE` | Secondary variant |
| **slate-200** | - | Borders |
| **slate-600** | - | Descriptions, secondary text |
| **green-600/700** | - | Success states |
| **amber-600/700** | - | Warning states |
| **red-600/700** | - | Danger states |

### Typography

| Component | Font Family | Font Weight | Font Size |
|-----------|-------------|-------------|-----------|
| **KpiCard Title** | `font-body` | `font-medium` | `text-sm` |
| **KpiCard Value** | `font-heading` | `font-bold` | `text-3xl` |
| **KpiCard Description** | `font-body` | `normal` | `text-sm` |
| **StatBadge** | `font-heading` | `font-semibold` | `text-xs` |

### Spacing

| Component | Padding | Margin |
|-----------|---------|--------|
| **Card** | - | - |
| **CardHeader** | `p-6` | - |
| **CardContent** | `p-6 pt-0` | - |
| **CardFooter** | `p-6 pt-0` | - |
| **KpiCard Header** | `pb-3` | - |
| **StatBadge** | `px-3 py-1` (md) | - |

---

## 📊 Examples

### Dashboard Metrics

```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <KpiCard
    title="Total Revenue"
    value="$1.2M"
    description="+12% from last month"
    icon={DollarSign}
    trend="up"
  />
  <KpiCard
    title="Active Users"
    value="8,234"
    description="+5.2% this week"
    icon={Users}
    trend="up"
  />
  <KpiCard
    title="Conversion Rate"
    value="3.2%"
    description="-0.5% from last week"
    icon={Target}
    trend="down"
  />
</div>
```

### Status Dashboard

```tsx
<div className="space-y-4">
  <div className="flex items-center justify-between">
    <h3>System Status</h3>
    <StatBadge variant="success" dot>All Systems Operational</StatBadge>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <KpiCard
      variant="success"
      title="Uptime"
      value="99.9%"
      description="Last 30 days"
      icon={Activity}
    />
    <KpiCard
      variant="default"
      title="Response Time"
      value="245ms"
      description="Average"
      icon={Activity}
    />
  </div>
</div>
```

### E-commerce Metrics

```tsx
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
  <div className="space-y-2">
    <KpiCard
      variant="primary"
      title="Total Orders"
      value="1,234"
      description="+8% this week"
      trend="up"
    />
    <StatBadge variant="success" size="sm">On Track</StatBadge>
  </div>
  
  <div className="space-y-2">
    <KpiCard
      title="Avg. Order Value"
      value="$145"
      description="+$12 vs last week"
      trend="up"
    />
    <StatBadge variant="info" size="sm">Above Target</StatBadge>
  </div>
  
  <div className="space-y-2">
    <KpiCard
      variant="success"
      title="Customer Satisfaction"
      value="4.8/5"
      description="Based on 523 reviews"
    />
    <StatBadge variant="success" size="sm" dot>Excellent</StatBadge>
  </div>
  
  <div className="space-y-2">
    <KpiCard
      title="Return Rate"
      value="1.2%"
      description="-0.3% improvement"
      trend="up"
    />
    <StatBadge variant="success" size="sm">Improved</StatBadge>
  </div>
</div>
```

---

## ✅ Checklist

Before using these components in production:

### Card
- [ ] Hover effect is visible and smooth
- [ ] Border and shadow are consistent
- [ ] Content is properly padded
- [ ] Works well in grids

### KpiCard
- [ ] Title is descriptive
- [ ] Value is prominent and readable
- [ ] Description provides context
- [ ] Variant matches the metric type
- [ ] Trend indicator is correct (up/down/neutral)
- [ ] Icon is relevant (if used)

### StatBadge
- [ ] Variant matches the semantic meaning
- [ ] Size is appropriate for the context
- [ ] Text is concise (< 20 characters)
- [ ] Dot indicator is used for status (if applicable)
- [ ] Color contrast is sufficient (WCAG AA)

---

## 🐛 Troubleshooting

### Card hover not working

**Problem:** Hover effect doesn't appear  
**Solution:** Make sure you're not overriding `transition` or `hover:` classes in custom CSS

### KpiCard value too long

**Problem:** Value text overflows or wraps  
**Solution:** Use shorter formats (e.g., "1.2M" instead of "1,234,567")

### StatBadge too wide

**Problem:** Badge takes too much space  
**Solution:** Use shorter text or `size="sm"`. Max recommended: 15-20 characters

---

**Version:** 1.0.0  
**Last Updated:** 28 de Noviembre, 2025  
**Author:** UI Engineer - FORJA Digital  
**Files:** 
- `components/ui/card.tsx`
- `components/ui/kpi-card.tsx`
- `components/ui/stat-badge.tsx`

