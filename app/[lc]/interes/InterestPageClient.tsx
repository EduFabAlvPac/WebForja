/**
 * FORJA DIGITAL - Interest Page Client Component
 * 
 * Componente cliente para la página de Interés.
 * Maneja estado de filtros, búsqueda y renderizado dinámico.
 * 
 * @module app/[lc]/interes/InterestPageClient
 */

'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Globe } from 'lucide-react';
import Image from 'next/image';
import { useCountryOptional } from '@/context/CountryProvider';
import { InterestTabs, InterestToolbar, InterestGrid } from '@/components/interest';
import { 
  mergeInterest, 
  filterInterest, 
  searchInterest,
  getUniqueCategories,
  getUniqueTags,
  groupByCategory
} from '@/lib/interest';
import type { InterestType, InterestCategory, CountryCode } from '@/types/interest';
import type { LocaleCode } from '@/lib/country';
import { cn } from '@/lib/utils';

interface InterestPageClientProps {
  locale: LocaleCode;
}

export function InterestPageClient({ locale }: InterestPageClientProps) {
  // Estado
  const [activeCategory, setActiveCategory] = useState<InterestCategory | 'all'>('Transformación Digital');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<InterestType[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Contexto del país
  const countryContext = useCountryOptional();
  const country = countryContext?.country;
  
  // Mapear locale a CountryCode
  const countryCode: CountryCode = useMemo(() => {
    if (locale === 'es') return 'all';
    if (['co', 'cl', 'pe', 'ec'].includes(locale)) return locale as CountryCode;
    return 'co'; // fallback
  }, [locale]);

  // Obtener contenido mergeado
  const allItems = useMemo(() => {
    return mergeInterest(countryCode);
  }, [countryCode]);

  // Filtrar por categoría
  const categoryItems = useMemo(() => {
    if (activeCategory === 'all') return allItems;
    return allItems.filter(item => item.category === activeCategory);
  }, [allItems, activeCategory]);

  // Aplicar filtros de tipo
  const typeFilteredItems = useMemo(() => {
    if (selectedTypes.length === 0) return categoryItems;
    return filterInterest(categoryItems, { type: selectedTypes[0] })
      .concat(
        selectedTypes.slice(1).flatMap(type => 
          filterInterest(categoryItems, { type })
        )
      )
      .filter((item, index, self) => 
        self.findIndex(i => i.id === item.id) === index
      );
  }, [categoryItems, selectedTypes]);

  // Aplicar filtro de tag
  const tagFilteredItems = useMemo(() => {
    if (!selectedTag) return typeFilteredItems;
    return typeFilteredItems.filter(item => 
      item.tags.some(t => t.toLowerCase() === selectedTag.toLowerCase())
    );
  }, [typeFilteredItems, selectedTag]);

  // Aplicar búsqueda
  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return tagFilteredItems;
    return searchInterest(tagFilteredItems, searchQuery);
  }, [tagFilteredItems, searchQuery]);

  // Categorías disponibles
  const categories = useMemo(() => {
    return getUniqueCategories(allItems);
  }, [allItems]);

  // Tags disponibles (basados en items filtrados por categoría)
  const availableTags = useMemo(() => {
    return getUniqueTags(categoryItems).slice(0, 20);
  }, [categoryItems]);

  // Conteo por categoría
  const categoryCounts = useMemo(() => {
    const grouped = groupByCategory(allItems);
    const counts: Record<string, number> = {};
    Object.entries(grouped).forEach(([cat, items]) => {
      counts[cat] = items.length;
    });
    return counts;
  }, [allItems]);

  // Handlers
  const handleSearchChange = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handleTypeFilter = useCallback((types: InterestType[]) => {
    setSelectedTypes(types);
  }, []);

  const handleTagFilter = useCallback((tag: string | null) => {
    setSelectedTag(tag);
  }, []);

  const handleCategoryChange = useCallback((category: InterestCategory | 'all') => {
    setActiveCategory(category);
    // Limpiar filtros al cambiar categoría
    setSelectedTag(null);
    setSearchQuery('');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-forja-navy via-forja-navy to-slate-800 text-white overflow-hidden">
        {/* Pattern de fondo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 md:px-8 pt-24 pb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            {/* Badge país */}
            {country && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <Image
                  src={`https://flagcdn.com/w40/${country.code}.png`}
                  alt={`Bandera de ${country.name}`}
                  width={20}
                  height={20}
                  className="rounded-full object-cover"
                />
                <span className="text-sm font-medium">
                  Recursos para {country.name}
                </span>
              </div>
            )}

            {!country && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <Globe className="w-5 h-5" />
                <span className="text-sm font-medium">
                  Recursos Latinoamérica
                </span>
              </div>
            )}

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Centro de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-forja-fire to-orange-400">
                Interés
              </span>{' '}
              para PYMEs
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed max-w-2xl">
              Artículos, guías prácticas, programas gubernamentales y recursos 
              esenciales para la transformación digital de tu empresa.
            </p>

            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-forja-fire" />
                {allItems.length} recursos disponibles
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-500" />
              <span>Actualizado semanalmente</span>
            </div>
          </motion.div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 48" fill="none" className="w-full h-12">
            <path
              d="M0 48h1440V24c-120 12-240 18-360 18s-240-6-360-18-240-18-360-18-240 6-360 18v24z"
              fill="rgb(248 250 252)"
            />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Tabs de categoría */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <InterestTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
            counts={categoryCounts}
          />
        </motion.div>

        {/* Toolbar de filtros */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <InterestToolbar
            onSearchChange={handleSearchChange}
            onTypeFilter={handleTypeFilter}
            onTagFilter={handleTagFilter}
            selectedTypes={selectedTypes}
            selectedTag={selectedTag}
            availableTags={availableTags}
            totalResults={filteredItems.length}
          />
        </motion.div>

        {/* Grid de contenido */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          role="tabpanel"
          id={`panel-${activeCategory.replace(/\s+/g, '-').toLowerCase()}`}
          aria-labelledby={`tab-${activeCategory.replace(/\s+/g, '-').toLowerCase()}`}
        >
          <InterestGrid
            items={filteredItems}
            showFeatured={activeCategory !== 'all' && !searchQuery && selectedTypes.length === 0}
            emptyMessage={
              searchQuery 
                ? `No encontramos resultados para "${searchQuery}"`
                : 'No hay contenido en esta categoría'
            }
          />
        </motion.div>
      </section>
    </div>
  );
}

