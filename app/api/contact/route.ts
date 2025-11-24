import { NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations/contact'
import { emailService } from '@/lib/email/service'
import { getContactEmailTemplate, getContactConfirmationTemplate } from '@/lib/email/templates/contact'
import config from '@/lib/config'

// URL del Google Apps Script
const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbzbnqizy8aR20Nm-OX3jPYLIKApgi6i2UCTg7rb9ysuaCrbqzw4cHzVUJNbsZEiovQ/exec'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validation = contactFormSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: validation.error.errors },
        { status: 400 }
      )
    }

    const data = validation.data

    // Capturar IP del usuario
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'No capturada'

    // 1. Enviar datos a Google Sheets
    try {
      const formData = new URLSearchParams({
        action: 'contact_form',
        nombre: data.nombre,
        email: data.email,
        telefono: data.telefono || '',
        empresa: data.empresa || '',
        servicio: data.servicio || '',
        mensaje: data.mensaje,
        ip: ip
      })

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString()
      })

      if (!response.ok) {
        console.error('Error guardando en Google Sheets:', await response.text())
      } else {
        const result = await response.json()
        console.log('✅ Datos guardados en Google Sheets:', result)
      }
    } catch (sheetsError) {
      console.error('Error conectando con Google Sheets:', sheetsError)
      // Continuar aunque falle el guardado en Sheets
    }

    // 2. Enviar email al equipo (OPCIONAL - Google Apps Script ya lo hace)
    try {
      await emailService.send({
        to: config.contact.email,
        subject: `Nuevo contacto de ${data.nombre}${data.empresa ? ` - ${data.empresa}` : ''}`,
        html: getContactEmailTemplate(data),
        text: `
Nuevo contacto recibido:

Nombre: ${data.nombre}
Email: ${data.email}
${data.telefono ? `Teléfono: ${data.telefono}` : ''}
${data.empresa ? `Empresa: ${data.empresa}` : ''}
${data.servicio ? `Servicio de interés: ${data.servicio}` : ''}

Mensaje:
${data.mensaje}
        `.trim(),
      })
    } catch (emailError) {
      console.error('Error enviando email al equipo:', emailError)
      // No retornar error al cliente, pero loggear
    }

    // 3. Enviar email de confirmación al usuario (OPCIONAL - Google Apps Script ya lo hace)
    try {
      await emailService.send({
        to: data.email,
        subject: 'Gracias por contactar a Forja Digital - AE',
        html: getContactConfirmationTemplate(data.nombre),
        text: `
Hola ${data.nombre},

Gracias por contactarnos. Hemos recibido tu mensaje y nuestro equipo lo revisará a la brevedad.

Nos pondremos en contacto contigo dentro de las próximas 24 horas hábiles.

Saludos,
Equipo Forja Digital - AE
        `.trim(),
      })
    } catch (emailError) {
      console.error('Error enviando confirmación:', emailError)
      // No retornar error al cliente
    }

    return NextResponse.json(
      { 
        message: 'Mensaje enviado exitosamente. Te contactaremos pronto.', 
        success: true 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error en contact API:', error)
    return NextResponse.json(
      { error: 'Error al procesar la solicitud. Por favor, intenta nuevamente.' },
      { status: 500 }
    )
  }
}

