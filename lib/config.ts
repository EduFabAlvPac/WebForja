/**
 * Configuración centralizada de la aplicación
 * Todas las variables de entorno deben ser accedidas desde aquí
 */

export const config = {
  app: {
    name: process.env.NEXT_PUBLIC_APP_NAME || 'Forja Digital - AE',
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://forjadigital.co',
    env: process.env.NODE_ENV || 'development',
  },
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@forjadigital.co',
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+57 300 123 4567',
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '573001234567',
  },
  social: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com/company/forja-digital',
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://facebook.com/forjadigital',
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com/forjadigital',
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/forjadigital',
  },
  email: {
    service: process.env.EMAIL_SERVICE || 'RESEND',
    resend: {
      apiKey: process.env.RESEND_API_KEY || '',
    },
    sendgrid: {
      apiKey: process.env.SENDGRID_API_KEY || '',
      fromEmail: process.env.SENDGRID_FROM_EMAIL || '',
    },
    smtp: {
      host: process.env.SMTP_HOST || '',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      user: process.env.SMTP_USER || '',
      password: process.env.SMTP_PASSWORD || '',
      fromEmail: process.env.SMTP_FROM_EMAIL || '',
    },
  },
  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',
    gtmId: process.env.NEXT_PUBLIC_GTM_ID || '',
  },
  security: {
    rateLimit: {
      maxRequests: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '10'),
      windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '60000'),
    },
  },
} as const

export default config


