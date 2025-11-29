# 🎨 Button Component - FORJA Design System

## 📋 Overview

El componente `Button` es el elemento de interacción principal del sistema de diseño FORJA. Implementa todas las mejores prácticas de accesibilidad (WCAG 2.1) y proporciona variantes visuales consistentes con la identidad de marca.

---

## ✨ Features

### ✅ Accesibilidad (WCAG 2.1)
- **Focus Ring Visible:** `outline-2` con `offset-2` para navegación por teclado clara
- **aria-disabled:** Implementado correctamente para lectores de pantalla
- **Keyboard Navigation:** Soporte completo para Tab, Enter, Space
- **Active State:** Feedback visual con `scale-[0.98]`
- **Disabled State:** `pointer-events-none`, `opacity-50`, `cursor-not-allowed`

### 🎨 Variantes FORJA
- **primary:** CTA principal (Fire Orange) - `bg-forja-fire`
- **secondary:** CTA alternativo (Teal Outline) - `border-forja-teal`
- **outline:** Navy outline - `border-forja-navy`
- **ghost:** Interacción sutil - transparente
- **destructive:** Acciones de peligro - rojo
- **link:** Estilo de enlace de texto

### 📏 Tamaños
- **sm:** `h-9 px-4` - Botones compactos
- **md:** `h-11 px-6` - Tamaño por defecto
- **lg:** `h-14 px-8` - CTAs prominentes
- **icon:** `h-11 w-11` - Botones cuadrados para iconos

### 🔧 asChild (Radix Slot)
- Renderiza como cualquier elemento hijo manteniendo estilos
- Útil para `<Link>`, `<a>`, o componentes personalizados

---

## 🚀 Usage

### Basic

```tsx
import { Button } from '@/components/ui/button'

export default function Example() {
  return (
    <Button variant="primary" size="md">
      Click Me
    </Button>
  )
}
```

### Variants

```tsx
// Primary CTA (default)
<Button variant="primary">Rayos-X Empresarial Gratis</Button>

// Secondary CTA
<Button variant="secondary">Habla con un Forjador</Button>

// Outline
<Button variant="outline">Learn More</Button>

// Ghost
<Button variant="ghost">Cancel</Button>

// Destructive
<Button variant="destructive">Delete Account</Button>

// Link
<Button variant="link">Terms & Conditions</Button>
```

### Sizes

```tsx
// Small
<Button size="sm">Small Button</Button>

// Medium (default)
<Button size="md">Medium Button</Button>

// Large
<Button size="lg">Large CTA</Button>

// Icon
<Button size="icon" aria-label="Settings">
  <SettingsIcon />
</Button>
```

### States

```tsx
// Disabled
<Button disabled>Disabled Button</Button>

// With aria-label for accessibility
<Button aria-label="Submit form">
  Submit
</Button>

// Loading state (custom implementation)
<Button disabled>
  <Spinner /> Loading...
</Button>
```

### asChild (Radix Slot)

```tsx
import Link from 'next/link'

// Render as Next.js Link
<Button variant="primary" asChild>
  <Link href="/about">About Us</Link>
</Button>

// Render as anchor tag
<Button variant="secondary" asChild>
  <a href="https://forjadigital.co" target="_blank" rel="noopener noreferrer">
    Visit Website
  </a>
</Button>
```

---

## 🎨 Design Tokens

### Colors

| Variant | Background | Text | Border | Focus Ring |
|---------|-----------|------|--------|------------|
| **primary** | `forja-fire` (#ED7442) | `white` | - | `forja-fire` |
| **secondary** | `transparent` | `forja-teal` | `forja-teal` (#52D6DE) | `forja-teal` |
| **outline** | `transparent` | `forja-navy` | `forja-navy` (#22335A) | `forja-navy` |
| **ghost** | `transparent` | `forja-navy` | - | `slate-400` |
| **destructive** | `red-600` | `white` | - | `red-600` |
| **link** | `transparent` | `forja-fire` | - | `forja-fire` |

### Shadows

| Variant | Shadow |
|---------|--------|
| **primary** | `shadow-lg shadow-forja-fire/25` |
| **primary:hover** | `shadow-xl shadow-forja-fire/30` |
| **secondary:hover** | `shadow-lg shadow-forja-teal/20` |
| **destructive** | `shadow-lg shadow-red-600/25` |

### Border Radius

| Size | Border Radius |
|------|---------------|
| **sm** | `rounded-lg` (8px) |
| **md, lg, icon** | `rounded-xl` (12px) |

### Typography

- **Font Family:** `font-heading` (Plus Jakarta Sans)
- **Font Weight:** `font-semibold` (600)
- **Font Size:**
  - sm: `text-sm` (14px)
  - md: `text-base` (16px)
  - lg: `text-lg` (18px)

---

## ♿ Accessibility

### Focus Ring

**Specification:**
- `focus-visible:outline-none` - Remove default outline
- `focus-visible:ring-2` - 2px ring width
- `focus-visible:ring-offset-2` - 2px offset from button
- Color matches variant (e.g., `ring-forja-fire` for primary)

**Keyboard Navigation:**
- `Tab` - Move to next button
- `Shift + Tab` - Move to previous button
- `Enter` or `Space` - Activate button

### aria-disabled

```tsx
<Button disabled>
  {/* Renders with: */}
  {/* disabled={true} */}
  {/* aria-disabled="true" */}
  Disabled Button
</Button>
```

**Why both `disabled` and `aria-disabled`?**
- `disabled` - Prevents interaction (HTML attribute)
- `aria-disabled="true"` - Announces state to screen readers

### Screen Reader Support

```tsx
// Icon-only buttons MUST have aria-label
<Button size="icon" aria-label="Open settings">
  <SettingsIcon />
</Button>

// Buttons with visible text don't need aria-label
<Button variant="primary">
  Submit Form {/* Text is already accessible */}
</Button>
```

---

## 🎯 Best Practices

### ✅ DO

```tsx
// Use primary for main CTAs
<Button variant="primary" size="lg">
  Rayos-X Empresarial Gratis
</Button>

// Use secondary for alternative actions
<Button variant="secondary">
  Habla con un Forjador
</Button>

// Provide aria-label for icon-only buttons
<Button size="icon" aria-label="Close dialog">
  <XIcon />
</Button>

// Use asChild for navigation
<Button variant="primary" asChild>
  <Link href="/contact">Contact Us</Link>
</Button>
```

### ❌ DON'T

```tsx
// Don't use multiple primary buttons in the same section
<Button variant="primary">Action 1</Button>
<Button variant="primary">Action 2</Button> {/* Use secondary instead */}

// Don't forget aria-label on icon-only buttons
<Button size="icon">
  <SettingsIcon /> {/* Missing aria-label! */}
</Button>

// Don't use disabled for loading states without indication
<Button disabled>
  Submit {/* User doesn't know it's loading */}
</Button>
// Better:
<Button disabled>
  <Spinner /> Submitting...
</Button>
```

---

## 🧪 Testing

### Visual Testing

**Location:** `/sandbox`

**Test Cases:**
1. ✅ All variants render correctly
2. ✅ All sizes render correctly
3. ✅ Hover states work
4. ✅ Active states work (scale down on click)
5. ✅ Disabled states render correctly
6. ✅ Focus rings are visible on Tab navigation

### Keyboard Navigation Testing

1. Open `/sandbox`
2. Press `Tab` to navigate through buttons
3. Verify focus ring is clearly visible
4. Press `Enter` or `Space` to activate
5. Verify active state (scale down)

### Screen Reader Testing

**Tools:** NVDA (Windows), VoiceOver (Mac), JAWS

**Test:**
1. Navigate to button with screen reader
2. Verify button role is announced
3. Verify button text is announced
4. For disabled buttons, verify "disabled" is announced
5. For icon-only buttons, verify aria-label is announced

---

## 📊 Component API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'destructive' \| 'link'` | `'primary'` | Visual variant |
| `size` | `'sm' \| 'md' \| 'lg' \| 'icon'` | `'md'` | Button size |
| `asChild` | `boolean` | `false` | Render as child element |
| `disabled` | `boolean` | `false` | Disable button |
| `aria-label` | `string` | - | Accessible label (required for icon-only) |
| `className` | `string` | - | Additional CSS classes |
| `onClick` | `() => void` | - | Click handler |
| ...rest | `ButtonHTMLAttributes` | - | All standard button props |

### Type Definition

```typescript
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}
```

---

## 🔄 Migration Guide

### From Old Button

```diff
- <Button>Default (Fire)</Button>
+ <Button variant="primary">Primary CTA</Button>

- <Button variant="default">Click Me</Button>
+ <Button variant="primary">Click Me</Button>

- <Button size="default">Medium</Button>
+ <Button size="md">Medium</Button>
```

### Breaking Changes

1. **`variant="default"` → `variant="primary"`**
   - Old: `<Button variant="default">`
   - New: `<Button variant="primary">`

2. **`size="default"` → `size="md"`**
   - Old: `<Button size="default">`
   - New: `<Button size="md">`

3. **Focus ring is now more prominent**
   - Old: `ring-1`
   - New: `ring-2` with `ring-offset-2`

---

## 📚 Related Components

- **Badge** - For status indicators
- **Link** - For navigation (use with `asChild`)
- **IconButton** - Specialized icon-only button (future)

---

## 🐛 Troubleshooting

### Focus ring not visible

**Problem:** Focus ring doesn't appear when clicking
**Solution:** This is correct behavior. Focus ring only appears on keyboard navigation (`:focus-visible`). Click the button, then press Tab to see the focus ring.

### asChild not working

**Problem:** `asChild` prop doesn't render child element
**Solution:** Make sure `@radix-ui/react-slot` is installed:
```bash
npm install @radix-ui/react-slot
```

### Disabled button still clickable

**Problem:** Button with `disabled` prop is still clickable
**Solution:** Check that you're not overriding `pointer-events` in custom CSS. The button should have `pointer-events-none` when disabled.

---

## 📊 Performance

- **Bundle Size:** ~2KB (minified + gzipped)
- **Dependencies:** 
  - `@radix-ui/react-slot` (for asChild)
  - `class-variance-authority` (for variants)
- **Render Time:** < 1ms (no heavy computations)

---

## ✅ Checklist

Before using Button in production:

- [ ] Variant chosen appropriately (primary for main CTA)
- [ ] Size matches visual hierarchy
- [ ] Icon-only buttons have `aria-label`
- [ ] Disabled state is visually clear
- [ ] Focus ring is visible on keyboard navigation
- [ ] Tested with keyboard (Tab, Enter, Space)
- [ ] Tested with screen reader (if applicable)
- [ ] asChild used for navigation links

---

**Version:** 1.0.0  
**Last Updated:** 28 de Noviembre, 2025  
**Author:** Design Engineer - FORJA Digital  
**File:** `components/ui/button.tsx`

