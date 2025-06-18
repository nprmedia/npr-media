'use client'

import { motion } from 'framer-motion'

export default function Testimonial() {
  return (
    <motion.div
      className="mx-auto mb-20 max-w-md rounded-xl bg-gray-100 p-6 text-center shadow"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <p className="text-lg italic">&ldquo;Our conversions doubled after switching to NPR.&rdquo;</p>
      <p className="mt-2 text-sm font-semibold">— Alex, SaaS Founder</p>
    </motion.div>
  )
}
