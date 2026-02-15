#!/usr/bin/env ts-node
/**
 * QA Script - Multi-Country Link Checker
 * 
 * Verifica:
 * - Status codes (200/404)
 * - Canonical URLs
 * - hreflang tags
 * - JSON-LD presence
 * 
 * Uso:
 * ```bash
 * npm run qa:links              # Localhost
 * npm run qa:links production   # Production URL
 * ```
 */

import https from 'https'
import http from 'http'

// Configuración
const BASE_URLS = {
  local: 'http://localhost:3000',
  production: 'https://www.forjadigital.com'
}

const LOCALES = ['es', 'co', 'cl', 'pe', 'ec'] as const
type Locale = typeof LOCALES[number]

// Rutas principales a verificar por locale
const ROUTES = [
  '/',
  '/contacto',
  '/interes',
  '/legal/contratacion-facturacion',
  '/legal/politica-datos',
  '/legal/terminos',
  '/legal/cookies',
] as const

interface CheckResult {
  url: string
  status: number
  canonical?: string
  hreflang?: string[]
  hasJsonLd: boolean
  error?: string
}

// Colores para consola
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
}

function log(message: string, color: keyof typeof colors = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`)
}

/**
 * Fetch URL y extraer info relevante
 */
async function checkUrl(url: string): Promise<CheckResult> {
  return new Promise((resolve) => {
    const urlObj = new URL(url)
    const client = urlObj.protocol === 'https:' ? https : http

    const req = client.get(url, { timeout: 10000 }, (res) => {
      let html = ''

      res.on('data', (chunk) => {
        html += chunk.toString()
      })

      res.on('end', () => {
        const result: CheckResult = {
          url,
          status: res.statusCode || 0,
          hasJsonLd: false,
        }

        // Extraer canonical
        const canonicalMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)
        if (canonicalMatch) {
          result.canonical = canonicalMatch[1]
        }

        // Extraer hreflang
        const hreflangMatches = html.matchAll(/<link[^>]+rel=["']alternate["'][^>]+hreflang=["']([^"']+)["']/gi)
        result.hreflang = Array.from(hreflangMatches, m => m[1])

        // Verificar JSON-LD
        result.hasJsonLd = /<script[^>]+type=["']application\/ld\+json["']/i.test(html)

        resolve(result)
      })
    })

    req.on('error', (error) => {
      resolve({
        url,
        status: 0,
        hasJsonLd: false,
        error: error.message,
      })
    })

    req.on('timeout', () => {
      req.destroy()
      resolve({
        url,
        status: 0,
        hasJsonLd: false,
        error: 'Timeout',
      })
    })
  })
}

/**
 * Verificar una ruta en todos los locales
 */
async function checkRouteAcrossLocales(
  baseUrl: string,
  route: string
): Promise<Map<Locale, CheckResult>> {
  const results = new Map<Locale, CheckResult>()

  log(`\n📍 Verificando ruta: ${route}`, 'cyan')

  for (const locale of LOCALES) {
    const url = `${baseUrl}/${locale}${route === '/' ? '' : route}`
    const result = await checkUrl(url)
    results.set(locale, result)

    // Log resultado
    const statusColor = result.status === 200 ? 'green' : result.status >= 400 ? 'red' : 'yellow'
    log(`  ${locale.padEnd(8)} → ${result.status} ${result.error ? `(${result.error})` : ''}`, statusColor)
  }

  return results
}

/**
 * Validar resultados y mostrar issues
 */
function validateResults(
  route: string,
  results: Map<Locale, CheckResult>
): { issues: string[], warnings: string[] } {
  const issues: string[] = []
  const warnings: string[] = []

  // 1. Verificar que todos retornan 200
  for (const [locale, result] of results) {
    if (result.status !== 200) {
      issues.push(`${locale}${route}: Status ${result.status} (expected 200)`)
    }
  }

  // 2. Verificar canonical
  for (const [locale, result] of results) {
    if (!result.canonical) {
      warnings.push(`${locale}${route}: Missing canonical`)
    }
  }

  // 3. Verificar hreflang (debe tener al menos 4 alternates + x-default)
  for (const [locale, result] of results) {
    if (!result.hreflang || result.hreflang.length < 4) {
      warnings.push(`${locale}${route}: Insufficient hreflang tags (${result.hreflang?.length || 0})`)
    }
  }

  // 4. Verificar JSON-LD
  for (const [locale, result] of results) {
    if (!result.hasJsonLd) {
      warnings.push(`${locale}${route}: Missing JSON-LD`)
    }
  }

  return { issues, warnings }
}

/**
 * Main QA execution
 */
async function runQA() {
  const env = process.argv[2] || 'local'
  const baseUrl = env === 'production' ? BASE_URLS.production : BASE_URLS.local

  log('\n╔═══════════════════════════════════════════╗', 'cyan')
  log('║   🔍 QA Multi-Country Link Checker      ║', 'cyan')
  log('╚═══════════════════════════════════════════╝', 'cyan')
  log(`\n🌐 Environment: ${env}`)
  log(`🔗 Base URL: ${baseUrl}`)
  log(`📋 Routes to check: ${ROUTES.length}`)
  log(`🌍 Locales: ${LOCALES.join(', ')}\n`)

  const allIssues: string[] = []
  const allWarnings: string[] = []

  for (const route of ROUTES) {
    const results = await checkRouteAcrossLocales(baseUrl, route)
    const { issues, warnings } = validateResults(route, results)

    allIssues.push(...issues)
    allWarnings.push(...warnings)

    // Mostrar resumen de la ruta
    if (issues.length > 0) {
      log(`  ❌ ${issues.length} issue(s)`, 'red')
    } else if (warnings.length > 0) {
      log(`  ⚠️  ${warnings.length} warning(s)`, 'yellow')
    } else {
      log(`  ✅ All checks passed`, 'green')
    }
  }

  // Resumen final
  log('\n' + '═'.repeat(50), 'cyan')
  log('\n📊 RESUMEN FINAL\n', 'cyan')

  if (allIssues.length > 0) {
    log(`❌ ISSUES (${allIssues.length}):`, 'red')
    allIssues.forEach(issue => log(`   • ${issue}`, 'red'))
    log('')
  }

  if (allWarnings.length > 0) {
    log(`⚠️  WARNINGS (${allWarnings.length}):`, 'yellow')
    allWarnings.forEach(warning => log(`   • ${warning}`, 'yellow'))
    log('')
  }

  if (allIssues.length === 0 && allWarnings.length === 0) {
    log('✅ ALL CHECKS PASSED!', 'green')
    log('🎉 No issues or warnings found.\n', 'green')
    process.exit(0)
  } else if (allIssues.length === 0) {
    log('✅ NO CRITICAL ISSUES', 'green')
    log(`⚠️  ${allWarnings.length} warnings to review.\n`, 'yellow')
    process.exit(0)
  } else {
    log(`❌ ${allIssues.length} CRITICAL ISSUES FOUND`, 'red')
    log('Please fix before deploying to production.\n', 'red')
    process.exit(1)
  }
}

// Ejecutar
runQA().catch((error) => {
  log(`\n❌ QA Script Error: ${error.message}`, 'red')
  process.exit(1)
})

