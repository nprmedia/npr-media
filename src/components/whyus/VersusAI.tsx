'use client'

const cardClass = 'card p-6 rounded-xl bg-[var(--color-card)] text-white shadow-lg text-center'

export default function VersusAI() {
  return (
    <section id="versusAI" className="relative py-20 flex flex-col items-center gap-8 bg-black text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={cardClass} id="ai-promise">
          <p>“Launch in seconds.”<br/>“No code. No stress.”<br/>“Only $10/month.”</p>
        </div>
        <div className={cardClass} id="ai-truth">
          <p>“You don’t own it.”<br/>“Conversion ≤ 3%.”<br/>“No funnel logic.”</p>
        </div>
        <div className={cardClass} id="npr-counter">
          <p>“Custom funnels.”<br/>“Built for B2B growth.”<br/>“You own and scale it.”</p>
        </div>
      </div>
      <button id="ctaAI" className="mt-6 rounded-full bg-primary px-6 py-2 font-bold text-black hover:brightness-110">Let’s Build for Real Growth →</button>
    </section>
  )
}
