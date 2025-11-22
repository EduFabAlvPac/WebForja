import { NextResponse } from 'next/server'
import { rayosXFormSchema } from '@/lib/validations/rayos-x'
import { emailService } from '@/lib/email/service'
import config from '@/lib/config'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validation = rayosXFormSchema.safeParse(body)

    if (!validation.success) {
       return NextResponse.json(
        { error: 'Datos inválidos', details: validation.error.errors },
        { status: 400 }
      )
    }

    const { answers, email, nombre, empresa } = validation.data

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

    // Enviar email con resultados si se proporcionó email
    if (email && nombre) {
      try {
        await emailService.send({
          to: email,
          subject: `Tu Diagnóstico Rayos X Empresarial - Nivel: ${maturityLevel}`,
          html: getRayosXEmailTemplate({ nombre, empresa, results }),
          text: `
Hola ${nombre},

Gracias por completar el diagnóstico Rayos X Empresarial.

Tu nivel de madurez digital es: ${maturityLevel} (${results.scorePercentage}%)

Recomendaciones:
${recommendations.map((r, i) => `${i + 1}. ${r}`).join('\n')}

Agenda una consulta gratuita con nuestro equipo para profundizar en estos resultados.

Saludos,
Equipo Forja Digital - AE
          `.trim(),
        })

        // Notificar al equipo
        await emailService.send({
          to: config.contact.email,
          subject: `Nuevo diagnóstico Rayos X - ${nombre}${empresa ? ` (${empresa})` : ''}`,
          html: `
<h2>Nuevo Diagnóstico Completado</h2>
<p><strong>Nombre:</strong> ${nombre}</p>
${empresa ? `<p><strong>Empresa:</strong> ${empresa}</p>` : ''}
<p><strong>Email:</strong> ${email}</p>
<p><strong>Nivel de Madurez:</strong> ${maturityLevel} (${results.scorePercentage}%)</p>
<p><strong>Puntuación:</strong> ${totalScore}/${maxScore}</p>
<p><strong>Fecha:</strong> ${new Date().toLocaleString('es-CO')}</p>
          `,
          text: `Nuevo diagnóstico: ${nombre} - ${maturityLevel} (${results.scorePercentage}%)`,
        })
      } catch (emailError) {
        console.error('Error enviando emails:', emailError)
        // No retornar error, el diagnóstico ya está completo
      }
    }

    // Log para analytics (en producción, guardar en base de datos)
    console.log('Resultados Rayos X:', { email, nombre, empresa, results })

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

function getRayosXEmailTemplate({ nombre, empresa, results }: any): string {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tu Diagnóstico Rayos X Empresarial</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #2B3E5C 0%, #7E57C2 100%); padding: 40px; text-align: center; border-radius: 12px 12px 0 0;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">
                Rayos X Empresarial
              </h1>
              <p style="color: #ffffff; margin: 10px 0 0 0; opacity: 0.9;">
                Tu Diagnóstico de Madurez Digital
              </p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <p style="color: #2B3E5C; font-size: 18px; margin: 0 0 20px 0;">
                Hola ${nombre},
              </p>
              
              <p style="color: #666; line-height: 1.6; margin: 0 0 30px 0;">
                Gracias por completar nuestro diagnóstico Rayos X Empresarial${empresa ? ` para ${empresa}` : ''}. 
                Aquí están tus resultados:
              </p>
              
              <!-- Results Card -->
              <div style="background-color: #f9f9f9; border-radius: 8px; padding: 30px; margin-bottom: 30px; text-align: center;">
                <div style="font-size: 48px; font-weight: bold; color: #F47D3B; margin-bottom: 10px;">
                  ${results.scorePercentage}%
                </div>
                <div style="font-size: 24px; font-weight: bold; color: #2B3E5C; margin-bottom: 10px;">
                  ${results.maturityLevel}
                </div>
                <p style="color: #666; margin: 0;">
                  Puntuación: ${results.totalScore}/${results.maxScore}
                </p>
              </div>
              
              <!-- Recommendations -->
              <h2 style="color: #2B3E5C; margin: 30px 0 20px 0; font-size: 20px;">
                Recomendaciones Personalizadas
              </h2>
              <ol style="color: #666; line-height: 1.8; margin: 0; padding-left: 20px;">
                ${results.recommendations.map((rec: string) => `<li>${rec}</li>`).join('')}
              </ol>
              
              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 40px 0 0 0;">
                <tr>
                  <td align="center">
                    <a href="https://forjadigital.co/contacto" 
                       style="display: inline-block; padding: 15px 30px; background-color: #F47D3B; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600;">
                      Agenda tu Consulta Gratuita
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #2B3E5C; padding: 30px; text-align: center; border-radius: 0 0 12px 12px;">
              <p style="color: #ffffff; margin: 0 0 10px 0; font-size: 16px; font-weight: 600;">
                Forja Digital - AE
              </p>
              <p style="color: rgba(255,255,255,0.8); margin: 0 0 15px 0; font-size: 14px;">
                Juntos Forjamos el Cambio que Impulsa tu Futuro
              </p>
              <p style="color: rgba(255,255,255,0.8); margin: 0; font-size: 14px;">
                📧 info@forjadigital.co | 📱 +57 300 123 4567
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}

