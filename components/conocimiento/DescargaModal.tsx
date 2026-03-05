'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { descargaFormSchema, type DescargaFormValues } from '@/lib/validations/descarga'
import type { Herramienta } from '@/types/conocimiento'

interface DescargaModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  herramienta: Herramienta | null
  onDescargar: (data: DescargaFormValues, herramientaId: string) => Promise<void>
}

export function DescargaModal({
  open,
  onOpenChange,
  herramienta,
  onDescargar,
}: DescargaModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<DescargaFormValues>({
    resolver: zodResolver(descargaFormSchema),
  })

  const handleClose = () => {
    reset()
    onOpenChange(false)
  }

  const onSubmit = async (data: DescargaFormValues) => {
    if (!herramienta) return
    await onDescargar(data, herramienta.id)
    handleClose()
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Descargar: {herramienta?.nombre}</DialogTitle>
          <DialogDescription>
            Completa tus datos para descargar esta herramienta gratuita. Te enviaremos el archivo
            por email.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="descarga-nombre">Nombre</Label>
            <Input
              id="descarga-nombre"
              placeholder="Tu nombre"
              {...register('nombre')}
              className="mt-1"
            />
            {errors.nombre && (
              <p className="mt-1 text-sm text-red-500">{errors.nombre.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="descarga-email">Email</Label>
            <Input
              id="descarga-email"
              type="email"
              placeholder="tu@empresa.com"
              {...register('email')}
              className="mt-1"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="descarga-empresa">Empresa</Label>
            <Input
              id="descarga-empresa"
              placeholder="Nombre de tu empresa"
              {...register('empresa')}
              className="mt-1"
            />
            {errors.empresa && (
              <p className="mt-1 text-sm text-red-500">{errors.empresa.message}</p>
            )}
          </div>
          <div className="flex gap-3 pt-2">
            <Button type="button" variant="outline" onClick={handleClose} className="flex-1">
              Cancelar
            </Button>
            <Button type="submit" disabled={isSubmitting} className="flex-1">
              {isSubmitting ? 'Descargando...' : 'Descargar gratis'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
