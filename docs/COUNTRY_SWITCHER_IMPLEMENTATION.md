# Country Switcher - Documentación de Implementación

## 📋 Resumen

Selector de país implementado en el header que permite cambiar entre países soportados. La preferencia se guarda en cookies por 6 meses y actualiza automáticamente la URL.

## ✅ Implementación Completada

**Fecha**: Diciembre 2024  
**Estado**: ✅ **COMPLETADO** - Funcional en desktop y mobile

---

## 🎯 Entregables

### 1. `lib/utils/cookies-country.ts` - Utilidades de Cookies ✅

**Funciones Exportadas**:

```typescript
// Obtener preferencia guardada
getCountryPreference(): LocaleCode | null

// Guardar preferencia (6 meses)
setCountryPreference(locale: LocaleCode): void

// Eliminar preferencia
clearCountryPreference(): void

// Verificar si existe preferencia
hasCountryPreference(): boolean
```

**Configuración**:
- **Cookie Name**: `forja_lc`
- **Duración**: 180 días (6 meses)
- **Path**: `/` (todo el sitio)
- **SameSite**: `Lax` (seguridad)

**Características**:
- ✅ Validación de locales soportados
- ✅ Manejo de SSR (verifica `typeof document`)
- ✅ Funciones helper reutilizables
- ✅ TypeScript tipado

### 2. `components/country/CountrySwitcher.tsx` - Componente Principal ✅

**Características**:
- ✅ Dropdown interactivo con banderas
- ✅ Muestra país actual
- ✅ Lista de todos los países soportados
- ✅ Guarda preferencia en cookie
- ✅ Actualiza URL automáticamente
- ✅ Cierre con clic fuera o tecla Escape
- ✅ Accesibilidad completa (ARIA)
- ✅ Animaciones suaves
- ✅ Responsive design

**Props Disponibles**:

```typescript
interface CountrySwitcherProps {
  className?: string;        // CSS adicional
  desktopOnly?: boolean;     // Solo desktop
  mobileOnly?: boolean;      // Solo mobile
  compact?: boolean;         // Modo compacto (solo bandera)
}
```

**Modos de Uso**:

```tsx
// Estándar
<CountrySwitcher />

// Compacto (solo bandera)
<CountrySwitcher compact />
// o
<CountrySwitcherCompact />

// Solo desktop
<CountrySwitcher desktopOnly />

// Solo mobile
<CountrySwitcher mobileOnly />
```

### 3. Integración en Header ✅

**Desktop** (`components/layout/header/Header.tsx`):
- Agregado entre Navigation y CTAs
- Visible solo en pantallas `lg` y superiores
- Gap de 3 unidades con otros elementos

**Mobile** (`components/layout/header/MobileMenu.tsx`):
- Agregado antes de los botones CTA
- Sección separada con label "Seleccionar País"
- Ancho completo para mejor UX

---

## 🎨 Diseño Visual

### Botón de Activación

**Desktop (Normal)**:
```
┌─────────────────────────┐
│ 🌐 🇨🇴 Colombia     ▼  │
└─────────────────────────┘
```

**Desktop (Compacto)**:
```
┌──────────┐
│ 🇨🇴  ▼  │
└──────────┘
```

### Dropdown Menu

```
┌─────────────────────────────────┐
│ 🌎  Internacional              │
│    USD • IVA                    │
├─────────────────────────────────┤
│ 🇨🇴  Colombia               ✓  │  ← Seleccionado
│    COP • IVA                    │
├─────────────────────────────────┤
│ 🇨🇱  Chile                      │
│    CLP • IVA                    │
├─────────────────────────────────┤
│ 🇵🇪  Perú                       │
│    PEN • IGV                    │
├─────────────────────────────────┤
│ 🇪🇨  Ecuador                    │
│    USD • IVA                    │
├─────────────────────────────────┤
│ Tu preferencia se guardará      │
│ por 6 meses                     │
└─────────────────────────────────┘
```

---

## 🔄 Flujo de Funcionamiento

### 1. Usuario Hace Clic en el Selector

```
Usuario en: /es-co/servicios
Click en selector
  ↓
Dropdown se abre
```

### 2. Selección de Nuevo País

```
Usuario selecciona: Chile 🇨🇱
  ↓
setCountryPreference('es-cl')
  ↓
Cookie guardada: forja_lc=es-cl (6 meses)
  ↓
URL actualizada: /es-cl/servicios
  ↓
Navegación con router.push()
  ↓
Página recarga con nuevo contexto
```

### 3. Persistencia en Recarga

```
Usuario recarga página
  ↓
Cookie existe: forja_lc=es-cl
  ↓
Contexto se carga con Chile
  ↓
Componentes usan datos chilenos
```

---

## 💻 Código de Ejemplo

### Uso Básico en Header

```tsx
import { CountrySwitcher } from '@/components/country/CountrySwitcher';

export function Header() {
  return (
    <header>
      <div className="flex items-center gap-3">
        <Navigation />
        <CountrySwitcher />
        <CTAButtons />
      </div>
    </header>
  );
}
```

### Verificar Preferencia Guardada

```typescript
import { getCountryPreference, hasCountryPreference } from '@/lib/utils/cookies-country';

// Verificar si existe
if (hasCountryPreference()) {
  const savedLocale = getCountryPreference();
  console.log(`Usuario prefiere: ${savedLocale}`);
}
```

### Guardar Preferencia Manualmente

```typescript
import { setCountryPreference } from '@/lib/utils/cookies-country';

// Guardar Colombia como preferencia
setCountryPreference('es-co');
```

### Limpiar Preferencia

```typescript
import { clearCountryPreference } from '@/lib/utils/cookies-country';

// Usuario quiere resetear su preferencia
clearCountryPreference();
```

---

## ♿ Accesibilidad

### Atributos ARIA

```tsx
<button
  aria-label="Seleccionar país"
  aria-expanded={isOpen}
  aria-haspopup="true"
>
```

```tsx
<div
  role="menu"
  aria-orientation="vertical"
>
  <button role="menuitem">Colombia</button>
</div>
```

### Navegación por Teclado

| Tecla | Acción |
|-------|--------|
| `Enter` / `Space` | Abrir/cerrar dropdown |
| `Escape` | Cerrar dropdown |
| `Click fuera` | Cerrar dropdown |

### Elementos Semánticos

- ✅ `<button>` para interacciones
- ✅ `role="menu"` para dropdown
- ✅ `role="menuitem"` para opciones
- ✅ `aria-hidden` para iconos decorativos
- ✅ Labels descriptivos

---

## 🎨 Estilos y Animaciones

### Transiciones

```typescript
// Rotación del chevron
className={cn(
  'transition-transform',
  isOpen && 'transform rotate-180'
)}
```

### Animación de Entrada

```typescript
className="animate-in fade-in slide-in-from-top-1 duration-200"
```

### Estados Hover

- Botón: `hover:bg-gray-50`
- Items: `hover:bg-gray-50`
- Item activo: `bg-orange-50`

### Responsive

```typescript
// Solo desktop
desktopOnly && 'hidden lg:block'

// Solo mobile
mobileOnly && 'lg:hidden'
```

---

## 🔧 Integración con CountryContext

El CountrySwitcher usa el hook `useCountry()` para:

1. **Obtener país actual**:
   ```typescript
   const { country, locale } = useCountry();
   ```

2. **Mostrar información**:
   - Bandera: `country.flag`
   - Nombre: `country.name`
   - Moneda: `country.currency`
   - Impuesto: `country.tax.name`

3. **Validar selección**:
   ```typescript
   const isSelected = lc === locale;
   ```

---

## 📝 Estructura de Archivos

```
lib/
  └── utils/
      └── cookies-country.ts              [NUEVO] ✨

components/
  ├── country/
  │   └── CountrySwitcher.tsx             [NUEVO] ✨
  ├── ui/
  │   └── select.tsx                      [NUEVO] ✨
  └── layout/
      └── header/
          ├── Header.tsx                  [MODIFICADO] 🔧
          └── MobileMenu.tsx              [MODIFICADO] 🔧

docs/
  └── COUNTRY_SWITCHER_IMPLEMENTATION.md  [NUEVO] 📖
```

---

## ✅ Criterios de Aceptación

| Criterio | Estado | Notas |
|----------|--------|-------|
| Selector con banderas (CO/CL/PE/EC) | ✅ | 5 países + internacional |
| Cambia segmento [lc] en URL | ✅ | Navegación automática |
| Guarda cookie 'forja_lc' | ✅ | 6 meses de duración |
| Integrado en header | ✅ | Desktop y mobile |
| Sin cambiar estilos base | ✅ | Se integra sin modificar diseño |
| Persiste al recargar | ✅ | Cookie mantiene preferencia |

---

## 🧪 Testing Manual

### Caso 1: Cambio de País

```
1. Abrir página en /es-co/servicios
2. Hacer clic en selector (debe mostrar Colombia activo)
3. Seleccionar Chile
4. Verificar URL cambia a /es-cl/servicios
5. Verificar cookie forja_lc=es-cl en DevTools
```

### Caso 2: Persistencia

```
1. Seleccionar un país (ej: Perú)
2. Recargar página (F5)
3. Verificar que sigue en /es-pe/...
4. Verificar cookie persiste
```

### Caso 3: Navegación

```
1. Estar en /es-co/servicios
2. Navegar a /es-co/nosotros
3. Selector debe seguir mostrando Colombia
4. Cookie debe mantener es-co
```

### Caso 4: Mobile

```
1. Abrir en dispositivo móvil
2. Abrir menú hamburguesa
3. Verificar selector visible
4. Cambiar país funciona igual
```

---

## 🐛 Debugging

### Cookie No Se Guarda

```typescript
// Verificar en console
import { hasCountryPreference, getCountryPreference } from '@/lib/utils/cookies-country';

console.log('Tiene preferencia:', hasCountryPreference());
console.log('Preferencia:', getCountryPreference());
```

### URL No Cambia

```typescript
// Verificar pathname actual
const pathname = usePathname();
console.log('Current path:', pathname);

// Verificar locale detectado
const { locale } = useCountry();
console.log('Current locale:', locale);
```

### Dropdown No Se Cierra

- Verificar que `dropdownRef` está funcionando
- Revisar console para errores de eventos
- Probar tecla Escape manualmente

---

## 🚀 Mejoras Futuras (Opcionales)

### Detectar Preferencia Inicial

```typescript
// En el middleware o layout
const cookieLocale = getCountryPreference();
if (cookieLocale && pathname.startsWith('/es/')) {
  // Redirigir automáticamente a su preferencia
  redirect(`/${cookieLocale}${pathname.slice(3)}`);
}
```

### Analytics por País

```typescript
// Trackear cambios de país
const handleCountryChange = (newLocale: LocaleCode) => {
  // ... código actual ...
  
  // Analytics
  analytics.track('country_changed', {
    from: locale,
    to: newLocale,
  });
};
```

### Animación de Transición

```typescript
// Usar Framer Motion para transición suave
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
>
  {/* contenido */}
</motion.div>
```

---

## 📚 Referencias

- **Country Context**: `docs/COUNTRY_CONTEXT_USAGE.md`
- **Cookies API**: MDN Web Docs
- **Next.js Router**: Next.js Documentation
- **Accessibility**: WCAG 2.1 Guidelines

---

## ✨ Beneficios de la Implementación

1. **UX Mejorada**: Cambio de país intuitivo y rápido
2. **Persistencia**: Usuario no pierde preferencia al navegar
3. **Accesibilidad**: Navegable por teclado y screen readers
4. **Performance**: Cookie es ligera y eficiente
5. **Responsive**: Funciona en todos los dispositivos
6. **Mantenible**: Código limpio y documentado

---

**🎉 IMPLEMENTACIÓN COMPLETADA**

El Country Switcher está integrado y funcional en desktop y mobile, con persistencia de 6 meses en cookies.

---

_Generado por CURSOR - Design Engineer_  
_Fecha: Diciembre 2024_

