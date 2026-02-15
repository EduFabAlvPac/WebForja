/**
 * FORJA DIGITAL - Reading Layout Component
 * 
 * Layout para artículos de lectura con ToC navegable,
 * scrollspy, CTA lateral sticky y botones de compartir.
 * 
 * @module components/interest/ReadingLayout
 */

'use client';

import { useState, useEffect, useRef, ReactNode, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  Share2, 
  Twitter, 
  Linkedin, 
  Link2, 
  Check,
  ChevronRight,
  MessageCircle,
  FileText,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  trackInterestDetailView, 
  trackReadProgress, 
  trackInterestShare 
} from '@/lib/analytics';
import type { InterestItem, InterestType } from '@/types/interest';

// ═══════════════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════════════

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface ReadingLayoutProps {
  item: InterestItem;
  locale?: string;
  readingTime?: number;
  children: ReactNode;
}

// ═══════════════════════════════════════════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════════════════════════════════════════

const TYPE_STYLES: Record<InterestType, { bg: string; text: string; label: string }> = {
  programa: { bg: 'bg-teal-100', text: 'text-teal-700', label: 'Programa' },
  guia: { bg: 'bg-slate-100', text: 'text-slate-700', label: 'Guía' },
  evento: { bg: 'bg-orange-100', text: 'text-orange-700', label: 'Evento' },
  articulo: { bg: 'bg-blue-100', text: 'text-blue-700', label: 'Artículo' },
  descargable: { bg: 'bg-amber-100', text: 'text-amber-700', label: 'Descargable' },
};

// ═══════════════════════════════════════════════════════════════════════════
// HOOKS
// ═══════════════════════════════════════════════════════════════════════════

function useTableOfContents(contentRef: React.RefObject<HTMLDivElement>) {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  // Extract headings from content
  useEffect(() => {
    if (!contentRef.current) return;

    const headings = contentRef.current.querySelectorAll('h2, h3');
    const items: TocItem[] = Array.from(headings).map((heading, index) => {
      // Generate ID if not present
      if (!heading.id) {
        heading.id = `heading-${index}`;
      }
      return {
        id: heading.id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName.charAt(1)),
      };
    });
    setToc(items);
  }, [contentRef]);

  // Scrollspy
  useEffect(() => {
    if (toc.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -70% 0px',
        threshold: 0,
      }
    );

    toc.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [toc]);

  return { toc, activeId };
}

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════

function ShareButtons({ 
  title, 
  url, 
  onShare 
}: { 
  title: string; 
  url: string; 
  onShare?: (platform: 'twitter' | 'linkedin' | 'copy') => void;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      onShare?.('copy');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shareTwitter = () => {
    onShare?.('twitter');
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      '_blank'
    );
  };

  const shareLinkedIn = () => {
    onShare?.('linkedin');
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      '_blank'
    );
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-slate-500 mr-1">Compartir:</span>
      <button
        onClick={shareTwitter}
        className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors"
        aria-label="Compartir en Twitter"
      >
        <Twitter className="w-4 h-4" />
      </button>
      <button
        onClick={shareLinkedIn}
        className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors"
        aria-label="Compartir en LinkedIn"
      >
        <Linkedin className="w-4 h-4" />
      </button>
      <button
        onClick={handleCopy}
        className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors"
        aria-label="Copiar enlace"
      >
        {copied ? <Check className="w-4 h-4 text-green-600" /> : <Link2 className="w-4 h-4" />}
      </button>
    </div>
  );
}

function TableOfContents({ 
  items, 
  activeId 
}: { 
  items: TocItem[]; 
  activeId: string;
}) {
  if (items.length === 0) return null;

  return (
    <nav className="space-y-1" aria-label="Tabla de contenidos">
      <h4 className="font-semibold text-slate-900 mb-3 text-sm uppercase tracking-wide">
        En este artículo
      </h4>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                'block py-1.5 text-sm transition-all duration-200',
                'border-l-2 hover:border-forja-fire hover:text-forja-fire',
                item.level === 3 ? 'pl-6' : 'pl-4',
                activeId === item.id
                  ? 'border-forja-fire text-forja-fire font-medium'
                  : 'border-transparent text-slate-600'
              )}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function CTASidebar({ locale }: { locale?: string }) {
  return (
    <div className="bg-gradient-to-br from-forja-navy to-slate-800 rounded-2xl p-6 text-white">
      <div className="w-12 h-12 bg-forja-fire/20 rounded-xl flex items-center justify-center mb-4">
        <MessageCircle className="w-6 h-6 text-forja-fire" />
      </div>
      <h4 className="font-bold text-lg mb-2">
        ¿Necesitas ayuda?
      </h4>
      <p className="text-slate-300 text-sm mb-4">
        Nuestro equipo puede asesorarte en la implementación de estas soluciones.
      </p>
      <Button
        asChild
        className="w-full bg-forja-fire hover:bg-forja-fire/90 text-white"
      >
        <Link href={`/${locale || ''}/contacto`.replace('//', '/')}>
          Hablar con un experto
        </Link>
      </Button>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export function ReadingLayout({
  item,
  locale,
  readingTime,
  children,
}: ReadingLayoutProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const { toc, activeId } = useTableOfContents(contentRef);
  const typeStyle = TYPE_STYLES[item.type];
  const displayReadingTime = readingTime || item.readMins || 5;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  // Track detail view and read progress
  const startTimeRef = useRef<number>(Date.now());
  const progressTrackedRef = useRef<Set<number>>(new Set());
  
  // Track detail view on mount
  useEffect(() => {
    trackInterestDetailView(item.slug, item.type, item.category);
    startTimeRef.current = Date.now();
  }, [item.slug, item.type, item.category]);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      
      const rect = contentRef.current.getBoundingClientRect();
      const contentHeight = contentRef.current.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollTop = -rect.top;
      
      // Calculate progress percentage
      const progress = Math.min(
        100,
        Math.max(0, (scrollTop + viewportHeight) / contentHeight * 100)
      );
      
      // Track milestones (25, 50, 75, 100)
      const milestones = [25, 50, 75, 100] as const;
      
      milestones.forEach((milestone) => {
        if (progress >= milestone && !progressTrackedRef.current.has(milestone)) {
          progressTrackedRef.current.add(milestone);
          const readTimeSeconds = Math.round((Date.now() - startTimeRef.current) / 1000);
          trackReadProgress(item.slug, milestone, readTimeSeconds);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [item.slug]);

  // Share handlers with tracking
  const handleShare = useCallback((platform: 'twitter' | 'linkedin' | 'copy') => {
    trackInterestShare(item.slug, platform);
  }, [item.slug]);

  const formatDate = (dateISO: string) => {
    return new Intl.DateTimeFormat('es', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(dateISO));
  };

  return (
    <article className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <Link
              href={`/${locale || ''}/interes`.replace('//', '/')}
              className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-forja-fire transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a Interés
            </Link>
          </nav>

          <div className="max-w-3xl">
            {/* Meta: Type + Source */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className={cn('font-medium', typeStyle.bg, typeStyle.text)}>
                {typeStyle.label}
              </Badge>
              {item.source && (
                <span className="text-sm text-slate-500">
                  {item.sourceIcon && <span className="mr-1">{item.sourceIcon}</span>}
                  {item.source}
                </span>
              )}
              {item.featured && (
                <Badge className="bg-forja-fire text-white gap-1">
                  <Sparkles className="w-3 h-3" />
                  Destacado
                </Badge>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              {item.title}
            </h1>

            {/* Summary */}
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              {item.summary}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formatDate(item.dateISO)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {displayReadingTime} min de lectura
              </span>
              {item.author && (
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  {item.author}
                </span>
              )}
            </div>

            {/* Tags */}
            {item.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {item.image.src && (
        <div className="container mx-auto px-4 md:px-8 -mt-4 mb-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex gap-12 max-w-7xl mx-auto">
          {/* Sidebar Left - ToC (desktop) */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              <TableOfContents items={toc} activeId={activeId} />
              
              {/* Share */}
              <div className="pt-4 border-t border-slate-200">
                <ShareButtons title={item.title} url={currentUrl} onShare={handleShare} />
              </div>
            </div>
          </aside>

          {/* Content */}
          <main className="flex-1 min-w-0 max-w-3xl">
            <div
              ref={contentRef}
              className={cn(
                'prose prose-slate prose-lg max-w-none',
                // Headings
                'prose-headings:font-bold prose-headings:text-slate-900',
                'prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:scroll-mt-24',
                'prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:scroll-mt-24',
                // Paragraphs
                'prose-p:text-slate-700 prose-p:leading-relaxed',
                // Links
                'prose-a:text-forja-fire prose-a:no-underline hover:prose-a:underline',
                // Lists
                'prose-li:text-slate-700',
                // Code
                'prose-code:text-forja-fire prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-normal',
                'prose-pre:bg-slate-900 prose-pre:text-slate-100',
                // Blockquotes
                'prose-blockquote:border-forja-fire prose-blockquote:bg-slate-50 prose-blockquote:py-1 prose-blockquote:not-italic',
                // Images
                'prose-img:rounded-xl prose-img:shadow-md',
                // Tables
                'prose-table:border-collapse prose-th:bg-slate-50'
              )}
            >
              {children}
            </div>

            {/* Mobile Share */}
            <div className="lg:hidden mt-8 pt-6 border-t border-slate-200">
              <ShareButtons title={item.title} url={currentUrl} onShare={handleShare} />
            </div>
          </main>

          {/* Sidebar Right - CTA (desktop) */}
          <aside className="hidden xl:block w-72 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              <CTASidebar locale={locale} />

              {/* Related Link */}
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-semibold text-slate-900 text-sm mb-3">
                  Recursos relacionados
                </h4>
                <Link
                  href={`/${locale || ''}/interes`.replace('//', '/')}
                  className="flex items-center gap-2 text-sm text-forja-fire hover:underline"
                >
                  <FileText className="w-4 h-4" />
                  Ver más contenido
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Mobile CTA */}
      <div className="xl:hidden bg-slate-50 py-8 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-8">
          <CTASidebar locale={locale} />
        </div>
      </div>

      {/* Bottom Navigation */}
      <footer className="bg-white border-t border-slate-200 py-6">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href={`/${locale || ''}/interes`.replace('//', '/')}
              className="inline-flex items-center gap-2 text-slate-600 hover:text-forja-fire transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a todos los recursos
            </Link>
            <ShareButtons title={item.title} url={currentUrl} onShare={handleShare} />
          </div>
        </div>
      </footer>
    </article>
  );
}

export default ReadingLayout;

