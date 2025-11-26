import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // URL del Google Apps Script
    const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL

    if (!scriptUrl) {
      console.error('GOOGLE_APPS_SCRIPT_URL no está configurada')
      return NextResponse.json(
        { error: 'Configuración del servidor incompleta' },
        { status: 500 }
      )
    }

    // Preparar datos para Google Sheets
    const feedbackData = {
      type: 'feedback', // Identificador para el script
      timestamp: data.timestamp,
      satisfaction_level: data.satisfaction_level,
      satisfaction_label: data.satisfaction_label,
      reason: data.reason,
      reason_text: data.reason_text,
      page_url: data.page_url,
      page_path: data.page_path,
      user_agent: data.user_agent,
      screen_resolution: data.screen_resolution,
      ip_address: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
      referrer: request.headers.get('referer') || 'direct',
    }

    // Enviar a Google Apps Script
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedbackData),
    })

    if (!response.ok) {
      throw new Error('Error al guardar en Google Sheets')
    }

    const result = await response.json()

    return NextResponse.json({
      success: true,
      message: 'Feedback guardado exitosamente',
      data: result,
    })
  } catch (error) {
    console.error('Error en API de feedback:', error)
    return NextResponse.json(
      { error: 'Error al procesar el feedback' },
      { status: 500 }
    )
  }
}

