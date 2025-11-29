import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * StatBadge Component - FORJA Design System
 * 
 * Displays a small status or statistic badge with semantic colors
 * 
 * Variants:
 * - default: Neutral gray
 * - success: Green (positive metrics)
 * - warning: Amber (caution metrics)
 * - danger: Red (negative metrics)
 * - info: Blue (informational)
 * - primary: FORJA Fire (brand highlight)
 * 
 * @example
 * <StatBadge variant="success">+12%</StatBadge>
 * <StatBadge variant="warning">Pending</StatBadge>
 */

const statBadgeVariants = cva(
  [
    "inline-flex items-center gap-1.5 rounded-full px-3 py-1",
    "text-xs font-semibold font-heading",
    "transition-colors duration-200",
    "border",
  ],
  {
    variants: {
      variant: {
        // Default - Neutral
        default: [
          "bg-slate-100 text-slate-700 border-slate-200",
          "hover:bg-slate-200",
        ],
        // Success - Positive metrics
        success: [
          "bg-green-100 text-green-700 border-green-200",
          "hover:bg-green-200",
        ],
        // Warning - Caution metrics
        warning: [
          "bg-amber-100 text-amber-700 border-amber-200",
          "hover:bg-amber-200",
        ],
        // Danger - Negative metrics
        danger: [
          "bg-red-100 text-red-700 border-red-200",
          "hover:bg-red-200",
        ],
        // Info - Informational
        info: [
          "bg-blue-100 text-blue-700 border-blue-200",
          "hover:bg-blue-200",
        ],
        // Primary - FORJA brand
        primary: [
          "bg-forja-fire/10 text-forja-fire border-forja-fire/20",
          "hover:bg-forja-fire/20",
        ],
        // Secondary - FORJA teal
        secondary: [
          "bg-forja-teal/10 text-forja-teal border-forja-teal/20",
          "hover:bg-forja-teal/20",
        ],
      },
      size: {
        sm: "px-2 py-0.5 text-[10px]",
        md: "px-3 py-1 text-xs",
        lg: "px-4 py-1.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

export interface StatBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof statBadgeVariants> {
  /**
   * Optional icon to display before the text
   */
  icon?: React.ReactNode
  
  /**
   * Optional dot indicator
   */
  dot?: boolean
}

const StatBadge = React.forwardRef<HTMLSpanElement, StatBadgeProps>(
  ({ className, variant, size, icon, dot, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(statBadgeVariants({ variant, size }), className)}
        {...props}
      >
        {dot && (
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              variant === "success" && "bg-green-600",
              variant === "warning" && "bg-amber-600",
              variant === "danger" && "bg-red-600",
              variant === "info" && "bg-blue-600",
              variant === "primary" && "bg-forja-fire",
              variant === "secondary" && "bg-forja-teal",
              variant === "default" && "bg-slate-600"
            )}
          />
        )}
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </span>
    )
  }
)

StatBadge.displayName = "StatBadge"

export { StatBadge, statBadgeVariants }

