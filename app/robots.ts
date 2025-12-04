/**
 * FORJA DIGITAL - Robots.txt
 * 
 * Configura robots.txt con sitemap y reglas de crawling
 * 
 * @module app/robots
 */

import { MetadataRoute } from 'next';
import { ORG } from '@/lib/org';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '*.json',
          '/*?*utm_*', // Evitar indexar URLs con parámetros UTM
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
        ],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
    ],
    sitemap: `${ORG.baseUrl}/sitemap.xml`,
    host: ORG.baseUrl,
  };
}
