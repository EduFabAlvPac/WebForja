import { z } from 'zod'

export const descargaFormSchema = z.object({
  nombre: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre es demasiado largo'),
  email: z.string().email('Ingresa un email válido'),
  empresa: z
    .string()
    .min(2, 'El nombre de la empresa debe tener al menos 2 caracteres')
    .max(150, 'El nombre de la empresa es demasiado largo'),
})

export type DescargaFormValues = z.infer<typeof descargaFormSchema>
