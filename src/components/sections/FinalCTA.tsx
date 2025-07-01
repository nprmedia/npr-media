import { Routes } from '@/lib/routes';

export default function FinalCTA() {
  return (
    <section className="bg-umber px-6 py-20 text-center text-[var(--color-text-light)]">
      <h2 className="mb-4 text-3xl font-bold md:text-4xl">Let’s build something legendary</h2>
      <p className="mx-auto mb-6 max-w-2xl text-lg">
        We craft websites that drive serious results. Book your strategy call today.
      </p>
      <a
        href={Routes.contact}
        data-event="cta-final"
        className="inline-block rounded-lg bg-[var(--color-blood)] px-6 py-3 font-semibold text-[var(--color-text-light)] transition hover:bg-[var(--color-crimson)]"
      >
        Book Free Discovery Call
      </a>
      <p className="mt-4 text-sm text-[var(--color-silver)]">No pressure. Just clarity and next steps.</p>
    </section>
  );
}
