import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Button Component - FORJA Design System
 * 
 * Features:
 * - Primary/Secondary variants aligned with FORJA brand
 * - Accessible focus rings (outline-2, offset-2)
 * - Proper aria-disabled handling
 * - Keyboard navigation support
 * - Hover, active, and disabled states
 * - asChild support via Radix Slot
 */
const buttonVariants = cva(
  // Base styles - Accessibility & Transitions
  [
    "inline-flex items-center justify-center gap-2",
    "whitespace-nowrap rounded-xl font-heading font-semibold",
    "transition-all duration-200 ease-in-out",
    // Focus ring - WCAG 2.1 compliant
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    // Disabled state
    "disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
    // Active state
    "active:scale-[0.98]",
    // SVG handling
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        // PRIMARY - Main CTA (Fire Orange)
        primary: [
          "bg-forja-fire text-white shadow-lg shadow-forja-fire/25",
          "hover:bg-forja-fire/90 hover:shadow-xl hover:shadow-forja-fire/30",
          "active:bg-forja-fire/80",
          "focus-visible:ring-forja-fire focus-visible:ring-offset-2",
          "disabled:shadow-none",
        ],
        // SECONDARY - Alternative CTA (Teal Outline)
        secondary: [
          "border-2 border-forja-teal text-forja-teal bg-transparent",
          "hover:bg-forja-teal hover:text-white hover:shadow-lg hover:shadow-forja-teal/20",
          "active:bg-forja-teal/90 active:text-white",
          "focus-visible:ring-forja-teal focus-visible:ring-offset-2",
        ],
        // OUTLINE - Navy outline
        outline: [
          "border-2 border-forja-navy text-forja-navy bg-transparent",
          "hover:bg-forja-navy hover:text-white hover:shadow-md",
          "active:bg-forja-navy/90 active:text-white",
          "focus-visible:ring-forja-navy focus-visible:ring-offset-2",
        ],
        // GHOST - Subtle interaction
        ghost: [
          "text-forja-navy bg-transparent",
          "hover:bg-slate-100 hover:text-forja-navy",
          "active:bg-slate-200",
          "focus-visible:ring-slate-400 focus-visible:ring-offset-2",
        ],
        // DESTRUCTIVE - Danger actions
        destructive: [
          "bg-red-600 text-white shadow-lg shadow-red-600/25",
          "hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/30",
          "active:bg-red-800",
          "focus-visible:ring-red-600 focus-visible:ring-offset-2",
          "disabled:shadow-none",
        ],
        // LINK - Text link style
        link: [
          "text-forja-fire underline-offset-4",
          "hover:underline hover:text-forja-fire/80",
          "active:text-forja-fire/70",
          "focus-visible:ring-forja-fire focus-visible:ring-offset-2",
        ],
      },
      size: {
        // SM - Compact buttons
        sm: "h-9 px-4 py-2 text-sm rounded-lg",
        // MD - Default size
        md: "h-11 px-6 py-2.5 text-base rounded-xl",
        // LG - Prominent CTAs
        lg: "h-14 px-8 py-3 text-lg rounded-xl",
        // ICON - Square icon buttons
        icon: "h-11 w-11 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * Change the default rendered element for the one passed as a child,
   * merging their props and behavior.
   * 
   * @example
   * <Button asChild>
   *   <Link href="/about">About</Link>
   * </Button>
   */
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled}
        aria-disabled={disabled ? "true" : undefined}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
