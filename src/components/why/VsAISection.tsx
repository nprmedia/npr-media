import { motion } from 'framer-motion';

const cardCopy = {
  promise: [
    '“Launch in seconds.”',
    '“No code. No stress.”',
    '“Only $10/month.”',
  ],
  truth: ['“You don’t own it.”', '“Conversion ≤ 3%.”', '“No funnel logic.”'],
  counter: ['“Custom funnels.”', '“Built for B2B growth.”', '“You own and scale it.”'],
};

export default function VsAISection() {
  return (
    <section id="versusAI" className="relative bg-white py-20 text-black">
      <div className="container mx-auto max-w-4xl space-y-6 px-4 text-center">
        <div className="grid gap-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card rounded-xl border border-gray-300 p-6 shadow"
            id="ai-promise"
          >
            {cardCopy.promise.map((t) => (
              <p key={t} className="text-sm">
                {t}
              </p>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card rounded-xl border border-gray-300 p-6 shadow"
            id="ai-truth"
          >
            {cardCopy.truth.map((t) => (
              <p key={t} className="text-sm">
                {t}
              </p>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card rounded-xl border border-gray-300 p-6 shadow"
            id="npr-counter"
          >
            {cardCopy.counter.map((t) => (
              <p key={t} className="text-sm">
                {t}
              </p>
            ))}
          </motion.div>
        </div>
        <motion.button
          id="ctaAI"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow hover:scale-105"
        >
          Let’s Build for Real Growth →
        </motion.button>
      </div>
    </section>
  );
}
