'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { motion } from 'framer-motion'

/**
 * Breadcrumbs Component - Navegación de migas de pan
 * 
 * Features:
 * - Schema.org markup para SEO
 * - Accesibilidad (aria-label, aria-current)
 * - Animaciones sutiles
 * - Responsive
 */

export interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav 
      aria-label="Breadcrumb"
      className={`${className}`}
    >
      <ol 
        className="flex flex-wrap items-center gap-2 text-sm"
        itemScope 
        itemType="https://schema.org/BreadcrumbList"
      >
        {/* Home */}
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Link
            href="/"
            className="flex items-center gap-1 text-slate-600 hover:text-forja-fire transition-colors"
            itemProp="item"
          >
            <Home className="w-4 h-4" />
            <span itemProp="name" className="sr-only">Inicio</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>

        {/* Separador */}
        <li aria-hidden="true">
          <ChevronRight className="w-4 h-4 text-slate-400" />
        </li>

        {/* Items dinámicos */}
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          const position = index + 2

          return (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="flex items-center gap-2"
            >
              {isLast ? (
                <span
                  className="font-medium text-forja-navy"
                  itemProp="name"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <>
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-forja-fire transition-colors"
                    itemProp="item"
                  >
                    <span itemProp="name">{item.label}</span>
                  </Link>
                  <ChevronRight className="w-4 h-4 text-slate-400" aria-hidden="true" />
                </>
              )}
              <meta itemProp="position" content={position.toString()} />
            </motion.li>
          )
        })}
      </ol>
    </nav>
  )
}

