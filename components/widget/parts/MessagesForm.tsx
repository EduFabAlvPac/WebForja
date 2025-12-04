'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { motion, useReducedMotion } from 'framer-motion'
import { Send, CheckCircle2, Mail, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useToast } from '@/components/ui/use-toast'
import { useCountryOptional } from '@/context/CountryProvider'
import { trackFormSubmit } from '@/lib/analytics'

interface MessageFormData {
  email: string
  message: string
  countryCode?: string // Código del país del usuario
  _honeypot?: string // Anti-spam
}

export function MessagesForm() {
  const [submitted, setSubmitted] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const { toast } = useToast()
  const country = useCountryOptional()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<MessageFormData>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      message: '',
      countryCode: '',
      _honeypot: '',
    },
  })

  // Prellenar mensaje con saludo personalizado por país
  useEffect(() => {
    if (country) {
      setValue('countryCode', country.country.code)
      
      // Prellenar saludo al montar el componente
      const greeting = `Hola, les escribo desde ${country.country.name}. `
      setValue('message', greeting)
    }
  }, [country, setValue])

  const handleReset = () => {
    setSubmitted(false)
    reset()
    // Volver a prellenar saludo
    if (country) {
      const greeting = `Hola, les escribo desde ${country.country.name}. `
      setValue('message', greeting)
    }
  }

  const onSubmit = async (data: MessageFormData) => {
    try {
      // Anti-spam: honeypot check
      if (data._honeypot) {
        console.warn('Spam detected via honeypot')
        return
      }

      const response = await fetch('/api/widget-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          message: data.message,
          countryCode: data.countryCode || country?.country?.code || 'default',
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Error al enviar el mensaje')
      }

      // Success
      trackFormSubmit('widget_message', true)
      setSubmitted(true)
      reset()
      
      toast({
        title: '¡Mensaje enviado!',
        description: 'Te responderemos en menos de 24 horas hábiles.',
        variant: 'default',
      })
    } catch (error) {
      console.error('Error submitting message:', error)
      trackFormSubmit('widget_message', false)
      
      toast({
        title: 'Error al enviar',
        description: error instanceof Error ? error.message : 'Por favor, intenta de nuevo.',
        variant: 'destructive',
      })
    }
  }

  if (submitted) {
    return (
      <motion.div
        role="status"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
        className="flex h-full flex-col items-center justify-center gap-4 text-center p-6"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-3xl text-green-600">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <p className="text-lg font-semibold text-forja-navy">¡Mensaje en camino!</p>
        <p className="text-sm text-slate-500">
          Respuesta en menos de 24 horas hábiles.
        </p>
        <Button variant="outline" onClick={handleReset} className="w-full">
          Enviar otro mensaje
        </Button>
      </motion.div>
    )
  }

  return (
    <div className="flex flex-col gap-6 p-6 max-h-[520px] overflow-y-auto">
      <div className="space-y-1 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-forja-purple to-forja-teal text-white shadow-xl">
          <Mail className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-heading font-semibold text-forja-navy">Envíanos un mensaje</h3>
        <p className="text-xs text-slate-500">Respuesta en menos de 24h hábiles</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Honeypot field - hidden from users */}
        <input
          type="text"
          {...register('_honeypot')}
          tabIndex={-1}
          autoComplete="off"
          style={{
            position: 'absolute',
            left: '-9999px',
            width: '1px',
            height: '1px',
          }}
          aria-hidden="true"
        />

        {/* Email field */}
        <div className="space-y-2">
          <Label htmlFor="widget-email">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            id="widget-email"
            type="email"
            placeholder="tu@empresa.com"
            {...register('email', {
              required: 'El email es requerido',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email inválido',
              },
            })}
            className={`focus:ring-forja-teal focus:border-forja-teal ${
              errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''
            }`}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              id="email-error"
              className="text-xs text-red-600 flex items-center gap-1"
              role="alert"
            >
              <AlertCircle className="h-3 w-3" />
              {errors.email.message}
            </motion.p>
          )}
        </div>

        {/* Message field */}
        <div className="space-y-2">
          <Label htmlFor="widget-message">
            Mensaje <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="widget-message"
            placeholder="Cuéntanos cómo podemos ayudar a tu compañía"
            {...register('message', {
              required: 'El mensaje es requerido',
              minLength: {
                value: 10,
                message: 'El mensaje debe tener al menos 10 caracteres',
              },
              maxLength: {
                value: 1000,
                message: 'El mensaje no puede exceder 1000 caracteres',
              },
            })}
            rows={5}
            className={`resize-none focus:ring-forja-teal focus:border-forja-teal ${
              errors.message ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''
            }`}
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              id="message-error"
              className="text-xs text-red-600 flex items-center gap-1"
              role="alert"
            >
              <AlertCircle className="h-3 w-3" />
              {errors.message.message}
            </motion.p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          size="lg"
          className="w-full justify-center bg-gradient-to-r from-forja-purple to-forja-teal hover:from-forja-purple/90 hover:to-forja-teal/90"
        >
          {isSubmitting ? (
            <>
              <motion.div
                animate={shouldReduceMotion ? { rotate: 0 } : { rotate: 360 }}
                transition={
                  shouldReduceMotion
                    ? undefined
                    : { duration: 1, repeat: Infinity, ease: 'linear' }
                }
                className="mr-2 h-5 w-5 rounded-full border-2 border-white border-t-transparent"
              />
              Enviando...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Enviar mensaje
            </>
          )}
        </Button>

        <p className="text-xs text-center text-slate-500">
          Al enviar aceptas nuestra{' '}
          <a href="/politica-privacidad" className="text-forja-teal hover:underline">
            Política de Privacidad
          </a>
          .
        </p>
      </form>
    </div>
  )
}
