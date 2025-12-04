'use client'

import { useMemo, useState } from 'react'
import { ArrowUpDown, ArrowDown, ArrowUp, Inbox } from 'lucide-react'
import { cn } from '@/lib/utils'

export type ProTableColumn<T> = {
  key: keyof T & string
  header: string
  sortable?: boolean
  render?: (row: T) => React.ReactNode
  className?: string
}

type SortDirection = 'asc' | 'desc' | null

interface ProTableProps<T> {
  columns: ProTableColumn<T>[]
  data: T[]
  caption?: string
  emptyMessage?: string
  className?: string
  stickyHeader?: boolean
}

export function ProTable<T extends Record<string, any>>({
  columns,
  data,
  caption,
  emptyMessage = 'No hay información para mostrar todavía.',
  className,
  stickyHeader = true,
}: ProTableProps<T>) {
  const [sortKey, setSortKey] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<SortDirection>(null)

  const sortedData = useMemo(() => {
    if (!sortKey || !sortDirection) {
      return data
    }

    const sorted = [...data].sort((a, b) => {
      const aValue = a[sortKey]
      const bValue = b[sortKey]

      if (aValue == null) return 1
      if (bValue == null) return -1

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue
      }

      return sortDirection === 'asc'
        ? String(aValue).localeCompare(String(bValue), 'es')
        : String(bValue).localeCompare(String(aValue), 'es')
    })

    return sorted
  }, [data, sortDirection, sortKey])

  const handleSort = (column: ProTableColumn<T>) => {
    if (!column.sortable) return

    if (sortKey !== column.key) {
      setSortKey(column.key)
      setSortDirection('asc')
      return
    }

    setSortDirection((prev) => {
      if (prev === 'asc') return 'desc'
      if (prev === 'desc') {
        setSortKey(null)
        return null
      }
      return 'asc'
    })
  }

  if (!data || data.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/60 p-8 text-center text-slate-600">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow">
          <Inbox className="h-5 w-5 text-slate-400" />
        </div>
        <p className="font-semibold">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className={cn('overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm', className)}>
      <table
        role="grid"
        aria-rowcount={sortedData.length}
        aria-colcount={columns.length}
        className="w-full border-collapse"
      >
        {caption && (
          <caption className="sr-only">{caption}</caption>
        )}
        <thead className={cn('text-left text-sm text-slate-600', stickyHeader && 'sticky top-0 bg-white shadow-sm')}>
          <tr>
            {columns.map((column) => {
              const isActive = sortKey === column.key && sortDirection
              let ariaSort: 'ascending' | 'descending' | 'none' = 'none'
              if (isActive && sortDirection === 'asc') ariaSort = 'ascending'
              if (isActive && sortDirection === 'desc') ariaSort = 'descending'

              return (
                <th
                  key={column.key}
                  scope="col"
                  aria-sort={column.sortable ? ariaSort : undefined}
                  className={cn('px-4 py-3 font-semibold text-slate-900', column.className)}
                >
                  {column.sortable ? (
                    <button
                      type="button"
                      className="flex items-center gap-2 rounded-md px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forja-fire"
                      onClick={() => handleSort(column)}
                    >
                      <span>{column.header}</span>
                      {sortKey === column.key ? (
                        sortDirection === 'asc' ? (
                          <ArrowUp className="h-4 w-4" aria-hidden="true" />
                        ) : sortDirection === 'desc' ? (
                          <ArrowDown className="h-4 w-4" aria-hidden="true" />
                        ) : (
                          <ArrowUpDown className="h-4 w-4 text-slate-400" aria-hidden="true" />
                        )
                      ) : (
                        <ArrowUpDown className="h-4 w-4 text-slate-400" aria-hidden="true" />
                      )}
                    </button>
                  ) : (
                    column.header
                  )}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, rowIndex) => (
            <tr key={rowIndex} className="odd:bg-slate-50 focus-within:bg-slate-100" tabIndex={0}>
              {columns.map((column) => (
                <td key={column.key} className={cn('px-4 py-3 text-sm text-slate-700', column.className)}>
                  {column.render ? column.render(row) : String(row[column.key] ?? '—')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


