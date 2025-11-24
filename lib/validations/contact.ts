import { z } from 'zod'

export const contactFormSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  telefono: z.string().min(10, 'Teléfono inválido').optional().or(z.literal('')),
  empresa: z.string().optional().or(z.literal('')),
  servicio: z.string().optional().or(z.literal('')),
  mensaje: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
  aceptaPoliticas: z.boolean().refine((val) => val === true, {
    message: 'Debes aceptar la Política de Privacidad para continuar',
  }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export function validateContactForm(data: ContactFormData): Partial<Record<keyof ContactFormData, string>> {
  const result = contactFormSchema.safeParse(data)
  
  if (!result.success) {
    const errors: Partial<Record<keyof ContactFormData, string>> = {}
    result.error.errors.forEach((error) => {
      const field = error.path[0] as keyof ContactFormData
      errors[field] = error.message
    })
    return errors
  }
  
  return {}
}


