/**
 * Google Analytics 4 - Event Tracking (Versión Simplificada)
 */

// Tipos de eventos
export type EventName = string

export interface EventProperties {
  [key: string]: string | number | boolean | undefined
}

/**
 * Track event genérico
 */
export function trackEvent(
  eventName: EventName,
  properties?: EventProperties
): void {
  // Temporalmente deshabilitado - se activará en producción
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', eventName, properties)
  }
}

/**
 * Track page view
 */
export function trackPageView(pagePath: string, pageTitle?: string): void {
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] Page View:', pagePath)
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
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_location: ctaLocation,
    cta_url: ctaUrl,
  })
}

/**
 * Track scroll depth
 */
export function trackScrollDepth(percentage: number): void {
  trackEvent('scroll_depth', {
    scroll_percentage: percentage,
  })
}

/**
 * Track section view
 */
export function trackSectionView(sectionName: string): void {
  trackEvent('section_view', {
    section_name: sectionName,
  })
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
  trackEvent('click_contact', {
    contact_type: contactType,
    contact_value: value,
  })
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

