'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface Breadcrumb {
  label: string
  href: string
}

interface PageHeroProps {
  title: string
  subtitle?: string
  description?: string
  backgroundImage?: string
  backgroundAlt?: string
  breadcrumbs?: Breadcrumb[]
  badge?: string
}

export function PageHero({
  title,
  subtitle,
  description,
  backgroundImage,
  backgroundAlt,
  breadcrumbs,
  badge
}: PageHeroProps) {
  const hasBackgroundImage = !!backgroundImage

  return (
    <section className={`relative overflow-hidden ${hasBackgroundImage ? 'pt-16 pb-24 md:pt-20 md:pb-32' : 'py-16 md:py-24'}`}>
      {/* Background Image with Ken Burns Effect */}
      {hasBackgroundImage && (
        <>
          <div className="absolute inset-0">
            <motion.div
              className="w-full h-full"
              initial={{ scale: 1 }}
              animate={{ scale: 1.05 }}
              transition={{ duration: 15, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
            >
              <Image
                src={backgroundImage}
                alt={backgroundAlt || title}
                fill
                className="object-cover"
                quality={90}
                priority
              />
            </motion.div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/80 to-brand-navy/70" />
        </>
      )}

      {/* Gradient Background (sin imagen) */}
      {!hasBackgroundImage && (
        <>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-brand-turquoise/10 to-brand-purple/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-brand-orange/10 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        </>
      )}

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm mb-8"
            aria-label="Breadcrumb"
          >
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center gap-2">
                {index > 0 && (
                  <ChevronRight className={`w-3.5 h-3.5 ${hasBackgroundImage ? 'text-gray-400' : 'text-gray-400'}`} />
                )}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-brand-orange font-semibold">{crumb.label}</span>
                ) : (
                  <Link
                    href={crumb.href}
                    className={`${hasBackgroundImage ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-brand-orange'} transition-colors font-medium`}
                  >
                    {crumb.label}
                  </Link>
                )}
              </div>
            ))}
          </motion.nav>
        )}

        <div className="max-w-5xl">
          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-block mb-6"
            >
              <div className={`px-4 py-2 rounded-full ${hasBackgroundImage ? 'bg-white/10 border border-white/20' : 'bg-brand-orange/10 border border-brand-orange/30'}`}>
                <span className={`${hasBackgroundImage ? 'text-white' : 'text-brand-orange'} font-bold text-sm uppercase tracking-wider`}>
                  {badge}
                </span>
              </div>
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`hero-title mb-6 ${hasBackgroundImage ? 'text-white' : 'text-brand-navy'}`}
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={`hero-subtitle mb-6 ${hasBackgroundImage ? 'text-brand-turquoise' : 'text-brand-orange'}`}
            >
              {subtitle}
            </motion.h2>
          )}

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`hero-description max-w-3xl ${hasBackgroundImage ? 'text-gray-200' : 'text-gray-600'}`}
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  )
}

