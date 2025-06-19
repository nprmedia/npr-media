'use client';

import StickyHeader from '@/components/global/Header';
import FooterSection from '@/components/global/Footer';
import React from 'react';
import { motion } from 'framer-motion';

export default function WhyUsPage() {

  const heroVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section>
      <StickyHeader />
      <main className="relative w-full overflow-x-hidden bg-white text-black">
        <section
          id="heroIntro"
          className="relative flex min-h-screen flex-col items-center justify-center gap-4 overflow-hidden bg-[var(--color-bg-dark)] text-[var(--color-text-light)]"
        >
          <div id="pillarAI" className="pillar left absolute left-0 top-0 h-full w-1/5 bg-gradient-to-b from-[#001B33] via-[#003D5C] to-transparent" />
          <div id="pillarAgency" className="pillar right absolute right-0 top-0 h-full w-1/5 bg-gradient-to-b from-[#001B33] via-[#003D5C] to-transparent" />
          <canvas id="starfield" className="absolute inset-0 -z-10" />
          <div id="orbWrap" className="relative flex items-center justify-center">
            <motion.div
              id="orb3D"
              initial="hidden"
              animate="visible"
              variants={heroVariants}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-40 w-40 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 shadow-[0_0_20px_rgba(0,234,255,0.4)]"
            />
            <div id="orbPulse" className="absolute h-40 w-40 rounded-full" />
          </div>
          <motion.h2
            className="mt-8 text-center text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Not All Websites Are Built to Grow Your Business.
          </motion.h2>
          <motion.p
            className="text-center text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Most are fast or flashy. Few are strategic. We build the difference.
          </motion.p>
        </section>

        <section id="versusAI" className="container mx-auto max-w-4xl space-y-6 py-20 px-4">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card rounded-lg border bg-gray-100 p-4 shadow" id="ai-promise">
              <p>“Launch in seconds.”</p>
              <p>“No code. No stress.”</p>
              <p>“Only $10/month.”</p>
            </div>
            <div className="card rounded-lg border bg-gray-100 p-4 shadow" id="ai-truth">
              <p>“You don’t own it.”</p>
              <p>“Conversion ≤ 3%.”</p>
              <p>“No funnel logic.”</p>
            </div>
            <div className="card rounded-lg border bg-gray-100 p-4 shadow" id="npr-counter">
              <p>“Custom funnels.”</p>
              <p>“Built for B2B growth.”</p>
              <p>“You own and scale it.”</p>
            </div>
          </div>
          <div id="forgeGrid" className="mt-10 grid grid-cols-3 gap-4" />
          <button id="ctaAI" className="mx-auto block rounded-full bg-primary px-6 py-3 font-semibold text-white">
            Let’s Build for Real Growth →
          </button>
        </section>

        <section id="versusAgency" className="bg-[var(--color-bg-dark)] py-20 text-[var(--color-text-light)]">
          <div id="agencyGrid" className="container mx-auto grid max-w-4xl grid-cols-3 gap-4 px-4">
            <div className="card rounded-lg border border-yellow-300 p-4 shadow">Award-Winning</div>
            <div className="card rounded-lg border border-yellow-300 p-4 shadow">Enterprise Ready</div>
            <div className="card rounded-lg border border-yellow-300 p-4 shadow">Decades of Experience</div>
          </div>
          <div id="fractureLines" className="mx-auto my-10 h-20 max-w-4xl border-t border-dashed border-gray-500" />
          <canvas id="rubbleCanvas" className="mx-auto block h-40 w-full max-w-4xl" />
          <div id="nprGrid" className="container mx-auto mt-10 grid max-w-4xl grid-cols-3 gap-4 px-4 text-center">
            <div className="card rounded-lg bg-gray-800 p-4 shadow">Founder-led Builds</div>
            <div className="card rounded-lg bg-gray-800 p-4 shadow">&lt;1.2s Load Time</div>
            <div className="card rounded-lg bg-gray-800 p-4 shadow">Full Code Ownership</div>
          </div>
          <div id="ctaForge" className="mx-auto mt-8 w-max rounded-full bg-primary px-6 py-3 font-semibold text-black">
            Let’s Build Yours →
          </div>
        </section>

        <section id="finalCTA" className="container mx-auto max-w-4xl space-y-6 py-20 px-4 text-center">
          <div id="metrics" className="flex justify-center gap-6 text-3xl font-bold">
            <div className="metric">+38%</div>
            <div className="metric">100%</div>
            <div className="metric">1.2s</div>
          </div>
          <div id="logoScroll" className="flex overflow-x-auto gap-4 py-4">
            <div className="logo min-w-max">Client A</div>
            <div className="logo min-w-max">Client B</div>
            <div className="logo min-w-max">Client C</div>
          </div>
          <blockquote className="mx-auto max-w-2xl text-lg italic">
            Working with NPR Media was the first time …
          </blockquote>
          <button id="globalCTA" className="rounded-full bg-black px-6 py-3 font-semibold text-white">
            Start My Strategy Call →
          </button>
        </section>
      </main>
      <FooterSection />
    </section>
  );
}
