'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, Send, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'
import {
  contactFormSchema,
  ContactFormValues,
  contactFormDefaults,
} from '@/lib/validations/contact-form'
import { CompanyIdField } from '@/components/forms/CompanyIdField'
import { ProviderLegalNote } from '@/components/forms/ProviderLegalNote'
import { useCountryOptional } from '@/context/CountryProvider'
import { trackFormSubmit } from '@/lib/analytics'

/**
 * ContactForm - Formulario de contacto con React Hook Form + Zod
 * 
 * Features:
 * - 4 campos + consentimiento legal
 * - Validación en tiempo real
 * - Honeypot antispam
 * - Redirección a /gracias
 * - Estados loading/success/error
 * - Toasts shadcn
 */

interface ContactFormProps {
  className?: string
}

export function ContactForm({ className }: ContactFormProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const country = useCountryOptional()

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    reset,
    setValue,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: contactFormDefaults,
    mode: 'onBlur', // Validación al perder foco
  })

  // Guardar código de país cuando cambia
  useEffect(() => {
    if (country) {
      setValue('countryCode', country.country.code)
    }
  }, [country, setValue])

  const onSubmit = async (data: ContactFormValues) => {
    // Honeypot check
    if (data.website && data.website.length > 0) {
      // Bot detected - silently fail
      console.warn('[ContactForm] Honeypot triggered')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: data.nombre,
          email: data.email,
          empresa: data.empresa,
          companyId: data.companyId,
          reto: data.reto,
          aceptaPoliticas: data.aceptaPoliticas,
          countryCode: data.countryCode || country?.country?.code || 'default',
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || 'Error al enviar el formulario')
      }

      // Success
      trackFormSubmit('contact', true)
      
      toast({
        title: '¡Mensaje enviado!',
        description: 'Te contactaremos pronto.',
      })

      reset()
      router.push('/gracias')
    } catch (error) {
      console.error('[ContactForm] Error:', error)
      trackFormSubmit('contact', false)
      
      toast({
        variant: 'destructive',
        title: 'Error al enviar',
        description: error instanceof Error ? error.message : 'Intenta nuevamente',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn('space-y-6', className)}
      noValidate
    >
      {/* Nombre */}
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-slate-700 mb-2">
          Nombre completo <span className="text-red-500">*</span>
        </label>
        <Input
          id="nombre"
          type="text"
          placeholder="Tu nombre"
          autoComplete="name"
          aria-invalid={errors.nombre ? 'true' : 'false'}
          aria-describedby={errors.nombre ? 'nombre-error' : undefined}
          className={cn(
            errors.nombre && touchedFields.nombre && 'border-red-500 focus-visible:ring-red-500'
          )}
          {...register('nombre')}
        />
        {errors.nombre && (
          <p id="nombre-error" className="mt-1 text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            {errors.nombre.message}
          </p>
        )}
      </div>

      {/* Email corporativo */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
          Email corporativo <span className="text-red-500">*</span>
        </label>
        <Input
          id="email"
          type="email"
          placeholder="tu@empresa.com"
          autoComplete="email"
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={cn(
            errors.email && touchedFields.email && 'border-red-500 focus-visible:ring-red-500'
          )}
          {...register('email')}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Empresa */}
      <div>
        <label htmlFor="empresa" className="block text-sm font-medium text-slate-700 mb-2">
          Empresa <span className="text-red-500">*</span>
        </label>
        <Input
          id="empresa"
          type="text"
          placeholder="Nombre de tu empresa"
          autoComplete="organization"
          aria-invalid={errors.empresa ? 'true' : 'false'}
          aria-describedby={errors.empresa ? 'empresa-error' : undefined}
          className={cn(
            errors.empresa && touchedFields.empresa && 'border-red-500 focus-visible:ring-red-500'
          )}
          {...register('empresa')}
        />
        {errors.empresa && (
          <p id="empresa-error" className="mt-1 text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            {errors.empresa.message}
          </p>
        )}
      </div>

      {/* ID Fiscal de la Empresa (localizado por país) */}
      <CompanyIdField
        {...register('companyId')}
        error={errors.companyId?.message}
        touched={touchedFields.companyId}
        required={false}
      />

      {/* Tu reto */}
      <div>
        <label htmlFor="reto" className="block text-sm font-medium text-slate-700 mb-2">
          ¿Cuál es tu mayor reto empresarial? <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="reto"
          placeholder="Cuéntanos brevemente qué desafío enfrenta tu empresa..."
          rows={4}
          aria-invalid={errors.reto ? 'true' : 'false'}
          aria-describedby={errors.reto ? 'reto-error' : undefined}
          className={cn(
            errors.reto && touchedFields.reto && 'border-red-500 focus-visible:ring-red-500'
          )}
          {...register('reto')}
        />
        {errors.reto && (
          <p id="reto-error" className="mt-1 text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            {errors.reto.message}
          </p>
        )}
      </div>

      {/* Honeypot - hidden from users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website (leave empty)</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register('website')}
        />
      </div>

      {/* Consentimiento Legal */}
      <div className="border-t border-slate-200 pt-4">
        <div className="flex items-start gap-3">
          <input
            id="aceptaPoliticas"
            type="checkbox"
            className={cn(
              'mt-1 h-4 w-4 rounded border-slate-300 text-forja-fire focus:ring-forja-fire focus:ring-offset-0',
              errors.aceptaPoliticas && 'border-red-500'
            )}
            aria-invalid={errors.aceptaPoliticas ? 'true' : 'false'}
            aria-describedby={errors.aceptaPoliticas ? 'politicas-error' : undefined}
            {...register('aceptaPoliticas')}
          />
          <label htmlFor="aceptaPoliticas" className="text-sm text-slate-600 leading-relaxed">
            Acepto la{' '}
            <a
              href="/politica-privacidad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-forja-fire hover:text-forja-fire/80 underline font-medium"
            >
              Política de Tratamiento de Datos
            </a>{' '}
            y autorizo el tratamiento de mis datos personales de acuerdo con la{' '}
            <a
              href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981"
              target="_blank"
              rel="noopener noreferrer"
              className="text-forja-fire hover:text-forja-fire/80 underline font-medium"
            >
              Ley 1581 de 2012
            </a>{' '}
            para fines de contacto comercial. <span className="text-red-500">*</span>
          </label>
        </div>
        {errors.aceptaPoliticas && (
          <p id="politicas-error" className="mt-2 text-sm text-red-600 ml-7 flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            {errors.aceptaPoliticas.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Enviar Mensaje
          </>
        )}
      </Button>

      {/* Leyenda Legal del Proveedor */}
      <ProviderLegalNote variant="compact" className="mt-2" />
    </form>
  )
}

