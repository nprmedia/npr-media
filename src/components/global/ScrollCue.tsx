'use client'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface ScrollCueProps {
  href: string
  className?: string
}

export default function ScrollCue({ href, className }: ScrollCueProps) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: -5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      animate={{ y: [0, 6, 0] }}
      transition={{ duration: 1.2, repeat: Infinity }}
      className={`block ${className}`}
    >
      <ChevronDown className="h-10 w-10" />
    </motion.a>
  )
}
