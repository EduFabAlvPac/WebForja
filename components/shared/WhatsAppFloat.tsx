'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'

export function WhatsAppFloat() {
  const [isExpanded, setIsExpanded] = useState(false)
  const whatsappNumber = '573001234567' // TODO: Reemplazar con número real de Forja Digital

  const messages = {
    home: 'Hola, me interesa conocer más sobre Forja Digital',
    servicios: 'Hola, me interesa conocer sus servicios de transformación digital',
    industrias: 'Hola, me gustaría información sobre soluciones para mi industria',
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(messages.home)
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-[var(--z-whatsapp-float)]"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
    >
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-20 right-0 bg-white rounded-card shadow-card-hover p-4 w-64 mb-2"
          >
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              aria-label="Cerrar"
            >
              <X className="h-4 w-4" />
            </button>
            <p className="text-sm font-semibold mb-2">¿Necesitas ayuda?</p>
            <p className="text-xs text-gray-600 mb-3">
              Chatea con nosotros en WhatsApp y descubre cómo transformar tu negocio
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-button text-sm font-medium transition-colors"
            >
              Iniciar Chat
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center text-white"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            '0 0 0 0 rgba(34, 197, 94, 0.4)',
            '0 0 0 20px rgba(34, 197, 94, 0)',
          ],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop',
        }}
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>
    </motion.div>
  )
}

