import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

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

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

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

  // Agregar headers de seguridad adicionales
  const response = NextResponse.next()
  
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


