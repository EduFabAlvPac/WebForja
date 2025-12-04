# 🚀 Quick Start: Deployment & QA

Guía rápida para desplegar a producción y ejecutar QA.

---

## ⚡ Pre-Requisitos

```bash
# 1. Instalar ts-node (si no está)
npm install

# 2. Verificar que el build funciona
npm run build

# 3. Sin errores de TypeScript
npm run typecheck

# 4. Sin errores de linting
npm run lint
```

---

## 🔍 QA Local

```bash
# Terminal 1: Iniciar servidor
npm run dev

# Terminal 2: Ejecutar QA
npm run qa:links

# Resultado esperado:
# ✅ ALL CHECKS PASSED!
# 🎉 No issues or warnings found.
```

**¿Qué verifica?**
- ✅ Status 200 en 35 URLs (7 rutas × 5 locales)
- ✅ Canonical URLs presentes
- ✅ hreflang tags correctos (5+)
- ✅ JSON-LD structured data

---

## 🚀 Deploy a Vercel

### Opción A: Auto-Deploy (Recomendado)

```bash
# Commit y push
git add .
git commit -m "feat: ready for production"
git push origin main

# Vercel detecta el push y deploya automáticamente
# Monitorear en: https://vercel.com/dashboard
```

### Opción B: CLI Manual

```bash
# Instalar CLI
npm i -g vercel

# Login
vercel login

# Deploy a producción
vercel --prod
```

---

## ✅ QA en Producción

```bash
# Ejecutar QA contra www.forjadigital.com
npm run qa:links:prod

# Resultado esperado:
# ✅ ALL CHECKS PASSED
# ✅ NO CRITICAL ISSUES
```

---

## 🔧 Configurar Dominio (Primera Vez)

### 1. En Vercel Dashboard

1. Ve a tu proyecto → **Settings → Domains**
2. Agregar dominios:
   - `www.forjadigital.com` (principal)
   - `forjadigital.com` (redirect)
3. Vercel te dará registros DNS

### 2. En tu DNS Provider

```dns
# CNAME para www
www     CNAME   cname.vercel-dns.com.    TTL 3600

# A record para apex (opcional, Vercel maneja redirect)
@       A       76.76.21.21

# TXT para verificación
@       TXT     verification-code-from-vercel
```

### 3. Verificar DNS

```bash
# Esperar 5-10 minutos para propagación
nslookup www.forjadigital.com

# Debe mostrar IPs de Vercel
```

---

## 🌍 Variables de Entorno

En **Vercel Dashboard → Settings → Environment Variables**:

```bash
# Mínimo necesario
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Opcional (si usas)
SMTP_HOST=smtp.gmail.com
SMTP_USER=contacto@forjadigital.com
SMTP_PASS=<app-password>
```

---

## 🧪 Verificaciones Manuales

### 1. Redirects
```bash
# Apex → www
curl -I http://forjadigital.com
# Expected: 301 → https://www.forjadigital.com

# Root → /es
curl -I https://www.forjadigital.com/
# Expected: 308 → /es
```

### 2. País Detection
1. Abrir https://www.forjadigital.com/es
2. Verificar snackbar de geo-sugerencia
3. Cambiar país con selector en header
4. Verificar URL cambia (ej: `/es-co`)

### 3. Funcionalidades
- [ ] Formulario de contacto envía
- [ ] WhatsApp abre con número correcto
- [ ] Precios en moneda correcta
- [ ] Analytics trackea eventos

### 4. SEO
Abrir DevTools → Elements → `<head>`:

```html
<!-- Debe tener: -->
<link rel="canonical" href="https://www.forjadigital.com/es-co" />
<link rel="alternate" hreflang="es-CO" href="..." />
<script type="application/ld+json">...</script>
```

---

## 📊 Monitoreo Post-Deploy

### Primera Hora
```bash
# Ver logs en tiempo real
vercel logs --follow

# Ejecutar QA cada 10 min
watch -n 600 npm run qa:links:prod
```

### Herramientas Externas
```bash
# Performance
https://pagespeed.web.dev/
→ Ingresar www.forjadigital.com/es
→ Objetivo: >90 en todas las métricas

# SEO
https://search.google.com/search-console
→ Agregar propiedad
→ Enviar sitemap: /sitemap.xml

# Seguridad
https://securityheaders.com/
→ Analizar www.forjadigital.com
→ Objetivo: A o A+
```

---

## 🚨 Troubleshooting Rápido

### DNS no resuelve
```bash
# Verificar propagación
https://dnschecker.org/

# Limpiar caché local
# Windows:
ipconfig /flushdns

# Mac:
sudo dscacheutil -flushcache
```

### Errores 500 en producción
```bash
# 1. Ver logs
vercel logs

# 2. Verificar variables de entorno
# Vercel Dashboard → Settings → Environment Variables

# 3. Rollback si necesario
# Dashboard → Deployments → [anterior] → Promote to Production
```

### QA falla
```bash
# Verificar que el sitio está up
curl -I https://www.forjadigital.com/es

# Aumentar timeout en scripts/qa-links.ts
{ timeout: 20000 }  # De 10s a 20s

# Ejecutar con más verbosity
# (agregar console.log en qa-links.ts)
```

---

## ✅ Checklist Mínimo

Antes de anunciar el lanzamiento:

- [ ] ✅ Build exitoso (`npm run build`)
- [ ] ✅ QA local pasado (`npm run qa:links`)
- [ ] ✅ Deploy exitoso (Vercel dashboard verde)
- [ ] ✅ QA producción pasado (`npm run qa:links:prod`)
- [ ] ✅ DNS resuelve a www
- [ ] ✅ SSL activo (https verde en navegador)
- [ ] ✅ Redirects funcionando (apex → www)
- [ ] ✅ Formularios enviando
- [ ] ✅ Analytics trackeando
- [ ] ✅ WhatsApp links funcionando

---

## 📚 Más Info

- [Guía Completa de Deployment](./README.deploy.md) — Checklist detallado
- [Documentación Técnica](./docs/DEPLOYMENT_QA.md) — Arquitectura del sistema
- [Vercel Docs](https://vercel.com/docs) — Documentación oficial

---

**🎉 ¡Listo para producción en 5 minutos!**

_Última actualización: Diciembre 2, 2025_

