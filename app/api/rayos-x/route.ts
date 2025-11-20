import { NextResponse } from 'next/server'
import { z } from 'zod'

interface Answer {
  questionId: number
  value: number
  dimension: string
}

const rayosXSchema = z.object({
  answers: z.record(z.number()),
  email: z.string().email('Email inválido').optional().or(z.literal('')),
  nombre: z.string().optional(),
})

type RayosXRequest = z.infer<typeof rayosXSchema>

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validation = rayosXSchema.safeParse(body)

    if (!validation.success) {
       return NextResponse.json(
        { error: 'Datos inválidos', details: validation.error.errors },
        { status: 400 }
      )
    }

    const { answers, email, nombre } = validation.data

    if (!answers || Object.keys(answers).length === 0) {
      return NextResponse.json(
        { error: 'No se recibieron respuestas' },
        { status: 400 }
      )
    }

    // Calcular resultados
    const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0)
    const maxScore = Object.keys(answers).length * 4
    const scorePercentage = (totalScore / maxScore) * 100

    // Determinar nivel de madurez
    let maturityLevel = ''
    let recommendations: string[] = []

    if (scorePercentage < 20) {
      maturityLevel = 'Inicial'
      recommendations = [
        'Definir una estrategia digital clara',
        'Evaluar y actualizar infraestructura tecnológica',
        'Capacitar al equipo en herramientas digitales básicas'
      ]
    } else if (scorePercentage < 40) {
      maturityLevel = 'Emergente'
      recommendations = [
        'Documentar y optimizar procesos clave',
        'Implementar herramientas de colaboración',
        'Desarrollar plan de transformación digital'
      ]
    } else if (scorePercentage < 60) {
      maturityLevel = 'Intermedio'
      recommendations = [
        'Automatizar procesos repetitivos',
        'Implementar analítica de datos',
        'Fortalecer cultura de innovación'
      ]
    } else if (scorePercentage < 80) {
      maturityLevel = 'Avanzado'
      recommendations = [
        'Escalar iniciativas digitales exitosas',
        'Implementar inteligencia artificial',
        'Optimizar customer experience digital'
      ]
    } else {
      maturityLevel = 'Líder Digital'
      recommendations = [
        'Mantener ventaja competitiva digital',
        'Explorar tecnologías emergentes',
        'Compartir mejores prácticas'
      ]
    }

    const results = {
      totalScore,
      maxScore,
      scorePercentage: Math.round(scorePercentage),
      maturityLevel,
      recommendations,
      timestamp: new Date().toISOString()
    }

    // TODO: Generar PDF con resultados (usar jsPDF o similar)
    // TODO: Enviar email con resultados
    // TODO: Guardar en base de datos para analytics

    console.log('Resultados Rayos X:', { email, nombre, results })

    return NextResponse.json({
      success: true,
      results,
      message: 'Diagnóstico completado exitosamente'
    })
  } catch (error) {
    console.error('Error en rayos-x API:', error)
    return NextResponse.json(
      { error: 'Error al procesar el diagnóstico' },
      { status: 500 }
    )
  }
}

