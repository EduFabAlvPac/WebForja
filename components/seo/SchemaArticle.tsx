/**
 * FORJA DIGITAL - Schema Article Component
 * 
 * JSON-LD structured data para artículos y guías.
 * Soporta Article y TechArticle según el tipo de contenido.
 * 
 * @module components/seo/SchemaArticle
 */

import { ORG } from '@/lib/org';
import type { InterestItem, InterestType } from '@/types/interest';

// ═══════════════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════════════

interface SchemaArticleProps {
  item: InterestItem;
  url: string;
  locale?: string;
}

// ═══════════════════════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Determina el tipo de schema según el tipo de contenido.
 */
function getSchemaType(type: InterestType): string {
  switch (type) {
    case 'guia':
    case 'articulo':
      return 'TechArticle';
    case 'programa':
    case 'evento':
      return 'Article';
    case 'descargable':
      return 'TechArticle';
    default:
      return 'Article';
  }
}

/**
 * Mapea categoría a keywords adicionales.
 */
function getCategoryKeywords(category: string): string[] {
  const keywordsMap: Record<string, string[]> = {
    'Regulación': ['compliance', 'normativa', 'legal'],
    'Financiamiento': ['crédito', 'inversión', 'capital'],
    'Programas': ['gobierno', 'subsidio', 'apoyo empresarial'],
    'Transformación Digital': ['digitalización', 'tecnología', 'innovación'],
    'IA & Automatización': ['inteligencia artificial', 'machine learning', 'automatización'],
    'Operaciones': ['gestión', 'procesos', 'eficiencia'],
    'Datos & Seguridad': ['ciberseguridad', 'privacidad', 'protección datos'],
  };
  return keywordsMap[category] || [];
}

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export function SchemaArticle({ item, url, locale = 'es' }: SchemaArticleProps) {
  const schemaType = getSchemaType(item.type);
  const categoryKeywords = getCategoryKeywords(item.category);
  const allKeywords = [...item.tags, ...categoryKeywords];
  
  // Construir URL de imagen absoluta
  const imageUrl = item.image.src.startsWith('http') 
    ? item.image.src 
    : `${ORG.baseUrl}${item.image.src}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    headline: item.title,
    description: item.summary,
    image: imageUrl,
    datePublished: item.dateISO,
    dateModified: item.dateISO,
    author: {
      '@type': item.source ? 'Organization' : 'Person',
      name: item.author || item.source || ORG.brandName,
      ...(item.source ? {} : { url: ORG.baseUrl }),
    },
    publisher: {
      '@type': 'Organization',
      name: ORG.brandName,
      logo: {
        '@type': 'ImageObject',
        url: `${ORG.baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    url: url,
    inLanguage: locale === 'es' ? 'es' : `es-${locale.toUpperCase()}`,
    keywords: allKeywords.join(', '),
    articleSection: item.category,
    ...(item.readMins && {
      timeRequired: `PT${item.readMins}M`,
    }),
    // Campos adicionales para TechArticle
    ...(schemaType === 'TechArticle' && {
      proficiencyLevel: 'Beginner',
      dependencies: 'Ninguno',
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 0) }}
    />
  );
}

export default SchemaArticle;

