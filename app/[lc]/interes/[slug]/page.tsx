/**
 * FORJA DIGITAL - Interest Detail Page
 * 
 * Página de detalle para contenido de interés.
 * Incluye SEO con hreflang, canonical, schema Article/TechArticle.
 * Renderiza MDX si existe, placeholder si no, o redirige si es externo.
 * 
 * @module app/[lc]/interes/[slug]/page
 */

import { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { getAllInterest } from '@/lib/interest';
import { hasMdxContent, getMdxContent } from '@/lib/mdx';
import { calculateReadingTime } from '@/utils/readingTime';
import { ReadingLayout } from '@/components/interest/ReadingLayout';
import { PlaceholderContent } from '@/components/interest/PlaceholderContent';
import { MarkdownContent } from '@/components/interest/MarkdownContent';
import { SchemaArticle } from '@/components/seo/SchemaArticle';
import { ORG } from '@/lib/org';
import { SUPPORTED_LOCALES } from '@/lib/country';
import type { InterestItem } from '@/types/interest';

// ═══════════════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════════════

interface PageProps {
  params: {
    lc: string;
    slug: string;
  };
}

// ═══════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

function findItemBySlug(slug: string): InterestItem | undefined {
  const allItems = getAllInterest();
  return allItems.find(item => item.slug === slug);
}

// ═══════════════════════════════════════════════════════════════════════════
// METADATA
// ═══════════════════════════════════════════════════════════════════════════

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lc, slug } = params;
  const item = findItemBySlug(slug);
  
  if (!item) {
    return {
      title: 'Recurso no encontrado | Forja Digital',
      robots: { index: false, follow: false },
    };
  }

  // Si es externo, no indexar esta página
  if (item.href) {
    return {
      title: `${item.title} | Forja Digital`,
      description: item.summary,
      robots: { index: false, follow: true },
    };
  }

  const canonicalUrl = `${ORG.baseUrl}/${lc}/interes/${slug}`;
  const isInternational = lc === 'es';

  // Construir alternates para hreflang
  const languages: Record<string, string> = {
    'es': `${ORG.baseUrl}/interes/${slug}`,
    'es-CO': `${ORG.baseUrl}/co/interes/${slug}`,
    'es-CL': `${ORG.baseUrl}/cl/interes/${slug}`,
    'es-PE': `${ORG.baseUrl}/pe/interes/${slug}`,
    'es-EC': `${ORG.baseUrl}/ec/interes/${slug}`,
    'x-default': `${ORG.baseUrl}/interes/${slug}`,
  };

  // Construir URL de imagen
  const imageUrl = item.image.src.startsWith('http')
    ? item.image.src
    : `${ORG.baseUrl}${item.image.src}`;

  return {
    title: `${item.title} | Forja Digital`,
    description: item.summary,
    keywords: item.tags,
    authors: item.author ? [{ name: item.author }] : undefined,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title: item.title,
      description: item.summary,
      url: canonicalUrl,
      siteName: ORG.brandName,
      locale: isInternational ? 'es' : `es_${lc.toUpperCase()}`,
      type: 'article',
      publishedTime: item.dateISO,
      modifiedTime: item.dateISO,
      authors: item.author ? [item.author] : undefined,
      tags: item.tags,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: item.image.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: item.title,
      description: item.summary,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// ═══════════════════════════════════════════════════════════════════════════
// STATIC PARAMS
// ═══════════════════════════════════════════════════════════════════════════

export async function generateStaticParams() {
  const allItems = getAllInterest();
  const params: { lc: string; slug: string }[] = [];
  
  SUPPORTED_LOCALES.forEach(lc => {
    allItems.forEach(item => {
      // Solo generar para items sin href externo
      if (!item.href) {
        params.push({ lc, slug: item.slug });
      }
    });
  });
  
  return params;
}

// ═══════════════════════════════════════════════════════════════════════════
// PAGE COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export default function InterestDetailPage({ params }: PageProps) {
  const { lc, slug } = params;
  const item = findItemBySlug(slug);

  // 404 si no existe el item
  if (!item) {
    notFound();
  }

  // Redirect 307 si es contenido externo
  if (item.href) {
    redirect(item.href);
  }

  // Verificar si existe contenido MDX
  const mdxContent = getMdxContent(slug);
  const hasContent = !!mdxContent;

  // Calcular tiempo de lectura
  const readingTime = mdxContent 
    ? calculateReadingTime(mdxContent).minutes 
    : item.readMins || 5;

  // URL para schema
  const pageUrl = `${ORG.baseUrl}/${lc}/interes/${slug}`;

  return (
    <>
      {/* Schema JSON-LD */}
      <SchemaArticle 
        item={item} 
        url={pageUrl} 
        locale={lc} 
      />
      
      {/* Content */}
      <ReadingLayout 
        item={item} 
        locale={lc}
        readingTime={readingTime}
      >
        {hasContent ? (
          <MarkdownContent content={mdxContent} />
        ) : (
          <PlaceholderContent item={item} locale={lc} />
        )}
      </ReadingLayout>
    </>
  );
}
