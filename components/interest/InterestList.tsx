/**
 * FORJA DIGITAL - Interest List Component
 * 
 * Vista de lista compacta para contenido de interés.
 * Ideal para sidebars, widgets y vistas densas.
 * 
 * @module components/interest/InterestList
 */

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileText, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { InterestCard } from './InterestCard';
import type { InterestItem } from '@/types/interest';

// ═══════════════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════════════

interface InterestListProps {
  items: InterestItem[];
  /** Locale para links internos */
  locale?: string;
  /** Si está cargando */
  isLoading?: boolean;
  /** Mensaje cuando no hay resultados */
  emptyMessage?: string;
  /** Título de la sección (opcional) */
  title?: string;
  /** Mostrar botón "Ver todos" */
  showViewAll?: boolean;
  /** URL para "Ver todos" */
  viewAllHref?: string;
  /** Callback para cargar más */
  onLoadMore?: () => void;
  /** Si hay más items para cargar */
  hasMore?: boolean;
  /** Límite de items a mostrar */
  limit?: number;
  /** Clase adicional */
  className?: string;
}

// ═══════════════════════════════════════════════════════════════════════════
// LOADING SKELETON
// ═══════════════════════════════════════════════════════════════════════════

function ListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-3">
      {[...Array(count)].map((_, i) => (
        <div 
          key={i} 
          className="animate-pulse flex items-start gap-4 p-4 rounded-xl border border-slate-200 bg-white"
        >
          <div className="w-16 h-16 rounded-lg bg-slate-200 flex-shrink-0" />
          <div className="flex-1 space-y-2">
            <div className="flex gap-2">
              <div className="h-5 w-16 bg-slate-200 rounded-full" />
              <div className="h-5 w-20 bg-slate-200 rounded" />
            </div>
            <div className="h-4 bg-slate-200 rounded w-full" />
            <div className="h-4 bg-slate-200 rounded w-3/4" />
            <div className="flex gap-3">
              <div className="h-3 w-16 bg-slate-200 rounded" />
              <div className="h-3 w-12 bg-slate-200 rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// EMPTY STATE
// ═══════════════════════════════════════════════════════════════════════════

function EmptyState({ message }: { message: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="py-12 text-center"
    >
      <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-full flex items-center justify-center">
        <FileText className="w-8 h-8 text-slate-300" />
      </div>
      <h4 className="text-lg font-semibold text-slate-800 mb-2">
        Sin resultados
      </h4>
      <p className="text-sm text-slate-600 max-w-xs mx-auto">
        {message}
      </p>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export function InterestList({
  items,
  locale,
  isLoading = false,
  emptyMessage = 'No hay contenido disponible.',
  title,
  showViewAll = false,
  viewAllHref = '/interes',
  onLoadMore,
  hasMore = false,
  limit,
  className,
}: InterestListProps) {
  const displayItems = limit ? items.slice(0, limit) : items;

  return (
    <div className={cn('space-y-4', className)}>
      {/* Header */}
      {(title || showViewAll) && (
        <div className="flex items-center justify-between">
          {title && (
            <h3 className="font-bold text-lg text-slate-900">
              {title}
            </h3>
          )}
          {showViewAll && (
            <Link 
              href={viewAllHref}
              className="text-sm font-medium text-forja-fire hover:text-forja-fire/80 flex items-center gap-1 transition-colors"
            >
              Ver todos
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      )}

      {/* Content */}
      {isLoading ? (
        <ListSkeleton count={limit || 5} />
      ) : displayItems.length > 0 ? (
        <div className="space-y-3">
          {displayItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: index * 0.03 }}
            >
              <InterestCard
                item={item}
                variant="compact"
                locale={locale}
              />
            </motion.div>
          ))}
        </div>
      ) : (
        <EmptyState message={emptyMessage} />
      )}

      {/* Load More */}
      {hasMore && !isLoading && displayItems.length > 0 && onLoadMore && (
        <div className="pt-2">
          <Button
            variant="outline"
            onClick={onLoadMore}
            className="w-full gap-2"
          >
            Cargar más
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      )}

      {/* View All Link (bottom) */}
      {showViewAll && !hasMore && displayItems.length > 0 && limit && items.length > limit && (
        <div className="pt-2 text-center">
          <Link 
            href={viewAllHref}
            className="inline-flex items-center gap-2 text-sm font-medium text-forja-fire hover:text-forja-fire/80 transition-colors"
          >
            Ver todos los recursos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
}

export default InterestList;

