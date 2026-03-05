'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { newsletterFormSchema, type NewsletterFormValues } from '@/lib/validations/newsletter'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface NewsletterSectionProps {
  onSubmit: (data: NewsletterFormValues) => Promise<void>
}

export function NewsletterSection({ onSubmit }: NewsletterSectionProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterFormSchema),
  })

  return (
    <section className="py-16 md:py-24 bg-brand-orange">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 max-w-5xl mx-auto"
        >
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Inteligencia empresarial
              <br />
              directo a tu inbox.
            </h2>
            <p className="text-white text-base opacity-95">
              Cada semana: un análisis, una herramienta práctica y una tendencia que importa para tu
              PYME. +1,200 líderes empresariales en LATAM ya la reciben.
            </p>
          </div>

          <div className="md:w-1/2">
            {isSubmitSuccessful ? (
              <p className="text-white font-semibold">¡Gracias! Revisa tu email para confirmar.</p>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="tu@empresa.com"
                  {...register('email')}
                  className="flex-1 h-12 px-4 rounded-xl bg-white/95 border-0 text-slate-900 placeholder:text-slate-500"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-12 px-6 bg-brand-blue-anchor text-white hover:bg-brand-blue-corp shrink-0"
                >
                  {isSubmitting ? 'Enviando...' : 'Quiero recibirla →'}
                </Button>
              </form>
            )}
            <p className="text-white/90 text-xs mt-3">
              📩 Un correo por semana · Sin spam · Cancela cuando quieras
            </p>
            {errors.email && (
              <p className="text-white/90 text-sm mt-2">{errors.email.message}</p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
