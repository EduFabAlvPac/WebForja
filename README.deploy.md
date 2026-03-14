# 🚀 Deployment Guide — ForjaConsulting Multi-País

Checklist completo para despliegue a producción en Vercel con dominio `www.forjadigital.com`.

---

## 📋 Pre-Deployment Checklist

### 1. **Verificación Local**

```bash
# ✅ Build exitoso
npm run build

# ✅ Sin errores de TypeScript
npm run typecheck

# ✅ Sin errores de linting
npm run lint

# ✅ QA de enlaces (servidor local)
npm run dev           # En otra terminal
npm run qa:links      # Verifica localhost:3000
```

**Resultado esperado**: 0 errores críticos, warnings aceptables.

---

### 2. **Variables de Entorno**

Configurar en **Vercel Dashboard → tu-proyecto → Settings → Environment Variables**:

#### **Producción (Production)**

```bash
# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# APIs (si aplican)
NEXT_PUBLIC_API_URL=https://api.forjadigital.com
API_SECRET_KEY=<secret>

# Sanity CMS (si aplica)
NEXT_PUBLIC_SANITY_PROJECT_ID=<project-id>
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=<token>

# Email/Contact (si aplica)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=contacto@forjaconsulting.com
SMTP_PASS=<app-password>
CONTACT_EMAIL_TO=contacto@forjaconsulting.com
```

#### **Preview (Staging)**
- Mismas variables pero con endpoints/IDs de staging

#### **Development**
- Variables locales en `.env.local` (nunca commitear)

---

### 3. **Configuración de Dominio en Vercel**

#### **A. Agregar Dominio**

1. Vercel Dashboard → tu-proyecto → **Settings → Domains**
2. Agregar dominios:
   - `www.forjadigital.com` (principal)
   - `forjadigital.com` (redirect a www)
3. Verificar propiedad del dominio (TXT record)

#### **B. DNS Configuration**

En tu proveedor de DNS (ej: GoDaddy, Namecheap, Cloudflare):

**Registros DNS necesarios:**

```dns
# A Record (si usas apex sin CDN)
@       A       76.76.21.21      # IP de Vercel (verificar en dashboard)

# CNAME Record (preferido)
www     CNAME   cname.vercel-dns.com.    TTL 3600

# Redirect apex a www (si tu DNS lo soporta)
@       URL     https://www.forjadigital.com/

# TXT Record para verificación
@       TXT     verification-code-from-vercel
```

**Verificar propagación:**
```bash
# Verificar DNS
nslookup www.forjadigital.com

# Verificar HTTPS
curl -I https://www.forjadigital.com
```

---

### 4. **Certificado SSL**

✅ **Automático con Vercel**:
- Let's Encrypt SSL gratuito
- Auto-renovación
- Configurado automáticamente al agregar dominio

**Verificar:**
```bash
# Debe mostrar certificado válido
openssl s_client -connect www.forjadigital.com:443 -servername www.forjadigital.com
```

---

### 5. **Redirects (vercel.json)**

✅ Ya configurado en `vercel.json`:

```json
{
  "redirects": [
    {
      "source": "/:path*",
      "has": [{ "type": "host", "value": "forjadigital.com" }],
      "destination": "https://www.forjadigital.com/:path*",
      "permanent": true
    }
  ]
}
```

**Verificar después del deploy:**
```bash
# Debe redirigir a www
curl -I http://forjadigital.com
# Expected: 301 → https://www.forjadigital.com

curl -I http://forjadigital.com/es-co/contacto
# Expected: 301 → https://www.forjadigital.com/es-co/contacto
```

---

### 6. **Headers de Seguridad**

✅ Ya configurado en `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
      ]
    }
  ]
}
```

**Verificar:**
```bash
curl -I https://www.forjadigital.com | grep -E "X-Frame|X-Content"
```

---

## 🚀 Deploy Process

### **Opción A: Deploy desde Git (Recomendado)**

```bash
# 1. Commit cambios
git add .
git commit -m "feat: prepare production deployment"

# 2. Push a main (Vercel auto-deploy)
git push origin main

# 3. Monitorear en Vercel Dashboard
# Dashboard → Deployments → Ver logs en tiempo real
```

### **Opción B: Deploy Manual con CLI**

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy a producción
vercel --prod

# 4. Alias al dominio (si no está configurado)
vercel alias https://forja-digital-xxx.vercel.app www.forjadigital.com
```

---

## ✅ Post-Deployment Validation

### **1. QA Automático de Producción**

```bash
# Ejecutar script de QA contra producción
npm run qa:links:prod

# Resultado esperado:
# ✅ ALL CHECKS PASSED
# ✅ NO CRITICAL ISSUES
```

### **2. Verificaciones Manuales**

#### **A. Status Codes**
- ✅ `https://www.forjadigital.com/es` → 200
- ✅ `https://www.forjadigital.com/es-co` → 200
- ✅ `https://www.forjadigital.com/es-cl/contacto` → 200
- ✅ `https://www.forjadigital.com/ruta-inexistente` → 404

#### **B. Redirects**
- ✅ `http://forjadigital.com` → `https://www.forjadigital.com/es`
- ✅ `https://www.forjadigital.com/` → `https://www.forjadigital.com/es`

#### **C. SEO Tags**
Abrir DevTools → Elements → `<head>`:

```html
<!-- Canonical -->
<link rel="canonical" href="https://www.forjadigital.com/es-co" />

<!-- hreflang -->
<link rel="alternate" hreflang="es" href="https://www.forjadigital.com/es" />
<link rel="alternate" hreflang="es-CO" href="https://www.forjadigital.com/es-co" />
<link rel="alternate" hreflang="es-CL" href="https://www.forjadigital.com/es-cl" />
<link rel="alternate" hreflang="es-PE" href="https://www.forjadigital.com/es-pe" />
<link rel="alternate" hreflang="es-EC" href="https://www.forjadigital.com/es-ec" />
<link rel="alternate" hreflang="x-default" href="https://www.forjadigital.com/es" />

<!-- JSON-LD -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ForjaConsulting",
  ...
}
</script>
```

#### **D. Analytics**
1. Abrir DevTools → Network → Filtrar "analytics"
2. Interactuar con la página
3. Verificar requests a:
   - `/_vercel/insights` (Vercel Analytics)
   - `google-analytics.com/collect` (GA4, si configurado)

#### **E. Country Detection**
1. Visitar `https://www.forjadigital.com/es`
2. Verificar snackbar de geo-sugerencia (si aplica)
3. Cambiar país con selector en header
4. Verificar URL cambia (ej: `/es-co`)
5. Verificar cookie `forja_lc` en DevTools → Application → Cookies

#### **F. Funcionalidades Multi-País**
- ✅ WhatsApp muestra número del país
- ✅ Precios en moneda correcta (COP para CO, USD para otros)
- ✅ Legal stamp muestra NIT colombiano
- ✅ Alert rail muestra noticias del país
- ✅ Formularios incluyen campo de ID fiscal correcto

---

## 🔍 Herramientas de Validación Externa

### **1. SEO**
```bash
# Google Search Console
https://search.google.com/search-console
→ Agregar propiedad www.forjadigital.com
→ Verificar mediante DNS TXT o archivo HTML
→ Enviar sitemap: https://www.forjadigital.com/sitemap.xml

# Schema Validator
https://validator.schema.org/
→ Ingresar URLs de cada país
→ Verificar Organization y Service schemas
```

### **2. Performance**
```bash
# Lighthouse (Chrome DevTools)
→ Abrir DevTools → Lighthouse → Generate Report
→ Objetivo: >90 en todas las métricas

# PageSpeed Insights
https://pagespeed.web.dev/
→ Analizar www.forjadigital.com/es
→ Verificar Core Web Vitals

# WebPageTest
https://www.webpagetest.org/
→ Test desde múltiples ubicaciones (CO, CL, PE, EC)
```

### **3. Seguridad**
```bash
# Security Headers
https://securityheaders.com/
→ Debe obtener A o A+

# SSL Labs
https://www.ssllabs.com/ssltest/
→ Debe obtener A o A+
```

---

## 🚨 Troubleshooting

### **Problema: DNS no resuelve**
```bash
# Verificar propagación
https://dnschecker.org/

# Limpiar caché DNS local
# Windows:
ipconfig /flushdns

# Mac/Linux:
sudo dscacheutil -flushcache
```

### **Problema: Redirect loop**
- Verificar que no hay múltiples redirects conflictivos
- Revisar `vercel.json`
- Verificar configuración de CDN (si usas Cloudflare u otro)

### **Problema: 500 errors en producción**
```bash
# 1. Ver logs en Vercel
Dashboard → Deployments → [latest] → Functions → Ver errores

# 2. Verificar variables de entorno
Dashboard → Settings → Environment Variables
→ Asegurar que todas las requeridas están configuradas

# 3. Rollback si necesario
Dashboard → Deployments → [previous working] → ... → Promote to Production
```

### **Problema: Analytics no trackea**
```bash
# 1. Verificar NEXT_PUBLIC_GA_MEASUREMENT_ID
# 2. Abrir DevTools → Console → Buscar [Analytics] logs
# 3. Verificar Network → Debe haber requests a analytics
# 4. Esperar ~30 min para datos en GA4 Realtime
```

---

## 📊 Monitoring Post-Deploy

### **Primera Semana**
- [ ] Revisar errores en Vercel Dashboard → Functions
- [ ] Revisar métricas en Vercel Analytics
- [ ] Verificar tráfico por país en GA4
- [ ] Revisar conversión de formularios por país
- [ ] Monitorear Core Web Vitals

### **Mensual**
- [ ] Ejecutar `npm run qa:links:prod`
- [ ] Revisar Search Console (indexación, errores)
- [ ] Analizar conversión por país
- [ ] Verificar uptime (Vercel provee 99.99%)

---

## 🎉 Checklist Final

Antes de anunciar el lanzamiento:

- [ ] ✅ Build exitoso
- [ ] ✅ QA automático pasado
- [ ] ✅ DNS propagado
- [ ] ✅ SSL activo (https verde)
- [ ] ✅ Redirects funcionando
- [ ] ✅ SEO tags correctos (canonical, hreflang, JSON-LD)
- [ ] ✅ Analytics trackeando
- [ ] ✅ Formularios enviando emails
- [ ] ✅ WhatsApp links funcionando
- [ ] ✅ Country detection activo
- [ ] ✅ Performance >90 (Lighthouse)
- [ ] ✅ Seguridad A+ (Security Headers)
- [ ] ✅ Sitemap en Search Console
- [ ] ✅ 404 page funcional
- [ ] ✅ Favicon visible
- [ ] ✅ OG images funcionando (test en Facebook Debugger)

---

## 📞 Soporte

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Support**: https://vercel.com/support

---

**🚀 ¡Listo para producción!**

_Última actualización: Diciembre 2, 2025_

