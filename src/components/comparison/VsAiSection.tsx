'use client';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';

export default function VsAiSection() {
  const aiControls = useAnimation();
  const nprControls = useAnimation();

  useEffect(() => {
    aiControls.start({
      filter: 'grayscale(1) blur(2px)',
      opacity: 0.5,
      transition: { delay: 3, duration: 1 },
    });
    nprControls.start({ opacity: [0, 1], scale: [0.95, 1], transition: { delay: 3, duration: 1 } });
  }, [aiControls, nprControls]);

  return (
    <section className="border-b bg-white py-[clamp(5rem,10vw,8rem)] text-black">
      <div className="container mx-auto space-y-10 px-4">
        <h2 className="text-center text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight">
          NPR Media vs AI
        </h2>
        <p className="text-center text-[clamp(0.9rem,1.6vw,1.125rem)]">
          AI doesn’t think. It predicts. We build from principle, not probability.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 1, filter: 'grayscale(0) blur(0px)' }}
            animate={aiControls}
            className="space-y-4 rounded-xl border p-6"
          >
            <div className="font-semibold">AI Limitations</div>
            <ul className="list-disc space-y-1 pl-5 text-sm">
              <li>No strategic prioritization</li>
              <li>No creative foresight</li>
              <li>No brand context</li>
              <li>No performance ownership</li>
              <li>No ethics or accountability</li>
            </ul>
            <div className="mt-4 text-sm italic text-gray-500">
              &quot;10 tips for SEO&quot; … and pages of generic fluff
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={nprControls}
            className="space-y-4 rounded-xl border bg-[var(--color-bg-dark)] p-6 text-[var(--color-text-light)]"
          >
            <div className="font-semibold">Human Edge</div>
            <ul className="list-disc space-y-1 pl-5 text-sm">
              <li>Strategic tiering based on ROI</li>
              <li>Behavioral conversion engineering</li>
              <li>Custom UX psychology per vertical</li>
              <li>Thought partner on growth</li>
              <li>Senior-level oversight—not prompts</li>
            </ul>
            <div className="mt-4 text-sm text-gray-400 italic">
              “X wouldn’t exist if we used AI.”
            </div>
          </motion.div>
        </div>

        <div className="pt-8 text-center">
          <Link
            href="/pricing"
            className="inline-block rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white shadow hover:scale-105"
          >
            Don’t get AI’d. Get outcomes.
          </Link>
        </div>
      </div>
    </section>
  );
}
