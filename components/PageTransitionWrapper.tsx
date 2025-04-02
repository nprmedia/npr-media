'use client'

import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function PageTransitionWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [renderKey, setRenderKey] = useState(pathname)

  useEffect(() => {
    setRenderKey(pathname)
  }, [pathname])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={renderKey}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
