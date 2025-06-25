'use client';

export default function MissionSection() {
  return (
    <section className="bg-white px-[clamp(1rem,4vw,3rem)] py-[clamp(5rem,10vw,8rem)] text-black">
      <div className="mx-auto max-w-4xl space-y-6 text-center">
        <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">Our Mission</h2>
        <p className="text-[clamp(0.9rem,1.6vw,1.125rem)] text-gray-700">
          Empower founders with websites that convert and systems that scale.
        </p>
        <div className="mt-10 grid gap-8 text-left md:grid-cols-3">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Performance</h3>
            <p className="text-sm text-gray-600">Modern stacks for speed and reliability.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Partnership</h3>
            <p className="text-sm text-gray-600">Direct access to senior talent—no bloat.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Results</h3>
            <p className="text-sm text-gray-600">We measure success by growth and ROI.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
