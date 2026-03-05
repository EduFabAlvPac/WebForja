'use client'

import { FinanzasHero } from '@/components/servicios/finanzas/FinanzasHero'
import { FinanzasProblemSection } from '@/components/servicios/finanzas/FinanzasProblemSection'
import { FinanzasCTASection } from '@/components/servicios/finanzas/FinanzasCTASection'

export default function FinanzasPage() {
  return (
    <main className="min-h-screen">
      <FinanzasHero />
      <FinanzasProblemSection />
      <FinanzasCTASection />
    </main>
  )
}
