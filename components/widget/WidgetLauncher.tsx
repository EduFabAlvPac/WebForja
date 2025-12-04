'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { Assistant } from './Assistant'

export function WidgetLauncher() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating Button - Posicionado arriba del botón de WhatsApp */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.3, ease: 'easeOut' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`
          fixed bottom-24 right-6 z-40 w-14 h-14 rounded-full shadow-card
          bg-gradient-to-br from-forja-purple to-forja-teal
          flex items-center justify-center transition-all duration-200
          focus:outline-none focus:ring-4 focus:ring-forja-teal/30
          hover:shadow-xl
          ${isOpen ? 'rotate-90' : ''}
        `}
        aria-label={isOpen ? 'Cerrar asistente' : 'Abrir asistente'}
        aria-expanded={isOpen}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-white" strokeWidth={2.5} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageCircle className="w-6 h-6 text-white" strokeWidth={2.5} />
              {/* Notification badge (opcional) */}
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse effect cuando está cerrado */}
        {!isOpen && (
          <motion.span
            className="absolute inset-0 rounded-full bg-forja-teal"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        )}
      </motion.button>

      {/* Widget Assistant */}
      <Assistant isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}

