# 📊 AUDITORÍA INICIAL - WebForjaConsulting

**Fecha:** 1 de febrero de 2025  
**Metodología:** Análisis estático manual (sin herramientas externas)

---

## Resumen Ejecutivo

| Métrica | Valor |
|---------|-------|
| **Archivos TypeScript/JavaScript totales** | ~255 |
| **Componentes React** | ~110 |
| **Páginas/rutas** | ~45 |
| **Archivos de configuración** | 5 |

---

## 1.1 ESTRUCTURA DEL PROYECTO

### Directorios principales

```
WebForjaConsulting/
├── app/                    # Next.js App Router (rutas)
│   ├── (marketing)/        # Grupo: contacto, gracias, servicios
│   ├── [lc]/               # Rutas localizadas por país (co, cl, pe, ec)
│   ├── api/                # API Routes (contact, contacto, feedback, vitals, widget-message)
│   ├── interes/            # Hub de interés
│   ├── nosotros/
│   ├── politica-*
│   ├── servicios/
│   └── terminos-*
├── components/             # ~120 archivos
│   ├── alerts/
│   ├── analytics/
│   ├── animations/
│   ├── country/
│   ├── examples/           # ⚠️ Componentes de ejemplo/documentación
│   ├── forms/
│   ├── interest/
│   ├── layout/header|footer/
│   ├── nosotross/
│   ├── pricing/
│   ├── sections/
│   ├── seo/
│   ├── services/
│   ├── shared/
│   ├── site/
│   ├── ui/
│   └── widget/
├── content/                # Contenido por país (base, cl, co, ec, pe, es)
├── context/
├── data/services/
├── lib/
├── types/
├── utils/
└── public/
```

### Tecnologías detectadas

- **Framework:** Next.js 14.2 (App Router)
- **React:** 18.3
- **TypeScript:** 5.4
- **Gestor de paquetes:** npm (package-lock.json presente)
- **Estilos:** Tailwind CSS 3.4 + tailwindcss-animate + @tailwindcss/typography

### Archivos de configuración

| Archivo | Propósito |
|---------|-----------|
| `next.config.js` | Config Next.js, imágenes, headers, optimizePackageImports |
| `tailwind.config.ts` | Tokens FORJA, safelist, plugins |
| `tsconfig.json` | Compilador TS, paths @/* |
| `postcss.config.js` | PostCSS |
| `.eslintrc.json` | ESLint + jsx-a11y |

**❌ Config obsoleta:** `tailwind.config.ts` incluye `./pages/**/*` pero el proyecto usa App Router (no existe carpeta `pages/`).

---

## 1.2 ANÁLISIS DE package.json

### Dependencias sospechosas (posiblemente no usadas)

| Paquete | Tamaño aprox. | Uso en código |
|---------|---------------|---------------|
| `@sanity/image-url` | ~50KB | No encontrado en imports |
| `next-sanity` | ~200KB | No encontrado en imports |
| `react-rough-notation` | ~15KB | No encontrado en imports (docs mencionan `rough-notation`, paquete distinto) |

### Ubicación de dependencias

| Paquete | Ubicación actual | Ubicación recomendada |
|---------|------------------|------------------------|
| `tailwindcss` | dependencies | devDependencies (solo build) |
| `typescript` | dependencies | devDependencies |

---

## 1.3 IMPORTS NO UTILIZADOS

### Import comentado (código muerto)

| Archivo | Línea | Detalle |
|---------|-------|---------|
| `components/layout/header/Navigation.tsx` | 9 | `// import { MegaMenuIndustrias } from './MegaMenuIndustrias'` - Comentado, el uso también está comentado (líneas 86-92) |

**Acción:** Eliminar la línea 9 completa (ya que MegaMenuIndustrias está deshabilitado).

---

## 1.4 ARCHIVOS HUÉRFANOS

Archivos que NO son importados en ningún lugar del código:

| Archivo | Razón |
|---------|-------|
| `lib/constants/hero-images.ts` | HERO_IMAGES nunca importado |
| `components/metric.tsx` | Solo usado por metric-group (que también es huérfano) |
| `components/metric-group.tsx` | No importado en ningún archivo |
| `components/pro-table.tsx` | No importado en ningún archivo |
| `components/animations/AnimatedText.tsx` | No importado (ScrollReveal sí se usa) |
| `components/seo/SchemaFAQ.tsx` | No importado en páginas ni widgets |
| `components/examples/CountryExample.tsx` | Solo referenciado en docs/README, no en app |
| `components/examples/PricingExample.tsx` | Solo referenciado en docs, no en app |

### Archivo con uso comentado (conservar por ahora)

| Archivo | Estado |
|---------|--------|
| `components/layout/header/MegaMenuIndustrias.tsx` | Import y uso comentados. Conservar si Industrias se reactivará. |

---

## 1.5 COMPONENTES NO USADOS

Coinciden con archivos huérfanos de 1.4. No hay lazy loading que los referencie.

---

## 1.6 ESTILOS

- **globals.css:** Importado en `app/layout.tsx` ✅
- **Tailwind:** Config correcta. La ruta `./pages/**/*` en content es redundante (no existe pages/).
- No se detectaron archivos .scss ni .css adicionales huérfanos.

---

## 1.7 ASSETS NO REFERENCIADOS

| Asset | Ruta | Estado |
|-------|------|--------|
| crecimiento-42.jpg | public/images/news/ | No referenciado en content/news.ts |
| ia-pymes.jpg | public/images/news/ | No referenciado (content usa /images/interest/ por país) |
| regulaciones-pymes.jpg | public/images/news/ | No referenciado |
| logo_color.png | public/logos/ | No referenciado (se usa /logo-color.png en raíz) |
| logo-color_2.jpg | public/logos/ | No referenciado |
| logo-placeholder.svg | public/ | No referenciado en código |

**Assets usados:** /logo.png, /logo-color.png, /favicon.ico, /images/team/*, /images/interest/* (según content).

---

## 1.8 CÓDIGO MUERTO Y DEBUG

### console.log / console.warn / console.error

| Tipo | Cantidad | Comentario |
|------|----------|------------|
| Scripts (deploy, qa-links, new-interest, dev-no-ssl) | Aceptable | CLI/operacional |
| API routes (contact, contacto, feedback, vitals, widget-message) | Aceptable | Logging servidor |
| lib/analytics.ts | Condicional | Solo en `NODE_ENV === 'development'` ✅ |
| components/analytics/WebVitalsReporter.tsx | Condicional | Solo en desarrollo ✅ |
| **components/shared/FloatingActionWidget.tsx** | Línea 66 | `console.log('Mensaje enviado:', messageData)` - Siempre ejecuta |

### debugger

- **0** ocurrencias.

### Bloques comentados

- `Navigation.tsx`: Import y bloque MegaMenuIndustrias comentados (ya documentado).

---

## FASE 2: PLAN DE ACCIÓN

| Prioridad | Tipo | Archivo/Elemento | Razón | Impacto | Riesgo |
|-----------|------|------------------|-------|---------|--------|
| 🔴 CRÍTICO | Import | Navigation.tsx línea 9 | Línea comentada innecesaria | -1 línea | NULO |
| 🔴 CRÍTICO | Archivo | lib/constants/hero-images.ts | No importado | ~3KB | NULO |
| 🔴 CRÍTICO | Archivo | components/metric.tsx | Huérfano | ~2KB | NULO |
| 🔴 CRÍTICO | Archivo | components/metric-group.tsx | Huérfano | ~1.5KB | NULO |
| 🔴 CRÍTICO | Archivo | components/pro-table.tsx | Huérfano | ~2.5KB | NULO |
| 🔴 CRÍTICO | Archivo | components/animations/AnimatedText.tsx | Huérfano | ~1KB | NULO |
| 🔴 CRÍTICO | Archivo | components/seo/SchemaFAQ.tsx | Huérfano | ~2KB | NULO |
| 🟡 MEDIO | Archivo | components/examples/CountryExample.tsx | Solo docs | ~5KB | BAJO |
| 🟡 MEDIO | Archivo | components/examples/PricingExample.tsx | Solo docs | ~3KB | BAJO |
| 🟡 MEDIO | Asset | public/images/news/*.jpg (3) | No referenciados | ~150KB | BAJO |
| 🟡 MEDIO | Asset | public/logos/logo_color.png, logo-color_2.jpg | No referenciados | ~50KB | BAJO |
| 🟡 MEDIO | Asset | public/logo-placeholder.svg | No referenciado | ~1KB | BAJO |
| 🟡 MEDIO | Código | FloatingActionWidget.tsx línea 66 | console.log en producción | - | BAJO |
| 🟢 BAJO | Config | tailwind.config.ts | Quitar ./pages/**/* del content | - | NULO |
| 🟢 BAJO | Deps | @sanity/*, next-sanity, react-rough-notation | Validar uso antes de eliminar | ~250KB node_modules | MEDIO |
| 🟢 BAJO | Deps | tailwindcss, typescript → devDependencies | Reclasificar | - | NULO |

---

## IMPACTO ESTIMADO

- **Archivos a eliminar (CRÍTICO):** 7
- **Líneas de código a remover:** ~500+
- **Reducción estimada:** ~15KB bundle + ~200KB assets
- **Dependencias a validar:** 3 paquetes

---

## VALIDACIONES NECESARIAS ANTES DE ELIMINAR

1. **SchemaFAQ:** Verificar si se planea usar en páginas de FAQ.
2. **Examples (CountryExample, PricingExample):** Son documentación viva; si no se usan, mover a `/docs/examples` o eliminar.
3. **Assets news/:** Confirmar si eran placeholders para un futuro NewsList con imágenes.
4. **MegaMenuIndustrias:** Mantener si Industrias se reactivará pronto.

---

## CHANGELOG - Cambios aplicados (Opción B)

### ✅ Ejecutado 1 feb 2025

**Eliminados:**
- `lib/constants/hero-images.ts` - No importado (~4KB)
- `components/metric.tsx` - Huérfano (~3.5KB)
- `components/metric-group.tsx` - Huérfano (~2.5KB)
- `components/pro-table.tsx` - Huérfano (~5.4KB)
- `components/animations/AnimatedText.tsx` - Huérfano (~1.2KB)
- `components/seo/SchemaFAQ.tsx` - Huérfano (~2KB)

**Modificados:**
- `components/layout/header/Navigation.tsx` - Eliminada línea comentada (import MegaMenuIndustrias)

**Validación:** `npm run typecheck` ✓ OK

---

### FASE MEDIA - Ejecutado 1 feb 2025

**Eliminados:**
- `components/examples/CountryExample.tsx` - Solo docs (~7KB)
- `components/examples/PricingExample.tsx` - Solo docs (~8KB)
- `public/images/news/crecimiento-42.jpg` - No referenciado
- `public/images/news/ia-pymes.jpg` - No referenciado
- `public/images/news/regulaciones-pymes.jpg` - No referenciado
- `public/logos/logo_color.png` - No referenciado (~320KB)
- `public/logos/logo-color_2.jpg` - No referenciado (~174KB)
- `public/logo-placeholder.svg` - No referenciado

**Modificados:**
- `components/shared/FloatingActionWidget.tsx` - Eliminado console.log en handleMessageSubmit
- `tailwind.config.ts` - Eliminado `./pages/**/*` del content (carpeta no existe)
- `components/examples/README.md` - Actualizado (apunta a docs de referencia)

**Validación:** `npm run typecheck` ✓ OK

---

### FASE BAJA - Ejecutado 1 feb 2025

**package.json - Dependencias eliminadas:**
- `@sanity/image-url` - No usada en código
- `next-sanity` - No usada en código
- `react-rough-notation` - No usada en código

**package.json - Reclasificación:**
- `tailwindcss` → dependencies → devDependencies
- `typescript` → dependencies → devDependencies

**Carpetas eliminadas:**
- `public/images/news/` (vacía tras eliminar assets)
- `public/logos/` (vacía tras eliminar assets)

**Impacto node_modules:** -951 paquetes removidos

**Validación:** `npm run typecheck` ✓ OK

---

## RECOMENDACIONES

- Ejecutar `npm run build` y `npm run typecheck` tras cada cambio.
- Añadir `eslint-plugin-unused-imports` para detectar imports no usados automáticamente.
- Scripts de mantenimiento añadidos: `npm run audit:deps`, `npm run audit:bundle`

---

## Ver Reporte Final

📄 **`docs/AUDITORIA_REPORTE_FINAL_OPTIMIZACION.md`** - Métricas completas, changelog consolidado y recomendaciones.
