import * as React from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

/**
 * KpiCard Component - FORJA Design System
 * 
 * Displays a Key Performance Indicator with:
 * - Title (label)
 * - Value (main metric)
 * - Description (optional context)
 * - Icon (optional)
 * - Trend indicator (optional)
 * 
 * @example
 * <KpiCard
 *   title="Total Revenue"
 *   value="$1.2M"
 *   description="+12% from last month"
 *   trend="up"
 * />
 */

export interface KpiCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Label for the KPI (e.g., "Total Revenue", "Active Users")
   */
  title: string
  
  /**
   * Main value to display (e.g., "$1.2M", "1,234", "98%")
   */
  value: string | number
  
  /**
   * Optional description or context (e.g., "+12% from last month")
   */
  description?: string
  
  /**
   * Optional icon to display
   */
  icon?: LucideIcon
  
  /**
   * Trend direction for visual indicator
   */
  trend?: "up" | "down" | "neutral"
  
  /**
   * Color variant for the card
   */
  variant?: "default" | "primary" | "success" | "warning" | "danger"
}

const variantStyles = {
  default: {
    card: "border-slate-200",
    icon: "text-slate-600 bg-slate-100",
    value: "text-forja-navy",
    trend: {
      up: "text-green-600",
      down: "text-red-600",
      neutral: "text-slate-600",
    },
  },
  primary: {
    card: "border-forja-fire/20 bg-forja-fire/5",
    icon: "text-forja-fire bg-forja-fire/10",
    value: "text-forja-fire",
    trend: {
      up: "text-green-600",
      down: "text-red-600",
      neutral: "text-forja-fire/70",
    },
  },
  success: {
    card: "border-green-200 bg-green-50/50",
    icon: "text-green-600 bg-green-100",
    value: "text-green-700",
    trend: {
      up: "text-green-600",
      down: "text-red-600",
      neutral: "text-green-600/70",
    },
  },
  warning: {
    card: "border-amber-200 bg-amber-50/50",
    icon: "text-amber-600 bg-amber-100",
    value: "text-amber-700",
    trend: {
      up: "text-green-600",
      down: "text-red-600",
      neutral: "text-amber-600/70",
    },
  },
  danger: {
    card: "border-red-200 bg-red-50/50",
    icon: "text-red-600 bg-red-100",
    value: "text-red-700",
    trend: {
      up: "text-green-600",
      down: "text-red-600",
      neutral: "text-red-600/70",
    },
  },
}

const KpiCard = React.forwardRef<HTMLDivElement, KpiCardProps>(
  (
    {
      title,
      value,
      description,
      icon: Icon,
      trend,
      variant = "default",
      className,
      ...props
    },
    ref
  ) => {
    const styles = variantStyles[variant]
    const trendIcon = trend
      ? trend === "up"
        ? "↑"
        : trend === "down"
        ? "↓"
        : "→"
      : null

    return (
      <Card
        ref={ref}
        className={cn(styles.card, className)}
        {...props}
      >
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-600">{title}</p>
            {Icon && (
              <div className={cn("rounded-lg p-2", styles.icon)}>
                <Icon className="h-4 w-4" />
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            <p
              className={cn(
                "text-3xl font-bold font-heading tracking-tight",
                styles.value
              )}
            >
              {value}
            </p>
            {description && (
              <div className="flex items-center gap-1">
                {trendIcon && (
                  <span
                    className={cn(
                      "text-sm font-semibold",
                      trend ? styles.trend[trend] : ""
                    )}
                  >
                    {trendIcon}
                  </span>
                )}
                <p className="text-sm text-slate-600">{description}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    )
  }
)

KpiCard.displayName = "KpiCard"

export { KpiCard }

