'use client';

export default function AboutHero() {
  return (
    <section className="relative flex items-center justify-center bg-[var(--color-bg-dark)] px-[clamp(1rem,4vw,3rem)] py-[clamp(5rem,10vw,8rem)] text-[var(--color-text-light)]">
      <div className="mx-auto max-w-2xl space-y-4 text-center">
        <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold">About NPR Media</h1>
        <p className="text-[clamp(0.9rem,1.6vw,1.125rem)] text-gray-300">
          We craft high-performance websites and systems that fuel startup growth.
        </p>
      </div>
    </section>
  );
}
