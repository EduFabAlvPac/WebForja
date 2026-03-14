/**
 * Redirige a la herramienta de Evaluación de Madurez (TestMadurezEmpresarial).
 * El formulario "Antes de comenzar" está integrado en la propia herramienta.
 */
import { redirect } from 'next/navigation'
import config from '@/lib/config'

export default function AntesDeComenzarRedirectPage() {
  redirect(config.evaluacionMadurez.url)
}
