'use client'

import { TalentoHero } from '@/components/servicios/talento/TalentoHero'
import { TalentoInsightSection } from '@/components/servicios/talento/TalentoInsightSection'
import { TalentoDeliverablesAndCTA } from '@/components/servicios/talento/TalentoDeliverablesAndCTA'

export default function TalentoPage() {
  return (
    <main className="min-h-screen">
      <TalentoHero />
      <TalentoInsightSection />
      <TalentoDeliverablesAndCTA />
    </main>
  )
}
