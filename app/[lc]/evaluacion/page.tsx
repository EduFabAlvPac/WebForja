/**
 * Redirige /{locale}/evaluacion a la herramienta de Evaluación de Madurez (TestMadurezEmpresarial).
 */
import { redirect } from 'next/navigation'
import config from '@/lib/config'

export default function LocaleEvaluacionPage() {
  redirect(config.evaluacionMadurez.url)
}
