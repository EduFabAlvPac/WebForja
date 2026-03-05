/**
 * Iconos Lucide para el Centro de Conocimiento
 * Reemplazo de emojis por iconos modernos
 */

import {
  Compass,
  Settings,
  DollarSign,
  Users,
  Cpu,
  Bot,
  BarChart3,
  Target,
  Flame,
  Pin,
  ClipboardList,
  Wallet,
  Map,
  type LucideIcon,
} from 'lucide-react'
import type { CategoriaSlug } from '@/types/conocimiento'

export const CATEGORIA_ICON: Record<CategoriaSlug, LucideIcon> = {
  estrategia: Compass,
  operaciones: Settings,
  finanzas: DollarSign,
  talento: Users,
  tecnologia: Cpu,
  'ia-automatizacion': Bot,
  datos: BarChart3,
  'experiencia-cliente': Target,
}

export const IconoTendencias = Flame
export const IconoDestacado = Pin

/** Clave de icono para herramientas (coincide con nombre en data/herramientas) */
export const HERRAMIENTA_ICON: Record<string, LucideIcon> = {
  ClipboardList,
  DollarSign,
  Target,
  Users,
  BarChart3,
  Bot,
  Wallet,
  Map,
}
