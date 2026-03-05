import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const diagnosticoSchema = z.object({
  nombre: z.string().min(3, 'Nombre inválido').max(100).transform((v) => v.trim()),
  empresa: z.string().min(1, 'Empresa requerida').max(150).transform((v) => v.trim()),
  email: z.string().email('Email inválido').transform((v) => v.toLowerCase().trim()),
  pais: z.string().min(1, 'País requerido'),
  tamanoEquipo: z.string().min(1, 'Tamaño requerido'),
  reto: z.string().max(300).optional().transform((v) => (v ? v.trim() : undefined)),
})

type Payload = z.infer<typeof diagnosticoSchema>

function sanitize(text: string): string {
  return text
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const result = diagnosticoSchema.safeParse(body)

    if (!result.success) {
      const first = result.error.errors[0]
      return NextResponse.json(
        { success: false, message: first?.message || 'Datos inválidos', errors: result.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const data: Payload = result.data
    const sanitized = {
      ...data,
      nombre: sanitize(data.nombre),
      empresa: sanitize(data.empresa),
      reto: data.reto ? sanitize(data.reto) : undefined,
      timestamp: new Date().toISOString(),
      source: 'diagnostico-estrategico',
    }

    // Integración: Nodemailer / Resend / CRM según tu setup
    console.log('[API /diagnostico] Lead recibido:', {
      ...sanitized,
      reto: sanitized.reto?.substring(0, 50),
    })

    await new Promise((r) => setTimeout(r, 400))

    return NextResponse.json(
      { success: true, message: 'Solicitud recibida. Te contactaremos en menos de 24 horas.' },
      { status: 200 }
    )
  } catch (e) {
    console.error('[API /diagnostico] Error:', e)
    if (e instanceof SyntaxError) {
      return NextResponse.json({ success: false, message: 'Formato inválido' }, { status: 400 })
    }
    return NextResponse.json({ success: false, message: 'Error interno del servidor' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ success: false, message: 'Método no permitido' }, { status: 405 })
}
