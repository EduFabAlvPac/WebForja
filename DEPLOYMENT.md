# 🚀 Guía de Deployment - ForjaConsulting

## Deploy automatizado (Git → GitHub → Vercel)

Para subir cambios y que Vercel despliegue en **https://web-forja.vercel.app**:

```bash
npm run deploy:check   # Verificar que Git, remote y Vercel están ok
npm run deploy        # add + commit + push → Vercel auto-deploy
npm run deploy -- "feat: tu mensaje"   # Con mensaje de commit
```

Requisitos una sola vez: Git (PortableGit en Downloads o en PATH), `gh auth login` + `gh auth setup-git`, repo conectado en Vercel. Ver [QUICK-START-DEPLOYMENT.md](./QUICK-START-DEPLOYMENT.md) y **[ANALISIS-DEPLOY.md](./ANALISIS-DEPLOY.md)** (análisis completo de qué hace falta en tu equipo).

---

## Opciones de Deployment

### 1. Vercel (Recomendado) ⭐

Vercel es la plataforma creada por el equipo de Next.js y ofrece la mejor experiencia para aplicaciones Next.js.

#### Ventajas:
- ✅ Deploy automático desde Git
- ✅ Preview deployments en cada PR
- ✅ Edge Functions globales
- ✅ Optimización automática
- ✅ Analytics integrado
- ✅ SSL gratuito

#### Pasos:

1. **Conectar Repositorio**
   - Ve a [vercel.com/new](https://vercel.com/new)
   - Conecta tu repositorio de GitHub/GitLab/Bitbucket

2. **Configurar Proyecto**
   - Vercel detectará automáticamente Next.js
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

3. **Variables de Entorno**
   Configura en Settings → Environment Variables:
   ```
   NEXT_PUBLIC_WHATSAPP_NUMBER=573001234567
   NEXT_PUBLIC_SITE_URL=https://tudominio.com
   CONTACT_EMAIL_TO=contacto@forjaconsulting.com
   ```

4. **Deploy**
   - Click "Deploy"
   - ¡Listo en ~2 minutos!

5. **Dominio Personalizado**
   - Settings → Domains
   - Agrega tu dominio: `forjadigital.co`
   - Configura DNS según instrucciones

#### CLI Deployment

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy a preview
vercel

# Deploy a producción
vercel --prod
```

---

### 2. Netlify

#### Pasos:

1. Conecta tu repositorio en [netlify.com](https://netlify.com)
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Configura variables de entorno
4. Deploy

---

### 3. DigitalOcean App Platform

#### Pasos:

1. Crea una nueva App en DigitalOcean
2. Conecta tu repositorio
3. Configura:
   - Build Command: `npm run build`
   - Run Command: `npm start`
4. Deploy

---

### 4. Self-Hosted (VPS/Dedicated)

Para hosting propio en un servidor Linux:

#### Requisitos:
- Ubuntu 20.04+ o similar
- Node.js 18+
- Nginx
- PM2 (process manager)
- SSL Certificate (Let's Encrypt)

#### Pasos Detallados:

```bash
# 1. Instalar Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 2. Instalar PM2
sudo npm install -g pm2

# 3. Clonar el proyecto
cd /var/www
git clone tu-repositorio forja-digital-ae
cd forja-digital-ae

# 4. Instalar dependencias
npm install

# 5. Crear archivo .env.production
nano .env.production
# Pegar variables de entorno

# 6. Build
npm run build

# 7. Iniciar con PM2
pm2 start npm --name "forja-digital" -- start
pm2 save
pm2 startup

# 8. Configurar Nginx
sudo nano /etc/nginx/sites-available/forjadigital.co
```

#### Nginx Configuration:

```nginx
server {
    listen 80;
    server_name forjadigital.co www.forjadigital.co;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Habilitar sitio
sudo ln -s /etc/nginx/sites-available/forjadigital.co /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# Instalar SSL con Let's Encrypt
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d forjadigital.co -d www.forjadigital.co
```

---

## 🔒 Configuración de Seguridad

### Headers de Seguridad

Agregar en `next.config.js`:

```javascript
module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          }
        ]
      }
    ]
  }
}
```

---

## 📊 Analytics & Monitoring

### Google Analytics 4

1. Crear propiedad GA4 en [analytics.google.com](https://analytics.google.com)
2. Obtener Measurement ID (G-XXXXXXXXXX)
3. Agregar a `.env.local`:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
4. Implementar en `app/layout.tsx`

### Vercel Analytics

Ya incluido gratis con Vercel. Ver métricas en el dashboard.

---

## 🔄 CI/CD Pipeline

### GitHub Actions (Ejemplo)

Crear `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## ✅ Checklist Pre-Deployment

- [ ] Actualizar variables de entorno para producción
- [ ] Cambiar número de WhatsApp real
- [ ] Actualizar emails de contacto
- [ ] Configurar dominio personalizado
- [ ] Configurar SSL/HTTPS
- [ ] Probar todos los formularios
- [ ] Verificar rutas de navegación
- [ ] Revisar metadata SEO
- [ ] Probar en móviles
- [ ] Configurar Analytics
- [ ] Configurar monitoreo de errores
- [ ] Crear backup del sitio

---

## 🔍 Verificación de Despliegue en GitHub

Para confirmar que tu proyecto se ha desplegado correctamente en Vercel directamente desde la interfaz de GitHub:

### 1. Estado del Commit (Puntos de Color)
En la página principal de tu repositorio en GitHub o en la pestaña de "Commits":
- 🟡 **Punto Amarillo:** El despliegue o build está en progreso.
- 🟢 **Check Verde:** El despliegue fue exitoso y tu sitio está en vivo.
- 🔴 **Cruz Roja:** Hubo un error en el build o despliegue.

Haz clic en el icono para ver detalles ("Details") que te llevarán directamente a los logs de Vercel.

### 2. Sección "Environments"
En la barra lateral derecha de la página principal de tu repositorio:
- Busca la sección **"Environments"**.
- Verás un enlace que dice `Production` o `Preview`.
- Si está en verde y dice "Active", tu versión actual está funcionando.

### 3. Pestaña "Deployments" (Opcional)
Si tu repositorio tiene esta pestaña activada, verás un historial cronológico de cada vez que Vercel ha publicado tu sitio.

---

## 🐛 Troubleshooting en Producción

### Error 500

```bash
# Ver logs en Vercel
vercel logs

# Ver logs en PM2
pm2 logs forja-digital
```

### Problemas de Build

```bash
# Limpiar caché
rm -rf .next node_modules
npm install
npm run build
```

### Variables de Entorno no Cargan

- En Vercel: Verificar que tengan prefijo `NEXT_PUBLIC_` las que se usan en cliente
- Redeploy después de cambiar variables

---

## 📈 Post-Deployment

1. **Verificar Lighthouse Score**
   - Abrir DevTools → Lighthouse
   - Objetivo: >90 en todas las métricas

2. **Configurar Google Search Console**
   - Agregar sitio en [search.google.com/search-console](https://search.google.com/search-console)
   - Enviar sitemap: `https://tudominio.com/sitemap.xml`

3. **Monitoreo**
   - Configurar uptime monitoring (UptimeRobot, Pingdom)
   - Configurar alertas de errores (Sentry)

---

**¡Tu portal está listo para transformar empresas! 🚀**

