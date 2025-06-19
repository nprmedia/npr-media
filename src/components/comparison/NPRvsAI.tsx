import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NPRvsAI() {
  return (
    <section className="bg-[var(--color-bg-dark)] text-[var(--color-text-light)] py-[clamp(4rem,8vw,6rem)]">
      <div className="container mx-auto px-4 space-y-10">
        <h2 className="text-center text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">
          NPR Media vs AI
        </h2>
        <p className="mx-auto max-w-3xl text-center text-[clamp(0.9rem,1.6vw,1.125rem)] text-gray-300">
          AI doesn’t think. It predicts. We build from principle, not probability.
        </p>
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-2 font-semibold text-white">What AI can’t do</h3>
            <ul className="space-y-1 text-gray-300 text-[0.9rem]">
              <li>– No strategic prioritization</li>
              <li>– No creative foresight</li>
              <li>– No brand context</li>
              <li>– No performance ownership</li>
              <li>– No ethics or accountability</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-white">Our human edge</h3>
            <ul className="space-y-1 text-gray-300 text-[0.9rem]">
              <li>– Strategic tiering based on ROI</li>
              <li>– Behavioral conversion engineering</li>
              <li>– Custom UX psychology per vertical</li>
              <li>– Thought partner on growth</li>
              <li>– Senior-level oversight—not prompts</li>
            </ul>
          </div>
        </div>
        <div className="relative mx-auto mt-8 max-w-4xl overflow-hidden rounded-lg bg-black/50">
          <motion.div
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex items-center justify-center text-sm text-gray-400"
          >
            <div className="p-6">
              <p className="mb-2 font-semibold">AI generated</p>
              <p>&quot;10 tips for SEO&quot; ...</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative z-10 p-6 text-white"
          >
            <p className="mb-2 font-semibold">NPR built</p>
            <p className="text-sm">
              Clear positioning, prioritized sprints, and accountable metrics.
            </p>
          </motion.div>
        </div>
        <div className="text-center">
          <Link
            href="/pricing"
            className="inline-block rounded-full bg-[var(--color-accent)] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-dark)]"
          >
            See Real Results
          </Link>
        </div>
      </div>
    </section>
  )
}
