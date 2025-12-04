/**
 * FORJA DIGITAL - Interest Hub Client Component
 * 
 * Componente cliente para la página hub de contenido de interés.
 * Maneja estado, filtros y renderizado interactivo.
 * 
 * @module components/interest/InterestHubClient
 */

'use client';

import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Scale, 
  Wallet, 
  Building2, 
  Monitor, 
  Bot, 
  Settings, 
  Shield 
} from 'lucide-react';
import { useCountryOptional } from '@/context/CountryProvider';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { InterestToolbar, InterestGrid } from '@/components/interest';
import { 
  mergeInterest, 
  filterInterest, 
  searchInterest, 
  getUniqueTags,
  featuredOfCountry 
} from '@/lib/interest';
import { trackInterestView, trackInterestFilter } from '@/lib/analytics';
import type { InterestType, InterestCategory } from '@/types/interest';
import type { CountryCode } from '@/types/interest';

// ═══════════════════════════════════════════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════════════════════════════════════════

const CATEGORIES: { value: InterestCategory | 'all'; label: string; icon: typeof Sparkles }[] = [
  { value: 'all', label: 'Todos', icon: Sparkles },
  { value: 'Transformación Digital', label: 'Transformación Digital', icon: Monitor },
  { value: 'IA & Automatización', label: 'IA & Automatización', icon: Bot },
  { value: 'Regulación', label: 'Regulación', icon: Scale },
  { value: 'Financiamiento', label: 'Financiamiento', icon: Wallet },
  { value: 'Programas', label: 'Programas', icon: Building2 },
  { value: 'Operaciones', label: 'Operaciones', icon: Settings },
  { value: 'Datos & Seguridad', label: 'Datos & Seguridad', icon: Shield },
];

const PAGE_SIZE = 12;

// ═══════════════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════════════

interface InterestHubClientProps {
  locale?: string;
}

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export function InterestHubClient({ locale }: InterestHubClientProps) {
  // Country context
  const countryContext = useCountryOptional();
  const countryCode = (countryContext?.country?.code || 'all') as CountryCode;

  // State
  const [activeCategory, setActiveCategory] = useState<InterestCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<InterestType[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Get all items for current country
  const allItems = useMemo(() => {
    return mergeInterest(countryCode);
  }, [countryCode]);

  // Get featured items
  const featuredItems = useMemo(() => {
    return featuredOfCountry(countryCode);
  }, [countryCode]);

  // Available tags from all items
  const availableTags = useMemo(() => {
    return getUniqueTags(allItems);
  }, [allItems]);

  // Filtered items
  const filteredItems = useMemo(() => {
    let items = [...allItems];

    // Filter by category (if not 'all')
    if (activeCategory !== 'all') {
      items = items.filter(item => item.category === activeCategory);
    }

    // Apply type and tag filters
    items = filterInterest(items, {
      type: selectedTypes.length === 1 ? selectedTypes[0] : undefined,
    });

    // Filter by multiple types if more than one selected
    if (selectedTypes.length > 1) {
      items = items.filter(item => selectedTypes.includes(item.type));
    }

    // Filter by selected tags
    if (selectedTags.length > 0) {
      items = items.filter(item => 
        selectedTags.some(tag => item.tags.includes(tag))
      );
    }

    // Apply search
    if (searchQuery) {
      items = searchInterest(items, searchQuery);
    }

    return items;
  }, [allItems, activeCategory, selectedTypes, selectedTags, searchQuery]);

  // Paginated items
  const visibleItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  // Track initial view
  const hasTrackedView = useRef(false);
  useEffect(() => {
    if (!hasTrackedView.current) {
      trackInterestView();
      hasTrackedView.current = true;
    }
  }, []);

  // Handlers
  const handleLoadMore = useCallback(() => {
    setVisibleCount(prev => prev + PAGE_SIZE);
  }, []);

  const handleCategoryChange = useCallback((value: string) => {
    setActiveCategory(value as InterestCategory | 'all');
    setVisibleCount(PAGE_SIZE);
    // Track filter change
    trackInterestFilter('category', value);
  }, []);

  const handleSearchChange = useCallback((query: string) => {
    setSearchQuery(query);
    setVisibleCount(PAGE_SIZE);
    // Track search (debounced by toolbar)
    if (query.length >= 3) {
      trackInterestFilter('search', query);
    }
  }, []);

  const handleTypeChange = useCallback((types: InterestType[]) => {
    setSelectedTypes(types);
    setVisibleCount(PAGE_SIZE);
    // Track type filter
    if (types.length > 0) {
      trackInterestFilter('type', types.join(','));
    }
  }, []);

  const handleTagChange = useCallback((tags: string[]) => {
    setSelectedTags(tags);
    setVisibleCount(PAGE_SIZE);
    // Track tag filter
    if (tags.length > 0) {
      trackInterestFilter('tag', tags.join(','));
    }
  }, []);

  const hasMore = visibleItems.length < filteredItems.length;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-forja-navy text-white py-16 md:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-forja-fire/20 text-forja-fire rounded-full text-sm font-semibold mb-4">
              Centro de Conocimiento
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Recursos de Interés para tu{' '}
              <span className="text-forja-fire">Empresa</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Artículos, guías, programas gubernamentales y recursos descargables 
              para impulsar la transformación digital de tu negocio
              {countryContext?.country?.name && (
                <span> en <strong>{countryContext.country.name}</strong></span>
              )}.
            </p>
          </motion.div>

          {/* Featured Count */}
          {featuredItems.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-forja-fire" />
              <span className="text-sm text-slate-300">
                <strong className="text-white">{featuredItems.length}</strong> contenidos destacados disponibles
              </span>
            </motion.div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        <Tabs value={activeCategory} onValueChange={handleCategoryChange}>
          {/* Category Tabs */}
          <div className="mb-6">
            <TabsList className="bg-transparent">
              {CATEGORIES.map(({ value, label, icon: Icon }) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className="gap-2 data-[state=active]:bg-transparent"
                >
                  <Icon className="w-4 h-4 hidden sm:block" />
                  <span className="text-xs sm:text-sm">{label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Toolbar */}
          <InterestToolbar
            onSearchChange={handleSearchChange}
            onTypeChange={handleTypeChange}
            onTagChange={handleTagChange}
            availableTags={availableTags}
            selectedTypes={selectedTypes}
            selectedTags={selectedTags}
            searchQuery={searchQuery}
            totalResults={filteredItems.length}
            className="mb-8"
          />

          {/* Content Grid - Same for all tabs */}
          {CATEGORIES.map(({ value }) => (
            <TabsContent key={value} value={value}>
              <InterestGrid
                items={visibleItems}
                locale={locale}
                hasMore={hasMore}
                onLoadMore={handleLoadMore}
                emptyMessage={
                  searchQuery
                    ? `No encontramos resultados para "${searchQuery}". Intenta con otros términos.`
                    : 'No hay contenido disponible en esta categoría. Explora otras categorías o vuelve pronto.'
                }
              />
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 py-12 md:py-16 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            ¿No encontraste lo que buscabas?
          </h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Nuestro equipo de expertos puede ayudarte a encontrar la solución 
            perfecta para los retos de tu empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`/${locale || ''}/contacto`.replace('//', '/')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-forja-fire text-white font-semibold rounded-xl hover:bg-forja-fire/90 transition-colors"
            >
              Hablar con un experto
            </a>
            <a
              href={`/${locale || ''}/servicios`.replace('//', '/')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-forja-navy font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default InterestHubClient;

