import { motion } from 'framer-motion';

const agency = ['“Pixel-Perfect Design”', '“Enterprise Ready”', '“Decades of Experience”'];
const npr = ['“Founder-led Builds”', '“<1.2s Load Time”', '“Full Code Ownership”'];

export default function VsAgencySection() {
  return (
    <section id="versusAgency" className="bg-[var(--color-bg-dark)] py-20 text-white">
      <div className="container mx-auto max-w-5xl space-y-8 px-4">
        <div id="agencyGrid" className="grid gap-6 md:grid-cols-3">
          {agency.map((t) => (
            <div key={t} className="card rounded-xl border-2 border-yellow-500 p-6 shadow">
              {t}
            </div>
          ))}
        </div>
        <div id="nprGrid" className="grid gap-6 md:grid-cols-3">
          {npr.map((t) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card rounded-xl border border-gray-700 bg-[var(--color-card)] p-6 shadow"
            >
              {t}
            </motion.div>
          ))}
        </div>
        <motion.div
          id="ctaForge"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto w-max rounded-full bg-primary px-8 py-3 text-sm font-semibold text-black shadow hover:scale-105"
        >
          Let’s Build Yours →
        </motion.div>
      </div>
    </section>
  );
}
