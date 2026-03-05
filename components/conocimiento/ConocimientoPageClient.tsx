'use client'

import { useState, useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { ConocimientoHero } from './ConocimientoHero'
import { ArticuloDestacado } from './ArticuloDestacado'
import { ArticulosGrid } from './ArticulosGrid'
import { HerramientasDescargables } from './HerramientasDescargables'
import { NewsletterSection } from './NewsletterSection'
import { ConocimientoCTA } from './ConocimientoCTA'
import { ARTICULOS } from '@/data/articulos'
import { HERRAMIENTAS } from '@/data/herramientas'
import type { Articulo } from '@/types/conocimiento'
import type { CategoriaSlug } from '@/types/conocimiento'
import type { DescargaFormValues } from '@/lib/validations/descarga'
import type { NewsletterFormValues } from '@/lib/validations/newsletter'
import { useToast } from '@/components/ui/use-toast'

const INICIAL = 9

export function ConocimientoPageClient() {
  const pathname = usePathname()
  const basePath = pathname.startsWith('/co/') || pathname.startsWith('/cl/') || pathname.startsWith('/pe/') || pathname.startsWith('/ec/')
    ? '/' + pathname.split('/')[1]
    : ''
  const [categoriaActiva, setCategoriaActiva] = useState<CategoriaSlug | 'todos'>('todos')
  const [busqueda, setBusqueda] = useState('')
  const [articulosFiltrados, setArticulosFiltrados] = useState<Articulo[]>(ARTICULOS.filter((a) => !a.destacado))
  const [cargaMas, setCargaMas] = useState(INICIAL)
  const { toast } = useToast()

  useEffect(() => {
    const filtrados = ARTICULOS.filter((a) => {
      if (a.destacado) return false
      const matchCategoria =
        categoriaActiva === 'todos' || a.categoria === categoriaActiva
      const matchBusqueda =
        busqueda === '' ||
        a.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
        a.extracto.toLowerCase().includes(busqueda.toLowerCase()) ||
        a.tags.some((t) => t.toLowerCase().includes(busqueda.toLowerCase()))
      return matchCategoria && matchBusqueda
    })
    setArticulosFiltrados(filtrados)
    setCargaMas(INICIAL)
  }, [categoriaActiva, busqueda])

  const articuloDestacado = ARTICULOS.find((a) => a.destacado)

  const handleDescargar = useCallback(
    async (data: DescargaFormValues, herramientaId: string) => {
      try {
        const res = await fetch('/api/descarga', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...data, herramientaId }),
        })
        const json = await res.json()
        if (!res.ok) throw new Error(json.message || 'Error al descargar')
        const herramienta = HERRAMIENTAS.find((h) => h.id === herramientaId)
        if (herramienta?.archivoUrl) {
          window.open(herramienta.archivoUrl, '_blank', 'noopener,noreferrer')
        }
        toast({ title: 'Descarga iniciada', description: 'Revisa tu email.' })
      } catch (e) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: e instanceof Error ? e.message : 'No se pudo completar la descarga.',
        })
        throw e
      }
    },
    [toast]
  )

  const handleNewsletter = useCallback(
    async (data: NewsletterFormValues) => {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.message || 'Error al suscribirse')
      toast({ title: '¡Gracias!', description: 'Revisa tu email para confirmar.' })
    },
    [toast]
  )

  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]">
      <ConocimientoHero
        categoriaActiva={categoriaActiva}
        setCategoriaActiva={setCategoriaActiva}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />

      {articuloDestacado && <ArticuloDestacado articulo={articuloDestacado} basePath={basePath} />}

      <ArticulosGrid
        articulosFiltrados={articulosFiltrados}
        cargaMas={cargaMas}
        onCargarMas={() => setCargaMas((c) => c + INICIAL)}
        basePath={basePath}
      />

      <HerramientasDescargables herramientas={HERRAMIENTAS} onDescargar={handleDescargar} />

      <NewsletterSection onSubmit={handleNewsletter} />

      <ConocimientoCTA basePath={basePath} />
    </div>
  )
}
