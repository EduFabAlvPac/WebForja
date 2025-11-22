# Variables de Entorno - Forja Digital

Este archivo documenta todas las variables de entorno necesarias para el proyecto.

## 📋 Cómo Configurar

1. Copia este contenido a un archivo `.env.local` en la raíz del proyecto
2. Reemplaza los valores de ejemplo con tus credenciales reales
3. Nunca compartas o commitees el archivo `.env.local`

---

## 🔧 Variables de Entorno Requeridas

### **Google Analytics 4**

```env
# Measurement ID de Google Analytics 4
# Formato: G-XXXXXXXXXX
# Obtén tu ID en: https://analytics.google.com/
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
```

**¿Cómo obtener tu GA Measurement ID?**

1. Ve a [Google Analytics](https://analytics.google.com/)
2. Crea una nueva propiedad (o usa una existente)
3. Selecciona "Web" como plataforma
4. Copia el Measurement ID (formato: `G-XXXXXXXXXX`)
5. Pégalo en tu archivo `.env.local`

---

### **Información de Contacto**

```env
# Información de contacto visible en el sitio
NEXT_PUBLIC_CONTACT_EMAIL="info@forjadigital.co"
NEXT_PUBLIC_CONTACT_PHONE="+57 300 123 4567"

# Número de WhatsApp (solo dígitos, con código de país)
# Formato: 57 (código) + número sin espacios ni guiones
NEXT_PUBLIC_WHATSAPP_NUMBER="573001234567"
```

---

### **Redes Sociales** (Opcional)

```env
NEXT_PUBLIC_LINKEDIN_URL="https://linkedin.com/company/tu-empresa"
NEXT_PUBLIC_FACEBOOK_URL="https://facebook.com/tu-empresa"
NEXT_PUBLIC_TWITTER_URL="https://twitter.com/tu-empresa"
NEXT_PUBLIC_INSTAGRAM_URL="https://instagram.com/tu-empresa"
```

---

### **Servicio de Email** (Resend recomendado)

```env
# Proveedor de email: RESEND, SENDGRID, o SMTP
EMAIL_SERVICE="RESEND"

# Resend API Key (https://resend.com)
RESEND_API_KEY="re_xxxxxxxxxxxxxxxxxxxxxxxx"
```

**¿Cómo obtener tu Resend API Key?**

1. Regístrate en [Resend](https://resend.com/)
2. Ve a "API Keys" en el dashboard
3. Crea una nueva API Key
4. Copia la key y pégala en `.env.local`

---

## 📊 Eventos Trackeados Automáticamente

Una vez configurado `NEXT_PUBLIC_GA_MEASUREMENT_ID`, se trackean automáticamente:

### **CTA Clicks:**
- ✅ `cta_rayos_x_hero` - Click en CTA del Hero
- ✅ `cta_rayos_x_sticky_bar` - Click en barra flotante
- ✅ `cta_rayos_x_final` - Click en CTA final
- ✅ `cta_casos_exito` - Click en casos de éxito
- ✅ `cta_contacto` - Click en contacto
- ✅ `cta_whatsapp` - Click en WhatsApp

### **Scroll Depth:**
- ✅ `scroll_25` - Usuario llegó al 25%
- ✅ `scroll_50` - Usuario llegó al 50%
- ✅ `scroll_75` - Usuario llegó al 75%
- ✅ `scroll_100` - Usuario completó la página

### **Section Views:**
- ✅ `view_pain_points` - Vio sección de problemas
- ✅ `view_services` - Vio sección de servicios
- ✅ `view_methodology` - Vio metodología FORJA
- ✅ `view_case_studies` - Vio casos de éxito
- ✅ `view_cta_section` - Vio CTA final

### **Engagement:**
- ✅ `hover_service_card` - Hover en card de servicio
- ✅ `expand_methodology_step` - Expandió paso de metodología
- ✅ `click_case_study_link` - Click en caso específico

---

## 🔍 Verificar que Funciona

### **En Desarrollo (sin GA configurado):**
```bash
npm run dev
# Los eventos se logean en la consola del navegador
```

### **Con GA configurado:**
1. Agrega tu `NEXT_PUBLIC_GA_MEASUREMENT_ID` en `.env.local`
2. Reinicia el servidor: `npm run dev`
3. Abre: http://localhost:3000
4. Abre las DevTools de Chrome → Pestaña "Network"
5. Filtra por "collect" o "analytics"
6. Interactúa con el sitio (clicks, scroll)
7. Verás requests a Google Analytics

### **En Google Analytics:**
1. Ve a tu panel de [Google Analytics](https://analytics.google.com/)
2. Selecciona tu propiedad
3. Ve a "Informes" → "Tiempo real" → "Eventos"
4. Interactúa con tu sitio
5. Los eventos aparecerán en tiempo real

---

## 🚀 Ejemplo de Archivo .env.local

Crea este archivo en la raíz del proyecto:

```env
# .env.local
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-ABC123XYZ"
NEXT_PUBLIC_CONTACT_EMAIL="contacto@tuempresa.com"
NEXT_PUBLIC_WHATSAPP_NUMBER="573001234567"
RESEND_API_KEY="re_tu_api_key_real_aqui"
EMAIL_SERVICE="RESEND"
```

---

## ⚠️ Importante

- ✅ **SÍ** commitea este archivo de documentación
- ❌ **NO** commitees `.env.local` (está en `.gitignore`)
- ✅ **SÍ** usa variables con `NEXT_PUBLIC_` para datos del cliente
- ❌ **NO** pongas API keys sensibles en variables `NEXT_PUBLIC_`

---

## 🆘 Soporte

Si tienes problemas configurando:
1. Verifica que el archivo se llame exactamente `.env.local`
2. Reinicia el servidor después de cambiar variables
3. Verifica la consola del navegador en modo desarrollo
4. Revisa los logs del servidor para errores

---

**Última actualización:** Noviembre 2024


