# Widget Message API Endpoint

## 📍 Endpoint
`POST /api/widget-message`

## 🎯 Funcionalidad Actual
- ✅ Validación de email y mensaje
- ✅ Rate limiting (3 requests/minuto por IP)
- ✅ Honeypot anti-spam
- ✅ Sanitización de inputs
- ✅ Logging en consola
- ⚠️ **Placeholder**: No envía emails reales aún

## 🔧 Integración con Servicios de Email

### Opción 1: Resend (Recomendado)
```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'widget@forjadigital.co',
  to: 'contacto@forjadigital.co',
  subject: `Nuevo mensaje del widget - ${email}`,
  html: `
    <h2>Nuevo mensaje del widget</h2>
    <p><strong>De:</strong> ${email}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${message}</p>
  `,
})
```

### Opción 2: SendGrid
```typescript
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

await sgMail.send({
  to: 'contacto@forjadigital.co',
  from: 'widget@forjadigital.co',
  subject: `Nuevo mensaje del widget - ${email}`,
  text: message,
  html: `<p>${message}</p>`,
})
```

### Opción 3: Nodemailer (SMTP)
```typescript
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

await transporter.sendMail({
  from: '"Widget Forja" <widget@forjadigital.co>',
  to: 'contacto@forjadigital.co',
  subject: `Nuevo mensaje - ${email}`,
  text: message,
})
```

### Opción 4: Base de Datos (Prisma)
```typescript
import { prisma } from '@/lib/prisma'

await prisma.widgetMessage.create({
  data: {
    email,
    message,
    ip: rateLimitKey,
    createdAt: new Date(),
  },
})
```

### Opción 5: Webhook (Slack/Discord)
```typescript
await fetch(process.env.SLACK_WEBHOOK_URL!, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    text: `📧 Nuevo mensaje del widget\n*Email:* ${email}\n*Mensaje:* ${message}`,
  }),
})
```

## 🔐 Variables de Entorno Necesarias

Agregar a `.env.local`:

```env
# Resend
RESEND_API_KEY=re_xxxxxxxxxxxxx

# SendGrid
SENDGRID_API_KEY=SG.xxxxxxxxxxxxx

# SMTP
SMTP_HOST=smtp.gmail.com
SMTP_USER=tu@email.com
SMTP_PASS=tu_password

# Slack
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/xxx/yyy/zzz
```

## 📊 Rate Limiting
- **Límite:** 3 mensajes por minuto por IP
- **Ventana:** 60 segundos
- **Storage:** En memoria (se reinicia al reiniciar el servidor)

Para producción, considerar:
- Redis para rate limiting distribuido
- Upstash Rate Limit
- Vercel KV

## 🛡️ Seguridad Implementada
- ✅ Validación de email con regex
- ✅ Sanitización de inputs (remove `<>`)
- ✅ Honeypot field oculto
- ✅ Rate limiting por IP
- ✅ Límites de longitud (10-1000 chars)
- ✅ CORS headers automáticos (Next.js)

## 🧪 Testing

### cURL
```bash
curl -X POST http://localhost:3000/api/widget-message \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","message":"Este es un mensaje de prueba"}'
```

### Postman/Insomnia
```json
POST /api/widget-message
Content-Type: application/json

{
  "email": "test@example.com",
  "message": "Este es un mensaje de prueba desde Postman"
}
```

## 📝 Respuestas

### Éxito (200)
```json
{
  "success": true,
  "message": "Mensaje recibido correctamente"
}
```

### Error de validación (400)
```json
{
  "error": "El mensaje debe tener al menos 10 caracteres"
}
```

### Rate limit excedido (429)
```json
{
  "error": "Demasiadas solicitudes. Por favor, intenta más tarde."
}
```

### Error del servidor (500)
```json
{
  "error": "Error interno del servidor"
}
```

## 🚀 Próximos Pasos

1. Elegir un servicio de email (Resend recomendado)
2. Instalar dependencia: `npm install resend`
3. Agregar API key a `.env.local`
4. Descomentar código de envío en `route.ts`
5. Probar en desarrollo
6. Configurar dominio verificado
7. Desplegar a producción

