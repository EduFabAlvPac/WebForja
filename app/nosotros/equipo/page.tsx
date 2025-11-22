'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Users, ArrowRight, Lightbulb, Rocket, Heart, Settings, DollarSign, Leaf,
  Mail, Linkedin
} from 'lucide-react'

export default function EquipoPage() {
  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]">
      {/* Hero Section - Simple y Elegante */}
      <section className="py-10 md:py-14 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <motion.div
            className="w-full h-full"
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 15, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              alt="Equipo profesional de FORJA Digital trabajando en colaboración"
              fill
              className="object-cover"
              quality={90}
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/70 to-white/75" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Icono circular */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-24 h-24 bg-purple-100 rounded-full mb-8"
            >
              <Users className="w-12 h-12 text-purple-500" strokeWidth={2} />
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-6 leading-tight">
              Nuestro Equipo Profesional
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Expertos apasionados comprometidos con la transformación y el éxito de nuestros clientes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Talento de Clase Mundial */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Contenido */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Talento de Clase Mundial
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed mb-8">
                <p>
                  Nuestro equipo está conformado por más de 80 profesionales altamente calificados, con experiencia en las principales industrias y especializaciones en áreas clave de la consultoría empresarial.
                </p>
                <p>
                  Cada miembro de nuestro equipo aporta una combinación única de expertise técnico, visión estratégica y pasión por la innovación, trabajando en colaboración para entregar resultados excepcionales.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-cyan-50 rounded-2xl p-6 border border-cyan-100">
                  <div className="text-4xl font-bold text-cyan-600 mb-2">
                    15+
                  </div>
                  <div className="text-brand-navy font-semibold">
                    Años Experiencia Promedio
                  </div>
                </div>
                <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
                  <div className="text-4xl font-bold text-orange-600 mb-2">
                    50+
                  </div>
                  <div className="text-brand-navy font-semibold">
                    Certificaciones Profesionales
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Imagen */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-purple-50">
                  {/* Placeholder - Reemplazar con imagen real del equipo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="w-32 h-32 text-purple-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Equipo de Liderazgo */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
              Equipo de Liderazgo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Líderes visionarios que guían nuestra estrategia y cultura organizacional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                id: 1,
                name: 'María Fernández',
                role: 'CEO & Fundadora',
                specialty: 'Estrategia Empresarial',
                image: '/team/maria-fernandez.jpg',
                linkedin: 'https://linkedin.com',
                email: 'maria@forjadigital.com'
              },
              {
                id: 2,
                name: 'Carlos Rodríguez',
                role: 'Director de Transformación Digital',
                specialty: 'Tecnología e Innovación',
                image: '/team/carlos-rodriguez.jpg',
                linkedin: 'https://linkedin.com',
                email: 'carlos@forjadigital.com'
              },
              {
                id: 3,
                name: 'Ana Martínez',
                role: 'Directora de Talento',
                specialty: 'Desarrollo Organizacional',
                image: '/team/ana-martinez.jpg',
                linkedin: 'https://linkedin.com',
                email: 'ana@forjadigital.com'
              },
              {
                id: 4,
                name: 'Roberto Silva',
                role: 'Director de Operaciones',
                specialty: 'Excelencia Operacional',
                image: '/team/roberto-silva.jpg',
                linkedin: 'https://linkedin.com',
                email: 'roberto@forjadigital.com'
              }
            ].map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                  {/* Image Container */}
                  <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    {/* Placeholder - Reemplazar con fotos reales */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Users className="w-20 h-20 text-gray-300" />
                    </div>
                    
                    {/* Social Icons Overlay on hover */}
                    <div className="absolute inset-0 bg-brand-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 bg-white rounded-full hover:bg-[#0077B5] hover:scale-110 transition-all duration-300 group/linkedin"
                      >
                        <Linkedin className="w-6 h-6 text-[#0077B5] group-hover/linkedin:text-white transition-colors" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center justify-center w-12 h-12 bg-white rounded-full hover:bg-brand-orange hover:scale-110 transition-all duration-300 group/email"
                      >
                        <Mail className="w-6 h-6 text-brand-orange group-hover/email:text-white transition-colors" />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-brand-orange font-semibold text-sm mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {member.specialty}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas de Expertise */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
              Áreas de <span className="text-brand-orange">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestro equipo domina las disciplinas clave para la transformación empresarial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Lightbulb,
                iconBg: 'bg-cyan-100',
                iconColor: 'text-cyan-500',
                title: 'Estrategia Empresarial',
                description: 'Visión estratégica, gobierno corporativo y planificación financiera'
              },
              {
                icon: Rocket,
                iconBg: 'bg-orange-100',
                iconColor: 'text-orange-500',
                title: 'Transformación Digital',
                description: 'Innovación tecnológica, IA, Business Intelligence y automatización'
              },
              {
                icon: Heart,
                iconBg: 'bg-purple-100',
                iconColor: 'text-purple-500',
                title: 'Gestión del Talento',
                description: 'Desarrollo organizacional, capacitación y evaluación de desempeño'
              },
              {
                icon: Settings,
                iconBg: 'bg-red-100',
                iconColor: 'text-red-500',
                title: 'Excelencia Operacional',
                description: 'Optimización de procesos, Lean, Six Sigma y mejora continua'
              },
              {
                icon: DollarSign,
                iconBg: 'bg-teal-100',
                iconColor: 'text-teal-500',
                title: 'Finanzas Corporativas',
                description: 'Análisis financiero, gestión de cartera y planificación tributaria'
              },
              {
                icon: Leaf,
                iconBg: 'bg-violet-100',
                iconColor: 'text-violet-500',
                title: 'Sostenibilidad',
                description: 'Responsabilidad social empresarial y estrategias sustentables'
              }
            ].map((area, index) => {
              const IconComponent = area.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${area.iconBg} rounded-full mb-4`}>
                    <IconComponent className={`w-8 h-8 ${area.iconColor}`} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {area.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA - ¿Quieres Formar Parte? */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-navy to-brand-navy-dark">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              ¿Quieres Formar Parte de Nuestro <span className="text-brand-orange">Equipo?</span>
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Estamos siempre en búsqueda de talento excepcional que comparta nuestra pasión por la transformación empresarial
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                📧 Envía tu CV
              </Link>
              <Link
                href="/nosotros/testimonios"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-brand-navy font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Ver Casos de Éxito
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
