/**
 * Layout del flujo de evaluación.
 * Solo renderiza el contenido de las rutas /evaluacion/* sin añadir botones ni CTAs extra.
 */
export default function EvaluacionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section data-evaluacion-flow="true">{children}</section>
}
