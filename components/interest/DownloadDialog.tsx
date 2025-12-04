/**
 * FORJA DIGITAL - Download Dialog Component
 * 
 * Dialog modal para capturar leads antes de descargar recursos.
 * Usa React Hook Form + Zod para validación.
 * Incluye honeypot anti-spam y focus trap para accesibilidad.
 * 
 * @module components/interest/DownloadDialog
 */

'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Download, 
  Loader2, 
  CheckCircle, 
  AlertCircle,
  FileText,
  Building2,
  Mail,
  User,
  Globe
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { processDownload, triggerDownload } from '@/utils/download';
import type { InterestItem } from '@/types/interest';

// ═══════════════════════════════════════════════════════════════════════════
// SCHEMA
// ═══════════════════════════════════════════════════════════════════════════

const downloadFormSchema = z.object({
  name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre es muy largo'),
  email: z
    .string()
    .email('Ingresa un email válido')
    .min(5, 'El email es muy corto'),
  company: z
    .string()
    .min(2, 'El nombre de empresa debe tener al menos 2 caracteres')
    .max(100, 'El nombre de empresa es muy largo'),
  country: z
    .string()
    .min(1, 'Selecciona un país'),
  // Honeypot field (should be empty)
  website: z.string().max(0, 'Invalid submission'),
});

type DownloadFormData = z.infer<typeof downloadFormSchema>;

// ═══════════════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════════════

interface DownloadDialogProps {
  item: InterestItem;
  locale?: string;
  isOpen: boolean;
  onClose: () => void;
}

type FormState = 'idle' | 'submitting' | 'success' | 'error';

// ═══════════════════════════════════════════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════════════════════════════════════════

const COUNTRIES = [
  { code: 'co', name: 'Colombia' },
  { code: 'cl', name: 'Chile' },
  { code: 'pe', name: 'Perú' },
  { code: 'ec', name: 'Ecuador' },
  { code: 'mx', name: 'México' },
  { code: 'ar', name: 'Argentina' },
  { code: 'other', name: 'Otro' },
];

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export function DownloadDialog({ 
  item, 
  locale = 'es', 
  isOpen, 
  onClose 
}: DownloadDialogProps) {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DownloadFormData>({
    resolver: zodResolver(downloadFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      country: locale !== 'es' ? locale : '',
      website: '', // Honeypot
    },
  });

  // Reset form when dialog opens
  useEffect(() => {
    if (isOpen) {
      setFormState('idle');
      setErrorMessage('');
      reset({
        name: '',
        email: '',
        company: '',
        country: locale !== 'es' ? locale : '',
        website: '',
      });
    }
  }, [isOpen, locale, reset]);

  // Focus trap and ESC handler
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      // Focus trap
      if (e.key === 'Tab' && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    // Focus first element
    setTimeout(() => {
      firstFocusableRef.current?.focus();
    }, 100);

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Form submission
  const onSubmit = useCallback(async (data: DownloadFormData) => {
    // Check honeypot
    if (data.website) {
      console.warn('Honeypot triggered');
      return;
    }

    setFormState('submitting');
    setErrorMessage('');

    try {
      const result = await processDownload(
        item.slug,
        {
          name: data.name,
          email: data.email,
          company: data.company,
          country: data.country,
        },
        locale
      );

      if (result.success && result.downloadUrl) {
        setFormState('success');
        
        // Trigger download after short delay
        setTimeout(() => {
          triggerDownload(result.downloadUrl!, item.title);
        }, 1000);

        // Close dialog after longer delay
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        setFormState('error');
        setErrorMessage(result.error || 'Error al procesar la descarga');
      }
    } catch (error) {
      setFormState('error');
      setErrorMessage('Error inesperado. Por favor, intenta de nuevo.');
    }
  }, [item.slug, item.title, locale, onClose]);

  // Handle backdrop click
  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="download-dialog-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Dialog */}
          <motion.div
            ref={dialogRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className={cn(
              'relative w-full max-w-lg',
              'bg-white rounded-2xl shadow-2xl',
              'max-h-[90vh] overflow-y-auto'
            )}
          >
            {/* Close button */}
            <button
              ref={firstFocusableRef}
              onClick={onClose}
              className={cn(
                'absolute top-4 right-4 z-10',
                'p-2 rounded-full',
                'text-slate-400 hover:text-slate-600 hover:bg-slate-100',
                'transition-colors',
                'focus:outline-none focus:ring-2 focus:ring-forja-fire'
              )}
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="p-6 pb-4 border-b border-slate-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-amber-600" />
                </div>
                <div className="flex-1 min-w-0 pr-8">
                  <h2 
                    id="download-dialog-title"
                    className="text-xl font-bold text-slate-900 mb-1"
                  >
                    Descargar Recurso
                  </h2>
                  <p className="text-sm text-slate-600 line-clamp-2">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {formState === 'success' ? (
                <SuccessState />
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Name */}
                  <FormField
                    id="name"
                    label="Nombre completo"
                    icon={<User className="w-4 h-4" />}
                    error={errors.name?.message}
                  >
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Tu nombre"
                      disabled={formState === 'submitting'}
                      className={cn(
                        'w-full pl-10 pr-4 py-2.5 rounded-lg',
                        'border border-slate-300',
                        'text-slate-900 placeholder:text-slate-400',
                        'focus:outline-none focus:ring-2 focus:ring-forja-fire/30 focus:border-forja-fire',
                        'disabled:bg-slate-50 disabled:cursor-not-allowed',
                        errors.name && 'border-red-500 focus:ring-red-500/30 focus:border-red-500'
                      )}
                      {...register('name')}
                    />
                  </FormField>

                  {/* Email */}
                  <FormField
                    id="email"
                    label="Email corporativo"
                    icon={<Mail className="w-4 h-4" />}
                    error={errors.email?.message}
                  >
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="tu@empresa.com"
                      disabled={formState === 'submitting'}
                      className={cn(
                        'w-full pl-10 pr-4 py-2.5 rounded-lg',
                        'border border-slate-300',
                        'text-slate-900 placeholder:text-slate-400',
                        'focus:outline-none focus:ring-2 focus:ring-forja-fire/30 focus:border-forja-fire',
                        'disabled:bg-slate-50 disabled:cursor-not-allowed',
                        errors.email && 'border-red-500 focus:ring-red-500/30 focus:border-red-500'
                      )}
                      {...register('email')}
                    />
                  </FormField>

                  {/* Company */}
                  <FormField
                    id="company"
                    label="Empresa"
                    icon={<Building2 className="w-4 h-4" />}
                    error={errors.company?.message}
                  >
                    <input
                      id="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Nombre de tu empresa"
                      disabled={formState === 'submitting'}
                      className={cn(
                        'w-full pl-10 pr-4 py-2.5 rounded-lg',
                        'border border-slate-300',
                        'text-slate-900 placeholder:text-slate-400',
                        'focus:outline-none focus:ring-2 focus:ring-forja-fire/30 focus:border-forja-fire',
                        'disabled:bg-slate-50 disabled:cursor-not-allowed',
                        errors.company && 'border-red-500 focus:ring-red-500/30 focus:border-red-500'
                      )}
                      {...register('company')}
                    />
                  </FormField>

                  {/* Country */}
                  <FormField
                    id="country"
                    label="País"
                    icon={<Globe className="w-4 h-4" />}
                    error={errors.country?.message}
                  >
                    <select
                      id="country"
                      disabled={formState === 'submitting'}
                      className={cn(
                        'w-full pl-10 pr-4 py-2.5 rounded-lg',
                        'border border-slate-300',
                        'text-slate-900 bg-white',
                        'focus:outline-none focus:ring-2 focus:ring-forja-fire/30 focus:border-forja-fire',
                        'disabled:bg-slate-50 disabled:cursor-not-allowed',
                        errors.country && 'border-red-500 focus:ring-red-500/30 focus:border-red-500'
                      )}
                      {...register('country')}
                    >
                      <option value="">Selecciona tu país</option>
                      {COUNTRIES.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  {/* Honeypot (hidden) */}
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    className="absolute -left-[9999px] opacity-0 pointer-events-none"
                    {...register('website')}
                  />

                  {/* Error message */}
                  {formState === 'error' && errorMessage && (
                    <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      {errorMessage}
                    </div>
                  )}

                  {/* Privacy note */}
                  <p className="text-xs text-slate-500">
                    Al descargar, aceptas recibir información relevante de Forja Digital. 
                    Puedes darte de baja en cualquier momento.
                  </p>

                  {/* Submit button */}
                  <Button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full bg-forja-fire hover:bg-forja-fire/90 text-white gap-2"
                  >
                    {formState === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Procesando...
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        Descargar Ahora
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SUB-COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════

interface FormFieldProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  error?: string;
  children: React.ReactNode;
}

function FormField({ id, label, icon, error, children }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1.5">
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
          {icon}
        </div>
        {children}
      </div>
      {error && (
        <p className="mt-1 text-xs text-red-600">{error}</p>
      )}
    </div>
  );
}

function SuccessState() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-8"
    >
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckCircle className="w-8 h-8 text-green-600" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">
        ¡Descarga Iniciada!
      </h3>
      <p className="text-slate-600 mb-4">
        Tu archivo se está descargando automáticamente.
      </p>
      <p className="text-sm text-slate-500">
        Si no inicia, revisa tu carpeta de descargas o{' '}
        <button className="text-forja-fire hover:underline">
          haz clic aquí
        </button>
        .
      </p>
    </motion.div>
  );
}

export default DownloadDialog;

