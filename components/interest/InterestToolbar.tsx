/**
 * FORJA DIGITAL - Interest Toolbar Component
 * 
 * Barra de herramientas con búsqueda, filtros de tipo y tags.
 * Incluye debounce en búsqueda para mejor UX.
 * 
 * @module components/interest/InterestToolbar
 */

'use client';

import { useState, useEffect, useCallback } from 'react';
import { Search, Filter, X, SlidersHorizontal, FileText, BookOpen, Building2, Download, CalendarDays, LucideIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { InterestType, InterestCategory } from '@/types/interest';

// ═══════════════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════════════

interface InterestToolbarProps {
  onSearchChange: (query: string) => void;
  onTypeChange: (types: InterestType[]) => void;
  onTagChange: (tags: string[]) => void;
  availableTags: string[];
  selectedTypes: InterestType[];
  selectedTags: string[];
  searchQuery: string;
  totalResults: number;
  className?: string;
}

// ═══════════════════════════════════════════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════════════════════════════════════════

const TYPES: { value: InterestType; label: string; icon: LucideIcon }[] = [
  { value: 'articulo', label: 'Artículos', icon: FileText },
  { value: 'guia', label: 'Guías', icon: BookOpen },
  { value: 'programa', label: 'Programas', icon: Building2 },
  { value: 'descargable', label: 'Descargables', icon: Download },
  { value: 'evento', label: 'Eventos', icon: CalendarDays },
];

// ═══════════════════════════════════════════════════════════════════════════
// HOOK: useDebounce
// ═══════════════════════════════════════════════════════════════════════════

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export function InterestToolbar({
  onSearchChange,
  onTypeChange,
  onTagChange,
  availableTags,
  selectedTypes,
  selectedTags,
  searchQuery,
  totalResults,
  className,
}: InterestToolbarProps) {
  const [localSearch, setLocalSearch] = useState(searchQuery);
  const [showFilters, setShowFilters] = useState(false);
  const debouncedSearch = useDebounce(localSearch, 200);

  // Sync debounced search with parent
  useEffect(() => {
    onSearchChange(debouncedSearch);
  }, [debouncedSearch, onSearchChange]);

  // Toggle type filter
  const toggleType = useCallback((type: InterestType) => {
    if (selectedTypes.includes(type)) {
      onTypeChange(selectedTypes.filter(t => t !== type));
    } else {
      onTypeChange([...selectedTypes, type]);
    }
  }, [selectedTypes, onTypeChange]);

  // Toggle tag filter
  const toggleTag = useCallback((tag: string) => {
    if (selectedTags.includes(tag)) {
      onTagChange(selectedTags.filter(t => t !== tag));
    } else {
      onTagChange([...selectedTags, tag]);
    }
  }, [selectedTags, onTagChange]);

  // Clear all filters
  const clearFilters = useCallback(() => {
    setLocalSearch('');
    onSearchChange('');
    onTypeChange([]);
    onTagChange([]);
  }, [onSearchChange, onTypeChange, onTagChange]);

  const hasActiveFilters = selectedTypes.length > 0 || selectedTags.length > 0 || searchQuery.length > 0;

  return (
    <div className={cn('space-y-4', className)}>
      {/* Search Bar + Filter Toggle */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="search"
            placeholder="Buscar artículos, guías, programas..."
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            className={cn(
              'w-full pl-12 pr-4 py-3 rounded-xl',
              'bg-white border border-slate-200',
              'text-slate-900 placeholder:text-slate-400',
              'focus:outline-none focus:ring-2 focus:ring-forja-fire/30 focus:border-forja-fire',
              'transition-all duration-200'
            )}
            aria-label="Buscar contenido"
          />
          {localSearch && (
            <button
              onClick={() => setLocalSearch('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Limpiar búsqueda"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Toggle */}
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className={cn(
            'gap-2 px-4',
            showFilters && 'bg-forja-fire/5 border-forja-fire text-forja-fire'
          )}
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span className="hidden sm:inline">Filtros</span>
          {hasActiveFilters && (
            <span className="w-5 h-5 rounded-full bg-forja-fire text-white text-xs flex items-center justify-center">
              {selectedTypes.length + selectedTags.length + (searchQuery ? 1 : 0)}
            </span>
          )}
        </Button>
      </div>

      {/* Expanded Filters Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-4">
              {/* Type Filters */}
              <div>
                <h4 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Tipo de Contenido
                </h4>
                <div className="flex flex-wrap gap-2">
                  {TYPES.map(({ value, label, icon: IconComponent }) => (
                    <button
                      key={value}
                      onClick={() => toggleType(value)}
                      className={cn(
                        'inline-flex items-center gap-2 px-3 py-2 rounded-lg',
                        'text-sm font-medium transition-all duration-200',
                        'focus:outline-none focus:ring-2 focus:ring-forja-fire/30',
                        selectedTypes.includes(value)
                          ? 'bg-forja-fire text-white shadow-sm'
                          : 'bg-white text-slate-700 border border-slate-200 hover:border-forja-fire/50 hover:bg-forja-fire/5'
                      )}
                      aria-pressed={selectedTypes.includes(value)}
                    >
                      <IconComponent className="w-4 h-4" />
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tag Filters */}
              {availableTags.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 mb-3">
                    Tags Populares
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {availableTags.slice(0, 12).map((tag) => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={cn(
                          'px-3 py-1.5 rounded-full text-xs font-medium',
                          'transition-all duration-200',
                          'focus:outline-none focus:ring-2 focus:ring-forja-fire/30',
                          selectedTags.includes(tag)
                            ? 'bg-forja-navy text-white'
                            : 'bg-white text-slate-600 border border-slate-200 hover:border-forja-navy/50'
                        )}
                        aria-pressed={selectedTags.includes(tag)}
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Clear Filters */}
              {hasActiveFilters && (
                <div className="pt-2 border-t border-slate-200">
                  <button
                    onClick={clearFilters}
                    className="text-sm text-forja-fire hover:text-forja-fire/80 font-medium transition-colors"
                  >
                    Limpiar todos los filtros
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results Count + Active Filters */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-slate-600">
          <span className="font-semibold text-slate-900">{totalResults}</span>{' '}
          {totalResults === 1 ? 'resultado' : 'resultados'}
          {searchQuery && (
            <span> para &quot;<span className="font-medium">{searchQuery}</span>&quot;</span>
          )}
        </p>

        {/* Active Filter Badges */}
        {hasActiveFilters && !showFilters && (
          <div className="flex flex-wrap gap-2">
            {selectedTypes.map(type => {
              const typeInfo = TYPES.find(t => t.value === type);
              const TypeIcon = typeInfo?.icon;
              return (
                <Badge
                  key={type}
                  variant="secondary"
                  className="gap-1 pl-2 pr-1 cursor-pointer hover:bg-slate-200"
                  onClick={() => toggleType(type)}
                >
                  {TypeIcon && <TypeIcon className="w-3 h-3" />}
                  {typeInfo?.label}
                  <X className="w-3 h-3 ml-1" />
                </Badge>
              );
            })}
            {selectedTags.map(tag => (
              <Badge
                key={tag}
                variant="outline"
                className="gap-1 pl-2 pr-1 cursor-pointer hover:bg-slate-100"
                onClick={() => toggleTag(tag)}
              >
                #{tag}
                <X className="w-3 h-3 ml-1" />
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default InterestToolbar;
