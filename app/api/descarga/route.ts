/**
 * API: POST /api/descarga
 * Captura lead y permite descarga de herramienta.
 */

import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const descargaApiSchema = z.object({
  nombre: z.string().min(2).max(100).transform((v) => v.trim()),
  email: z.string().email().transform((v) => v.toLowerCase().trim()),
  empresa: z.string().min(2).max(150).transform((v) => v.trim()),
  herramientaId: z.string().min(1),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const result = descargaApiSchema.safeParse(body)

    if (!result.success) {
      const firstError = result.error.errors[0]
      return NextResponse.json(
        { success: false, message: firstError?.message || 'Datos inválidos' },
        { status: 400 }
      )
    }

    const { nombre, email, empresa, herramientaId } = result.data

    // TODO: Registrar lead en CRM / base de datos / email
    console.log('[API descarga] Lead capturado:', {
      nombre,
      email,
      empresa,
      herramientaId,
      fecha: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      message: 'Lead registrado correctamente',
    })
  } catch {
    return NextResponse.json(
      { success: false, message: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
