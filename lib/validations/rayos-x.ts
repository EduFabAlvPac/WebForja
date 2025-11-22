import { z } from 'zod'

export const rayosXFormSchema = z.object({
  answers: z.record(z.number().min(0).max(4)),
  email: z.string().email('Email inválido').optional().or(z.literal('')),
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres').optional().or(z.literal('')),
  empresa: z.string().optional().or(z.literal('')),
})

export type RayosXFormData = z.infer<typeof rayosXFormSchema>

export function validateRayosXForm(data: RayosXFormData): Partial<Record<keyof RayosXFormData, string>> {
  const result = rayosXFormSchema.safeParse(data)
  
  if (!result.success) {
    const errors: Partial<Record<keyof RayosXFormData, string>> = {}
    result.error.errors.forEach((error) => {
      const field = error.path[0] as keyof RayosXFormData
      errors[field] = error.message
    })
    return errors
  }
  
  // Validar que todas las preguntas estén respondidas
  const answersCount = Object.keys(data.answers).length
  if (answersCount === 0) {
    return { answers: 'Debes responder todas las preguntas' }
  }
  
  return {}
}


