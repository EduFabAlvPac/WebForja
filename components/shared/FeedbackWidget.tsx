'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, CheckCircle2, Star } from 'lucide-react'

interface FeedbackWidgetProps {
  pagePath: string
  onClose?: () => void
}

type SatisfactionLevel = 1 | 2 | 3 | 4 | 5
type FeedbackReason = 
  | 'informacion-clara'
  | 'navegacion-facil'
  | 'diseno-atractivo'
  | 'contenido-util'
  | 'carga-rapida'
  | 'informacion-confusa'
  | 'dificil-navegar'
  | 'diseno-mejorable'
  | 'contenido-insuficiente'
  | 'carga-lenta'
  | 'otro'

const satisfactionEmojis = [
  { level: 1, emoji: '😠', label: 'Muy insatisfecho', color: 'red' },
  { level: 2, emoji: '😕', label: 'Insatisfecho', color: 'orange' },
  { level: 3, emoji: '😐', label: 'Neutral', color: 'yellow' },
  { level: 4, emoji: '🙂', label: 'Satisfecho', color: 'lime' },
  { level: 5, emoji: '😍', label: 'Muy satisfecho', color: 'green' },
]

const positiveReasons = [
  { id: 'informacion-clara', label: 'La información es clara y útil' },
  { id: 'navegacion-facil', label: 'Es fácil navegar por el sitio' },
  { id: 'diseno-atractivo', label: 'El diseño es atractivo y profesional' },
  { id: 'contenido-util', label: 'El contenido me ayudó a resolver mis dudas' },
  { id: 'carga-rapida', label: 'El sitio carga rápidamente' },
]

const negativeReasons = [
  { id: 'informacion-confusa', label: 'La información no es clara' },
  { id: 'dificil-navegar', label: 'Es difícil encontrar lo que busco' },
  { id: 'diseno-mejorable', label: 'El diseño podría mejorar' },
  { id: 'contenido-insuficiente', label: 'Falta información importante' },
  { id: 'carga-lenta', label: 'El sitio es lento' },
]

export function FeedbackWidget({ pagePath, onClose }: FeedbackWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState<'rating' | 'reason' | 'submitted'>('rating')
  const [satisfaction, setSatisfaction] = useState<SatisfactionLevel | null>(null)
  const [selectedReason, setSelectedReason] = useState<FeedbackReason | null>(null)
  const [otherReason, setOtherReason] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hoveredEmoji, setHoveredEmoji] = useState<number | null>(null)

  const handleOpen = () => {
    setIsOpen(true)
    // Reset state when opening
    setStep('rating')
    setSatisfaction(null)
    setSelectedReason(null)
    setOtherReason('')
  }

  const handleClose = () => {
    setIsOpen(false)
    onClose?.()
  }

  const handleSatisfactionSelect = (level: SatisfactionLevel) => {
    setSatisfaction(level)
    setStep('reason')
  }

  const handleReasonSelect = (reason: FeedbackReason) => {
    setSelectedReason(reason)
  }

  const handleSubmit = async () => {
    if (!satisfaction) return

    setIsSubmitting(true)

    try {
      const feedbackData = {
        timestamp: new Date().toISOString(),
        satisfaction_level: satisfaction,
        satisfaction_label: satisfactionEmojis.find(e => e.level === satisfaction)?.label,
        reason: selectedReason,
        reason_text: selectedReason === 'otro' ? otherReason : 
                     [...positiveReasons, ...negativeReasons].find(r => r.id === selectedReason)?.label,
        page_url: typeof window !== 'undefined' ? window.location.href : '',
        page_path: pagePath,
        user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
        screen_resolution: typeof window !== 'undefined' ? `${window.screen.width}x${window.screen.height}` : '',
      }

      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(feedbackData),
      })

      if (response.ok) {
        setStep('submitted')
        setTimeout(() => {
          handleClose()
        }, 3000)
      }
    } catch (error) {
      console.error('Error submitting feedback:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const reasons = satisfaction && satisfaction >= 4 ? positiveReasons : negativeReasons

  return (
    <AnimatePresence>
      {(isOpen || onClose) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
            >
              {/* Header */}
              <div className="relative bg-gradient-to-r from-brand-navy to-brand-purple p-6 text-white">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="text-sm uppercase tracking-wider mb-2 text-brand-orange">
                  Tu opinión nos importa
                </div>
                <h3 className="text-2xl font-bold">
                  {step === 'rating' && '¿Qué tan satisfecho estás con nuestra página web?'}
                  {step === 'reason' && 'Cuéntanos más'}
                  {step === 'submitted' && '¡Gracias por tu feedback!'}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                  {/* Step 1: Rating */}
                  {step === 'rating' && (
                    <motion.div
                      key="rating"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                    >
                      <p className="text-gray-600 mb-6 text-center">
                        Selecciona tu nivel de satisfacción
                      </p>
                      
                      <div className="flex justify-between items-center gap-2 mb-4">
                        {satisfactionEmojis.map((item) => (
                          <motion.button
                            key={item.level}
                            onClick={() => handleSatisfactionSelect(item.level as SatisfactionLevel)}
                            onMouseEnter={() => setHoveredEmoji(item.level)}
                            onMouseLeave={() => setHoveredEmoji(null)}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-all"
                          >
                            <span className="text-4xl">{item.emoji}</span>
                            {hoveredEmoji === item.level && (
                              <motion.span
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-xs text-gray-600 font-medium text-center leading-tight"
                              >
                                {item.label}
                              </motion.span>
                            )}
                          </motion.button>
                        ))}
                      </div>

                      <div className="flex justify-between text-xs text-gray-500 px-2">
                        <span>Muy insatisfecho</span>
                        <span>Muy satisfecho</span>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Reason */}
                  {step === 'reason' && (
                    <motion.div
                      key="reason"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                    >
                      <p className="text-gray-600 mb-4">
                        Selecciona la opción que más se acerca a tu experiencia:
                      </p>

                      <div className="space-y-2 mb-6">
                        {reasons.map((reason) => (
                          <label
                            key={reason.id}
                            className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                              selectedReason === reason.id
                                ? 'border-brand-orange bg-brand-orange/5'
                                : 'border-gray-200 hover:border-brand-orange/50 hover:bg-gray-50'
                            }`}
                          >
                            <input
                              type="radio"
                              name="reason"
                              value={reason.id}
                              checked={selectedReason === reason.id}
                              onChange={() => handleReasonSelect(reason.id as FeedbackReason)}
                              className="mt-1 w-4 h-4 text-brand-orange focus:ring-brand-orange"
                            />
                            <span className="text-gray-700 leading-relaxed">{reason.label}</span>
                          </label>
                        ))}

                        <label
                          className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            selectedReason === 'otro'
                              ? 'border-brand-orange bg-brand-orange/5'
                              : 'border-gray-200 hover:border-brand-orange/50 hover:bg-gray-50'
                          }`}
                        >
                          <input
                            type="radio"
                            name="reason"
                            value="otro"
                            checked={selectedReason === 'otro'}
                            onChange={() => handleReasonSelect('otro')}
                            className="mt-1 w-4 h-4 text-brand-orange focus:ring-brand-orange"
                          />
                          <span className="text-gray-700">Otro motivo</span>
                        </label>

                        {selectedReason === 'otro' && (
                          <motion.textarea
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none resize-none"
                            rows={3}
                            placeholder="Por favor, cuéntanos más..."
                            value={otherReason}
                            onChange={(e) => setOtherReason(e.target.value)}
                          />
                        )}
                      </div>

                      <div className="flex gap-3">
                        <button
                          onClick={() => setStep('rating')}
                          className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all"
                        >
                          Atrás
                        </button>
                        <button
                          onClick={handleSubmit}
                          disabled={!selectedReason || (selectedReason === 'otro' && !otherReason.trim()) || isSubmitting}
                          className="flex-1 px-6 py-3 bg-brand-orange text-white font-semibold rounded-xl hover:bg-brand-orange-dark disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Enviando...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5" />
                              Enviar
                            </>
                          )}
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Success */}
                  {step === 'submitted' && (
                    <motion.div
                      key="submitted"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                        className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6"
                      >
                        <CheckCircle2 className="w-10 h-10 text-green-600" strokeWidth={2} />
                      </motion.div>

                      <h4 className="text-2xl font-bold text-brand-navy mb-3">
                        ¡Gracias por tu feedback!
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Tu opinión nos ayuda a mejorar continuamente la experiencia de nuestros visitantes.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
    </AnimatePresence>
  )
}
