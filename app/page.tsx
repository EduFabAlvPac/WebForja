import { HeroSection } from '@/components/sections/HeroSection'
import { ClientLogosSection } from '@/components/sections/ClientLogosSection'
import { ThreePillarsSection } from '@/components/sections/ThreePillarsSection'
import { ProcessStepperSection } from '@/components/sections/ProcessStepperSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { PainPointsSection } from '@/components/sections/PainPointsSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { MetodologiaSection } from '@/components/sections/MetodologiaSection'
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection'
import { CTASection } from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <div id="hero">
        <HeroSection />
      </div>
      <div id="client-logos">
        <ClientLogosSection />
      </div>
      <div id="three-pillars">
        <ThreePillarsSection />
      </div>
      <div id="process-stepper">
        <ProcessStepperSection />
      </div>
      <div id="stats">
        <StatsSection />
      </div>
      <div id="pain-points">
        <PainPointsSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="metodologia">
        <MetodologiaSection />
      </div>
      <div id="case-studies">
        <CaseStudiesSection />
      </div>
      <div id="cta">
        <CTASection />
      </div>
    </>
  )
}

