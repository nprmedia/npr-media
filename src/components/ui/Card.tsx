'use client'
import { cn } from '@/lib/utils'
import React from 'react'

export default function Card({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn('rounded-xl border p-6 shadow-md', className)}>
      {children}
    </div>
  )
}
