/**
 * FORJA DIGITAL - Country Switcher Component (Premium Edition)
 * 
 * Selector de país con diseño ultra-premium y animaciones sofisticadas.
 * World-class UX con glassmorphism, gradientes y microinteracciones.
 * 
 * @module components/country/CountrySwitcher
 */

'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';
import Image from 'next/image';
import { useCountryOptional } from '@/context/CountryProvider';
import { COUNTRIES, SUPPORTED_LOCALES, LocaleCode, INTERNATIONAL_LOCALE } from '@/lib/country';

// Todos los locales para el dropdown (Internacional + países)
const ALL_LOCALES: LocaleCode[] = [INTERNATIONAL_LOCALE, ...SUPPORTED_LOCALES];
import { setCountryPreference } from '@/lib/utils/cookies-country';
import { cn } from '@/lib/utils';
import { GlobeButton } from './CountrySwitcherButton';

interface CountrySwitcherProps {
  /** Clase CSS adicional */
  className?: string;
  /** Mostrar solo en desktop */
  desktopOnly?: boolean;
  /** Mostrar solo en mobile */
  mobileOnly?: boolean;
  /** Modo compacto (solo bandera) */
  compact?: boolean;
}

/**
 * CountrySwitcher - Selector de país premium con animaciones
 * 
 * Diseño ultra-moderno con glassmorphism, gradientes y microinteracciones.
 * Uno de los mejores selectores de país del planeta.
 */
export function CountrySwitcher({ 
  className,
  desktopOnly = false,
  mobileOnly = false,
  compact = false,
}: CountrySwitcherProps) {
  // IMPORTANTE: Todos los hooks deben ir ANTES de cualquier return condicional
  const countryContext = useCountryOptional();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Asegurar que siempre tengamos un país válido
  const country = countryContext?.country || COUNTRIES['es'];
  const locale = countryContext?.locale || 'es';

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Cerrar con tecla Escape
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  /**
   * Cambiar país y navegar a la página principal del país
   * Siempre lleva al home del país seleccionado
   */
  const handleCountryChange = (newLocale: LocaleCode) => {
    setCountryPreference(newLocale);

    // Siempre ir a la página principal del país seleccionado
    const newPath = newLocale === 'es' ? '/' : `/${newLocale}`;
    
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div 
      ref={dropdownRef}
      className={cn(
        'relative z-50',
        desktopOnly && 'hidden md:block',
        mobileOnly && 'md:hidden',
        className
      )}
    >
      {/* Botón Minimalista - Solo Icono de Globo */}
      <GlobeButton
        country={country}
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />

      {/* Dropdown Premium con Backdrop */}
      {isOpen && (
        <>
          {/* Backdrop oscuro con blur */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 animate-in fade-in duration-300"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          
          {/* Menu desplegable */}
          <div
            role="listbox"
            aria-label="Seleccionar país"
            className={cn(
              'absolute right-0 mt-3 w-80',
              'bg-gradient-to-br from-white via-slate-50 to-white',
              'rounded-2xl shadow-2xl border border-slate-200/60',
              'overflow-hidden z-50',
              'animate-in fade-in slide-in-from-top-3 zoom-in-95 duration-300'
            )}
          >
            {/* Header elegante */}
            <div className="relative overflow-hidden bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 px-5 py-4 border-b border-slate-600/20">
              {/* Efecto de brillo de fondo */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer-slow" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-white">
                  <Globe className="w-5 h-5" />
                  <span className="font-bold text-sm">Selecciona tu país</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Contenido personalizado para tu región
                </p>
              </div>
            </div>
            
            {/* Lista de países - Sin scroll, todos visibles */}
            <div className="py-2">
              {ALL_LOCALES.map((localeCode, index) => {
                const countryData = COUNTRIES[localeCode];
                const isActive = localeCode === locale;

                return (
                  <button
                    key={localeCode}
                    onClick={() => handleCountryChange(localeCode)}
                    role="option"
                    aria-selected={isActive}
                    style={{ animationDelay: `${index * 30}ms` }}
                    className={cn(
                      'group relative w-full flex items-center gap-4 px-5 py-4 mx-2 rounded-xl',
                      'text-left transition-all duration-200',
                      'animate-in fade-in slide-in-from-left-2',
                      isActive 
                        ? 'bg-gradient-to-r from-forja-fire/10 via-forja-fire/5 to-transparent border-l-4 border-forja-fire shadow-sm' 
                        : 'hover:bg-gradient-to-r hover:from-slate-100 hover:to-transparent border-l-4 border-transparent hover:border-slate-300',
                      'focus:outline-none focus:ring-2 focus:ring-forja-fire/30 focus:ring-inset'
                    )}
                  >
                    {/* Bandera real en círculo elegante */}
                    <div className="relative">
                      {localeCode === 'es' ? (
                        /* Icono elegante para Internacional */
                        <div className={cn(
                          'w-12 h-12 rounded-full flex items-center justify-center',
                          'bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900',
                          'shadow-lg transition-all duration-200 group-hover:scale-110',
                          isActive && 'ring-2 ring-forja-fire ring-offset-2'
                        )}>
                          <svg 
                            className="w-7 h-7 text-white"
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                            strokeWidth={1.5}
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" 
                            />
                          </svg>
                        </div>
                      ) : (
                        /* Bandera real del país en círculo */
                        <div className={cn(
                          'w-12 h-12 rounded-full overflow-hidden',
                          'shadow-lg border-2 border-white',
                          'transition-all duration-200 group-hover:scale-110 group-hover:shadow-xl',
                          isActive && 'ring-2 ring-forja-fire ring-offset-2'
                        )}>
                          <Image
                            src={`https://flagcdn.com/w80/${countryData.code}.png`}
                            alt={`Bandera de ${countryData.name}`}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                            unoptimized
                          />
                        </div>
                      )}
                      {isActive && (
                        <div className="absolute -inset-1 bg-forja-fire/20 rounded-full blur-md -z-10 animate-pulse" />
                      )}
                    </div>
                    
                    {/* Información del país */}
                    <div className="flex-1 min-w-0">
                      <div className={cn(
                        'font-bold text-base transition-colors',
                        isActive ? 'text-forja-fire' : 'text-slate-800 group-hover:text-slate-900'
                      )}>
                        {countryData.name}
                      </div>
                      <span className="text-xs text-slate-500 font-medium">
                        {localeCode === 'es' ? '/' : `/${localeCode}`}
                      </span>
                    </div>
                    
                    {/* Check icon con animación para país activo */}
                    {isActive && (
                      <div className="animate-in zoom-in-50 duration-300">
                        <div className="relative">
                          <svg 
                            className="w-6 h-6 text-forja-fire" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path 
                              fillRule="evenodd" 
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                              clipRule="evenodd" 
                            />
                          </svg>
                          {/* Efecto de pulso */}
                          <div className="absolute inset-0 bg-forja-fire rounded-full animate-ping opacity-20" />
                        </div>
                      </div>
                    )}
                    
                    {/* Arrow en hover para no activos */}
                    {!isActive && (
                      <svg 
                        className="w-5 h-5 text-slate-400 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>
            
            {/* Footer con información */}
            <div className="relative overflow-hidden bg-gradient-to-r from-slate-50 via-white to-slate-50 px-5 py-3 border-t border-slate-200">
              <p className="text-xs text-slate-600 flex items-center gap-2">
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>Tu preferencia se guardará automáticamente</span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/**
 * CountrySwitcherCompact - Versión compacta para espacios reducidos
 */
export function CountrySwitcherCompact(props: Omit<CountrySwitcherProps, 'compact'>) {
  return <CountrySwitcher {...props} compact />;
}
