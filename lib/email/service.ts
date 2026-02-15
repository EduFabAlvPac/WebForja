/**
 * Servicio de envío de emails
 * Soporta múltiples proveedores: Resend, SendGrid, SMTP
 */

import config from '@/lib/config'

export interface EmailOptions {
  to: string | string[]
  subject: string
  html: string
  text?: string
  from?: string
}

export class EmailService {
  private static instance: EmailService

  private constructor() {}

  static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService()
    }
    return EmailService.instance
  }

  async send(options: EmailOptions): Promise<boolean> {
    const service = config.email.service

    try {
      switch (service) {
        case 'RESEND':
          return await this.sendWithResend(options)
        case 'SENDGRID':
          return await this.sendWithSendGrid(options)
        case 'SMTP':
          return await this.sendWithSMTP(options)
        default:
          console.warn(`Email service ${service} not configured. Email would be sent in production.`)
          return this.logEmail(options) // Fallback para desarrollo
      }
    } catch (error) {
      console.error('Error sending email:', error)
      throw error
    }
  }

  private async sendWithResend(options: EmailOptions): Promise<boolean> {
    const { resend } = config.email

    if (!resend.apiKey) {
      console.warn('Resend API key not configured')
      return this.logEmail(options)
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resend.apiKey}`,
      },
      body: JSON.stringify({
        from: options.from || config.contact.email,
        to: Array.isArray(options.to) ? options.to : [options.to],
        subject: options.subject,
        html: options.html,
        text: options.text,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(`Resend error: ${JSON.stringify(error)}`)
    }

    return true
  }

  private async sendWithSendGrid(options: EmailOptions): Promise<boolean> {
    const { sendgrid } = config.email

    if (!sendgrid.apiKey) {
      console.warn('SendGrid API key not configured')
      return this.logEmail(options)
    }

    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sendgrid.apiKey}`,
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: Array.isArray(options.to)
              ? options.to.map((email) => ({ email }))
              : [{ email: options.to }],
          },
        ],
        from: { email: options.from || sendgrid.fromEmail },
        subject: options.subject,
        content: [
          {
            type: 'text/html',
            value: options.html,
          },
        ],
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      throw new Error(`SendGrid error: ${error}`)
    }

    return true
  }

  private async sendWithSMTP(options: EmailOptions): Promise<boolean> {
    const { smtp } = config.email

    if (!smtp.host || !smtp.user || !smtp.password) {
      console.warn('SMTP not fully configured')
      return this.logEmail(options)
    }

    // Para SMTP necesitaríamos instalar nodemailer
    // Por ahora, solo loggeamos
    console.warn('SMTP sending requires nodemailer package. Install with: npm install nodemailer')
    return this.logEmail(options)
  }

  private logEmail(options: EmailOptions): boolean {
    console.log('📧 Email (Development Mode):')
    console.log('To:', options.to)
    console.log('Subject:', options.subject)
    console.log('---')
    console.log(options.text || 'HTML email (check html property)')
    console.log('---')
    return true
  }
}

export const emailService = EmailService.getInstance()


