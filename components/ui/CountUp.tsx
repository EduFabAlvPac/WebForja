'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface CountUpProps {
  end: number
  suffix?: string
  duration?: number
  className?: string
  label: string
  labelClassName?: string
}

export function CountUp({
  end,
  suffix = '',
  duration = 1500,
  className = '',
  label,
  labelClassName = '',
}: CountUpProps) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!inView || hasAnimated.current) return
    hasAnimated.current = true
    const start = performance.now()
    const step = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const easeOutQuart = 1 - (1 - progress) ** 4
      setValue(Math.round(easeOutQuart * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, end, duration])

  return (
    <div className="text-center">
      <span ref={ref} className={`block text-2xl md:text-3xl font-extrabold ${className}`}>
        {value}
        {suffix}
      </span>
      <span className={`text-sm md:text-base block mt-0.5 ${labelClassName}`}>{label}</span>
    </div>
  )
}
