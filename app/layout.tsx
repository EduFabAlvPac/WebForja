import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/header/Header'
import { Footer } from '@/components/layout/footer/Footer'
import { WhatsAppFloat } from '@/components/shared/WhatsAppFloat'
import { CookieConsent } from '@/components/shared/CookieConsent'
import { ReadingProgressBar } from '@/components/ui/ReadingProgressBar'
import { StickyCTABar } from '@/components/ui/StickyCTABar'
import { FeedbackTrigger } from '@/components/shared/FeedbackTrigger'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import { AnalyticsProvider } from '@/components/analytics/AnalyticsProvider'
import { OrganizationStructuredData, WebSiteStructuredData } from '@/components/seo/StructuredData'
import config from '@/lib/config'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://forjadigital.co'),
  title: 'Forja Digital - AE | Transformación Digital y Arquitectura Empresarial',
  description: 'Consultora líder en transformación digital y arquitectura empresarial para PYMEs en Colombia y Latinoamérica. Metodología FORJA probada.',
  keywords: 'transformación digital, arquitectura empresarial, consultoría digital, Colombia, PYMEs, FORJA',
  icons: {
    icon: '/logo-color.png',
    shortcut: '/logo-color.png',
    apple: '/logo-color.png',
  },
  authors: [{ name: 'Forja Digital - AE' }],
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
  verification: {
    // Agregar cuando tengas las verificaciones
    // google: 'tu-codigo-de-verificacion',
    // yandex: 'tu-codigo-de-verificacion',
  },
  openGraph: {
    title: 'Forja Digital - AE | Transformación Digital',
    description: 'Juntos forjamos el cambio que impulsa tu futuro. Transformación digital para PYMEs.',
    type: 'website',
    locale: 'es_CO',
    siteName: 'Forja Digital - AE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forja Digital - AE',
    description: 'Transformación Digital y Arquitectura Empresarial',
  },
  other: {
    // Seguridad y privacidad
    'referrer': 'origin-when-cross-origin',
    'format-detection': 'telephone=no',
    // Compliance
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
    <html lang="es" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <OrganizationStructuredData />
        <WebSiteStructuredData />
      </head>
      <body>
        <GoogleAnalytics gaId={config.analytics.gaId} />
        <AnalyticsProvider />
        <a href="#main-content" className="skip-to-main">
          Saltar al contenido principal
        </a>
        <ReadingProgressBar />
        <Header />
        <main id="main-content" className="min-h-screen" role="main">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <StickyCTABar />
        <CookieConsent />
        <FeedbackTrigger />
      </body>
    </html>
  )
}

