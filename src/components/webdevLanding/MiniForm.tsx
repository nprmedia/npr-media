'use client'
import { motion } from 'framer-motion'
import Script from 'next/script'

export default function MiniForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mx-auto box-border w-full max-w-md"
    >
      <div data-tf-live="01JDBMAWY182BBSEK9R58DW9HV" />
      <Script src="//embed.typeform.com/next/embed.js" />
    </motion.div>
  )
}
