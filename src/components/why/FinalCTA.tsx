import { motion } from 'framer-motion';

export default function FinalCTA() {
  const metrics = ['+38%', '100%', '1.2s'];
  return (
    <section id="finalCTA" className="bg-white py-20 text-black">
      <div className="container mx-auto space-y-10 px-4 text-center">
        <div id="metrics" className="flex justify-center gap-8">
          {metrics.map((m) => (
            <motion.div
              key={m}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="metric text-3xl font-bold"
            >
              {m}
            </motion.div>
          ))}
        </div>
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-lg italic"
        >
          Working with NPR Media was the first time …
        </motion.blockquote>
        <motion.button
          id="globalCTA"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto rounded-full bg-black px-8 py-3 text-sm font-semibold text-white shadow hover:scale-105"
        >
          Start My Strategy Call →
        </motion.button>
      </div>
    </section>
  );
}
