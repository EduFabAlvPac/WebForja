'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft, Download, CheckCircle2, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { api } from '@/lib/api/client'

interface Question {
  id: number
  question: string
  dimension: string
  options: { value: number; label: string }[]
}

const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    dimension: 'Estrategia Digital',
    question: '¿Tu empresa tiene una estrategia digital definida y documentada?',
    options: [
      { value: 0, label: 'No tenemos estrategia digital' },
      { value: 1, label: 'Estamos empezando a definirla' },
      { value: 2, label: 'Tenemos estrategia pero no está documentada' },
      { value: 3, label: 'Tenemos estrategia documentada' },
      { value: 4, label: 'Estrategia digital integrada con plan de negocio' }
    ]
  },
  {
    id: 2,
    dimension: 'Tecnología',
    question: '¿Cómo evalúas la infraestructura tecnológica de tu empresa?',
    options: [
      { value: 0, label: 'Sistemas obsoletos o inexistentes' },
      { value: 1, label: 'Tecnología básica y desactualizada' },
      { value: 2, label: 'Sistemas funcionales pero con limitaciones' },
      { value: 3, label: 'Infraestructura moderna y escalable' },
      { value: 4, label: 'Cloud-native con arquitectura moderna' }
    ]
  },
  {
    id: 3,
    dimension: 'Procesos',
    question: '¿Qué tan documentados y optimizados están tus procesos de negocio?',
    options: [
      { value: 0, label: 'Procesos no documentados ni estandarizados' },
      { value: 1, label: 'Algunos procesos documentados básicamente' },
      { value: 2, label: 'Procesos documentados pero no optimizados' },
      { value: 3, label: 'Procesos optimizados con mejora continua' },
      { value: 4, label: 'Procesos digitalizados y automatizados' }
    ]
  },
  {
    id: 4,
    dimension: 'Cultura Digital',
    question: '¿Cómo describirías la cultura digital en tu organización?',
    options: [
      { value: 0, label: 'Resistencia al cambio y poco uso de tecnología' },
      { value: 1, label: 'Baja adopción de herramientas digitales' },
      { value: 2, label: 'Adopción moderada, falta capacitación' },
      { value: 3, label: 'Cultura abierta al cambio digital' },
      { value: 4, label: 'Cultura de innovación y transformación digital' }
    ]
  },
  {
    id: 5,
    dimension: 'Datos y Analítica',
    question: '¿Cómo utilizas los datos para tomar decisiones?',
    options: [
      { value: 0, label: 'Decisiones basadas en intuición' },
      { value: 1, label: 'Reportes básicos manuales' },
      { value: 2, label: 'Algunos dashboards con datos históricos' },
      { value: 3, label: 'Analítica avanzada en tiempo real' },
      { value: 4, label: 'Predictive analytics y Machine Learning' }
    ]
  }
]

export default function RayosXEmpresarial() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)
  const [showEmailForm, setShowEmailForm] = useState(false)
  const [email, setEmail] = useState('')
  const [nombre, setNombre] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [aceptaPoliticas, setAceptaPoliticas] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [emailSent, setEmailSent] = useState(false)

  const totalQuestions = QUIZ_QUESTIONS.length
  const progress = (Object.keys(answers).length / totalQuestions) * 100
  const currentQuestion = QUIZ_QUESTIONS[currentStep]

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }))
  }

  const canProceed = answers[currentQuestion.id] !== undefined

  const handleNext = () => {
    if (currentStep < totalQuestions - 1) {
      setCurrentStep(prev => prev + 1)
    } else if (canProceed) {
      setShowEmailForm(true)
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const calculateResults = async () => {
    setIsSubmitting(true)
    
    try {
      const response = await api.post('/api/rayos-x', {
        answers,
        email: email || undefined,
        nombre: nombre || undefined,
        empresa: empresa || undefined,
      })
      
      setShowResults(true)
      if (email && nombre) {
        setEmailSent(true)
      }
    } catch (error) {
      console.error('Error al calcular resultados:', error)
      // Mostrar resultados de todas formas
      setShowResults(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0)
  const maxScore = totalQuestions * 4
  const scorePercentage = (totalScore / maxScore) * 100

  const getMaturityLevel = () => {
    if (scorePercentage < 20) return { level: 'Inicial', color: 'text-red-600', desc: 'Tu empresa está en las primeras etapas de madurez digital' }
    if (scorePercentage < 40) return { level: 'Emergente', color: 'text-orange-600', desc: 'Hay bases digitales pero mucho por mejorar' }
    if (scorePercentage < 60) return { level: 'Intermedio', color: 'text-yellow-600', desc: 'Buen progreso digital con oportunidades de optimización' }
    if (scorePercentage < 80) return { level: 'Avanzado', color: 'text-blue-600', desc: 'Madurez digital sólida con capacidad de innovación' }
    return { level: 'Líder Digital', color: 'text-green-600', desc: 'Excelencia en madurez digital y transformación' }
  }

  const maturity = getMaturityLevel()

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-navy to-brand-purple py-20 pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-card shadow-2xl p-8 md:p-12"
        >
          {!showResults ? (
            <>
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-h2-mobile md:text-h2-desktop mb-4">
                  Rayos X <span className="text-brand-orange">Empresarial</span>
                </h1>
                <p className="text-gray-600 mb-6">
                  Descubre el nivel de madurez digital de tu empresa en solo 5 minutos
                </p>
                
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Progreso: {Object.keys(answers).length} de {totalQuestions} preguntas</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
              </div>

              {/* Question */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="mb-8"
                >
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-brand-turquoise/10 text-brand-turquoise rounded-full text-sm font-semibold mb-4">
                      {currentQuestion.dimension}
                    </span>
                    <h2 className="text-2xl font-bold mb-6">
                      {currentQuestion.question}
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {currentQuestion.options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(currentQuestion.id, option.value)}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                          answers[currentQuestion.id] === option.value
                            ? 'border-brand-orange bg-brand-orange/5'
                            : 'border-gray-200 hover:border-brand-orange/50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{option.label}</span>
                          {answers[currentQuestion.id] === option.value && (
                            <CheckCircle2 className="h-5 w-5 text-brand-orange" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              {!showEmailForm ? (
                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={handlePrev}
                    disabled={currentStep === 0}
                  >
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Anterior
                  </Button>
                  
                  <Button
                    onClick={handleNext}
                    disabled={!canProceed}
                    className="bg-brand-orange hover:bg-brand-orange-dark"
                  >
                    {currentStep < totalQuestions - 1 ? (
                      <>
                        Siguiente
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Ver Resultados
                        <Download className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              ) : (
                /* Email Form */
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-6">
                    <Mail className="w-12 h-12 text-brand-orange mx-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-2">
                      ¿Quieres recibir tus resultados por email?
                    </h2>
                    <p className="text-gray-600">
                      Opcional: Ingresa tus datos para recibir un reporte detallado
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium mb-2">
                        Nombre
                      </label>
                      <input
                        id="nombre"
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                        placeholder="Tu nombre"
                      />
                    </div>

                    <div>
                      <label htmlFor="email-input" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        id="email-input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="empresa" className="block text-sm font-medium mb-2">
                        Empresa (opcional)
                      </label>
                      <input
                        id="empresa"
                        type="text"
                        value={empresa}
                        onChange={(e) => setEmpresa(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                        placeholder="Tu empresa"
                      />
                    </div>
                  </div>

                  {/* Consentimiento de Políticas de Privacidad */}
                  {(email || nombre) && (
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex items-start gap-3">
                        <input
                          id="aceptaPoliticas"
                          type="checkbox"
                          checked={aceptaPoliticas}
                          onChange={(e) => setAceptaPoliticas(e.target.checked)}
                          className="mt-1 h-4 w-4 text-brand-orange focus:ring-brand-orange border-gray-300 rounded"
                        />
                        <label htmlFor="aceptaPoliticas" className="text-sm text-gray-700 leading-relaxed">
                          Acepto la{' '}
                          <a
                            href="/politica-privacidad"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-orange hover:text-brand-orange-dark underline font-medium"
                          >
                            Política de Privacidad
                          </a>{' '}
                          y autorizo el tratamiento de mis datos personales de acuerdo con la{' '}
                          <a
                            href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-orange hover:text-brand-orange-dark underline font-medium"
                          >
                            Ley 1581 de 2012
                          </a>{' '}
                          para recibir el reporte por email. *
                        </label>
                      </div>
                      {(email || nombre) && !aceptaPoliticas && (
                        <p className="mt-2 text-sm text-red-600 ml-7">
                          Debes aceptar la Política de Privacidad para recibir el reporte por email
                        </p>
                      )}
                    </div>
                  )}

                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      onClick={() => setShowEmailForm(false)}
                      className="flex-1"
                    >
                      Volver
                    </Button>
                    <Button
                      onClick={calculateResults}
                      disabled={isSubmitting || ((email || nombre) && !aceptaPoliticas)}
                      className="flex-1 bg-brand-orange hover:bg-brand-orange-dark disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Procesando...' : 'Ver Resultados'}
                    </Button>
                  </div>

                  <button
                    onClick={calculateResults}
                    className="w-full text-center text-sm text-gray-500 hover:text-gray-700 mt-4"
                  >
                    Omitir y ver resultados sin email
                  </button>
                </motion.div>
              )}
            </>
          ) : showResults ? (
            /* Results */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              {emailSent && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div className="text-left">
                    <h3 className="font-semibold text-green-900">¡Email enviado!</h3>
                    <p className="text-sm text-green-700 mt-1">
                      Revisa tu bandeja de entrada para ver el reporte detallado.
                    </p>
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h2 className="text-h2-mobile md:text-h2-desktop mb-4">
                  Resultados de tu <span className="text-brand-orange">Diagnóstico</span>
                </h2>
              </div>

              <div className="bg-gray-50 rounded-card p-8 mb-8">
                <div className="mb-6">
                  <div className="text-6xl font-bold mb-2 text-brand-orange">
                    {Math.round(scorePercentage)}%
                  </div>
                  <p className="text-xl text-gray-600">Nivel de Madurez Digital</p>
                </div>

                <div className={`text-3xl font-bold mb-2 ${maturity.color}`}>
                  {maturity.level}
                </div>
                <p className="text-gray-600">{maturity.desc}</p>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="font-bold text-xl mb-4">Próximos Pasos Recomendados:</h3>
                <ul className="text-left space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span>Agenda una consulta gratuita con nuestro equipo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span>Descarga tu reporte detallado en PDF</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span>Conoce la Metodología FORJA personalizada para ti</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1 bg-brand-orange hover:bg-brand-orange-dark">
                  <Download className="mr-2 h-5 w-5" />
                  Descargar Reporte PDF
                </Button>
                <Button size="lg" variant="outline" className="flex-1" asChild>
                  <a href="/contacto">Agendar Consulta Gratuita</a>
                </Button>
              </div>
            </motion.div>
          ) : null}
        </motion.div>
      </div>
    </div>
  )
}

