'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Search, HelpCircle, ChevronDown } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { FaqCategory } from '@/content/faq'
import { useReducedMotion, AnimatePresence, motion } from 'framer-motion'
import config from '@/lib/config'

interface FaqAccordionProps {
  data: FaqCategory[]
}

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const highlightText = (text: string, query: string) => {
  if (!query) return text

  const parts = text.split(new RegExp(`(${escapeRegExp(query)})`, 'gi'))
  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={index} className="bg-forja-teal/20 text-forja-teal font-semibold px-1 rounded">
        {part}
      </mark>
    ) : (
      <span key={index}>{part}</span>
    )
  )
}

export function FaqAccordion({ data }: FaqAccordionProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current)

    timerRef.current = setTimeout(() => {
      setDebouncedQuery(searchQuery.trim())
    }, 200)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [searchQuery])

  const filteredData = useMemo(() => {
    if (!debouncedQuery) return data

    const lowerQuery = debouncedQuery.toLowerCase()

    return data
      .map((category) => {
        const items = category.items.filter(
          (item) =>
            item.q.toLowerCase().includes(lowerQuery) ||
            item.a.toLowerCase().includes(lowerQuery)
        )
        return { ...category, items }
      })
      .filter((category) => category.items.length > 0)
  }, [data, debouncedQuery])

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <div className="p-6 max-h-[520px] overflow-y-auto space-y-6">
      <div className="space-y-3">
        <div className="text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-forja-purple to-forja-teal text-white shadow-lg">
            <HelpCircle className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-heading font-bold text-forja-navy">Preguntas frecuentes</h3>
          <p className="text-sm text-slate-500">Encuentra respuestas claras en segundos</p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input
            type="search"
            placeholder="Buscar pregunta..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="pl-10 focus:ring-forja-teal focus:border-forja-teal"
            aria-label="Buscar pregunta frecuente"
          />
        </div>
      </div>

      {filteredData.length === 0 ? (
        <div className="space-y-4 text-center">
          <p className="text-sm text-slate-500">
            No se encontraron resultados para "{debouncedQuery}"
          </p>
          <Button
            size="sm"
            variant="ghost"
            className="w-full border-dashed border-slate-300 text-forja-navy"
            onClick={() =>
              window.open(
                `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(
                  'Hola, necesito ayuda con una pregunta en el portal.'
                )}`,
                '_blank'
              )
            }
          >
            Escríbenos por WhatsApp
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredData.map((category) => (
            <div key={category.id}>
              <h4 className="mb-3 text-xs font-heading font-bold uppercase tracking-[0.4em] text-forja-navy">
                {category.title}
              </h4>
              <div className="space-y-2">
                {category.items.map((item, index) => {
                  const itemId = `${category.id}-${index}`
                  const isOpen = openItems.has(itemId)

                  return (
                    <div
                      key={itemId}
                      className="overflow-hidden rounded-xl border border-slate-200 transition-colors hover:border-slate-300"
                    >
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left focus:outline-none focus:ring-2 focus:ring-forja-teal focus:ring-inset hover:bg-slate-50"
                        aria-expanded={isOpen}
                        aria-controls={`accordion-panel-${itemId}`}
                      >
                        <span className="flex-1 text-sm font-semibold text-forja-navy">
                          {highlightText(item.q, debouncedQuery)}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
                        >
                          <ChevronDown className="h-5 w-5 text-slate-400" />
                        </motion.div>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`accordion-panel-${itemId}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
                            className="overflow-hidden border-t border-slate-100"
                          >
                            <div className="px-4 pb-3 pt-1 text-sm leading-relaxed text-slate-800 italic">
                              {highlightText(item.a, debouncedQuery)}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
