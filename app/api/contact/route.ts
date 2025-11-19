import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nombre, email, telefono, empresa, servicio, mensaje } = body

    // Validación básica
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

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

