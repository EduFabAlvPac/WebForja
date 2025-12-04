/**
 * FORJA DIGITAL - Widget News List
 * 
 * Lista de noticias/contenido de interés para el widget.
 * Usa mergeInterest como fuente única de datos.
 * Filtra por tipo: articulo, programa, evento.
 * 
 * @module components/widget/parts/NewsList
 */

'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Calendar, 
  ExternalLink, 
  Newspaper, 
  ChevronRight,
  FileText,
  Building2,
  CalendarDays,
  Sparkles
} from 'lucide-react';
import { useCountryOptional } from '@/context/CountryProvider';
import { mergeInterest, byType } from '@/lib/interest';
import type { InterestItem, InterestType, CountryCode } from '@/types/interest';

// ═══════════════════════════════════════════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════════════════════════════════════════

const WIDGET_TYPES: InterestType[] = ['articulo', 'programa', 'evento'];
const MAX_ITEMS = 6;

const TYPE_CONFIG: Record<InterestType, { icon: typeof FileText; label: string; color: string }> = {
  articulo: { icon: FileText, label: 'Artículo', color: 'text-blue-600 bg-blue-100' },
  programa: { icon: Building2, label: 'Programa', color: 'text-teal-600 bg-teal-100' },
  evento: { icon: CalendarDays, label: 'Evento', color: 'text-orange-600 bg-orange-100' },
  guia: { icon: FileText, label: 'Guía', color: 'text-slate-600 bg-slate-100' },
  descargable: { icon: FileText, label: 'Descargable', color: 'text-amber-600 bg-amber-100' },
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

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export function NewsList() {
  const [isLoading, setIsLoading] = useState(true);
  const shouldReduceMotion = useReducedMotion();
  
  const country = useCountryOptional();
  const countryCode = (country?.country?.code || 'all') as CountryCode;
  const locale = country?.locale || 'es';

  // Obtener y filtrar contenido de interés
  const filteredItems = useMemo(() => {
    // Obtener items del país (o todos si no hay país)
    const allItems = mergeInterest(countryCode);
    
    // Filtrar por tipos válidos para widget
    const typeFiltered = allItems.filter(item => 
      WIDGET_TYPES.includes(item.type)
    );
    
    // Ordenar por fecha descendente y limitar
    return typeFiltered
      .sort((a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime())
      .slice(0, MAX_ITEMS);
  }, [countryCode]);

  // Simular carga
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [countryCode]);

  // Loading state
  if (isLoading) {
    return (
      <div className="py-6 px-4">
        <Header />
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-3 rounded-xl border border-slate-200 p-3 animate-pulse">
              <div className="w-14 h-14 rounded-lg bg-slate-200 flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-slate-200 rounded w-3/4" />
                <div className="h-3 bg-slate-200 rounded w-full" />
                <div className="h-3 bg-slate-200 rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="py-6 px-4 max-h-[500px] overflow-y-auto custom-scrollbar">
      <Header />

      <div className="space-y-3">
        {filteredItems.map((item, index) => (
          <NewsCard
            key={item.id}
            item={item}
            index={index}
            locale={locale}
            shouldReduceMotion={shouldReduceMotion || false}
          />
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-8">
          <p className="text-slate-500 text-sm">
            No hay noticias disponibles en este momento
          </p>
        </div>
      )}

      {/* Ver más link */}
      {filteredItems.length > 0 && (
        <div className="mt-4 text-center">
          <Link
            href={`/${locale === 'es' ? '' : locale}/interes`.replace('//', '/')}
            className="inline-flex items-center gap-1 text-sm font-medium text-forja-fire hover:text-forja-fire/80 transition-colors"
          >
            Ver todos los recursos
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SUB-COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════

function Header() {
  return (
    <div className="text-center mb-6">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-forja-purple to-forja-teal mx-auto mb-3 flex items-center justify-center">
        <Newspaper className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-heading font-bold text-forja-navy mb-2">
        Noticias para PYMEs
      </h3>
      <p className="text-slate-600 text-sm">
        Información gubernamental y oportunidades relevantes
      </p>
    </div>
  );
}

interface NewsCardProps {
  item: InterestItem;
  index: number;
  locale: string;
  shouldReduceMotion: boolean;
}

function NewsCard({ item, index, locale, shouldReduceMotion }: NewsCardProps) {
  const isExternal = !!item.href;
  const href = isExternal 
    ? item.href! 
    : `/${locale === 'es' ? '' : locale}/interes/${item.slug}`.replace('//', '/');
  
  const typeConfig = TYPE_CONFIG[item.type] || TYPE_CONFIG.articulo;
  const TypeIcon = typeConfig.icon;

  const CardWrapper = isExternal ? 'a' : Link;
  const externalProps = isExternal 
    ? { target: '_blank', rel: 'noopener noreferrer' } 
    : {};

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: shouldReduceMotion ? 0 : index * 0.08,
        duration: 0.35,
        ease: 'easeOut',
      }}
    >
      <CardWrapper
        href={href}
        {...externalProps}
        className="group flex gap-3 rounded-xl border border-slate-200 p-3 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-forja-teal focus:ring-offset-2"
        aria-label={`Leer: ${item.title}`}
      >
        {/* Thumbnail */}
        <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
          {item.image.src ? (
            <Image
              src={item.image.src}
              alt={item.image.alt}
              fill
              className="object-cover"
              sizes="56px"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <TypeIcon className="w-6 h-6 text-slate-300" />
            </div>
          )}
          
          {/* Featured badge */}
          {item.featured && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-forja-fire rounded-full flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 flex flex-col">
          {/* Type badge */}
          <span className={`inline-flex items-center gap-1 text-xs font-medium px-1.5 py-0.5 rounded w-fit mb-1 ${typeConfig.color}`}>
            <TypeIcon className="w-3 h-3" />
            {typeConfig.label}
          </span>

          {/* Title */}
          <h4 className="font-semibold text-forja-navy text-sm mb-1 line-clamp-2 group-hover:text-forja-teal transition-colors">
            {item.title}
          </h4>

          {/* Meta */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mt-auto flex-wrap">
            {item.source && (
              <span className="inline-flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded-full font-medium text-slate-700">
                {item.sourceIcon && <span>{item.sourceIcon}</span>}
                {item.source}
              </span>
            )}
            <time dateTime={item.dateISO} className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {formatDate(item.dateISO)}
            </time>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex-shrink-0 flex items-center">
          {isExternal ? (
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-forja-teal transition-colors" />
          ) : (
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-forja-teal group-hover:translate-x-0.5 transition-all" />
          )}
        </div>
      </CardWrapper>
    </motion.article>
  );
}

export default NewsList;
