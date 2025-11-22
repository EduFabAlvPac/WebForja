import { NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations/contact'
import { emailService } from '@/lib/email/service'
import { getContactEmailTemplate, getContactConfirmationTemplate } from '@/lib/email/templates/contact'
import config from '@/lib/config'

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

    // Enviar email al equipo
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

    // Enviar email de confirmación al usuario
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

