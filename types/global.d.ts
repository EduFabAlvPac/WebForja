// Tipos globales para TypeScript

// Google Analytics gtag
interface Window {
  gtag?: (
    command: 'consent' | 'config' | 'event' | 'js' | 'set',
    targetId: string | Date | 'update',
    config?: Record<string, any>
  ) => void
  dataLayer?: any[]
}

// Eventos personalizados
interface WindowEventMap {
  cookieConsentAccepted: CustomEvent
  cookieConsentRejected: CustomEvent
}

