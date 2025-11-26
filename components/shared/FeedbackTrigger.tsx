'use client'

import { usePathname } from 'next/navigation'
import { FloatingActionWidget } from './FloatingActionWidget'

export function FeedbackTrigger() {
  const pathname = usePathname()
  
  return <FloatingActionWidget pagePath={pathname} />
}
