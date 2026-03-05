import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

/**
 * API Route: POST /api/contacto
 * 
 * Recibe datos del formulario de contacto, valida con Zod,
 * sanitiza y procesa (placeholder: console.log)
 */

// Schema de validación del servidor (más estricto)
const contactApiSchema = z.object({
  nombre: z
    .string()
    .min(2, 'Nombre inválido')
    .max(100)
    .transform((val) => val.trim()),
  
  email: z
    .string()
    .email('Email inválido')
    .transform((val) => val.toLowerCase().trim()),
  
  empresa: z
    .string()
    .min(2, 'Empresa inválida')
    .max(150)
    .transform((val) => val.trim()),
  
  reto: z
    .string()
    .min(10, 'Mensaje muy corto')
    .max(2000)
    .transform((val) => val.trim()),
  
  aceptaPoliticas: z.boolean().refine((val) => val === true, {
    message: 'Debe aceptar las políticas',
  }),
})

type ContactApiPayload = z.infer<typeof contactApiSchema>

/**
 * Sanitiza texto para prevenir XSS básico
 */
function sanitizeText(text: string): string {
  return text
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

export async function POST(request: NextRequest) {
  try {
    // Parse body
    const body = await request.json()

    // Validate with Zod
    const result = contactApiSchema.safeParse(body)

    if (!result.success) {
      const firstError = result.error.errors[0]
      return NextResponse.json(
        { 
          success: false, 
          message: firstError?.message || 'Datos inválidos',
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      )
    }

    const data: ContactApiPayload = result.data

    // Sanitize all text fields
    const sanitizedData = {
      nombre: sanitizeText(data.nombre),
      email: data.email, // Email already validated
      empresa: sanitizeText(data.empresa),
      reto: sanitizeText(data.reto),
      aceptaPoliticas: data.aceptaPoliticas,
      timestamp: new Date().toISOString(),
      source: 'web-contact-form',
    }

    // =====================================================
    // PLACEHOLDER: Aquí iría la integración con:
    // - Google Sheets API
    // - CRM (HubSpot, Salesforce, etc.)
    // - Email notification service
    // - Database
    // =====================================================
    
    console.log('[API /contacto] Nuevo lead recibido:', {
      ...sanitizedData,
      reto: sanitizedData.reto.substring(0, 50) + '...', // Truncate for logs
    })

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensaje recibido correctamente',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[API /contacto] Error:', error)

    // Handle JSON parse errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { success: false, message: 'Formato de datos inválido' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, message: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}

// Reject other methods
export async function GET() {
  return NextResponse.json(
    { success: false, message: 'Método no permitido' },
    { status: 405 }
  )
}

