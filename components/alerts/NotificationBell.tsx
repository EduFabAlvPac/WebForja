/**
 * FORJA DIGITAL - Notification Bell Component
 * 
 * Botón flotante de campanita que muestra noticias gubernamentales
 * Solo visible en páginas principales (Home)
 * 
 * @module components/alerts/NotificationBell
 */

'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, X, ExternalLink, Megaphone, Newspaper } from 'lucide-react';
import { useCountryOptional } from '@/context/CountryProvider';
import { getNewsByCountry, NewsItem } from '@/content/news';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface NotificationBellProps {
  className?: string;
}

export function NotificationBell({ className }: NotificationBellProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [hasUnread, setHasUnread] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);
  
  const countryContext = useCountryOptional();
  const country = countryContext?.country;
  const countryCode = country?.code || 'co';

  // Cargar noticias del país
  useEffect(() => {
    const validCode = countryCode === 'default' ? 'co' : countryCode;
    const countryNews = getNewsByCountry(validCode as 'co' | 'cl' | 'pe' | 'ec');
    setNews(countryNews);
  }, [countryCode]);

  // Cerrar modal al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
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

  // Cerrar con Escape
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

  const handleOpen = () => {
    setIsOpen(true);
    setHasUnread(false);
  };

  const formatDate = (dateISO: string) => {
    const date = new Date(dateISO);
    return new Intl.DateTimeFormat('es', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }).format(date);
  };

  return (
    <div ref={modalRef} className={cn('fixed z-50', className)}>
      {/* Botón Flotante de Campanita */}
      <motion.button
        onClick={handleOpen}
        className={cn(
          'relative flex items-center justify-center',
          'w-14 h-14 rounded-2xl',
          'bg-gradient-to-br from-orange-500 to-orange-600',
          'hover:from-orange-400 hover:to-orange-500',
          'shadow-lg hover:shadow-xl shadow-orange-500/30',
          'transition-all duration-300',
          'focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2',
          isOpen && 'scale-95'
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Ver notificaciones"
        aria-expanded={isOpen}
      >
        <Bell className="w-6 h-6 text-white" />
        
        {/* Badge de notificaciones */}
        {hasUnread && news.length > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg"
          >
            {news.length > 9 ? '9+' : news.length}
          </motion.span>
        )}
      </motion.button>

      {/* Modal de Notificaciones */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={cn(
              'absolute bottom-20 left-0',
              'w-80 sm:w-96',
              'bg-white rounded-2xl shadow-2xl',
              'border border-slate-200',
              'overflow-hidden'
            )}
          >
            {/* Header del Modal */}
            <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Megaphone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">
                      Noticias PYME
                    </h3>
                    <p className="text-white/80 text-xs">
                      {country?.name || 'Internacional'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                  aria-label="Cerrar notificaciones"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Lista de Noticias */}
            <div className="max-h-80 overflow-y-auto">
              {news.length === 0 ? (
                <div className="p-6 text-center text-slate-500">
                  <Bell className="w-12 h-12 mx-auto mb-3 text-slate-300" />
                  <p>No hay noticias disponibles</p>
                </div>
              ) : (
                <div className="divide-y divide-slate-100">
                  {news.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="p-4 hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        {/* Icono de la fuente */}
                        <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                          <Newspaper className="w-5 h-5 text-orange-600" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          {/* Fuente */}
                          {item.source && (
                            <span className="inline-block text-xs font-semibold text-orange-600 mb-1">
                              {item.source}
                            </span>
                          )}
                          
                          {/* Título */}
                          <h4 className="font-semibold text-slate-900 text-sm leading-tight mb-1">
                            {item.title}
                          </h4>
                          
                          {/* Descripción */}
                          <p className="text-xs text-slate-600 line-clamp-2 mb-2">
                            {item.description}
                          </p>
                          
                          {/* Footer con fecha y link */}
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-slate-400">
                              {formatDate(item.publishedAt)}
                            </span>
                            
                            {item.link && (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-medium text-orange-600 hover:text-orange-700 transition-colors"
                              >
                                {item.linkText || 'Ver más'}
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer del Modal */}
            <div className="bg-slate-50 px-5 py-3 border-t border-slate-100">
              <p className="text-xs text-slate-500 text-center">
                Información de fuentes gubernamentales oficiales
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

