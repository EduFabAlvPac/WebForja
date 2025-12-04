/**
 * FORJA DIGITAL - Interest Card Component
 * 
 * Tarjeta compacta para contenido de interés.
 * Diseño profesional con miniatura, meta y CTA.
 * 
 * @module components/interest/InterestCard
 */

'use client';

import { forwardRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ExternalLink, Calendar, Clock, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { trackInterestClick } from '@/lib/analytics';
import type { InterestItem, InterestType } from '@/types/interest';

// ═══════════════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════════════

interface InterestCardProps {
  item: InterestItem;
  /** Variante de diseño */
  variant?: 'compact' | 'full' | 'horizontal';
  /** Locale para links internos */
  locale?: string;
  /** Clase adicional */
  className?: string;
}

// ═══════════════════════════════════════════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════════════════════════════════════════

const TYPE_STYLES: Record<InterestType, { bg: string; text: string; label: string }> = {
  programa: { 
    bg: 'bg-teal-100', 
    text: 'text-teal-700', 
    label: 'Programa' 
  },
  regulacion: { 
    bg: 'bg-purple-100', 
    text: 'text-purple-700', 
    label: 'Regulación' 
  },
  guia: { 
    bg: 'bg-slate-100', 
    text: 'text-slate-700', 
    label: 'Guía' 
  },
  evento: { 
    bg: 'bg-orange-100', 
    text: 'text-orange-700', 
    label: 'Evento' 
  },
  articulo: { 
    bg: 'bg-blue-100', 
    text: 'text-blue-700', 
    label: 'Artículo' 
  },
  descargable: { 
    bg: 'bg-amber-100', 
    text: 'text-amber-700', 
    label: 'Descargable' 
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════════════════════

function formatDate(dateISO: string): string {
  const date = new Date(dateISO);
  return new Intl.DateTimeFormat('es', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
}

function formatShortDate(dateISO: string): string {
  const date = new Date(dateISO);
  return new Intl.DateTimeFormat('es', {
    day: 'numeric',
    month: 'short',
  }).format(date);
}

// ═══════════════════════════════════════════════════════════════════════════
// TYPE CHIP
// ═══════════════════════════════════════════════════════════════════════════

function TypeChip({ type }: { type: InterestType }) {
  const style = TYPE_STYLES[type];
  
  return (
    <span 
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold',
        style.bg, 
        style.text
      )}
    >
      {style.label}
    </span>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// COMPACT CARD (default)
// ═══════════════════════════════════════════════════════════════════════════

const CompactCard = forwardRef<HTMLAnchorElement, InterestCardProps>(
  ({ item, locale, className }, ref) => {
    const isExternal = !!item.href;
    const href = isExternal ? item.href! : `/${locale || ''}/interes/${item.slug}`.replace('//', '/');
    
    const CardElement = isExternal ? 'a' : Link;
    const externalProps = isExternal 
      ? { target: '_blank', rel: 'noopener noreferrer' } 
      : {};

    const handleClick = () => {
      trackInterestClick(item.slug, item.type, {
        category: item.category,
        isExternal,
        isFeatured: item.featured,
      });
    };

    return (
      <CardElement
        ref={ref as any}
        href={href}
        onClick={handleClick}
        aria-label={`${TYPE_STYLES[item.type].label}: ${item.title}${isExternal ? ' (abre en nueva pestaña)' : ''}`}
        {...externalProps}
        className={cn(
          'group flex items-start gap-4 p-4',
          'rounded-xl border border-slate-200 bg-white',
          'shadow-sm hover:shadow-md hover:bg-slate-50',
          'transition-all duration-200',
          'focus:outline-none focus:ring-2 focus:ring-forja-fire/30 focus:ring-offset-2',
          'focus-visible:ring-2 focus-visible:ring-forja-fire focus-visible:ring-offset-2',
          className
        )}
      >
        {/* Thumbnail */}
        <div className="relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-slate-100">
          {item.image.src ? (
            <Image
              src={item.image.src}
              alt={item.image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="64px"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
              <span className="text-2xl">
                {TYPE_STYLES[item.type].label.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header: Type + Source */}
          <div className="flex items-center gap-2 mb-1">
            <TypeChip type={item.type} />
            {item.source && (
              <span className="text-xs text-slate-500 truncate">
                {item.sourceIcon && <span className="mr-1">{item.sourceIcon}</span>}
                {item.source}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="font-semibold text-slate-900 line-clamp-2 text-sm leading-tight mb-1 group-hover:text-forja-fire transition-colors">
            {item.title}
          </h3>

          {/* Summary */}
          <p className="text-xs text-slate-600 line-clamp-2 mb-2">
            {item.summary}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {formatShortDate(item.dateISO)}
            </span>
            {item.readMins && (
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {item.readMins} min
              </span>
            )}
          </div>
        </div>

        {/* Chevron */}
        <div className="flex-shrink-0 self-center">
          {isExternal ? (
            <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-forja-fire transition-colors" />
          ) : (
            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-forja-fire group-hover:translate-x-0.5 transition-all" />
          )}
        </div>
      </CardElement>
    );
  }
);
CompactCard.displayName = 'CompactCard';

// ═══════════════════════════════════════════════════════════════════════════
// FULL CARD (for grid)
// ═══════════════════════════════════════════════════════════════════════════

const FullCard = forwardRef<HTMLAnchorElement, InterestCardProps>(
  ({ item, locale, className }, ref) => {
    const isExternal = !!item.href;
    const href = isExternal ? item.href! : `/${locale || ''}/interes/${item.slug}`.replace('//', '/');
    
    const CardElement = isExternal ? 'a' : Link;
    const externalProps = isExternal 
      ? { target: '_blank', rel: 'noopener noreferrer' } 
      : {};

    const handleClick = () => {
      trackInterestClick(item.slug, item.type, {
        category: item.category,
        isExternal,
        isFeatured: item.featured,
      });
    };

    return (
      <CardElement
        ref={ref as any}
        href={href}
        onClick={handleClick}
        aria-label={`${TYPE_STYLES[item.type].label}: ${item.title}${isExternal ? ' (abre en nueva pestaña)' : ''}`}
        {...externalProps}
        className={cn(
          'group flex flex-col h-full',
          'rounded-xl border border-slate-200 bg-white overflow-hidden',
          'shadow-sm hover:shadow-lg hover:-translate-y-1',
          'transition-all duration-300',
          'focus:outline-none focus:ring-2 focus:ring-forja-fire/30 focus:ring-offset-2',
          'focus-visible:ring-2 focus-visible:ring-forja-fire focus-visible:ring-offset-2',
          className
        )}
      >
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          {item.image.src ? (
            <Image
              src={item.image.src}
              alt={item.image.alt || `Imagen de ${item.title}`}
              fill
              loading="lazy"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
              <span className="text-4xl text-slate-300">
                {TYPE_STYLES[item.type].label.charAt(0)}
              </span>
            </div>
          )}
          
          {/* Type Badge */}
          <div className="absolute top-3 left-3">
            <TypeChip type={item.type} />
          </div>

          {/* Featured Badge */}
          {item.featured && (
            <div className="absolute top-3 right-3">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-forja-fire text-white">
                <Sparkles className="w-3 h-3" />
                Destacado
              </span>
            </div>
          )}

          {/* Source Badge */}
          {item.source && (
            <div className="absolute bottom-3 left-3">
              <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-white/90 backdrop-blur-sm text-slate-700 shadow-sm">
                {item.sourceIcon && <span className="mr-1">{item.sourceIcon}</span>}
                {item.source}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-4">
          {/* Title */}
          <h3 className="font-bold text-slate-900 line-clamp-2 text-base leading-tight mb-2 group-hover:text-forja-fire transition-colors">
            {item.title}
          </h3>

          {/* Summary */}
          <p className="text-sm text-slate-600 line-clamp-3 mb-3 flex-1">
            {item.summary}
          </p>

          {/* Tags */}
          {item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {item.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full"
                >
                  #{tag}
                </span>
              ))}
              {item.tags.length > 3 && (
                <span className="text-xs text-slate-400">+{item.tags.length - 3}</span>
              )}
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-100">
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(item.dateISO)}
              </span>
              {item.readMins && (
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {item.readMins} min
                </span>
              )}
            </div>

            <span className="flex items-center gap-1 text-sm font-medium text-forja-fire">
              {isExternal ? (
                <>Ver <ExternalLink className="w-4 h-4" /></>
              ) : (
                <>Leer <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></>
              )}
            </span>
          </div>
        </div>
      </CardElement>
    );
  }
);
FullCard.displayName = 'FullCard';

// ═══════════════════════════════════════════════════════════════════════════
// HORIZONTAL CARD (for featured/hero)
// ═══════════════════════════════════════════════════════════════════════════

const HorizontalCard = forwardRef<HTMLAnchorElement, InterestCardProps>(
  ({ item, locale, className }, ref) => {
    const isExternal = !!item.href;
    const href = isExternal ? item.href! : `/${locale || ''}/interes/${item.slug}`.replace('//', '/');
    
    const CardElement = isExternal ? 'a' : Link;
    const externalProps = isExternal 
      ? { target: '_blank', rel: 'noopener noreferrer' } 
      : {};

    const handleClick = () => {
      trackInterestClick(item.slug, item.type, {
        category: item.category,
        isExternal,
        isFeatured: item.featured,
      });
    };

    return (
      <CardElement
        ref={ref as any}
        href={href}
        onClick={handleClick}
        aria-label={`${TYPE_STYLES[item.type].label} destacado: ${item.title}${isExternal ? ' (abre en nueva pestaña)' : ''}`}
        {...externalProps}
        className={cn(
          'group flex flex-col md:flex-row',
          'rounded-xl border border-slate-200 bg-white overflow-hidden',
          'shadow-sm hover:shadow-lg',
          'transition-all duration-300',
          'focus:outline-none focus:ring-2 focus:ring-forja-fire/30 focus:ring-offset-2',
          'focus-visible:ring-2 focus-visible:ring-forja-fire focus-visible:ring-offset-2',
          className
        )}
      >
        {/* Image - priority for hero featured card */}
        <div className="relative w-full md:w-80 aspect-[16/10] md:aspect-auto flex-shrink-0 overflow-hidden bg-slate-100">
          {item.image.src ? (
            <Image
              src={item.image.src}
              alt={item.image.alt || `Imagen de ${item.title}`}
              fill
              priority={item.featured}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 320px"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
              <span className="text-5xl text-slate-300">
                {TYPE_STYLES[item.type].label.charAt(0)}
              </span>
            </div>
          )}
          
          {/* Featured Badge */}
          {item.featured && (
            <div className="absolute top-3 right-3">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-forja-fire text-white shadow-lg">
                <Sparkles className="w-3 h-3" />
                Destacado
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5 md:p-6">
          {/* Header */}
          <div className="flex items-center gap-3 mb-3">
            <TypeChip type={item.type} />
            {item.source && (
              <span className="text-sm text-slate-500">
                {item.sourceIcon && <span className="mr-1">{item.sourceIcon}</span>}
                {item.source}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="font-bold text-xl text-slate-900 line-clamp-2 mb-2 group-hover:text-forja-fire transition-colors">
            {item.title}
          </h3>

          {/* Summary */}
          <p className="text-slate-600 line-clamp-3 mb-4 flex-1">
            {item.summary}
          </p>

          {/* Tags */}
          {item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formatDate(item.dateISO)}
              </span>
              {item.readMins && (
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {item.readMins} min de lectura
                </span>
              )}
            </div>

            <span className="flex items-center gap-2 text-base font-semibold text-forja-fire group-hover:gap-3 transition-all">
              {isExternal ? (
                <>Ver más <ExternalLink className="w-5 h-5" /></>
              ) : (
                <>Leer más <ChevronRight className="w-5 h-5" /></>
              )}
            </span>
          </div>
        </div>
      </CardElement>
    );
  }
);
HorizontalCard.displayName = 'HorizontalCard';

// ═══════════════════════════════════════════════════════════════════════════
// MAIN EXPORT
// ═══════════════════════════════════════════════════════════════════════════

export const InterestCard = forwardRef<HTMLAnchorElement, InterestCardProps>(
  ({ variant = 'compact', ...props }, ref) => {
    switch (variant) {
      case 'full':
        return <FullCard ref={ref} {...props} />;
      case 'horizontal':
        return <HorizontalCard ref={ref} {...props} />;
      case 'compact':
      default:
        return <CompactCard ref={ref} {...props} />;
    }
  }
);
InterestCard.displayName = 'InterestCard';

export default InterestCard;
