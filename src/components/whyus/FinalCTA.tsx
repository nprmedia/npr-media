'use client'

export default function FinalCTA() {
  return (
    <section id="finalCTA" className="py-20 text-center bg-black text-white flex flex-col items-center gap-6">
      <div id="metrics" className="flex gap-8 text-3xl font-bold">
        <div className="metric">+38%</div>
        <div className="metric">100%</div>
        <div className="metric">1.2s</div>
      </div>
      <div id="logoScroll" className="flex overflow-x-hidden gap-8 whitespace-nowrap max-w-full px-4">
        <div className="logo">Client A</div>
        <div className="logo">Client B</div>
        <div className="logo">Client C</div>
      </div>
      <blockquote className="max-w-xl italic text-gray-300">Working with NPR Media was the first time …</blockquote>
      <button id="globalCTA" className="rounded-full bg-primary px-6 py-2 font-bold text-black hover:brightness-110">Start My Strategy Call →</button>
    </section>
  )
}
