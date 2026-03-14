/**
 * Utilidades para integración CRM / Google Sheets LEADS
 * Mapeo de reto principal a servicio sugerido ForjaConsulting
 */

export function mapRetoPrincipalToServicio(reto: string): string {
  const map: Record<string, string> = {
    sin_estrategia: 'ADN Estratégico — Estrategia',
    desalineamiento: 'ADN Estratégico + Inteligencia Digital',
    financiero: 'Motor Operativo — Finanzas',
    brecha_digital: 'Inteligencia Digital — Estrategia Tecnológica',
    talento: 'Motor Operativo — Talento',
    clientes: 'Enfoque al Cliente — CX',
    normativo: 'ADN Estratégico — Gobierno',
    productividad: 'Motor Operativo — Operaciones',
    otro: 'Assessment General',
  }
  return map[reto] ?? 'Assessment General'
}
