import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/header/Header'
import { Footer } from '@/components/layout/footer/Footer'
import { WhatsAppFloat } from '@/components/shared/WhatsAppFloat'
import { CookieConsent } from '@/components/shared/CookieConsent'

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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <CookieConsent />
      </body>
    </html>
  )
}

