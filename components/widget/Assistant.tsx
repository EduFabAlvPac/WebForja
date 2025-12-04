'use client'

import { useEffect, useState } from 'react'
import { X, Home, MessageSquare, HelpCircle, Newspaper, MessageCircle } from 'lucide-react'
import * as Tabs from '@radix-ui/react-tabs'

import { FaqAccordion } from './parts/FaqAccordion'
import { HomeRate } from './parts/HomeRate'
import { MessagesForm } from './parts/MessagesForm'
import { NewsList } from './parts/NewsList'
import { WidgetContainer } from './WidgetContainer'
import { faqData } from '@/content/faq'
import { useCountryOptional } from '@/context/CountryProvider'

interface AssistantProps {
  isOpen: boolean
  onClose: () => void
}

const tabs = [
  { value: 'home', label: 'Inicio', icon: Home },
  { value: 'messages', label: 'Mensajes', icon: MessageSquare },
  { value: 'faq', label: 'Ayuda', icon: HelpCircle },
  { value: 'news', label: 'Noticias', icon: Newspaper },
]

const tabTitles: Record<string, string> = {
  home: 'Asistente Virtual',
  messages: 'Enviar Mensaje',
  faq: 'Centro de Ayuda',
  news: 'Noticias Relevantes',
}

export function Assistant({ isOpen, onClose }: AssistantProps) {
  const [activeTab, setActiveTab] = useState('home')
  const country = useCountryOptional()

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  return (
    <WidgetContainer
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
      className="flex flex-col min-h-[520px]"
    >
      <div className="flex h-full flex-col">
        <header className="relative overflow-hidden border-b border-white/30 bg-gradient-to-r from-forja-purple to-forja-teal px-6 py-4 shadow-[0_20px_50px_rgba(15,23,42,0.35)] text-white">
          <div className="relative z-10 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/40 bg-white/10 backdrop-blur-sm">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.4em] text-white/80">
                  Forja Digital AE
                </p>
                <h2 id="widget-title" className="text-base font-heading font-semibold leading-tight">
                  {tabTitles[activeTab]}
                </h2>
                <p className="text-xs font-light text-white/75">
                  {country ? `Servicio en ${country.country.name}` : 'Transformación con foco en resultados'}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/20 text-white transition hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-forja-purple"
              aria-label="Cerrar asistente Forja"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="pointer-events-none absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        </header>

        <Tabs.Root
          value={activeTab}
          onValueChange={setActiveTab}
          className="flex-1 flex flex-col min-h-0"
        >
          <div className="flex-1 overflow-hidden">
            <Tabs.Content value="home" className="h-full focus:outline-none" tabIndex={-1}>
              <div className="h-full overflow-y-auto px-4 py-6">
                <HomeRate setActiveTab={setActiveTab} />
              </div>
            </Tabs.Content>

            <Tabs.Content value="messages" className="h-full focus:outline-none" tabIndex={-1}>
              <div className="h-full overflow-y-auto px-4 py-5">
                <MessagesForm />
              </div>
            </Tabs.Content>

                <Tabs.Content value="faq" className="h-full focus:outline-none" tabIndex={-1}>
                  <div className="h-full overflow-y-auto px-4 py-5">
                    <FaqAccordion data={faqData} />
                  </div>
                </Tabs.Content>

            <Tabs.Content value="news" className="h-full focus:outline-none" tabIndex={-1}>
              <div className="h-full overflow-y-auto px-4 py-5">
                <NewsList />
              </div>
            </Tabs.Content>
          </div>

          <Tabs.List className="flex border-t border-slate-200 bg-slate-50/70 backdrop-blur-sm rounded-b-[28px]">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.value

              return (
                <Tabs.Trigger
                  key={tab.value}
                  value={tab.value}
                  type="button"
                  aria-label={tab.label}
                  className="group relative flex-1 px-2 py-3 text-center text-[11px] font-semibold uppercase tracking-wide text-slate-500 transition-colors hover:text-forja-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-forja-teal focus-visible:ring-offset-white"
                >
                  <span
                    className={`absolute inset-x-4 top-0 h-[2px] rounded-full transition-opacity duration-200 ${
                      isActive ? 'opacity-100 bg-gradient-to-r from-forja-purple to-forja-teal' : 'opacity-0'
                    }`}
                    aria-hidden="true"
                  />
                  <Icon
                    className={`mx-auto mb-1 h-5 w-5 transition-transform ${
                      isActive ? 'text-forja-purple' : 'text-slate-400 group-hover:text-slate-600'
                    }`}
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  <span className={`${isActive ? 'text-forja-purple' : ''}`}>{tab.label}</span>
                </Tabs.Trigger>
              )
            })}
          </Tabs.List>
        </Tabs.Root>
      </div>
    </WidgetContainer>
  )
}
