'use client'

/**
 * Formulario de contacto localizado: mismo formulario CRM con enlace
 * a política de datos por país.
 */

import { ContactForm } from '@/app/(marketing)/contacto/_components/contact-form'
import type { LocaleCode } from '@/lib/country'

interface ContactFormLocalizedProps {
  locale: LocaleCode
  className?: string
}

export function ContactFormLocalized({ locale, className }: ContactFormLocalizedProps) {
  return (
    <ContactForm
      className={className}
      policyHref={`/${locale}/legal/politica-datos`}
    />
  )
}
