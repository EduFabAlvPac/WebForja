import { NextRequest, NextResponse } from 'next/server'

/**
 * API Route: POST /api/vitals
 * 
 * Recibe métricas de Web Vitals desde el cliente
 * Por ahora solo hace console.log, pero puede extenderse para:
 * - Guardar en base de datos
 * - Enviar a servicio de analytics (DataDog, New Relic, etc.)
 * - Alertas si métricas están en "poor"
 */

interface VitalsPayload {
  name: 'CLS' | 'FCP' | 'FID' | 'INP' | 'LCP' | 'TTFB'
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  id: string
  page: string
  timestamp: number
}

export async function POST(request: NextRequest) {
  try {
    const data: VitalsPayload = await request.json()
    
    // Validar payload básico
    if (!data.name || typeof data.value !== 'number') {
      return NextResponse.json(
        { success: false, message: 'Invalid payload' },
        { status: 400 }
      )
    }

    // Log en servidor (visible en Vercel logs)
    console.log('[Web Vitals]', {
      metric: data.name,
      value: data.value,
      rating: data.rating,
      page: data.page,
      timestamp: new Date(data.timestamp).toISOString(),
    })

    // TODO: Guardar en base de datos o enviar a servicio de analytics
    // Ejemplos:
    // - await db.vitals.create({ data })
    // - await datadog.gauge(`web.vitals.${data.name}`, data.value)
    // - if (data.rating === 'poor') await slack.alert(`Poor ${data.name} on ${data.page}`)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[API /vitals] Error:', error)
    
    return NextResponse.json(
      { success: false, message: 'Internal error' },
      { status: 500 }
    )
  }
}

// Rechazar otros métodos
export async function GET() {
  return NextResponse.json(
    { success: false, message: 'Method not allowed' },
    { status: 405 }
  )
}

