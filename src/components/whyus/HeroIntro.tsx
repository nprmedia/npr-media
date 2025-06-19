'use client'
import { useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useStarfield } from '@/lib/hooks/useStarfield'

export default function HeroIntro() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const prefersReducedMotion = useReducedMotion()
  useStarfield(canvasRef)

  const pulseVariants = {
    animate: { scale: [1, 1.6], opacity: [0.4, 0], transition: { duration: 6, repeat: Infinity } }
  }

  return (
    <section id="heroIntro" className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-center text-white bg-[var(--color-bg-dark)]">
      <div id="pillarAI" className="pillar left absolute left-0 bottom-0 top-0 w-1/5" />
      <div id="pillarAgency" className="pillar right absolute right-0 bottom-0 top-0 w-1/5" />
      <canvas id="starfield" ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div id="orbWrap" className="relative z-10 flex items-center justify-center h-40 w-40">
        <div id="orb3D" className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-cyan-300 to-teal-500 shadow-[0_0_40px_rgba(0,234,255,0.6)]" />
        {!prefersReducedMotion && (
          <motion.div id="orbPulse" variants={pulseVariants} animate="animate" className="absolute inset-0 rounded-full bg-[rgba(0,234,255,0.15)]" />
        )}
      </div>
      <h2 className="relative z-10 mt-8 text-2xl font-bold max-w-xl">Not All Websites Are Built to Grow Your Business.</h2>
      <p className="relative z-10 mt-2 max-w-md text-gray-300">Most are fast or flashy. Few are strategic. We build the difference.</p>
    </section>
  )
}
