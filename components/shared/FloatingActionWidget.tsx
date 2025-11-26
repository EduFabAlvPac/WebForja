'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, MessageCircle, HelpCircle, Newspaper, X, Send, Star, ChevronLeft, Search } from 'lucide-react'

interface FloatingActionWidgetProps {
  pagePath: string
}

type ViewType = 'menu' | 'inicio' | 'mensajes' | 'ayuda' | 'noticias'

export function FloatingActionWidget({ pagePath }: FloatingActionWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentView, setCurrentView] = useState<ViewType>('menu')
  const [feedbackRating, setFeedbackRating] = useState<number | null>(null)
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false)
  const [messageData, setMessageData] = useState({ email: '', message: '' })

  const handleClose = () => {
    setIsOpen(false)
    setTimeout(() => {
      setCurrentView('menu')
      setFeedbackRating(null)
      setFeedbackSubmitted(false)
      setMessageData({ email: '', message: '' })
    }, 300)
  }

  const handleBack = () => {
    setCurrentView('menu')
    setFeedbackRating(null)
    setFeedbackSubmitted(false)
  }

  const handleFeedbackSubmit = async (rating: number) => {
    setFeedbackRating(rating)
    
    try {
      await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          satisfaction_level: rating,
          satisfaction_label: ['Muy insatisfecho', 'Insatisfecho', 'Neutral', 'Satisfecho', 'Muy satisfecho'][rating - 1],
          page_path: pagePath,
          page_url: typeof window !== 'undefined' ? window.location.href : '',
          user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
          screen_resolution: typeof window !== 'undefined' ? `${window.screen.width}x${window.screen.height}` : '',
        }),
      })
      
      setFeedbackSubmitted(true)
      setTimeout(() => {
        handleBack()
      }, 2000)
    } catch (error) {
      console.error('Error submitting feedback:', error)
    }
  }

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí puedes integrar con tu sistema de mensajería
    console.log('Mensaje enviado:', messageData)
    alert('¡Mensaje enviado! Te contactaremos pronto.')
    setMessageData({ email: '', message: '' })
    handleBack()
  }

  const faqItems = [
    {
      question: '¿Qué servicios ofrecen?',
      answer: 'Ofrecemos consultoría en Estrategia & Transformación, Talento & Finanzas, y Comercial & Operaciones.'
    },
    {
      question: '¿Cómo puedo agendar una consulta?',
      answer: 'Puedes contactarnos a través del formulario de contacto o llamando al +57 300 123 4567.'
    },
    {
      question: '¿Cuánto tiempo toma un proyecto?',
      answer: 'Depende del alcance, pero típicamente entre 3-6 meses para proyectos completos.'
    },
    {
      question: '¿Trabajan con PYMEs?',
      answer: 'Sí, nos especializamos en empresas de 30-200 empleados en Colombia.'
    },
    {
      question: '¿Qué es la Metodología FORJA?',
      answer: 'Es nuestro framework de 5 fases: Fundamentar, Orientar, Rediseñar, Justificar y Acompañar.'
    },
  ]

  const newsItems = [
    {
      title: 'Nuevas regulaciones para PYMEs en Colombia 2025',
      source: 'Cámara de Comercio de Bogotá',
      date: '15 Nov 2025',
      summary: 'La CCB anuncia cambios importantes en requisitos de formalización empresarial.',
      url: 'https://ccb.org.co'
    },
    {
      title: 'Crecimiento del 4.2% en el sector empresarial',
      source: 'DANE',
      date: '10 Nov 2025',
      summary: 'El DANE reporta crecimiento sostenido en empresas medianas durante Q3 2025.',
      url: 'https://dane.gov.co'
    },
    {
      title: 'Incentivos fiscales para transformación digital',
      source: 'MinTIC',
      date: '5 Nov 2025',
      summary: 'Nuevos beneficios tributarios para empresas que inviertan en digitalización.',
      url: 'https://mintic.gov.co'
    },
  ]

  const satisfactionEmojis = [
    { level: 1, emoji: '😠', label: 'Muy insatisfecho' },
    { level: 2, emoji: '😕', label: 'Insatisfecho' },
    { level: 3, emoji: '😐', label: 'Neutral' },
    { level: 4, emoji: '🙂', label: 'Satisfecho' },
    { level: 5, emoji: '😍', label: 'Muy satisfecho' },
  ]

  return (
    <>
      {/* Floating Widget Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-40 right-6 z-50 w-[400px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-12rem)] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 p-6 text-white">
              {currentView !== 'menu' && (
                <button
                  onClick={handleBack}
                  className="absolute top-4 left-4 p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}
              
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="text-3xl font-bold mb-2 tracking-tight">
                Hola <span className="inline-block animate-wave">✨</span>
              </h2>
              <p className="text-white/90 text-base font-medium">
                {currentView === 'menu' && '¿Cómo podemos ayudarte?'}
                {currentView === 'inicio' && 'Bienvenido a Forja Digital'}
                {currentView === 'mensajes' && 'Envíanos un mensaje'}
                {currentView === 'ayuda' && 'Preguntas frecuentes'}
                {currentView === 'noticias' && 'Noticias empresariales'}
              </p>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              <AnimatePresence mode="wait">
                {/* MENU VIEW */}
                {currentView === 'menu' && (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="p-6 space-y-3"
                  >
                    <button
                      onClick={() => setCurrentView('inicio')}
                      className="w-full p-4 bg-gradient-to-r from-purple-50 to-blue-50 hover:from-purple-100 hover:to-blue-100 rounded-xl transition-all text-left flex items-center gap-3 shadow-sm"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-md">
                        <Home className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900">Inicio</div>
                        <div className="text-sm text-gray-600">Califica tu experiencia</div>
                      </div>
                    </button>

                    <button
                      onClick={() => setCurrentView('mensajes')}
                      className="w-full p-4 bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 rounded-xl transition-all text-left flex items-center gap-3 shadow-sm"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-md">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900">Mensajes</div>
                        <div className="text-sm text-gray-600">Nuestro equipo te ayudará</div>
                      </div>
                    </button>

                    <button
                      onClick={() => setCurrentView('ayuda')}
                      className="w-full p-4 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 rounded-xl transition-all text-left flex items-center gap-3 shadow-sm"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-md">
                        <HelpCircle className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900">Ayuda</div>
                        <div className="text-sm text-gray-600">Preguntas frecuentes</div>
                      </div>
                    </button>

                    <button
                      onClick={() => setCurrentView('noticias')}
                      className="w-full p-4 bg-gradient-to-r from-violet-50 to-purple-50 hover:from-violet-100 hover:to-purple-100 rounded-xl transition-all text-left flex items-center gap-3 shadow-sm"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full flex items-center justify-center shadow-md">
                        <Newspaper className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900">Noticias</div>
                        <div className="text-sm text-gray-600">Actualizaciones empresariales</div>
                      </div>
                    </button>
                  </motion.div>
                )}

                {/* INICIO VIEW - FEEDBACK */}
                {currentView === 'inicio' && (
                  <motion.div
                    key="inicio"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="p-6"
                  >
                    {!feedbackSubmitted ? (
                      <>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          ¿Qué tan satisfecho estás con nuestro sitio web?
                        </h3>
                        <p className="text-gray-600 mb-6">
                          Tu opinión nos ayuda a mejorar
                        </p>

                        <div className="flex justify-between items-center gap-2 mb-4">
                          {satisfactionEmojis.map((item) => (
                            <motion.button
                              key={item.level}
                              onClick={() => handleFeedbackSubmit(item.level)}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-all"
                            >
                              <span className="text-4xl">{item.emoji}</span>
                              <span className="text-xs text-gray-600 text-center leading-tight">
                                {item.label}
                              </span>
                            </motion.button>
                          ))}
                        </div>
                      </>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-8"
                      >
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Star className="w-10 h-10 text-green-600" fill="currentColor" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          ¡Gracias por tu feedback!
                        </h4>
                        <p className="text-gray-600">
                          Tu opinión nos ayuda a mejorar
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {/* MENSAJES VIEW */}
                {currentView === 'mensajes' && (
                  <motion.div
                    key="mensajes"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="p-6"
                  >
                    <form onSubmit={handleMessageSubmit} className="space-y-4">
                      <div>
                        <input
                          type="email"
                          placeholder="email@example.com"
                          value={messageData.email}
                          onChange={(e) => setMessageData({ ...messageData, email: e.target.value })}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <textarea
                          placeholder="Haz una pregunta..."
                          value={messageData.message}
                          onChange={(e) => setMessageData({ ...messageData, message: e.target.value })}
                          required
                          rows={6}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none resize-none transition-all"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
                      >
                        <Send className="w-5 h-5" />
                        Enviar mensaje
                      </button>
                    </form>

                    <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                      <p className="text-sm text-blue-900">
                        <strong>Tiempo de respuesta:</strong> Menos de 24 horas
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* AYUDA VIEW */}
                {currentView === 'ayuda' && (
                  <motion.div
                    key="ayuda"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="p-6"
                  >
                    <div className="mb-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Buscar ayuda"
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      {faqItems.map((item, index) => (
                        <details
                          key={index}
                          className="group bg-gray-50 rounded-xl overflow-hidden"
                        >
                          <summary className="p-4 cursor-pointer hover:bg-gray-100 transition-colors font-semibold text-gray-900 list-none flex items-center justify-between">
                            {item.question}
                            <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                          </summary>
                          <div className="px-4 pb-4 text-gray-600 text-sm">
                            {item.answer}
                          </div>
                        </details>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* NOTICIAS VIEW */}
                {currentView === 'noticias' && (
                  <motion.div
                    key="noticias"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="p-6 space-y-4"
                  >
                    {newsItems.map((item, index) => (
                      <div
                        key={index}
                        className="p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors cursor-pointer"
                        onClick={() => window.open(item.url, '_blank')}
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h4 className="font-semibold text-gray-900 leading-tight">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          {item.summary}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <span className="font-medium">{item.source}</span>
                          <span>•</span>
                          <span>{item.date}</span>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer Navigation */}
            <div className="border-t border-gray-200 bg-white p-2 flex items-center justify-around">
              <button
                onClick={() => setCurrentView('inicio')}
                className={`flex-1 py-3 rounded-lg transition-colors flex flex-col items-center gap-1 ${
                  currentView === 'inicio' ? 'text-purple-600 bg-purple-50' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Home className="w-5 h-5" />
                <span className="text-xs font-semibold">Inicio</span>
              </button>
              <button
                onClick={() => setCurrentView('mensajes')}
                className={`flex-1 py-3 rounded-lg transition-colors flex flex-col items-center gap-1 ${
                  currentView === 'mensajes' ? 'text-purple-600 bg-purple-50' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <MessageCircle className="w-5 h-5" />
                <span className="text-xs font-semibold">Mensajes</span>
              </button>
              <button
                onClick={() => setCurrentView('ayuda')}
                className={`flex-1 py-3 rounded-lg transition-colors flex flex-col items-center gap-1 ${
                  currentView === 'ayuda' ? 'text-purple-600 bg-purple-50' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <HelpCircle className="w-5 h-5" />
                <span className="text-xs font-semibold">Ayuda</span>
              </button>
              <button
                onClick={() => setCurrentView('noticias')}
                className={`flex-1 py-3 rounded-lg transition-colors flex flex-col items-center gap-1 ${
                  currentView === 'noticias' ? 'text-purple-600 bg-purple-50' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Newspaper className="w-5 h-5" />
                <span className="text-xs font-semibold">Noticias</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button - Positioned above WhatsApp */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 text-white rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center"
        aria-label={isOpen ? 'Cerrar widget' : 'Abrir widget de ayuda'}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <HelpCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-purple-600 animate-ping opacity-20" />
        )}
      </motion.button>
    </>
  )
}
