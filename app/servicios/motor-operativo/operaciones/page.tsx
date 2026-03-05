'use client'

import { OperacionesHero } from '@/components/servicios/operaciones/OperacionesHero'
import { OperativeDiagnosticSection } from '@/components/servicios/operaciones/OperativeDiagnosticSection'
import { OperacionesCTASection } from '@/components/servicios/operaciones/OperacionesCTASection'

export default function OperacionesPage() {
  return (
    <main className="min-h-screen">
      <OperacionesHero />
      <OperativeDiagnosticSection />
      <OperacionesCTASection />
    </main>
  )
}
