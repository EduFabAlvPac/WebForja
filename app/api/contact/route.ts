import { NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  nombre: z.string().min(2, 'El nombre es requerido'),
  email: z.string().email('Email inválido'),
  telefono: z.string().optional(),
  empresa: z.string().optional(),
  servicio: z.string().optional(),
  mensaje: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validation = contactSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: validation.error.errors },
        { status: 400 }
      )
    }

    const { nombre, email, telefono, empresa, servicio, mensaje } = validation.data

    // TODO: Integrar con servicio de email (SendGrid, Resend, etc.)
    console.log('Nuevo contacto:', { nombre, email, telefono, empresa, servicio, mensaje })

    // Simulación de envío exitoso
    // En producción, aquí irá la lógica real de envío de email

    return NextResponse.json(
      { message: 'Mensaje enviado exitosamente', success: true },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error en contact API:', error)
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    )
  }
}

