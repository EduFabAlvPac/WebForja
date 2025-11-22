import { MetadataRoute } from 'next'
import config from '@/lib/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = config.app.url
  const lastModified = new Date()

  // Rutas principales
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/nosotros/equipo`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/nosotros/historia`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/nosotros/testimonios`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/rayos-x-empresarial`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/politica-cookies`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Servicios
  const servicios = [
    'arquitectura-empresarial',
    'transformacion-digital',
    'optimizacion-procesos',
    'desarrollo-software',
    'analitica-bi',
    'excelencia-operativa',
    'comercial-servicio',
    'finanzas',
    'talento-humano',
  ]

  const servicioRoutes: MetadataRoute.Sitemap = servicios.map((servicio) => ({
    url: `${baseUrl}/servicios/${servicio}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...servicioRoutes]
}

