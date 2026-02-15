/**
 * FORJA DIGITAL - Downloadable Card Component
 * 
 * Tarjeta especial para items descargables que abre el dialog de lead capture.
 * Wrapper sobre InterestCard que intercepta el click.
 * 
 * @module components/interest/DownloadableCard
 */

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Download, 
  Calendar, 
  FileText,
  FileSpreadsheet,
  File,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { DownloadDialog } from './DownloadDialog';
import type { InterestItem } from '@/types/interest';

// ═══════════════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════════════

interface DownloadableCardProps {
  item: InterestItem;
  locale?: string;
  variant?: 'compact' | 'full';
  className?: string;
}

// ═══════════════════════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════════════════════

function getFileIcon(href?: string) {
  if (!href) return FileText;
  
  if (href.includes('.xlsx') || href.includes('.xls')) {
    return FileSpreadsheet;
  }
  if (href.includes('.pdf')) {
    return FileText;
  }
  return File;
}

function getFileType(href?: string): string {
  if (!href) return 'Documento';
  
  if (href.includes('.xlsx') || href.includes('.xls')) {
    return 'Excel';
  }
  if (href.includes('.pdf')) {
    return 'PDF';
  }
  if (href.includes('.docx') || href.includes('.doc')) {
    return 'Word';
  }
  return 'Archivo';
}

function formatDate(dateISO: string): string {
  const date = new Date(dateISO);
  return new Intl.DateTimeFormat('es', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
}

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export function DownloadableCard({ 
  item, 
  locale = 'es',
  variant = 'compact',
  className 
}: DownloadableCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const FileIcon = getFileIcon(item.href);
  const fileType = getFileType(item.href);

  const handleClick = () => {
    setIsDialogOpen(true);
  };

  if (variant === 'compact') {
    return (
      <>
        <button
          onClick={handleClick}
          aria-label={`Descargar ${fileType}: ${item.title}`}
          className={cn(
            'group w-full flex items-start gap-4 p-4',
            'rounded-xl border border-slate-200 bg-white',
            'shadow-sm hover:shadow-md hover:bg-amber-50/50 hover:border-amber-200',
            'transition-all duration-200 text-left',
            'focus:outline-none focus:ring-2 focus:ring-forja-fire/30 focus:ring-offset-2',
            'focus-visible:ring-2 focus-visible:ring-forja-fire focus-visible:ring-offset-2',
            className
          )}
        >
          {/* Icon/Thumbnail */}
          <div className="relative flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden bg-amber-100 flex items-center justify-center">
            <FileIcon className="w-7 h-7 text-amber-600" />
            {/* File type badge */}
            <div className="absolute -bottom-1 -right-1 px-1.5 py-0.5 bg-amber-600 text-white text-[10px] font-bold rounded">
              {fileType}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Badge */}
            <Badge className="bg-amber-100 text-amber-700 mb-1">
              <Download className="w-3 h-3 mr-1" />
              Descargable
            </Badge>

            {/* Title */}
            <h3 className="font-semibold text-slate-900 line-clamp-2 text-sm leading-tight mb-1 group-hover:text-amber-700 transition-colors">
              {item.title}
            </h3>

            {/* Meta */}
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {formatDate(item.dateISO)}
              </span>
            </div>
          </div>

          {/* Download indicator */}
          <div className="flex-shrink-0 self-center">
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center group-hover:bg-amber-200 transition-colors">
              <Download className="w-4 h-4 text-amber-600 group-hover:scale-110 transition-transform" />
            </div>
          </div>
        </button>

        {/* Download Dialog */}
        <DownloadDialog
          item={item}
          locale={locale}
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
        />
      </>
    );
  }

  // Full variant (for grid)
  return (
    <>
      <motion.button
        onClick={handleClick}
        aria-label={`Descargar ${fileType}: ${item.title}`}
        className={cn(
          'group w-full h-full flex flex-col text-left',
          'rounded-xl border border-slate-200 bg-white overflow-hidden',
          'shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-amber-200',
          'transition-all duration-300',
          'focus:outline-none focus:ring-2 focus:ring-forja-fire/30 focus:ring-offset-2',
          'focus-visible:ring-2 focus-visible:ring-forja-fire focus-visible:ring-offset-2',
          className
        )}
        whileHover={{ y: -4 }}
      >
        {/* Header with icon */}
        <div className="relative aspect-[16/10] bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center">
          <div className="text-center">
            <FileIcon className="w-16 h-16 text-amber-500 mx-auto mb-2" />
            <span className="inline-block px-3 py-1 bg-amber-600 text-white text-sm font-bold rounded-full">
              {fileType}
            </span>
          </div>
          
          {/* Download badge */}
          <div className="absolute top-3 left-3">
            <Badge className="bg-amber-100 text-amber-700">
              <Download className="w-3 h-3 mr-1" />
              Descargable
            </Badge>
          </div>

          {/* Featured badge */}
          {item.featured && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-forja-fire text-white gap-1">
                <Sparkles className="w-3 h-3" />
                Destacado
              </Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-4">
          {/* Title */}
          <h3 className="font-bold text-slate-900 line-clamp-2 text-base leading-tight mb-2 group-hover:text-amber-700 transition-colors">
            {item.title}
          </h3>

          {/* Summary */}
          <p className="text-sm text-slate-600 line-clamp-3 mb-3 flex-1">
            {item.summary}
          </p>

          {/* Tags */}
          {item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {item.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-100">
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(item.dateISO)}
            </span>

            <span className="flex items-center gap-1 text-sm font-medium text-amber-600 group-hover:gap-2 transition-all">
              Descargar
              <Download className="w-4 h-4" />
            </span>
          </div>
        </div>
      </motion.button>

      {/* Download Dialog */}
      <DownloadDialog
        item={item}
        locale={locale}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
}

export default DownloadableCard;

