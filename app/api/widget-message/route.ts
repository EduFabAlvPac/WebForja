import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS = 3 // 3 requests per minute per IP

interface MessagePayload {
  email: string
  message: string
}

function getRateLimitKey(request: NextRequest): string {
  // Try to get real IP from headers (for proxies/load balancers)
  const forwarded = request.headers.get('x-forwarded-for')
  const realIp = request.headers.get('x-real-ip')
  
  return forwarded?.split(',')[0] || realIp || 'unknown'
}

function checkRateLimit(key: string): { allowed: boolean; remaining: number } {
  const now = Date.now()
  const record = rateLimitMap.get(key)

  // Clean up old entries periodically
  if (rateLimitMap.size > 1000) {
    for (const [k, v] of rateLimitMap.entries()) {
      if (v.resetTime < now) {
        rateLimitMap.delete(k)
      }
    }
  }

  if (!record || record.resetTime < now) {
    // New window
    rateLimitMap.set(key, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    })
    return { allowed: true, remaining: MAX_REQUESTS - 1 }
  }

  if (record.count >= MAX_REQUESTS) {
    return { allowed: false, remaining: 0 }
  }

  record.count++
  return { allowed: true, remaining: MAX_REQUESTS - record.count }
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  return emailRegex.test(email)
}

function sanitizeInput(input: string): string {
  // Basic sanitization: trim and remove potential XSS
  return input.trim().replace(/[<>]/g, '')
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const rateLimitKey = getRateLimitKey(request)
    const { allowed, remaining } = checkRateLimit(rateLimitKey)

    if (!allowed) {
      return NextResponse.json(
        { error: 'Demasiadas solicitudes. Por favor, intenta más tarde.' },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Remaining': '0',
            'Retry-After': '60',
          },
        }
      )
    }

    // Parse body
    const body = await request.json() as MessagePayload

    // Validate required fields
    if (!body.email || !body.message) {
      return NextResponse.json(
        { error: 'Email y mensaje son requeridos' },
        { status: 400 }
      )
    }

    // Validate email format
    if (!validateEmail(body.email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Validate message length
    const message = sanitizeInput(body.message)
    if (message.length < 10) {
      return NextResponse.json(
        { error: 'El mensaje debe tener al menos 10 caracteres' },
        { status: 400 }
      )
    }

    if (message.length > 1000) {
      return NextResponse.json(
        { error: 'El mensaje no puede exceder 1000 caracteres' },
        { status: 400 }
      )
    }

    const email = sanitizeInput(body.email)

    // Log the message (placeholder for actual implementation)
    console.log('📧 Widget Message Received:', {
      email,
      message,
      timestamp: new Date().toISOString(),
      ip: rateLimitKey,
    })

    // TODO: Implement actual email sending or database storage
    // Examples:
    // - Send email via SendGrid, Resend, or Nodemailer
    // - Store in database (Prisma, MongoDB, etc.)
    // - Send to Slack/Discord webhook
    // - Add to CRM (HubSpot, Salesforce, etc.)

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500))

    return NextResponse.json(
      {
        success: true,
        message: 'Mensaje recibido correctamente',
      },
      {
        status: 200,
        headers: {
          'X-RateLimit-Remaining': remaining.toString(),
        },
      }
    )
  } catch (error) {
    console.error('Error processing widget message:', error)

    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Método no permitido' },
    { status: 405 }
  )
}

