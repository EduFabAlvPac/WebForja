'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Lightbulb, Smartphone } from 'lucide-react'
import { ServiceHeroData } from '@/types/services'

interface ServiceHeroProps {
  data: ServiceHeroData
}

export function ServiceHero({ data }: ServiceHeroProps) {
  const Icon = data.icon === 'Lightbulb' ? Lightbulb : Smartphone
  const hasBackgroundImage = !!data.backgroundImage

  return (
    <section className={`relative overflow-hidden ${hasBackgroundImage ? 'pt-16 pb-24 md:pt-20 md:pb-32' : 'py-16 md:py-24'}`}>
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
                src={data.backgroundImage!}
                alt={data.backgroundAlt || data.title}
                fill
                className="object-cover"
                quality={90}
                priority
              />
            </motion.div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/80 via-brand-navy/70 to-transparent" />
        </>
      )}

      {!hasBackgroundImage && (
        <>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-brand-turquoise/10 to-brand-purple/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-brand-orange/10 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </>
      )}
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm mb-8"
          aria-label="Breadcrumb"
        >
          {data.breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center gap-2">
              {index > 0 && <ChevronRight className={`w-3.5 h-3.5 ${hasBackgroundImage ? 'text-gray-400' : 'text-gray-400'}`} />}
              {index === data.breadcrumbs.length - 1 ? (
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

        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
              className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg ${hasBackgroundImage ? 'bg-white/20' : 'bg-gradient-to-br from-brand-orange to-orange-600'}`}
            >
              <Icon className={`w-6 h-6 ${hasBackgroundImage ? 'text-white' : 'text-white'}`} strokeWidth={2.5} />
            </motion.div>
            <div className={`px-4 py-2 rounded-r-lg ${hasBackgroundImage ? 'bg-white/10 border-l-4 border-white' : 'bg-gradient-to-r from-brand-orange/10 to-transparent border-l-4 border-brand-orange'}`}>
              <span className={`${hasBackgroundImage ? 'text-white' : 'text-brand-orange'} font-bold text-sm uppercase tracking-wider`}>
                {data.eyebrow}
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] ${hasBackgroundImage ? 'text-white' : 'text-brand-navy'}`}
          >
            {data.title}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
          >
            <span className={hasBackgroundImage ? 'text-brand-turquoise' : 'bg-gradient-to-r from-brand-turquoise via-brand-purple to-brand-turquoise bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient'}>
              {data.subtitle}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`text-xl md:text-2xl leading-relaxed max-w-4xl ${hasBackgroundImage ? 'text-white/90' : 'text-gray-700'}`}
          >
            {data.description}
          </motion.p>
          
          {!hasBackgroundImage && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-brand-orange via-brand-turquoise to-transparent rounded-full mt-8 max-w-2xl"
            />
          )}
        </div>
      </div>
    </section>
  )
}


