/**
 * Tipos para el Centro de Conocimiento ForjaConsulting
 * @module types/conocimiento
 */

export type CategoriaSlug =
  | 'estrategia'
  | 'operaciones'
  | 'finanzas'
  | 'talento'
  | 'tecnologia'
  | 'ia-automatizacion'
  | 'datos'
  | 'experiencia-cliente'

export interface Autor {
  nombre: string
  cargo?: string
  empresa?: string
  avatarUrl?: string
}

export interface Articulo {
  id: string
  titulo: string
  extracto: string
  contenido: string
  categoria: CategoriaSlug
  tags: string[]
  nivel: 'basico' | 'intermedio' | 'avanzado'
  tiempoLectura: number
  autor: Autor
  fechaPublicacion: Date
  imagenUrl: string
  destacado: boolean
  slug: string
}

export type HerramientaFormato = 'xlsx' | 'pdf' | 'docx'

export interface Herramienta {
  id: string
  nombre: string
  descripcion: string
  categoria: CategoriaSlug
  formato: HerramientaFormato
  archivoUrl: string
  icono: string
}

export interface CategoriaConocimiento {
  slug: CategoriaSlug | 'todos'
  label: string
  emoji: string
}
