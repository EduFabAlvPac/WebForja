# Deployment & QA System

Sistema de validación y deployment para producción multi-país.

---

## 🎯 Objetivos

1. **Redirects**: Unificar tráfico en `www.forjadigital.com`
2. **QA Automático**: Verificar enlaces, SEO y estructura
3. **Deployment**: Guía completa con checklist

---

## 📦 Componentes

### 1. vercel.json

Configuración de infrastructure-as-code para Vercel:

```json
{
  "redirects": [
    {
      "source": "/:path*",
      "has": [{ "type": "host", "value": "forjadigital.com" }],
      "destination": "https://www.forjadigital.com/:path*",
      "permanent": true
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

**Características:**
- ✅ Redirect de apex (`forjadigital.com`) a www
- ✅ Headers de seguridad globales
- ✅ Permanente (301) para SEO

---

### 2. scripts/qa-links.ts

Script de QA automático que verifica:

#### **A. Status Codes**
```typescript
// Verifica que todas las rutas retornen 200
const ROUTES = ['/', '/contacto', '/legal/politica-datos', ...]
const LOCALES = ['es', 'es-co', 'es-cl', 'es-pe', 'es-ec']

// Test: /es/contacto, /es-co/contacto, etc.
```

#### **B. Canonical URLs**
```typescript
// Verifica presencia de <link rel="canonical">
if (!result.canonical) {
  warnings.push('Missing canonical')
}
```

#### **C. hreflang Tags**
```typescript
// Verifica al menos 4 alternates + x-default
if (result.hreflang.length < 4) {
  warnings.push('Insufficient hreflang tags')
}
```

#### **D. JSON-LD**
```typescript
// Verifica presencia de structured data
result.hasJsonLd = /<script[^>]+type=["']application\/ld\+json["']/.test(html)
```

---

## 🚀 Uso

### Comandos NPM

```bash
# QA en desarrollo (localhost:3000)
npm run dev              # Terminal 1
npm run qa:links         # Terminal 2

# QA en producción
npm run qa:links:prod

# Typecheck antes de deploy
npm run typecheck
```

### Output del Script

```
╔═══════════════════════════════════════════╗
║   🔍 QA Multi-Country Link Checker      ║
╚═══════════════════════════════════════════╝

🌐 Environment: production
🔗 Base URL: https://www.forjadigital.com
📋 Routes to check: 7
🌍 Locales: es, es-co, es-cl, es-pe, es-ec

📍 Verificando ruta: /
  es       → 200 
  es-co    → 200 
  es-cl    → 200 
  es-pe    → 200 
  es-ec    → 200 
  ✅ All checks passed

📍 Verificando ruta: /contacto
  es       → 200 
  es-co    → 200 
  es-cl    → 200 
  es-pe    → 200 
  es-ec    → 200 
  ✅ All checks passed

...

══════════════════════════════════════════════════

📊 RESUMEN FINAL

✅ ALL CHECKS PASSED!
🎉 No issues or warnings found.
```

### Exit Codes

- `0`: Sin issues (puede haber warnings no críticos)
- `1`: Issues críticos encontrados (bloquea CI/CD)

---

## 🔧 Integración CI/CD

### GitHub Actions

```yaml
name: QA & Deploy

on:
  push:
    branches: [main]

jobs:
  qa:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      
      - name: Install dependencies
        run: npm ci
      
      - name: TypeCheck
        run: npm run typecheck
      
      - name: Lint
        run: npm run lint
      
      - name: Build
        run: npm run build
      
      # QA después del deploy (webhook o delay)
      - name: Wait for deployment
        run: sleep 60
      
      - name: QA Production
        run: npm run qa:links:prod
```

---

## 📊 Verificaciones por Ruta

| Ruta | Status | Canonical | hreflang | JSON-LD |
|------|--------|-----------|----------|---------|
| `/` (home) | ✅ 200 | ✅ | ✅ (5+) | ✅ Organization |
| `/contacto` | ✅ 200 | ✅ | ✅ (5+) | ✅ |
| `/legal/politica-datos` | ✅ 200 | ✅ | ✅ (5+) | ✅ |
| `/legal/terminos` | ✅ 200 | ✅ | ✅ (5+) | ✅ |
| `/legal/cookies` | ✅ 200 | ✅ | ✅ (5+) | ✅ |
| `/legal/contratacion-facturacion` | ✅ 200 | ✅ | ✅ (5+) | ✅ |

**Total verificaciones**: 7 rutas × 5 locales = 35 URLs

---

## 🎨 Arquitectura del Script

```
scripts/qa-links.ts
├── checkUrl(url)
│   ├── HTTP request
│   ├── Parse HTML
│   ├── Extract canonical
│   ├── Extract hreflang
│   └── Detect JSON-LD
│
├── checkRouteAcrossLocales(route)
│   └── Loop por cada locale
│       └── checkUrl(baseUrl/locale/route)
│
├── validateResults(results)
│   ├── Check status codes
│   ├── Check canonicals
│   ├── Check hreflang count
│   └── Check JSON-LD presence
│
└── runQA()
    ├── Loop por todas las rutas
    ├── Collect issues/warnings
    └── Report final + exit code
```

---

## 🔍 Troubleshooting

### Script falla con "Connection refused"
```bash
# Asegurar que el servidor está corriendo
npm run dev     # Para QA local
# o
# Verificar que la URL de producción está activa
```

### False positives en hreflang
```bash
# El script espera al menos 4 alternates
# Si una página no tiene hreflang, es un warning (no crítico)
# Para páginas que no deberían tener hreflang, agregar a exclusiones
```

### Timeout errors
```bash
# Aumentar timeout en qa-links.ts:
const req = client.get(url, { timeout: 20000 }, ...)
```

---

## 📈 Métricas

### Cobertura
- **Rutas**: 7 principales
- **Locales**: 5 (es, es-co, es-cl, es-pe, es-ec)
- **Total URLs**: 35
- **Verificaciones por URL**: 4 (status, canonical, hreflang, JSON-LD)
- **Total checks**: 140

### Performance
- **Tiempo ejecución**: ~10-15 seg (localhost)
- **Tiempo ejecución**: ~30-45 seg (producción)
- **Concurrent requests**: 1 (secuencial para no saturar)

---

## 🚀 Próximos Pasos

### Mejoras Sugeridas

1. **Paralelización**: Usar `Promise.all()` para requests concurrentes
2. **Cache**: Guardar resultados para comparar entre deploys
3. **Diff Reports**: Mostrar qué cambió desde último QA
4. **Lighthouse Integration**: Verificar performance scores
5. **Accessibility**: Verificar contraste, alt tags, etc.
6. **Visual Regression**: Capturar screenshots y comparar

### Extensiones

```typescript
// Agregar más verificaciones
interface CheckResult {
  // ... existentes
  openGraphImage?: string
  twitterCard?: string
  metaDescription?: string
  h1Count?: number
  brokenImages?: number
  consoleErrors?: number
}
```

---

## 📚 Referencias

- [Vercel Configuration](https://vercel.com/docs/projects/project-configuration)
- [Next.js Redirects](https://nextjs.org/docs/app/api-reference/next-config-js/redirects)
- [Schema.org Validator](https://validator.schema.org/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

---

**Estado**: ✅ Operativo  
**Última actualización**: Diciembre 2, 2025

