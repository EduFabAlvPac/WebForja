'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  highlight?: string // Palabra(s) a resaltar en naranja
  description?: string
  align?: 'left' | 'center' | 'right'
  className?: string
}

export function SectionHeader({ 
  eyebrow, 
  title, 
  highlight,
  description, 
  align = 'center',
  className = ''
}: SectionHeaderProps) {
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }[align]

  // Función para resaltar palabras específicas
  const renderTitle = () => {
    if (!highlight) return title

    const parts = title.split(highlight)
    return (
      <>
        {parts[0]}
        <span className="text-brand-orange">{highlight}</span>
        {parts[1]}
      </>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-12 ${alignmentClass} ${className}`}
    >
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-brand-orange font-bold uppercase tracking-wider text-sm mb-3"
        >
          {eyebrow}
        </motion.p>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="section-title mb-4"
      >
        {renderTitle()}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="section-description max-w-3xl mx-auto"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}

