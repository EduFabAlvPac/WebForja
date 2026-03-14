'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, Send, AlertCircle, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { useToast } from '@/components/ui/use-toast'
import {
  contactFormSchema,
  type ContactFormValues,
  contactFormDefaults,
  SECTOR_OPTIONS,
  TAMANO_OPTIONS,
  PAIS_OPTIONS,
  RETO_OPTIONS,
  MOMENTO_OPTIONS,
} from '@/lib/validations/contact-form'
import { mapRetoPrincipalToServicio } from '@/lib/crm-utils'
import { ProviderLegalNote } from '@/components/forms/ProviderLegalNote'

const ENDPOINT = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_ENDPOINT

interface ContactFormProps {
  className?: string
  /** Para enlace a política de datos localizado (ej. /co/legal/politica-datos) */
  policyHref?: string
}

function SectionSeparator({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 my-6">
      <div className="h-px flex-1 bg-slate-200" />
      <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-[#27325A] text-white">
        {label}
      </span>
      <div className="h-px flex-1 bg-slate-200" />
    </div>
  )
}

export function ContactForm({ className, policyHref = '/politica-privacidad' }: ContactFormProps) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields },
    reset,
    setValue,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: contactFormDefaults,
    mode: 'onBlur',
  })

  const retoPrincipal = watch('retoPrincipal')

  const onSubmit = async (data: ContactFormValues) => {
    if (!ENDPOINT) {
      toast({
        variant: 'destructive',
        title: 'Error de configuración',
        description: 'No está configurado el endpoint de envío. Contacta al administrador.',
      })
      return
    }

    setIsSubmitting(true)
    setSuccess(false)

    const payload = {
      timestamp: new Date().toISOString(),
      nombreEmpresa: data.nombreEmpresa,
      sector: data.sector,
      tamano: data.tamano,
      pais: data.pais,
      ciudad: data.ciudad,
      retoPrincipal: data.retoPrincipal,
      otroReto: data.otroReto ?? '',
      servicioSugeridoForja: mapRetoPrincipalToServicio(data.retoPrincipal),
      nombreContacto: data.nombreContacto,
      cargo: data.cargo,
      emailCorporativo: data.emailCorporativo,
      whatsapp: data.whatsapp,
      momentoContacto: data.momentoContacto,
      estadoLead: 'NUEVO',
      fuenteFormulario: 'Portal_Empresarial',
    }

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const errText = await res.text()
        throw new Error(errText || `Error ${res.status}`)
      }

      setSuccess(true)
      reset(contactFormDefaults)
    } catch (err) {
      console.error('[ContactForm]', err)
      toast({
        variant: 'destructive',
        title: 'Error al enviar',
        description: err instanceof Error ? err.message : 'No se pudo enviar. Intenta de nuevo.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn('rounded-2xl border-2 border-green-200 bg-green-50 p-8 text-center', className)}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white"
        >
          <CheckCircle2 className="h-8 w-8" />
        </motion.div>
        <p className="text-lg font-semibold text-slate-800">
          ¡Recibido! Un Forjador te contactará en menos de 24 horas.
        </p>
      </motion.div>
    )
  }

  const inputClass = (hasError: boolean) =>
    cn(
      'rounded-xl border-2 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400',
      'focus:outline-none focus:ring-2 focus:ring-[#33487A] focus:border-[#33487A]',
      hasError && 'border-red-500 focus:ring-red-500 focus:border-red-500'
    )

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn('space-y-4', className)} noValidate>
      {/* SECCIÓN 1 — Tu Empresa */}
      <SectionSeparator label="Tu Empresa" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Label htmlFor="nombreEmpresa" className="text-slate-700">
            Nombre de la empresa <span className="text-red-500">*</span>
          </Label>
          <Input
            id="nombreEmpresa"
            placeholder="Ej: TechStart SAS, Distribuidora Andina Ltda."
            className={cn('mt-1', inputClass(!!(errors.nombreEmpresa && touchedFields.nombreEmpresa)))}
            {...register('nombreEmpresa')}
          />
          {errors.nombreEmpresa && touchedFields.nombreEmpresa && (
            <p className="mt-1 flex items-center gap-1 text-sm text-red-600">
              <AlertCircle className="h-4 w-4" />
              {errors.nombreEmpresa.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="sector" className="text-slate-700">
            Sector <span className="text-red-500">*</span>
          </Label>
          <Select
            id="sector"
            className={cn('mt-1', inputClass(!!(errors.sector && touchedFields.sector)))}
            {...register('sector')}
          >
            <option value="">Selecciona...</option>
            {SECTOR_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </Select>
          {errors.sector && touchedFields.sector && (
            <p className="mt-1 flex items-center gap-1 text-sm text-red-600">
              <AlertCircle className="h-4 w-4" />
              {errors.sector.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="tamano" className="text-slate-700">
            Tamaño <span className="text-red-500">*</span>
          </Label>
          <Select
            id="tamano"
            className={cn('mt-1', inputClass(!!(errors.tamano && touchedFields.tamano)))}
            {...register('tamano')}
          >
            <option value="">Selecciona...</option>
            {TAMANO_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </Select>
          {errors.tamano && touchedFields.tamano && (
            <p className="mt-1 flex items-center gap-1 text-sm text-red-600">
              <AlertCircle className="h-4 w-4" />
              {errors.tamano.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="pais" className="text-slate-700">
            País <span className="text-red-500">*</span>
          </Label>
          <Select
            id="pais"
            className={cn('mt-1', inputClass(!!(errors.pais && touchedFields.pais)))}
            {...register('pais')}
          >
            <option value="">Selecciona...</option>
            {PAIS_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </Select>
          {errors.pais && touchedFields.pais && (
            <p className="mt-1 flex items-center gap-1 text-sm text-red-600">
              <AlertCircle className="h-4 w-4" />
              {errors.pais.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="ciudad" className="text-slate-700">
            Ciudad <span className="text-red-500">*</span>
          </Label>
          <Input
            id="ciudad"
            placeholder="Ej: Bogotá, Medellín, Lima"
            className={cn('mt-1', inputClass(!!(errors.ciudad && touchedFields.ciudad)))}
            {...register('ciudad')}
          />
          {errors.ciudad && touchedFields.ciudad && (
            <p className="mt-1 flex items-center gap-1 text-sm text-red-600">
              <AlertCircle className="h-4 w-4" />
              {errors.ciudad.message}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <Label className="text-slate-700">
            ¿Cuál es tu mayor reto empresarial? <span className="text-red-500">*</span>
          </Label>
          <Select
            id="retoPrincipal"
            className={cn('mt-1', inputClass(!!(errors.retoPrincipal && touchedFields.retoPrincipal)))}
            {...register('retoPrincipal')}
          >
            <option value="">Selecciona...</option>
            {RETO_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </Select>
          {errors.retoPrincipal && touchedFields.retoPrincipal && (
            <p className="mt-1 flex items-center gap-1 text-sm text-red-600">
              <AlertCircle className="h-4 w-4" />
              {errors.retoPrincipal.message}
            </p>
          )}
        </div>
      </div>

      <AnimatePresence>
        {retoPrincipal === 'otro' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <Label htmlFor="otroReto" className="text-slate-700">
              Describe tu reto
            </Label>
            <Textarea
              id="otroReto"
              placeholder="Cuéntanos brevemente cuál es el mayor desafío..."
              rows={3}
              className={cn('mt-1', inputClass(false))}
              {...register('otroReto')}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* SECCIÓN 2 — Tus Datos */}
      <SectionSeparator label="Tus Datos" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="nombreContacto" className="text-slate-700">
            Nombre completo <span className="text-red-500">*</span>
          </Label>
          <Input
            id="nombreContacto"
            placeholder="Tu nombre completo"
            className={cn('mt-1', inputClass(!!(errors.nombreContacto && touchedFields.nombreContacto)))}
            {...register('nombreContacto')}
          />
          {errors.nombreContacto && touchedFields.nombreContacto && (
            <p className="mt-1 flex items-center gap-1 text-sm text-red-600">
              <AlertCircle className="h-4 w-4" />
              {errors.nombreContacto.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="cargo" className="text-slate-700">
            Cargo <span className="text-red-500">*</span>
          </Label>
          <Input
            id="cargo"
            placeholder="Ej: CEO, Gerente General, Director de Operaciones"
            className={cn('mt-1', inputClass(!!(errors.cargo && touchedFields.cargo)))}
            {...register('cargo')}
          />
          {errors.cargo && touchedFields.cargo && (
            <p className="mt-1 flex items-center gap-1 text-sm text-red-600">
              <AlertCircle className="h-4 w-4" />
              {errors.cargo.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="emailCorporativo" className="text-slate-700">
            Email corporativo <span className="text-red-500">*</span>
          </Label>
          <Input
            id="emailCorporativo"
            type="email"
            placeholder="tu@empresa.com"
            className={cn('mt-1', inputClass(!!(errors.emailCorporativo && touchedFields.emailCorporativo)))}
            {...register('emailCorporativo')}
          />
          {errors.emailCorporativo && touchedFields.emailCorporativo && (
            <p className="mt-1 flex items-center gap-1 text-sm text-red-600">
              <AlertCircle className="h-4 w-4" />
              {errors.emailCorporativo.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="whatsapp" className="text-slate-700">
            WhatsApp <span className="text-red-500">*</span>
          </Label>
          <Input
            id="whatsapp"
            type="tel"
            placeholder="+57 312 2415413"
            className={cn('mt-1', inputClass(!!(errors.whatsapp && touchedFields.whatsapp)))}
            {...register('whatsapp')}
          />
          {errors.whatsapp && touchedFields.whatsapp && (
            <p className="mt-1 flex items-center gap-1 text-sm text-red-600">
              <AlertCircle className="h-4 w-4" />
              {errors.whatsapp.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <Label className="block text-slate-700 mb-2">
          ¿Cuándo podemos contactarte? <span className="text-red-500">*</span>
        </Label>
        <div className="grid grid-cols-2 gap-2">
          {MOMENTO_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setValue('momentoContacto', opt.value, { shouldValidate: true })}
              className={cn(
                'rounded-xl border-2 px-4 py-3 text-left text-sm font-medium transition-colors',
                watch('momentoContacto') === opt.value
                  ? 'border-[#EE8028] bg-[#EE8028]/10 text-[#27325A]'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
        {errors.momentoContacto && touchedFields.momentoContacto && (
          <p className="mt-1 flex items-center gap-1 text-sm text-red-600">
            <AlertCircle className="h-4 w-4" />
            {errors.momentoContacto.message}
          </p>
        )}
      </div>

      <div className="border-t border-slate-200 pt-4">
        <div className="flex items-start gap-3">
          <input
            id="aceptaPolitica"
            type="checkbox"
            className={cn(
              'mt-1 h-4 w-4 rounded border-slate-300 text-[#EE8028] focus:ring-[#EE8028] focus:ring-offset-0',
              errors.aceptaPolitica && 'border-red-500'
            )}
            {...register('aceptaPolitica')}
          />
          <Label htmlFor="aceptaPolitica" className="text-sm text-slate-600 leading-relaxed cursor-pointer">
            Acepto la{' '}
            <Link
              href={policyHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EE8028] hover:text-[#EC8E48] underline font-medium"
            >
              Política de Tratamiento de Datos Personales
            </Link>{' '}
            y autorizo a ForjaConsulting a contactarme, de acuerdo con la Ley 1581 de 2012 y normativas
            aplicables en mi país. <span className="text-red-500">*</span>
          </Label>
        </div>
        {errors.aceptaPolitica && (
          <p className="mt-2 flex items-center gap-1 text-sm text-red-600 ml-7">
            <AlertCircle className="h-4 w-4" />
            {errors.aceptaPolitica.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl border-0 bg-[#EE8028] py-6 font-semibold text-white shadow-lg shadow-[#EE8028]/30 hover:bg-[#EC8E48] hover:shadow-[#EE8028]/40 focus-visible:ring-2 focus-visible:ring-[#EE8028] focus-visible:ring-offset-2"
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

      <ProviderLegalNote variant="compact" className="mt-2" />
    </form>
  )
}
