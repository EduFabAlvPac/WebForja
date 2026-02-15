import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Plus_Jakarta_Sans, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import { Header } from '@/components/layout/header/Header'
import { Footer } from '@/components/layout/footer/Footer'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import { AnalyticsProvider } from '@/components/analytics/AnalyticsProvider'
import { AnalyticsTracker } from '@/components/analytics/AnalyticsTracker'
import { WebVitalsReporter } from '@/components/analytics/WebVitalsReporter'
import { OrganizationStructuredData, WebSiteStructuredData } from '@/components/seo/StructuredData'
import config from '@/lib/config'
import { ORG } from '@/lib/org'

// Dynamic imports para componentes no críticos (mejora TBT y FCP)
const FloatingWhatsApp = dynamic(
  () => import('@/components/floating-whatsapp').then(mod => mod.FloatingWhatsApp),
  { ssr: false }
)

const CookieConsent = dynamic(
  () => import('@/components/shared/CookieConsent').then(mod => mod.CookieConsent),
  { ssr: false }
)

const ReadingProgressBar = dynamic(
  () => import('@/components/ui/ReadingProgressBar').then(mod => mod.ReadingProgressBar),
  { ssr: false }
)

const StickyCTABar = dynamic(
  () => import('@/components/ui/StickyCTABar').then(mod => mod.StickyCTABar),
  { ssr: false }
)

const Toaster = dynamic(
  () => import('@/components/ui/toaster').then(mod => mod.Toaster),
  { ssr: false }
)

const ExitIntentModal = dynamic(
  () => import('@/components/exit-intent').then(mod => mod.ExitIntentModal),
  { ssr: false }
)

const GlobalStickyCTA = dynamic(
  () => import('@/components/global-sticky-cta').then(mod => mod.GlobalStickyCTA),
  { ssr: false }
)

const WidgetLauncher = dynamic(
  () => import('@/components/widget/WidgetLauncher').then(mod => mod.WidgetLauncher),
  { ssr: false }
)

// FORJA Design Tokens - Tipografías
// Headings: Plus Jakarta Sans (moderna, geométrica, profesional)
const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

// Body: DM Sans (legible, versátil, humanista)
const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '700'],
})

// SEO Config - Usando constantes de ORG
export const metadata: Metadata = {
  metadataBase: new URL(ORG.baseUrl),
  title: {
    default: `${ORG.brandName} | Transformación Digital y Arquitectura Empresarial`,
    template: `%s | ${ORG.brandName}`,
  },
  description: 'Consultora líder en transformación digital y arquitectura empresarial para PYMEs en Colombia y Latinoamérica. Metodología FORJA® probada con +200 empresas.',
  keywords: [
    'transformación digital',
    'arquitectura empresarial',
    'consultoría digital',
    'Colombia',
    'PYMEs',
    'FORJA',
    'optimización de procesos',
    'gestión del talento',
    'ingeniería financiera',
  ],
  icons: {
    icon: '/logo-color.png',
    shortcut: '/logo-color.png',
    apple: '/logo-color.png',
  },
  authors: [{ name: ORG.brandName, url: ORG.baseUrl }],
  creator: ORG.legalName,
  publisher: ORG.legalName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: ORG.baseUrl,
  },
  verification: {
    // Agregar cuando tengas las verificaciones
    // google: 'tu-codigo-de-verificacion',
    // yandex: 'tu-codigo-de-verificacion',
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: ORG.baseUrl,
    siteName: ORG.brandName,
    title: `${ORG.brandName} | Transformación Digital`,
    description: `Juntos forjamos el cambio que impulsa tu futuro. Transformación digital para PYMEs en ${ORG.countryOfIncorporation} y Latinoamérica.`,
    images: [
      {
        url: `${ORG.baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${ORG.brandName} - ${ORG.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: ORG.brandName,
    description: 'Transformación Digital y Arquitectura Empresarial para PYMEs',
    images: [`${ORG.baseUrl}/og-image.png`],
    creator: ORG.social.twitter,
  },
  other: {
    'referrer': 'origin-when-cross-origin',
    'format-detection': 'telephone=no',
    'privacy-policy': '/politica-privacidad',
    'terms-of-service': '/terminos-condiciones',
    'cookie-policy': '/politica-cookies',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${dmSans.variable} ${plusJakartaSans.variable}`}>
      <head>
        {/* Preconnect para recursos externos críticos */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        <OrganizationStructuredData />
        <WebSiteStructuredData />
      </head>
      <body className="font-body antialiased bg-slate-50 text-slate-900">
        <GoogleAnalytics gaId={config.analytics.gaId} />
        <AnalyticsProvider />
        <AnalyticsTracker />
        <a href="#main-content" className="skip-to-main">
          Saltar al contenido principal
        </a>
        <ReadingProgressBar />
        <Header />
        <main id="main-content" className="min-h-screen" role="main">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp hiddenPaths={['/gracias', '/sandbox']} />
        <StickyCTABar />
        <CookieConsent />
        <Toaster />
        <ExitIntentModal />
        {/* <GlobalStickyCTA /> - Desactivado: redundante con campanita de alerta */}
        <WidgetLauncher />
        
        {/* Analytics y Métricas */}
        <Analytics />
        <SpeedInsights />
        <WebVitalsReporter />
      </body>
    </html>
  )
}

