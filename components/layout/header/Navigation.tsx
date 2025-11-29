'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { MegaMenuNosotros } from './MegaMenuNosotros'
// import { MegaMenuIndustrias } from './MegaMenuIndustrias' // TEMPORALMENTE OCULTO
import { MegaMenuServicios } from './MegaMenuServicios'
import { NAVIGATION_ITEMS } from '@/lib/constants/navigation'

interface NavigationProps {
  className?: string
}

export function Navigation({ className }: NavigationProps) {
  const pathname = usePathname()
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [leaveTimeout, setLeaveTimeout] = useState<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (itemId: string) => {
    if (leaveTimeout) {
      clearTimeout(leaveTimeout)
      setLeaveTimeout(null)
    }
    setActiveMenu(itemId)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveMenu(null)
    }, 200) // 200ms delay
    setLeaveTimeout(timeout)
  }

  return (
    <nav className={className}>
      <ul className="flex items-center gap-8">
        {NAVIGATION_ITEMS.map((item) => {
          const hasMegaMenu = item.megaMenu || item.megaMenuColumns
          
          return (
            <li
              key={item.id}
              className="relative"
            >
              {hasMegaMenu ? (
                <div
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 text-brand-navy hover:text-brand-orange transition-colors font-medium">
                    {item.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${
                      activeMenu === item.id ? 'rotate-180' : ''
                    }`} />
                  </button>
                  {activeMenu === item.id && (
                    <>
                      {item.id === 'nosotros' && (
                        <MegaMenuNosotros 
                          isOpen={true} 
                          onMouseEnter={() => handleMouseEnter(item.id)}
                          onMouseLeave={handleMouseLeave}
                        />
                      )}
                      {/* TEMPORALMENTE OCULTO - INDUSTRIAS */}
                      {/* {item.id === 'industrias' && (
                        <MegaMenuIndustrias 
                          isOpen={true}
                          onMouseEnter={() => handleMouseEnter(item.id)}
                          onMouseLeave={handleMouseLeave}
                        />
                      )} */}
                      {item.id === 'servicios' && (
                        <MegaMenuServicios 
                          isOpen={true}
                          onMouseEnter={() => handleMouseEnter(item.id)}
                          onMouseLeave={handleMouseLeave}
                        />
                      )}
                    </>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href || '#'}
                  className="text-brand-navy hover:text-brand-orange transition-colors font-medium"
                >
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

