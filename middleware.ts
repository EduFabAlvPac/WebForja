import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '@/lib/country'

// Simple in-memory rate limiter (Para producción, usar Redis o similar)
const rateLimit = new Map<string, { count: number; resetTime: number }>()

const RATE_LIMIT_MAX = 20 // requests
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minuto

function getRateLimitKey(ip: string, pathname: string): string {
  return `${ip}:${pathname}`
}

function checkRateLimit(key: string): boolean {
  const now = Date.now()
  const record = rateLimit.get(key)

  // Si no existe o el tiempo expiró, crear nuevo record
  if (!record || now > record.resetTime) {
    rateLimit.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  // Si está dentro del límite, incrementar contador
  if (record.count < RATE_LIMIT_MAX) {
    record.count++
    return true
  }

  // Límite excedido
  return false
}

// Limpiar registros antiguos cada 5 minutos
setInterval(() => {
  const now = Date.now()
  for (const [key, record] of rateLimit.entries()) {
    if (now > record.resetTime) {
      rateLimit.delete(key)
    }
  }
}, 5 * 60 * 1000)

/**
 * Mapear código de país ISO a locale soportado
 */
function mapCountryToLocale(countryCode?: string): string | null {
  if (!countryCode) return null;
  
  const countryMap: Record<string, string> = {
    'CO': 'co',  // Colombia
    'CL': 'cl',  // Chile
    'PE': 'pe',  // Perú
    'EC': 'ec',  // Ecuador
  };
  
  return countryMap[countryCode.toUpperCase()] || null;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // ========================================
  // 1. GEO DETECTION (para sugerencia)
  // ========================================
  
  // Detectar país por geolocalización (Vercel Edge)
  // @ts-ignore - request.geo está disponible en Vercel Edge
  const geoCountry = request.geo?.country;
  const suggestedLocale = mapCountryToLocale(geoCountry);
  
  // ========================================
  // 2. LOCALE DETECTION & REDIRECT
  // ========================================
  
  // Verificar si la ruta tiene un locale de país específico
  const pathnameHasCountryLocale = SUPPORTED_LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // Redirigir /es a / (Internacional ahora es la raíz)
  if (pathname === '/es' || pathname.startsWith('/es/')) {
    const newPath = pathname.replace(/^\/es/, '') || '/'
    return NextResponse.redirect(new URL(newPath, request.url))
  }

  // La raíz / y rutas sin locale son válidas (Internacional)
  // No redirigir, dejar pasar

  // ========================================
  // 2. RATE LIMITING
  // ========================================
  
  // Aplicar rate limiting solo a rutas API sensibles
  if (pathname.startsWith('/api/contact') || pathname.startsWith('/api/rayos-x')) {
    const ip = request.headers.get('x-forwarded-for') || 
                request.headers.get('x-real-ip') || 
                'unknown'
    
    const key = getRateLimitKey(ip, pathname)
    
    if (!checkRateLimit(key)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { 
          status: 429,
          headers: {
            'Retry-After': '60',
          }
        }
      )
    }
  }

  // ========================================
  // 3. PREPARAR RESPONSE CON HEADERS
  // ========================================
  
  const response = NextResponse.next()
  
  // Agregar header con país detectado (para CountrySuggest)
  if (suggestedLocale) {
    response.headers.set('x-geo-country', suggestedLocale);
  }
  
  // CORS para APIs
  if (pathname.startsWith('/api/')) {
    const origin = request.headers.get('origin')
    const allowedOrigins = [
      process.env.NEXT_PUBLIC_APP_URL || 'https://forjadigital.co',
      'http://localhost:3000',
      'http://localhost:3001',
    ]

    if (origin && allowedOrigins.includes(origin)) {
      response.headers.set('Access-Control-Allow-Origin', origin)
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    }
  }

  return response
}

export const config = {
  matcher: [
    '/api/:path*',
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}


