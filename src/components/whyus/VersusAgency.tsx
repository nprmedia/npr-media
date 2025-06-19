'use client'

const agencyCardClass = 'card p-4 rounded-lg border border-yellow-400 text-yellow-300 bg-[var(--color-bg-dark)] shadow'
const nprCardClass = 'card p-4 rounded-lg bg-[var(--color-card)] text-white shadow'

export default function VersusAgency() {
  return (
    <section id="versusAgency" className="py-20 bg-[var(--color-bg-dark)] text-white flex flex-col items-center gap-10">
      <div id="agencyGrid" className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className={agencyCardClass}>Award-Winning</div>
        <div className={agencyCardClass}>Enterprise Ready</div>
        <div className={agencyCardClass}>Decades of Experience</div>
      </div>
      <div id="nprGrid" className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className={nprCardClass}>Founder-led Builds</div>
        <div className={nprCardClass}>&lt;1.2s Load Time</div>
        <div className={nprCardClass}>Full Code Ownership</div>
      </div>
      <div id="ctaForge" className="mt-6 rounded-full bg-primary px-6 py-2 font-bold text-black hover:brightness-110">Let’s Build Yours →</div>
    </section>
  )
}
