/**
 * Analytics Multi-Country Tracking
 * 
 * Sistema de tracking que adjunta automáticamente dimensiones de país
 * a todos los eventos para segmentación multi-país en Vercel/GA4.
 */

// Tipos de eventos
export type EventName = string

export interface EventProperties {
  [key: string]: string | number | boolean | undefined
}

// Contexto global para country code (actualizado por hook)
let globalCountryContext: { lc?: string; countryCode?: string } = {}

/**
 * Establece el contexto de país global
 * Se debe llamar desde un componente React con `useEffect`
 */
export function setCountryContext(lc?: string, countryCode?: string) {
  globalCountryContext = { lc, countryCode }
}

/**
 * Track event genérico con dimensiones de país automáticas
 */
export function trackEvent(
  eventName: EventName,
  properties?: EventProperties
): void {
  // Enriquecer con contexto de país
  const enrichedProps = {
    ...properties,
    lc: globalCountryContext.lc || 'es',
    country_code: globalCountryContext.countryCode || 'co',
  }

  // Log en desarrollo
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', eventName, enrichedProps)
    return
  }

  // En producción: enviar a GA4 / Vercel Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, enrichedProps)
  }
  
  // Vercel Analytics (si está disponible)
  if (typeof window !== 'undefined' && window.va) {
    window.va('track', eventName, enrichedProps)
  }
}

/**
 * Track page view con contexto de país
 */
export function trackPageView(pagePath: string, pageTitle?: string): void {
  trackEvent('page_view', {
    page_path: pagePath,
    page_title: pageTitle || document.title,
  })
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

/**
 * Track WhatsApp click
 */
export function trackWhatsAppClick(source: 'sticky_cta' | 'widget' | 'float' | 'hero', countrySpecific: boolean = false): void {
  trackEvent('whatsapp_click', {
    source,
    country_specific: countrySpecific,
  })
}

/**
 * Track form submission
 */
export function trackFormSubmit(formType: 'contact' | 'widget_message', success: boolean = true): void {
  trackEvent('form_submit', {
    form_type: formType,
    success,
  })
}

/**
 * Track home view (específico para multi-país)
 */
export function trackHomeView(): void {
  trackEvent('view_home')
}

/**
 * Track alert interactions
 */
export function trackAlertAction(action: 'view' | 'dismiss' | 'click', alertId?: string): void {
  trackEvent('alert_action', {
    action,
    alert_id: alertId,
  })
}

// ═══════════════════════════════════════════════════════════════════════════
// INTEREST SECTION ANALYTICS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Track Interest hub page view
 */
export function trackInterestView(filters?: {
  category?: string;
  type?: string;
  search?: string;
  tags?: string[];
}): void {
  trackEvent('view_interest', {
    category: filters?.category || 'all',
    type: filters?.type || 'all',
    search_query: filters?.search || undefined,
    tags: filters?.tags?.join(',') || undefined,
  })
}

/**
 * Track Interest card/item click
 */
export function trackInterestClick(
  slug: string,
  type: string,
  options?: {
    category?: string;
    isExternal?: boolean;
    isFeatured?: boolean;
    position?: number;
  }
): void {
  trackEvent('click_interest', {
    slug,
    type,
    category: options?.category,
    is_external: options?.isExternal || false,
    is_featured: options?.isFeatured || false,
    position: options?.position,
  })
}

/**
 * Track Interest detail page view
 */
export function trackInterestDetailView(
  slug: string,
  type: string,
  category: string
): void {
  trackEvent('view_interest_detail', {
    slug,
    type,
    category,
  })
}

/**
 * Track reading progress on Interest detail pages
 * Milestones: 25%, 50%, 75%, 100%
 */
export function trackReadProgress(
  slug: string,
  percentage: 25 | 50 | 75 | 100,
  readTimeSeconds?: number
): void {
  trackEvent('read_progress', {
    slug,
    percentage,
    read_time_seconds: readTimeSeconds,
  })
}

/**
 * Track Interest download (lead magnet)
 */
export function trackInterestDownload(
  slug: string,
  options?: {
    company?: string;
    country?: string;
  }
): void {
  trackEvent('download_interest', {
    slug,
    company: options?.company,
    lead_country: options?.country,
  })
}

/**
 * Track Interest filter change
 */
export function trackInterestFilter(filterType: 'category' | 'type' | 'tag' | 'search', value: string): void {
  trackEvent('filter_interest', {
    filter_type: filterType,
    filter_value: value,
  })
}

/**
 * Track Interest share action
 */
export function trackInterestShare(slug: string, platform: 'twitter' | 'linkedin' | 'whatsapp' | 'copy'): void {
  trackEvent('share_interest', {
    slug,
    platform,
  })
}

// Tipos de window definidos en types/global.d.ts

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
  trackWhatsAppClick,
  trackFormSubmit,
  trackHomeView,
  trackAlertAction,
  setCountryContext,
  // Interest analytics
  trackInterestView,
  trackInterestClick,
  trackInterestDetailView,
  trackReadProgress,
  trackInterestDownload,
  trackInterestFilter,
  trackInterestShare,
}

export default analytics

