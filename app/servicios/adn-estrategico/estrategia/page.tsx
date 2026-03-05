'use client'

import { ServiceHero } from '@/components/servicios/estrategia/ServiceHero'
import { ProblemDiagnosticSection } from '@/components/servicios/estrategia/ProblemDiagnosticSection'
import { ResultsCTASection } from '@/components/servicios/estrategia/ResultsCTASection'

export default function EstrategiaPage() {
  return (
    <main className="min-h-screen">
      <ServiceHero />
      <ProblemDiagnosticSection />
      <ResultsCTASection />
    </main>
  )
}
