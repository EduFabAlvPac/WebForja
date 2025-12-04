import { z } from 'zod'

/**
 * Lista de dominios de email gratuitos comunes
 * El formulario rechazará estos dominios para fomentar emails corporativos
 */
const FREE_EMAIL_DOMAINS = [
  'gmail.com',
  'hotmail.com',
  'outlook.com',
  'yahoo.com',
  'yahoo.es',
  'live.com',
  'msn.com',
  'icloud.com',
  'aol.com',
  'protonmail.com',
  'mail.com',
  'gmx.com',
  'yandex.com',
  'zoho.com',
]

/**
 * Validación de email corporativo
 */
const isCorpEmail = (email: string): boolean => {
  const domain = email.split('@')[1]?.toLowerCase()
  return domain ? !FREE_EMAIL_DOMAINS.includes(domain) : false
}

/**
 * Schema de validación para el formulario de contacto simplificado
 * 5 campos + consentimiento + país
 */
export const contactFormSchema = z.object({
  nombre: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre es demasiado largo'),
  
  email: z
    .string()
    .email('Ingresa un email válido')
    .refine(isCorpEmail, {
      message: 'Por favor usa tu email corporativo (no Gmail, Hotmail, etc.)',
    }),
  
  empresa: z
    .string()
    .min(2, 'El nombre de la empresa debe tener al menos 2 caracteres')
    .max(150, 'El nombre de la empresa es demasiado largo'),
  
  companyId: z
    .string()
    .max(50, 'ID fiscal demasiado largo')
    .optional()
    .or(z.literal('')),
  
  reto: z
    .string()
    .min(10, 'Cuéntanos más sobre tu reto (mínimo 10 caracteres)')
    .max(2000, 'El mensaje es demasiado largo'),
  
  aceptaPoliticas: z.boolean().refine((val) => val === true, {
    message: 'Debes aceptar la Política de Tratamiento de Datos para continuar',
  }),
  
  // Campos internos
  countryCode: z.string().optional(), // Código del país (co, cl, pe, ec)
  
  // Honeypot field - debe estar vacío
  website: z.string().max(0, 'Campo inválido').optional(),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>

/**
 * Valores iniciales del formulario
 */
export const contactFormDefaults: ContactFormValues = {
  nombre: '',
  email: '',
  empresa: '',
  companyId: '',
  reto: '',
  aceptaPoliticas: false,
  countryCode: '',
  website: '',
}

