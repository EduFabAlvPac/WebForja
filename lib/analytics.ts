/**
 * Google Analytics 4 - Event Tracking
 * Sistema de tracking de eventos para medir conversión y engagement
 */

// Tipos de eventos
export type EventName =
  // CTA Clicks
  | 'cta_rayos_x_hero'
  | 'cta_rayos_x_servicios'
  | 'cta_rayos_x_sticky_bar'
  | 'cta_rayos_x_final'
  | 'cta_metodologia_pdf'
  | 'cta_casos_exito'
  | 'cta_contacto'
  | 'cta_whatsapp'
  // Scroll Depth
  | 'scroll_25'
  | 'scroll_50'
  | 'scroll_75'
  | 'scroll_100'
  // Section Views
  | 'view_pain_points'
  | 'view_services'
  | 'view_methodology'
  | 'view_case_studies'
  | 'view_cta_section'
  // Engagement
  | 'hover_service_card'
  | 'expand_methodology_step'
  | 'click_case_study_link'
  | 'click_phone'
  | 'click_email'

export interface EventProperties {
  [key: string]: string | number | boolean | undefined
}

export interface CTAProperties extends EventProperties {
  cta_name: string
  cta_location: string
  cta_url?: string
}

/**
 * Verifica si Google Analytics está disponible
 */
function isGAAvailable(): boolean {
  return typeof window !== 'undefined' && typeof window.gtag !== 'undefined'
}

/**
 * Track event genérico
 */
export function trackEvent(
  eventName: EventName,
  properties?: EventProperties
): void {
  if (!isGAAvailable()) {
    // En desarrollo, log en consola
    if (process.env.NODE_ENV === 'development') {
      console.log('[Analytics]', eventName, properties)
    }
    return
  }

  try {
    if (window.gtag) {
      window.gtag('event', eventName, {
        ...properties,
        timestamp: new Date().toISOString(),
      })
    }
  } catch (error) {
    console.error('[Analytics] Error tracking event:', error)
  }
}

/**
 * Track page view
 */
export function trackPageView(pagePath: string, pageTitle?: string): void {
  if (!isGAAvailable()) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[Analytics] Page View:', pagePath)
    }
    return
  }

  try {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: pagePath,
        page_title: pageTitle || document.title,
      })
    }
  } catch (error) {
    console.error('[Analytics] Error tracking page view:', error)
  }
}

/**
 * Track CTA click
 */
export function trackCTAClick(
  ctaName: string,
  ctaLocation: string,
  ctaUrl?: string
): void {
  const eventMap: Record<string, EventName> = {
    'rayos_x_hero': 'cta_rayos_x_hero',
    'rayos_x_servicios': 'cta_rayos_x_servicios',
    'rayos_x_sticky_bar': 'cta_rayos_x_sticky_bar',
    'rayos_x_final': 'cta_rayos_x_final',
    'metodologia_pdf': 'cta_metodologia_pdf',
    'casos_exito': 'cta_casos_exito',
    'contacto': 'cta_contacto',
    'whatsapp': 'cta_whatsapp',
  }

  const eventName = eventMap[ctaName] || 'cta_contacto'

  trackEvent(eventName, {
    cta_name: ctaName,
    cta_location: ctaLocation,
    cta_url: ctaUrl,
  })
}

/**
 * Track scroll depth
 */
export function trackScrollDepth(percentage: 25 | 50 | 75 | 100): void {
  const eventName = `scroll_${percentage}` as EventName
  trackEvent(eventName, {
    scroll_percentage: percentage,
  })
}

/**
 * Track section view
 */
export function trackSectionView(sectionName: string): void {
  const eventMap: Record<string, EventName> = {
    'pain-points': 'view_pain_points',
    'services': 'view_services',
    'metodologia': 'view_methodology',
    'case-studies': 'view_case_studies',
    'cta': 'view_cta_section',
  }

  const eventName = eventMap[sectionName]
  if (eventName) {
    trackEvent(eventName, {
      section_name: sectionName,
    })
  }
}

/**
 * Track service card interaction
 */
export function trackServiceCardHover(serviceName: string): void {
  trackEvent('hover_service_card', {
    service_name: serviceName,
  })
}

/**
 * Track methodology step expansion
 */
export function trackMethodologyExpansion(stepNumber: number, stepName: string): void {
  trackEvent('expand_methodology_step', {
    step_number: stepNumber,
    step_name: stepName,
  })
}

/**
 * Track case study link click
 */
export function trackCaseStudyClick(caseStudyId: string, caseStudyName: string): void {
  trackEvent('click_case_study_link', {
    case_study_id: caseStudyId,
    case_study_name: caseStudyName,
  })
}

/**
 * Track contact info clicks
 */
export function trackContactClick(contactType: 'phone' | 'email', value: string): void {
  const eventName = contactType === 'phone' ? 'click_phone' : 'click_email'
  trackEvent(eventName, {
    contact_type: contactType,
    contact_value: value,
  })
}

// Declaración global para TypeScript
declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'js' | 'consent',
      targetId: string,
      config?: Record<string, any>
    ) => void
    dataLayer?: any[]
  }
}

const analytics = {
  trackEvent,
  trackPageView,
  trackCTAClick,
  trackScrollDepth,
  trackSectionView,
  trackServiceCardHover,
  trackMethodologyExpansion,
  trackCaseStudyClick,
  trackContactClick,
}

export default analytics


