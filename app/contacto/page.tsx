'use client'

import { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock, CheckCircle2, AlertCircle } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { useForm } from '@/lib/hooks/useForm'
import { ContactFormData, validateContactForm } from '@/lib/validations/contact'
import { api } from '@/lib/api/client'
import config from '@/lib/config'

export default function ContactoPage() {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    submitSuccess,
    submitError,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm<ContactFormData>({
    initialValues: {
      nombre: '',
      email: '',
      telefono: '',
      empresa: '',
      servicio: '',
      mensaje: '',
      aceptaPoliticas: false,
    },
    validate: validateContactForm,
    onSubmit: async (data) => {
      await api.post('/api/contact', data)
    },
  })

  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-purple to-brand-navy py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="w-full h-full relative">
            <img
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop"
              alt="Contacta con nuestro equipo de expertos"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-purple/80 to-brand-navy/90" />
        </div>
        
        <div className="container-custom text-center relative z-10">
          <h1 className="hero-title text-white mb-6">
            Hablemos de tu <span className="text-brand-orange">Transformación</span>
          </h1>
          <p className="hero-description text-white/90 max-w-2xl mx-auto">
            Estamos listos para escucharte y ayudarte a forjar el futuro de tu empresa
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollReveal>
              <div className="bg-white rounded-card shadow-card p-8">
                <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
                
                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-green-900">¡Mensaje enviado exitosamente!</h3>
                      <p className="text-sm text-green-700 mt-1">
                        Gracias por contactarnos. Te responderemos pronto.
                      </p>
                    </div>
                  </div>
                )}

                {submitError && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-red-900">Error al enviar</h3>
                      <p className="text-sm text-red-700 mt-1">{submitError}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium mb-2">
                        Nombre *
                      </label>
                      <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        value={values.nombre}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-3 border rounded-button focus:ring-2 focus:ring-brand-orange focus:border-transparent ${
                          errors.nombre && touched.nombre ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Juan Pérez"
                        aria-invalid={errors.nombre && touched.nombre ? 'true' : 'false'}
                        aria-describedby={errors.nombre && touched.nombre ? 'nombre-error' : undefined}
                      />
                      {errors.nombre && touched.nombre && (
                        <p id="nombre-error" className="mt-1 text-sm text-red-600">{errors.nombre}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-3 border rounded-button focus:ring-2 focus:ring-brand-orange focus:border-transparent ${
                          errors.email && touched.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="juan@empresa.com"
                        aria-invalid={errors.email && touched.email ? 'true' : 'false'}
                        aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
                      />
                      {errors.email && touched.email && (
                        <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium mb-2">
                        Teléfono
                      </label>
                      <input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        value={values.telefono}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-3 border rounded-button focus:ring-2 focus:ring-brand-orange focus:border-transparent ${
                          errors.telefono && touched.telefono ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="+57 300 123 4567"
                        aria-invalid={errors.telefono && touched.telefono ? 'true' : 'false'}
                        aria-describedby={errors.telefono && touched.telefono ? 'telefono-error' : undefined}
                      />
                      {errors.telefono && touched.telefono && (
                        <p id="telefono-error" className="mt-1 text-sm text-red-600">{errors.telefono}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="empresa" className="block text-sm font-medium mb-2">
                        Empresa
                      </label>
                      <input
                        id="empresa"
                        name="empresa"
                        type="text"
                        value={values.empresa}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 border border-gray-300 rounded-button focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                        placeholder="Mi Empresa S.A.S."
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="servicio" className="block text-sm font-medium mb-2">
                      Servicio de Interés
                    </label>
                    <select
                      id="servicio"
                      name="servicio"
                      value={values.servicio}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full px-4 py-3 border border-gray-300 rounded-button focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="Arquitectura Empresarial">Arquitectura Empresarial</option>
                      <option value="Transformación Digital">Transformación Digital</option>
                      <option value="Optimización de Procesos">Optimización de Procesos</option>
                      <option value="Desarrollo de Software">Desarrollo de Software</option>
                      <option value="Analítica y BI">Analítica y BI</option>
                      <option value="Change Management">Change Management</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={values.mensaje}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={5}
                      className={`w-full px-4 py-3 border rounded-button focus:ring-2 focus:ring-brand-orange focus:border-transparent ${
                        errors.mensaje && touched.mensaje ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                      aria-invalid={errors.mensaje && touched.mensaje ? 'true' : 'false'}
                      aria-describedby={errors.mensaje && touched.mensaje ? 'mensaje-error' : undefined}
                    />
                    {errors.mensaje && touched.mensaje && (
                      <p id="mensaje-error" className="mt-1 text-sm text-red-600">{errors.mensaje}</p>
                    )}
                  </div>

                  {/* Consentimiento de Políticas de Privacidad */}
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-start gap-3">
                      <input
                        id="aceptaPoliticas"
                        name="aceptaPoliticas"
                        type="checkbox"
                        checked={values.aceptaPoliticas}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`mt-1 h-4 w-4 text-brand-orange focus:ring-brand-orange border-gray-300 rounded ${
                          errors.aceptaPoliticas && touched.aceptaPoliticas ? 'border-red-500' : ''
                        }`}
                        aria-invalid={errors.aceptaPoliticas && touched.aceptaPoliticas ? 'true' : 'false'}
                        aria-describedby={errors.aceptaPoliticas && touched.aceptaPoliticas ? 'politicas-error' : undefined}
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
                        para los fines de contacto comercial, envío de información y seguimiento. *
                      </label>
                    </div>
                    {errors.aceptaPoliticas && touched.aceptaPoliticas && (
                      <p id="politicas-error" className="mt-2 text-sm text-red-600 ml-7">{errors.aceptaPoliticas}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-3 rounded-button transition-colors shadow-glow-orange disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-brand-orange" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Dirección</h3>
                        <p className="text-gray-600">
                          Bogotá, Colombia<br />
                          Atención en toda Latinoamérica
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-turquoise/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-brand-turquoise" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Teléfono</h3>
                        <p className="text-gray-600">
                          <a href={`tel:${config.contact.phone}`} className="hover:text-brand-orange transition-colors">
                            {config.contact.phone}
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-brand-purple" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-gray-600">
                          <a href={`mailto:${config.contact.email}`} className="hover:text-brand-orange transition-colors">
                            {config.contact.email}
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-coral/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-brand-coral" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Horario</h3>
                        <p className="text-gray-600">
                          Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                          Zona horaria: COT (UTC-5)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Box */}
                <div className="bg-gradient-to-br from-brand-navy to-brand-purple rounded-card p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    ¿Prefieres una Evaluación Rápida?
                  </h3>
                  <p className="mb-6">
                    Realiza nuestro diagnóstico Rayos X Empresarial gratuito y obtén un reporte personalizado en minutos.
                  </p>
                  {/* Temporalmente deshabilitado - Rayos X se conectará más adelante */}
                  {/* <a
                    href="/rayos-x-empresarial"
                    className="inline-flex items-center justify-center w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-3 rounded-button transition-colors shadow-glow-orange"
                  >
                    🔍 Iniciar Rayos X Gratuito
                  </a> */}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}

