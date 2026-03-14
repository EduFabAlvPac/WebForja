/**
 * Redirige a la herramienta de Evaluación de Madurez (TestMadurezEmpresarial).
 */
import { redirect } from 'next/navigation'
import config from '@/lib/config'

export default function LocaleFlujoEvaluacionPage() {
  redirect(config.evaluacionMadurez.url)
}
