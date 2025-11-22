'use client'

import { motion } from 'framer-motion'
import { Download, Building2, Users, MapPin, Quote } from 'lucide-react'
import { CaseStudy as CaseStudyType } from '@/types/services'

interface CaseStudyProps {
  caseStudy: CaseStudyType
}

export function CaseStudy({ caseStudy }: CaseStudyProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden"
    >
      {/* Header with company info */}
      <div className="bg-gradient-to-br from-brand-navy to-brand-purple p-6 md:p-8 text-white">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">{caseStudy.company.name}</h3>
            <div className="flex flex-wrap gap-4 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span>{caseStudy.company.industry}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{caseStudy.company.size}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{caseStudy.company.location}</span>
              </div>
            </div>
          </div>
          {caseStudy.downloadLink && (
            <a
              href={caseStudy.downloadLink}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-brand-navy font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              download
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Descargar Caso</span>
            </a>
          )}
        </div>
      </div>

      <div className="p-6 md:p-8">
        {/* Challenge */}
        <div className="mb-8">
          <h4 className="text-lg font-bold text-brand-navy mb-3 flex items-center gap-2">
            <span className="text-brand-orange">01</span>
            Desafío
          </h4>
          <p className="text-gray-700 leading-relaxed">{caseStudy.challenge}</p>
        </div>

        {/* Solution */}
        <div className="mb-8">
          <h4 className="text-lg font-bold text-brand-navy mb-3 flex items-center gap-2">
            <span className="text-brand-turquoise">02</span>
            Solución
          </h4>
          <p className="text-gray-700 leading-relaxed">{caseStudy.solution}</p>
        </div>

        {/* Results - ANTES vs DESPUÉS */}
        <div className="mb-8">
          <h4 className="text-lg font-bold text-brand-navy mb-4 flex items-center gap-2">
            <span className="text-brand-orange">03</span>
            Resultados
          </h4>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-3 px-4 text-brand-navy font-bold">Métrica</th>
                  <th className="text-left py-3 px-4 text-red-600 font-bold">Antes</th>
                  <th className="text-left py-3 px-4 text-green-600 font-bold">Después</th>
                </tr>
              </thead>
              <tbody>
                {caseStudy.results.before.map((metric, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 font-semibold text-gray-700">{metric.label}</td>
                    <td className="py-3 px-4 text-red-600">{metric.value}</td>
                    <td className="py-3 px-4 text-green-600 font-bold">
                      {caseStudy.results.after[index].value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-brand-turquoise/10 rounded-xl p-6 border-l-4 border-brand-turquoise">
          <Quote className="w-8 h-8 text-brand-turquoise mb-4" />
          <blockquote className="text-lg text-gray-800 italic mb-4 leading-relaxed">
            &quot;{caseStudy.testimonial.quote}&quot;
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-brand-navy rounded-full flex items-center justify-center text-white font-bold">
              {caseStudy.testimonial.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="font-bold text-brand-navy">{caseStudy.testimonial.author}</p>
              <p className="text-sm text-gray-600">{caseStudy.testimonial.position}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}


