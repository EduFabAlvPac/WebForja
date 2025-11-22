'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import config from '@/lib/config'
import { useSectionInView } from '@/lib/hooks/useSectionInView'
import { trackCTAClick } from '@/lib/analytics'

interface ContextualMessage {
  text: string
  whatsappMessage: string
}

export function WhatsAppFloat() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [contextMessage, setContextMessage] = useState<ContextualMessage>({
    text: '¿En qué puedo ayudarte hoy?',
    whatsappMessage: 'Hola, me interesa conocer más sobre Forja Digital',
  })
  
  const whatsappNumber = config.contact.whatsapp

  // Detectar sección visible
  const activeSection = useSectionInView(
    ['hero', 'pain-points', 'services', 'metodologia', 'case-studies', 'cta'],
    { threshold: 0.3 }
  )

  // Actualizar mensaje según la sección
  useEffect(() => {
    const messages: Record<string, ContextualMessage> = {
      'hero': {
        text: '¿Tienes dudas sobre el Rayos-X? Te ayudo 👋',
        whatsappMessage: 'Hola, me interesa conocer más sobre el Rayos-X Empresarial',
      },
      'pain-points': {
        text: '¿Te identificas con estos problemas? Hablemos',
        whatsappMessage: 'Hola, me identifico con los problemas mencionados. Quiero conocer más sobre sus soluciones',
      },
      'services': {
        text: '¿Quieres saber cuál servicio es ideal para ti?',
        whatsappMessage: 'Hola, me gustaría información sobre qué servicio es mejor para mi empresa',
      },
      'metodologia': {
        text: '¿Preguntas sobre cómo funciona FORJA?',
        whatsappMessage: 'Hola, tengo preguntas sobre la metodología FORJA',
      },
      'case-studies': {
        text: '¿Quieres resultados como estos? Conversemos',
        whatsappMessage: 'Hola, me interesan los casos de éxito. Quiero saber cómo pueden ayudarme',
      },
      'cta': {
        text: '¿Listo para empezar? Agenda tu sesión',
        whatsappMessage: 'Hola, quiero agendar una sesión estratégica',
      },
    }

    if (activeSection && messages[activeSection]) {
      setContextMessage(messages[activeSection])
    } else {
      setContextMessage({
        text: '¿En qué puedo ayudarte hoy?',
        whatsappMessage: 'Hola, me interesa conocer más sobre Forja Digital',
      })
    }
  }, [activeSection])

  const handleWhatsAppClick = () => {
    trackCTAClick('whatsapp', activeSection || 'unknown', `https://wa.me/${whatsappNumber}`)
    const message = encodeURIComponent(contextMessage.whatsappMessage)
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
            <p className="text-sm font-semibold mb-2">{contextMessage.text}</p>
            <p className="text-xs text-gray-600 mb-3">
              Chatea con nosotros en WhatsApp. Respuesta rápida garantizada.
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

