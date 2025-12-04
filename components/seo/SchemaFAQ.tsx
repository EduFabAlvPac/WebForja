/**
 * FORJA DIGITAL - Schema FAQ Component
 * 
 * JSON-LD structured data para páginas de preguntas frecuentes.
 * Compatible con Google Rich Results para FAQPage.
 * 
 * @module components/seo/SchemaFAQ
 */

// ═══════════════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════════════

export interface FAQItem {
  question: string;
  answer: string;
}

interface SchemaFAQProps {
  items: FAQItem[];
  pageUrl?: string;
}

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export function SchemaFAQ({ items, pageUrl }: SchemaFAQProps) {
  if (!items || items.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    ...(pageUrl && { url: pageUrl }),
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 0) }}
    />
  );
}

export default SchemaFAQ;

