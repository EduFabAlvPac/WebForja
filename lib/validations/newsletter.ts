import { z } from 'zod'

export const newsletterFormSchema = z.object({
  email: z.string().email('Ingresa un email válido'),
})

export type NewsletterFormValues = z.infer<typeof newsletterFormSchema>
