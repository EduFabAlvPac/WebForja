/**
 * FORJA DIGITAL - Interest Grid Component
 * 
 * Grid responsivo de tarjetas de contenido de interés.
 * Incluye estados de carga, vacío y animaciones.
 * Usa InterestCard con variante 'full' para las tarjetas.
 * 
 * @module components/interest/InterestGrid
 */

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileText, ArrowRight, LayoutGrid, List } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { InterestCard } from './InterestCard';
import { DownloadableCard } from './DownloadableCard';
import type { InterestItem } from '@/types/interest';

// ═══════════════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════════════

interface InterestGridProps {
  items: InterestItem[];
  /** Locale para links internos */
  locale?: string;
  /** Si está cargando */
  isLoading?: boolean;
  /** Mensaje cuando no hay resultados */
  emptyMessage?: string;
  /** Callback para cargar más */
  onLoadMore?: () => void;
  /** Si hay más items para cargar */
  hasMore?: boolean;
  /** Mostrar item destacado en formato horizontal */
  showFeaturedHero?: boolean;
  /** Clase adicional */
  className?: string;
}

// ═══════════════════════════════════════════════════════════════════════════
// LOADING SKELETON
// ═══════════════════════════════════════════════════════════════════════════

function LoadingSkeleton() {
  return (
    <>
      {[...Array(6)].map((_, i) => (
        <div 
          key={i} 
          className="animate-pulse"
          role="article"
          aria-label="Cargando contenido..."
          aria-busy="true"
        >
          <Card className="h-full overflow-hidden">
            <div className="aspect-[16/10] bg-slate-200" aria-hidden="true" />
            <CardHeader className="pb-2">
              <div className="h-6 bg-slate-200 rounded w-3/4" aria-hidden="true" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2" aria-hidden="true">
                <div className="h-4 bg-slate-200 rounded w-full" />
                <div className="h-4 bg-slate-200 rounded w-5/6" />
                <div className="h-4 bg-slate-200 rounded w-2/3" />
              </div>
              <div className="flex gap-1 mt-3" aria-hidden="true">
                <div className="h-5 w-12 bg-slate-200 rounded-full" />
                <div className="h-5 w-14 bg-slate-200 rounded-full" />
              </div>
            </CardContent>
            <CardFooter className="pt-4 border-t border-slate-100">
              <div className="h-4 bg-slate-200 rounded w-24" aria-hidden="true" />
            </CardFooter>
          </Card>
        </div>
      ))}
    </>
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
      className="col-span-full py-16 text-center"
    >
      <div className="max-w-md mx-auto">
        <div className="w-20 h-20 mx-auto mb-6 bg-slate-100 rounded-full flex items-center justify-center">
          <FileText className="w-10 h-10 text-slate-300" />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">
          No encontramos resultados
        </h3>
        <p className="text-slate-600 mb-6">
          {message}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="outline" asChild>
            <Link href="/contacto">
              Contactar a un experto
            </Link>
          </Button>
          <Button asChild>
            <Link href="/servicios">
              Ver nuestros servicios
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export function InterestGrid({
  items,
  locale,
  isLoading = false,
  emptyMessage = 'Intenta ajustar los filtros o buscar con otros términos.',
  onLoadMore,
  hasMore = false,
  showFeaturedHero = true,
  className,
}: InterestGridProps) {
  // Separate featured item for hero display
  const featuredItem = showFeaturedHero ? items.find(item => item.featured) : null;
  const regularItems = showFeaturedHero && featuredItem 
    ? items.filter(item => item.id !== featuredItem.id)
    : items;

  return (
    <div className={cn('space-y-8', className)}>
      {/* Featured Hero Card */}
      {featuredItem && !isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {featuredItem.type === 'descargable' ? (
            <DownloadableCard
              item={featuredItem}
              variant="full"
              locale={locale}
            />
          ) : (
            <InterestCard
              item={featuredItem}
              variant="horizontal"
              locale={locale}
            />
          )}
        </motion.div>
      )}

      {/* Grid */}
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        role="list"
        aria-label="Recursos de interés"
      >
        {isLoading ? (
          <LoadingSkeleton />
        ) : regularItems.length > 0 ? (
          regularItems.map((item, index) => (
            <motion.div
              key={item.id}
              role="listitem"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              {item.type === 'descargable' ? (
                <DownloadableCard
                  item={item}
                  variant="full"
                  locale={locale}
                />
              ) : (
                <InterestCard
                  item={item}
                  variant="full"
                  locale={locale}
                />
              )}
            </motion.div>
          ))
        ) : !featuredItem ? (
          <EmptyState message={emptyMessage} />
        ) : null}
      </div>

      {/* Load More Button */}
      {hasMore && !isLoading && (regularItems.length > 0 || featuredItem) && (
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={onLoadMore}
            className="gap-2"
          >
            Cargar más contenido
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
}

export default InterestGrid;
