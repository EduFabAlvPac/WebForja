/**
 * FORJA DIGITAL - Interest Detail Page (International)
 * 
 * Página de detalle para contenido de interés - versión internacional.
 * Incluye SEO con hreflang, canonical y schema Article.
 * 
 * @module app/interes/[slug]/page
 */

import { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { CountryProvider } from '@/context/CountryProvider';
import { getAllInterest } from '@/lib/interest';
import { getMdxContent } from '@/lib/mdx';
import { calculateReadingTime } from '@/utils/readingTime';
import { ReadingLayout } from '@/components/interest/ReadingLayout';
import { PlaceholderContent } from '@/components/interest/PlaceholderContent';
import { MarkdownContent } from '@/components/interest/MarkdownContent';
import { SchemaArticle } from '@/components/seo/SchemaArticle';
import { ORG } from '@/lib/org';
import type { InterestItem } from '@/types/interest';

// ═══════════════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════════════

interface PageProps {
  params: {
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
  const item = findItemBySlug(params.slug);
  
  if (!item) {
    return {
      title: 'Recurso no encontrado | Forja Digital',
      robots: { index: false, follow: false },
    };
  }

  if (item.href) {
    return {
      title: `${item.title} | Forja Digital`,
      description: item.summary,
      robots: { index: false, follow: true },
    };
  }

  const canonicalUrl = `${ORG.baseUrl}/interes/${params.slug}`;

  const languages: Record<string, string> = {
    'es': `${ORG.baseUrl}/interes/${params.slug}`,
    'es-CO': `${ORG.baseUrl}/co/interes/${params.slug}`,
    'es-CL': `${ORG.baseUrl}/cl/interes/${params.slug}`,
    'es-PE': `${ORG.baseUrl}/pe/interes/${params.slug}`,
    'es-EC': `${ORG.baseUrl}/ec/interes/${params.slug}`,
    'x-default': `${ORG.baseUrl}/interes/${params.slug}`,
  };

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
      locale: 'es',
      type: 'article',
      publishedTime: item.dateISO,
      tags: item.tags,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: item.image.alt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: item.title,
      description: item.summary,
      images: [imageUrl],
    },
  };
}

// ═══════════════════════════════════════════════════════════════════════════
// STATIC PARAMS
// ═══════════════════════════════════════════════════════════════════════════

export async function generateStaticParams() {
  const allItems = getAllInterest();
  return allItems
    .filter(item => !item.href)
    .map(item => ({ slug: item.slug }));
}

// ═══════════════════════════════════════════════════════════════════════════
// PAGE CONTENT
// ═══════════════════════════════════════════════════════════════════════════

function InterestDetailContent({ slug }: { slug: string }) {
  const item = findItemBySlug(slug);

  if (!item) {
    notFound();
  }

  if (item.href) {
    redirect(item.href);
  }

  const mdxContent = getMdxContent(slug);
  const hasContent = !!mdxContent;
  const readingTime = mdxContent 
    ? calculateReadingTime(mdxContent).minutes 
    : item.readMins || 5;
  const pageUrl = `${ORG.baseUrl}/interes/${slug}`;

  return (
    <>
      <SchemaArticle item={item} url={pageUrl} locale="es" />
      <ReadingLayout item={item} locale="es" readingTime={readingTime}>
        {hasContent ? (
          <MarkdownContent content={mdxContent} />
        ) : (
          <PlaceholderContent item={item} locale="es" />
        )}
      </ReadingLayout>
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// PAGE COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export default function InterestDetailPage({ params }: PageProps) {
  return (
    <CountryProvider locale="es">
      <InterestDetailContent slug={params.slug} />
    </CountryProvider>
  );
}
