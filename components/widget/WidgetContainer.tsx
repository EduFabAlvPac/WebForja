'use client'

import { useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

import { Dialog, DialogContent } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

const sizeClasses: Record<string, string> = {
  sm: 'max-w-[min(340px,calc(100vw-2rem))]',
  md: 'max-w-[min(400px,calc(100vw-2rem))]',
  lg: 'max-w-[min(500px,calc(100vw-2rem))]',
}

interface WidgetContainerProps {
  isOpen: boolean
  onClose: () => void
  size?: keyof typeof sizeClasses
  className?: string
  children: ReactNode
}

export function WidgetContainer({
  isOpen,
  onClose,
  size = 'md',
  className,
  children,
}: WidgetContainerProps) {
  const shouldReduceMotion = useReducedMotion()
  const stateTransition = shouldReduceMotion
    ? 'data-[state=open]:scale-100 data-[state=closed]:scale-100'
    : 'data-[state=open]:scale-100 data-[state=closed]:scale-95'

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        hideCloseButton
        disableOverlay
        className={cn(
          'fixed bottom-4 right-4 lg:bottom-6 lg:right-6 left-auto !translate-x-0 !translate-y-0 !top-auto !left-auto w-full max-w-full p-0',
          'max-h-[calc(100vh-3rem)]',
          stateTransition,
          'rounded-[28px] border border-slate-200/80 bg-white shadow-2xl shadow-slate-900/15 transition-all duration-200 ease-out outline-none overflow-hidden',
          sizeClasses[size],
          className
        )}
      >
        {children}
      </DialogContent>
    </Dialog>
  )
}


