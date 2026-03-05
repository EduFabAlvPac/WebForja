'use client'

import { GobiernoHero } from '@/components/servicios/gobierno/GobiernoHero'
import { CostOfChaosSection } from '@/components/servicios/gobierno/CostOfChaosSection'
import { DeliverablesAndCTA } from '@/components/servicios/gobierno/DeliverablesAndCTA'

export default function GobiernoPage() {
  return (
    <main className="min-h-screen">
      <GobiernoHero />
      <CostOfChaosSection />
      <DeliverablesAndCTA />
    </main>
  )
}
