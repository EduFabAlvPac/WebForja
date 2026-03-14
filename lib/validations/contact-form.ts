import { z } from 'zod'

/**
 * Schema para formulario de contacto CRM (Google Sheets LEADS)
 * Nombres de campo alineados con la hoja LEADS
 */
export const contactFormSchema = z
  .object({
    // Sección 1 — Tu Empresa
    nombreEmpresa: z.string().min(2, 'Nombre de empresa requerido'),
    sector: z.string().min(1, 'Selecciona un sector'),
    tamano: z.string().min(1, 'Selecciona el tamaño'),
    pais: z.string().min(1, 'Selecciona un país'),
    ciudad: z.string().min(2, 'Ciudad requerida'),
    retoPrincipal: z.string().min(1, 'Selecciona tu mayor reto'),
    otroReto: z.string().optional(),
    // Sección 2 — Tus Datos
    nombreContacto: z.string().min(2, 'Nombre requerido'),
    cargo: z.string().min(2, 'Cargo requerido'),
    emailCorporativo: z.string().email('Email corporativo válido'),
    whatsapp: z.string().min(7, 'WhatsApp con código de país'),
    momentoContacto: z.string().min(1, 'Indica cuándo podemos contactarte'),
    aceptaPolitica: z.boolean(),
  })
  .refine((data) => data.aceptaPolitica === true, {
    message: 'Debes aceptar la política de datos',
    path: ['aceptaPolitica'],
  })

export type ContactFormValues = z.infer<typeof contactFormSchema>

export const contactFormDefaults: ContactFormValues = {
  nombreEmpresa: '',
  sector: '',
  tamano: '',
  pais: '',
  ciudad: '',
  retoPrincipal: '',
  otroReto: '',
  nombreContacto: '',
  cargo: '',
  emailCorporativo: '',
  whatsapp: '',
  momentoContacto: '',
  aceptaPolitica: false,
}

/** Opciones para sector (valor → label) */
export const SECTOR_OPTIONS: { value: string; label: string }[] = [
  { value: 'comercio_retail', label: 'Comercio / Retail' },
  { value: 'manufactura', label: 'Manufactura y Agroindustria' },
  { value: 'servicios_profesionales', label: 'Servicios Profesionales y Consultoría' },
  { value: 'tecnologia_digital', label: 'Tecnología e Innovación Digital' },
  { value: 'salud_bienestar', label: 'Salud y Bienestar' },
  { value: 'educacion', label: 'Educación y Formación' },
  { value: 'construccion', label: 'Construcción e Inmobiliario' },
  { value: 'agro', label: 'Agro y Agricultura' },
  { value: 'logistica', label: 'Logística y Transporte' },
  { value: 'turismo', label: 'Turismo y Hotelería' },
  { value: 'financiero_fintech', label: 'Financiero / Fintech' },
  { value: 'otro', label: 'Otro sector' },
]

/** Opciones para tamaño */
export const TAMANO_OPTIONS: { value: string; label: string }[] = [
  { value: 'micro', label: 'Micro (1–10 empleados)' },
  { value: 'pequena', label: 'Pequeña (11–50 empleados)' },
  { value: 'mediana', label: 'Mediana (51–200 empleados)' },
  { value: 'grande', label: 'Grande (200+ empleados)' },
]

/** Opciones para país */
export const PAIS_OPTIONS: { value: string; label: string }[] = [
  { value: 'colombia', label: '🇨🇴 Colombia' },
  { value: 'ecuador', label: '🇪🇨 Ecuador' },
  { value: 'peru', label: '🇵🇪 Perú' },
  { value: 'chile', label: '🇨🇱 Chile' },
  { value: 'mexico', label: '🇲🇽 México' },
  { value: 'panama', label: '🇵🇦 Panamá' },
  { value: 'costa_rica', label: '🇨🇷 Costa Rica' },
  { value: 'otro_latam', label: '🌎 Otro país LATAM' },
]

/** Opciones para reto principal */
export const RETO_OPTIONS: { value: string; label: string }[] = [
  { value: 'sin_estrategia', label: 'No tenemos una estrategia clara y ejecutable' },
  { value: 'desalineamiento', label: 'La tecnología no conecta con nuestros procesos' },
  { value: 'financiero', label: 'Flujo de caja, rentabilidad o acceso a crédito' },
  { value: 'brecha_digital', label: 'No hemos podido digitalizar nuestras operaciones' },
  { value: 'talento', label: 'Atraer, retener o desarrollar talento clave' },
  { value: 'clientes', label: 'Perdemos clientes y no sabemos cómo retenerlos' },
  { value: 'normativo', label: 'La carga regulatoria nos desborda' },
  { value: 'productividad', label: 'Operamos de forma manual y con baja productividad' },
  { value: 'otro', label: 'Otro reto — descríbelo abajo' },
]

/** Opciones para momento de contacto (grid 2x2) */
export const MOMENTO_OPTIONS: { value: string; label: string }[] = [
  { value: 'urgente', label: '⚡ Lo antes posible' },
  { value: 'semana', label: '📅 Esta semana' },
  { value: 'mes', label: '🗓 En el próximo mes' },
  { value: 'explorando', label: '🔍 Solo estoy explorando' },
]
