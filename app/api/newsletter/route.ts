/**
 * API: POST /api/newsletter
 * Suscripción al boletín de inteligencia empresarial.
 */

import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const newsletterApiSchema = z.object({
  email: z.string().email().transform((v) => v.toLowerCase().trim()),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const result = newsletterApiSchema.safeParse(body)

    if (!result.success) {
      const firstError = result.error.errors[0]
      return NextResponse.json(
        { success: false, message: firstError?.message || 'Email inválido' },
        { status: 400 }
      )
    }

    const { email } = result.data

    // TODO: Registrar en Resend / Nodemailer / lista de suscriptores
    console.log('[API newsletter] Suscriptor nuevo:', {
      email,
      fecha: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      message: 'Suscripción registrada. Revisa tu email para confirmar.',
    })
  } catch {
    return NextResponse.json(
      { success: false, message: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
