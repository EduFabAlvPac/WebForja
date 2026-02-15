/**
 * FORJA DIGITAL - Country Switcher Button Variants
 * 
 * Múltiples diseños de botón ultra-premium para selector de país.
 * World-class button designs inspired by top tech companies.
 * 
 * @module components/country/CountrySwitcherButton
 */

'use client';

import { cn } from '@/lib/utils';
import type { CountryConfig } from '@/lib/country';

interface ButtonProps {
  country: CountryConfig | { flag: string; code: string; name: string };
  isOpen: boolean;
  onClick: () => void;
  compact?: boolean;
}

/**
 * Variante 1: Píldora Minimalista (Estilo Vercel/Linear)
 * - Ultra-compacto
 * - Glassmorphism sutil
 * - Solo flag + indicador
 */
export function PillButton({ country, isOpen, onClick, compact }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'group relative inline-flex items-center gap-2 rounded-full',
        'px-3 py-1.5',
        'bg-white/5 hover:bg-white/10 backdrop-blur-xl',
        'border border-white/10 hover:border-white/25',
        'text-white text-sm font-medium',
        'transition-all duration-300 ease-out',
        'focus:outline-none focus:ring-2 focus:ring-forja-fire/40',
        'hover:shadow-lg hover:shadow-white/5',
        'active:scale-95',
        isOpen && 'bg-white/10 border-forja-fire/40 ring-1 ring-forja-fire/30',
        compact && 'px-2 py-1'
      )}
      aria-label={`Cambiar país: ${country.name}`}
    >
      <span className="text-lg leading-none group-hover:scale-110 transition-transform">
        {country.flag}
      </span>
      
      {!compact && (
        <span className="hidden lg:inline-block font-semibold text-xs tracking-wide">
          {country.name}
        </span>
      )}
      
      {/* Indicador de 2 puntos */}
      <div className="flex items-center gap-0.5">
        <div className={cn(
          'w-1 h-1 rounded-full bg-white/40 transition-all duration-200',
          isOpen && 'bg-forja-fire scale-125'
        )} />
        <div className={cn(
          'w-1 h-1 rounded-full bg-white/40 transition-all duration-200',
          isOpen && 'bg-forja-fire scale-125'
        )} />
      </div>
    </button>
  );
}

/**
 * Variante 2: Chip Moderno (Estilo Stripe/Apple)
 * OPTIMIZADO PARA HEADER CLARO
 */
export function ChipButton({ country, isOpen, onClick }: ButtonProps) {
  const name = country?.name || 'País';

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'group relative inline-flex items-center gap-2 rounded-lg',
        'px-2.5 py-1.5',
        'bg-gradient-to-b from-slate-50 to-slate-100/80',
        'hover:from-slate-100 hover:to-slate-200/80',
        'border border-slate-200 hover:border-slate-300',
        'shadow-sm hover:shadow-md',
        'text-slate-700 text-sm',
        'transition-all duration-200 ease-out',
        'focus:outline-none focus:ring-2 focus:ring-forja-fire/50 focus:ring-offset-0',
        'active:scale-95',
        isOpen && 'from-slate-100 to-slate-200/80 border-forja-fire/50 ring-2 ring-forja-fire/20'
      )}
      aria-label={`Cambiar país: ${name}`}
      aria-expanded={isOpen}
      aria-haspopup="listbox"
    >
      <span className="text-sm leading-none" aria-hidden="true">
        {country?.flag || '🌐'}
      </span>
      <span className="font-bold text-xs uppercase">
        {country?.code || 'XX'}
      </span>
    </button>
  );
}

/**
 * Variante 6: GlobeButton - Botón de globo azul oscuro
 * - Más grande y visible
 * - Color azul oscuro (brand-navy)
 * - Click para ver países
 */
export function GlobeButton({ isOpen, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'group flex items-center justify-center',
        'w-12 h-12 rounded-full',
        'bg-[#1e3a5f] hover:bg-[#2a4a73]', // Azul marino del logotipo
        'border-2 border-[#2a4a73] hover:border-[#3a5a83]',
        'text-white',
        'shadow-lg hover:shadow-xl',
        'transition-all duration-200 ease-out',
        'focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2',
        'active:scale-95',
        isOpen && 'bg-[#2a4a73] border-brand-orange ring-2 ring-brand-orange/30'
      )}
      aria-label="Seleccionar país"
      aria-expanded={isOpen}
      aria-haspopup="listbox"
    >
      {/* Icono de Globo SVG - Grande */}
      <svg 
        className={cn(
          'w-7 h-7 transition-transform duration-200',
          'group-hover:scale-110 group-hover:rotate-12',
          isOpen && 'scale-110 rotate-12'
        )}
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" 
        />
      </svg>
    </button>
  );
}

/**
 * Variante 3: Badge Premium (Estilo GitHub/GitLab)
 * - Muy compacto
 * - Badge style con bordes redondeados
 * - Solo flag + chevron
 */
export function BadgeButton({ country, isOpen, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'group relative inline-flex items-center gap-1.5 rounded-md',
        'px-2 py-1',
        'bg-white/8 hover:bg-white/12',
        'border border-white/20 hover:border-forja-fire/40',
        'text-white',
        'transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-forja-fire/50',
        'active:scale-95',
        isOpen && 'bg-white/12 border-forja-fire/50'
      )}
      aria-label={`Cambiar país: ${country.name}`}
    >
      <span className="text-base leading-none">
        {country.flag}
      </span>
      
      <svg 
        className={cn(
          'w-3 h-3 opacity-70 group-hover:opacity-100 transition-all',
          isOpen && 'rotate-180 opacity-100'
        )}
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
}

/**
 * Variante 4: Orbe Futurista (Diseño Único)
 * - Circular con efecto de profundidad
 * - Animación de glow
 * - Ultra-moderno
 */
export function OrbButton({ country, isOpen, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'group relative flex items-center justify-center',
        'w-10 h-10 rounded-full',
        'bg-gradient-to-br from-white/10 via-white/5 to-transparent',
        'hover:from-white/15 hover:via-white/10',
        'border border-white/20 hover:border-white/40',
        'shadow-lg hover:shadow-xl',
        'transition-all duration-300 ease-out',
        'focus:outline-none focus:ring-2 focus:ring-forja-fire/50 focus:ring-offset-2 focus:ring-offset-transparent',
        'active:scale-90',
        isOpen && 'from-white/15 via-white/10 border-forja-fire/50 ring-2 ring-forja-fire/30'
      )}
      aria-label={`Cambiar país: ${country.name}`}
    >
      {/* Glow effect en hover */}
      <div className={cn(
        'absolute inset-0 rounded-full bg-gradient-radial from-forja-fire/20 to-transparent',
        'opacity-0 group-hover:opacity-100 transition-opacity duration-300',
        'blur-md',
        isOpen && 'opacity-100 animate-pulse'
      )} />
      
      {/* Flag centrado */}
      <span className={cn(
        'text-xl leading-none z-10',
        'transition-transform duration-200',
        'group-hover:scale-110',
        isOpen && 'scale-110'
      )}>
        {country.flag}
      </span>
      
      {/* Indicador de estado (punto) */}
      <div className={cn(
        'absolute bottom-1 right-1',
        'w-2 h-2 rounded-full',
        'bg-white/40',
        'transition-all duration-200',
        isOpen && 'bg-forja-fire scale-125 animate-pulse'
      )} />
    </button>
  );
}

/**
 * Variante 5: Botón Flotante con Sombra (Estilo Material 3)
 * - Elevation pronunciado
 * - Efecto de profundidad
 * - Compacto pero visible
 */
export function FloatingButton({ country, isOpen, onClick, compact }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'group relative inline-flex items-center gap-2 rounded-xl',
        'px-3 py-2',
        'bg-gradient-to-br from-slate-700/80 via-slate-800/80 to-slate-900/80',
        'hover:from-slate-600/80 hover:via-slate-700/80 hover:to-slate-800/80',
        'backdrop-blur-xl',
        'border border-white/10 hover:border-white/25',
        'shadow-xl hover:shadow-2xl',
        'shadow-black/20 hover:shadow-black/30',
        'text-white text-sm font-medium',
        'transition-all duration-300 ease-out',
        'focus:outline-none focus:ring-2 focus:ring-forja-fire/50 focus:ring-offset-2',
        'hover:-translate-y-0.5',
        'active:translate-y-0 active:shadow-lg',
        isOpen && 'from-slate-600/80 via-slate-700/80 to-slate-800/80 ring-2 ring-forja-fire/40',
        compact && 'px-2 py-1.5'
      )}
      aria-label={`Cambiar país: ${country.name}`}
    >
      {/* Flag */}
      <span className={cn(
        'text-lg leading-none',
        'transition-transform duration-200',
        'group-hover:scale-110',
        isOpen && 'scale-110'
      )}>
        {country.flag}
      </span>
      
      {/* Nombre (opcional) */}
      {!compact && (
        <span className="hidden md:inline-block font-semibold text-xs">
          {country.name}
        </span>
      )}
      
      {/* Mini chevron */}
      <svg 
        className={cn(
          'w-3.5 h-3.5 opacity-60 group-hover:opacity-100',
          'transition-all duration-200',
          isOpen && 'rotate-180 opacity-100'
        )}
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
}

