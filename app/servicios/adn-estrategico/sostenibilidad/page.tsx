'use client'

import { SostenibilidadHero } from '@/components/servicios/sostenibilidad/SostenibilidadHero'
import { MythBusterSection } from '@/components/servicios/sostenibilidad/MythBusterSection'
import { SostenibilidadDeliverablesAndCTA } from '@/components/servicios/sostenibilidad/SostenibilidadDeliverablesAndCTA'

export default function SostenibilidadPage() {
  return (
    <main className="min-h-screen">
      <SostenibilidadHero />
      <MythBusterSection />
      <SostenibilidadDeliverablesAndCTA />
    </main>
  )
}
