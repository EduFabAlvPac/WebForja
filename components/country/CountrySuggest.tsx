/**
 * FORJA DIGITAL - Country Suggestion Component
 * 
 * Snackbar no intrusivo que sugiere país basado en geolocalización.
 * Se muestra solo una vez y respeta preferencias existentes.
 * 
 * @module components/country/CountrySuggest
 */

'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { X, MapPin } from 'lucide-react';
import { COUNTRIES, LocaleCode } from '@/lib/country';
import { hasCountryPreference, setCountryPreference } from '@/lib/utils/cookies-country';
import { cn } from '@/lib/utils';

interface CountrySuggestProps {
  /** Locale sugerido por geolocalización */
  suggestedLocale?: string | null;
  /** Locale actual del usuario */
  currentLocale?: string;
}

/**
 * Clave de localStorage para controlar si ya se mostró la sugerencia
 */
const STORAGE_KEY = 'forja_geo_suggest_shown';

/**
 * CountrySuggest - Snackbar de sugerencia de país
 * 
 * Muestra un snackbar cuando:
 * - Se detecta un país diferente al actual
 * - No hay preferencia guardada en cookie
 * - No se ha mostrado antes (localStorage)
 * 
 * @example
 * // En la homepage
 * <CountrySuggest 
 *   suggestedLocale="es-co" 
 *   currentLocale="es"
 * />
 */
export function CountrySuggest({ suggestedLocale, currentLocale = 'es' }: CountrySuggestProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // No hacer nada en SSR
    if (typeof window === 'undefined') return;

    // Verificar si se debe mostrar la sugerencia
    const shouldShow = checkShouldShowSuggestion(suggestedLocale, currentLocale);
    
    if (shouldShow) {
      // Pequeño delay para mejor UX (esperar que la página cargue)
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [suggestedLocale, currentLocale]);

  /**
   * Verificar si se debe mostrar la sugerencia
   */
  const checkShouldShowSuggestion = (suggested?: string | null, current?: string): boolean => {
    // 1. No hay sugerencia válida
    if (!suggested || !COUNTRIES[suggested as LocaleCode]) {
      return false;
    }

    // 2. La sugerencia es igual al locale actual
    if (suggested === current) {
      return false;
    }

    // 3. Usuario ya tiene preferencia guardada
    if (hasCountryPreference()) {
      return false;
    }

    // 4. Ya se mostró antes (localStorage)
    try {
      const alreadyShown = localStorage.getItem(STORAGE_KEY);
      if (alreadyShown === 'true') {
        return false;
      }
    } catch (e) {
      // Si localStorage no está disponible, no mostrar
      return false;
    }

    return true;
  };

  /**
   * Usuario acepta la sugerencia
   */
  const handleAccept = () => {
    if (!suggestedLocale) return;

    // Guardar preferencia
    setCountryPreference(suggestedLocale as LocaleCode);
    
    // Marcar como mostrado
    markAsShown();
    
    // Navegar al país sugerido
    router.push(`/${suggestedLocale}`);
    
    // Cerrar snackbar
    closeSnackbar();
  };

  /**
   * Usuario rechaza la sugerencia
   */
  const handleDismiss = () => {
    markAsShown();
    closeSnackbar();
  };

  /**
   * Marcar en localStorage que ya se mostró
   */
  const markAsShown = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch (e) {
      // Ignorar errores de localStorage
    }
  };

  /**
   * Cerrar snackbar con animación
   */
  const closeSnackbar = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 300);
  };

  // No renderizar si no debe mostrarse
  if (!isVisible) return null;

  const suggestedCountry = COUNTRIES[suggestedLocale as LocaleCode];
  if (!suggestedCountry) return null;

  return (
    <div
      className={cn(
        'fixed bottom-6 left-1/2 -translate-x-1/2 z-50',
        'max-w-md w-full mx-4',
        'transition-all duration-300',
        isClosing ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
      )}
      role="alertdialog"
      aria-live="polite"
      aria-atomic="true"
    >
      {/* Backdrop sutil */}
      <div 
        className="absolute inset-0 -z-10 bg-black/5 blur-xl"
        aria-hidden="true"
      />

      {/* Snackbar */}
      <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-4">
        <div className="flex items-start gap-3">
          {/* Icono */}
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <MapPin className="w-5 h-5 text-blue-600" />
          </div>

          {/* Contenido */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 mb-1">
              Parece que estás en {suggestedCountry.name} {suggestedCountry.flag}
            </p>
            <p className="text-sm text-gray-600 mb-3">
              ¿Quieres ver el contenido para {suggestedCountry.name}?
            </p>

            {/* Acciones */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleAccept}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-md',
                  'bg-brand-orange text-white',
                  'hover:bg-brand-orange-dark',
                  'focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2',
                  'transition-colors'
                )}
              >
                Sí, cambiar a {suggestedCountry.name}
              </button>
              <button
                onClick={handleDismiss}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-md',
                  'text-gray-700 hover:text-gray-900',
                  'hover:bg-gray-100',
                  'focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2',
                  'transition-colors'
                )}
              >
                No, gracias
              </button>
            </div>
          </div>

          {/* Botón cerrar */}
          <button
            onClick={handleDismiss}
            className={cn(
              'flex-shrink-0 w-8 h-8 rounded-full',
              'flex items-center justify-center',
              'text-gray-400 hover:text-gray-600 hover:bg-gray-100',
              'focus:outline-none focus:ring-2 focus:ring-gray-500',
              'transition-colors'
            )}
            aria-label="Cerrar sugerencia"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Hook para obtener el país sugerido desde headers
 * 
 * Nota: Los headers del servidor no están disponibles directamente en Client Components.
 * Necesitamos pasarlo desde un Server Component.
 * 
 * @example
 * // En Server Component (page.tsx)
 * import { headers } from 'next/headers';
 * 
 * const headersList = headers();
 * const geoCountry = headersList.get('x-geo-country');
 * 
 * <CountrySuggest suggestedLocale={geoCountry} />
 */
export function useSuggestedCountry(): string | null {
  // Este hook no se puede implementar directamente en Client Component
  // Los headers deben leerse en Server Component y pasarse como props
  return null;
}

