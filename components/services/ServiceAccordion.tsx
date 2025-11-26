'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Check, Package, FileText } from 'lucide-react'
import { ServiceComponent } from '@/types/services'
import * as LucideIcons from 'lucide-react'

interface ServiceAccordionProps {
  components: ServiceComponent[]
}

export function ServiceAccordion({ components }: ServiceAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <div className="space-y-4">
      {components.map((component, index) => {
        const isOpen = openIndex === index
        const IconComponent = component.iconComponent 
          ? LucideIcons[component.iconComponent as keyof typeof LucideIcons] as any
          : null

        return (
          <motion.div
            key={component.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 hover:border-brand-turquoise overflow-hidden transition-all duration-300 group"
          >
            {/* Header */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between p-6 md:p-8 hover:bg-gradient-to-r hover:from-gray-50 hover:to-white transition-all text-left"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-4 flex-1">
                {IconComponent ? (
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.4 }}
                    className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-100 transition-colors"
                  >
                    <IconComponent className="w-7 h-7 text-blue-600" strokeWidth={2} />
                  </motion.div>
                ) : (
                  <div className="text-4xl flex-shrink-0">{component.icon}</div>
                )}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-1 group-hover:text-brand-orange transition-colors">
                    {component.title}
                  </h3>
                  <p className="text-gray-600">{component.description}</p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 ml-4 w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors"
              >
                <ChevronDown className="w-6 h-6 text-brand-orange" />
              </motion.div>
            </button>

            {/* Content */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 md:p-8 pt-0 border-t border-gray-200">
                    {/* QUÉ INCLUYE */}
                    <div className="mb-8">
                      <h4 className="text-lg font-bold text-brand-navy mb-4 flex items-center gap-2">
                        <span className="text-brand-turquoise">→</span>
                        Qué Incluye
                      </h4>
                      <div className="space-y-6">
                        {component.includes.map((section, idx) => (
                          <div key={idx}>
                            <p className="font-bold text-brand-navy mb-2">
                              {section.subtitle}
                            </p>
                            <ul className="space-y-2 ml-4">
                              {section.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="flex items-start gap-2">
                                  <Check className="w-5 h-5 text-brand-turquoise flex-shrink-0 mt-0.5" />
                                  <span className="text-gray-700">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ENTREGABLES */}
                    <div className="bg-brand-turquoise/10 rounded-xl p-6 border-2 border-brand-turquoise/20">
                      <h4 className="text-lg font-bold text-brand-navy mb-4 flex items-center gap-2">
                        <Package className="w-5 h-5 text-brand-turquoise" />
                        Entregables
                      </h4>
                      <ul className="space-y-3">
                        {component.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <FileText className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" strokeWidth={2} />
                            <span className="text-gray-700 font-semibold">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}


