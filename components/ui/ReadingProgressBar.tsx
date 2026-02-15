'use client'

import { motion } from 'framer-motion'
import { useScrollProgress } from '@/lib/hooks/useScrollProgress'

/**
 * Barra de progreso de lectura que se muestra en la parte superior de la página
 */
export function ReadingProgressBar() {
  const progress = useScrollProgress()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-brand-turquoise z-50 origin-left"
      style={{
        scaleX: progress / 100,
      }}
      initial={{ scaleX: 0 }}
      transition={{ duration: 0.1, ease: 'linear' }}
    />
  )
}


