'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Lock, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { getHeroStats } from '@/lib/site-metrics'
import { trackCTAClick } from '@/lib/analytics'
import { useCountryOptional } from '@/context/CountryProvider'

const HERO_SLIDES = [
  {
    id: 1,
    headline: "¿Tu PYME Compite o Sobrevive?",
    subheadline: "Arquitectura Empresarial que Convierte tu Negocio en Líder de Mercado",
    tagline: "",
    description: "El 73% de las PYMEs en Latinoamérica fracasan por falta de alineamiento de estrategia con sus procesos y tecnología. Diseñamos el blueprint que integra estrategia, tecnología, procesos y personas para resultados medibles.",
    ctaPrimary: "Descubre tu Madurez Digital - GRATIS",
    ctaPrimaryLink: "/contacto",
    ctaSecondary: "Ver Casos de Transformación Real",
    ctaSecondaryLink: "/nosotros/testimonios",
    // Imagen impactante: PYME competitiva en acción
    backgroundImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80",
    backgroundAlt: "Equipo empresarial competitivo desarrollando estrategia de negocio",
    isGif: false,
    stats: [
      { value: "2 Países", label: "Reconocimiento Internacional" },
      { value: "+10", label: "Transformaciones Exitosas" },
      { value: "100%", label: "Satisfacción Garantizada" }
    ]
  },
  {
    id: 2,
    headline: "Arquitectos Empresariales",
    subheadline: "Especializados en PYMEs Latinoamericanas",
    tagline: "Metodología Probada. Resultados Medibles. Inversión Inteligente.",
    description: "Mientras otros consultores venden software o servicios genéricos, nosotros construimos la arquitectura estratégica que alinea TODA tu organización hacia objetivos de crecimiento sostenible.",
    ctaPrimary: "Agenda tu Diagnóstico Estratégico",
    ctaPrimaryLink: "/contacto",
    ctaSecondary: "Conoce a tu Arquitecto Forjador",
    ctaSecondaryLink: "/nosotros/equipo",
    // Imagen profesional: Arquitectos empresariales trabajando con cliente
    backgroundImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80",
    backgroundAlt: "Arquitectos empresariales desarrollando estrategia con equipo PYME",
    isGif: false,
    stats: getHeroStats()
  },
  {
    id: 3,
    headline: "Metodología FORJA®",
    subheadline: null,
    subheadlineJsx: (
      <>
        El Sistema de <span className="text-brand-orange font-bold">5 Fases</span> que Elimina el Caos
      </>
    ),
    tagline: "De la Estrategia a la Ejecución: Tu Roadmap Sin Improvisación",
    description: null,
    descriptionJsx: (
      <>
        <strong>F</strong>ijar → <strong>O</strong>rientar → <strong>R</strong>ediseñar → <strong>J</strong>ustificar → <strong>A</strong>compañar. Un enfoque sistemático donde cada fase genera entregables concretos, métricas claras y decisiones basadas en datos, no en intuición.
      </>
    ),
    ctaPrimary: "Solicita tu Evaluación de Madurez Empresarial",
    ctaPrimaryLink: "/contacto",
    ctaSecondary: "Descarga Guía: 5 Fases Explicadas",
    ctaSecondaryLink: "/contacto",
    // Imagen: Equipo trabajando en planificación estratégica y proceso
    backgroundImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80",
    backgroundAlt: "Equipo colaborando en planificación estratégica con metodología estructurada",
    isGif: false,
    stats: [
      { value: "5 Fases", label: "Cero Ambigüedad" },
      { value: "ROI", label: "Medible y Sostenible" },
      { value: "Expertos", label: "Certificados" }
    ]
  },
  {
    id: 4,
    headline: "Arquitectura Empresarial",
    subheadline: "que Multiplica tu Capacidad Competitiva",
    tagline: "Integramos Estrategia + Procesos + Tecnología + Talento en un Sistema Coherente de Crecimiento",
    description: "No vendemos 'soluciones' aisladas. Diseñamos ecosistemas empresariales donde cada decisión impulsa objetivos estratégicos y cada proceso potencia a tu equipo. El resultado: ventaja competitiva sostenible.",
    ctaPrimary: "Evalúa tu Arquitectura Actual",
    ctaPrimaryLink: "/contacto",
    ctaSecondary: "Ver Casos: Antes y Después",
    ctaSecondaryLink: "/nosotros/testimonios",
    // Imagen moderna: Oficina tecnológica y profesional
    backgroundImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80",
    backgroundAlt: "Equipo profesional en oficina moderna con tecnología",
    isGif: false,
    stats: [
      { value: "Estrategia", label: "Basada en Datos" },
      { value: "Innovación", label: "con ROI Comprobado" },
      { value: "Escalabilidad", label: "Sin Fricción" }
    ]
  }
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const countryContext = useCountryOptional()
  const country = countryContext?.country
  const countryCode = country?.code

  const slide = HERO_SLIDES[currentSlide]

  // Detectar preferencia de movimiento reducido
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Auto-play cada 15 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 15000) // 15 segundos

    return () => clearInterval(timer)
  }, [currentSlide])

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
  }

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const handlePrimaryCtaClick = (slide: typeof HERO_SLIDES[0]) => {
    trackCTAClick(slide.ctaPrimary, 'hero_primary', slide.ctaPrimaryLink)
  }

  const handleSecondaryCtaClick = (slide: typeof HERO_SLIDES[0]) => {
    trackCTAClick(slide.ctaSecondary, 'hero_secondary', slide.ctaSecondaryLink)
  }

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]">
      {/* Background Image con transición - respeta reduced motion */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ 
            duration: 1, 
            ease: "easeInOut",
            // Respeta prefers-reduced-motion
            ...(typeof window !== 'undefined' && 
                window.matchMedia('(prefers-reduced-motion: reduce)').matches 
                ? { duration: 0.01 } 
                : {})
          }}
          className="absolute inset-0"
        >
          {slide.isGif ? (
            <Image
              src={slide.backgroundImage}
              alt={slide.backgroundAlt}
              fill
              unoptimized
              className="object-cover"
              priority={currentSlide === 0}
              loading={currentSlide === 0 ? 'eager' : 'lazy'}
            />
          ) : (
            <Image
              src={slide.backgroundImage}
              alt={slide.backgroundAlt}
              fill
              className="object-cover"
              priority={currentSlide === 0}
              loading={currentSlide === 0 ? 'eager' : 'lazy'}
              sizes="100vw"
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDAwUBAAAAAAAAAAAAAQIDAAQRBQYhEhMiMUFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQADAQEBAAAAAAAAAAAAAAAAAQIDBBH/2gAMAwEAAhEDEQA/ANF3Dq91YazLaWUcJt4wvT3FJLMQCTwfXNVNt7gvdRu5Le8igEaJkGJSM5I/aUqzeli+xjl7P//Z"
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Overlay optimizado para máxima legibilidad y accesibilidad */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/75 via-40% to-black/50" />
      {/* Gradiente adicional desde abajo para asegurar contraste en CTAs */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      {/* Content - Con padding ajustado para visibilidad completa */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative h-full flex items-center py-6 md:py-8">
        <div className="max-w-3xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -40 }}
              transition={{ 
                duration: prefersReducedMotion ? 0.01 : 0.6, 
                ease: "easeOut" 
              }}
              className="space-y-3 md:space-y-4 lg:space-y-5"
            >
              {/* Badge de País con Bandera */}
              {countryCode && countryCode !== 'default' && (
                <motion.div
                  className="inline-flex items-center gap-3 mb-2"
                  initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: prefersReducedMotion ? 0 : 0.1,
                    duration: prefersReducedMotion ? 0.01 : 0.4
                  }}
                >
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 shadow-xl">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden shadow-lg border-2 border-white/30 flex-shrink-0">
                      <Image
                        src={`https://flagcdn.com/w80/${countryCode}.png`}
                        alt={`Bandera de ${country?.name}`}
                        fill
                        className="object-cover"
                        unoptimized
                        sizes="32px"
                      />
                    </div>
                    <span className="text-white font-semibold text-sm">
                      Servicio en {country?.name}
                    </span>
                  </div>
                </motion.div>
              )}

              {/* Headline */}
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight drop-shadow-2xl"
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: prefersReducedMotion ? 0 : 0.2,
                  duration: prefersReducedMotion ? 0.01 : 0.5
                }}
              >
                {slide.headline}
              </motion.h1>

              {/* Subheadline */}
              <motion.h2 
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight drop-shadow-xl"
                style={{ color: '#00D9FF' }}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: prefersReducedMotion ? 0 : 0.3,
                  duration: prefersReducedMotion ? 0.01 : 0.5
                }}
              >
                {'subheadlineJsx' in slide && slide.subheadlineJsx ? slide.subheadlineJsx : slide.subheadline}
              </motion.h2>

              {/* Tagline */}
              {slide.tagline && (
                <motion.p 
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-cyan-400 font-medium leading-snug drop-shadow-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    delay: prefersReducedMotion ? 0 : 0.4,
                    duration: prefersReducedMotion ? 0.01 : 0.5
                  }}
                >
                  {slide.tagline}
                </motion.p>
              )}

              {/* Description */}
              <motion.p 
                className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 leading-relaxed max-w-2xl drop-shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  delay: prefersReducedMotion ? 0 : 0.5,
                  duration: prefersReducedMotion ? 0.01 : 0.5
                }}
              >
                {'descriptionJsx' in slide && slide.descriptionJsx ? slide.descriptionJsx : slide.description}
              </motion.p>

               {/* CTA Buttons - Primario dominante, sin scroll en móvil */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 md:pt-5"
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: prefersReducedMotion ? 0 : 0.6,
                  duration: prefersReducedMotion ? 0.01 : 0.4
                }}
              >
                {/* CTA Primario - SIN wrapper motion.div para evitar esquinas negras */}
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto text-base md:text-lg font-bold shadow-2xl"
                  asChild
                >
                  <Link 
                    href={slide.ctaPrimaryLink} 
                    className="flex items-center justify-center gap-2.5"
                    onClick={() => handlePrimaryCtaClick(slide)}
                  >
                    <Lock className="w-5 h-5 md:w-6 md:h-6" />
                    <span>{slide.ctaPrimary}</span>
                  </Link>
                </Button>

                {/* CTA Secundario - Más sutil */}
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto text-white hover:text-white backdrop-blur-md bg-white/10 hover:bg-white/20 border-2 border-white/30 transition-all duration-300"
                  asChild
                >
                  <Link 
                    href={slide.ctaSecondaryLink} 
                    className="flex items-center justify-center gap-2"
                    onClick={() => handleSecondaryCtaClick(slide)}
                  >
                    <Target className="w-5 h-5" />
                    <span>{slide.ctaSecondary}</span>
                  </Link>
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 pt-3 md:pt-5"
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: prefersReducedMotion ? 0 : 0.7,
                  duration: prefersReducedMotion ? 0.01 : 0.5
                }}
              >
                {slide.stats.map((stat, index) => (
                  <div key={index} className="text-center md:text-left">
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-brand-orange mb-0.5 md:mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-white/80 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls - LATERALES con accesibilidad mejorada */}
      {/* Botón Anterior - Izquierda */}
      <motion.button
        onClick={handlePrev}
        whileHover={prefersReducedMotion ? {} : { scale: 1.1, x: -5 }}
        whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 hover:bg-white/35 focus-visible:bg-white/40 backdrop-blur-md border border-white/30 focus-visible:border-white/60 flex items-center justify-center text-white transition-all duration-300 z-20 shadow-lg focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} />
      </motion.button>

      {/* Botón Siguiente - Derecha */}
      <motion.button
        onClick={handleNext}
        whileHover={prefersReducedMotion ? {} : { scale: 1.1, x: 5 }}
        whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 hover:bg-white/35 focus-visible:bg-white/40 backdrop-blur-md border border-white/30 focus-visible:border-white/60 flex items-center justify-center text-white transition-all duration-300 z-20 shadow-lg focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
        aria-label="Siguiente slide"
      >
        <ChevronRight className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} />
      </motion.button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20">
        <motion.div
          key={currentSlide}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 15, ease: "linear" }}
          className="h-full bg-brand-orange"
          style={{ boxShadow: '0 0 20px rgba(255, 107, 53, 0.8)' }}
        />
      </div>

      {/* Números de slide - Derecha con accesibilidad mejorada */}
      <div className="absolute bottom-20 md:bottom-24 right-4 md:right-8 flex flex-col gap-2 z-20 hidden lg:flex">
        {HERO_SLIDES.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            whileHover={prefersReducedMotion ? {} : { scale: 1.15 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 ${
              index === currentSlide
                ? 'bg-brand-orange text-white shadow-lg scale-110'
                : 'bg-white/20 text-white/70 hover:bg-white/35 focus-visible:bg-white/40 backdrop-blur-sm border border-white/30'
            }`}
            aria-label={`Ir al slide ${index + 1}`}
            aria-current={index === currentSlide ? 'true' : 'false'}
          >
            {index + 1}
          </motion.button>
        ))}
      </div>
    </section>
  )
}
