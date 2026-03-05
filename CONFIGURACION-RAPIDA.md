# ⚡ Configuración Rápida - ForjaConsulting

## 🚀 Inicio Rápido (5 minutos)

### 1. Instalar Dependencias

```bash
npm install
```

### 2. Configurar Variables de Entorno

Crear archivo `.env.local` en la raíz del proyecto:

```env
# CONFIGURACIÓN MÍNIMA PARA EMPEZAR
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=info@forjadigital.co
NEXT_PUBLIC_CONTACT_PHONE=+573001234567
NEXT_PUBLIC_WHATSAPP_NUMBER=573001234567

# Dejar vacío para modo desarrollo (los emails se loggean en consola)
EMAIL_SERVICE=
```

### 3. Iniciar Servidor de Desarrollo

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

---

## 📧 Configurar Email (Opcional pero Recomendado)

### Opción A: Resend (Más Fácil) ⭐ Recomendado

1. **Crear cuenta gratis:** [resend.com/signup](https://resend.com/signup)
   - 3,000 emails gratis/mes
   - No requiere tarjeta de crédito

2. **Obtener API Key:**
   - Dashboard → API Keys → Create API Key
   - Copiar el key

3. **Configurar en `.env.local`:**
```env
EMAIL_SERVICE=RESEND
RESEND_API_KEY=re_tuApiKeyAqui
```

4. **Verificar dominio (opcional para producción):**
   - Dashboard → Domains → Add Domain
   - Agregar records DNS proporcionados

### Opción B: SendGrid

1. Crear cuenta en [sendgrid.com](https://sendgrid.com)
2. Obtener API Key en Settings → API Keys
3. Configurar:

```env
EMAIL_SERVICE=SENDGRID
SENDGRID_API_KEY=tu_api_key
SENDGRID_FROM_EMAIL=info@forjadigital.co
```

### Opción C: SMTP (Gmail, Office365, etc)

```env
EMAIL_SERVICE=SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=tu@email.com
SMTP_PASSWORD=tu_password
SMTP_FROM_EMAIL=tu@email.com
```

**Nota:** Para Gmail, usar una [App Password](https://support.google.com/accounts/answer/185833)

---

## 🌐 Redes Sociales (Opcional)

Actualizar en `.env.local`:

```env
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/company/tu-empresa
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/tu-pagina
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/tu-cuenta
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/tu-cuenta
```

---

## 🧪 Probar que Funciona

### 1. Probar Formulario de Contacto

1. Ir a [http://localhost:3000/contacto](http://localhost:3000/contacto)
2. Llenar el formulario
3. Enviar

**Resultado esperado:**
- ✅ Mensaje de éxito visible
- ✅ En consola: logs del email (si no configuraste servicio)
- ✅ En inbox: email recibido (si configuraste servicio)

### 2. Probar Rayos X Empresarial

1. Ir a [http://localhost:3000/rayos-x-empresarial](http://localhost:3000/rayos-x-empresarial)
2. Responder las 5 preguntas
3. (Opcional) Ingresar email
4. Ver resultados

**Resultado esperado:**
- ✅ Resultados mostrados en pantalla
- ✅ Email con reporte enviado (si ingresaste email)

---

## 📱 Probar en Móvil

### Opción 1: Network Local
```bash
# Ver IP local
ipconfig  # Windows
ifconfig  # Mac/Linux

# Acceder desde móvil
http://TU_IP_LOCAL:3000
```

### Opción 2: Tunnel con ngrok
```bash
npx ngrok http 3000
```

---

## 🚀 Deploy a Producción

### Vercel (Más Fácil) ⭐

1. **Push a GitHub:**
```bash
git add .
git commit -m "Deploy inicial"
git push origin main
```

2. **Conectar con Vercel:**
   - [vercel.com/new](https://vercel.com/new)
   - Import repository
   - Configurar variables de entorno
   - Deploy

3. **Configurar variables en Vercel:**
   - Settings → Environment Variables
   - Agregar todas las variables de `.env.local`

### Variables Críticas para Producción

```env
NEXT_PUBLIC_APP_URL=https://forjadigital.co
NEXT_PUBLIC_CONTACT_EMAIL=info@forjadigital.co
EMAIL_SERVICE=RESEND
RESEND_API_KEY=tu_api_key_de_produccion
```

---

## ✅ Checklist Post-Deploy

Verificar en producción:

- [ ] Sitio carga correctamente
- [ ] Formulario de contacto funciona
- [ ] Emails se envían correctamente
- [ ] Rayos X funciona
- [ ] WhatsApp float abre correctamente
- [ ] Links de redes sociales funcionan
- [ ] Mobile responsive
- [ ] SEO: revisar metadata en Facebook Sharing Debugger
- [ ] Performance: PageSpeed Insights > 90

---

## 🆘 Solución de Problemas

### "Cannot find module '@/lib/config'"

```bash
# Reiniciar servidor
npm run dev
```

### "Email no se envía"

1. Verificar API key es correcta
2. Revisar consola del navegador
3. Revisar logs del servidor
4. Verificar dominio está verificado (Resend/SendGrid)

### "Rate limit alcanzado"

- Esperar 1 minuto
- O ajustar en `.env.local`:
```env
RATE_LIMIT_MAX_REQUESTS=50
```

### "Imágenes no cargan"

Verificar URLs en `next.config.js` → `remotePatterns`

---

## 📚 Recursos Adicionales

- **Documentación Next.js:** [nextjs.org/docs](https://nextjs.org/docs)
- **Documentación Resend:** [resend.com/docs](https://resend.com/docs)
- **Tailwind CSS:** [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **TypeScript:** [typescriptlang.org/docs](https://typescriptlang.org/docs)

---

## 🎯 Siguientes Pasos

1. ✅ Configurar email en producción
2. ✅ Configurar Google Analytics
3. ✅ Agregar imágenes reales del equipo
4. ✅ Agregar testimonios de clientes
5. ✅ Crear contenido para blog

---

## 💡 Tips Pro

### Modo Desarrollo vs Producción

En **desarrollo** (sin EMAIL_SERVICE configurado):
- Los emails se loggean en consola
- No se envían emails reales
- Perfecto para testing

En **producción** (con EMAIL_SERVICE configurado):
- Emails se envían realmente
- Rate limiting activo
- Headers de seguridad completos

### Ver Logs de Email en Desarrollo

```bash
# En la terminal donde corre npm run dev
# Buscar: "📧 Email (Development Mode):"
```

---

## 🎉 ¡Listo!

Tu sitio está configurado y listo para generar leads.

**¿Necesitas ayuda?**
Revisar `MEJORAS-IMPLEMENTADAS.md` para documentación completa.

---

*Configuración Rápida - ForjaConsulting*  
*Última actualización: Noviembre 2024*


