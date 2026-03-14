/**
 * Redirige a la herramienta de Evaluación de Madurez Empresarial (TestMadurezEmpresarial).
 * La herramienta vive en la carpeta TestMadurezEmpresarial y se invoca vía NEXT_PUBLIC_EVALUACION_MADUREZ_URL.
 */
import { redirect } from 'next/navigation'
import config from '@/lib/config'

export default function EvaluacionRedirectPage() {
  redirect(config.evaluacionMadurez.url)
}
