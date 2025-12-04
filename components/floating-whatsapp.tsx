'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Clock, CheckCheck, Send, ShieldCheck } from 'lucide-react'
import config from '@/lib/config'
import { useSectionInView } from '@/lib/hooks/useSectionInView'
import { trackWhatsAppClick } from '@/lib/analytics'

/**
 * FloatingWhatsApp - Botón flotante de WhatsApp Premium
 * 
 * Features:
 * - Diseño premium con gradientes sutiles
 * - Icono oficial de WhatsApp
 * - Mensajes contextuales según sección visible
 * - Panel expandido con chat preview
 * - Animaciones suaves
 * - Accesible (ARIA, keyboard nav)
 */

// Icono oficial de WhatsApp
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

interface ContextualMessage {
  text: string
  whatsappMessage: string
}

interface FloatingWhatsAppProps {
  phone?: string
  message?: string
  hiddenPaths?: string[]
}

const DEFAULT_HIDDEN_PATHS = ['/gracias']

export function FloatingWhatsApp({
  phone,
  message = 'Hola, me interesa conocer más sobre Forja Digital',
  hiddenPaths = DEFAULT_HIDDEN_PATHS,
}: FloatingWhatsAppProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [contextMessage, setContextMessage] = useState<ContextualMessage>({
    text: '¿En qué puedo ayudarte hoy?',
    whatsappMessage: message,
  })
  
  const pathname = usePathname()
  const whatsappNumber = phone || config.contact.whatsapp

  // Check if should show on this page
  const shouldShow = !hiddenPaths.some(path => pathname?.startsWith(path))

  // Check reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // Detectar sección visible para mensajes contextuales
  const activeSection = useSectionInView(
    ['hero', 'pain-points', 'services', 'metodologia', 'case-studies', 'cta'],
    { threshold: 0.3 }
  )

  // Actualizar mensaje según la sección
  useEffect(() => {
    const messages: Record<string, ContextualMessage> = {
      'hero': {
        text: '¿Tienes dudas sobre el Rayos-X? Te ayudo',
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
        whatsappMessage: message,
      })
    }
  }, [activeSection, message])

  // Build WhatsApp URL with UTM params
  const buildWhatsAppUrl = (customMessage?: string) => {
    const msg = encodeURIComponent(customMessage || contextMessage.whatsappMessage)
    const utmParams = 'utm_source=web&utm_medium=cta&utm_campaign=whatsapp'
    return `https://wa.me/${whatsappNumber}?text=${msg}&${utmParams}`
  }

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('float')
    window.open(buildWhatsAppUrl(), '_blank', 'noopener,noreferrer')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setIsExpanded(!isExpanded)
    }
    if (e.key === 'Escape' && isExpanded) {
      setIsExpanded(false)
    }
  }

  // Show tooltip after 3 seconds if not interacted
  useEffect(() => {
    if (!shouldShow) return
    
    const timer = setTimeout(() => {
      if (!isExpanded) {
        setShowTooltip(true)
        // Hide tooltip after 5 seconds
        setTimeout(() => setShowTooltip(false), 5000)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [shouldShow, isExpanded])

  if (!shouldShow) return null

  return (
    <div
      className="fixed bottom-6 right-6 z-40"
      onMouseEnter={() => !isExpanded && setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1 } : { scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={prefersReducedMotion ? { duration: 0 } : { delay: 1, duration: 0.3 }}
      >
        {/* Tooltip - Premium Style */}
        <AnimatePresence>
          {showTooltip && !isExpanded && (
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: 10, scale: 0.9 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
              className="absolute bottom-3 right-[70px] bg-white text-slate-800 text-sm font-semibold px-4 py-2.5 rounded-xl shadow-xl border border-slate-100 whitespace-nowrap"
              role="tooltip"
            >
              <span className="flex items-center gap-2">
                <span className="text-green-500">💬</span>
                ¿Hablamos? Estoy en línea
              </span>
              {/* Arrow pointing right */}
              <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-full">
                <div className="border-8 border-transparent border-l-white drop-shadow-sm" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expanded Panel - Premium Design */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.25, ease: 'easeOut' }}
              className="absolute bottom-20 right-0 w-80 mb-2 rounded-2xl shadow-2xl overflow-hidden border border-slate-200/50"
              role="dialog"
              aria-labelledby="whatsapp-dialog-title"
            >
              {/* Header con gradiente WhatsApp */}
              <div className="relative bg-gradient-to-r from-[#075E54] via-[#128C7E] to-[#25D366] px-5 py-4">
                <button
                  onClick={() => setIsExpanded(false)}
                  className="absolute top-3 right-3 text-white/80 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  aria-label="Cerrar panel de WhatsApp"
                >
                  <X className="h-4 w-4" />
                </button>
                
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                      <WhatsAppIcon className="h-7 w-7 text-[#25D366]" />
                    </div>
                    {/* Online indicator */}
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white" />
                  </div>
                  <div>
                    <h3 id="whatsapp-dialog-title" className="font-bold text-white text-base">
                      Forja Digital
                    </h3>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                      <p className="text-sm text-green-100 font-medium">En línea ahora</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="bg-[#ECE5DD] p-4">
                {/* Chat bubble */}
                <div className="bg-white rounded-xl rounded-tl-sm p-4 shadow-sm max-w-[90%] relative">
                  {/* Decorative tail */}
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-white" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }} />
                  
                  <p className="text-slate-800 text-sm leading-relaxed">
                    {contextMessage.text}
                  </p>
                  
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100">
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <Clock className="w-3 h-3" />
                      <span className="text-xs">Respuesta en ~2 min</span>
                    </div>
                    <div className="flex items-center gap-0.5 text-[#34B7F1]">
                      <CheckCheck className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer - CTA */}
              <div className="bg-white px-4 py-4 border-t border-slate-100">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#22c55e] hover:to-[#0d9668] text-white py-3.5 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                >
                  <Send className="h-4 w-4" />
                  Iniciar Conversación
                </button>
                <p className="text-center text-xs text-slate-400 mt-2.5 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                  <span>Chat seguro y privado</span>
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Button - Premium WhatsApp Style */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          onKeyDown={handleKeyDown}
          className="group relative w-14 h-14 bg-gradient-to-br from-[#25D366] via-[#128C7E] to-[#075E54] hover:from-[#22c55e] hover:via-[#0d9668] hover:to-[#064e3b] rounded-full shadow-xl shadow-green-600/40 flex items-center justify-center text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 transition-all duration-300"
          whileHover={prefersReducedMotion ? {} : { scale: 1.08, rotate: 5 }}
          whileTap={prefersReducedMotion ? {} : { scale: 0.92 }}
          aria-label="Abrir WhatsApp"
          aria-expanded={isExpanded}
          aria-haspopup="dialog"
        >
          {/* Icono de WhatsApp */}
          <WhatsAppIcon className="h-7 w-7 relative z-10 transition-transform duration-300 group-hover:scale-110" />
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md -z-10" />
          
          {/* Pulse animation ring */}
          {!prefersReducedMotion && !isExpanded && (
            <>
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-green-400"
                animate={{
                  scale: [1, 1.4],
                  opacity: [0.6, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-green-400"
                animate={{
                  scale: [1, 1.4],
                  opacity: [0.6, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeOut',
                  delay: 0.5,
                }}
              />
            </>
          )}
          
          {/* Notification badge when not expanded */}
          {!isExpanded && (
            <motion.span 
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 500, damping: 15 }}
            >
              1
            </motion.span>
          )}
        </motion.button>
      </motion.div>
    </div>
  )
}

