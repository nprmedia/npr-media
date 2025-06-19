'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function VsAgencySection() {
  return (
    <section className="bg-[var(--color-bg-dark)] py-[clamp(5rem,10vw,8rem)] text-[var(--color-text-light)]">
      <div className="container mx-auto space-y-10 px-4">
        <h2 className="text-center text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight">
          NPR Media vs Other Firms
        </h2>
        <p className="text-center text-[clamp(0.9rem,1.6vw,1.125rem)]">
          Most agencies sell time. We sell outcomes.
        </p>

        <div className="overflow-hidden rounded-xl border border-[var(--color-gray-700)]">
          <motion.div drag="y" dragConstraints={{ top: -220, bottom: 0 }} className="space-y-8 p-6">
            <div className="grid gap-4 text-sm md:grid-cols-3">
              <div className="font-semibold">Others</div>
              <div className="font-semibold">NPR</div>
              <div className="font-semibold">Your Gain</div>
              <div>Opaque pricing</div>
              <div>Transparent packages</div>
              <div>Know costs upfront</div>
              <div>Junior talent</div>
              <div>Senior specialists</div>
              <div>Expert execution</div>
              <div>Pretty mockups only</div>
              <div>Strategic copy + full stack</div>
              <div>Messaging that converts</div>
              <div>Missed deadlines</div>
              <div>Reliable sprints</div>
              <div>Launch on time</div>
            </div>

            <div className="pt-6 text-sm">
              <div className="mb-2 font-semibold">Agency Bloat</div>
              <ul className="list-disc space-y-1 pl-5">
                <li>4-week discovery calls</li>
                <li>$2k for wireframes</li>
                <li>Slow handoffs</li>
                <li>No CRO or testing</li>
              </ul>
            </div>

            <div className="pt-6 text-sm">
              <div className="mb-2 font-semibold">NPR Delivery Stack</div>
              <ul className="list-disc space-y-1 pl-5">
                <li>Production-grade homepage</li>
                <li>9-section CMS site</li>
                <li>SOP-aligned builds</li>
                <li>Real-time revisions</li>
                <li>Vercel-level hosting</li>
              </ul>
            </div>

            <div className="pt-6 text-center text-sm italic">
              “94% of our clients switch from other firms—and never go back.”
            </div>
          </motion.div>
        </div>

        <div className="pt-8 text-center">
          <Link
            href="/about"
            className="inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow hover:scale-105"
          >
            This time, don’t settle.
          </Link>
        </div>
      </div>
    </section>
  );
}
