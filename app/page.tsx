import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { MetodologiaSection } from '@/components/sections/MetodologiaSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <MetodologiaSection />
      
      {/* CTA Section */}
      <section className="section-padding gradient-cta">
        <div className="container-custom text-center">
          <h2 className="text-h2-mobile md:text-h2-desktop text-white mb-6">
            ¿Listo para Transformar tu Empresa?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Descubre el nivel de madurez digital de tu organización con nuestro diagnóstico gratuito
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/rayos-x-empresarial"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-purple font-semibold rounded-button hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              🔍 Rayos X Empresarial Gratuito
            </a>
            <a
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-orange text-white font-semibold rounded-button hover:bg-brand-orange-dark transition-all transform hover:scale-105 shadow-lg"
            >
              Habla con un Forjador
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

