/**
 * FORJA DIGITAL - Sitemap Multi-País
 * 
 * Genera sitemap con todas las URLs para todos los locales soportados
 * 
 * @module app/sitemap
 */

import { MetadataRoute } from 'next';
import { ORG } from '@/lib/org';
import { SUPPORTED_LOCALES } from '@/lib/seo/metadata';

// Paths principales que se replican para cada locale
const MAIN_PATHS = [
  '', // home
  '/servicios',
  '/nosotros',
  '/interes',
  '/contacto',
  '/legal/politica-datos',
  '/legal/terminos',
  '/legal/cookies',
  '/legal/contratacion-facturacion',
];

// Servicios específicos (ejemplo - agregar más según sea necesario)
const SERVICE_PATHS = [
  '/servicios/estrategia-transformacion',
  '/servicios/estrategia-transformacion/arquitectura-estrategica',
  '/servicios/estrategia-transformacion/transformacion-digital',
  '/servicios/talento-finanzas',
  '/servicios/talento-finanzas/gestion-talento-estrategico',
  '/servicios/talento-finanzas/ingenieria-financiera',
  '/servicios/comercial-operaciones',
  '/servicios/comercial-operaciones/excelencia-operativa',
  '/servicios/comercial-operaciones/comercial-cliente',
];

// Páginas adicionales
const ADDITIONAL_PATHS = [
  '/nosotros/historia',
  '/nosotros/equipo',
  '/nosotros/testimonios',
];

// Todas las rutas
const ALL_PATHS = [...MAIN_PATHS, ...SERVICE_PATHS, ...ADDITIONAL_PATHS];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // Generar entrada para cada locale + path
  SUPPORTED_LOCALES.forEach((locale) => {
    ALL_PATHS.forEach((path) => {
      const url = `${ORG.baseUrl}/${locale}${path}`;
      
      // Determinar prioridad según el tipo de página
      let priority = 0.7;
      let changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'monthly';
      
      if (path === '') {
        // Home
        priority = 1.0;
        changeFrequency = 'weekly';
      } else if (path === '/servicios' || path === '/contacto') {
        // Páginas principales
        priority = 0.9;
        changeFrequency = 'weekly';
      } else if (path.startsWith('/servicios/')) {
        // Servicios
        priority = 0.8;
        changeFrequency = 'monthly';
      } else if (path.startsWith('/legal/')) {
        // Legales
        priority = 0.5;
        changeFrequency = 'yearly';
      } else if (path.startsWith('/nosotros/')) {
        // Nosotros
        priority = 0.6;
        changeFrequency = 'monthly';
      }

      entries.push({
        url,
        lastModified: currentDate,
        changeFrequency,
        priority,
        alternates: {
          languages: SUPPORTED_LOCALES.reduce((acc, lc) => {
            acc[lc] = `${ORG.baseUrl}/${lc}${path}`;
            return acc;
          }, {} as Record<string, string>),
        },
      });
    });
  });

  // Ordenar por prioridad (mayor primero) y luego alfabéticamente
  return entries.sort((a, b) => {
    if (b.priority !== a.priority) {
      return (b.priority || 0) - (a.priority || 0);
    }
    return a.url.localeCompare(b.url);
  });
}
