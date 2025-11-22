import { ContactFormData } from '@/lib/validations/contact'

export function getContactEmailTemplate(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nuevo Contacto - Forja Digital</title>
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
                Nuevo Contacto
              </h1>
              <p style="color: #ffffff; margin: 10px 0 0 0; opacity: 0.9;">
                Forja Digital - AE
              </p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom: 30px;">
                    <h2 style="color: #2B3E5C; margin: 0 0 20px 0; font-size: 20px;">
                      Información del Contacto
                    </h2>
                  </td>
                </tr>
                
                <tr>
                  <td style="padding: 15px 0; border-bottom: 1px solid #e0e0e0;">
                    <table width="100%">
                      <tr>
                        <td width="30%" style="color: #666; font-weight: 600;">Nombre:</td>
                        <td style="color: #2B3E5C;">${data.nombre}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <tr>
                  <td style="padding: 15px 0; border-bottom: 1px solid #e0e0e0;">
                    <table width="100%">
                      <tr>
                        <td width="30%" style="color: #666; font-weight: 600;">Email:</td>
                        <td style="color: #2B3E5C;">
                          <a href="mailto:${data.email}" style="color: #F47D3B; text-decoration: none;">
                            ${data.email}
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                ${data.telefono ? `
                <tr>
                  <td style="padding: 15px 0; border-bottom: 1px solid #e0e0e0;">
                    <table width="100%">
                      <tr>
                        <td width="30%" style="color: #666; font-weight: 600;">Teléfono:</td>
                        <td style="color: #2B3E5C;">${data.telefono}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                ` : ''}
                
                ${data.empresa ? `
                <tr>
                  <td style="padding: 15px 0; border-bottom: 1px solid #e0e0e0;">
                    <table width="100%">
                      <tr>
                        <td width="30%" style="color: #666; font-weight: 600;">Empresa:</td>
                        <td style="color: #2B3E5C;">${data.empresa}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                ` : ''}
                
                ${data.servicio ? `
                <tr>
                  <td style="padding: 15px 0; border-bottom: 1px solid #e0e0e0;">
                    <table width="100%">
                      <tr>
                        <td width="30%" style="color: #666; font-weight: 600;">Servicio:</td>
                        <td style="color: #2B3E5C;">${data.servicio}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                ` : ''}
                
                <tr>
                  <td style="padding: 20px 0;">
                    <h3 style="color: #666; margin: 0 0 10px 0; font-size: 16px; font-weight: 600;">
                      Mensaje:
                    </h3>
                    <p style="color: #2B3E5C; line-height: 1.6; margin: 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #F47D3B; border-radius: 4px;">
                      ${data.mensaje.replace(/\n/g, '<br>')}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9f9f9; padding: 30px; text-align: center; border-radius: 0 0 12px 12px;">
              <p style="color: #666; margin: 0; font-size: 14px;">
                Este email fue enviado desde el formulario de contacto de
                <a href="https://forjadigital.co" style="color: #F47D3B; text-decoration: none;">
                  forjadigital.co
                </a>
              </p>
              <p style="color: #999; margin: 10px 0 0 0; font-size: 12px;">
                ${new Date().toLocaleString('es-CO', { 
                  dateStyle: 'full', 
                  timeStyle: 'short',
                  timeZone: 'America/Bogota'
                })}
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

export function getContactConfirmationTemplate(nombre: string): string {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gracias por Contactarnos - Forja Digital</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #F47D3B 0%, #4DD0E1 100%); padding: 40px; text-align: center; border-radius: 12px 12px 0 0;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">
                ¡Gracias por Contactarnos!
              </h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <p style="color: #2B3E5C; font-size: 18px; margin: 0 0 20px 0;">
                Hola ${nombre},
              </p>
              
              <p style="color: #666; line-height: 1.6; margin: 0 0 20px 0;">
                Hemos recibido tu mensaje y nuestro equipo lo revisará a la brevedad. 
                Nos pondremos en contacto contigo dentro de las próximas 24 horas hábiles.
              </p>
              
              <p style="color: #666; line-height: 1.6; margin: 0 0 30px 0;">
                En Forja Digital - AE estamos comprometidos con tu transformación digital y 
                trabajaremos juntos para forjar el cambio que impulsa tu futuro.
              </p>
              
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 30px 0;">
                <tr>
                  <td align="center">
                    <a href="https://forjadigital.co" 
                       style="display: inline-block; padding: 15px 30px; background-color: #F47D3B; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600;">
                      Visitar Nuestro Sitio Web
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
                Transformando PYMEs mediante Arquitectura Empresarial
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


