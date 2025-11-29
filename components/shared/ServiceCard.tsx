'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface ServiceCardProps {
  icon: ReactNode | string
  title: string
  description: string
  href: string
  color?: string
}

export function ServiceCard({ icon, title, description, href, color = 'brand-orange' }: ServiceCardProps) {
  return (
    <Link href={href} className="block h-full">
      <motion.div
        whileHover={{
          y: -8,
        }}
        transition={{ duration: 0.3 }}
        className="h-full"
      >
        <Card className="group relative p-8 overflow-hidden cursor-pointer h-full">
        {/* Gradient Overlay on Hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-brand-turquoise/10 opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.3 }}
        />

        <div className="relative z-10">
          {/* Icon with rotation on hover */}
          <motion.div
            className="w-16 h-16 mb-6 text-4xl flex items-center justify-center"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            {icon}
          </motion.div>

          <h3 className="text-2xl font-semibold mb-3 group-hover:text-brand-orange transition-colors">
            {title}
          </h3>

          <p className="text-gray-600 mb-4 line-clamp-3">
            {description}
          </p>

          <div className="flex items-center text-brand-orange font-semibold">
            Ver más
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.div>
          </div>
        </div>

        {/* Decorative Corner */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-brand-orange/5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" />
      </Card>
      </motion.div>
    </Link>
  )
}

