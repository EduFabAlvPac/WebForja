'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Send, Clock, CheckCircle2, Search, Briefcase, HelpCircle, Calendar, LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCountryOptional } from '@/context/CountryProvider'
import config from '@/lib/config'
import { trackWhatsAppClick } from '@/lib/analytics'

interface QuickMessage {
  id: string
  text: string
  message: string
  icon: LucideIcon
}

const quickMessages: QuickMessage[] = [
  {
    id: 'rayos-x',
    text: 'Evaluación de Madurez Empresarial',
    message: 'Hola, me interesa conocer más sobre el Evaluación de Madurez Empresarial',
    icon: Search
  },
  {
    id: 'servicios',
    text: 'Servicios',
    message: 'Hola, me gustaría información sobre sus servicios de transformación digital',
    icon: Briefcase
  },
  {
    id: 'consulta',
    text: 'Consulta General',
    message: 'Hola, tengo algunas preguntas sobre Forja Digital',
    icon: HelpCircle
  },
  {
    id: 'agendar',
    text: 'Agendar Reunión',
    message: 'Hola, me gustaría agendar una reunión para hablar sobre mi empresa',
    icon: Calendar
  }
]

export function WhatsAppContact() {
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null)
  const [sent, setSent] = useState(false)
  const country = useCountryOptional()

  // Usar WhatsApp del país si existe, sino usar el principal
  const whatsappNumber = country?.country?.whatsapp || config.contact.whatsapp

  const handleSendMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    trackWhatsAppClick('widget', country?.country?.whatsapp !== undefined)
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    
    // Mostrar confirmación
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setSelectedMessage(null)
    }, 3000)
  }

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-12 px-6"
      >
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-forja-navy mb-2">¡Abriendo WhatsApp!</h3>
        <p className="text-slate-600 text-center text-sm">
          Te responderemos en menos de 5 minutos durante horario laboral
        </p>
      </motion.div>
    )
  }

  return (
    <div className="py-6 px-4">
      <div className="text-center mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 mx-auto mb-3 flex items-center justify-center">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-forja-navy mb-2">
          Chatea con un Forjador
        </h3>
        <div className="flex items-center justify-center gap-2 text-sm">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-green-600 font-medium">En línea ahora</span>
        </div>
      </div>

      {/* Horario de atención */}
      <div className="bg-slate-50 rounded-xl p-4 mb-6">
        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-slate-700 mb-1">
              Horario de Atención
            </p>
            <p className="text-xs text-slate-600">
              Lunes a Viernes: 8:00 AM - 6:00 PM<br />
              Sábados: 9:00 AM - 1:00 PM
            </p>
            <p className="text-xs text-green-600 font-medium mt-2 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              Respuesta rápida garantizada
            </p>
          </div>
        </div>
      </div>

      {/* Mensajes rápidos */}
      <div className="mb-4">
        <p className="text-sm font-medium text-slate-700 mb-3">
          Selecciona un tema:
        </p>
        <div className="space-y-2">
          {quickMessages.map((msg) => {
            const IconComponent = msg.icon;
            return (
              <motion.button
                key={msg.id}
                onClick={() => setSelectedMessage(msg.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  w-full text-left px-4 py-3 rounded-xl border-2 transition-all
                  focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
                  ${
                    selectedMessage === msg.id
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700'
                  }
                `}
              >
                <span className="text-sm font-medium flex items-center gap-2">
                  <IconComponent className="w-4 h-4" />
                  {msg.text}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Botón de enviar */}
      <Button
        onClick={() => {
          const message = quickMessages.find(m => m.id === selectedMessage)
          if (message) {
            handleSendMessage(message.message)
          }
        }}
        disabled={!selectedMessage}
        className="w-full bg-green-500 hover:bg-green-600 text-white"
        size="lg"
      >
        <Send className="w-5 h-5 mr-2" />
        Abrir WhatsApp
      </Button>

      <p className="text-xs text-slate-500 text-center mt-4">
        Al continuar, serás redirigido a WhatsApp Web o la app de WhatsApp
      </p>
    </div>
  )
}



