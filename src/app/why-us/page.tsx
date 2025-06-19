'use client';

import React, { useRef } from 'react'
import StickyHeader from '@/components/global/Header'
import FooterSection from '@/components/global/Footer'
import { useStarfield } from '@/lib/hooks/useStarfield'

export default function WhyUsPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  useStarfield(canvasRef)
  return (
    <section>
      <StickyHeader />
      <main className="relative w-full overflow-x-hidden bg-[var(--color-bg-dark)] text-[var(--color-text-light)]">
        <section id="heroIntro" className="relative flex flex-col items-center justify-center text-center min-h-screen p-8">
          <div id="pillarAI" className="pillar absolute bottom-0 left-0 w-1/5 h-full bg-gradient-to-b from-[#001B33] via-[#003D5C] to-transparent" />
          <div id="pillarAgency" className="pillar absolute bottom-0 right-0 w-1/5 h-full bg-gradient-to-b from-[#001B33] via-[#003D5C] to-transparent" />
          <canvas id="starfield" ref={canvasRef} className="absolute inset-0" />
          <div id="orbWrap" className="relative z-10 flex items-center justify-center">
            <div id="orb3D" className="w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-xl" />
            <div id="orbPulse" className="absolute inset-0 rounded-full bg-cyan-400/40 animate-ping" />
          </div>
          <h2 className="mt-8 text-2xl font-bold">Not All Websites Are Built to Grow Your Business.</h2>
          <p className="mt-2 text-base">Most are fast or flashy. Few are strategic. We build the difference.</p>
        </section>

        <section id="versusAI" className="py-20 bg-white text-black text-center space-y-8">
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div id="ai-promise" className="card bg-gray-100 p-6 rounded-xl shadow w-72 space-y-1">
              <p>“Launch in seconds.”</p>
              <p>“No code. No stress.”</p>
              <p>“Only $10/month.”</p>
            </div>
            <div id="ai-truth" className="card bg-gray-100 p-6 rounded-xl shadow w-72 space-y-1">
              <p>“You don’t own it.”</p>
              <p>“Conversion ≤ 3%.”</p>
              <p>“No funnel logic.”</p>
            </div>
            <div id="npr-counter" className="card bg-gray-100 p-6 rounded-xl shadow w-72 space-y-1">
              <p>“Custom funnels.”</p>
              <p>“Built for B2B growth.”</p>
              <p>“You own and scale it.”</p>
            </div>
          </div>
          <button id="ctaAI" className="mt-8 px-6 py-3 bg-black text-white rounded-full">Let’s Build for Real Growth →</button>
        </section>

        <section id="versusAgency" className="py-20 text-center space-y-8">
          <div id="agencyGrid" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card border-2 border-yellow-400 p-4 rounded-lg">Award-Winning</div>
            <div className="card border-2 border-yellow-400 p-4 rounded-lg">Enterprise Ready</div>
            <div className="card border-2 border-yellow-400 p-4 rounded-lg">Decades of Experience</div>
          </div>
          <div id="nprGrid" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card bg-gray-100 text-black p-4 rounded-lg">Conversion-First Layouts</div>
            <div className="card bg-gray-100 text-black p-4 rounded-lg">&lt;1.2s Load Time</div>
            <div className="card bg-gray-100 text-black p-4 rounded-lg">Full Code Ownership</div>
          </div>
          <div id="ctaForge" className="mt-8 inline-block px-6 py-3 bg-primary text-white rounded-full">Let’s Build Yours →</div>
        </section>

        <section id="finalCTA" className="py-20 bg-gray-100 text-black text-center space-y-8">
          <div id="metrics" className="flex justify-center gap-8">
            <div className="metric text-3xl font-bold">+38%</div>
            <div className="metric text-3xl font-bold">100%</div>
            <div className="metric text-3xl font-bold">1.2s</div>
          </div>
          <blockquote className="max-w-xl mx-auto">Working with NPR Media was the first time …</blockquote>
          <button id="globalCTA" className="px-6 py-3 bg-black text-white rounded-full">Start My Strategy Call →</button>
        </section>
      </main>
      <FooterSection />
    </section>
  )
}
