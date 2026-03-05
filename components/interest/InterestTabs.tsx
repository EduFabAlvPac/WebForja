/**
 * FORJA DIGITAL - Interest Tabs Component
 * 
 * Tabs accesibles por categoría de contenido.
 * Implementa WAI-ARIA tabs pattern.
 * 
 * @module components/interest/InterestTabs
 */

'use client';

import { memo, useRef, useCallback, KeyboardEvent } from 'react';
import { motion } from 'framer-motion';
import { 
  Library, 
  Rocket, 
  Bot, 
  ClipboardList, 
  Banknote, 
  Building2, 
  Settings, 
  ShieldCheck,
  LucideIcon 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { InterestCategory } from '@/types/interest';

interface InterestTabsProps {
  categories: InterestCategory[];
  activeCategory: InterestCategory | 'all';
  onCategoryChange: (category: InterestCategory | 'all') => void;
  counts?: Record<string, number>;
  className?: string;
}

// Iconos de Lucide por categoría
const categoryMeta: Record<InterestCategory | 'all', { icon: LucideIcon; color: string }> = {
  'all': { icon: Library, color: 'from-slate-500 to-slate-600' },
  'Transformación Digital': { icon: Rocket, color: 'from-blue-500 to-blue-600' },
  'IA & Automatización': { icon: Bot, color: 'from-purple-500 to-purple-600' },
  'Regulación': { icon: ClipboardList, color: 'from-amber-500 to-amber-600' },
  'Financiamiento': { icon: Banknote, color: 'from-emerald-500 to-emerald-600' },
  'Programas': { icon: Building2, color: 'from-indigo-500 to-indigo-600' },
  'Operaciones': { icon: Settings, color: 'from-slate-500 to-slate-600' },
  'Datos & Seguridad': { icon: ShieldCheck, color: 'from-rose-500 to-rose-600' },
};

function InterestTabsComponent({
  categories,
  activeCategory,
  onCategoryChange,
  counts = {},
  className
}: InterestTabsProps) {
  const tabsRef = useRef<HTMLDivElement>(null);

  // Navegación por teclado
  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const allCategories: (InterestCategory | 'all')[] = ['all', ...categories];
    let newIndex = index;

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        newIndex = (index + 1) % allCategories.length;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        newIndex = index === 0 ? allCategories.length - 1 : index - 1;
        break;
      case 'Home':
        e.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        e.preventDefault();
        newIndex = allCategories.length - 1;
        break;
      default:
        return;
    }

    onCategoryChange(allCategories[newIndex]);
    
    // Focus en el nuevo tab
    const buttons = tabsRef.current?.querySelectorAll('[role="tab"]');
    (buttons?.[newIndex] as HTMLButtonElement)?.focus();
  }, [categories, onCategoryChange]);

  const allCategories: (InterestCategory | 'all')[] = ['all', ...categories];

  return (
    <div className={cn('relative', className)}>
      {/* Tabs container con scroll horizontal en móvil */}
      <div 
        ref={tabsRef}
        role="tablist"
        aria-label="Categorías de contenido"
        className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
      >
        {allCategories.map((category, index) => {
          const isActive = activeCategory === category;
          const meta = categoryMeta[category];
          const count = category === 'all' 
            ? Object.values(counts).reduce((a, b) => a + b, 0)
            : counts[category] || 0;

          return (
            <button
              key={category}
              role="tab"
              id={`tab-${category.replace(/\s+/g, '-').toLowerCase()}`}
              aria-selected={isActive}
              aria-controls={`panel-${category.replace(/\s+/g, '-').toLowerCase()}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onCategoryChange(category)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={cn(
                'relative flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm whitespace-nowrap',
                'transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-forja-fire focus-visible:ring-offset-2',
                isActive
                  ? 'text-white shadow-lg'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              )}
            >
              {/* Background animado */}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className={cn(
                    'absolute inset-0 rounded-xl bg-gradient-to-r',
                    meta.color
                  )}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                />
              )}

              {/* Contenido del tab */}
              <span className="relative flex items-center gap-2">
                <meta.icon className="w-4 h-4" />
                <span>{category === 'all' ? 'Todos' : category}</span>
                {count > 0 && (
                  <span className={cn(
                    'px-1.5 py-0.5 rounded-md text-xs font-bold',
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-100 text-slate-500'
                  )}>
                    {count}
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>

      {/* Indicador de scroll */}
      <div className="absolute right-0 top-0 bottom-2 w-8 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none sm:hidden" />
    </div>
  );
}

export const InterestTabs = memo(InterestTabsComponent);

