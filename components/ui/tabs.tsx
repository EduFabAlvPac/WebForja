/**
 * FORJA DIGITAL - Tabs Component
 * 
 * Componente de pestañas accesible con diseño consistente.
 * Navegable por teclado (←→ para cambiar tabs).
 * 
 * @module components/ui/tabs
 */

'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

// ═══════════════════════════════════════════════════════════════════════════
// CONTEXT
// ═══════════════════════════════════════════════════════════════════════════

interface TabsContextValue {
  value: string;
  onValueChange: (value: string) => void;
}

const TabsContext = React.createContext<TabsContextValue | undefined>(undefined);

function useTabsContext() {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within a Tabs provider');
  }
  return context;
}

// ═══════════════════════════════════════════════════════════════════════════
// TABS ROOT
// ═══════════════════════════════════════════════════════════════════════════

interface TabsProps {
  value: string;
  onValueChange: (value: string) => void;
  defaultValue?: string;
  className?: string;
  children: React.ReactNode;
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ value, onValueChange, className, children, ...props }, ref) => {
    return (
      <TabsContext.Provider value={{ value, onValueChange }}>
        <div
          ref={ref}
          className={cn('w-full', className)}
          {...props}
        >
          {children}
        </div>
      </TabsContext.Provider>
    );
  }
);
Tabs.displayName = 'Tabs';

// ═══════════════════════════════════════════════════════════════════════════
// TABS LIST
// ═══════════════════════════════════════════════════════════════════════════

interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, children, ...props }, ref) => {
    const tabsRef = React.useRef<HTMLDivElement>(null);

    const handleKeyDown = (e: React.KeyboardEvent) => {
      const tabs = tabsRef.current?.querySelectorAll('[role="tab"]');
      if (!tabs) return;

      const currentIndex = Array.from(tabs).findIndex(
        (tab) => tab === document.activeElement
      );

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % tabs.length;
        (tabs[nextIndex] as HTMLElement).focus();
        (tabs[nextIndex] as HTMLElement).click();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        (tabs[prevIndex] as HTMLElement).focus();
        (tabs[prevIndex] as HTMLElement).click();
      }
    };

    return (
      <div
        ref={(node) => {
          (tabsRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        role="tablist"
        aria-orientation="horizontal"
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        className={cn(
          'inline-flex items-center justify-start gap-1',
          'border-b border-slate-200 w-full',
          'overflow-x-auto scrollbar-hide',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
TabsList.displayName = 'TabsList';

// ═══════════════════════════════════════════════════════════════════════════
// TAB TRIGGER
// ═══════════════════════════════════════════════════════════════════════════

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  children: React.ReactNode;
}

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, value, children, ...props }, ref) => {
    const { value: selectedValue, onValueChange } = useTabsContext();
    const isSelected = value === selectedValue;

    return (
      <button
        ref={ref}
        role="tab"
        type="button"
        aria-selected={isSelected}
        aria-controls={`tabpanel-${value}`}
        tabIndex={isSelected ? 0 : -1}
        onClick={() => onValueChange(value)}
        className={cn(
          'relative inline-flex items-center justify-center',
          'whitespace-nowrap px-4 py-3',
          'text-sm font-medium',
          'transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forja-fire focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          isSelected
            ? 'text-forja-fire'
            : 'text-slate-600 hover:text-slate-900',
          className
        )}
        {...props}
      >
        {children}
        {/* Indicador activo */}
        {isSelected && (
          <span 
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-forja-fire rounded-full"
            aria-hidden="true"
          />
        )}
      </button>
    );
  }
);
TabsTrigger.displayName = 'TabsTrigger';

// ═══════════════════════════════════════════════════════════════════════════
// TAB CONTENT
// ═══════════════════════════════════════════════════════════════════════════

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  children: React.ReactNode;
}

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, value, children, ...props }, ref) => {
    const { value: selectedValue } = useTabsContext();
    const isSelected = value === selectedValue;

    if (!isSelected) return null;

    return (
      <div
        ref={ref}
        role="tabpanel"
        id={`tabpanel-${value}`}
        aria-labelledby={`tab-${value}`}
        tabIndex={0}
        className={cn(
          'mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forja-fire focus-visible:ring-offset-2 rounded-lg',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
TabsContent.displayName = 'TabsContent';

export { Tabs, TabsList, TabsTrigger, TabsContent };

