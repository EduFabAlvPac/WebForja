'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

/**
 * ClientLogosSection - Social Proof con logos de clientes reales
 * 
 * Features:
 * - Escala de grises con hover color
 * - next/image con lazy loading
 * - Scroll horizontal en móvil
 * - ARIA labels claros
 * - Sin parpadeo (smooth fade-in)
 * - Responsive grid
 */

interface ClientLogo {
  name: string
  logo: string
  width: number
  height: number
}

const CLIENT_LOGOS: ClientLogo[] = [
  {
    name: 'Accenture',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg',
    width: 200,
    height: 60
  },
  {
    name: 'Deloitte',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg',
    width: 200,
    height: 60
  },
  {
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
    width: 200,
    height: 60
  },
  {
    name: 'IBM',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    width: 200,
    height: 60
  },
  {
    name: 'SAP',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg',
    width: 200,
    height: 60
  },
  {
    name: 'Oracle',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
    width: 200,
    height: 60
  }
]

export function ClientLogosSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      ref={ref}
      className="py-12 md:py-16 bg-slate-50 border-y border-slate-200"
      aria-label="Clientes y partners que confían en FORJA Digital"
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <p className="text-sm md:text-base text-slate-600 font-medium uppercase tracking-wider mb-2">
            Confían en Nosotros
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-forja-navy">
            Empresas que Transformamos
          </h2>
        </motion.div>

        {/* Logos Grid - Desktop: grid, Mobile: scroll horizontal */}
        <div className="relative">
          {/* Mobile: Scroll horizontal */}
          <div className="md:hidden overflow-x-auto scrollbar-hide pb-4">
            <div className="flex gap-8 px-4 min-w-max">
              {CLIENT_LOGOS.map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  className="flex-shrink-0 w-32 h-20 relative"
                >
                  <div className="w-full h-full flex items-center justify-center p-4 bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-md">
                    <Image
                      src={client.logo}
                      alt={`Logo de ${client.name}`}
                      width={client.width}
                      height={client.height}
                      className="w-full h-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                      loading="lazy"
                      quality={85}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
            {CLIENT_LOGOS.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="relative h-24 lg:h-28"
              >
                <div className="w-full h-full flex items-center justify-center p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <Image
                    src={client.logo}
                    alt={`Logo de ${client.name}`}
                    width={client.width}
                    height={client.height}
                    className="w-full h-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                    loading="lazy"
                    quality={85}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center text-sm text-slate-500 mt-8 md:mt-12"
        >
          +10 empresas transformadas en 2 países
        </motion.p>
      </div>
    </section>
  )
}

