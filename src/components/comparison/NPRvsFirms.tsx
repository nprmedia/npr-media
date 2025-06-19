import Link from 'next/link'

export default function NPRvsFirms() {
  const rows = [
    ['Pricing Transparency', 'Flat project rates', 'No surprises'],
    ['Senior Talent', 'Only experts', 'Direct access'],
    ['Strategic Copy', 'Handled in house', 'Messaging that converts'],
    ['Full Stack Dev', 'Next.js + CMS', 'Scale ready'],
    ['Animation + CMS', 'Built in', 'Engaging UX'],
    ['Deadline Reliability', 'Sprint based', 'On time launches'],
    ['Behavioral UX', 'Research driven', 'More signups'],
  ]
  return (
    <section className="border-t bg-white text-black py-[clamp(4rem,8vw,6rem)]">
      <div className="container mx-auto px-4 space-y-10">
        <h2 className="text-center text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">
          NPR Media vs Other Firms
        </h2>
        <p className="mx-auto max-w-3xl text-center text-[clamp(0.9rem,1.6vw,1.125rem)] text-gray-600">
          Most agencies sell time. We sell outcomes.
        </p>
        <div className="mx-auto max-w-5xl overflow-x-auto">
          <table className="w-full table-auto text-left text-sm">
            <thead>
              <tr className="border-b">
                <th className="px-3 py-2 font-semibold">What others offer</th>
                <th className="px-3 py-2 font-semibold">NPR Media</th>
                <th className="px-3 py-2 font-semibold">Your gain</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row[0]} className="border-b last:border-none">
                  <td className="px-3 py-2 text-gray-600">{row[0]}</td>
                  <td className="px-3 py-2 font-medium">{row[1]}</td>
                  <td className="px-3 py-2 text-gray-600">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mx-auto max-w-4xl space-y-2 text-sm text-gray-600">
          <p className="font-semibold">Agency bloat we skip:</p>
          <ul className="ml-4 list-disc space-y-1">
            <li>4-week discovery calls</li>
            <li>$2k for wireframes</li>
            <li>Slow handoffs</li>
            <li>No CRO or testing baked in</li>
          </ul>
        </div>
        <div className="mx-auto max-w-4xl space-y-2 text-sm">
          <p className="font-semibold">Our delivery stack:</p>
          <ul className="ml-4 list-disc space-y-1 text-gray-600">
            <li>Production-grade homepage</li>
            <li>9-section CMS site</li>
            <li>SOP-aligned builds</li>
            <li>Real-time revisions</li>
            <li>Vercel-level hosting</li>
          </ul>
        </div>
        <p className="mx-auto max-w-2xl text-center text-[clamp(0.9rem,1.2vw,1rem)] font-semibold">
          “94% of our clients switch from other firms—and never go back.”
        </p>
        <div className="text-center">
          <Link
            href="/pricing"
            className="inline-block rounded-full bg-[var(--color-accent)] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-dark)]"
          >
            View Our Process
          </Link>
        </div>
      </div>
    </section>
  )
}
