/**
 * FORJA DIGITAL - Placeholder Content Component
 * 
 * Muestra un mensaje cuando el contenido MDX no está disponible.
 * Estilo Notion-like con mensaje amigable.
 * 
 * @module components/interest/PlaceholderContent
 */

'use client';

import Link from 'next/link';
import { FileText, Clock, Bell, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { InterestItem } from '@/types/interest';

interface PlaceholderContentProps {
  item: InterestItem;
  locale?: string;
}

export function PlaceholderContent({ item, locale }: PlaceholderContentProps) {
  return (
    <div className="py-16 text-center">
      <div className="max-w-lg mx-auto">
        {/* Icon */}
        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center">
          <FileText className="w-10 h-10 text-slate-400" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-slate-800 mb-3">
          Recurso en Preparación
        </h2>

        {/* Description */}
        <p className="text-slate-600 mb-6 leading-relaxed">
          Estamos trabajando en el contenido completo de este recurso. 
          Mientras tanto, puedes visitar la fuente oficial o explorar 
          otros contenidos disponibles.
        </p>

        {/* Info Box */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-left">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-amber-800 text-sm mb-1">
                Próximamente disponible
              </h4>
              <p className="text-amber-700 text-sm">
                El contenido detallado de "{item.title}" estará disponible pronto.
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {item.href && (
            <Button asChild>
              <a 
                href={item.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="gap-2"
              >
                Visitar fuente oficial
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          )}
          <Button variant="outline" asChild>
            <Link href={`/${locale || ''}/interes`.replace('//', '/')}>
              Ver otros recursos
            </Link>
          </Button>
        </div>

        {/* Notify Option */}
        <div className="mt-8 pt-6 border-t border-slate-200">
          <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
            <Bell className="w-4 h-4" />
            <span>¿Quieres ser notificado cuando esté listo?</span>
          </div>
          <Link
            href={`/${locale || ''}/contacto`.replace('//', '/')}
            className="inline-block mt-2 text-sm text-forja-fire hover:underline"
          >
            Déjanos tu correo →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PlaceholderContent;

