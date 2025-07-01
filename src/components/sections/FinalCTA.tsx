import { Routes } from '@/lib/routes';

export default function FinalCTA() {
  return (
    <section className="bg-[var(--color-umber)] px-6 py-20 text-center text-[var(--color-silver)]">
      <h2 className="mb-4 text-3xl font-bold md:text-4xl">Let’s build something legendary</h2>
      <p className="mx-auto mb-6 max-w-2xl text-lg">
        We craft websites that drive serious results. Book your strategy call today.
      </p>
      <a
        href={Routes.contact}
        data-event="cta-final"
        className="inline-block rounded-lg bg-[var(--color-blood)] px-6 py-3 font-semibold text-[var(--color-silver)] transition hover:bg-[var(--color-crimson)]"
      >
        Book Free Discovery Call
      </a>
      <p className="mt-4 text-sm text-[var(--color-sepia)]">No pressure. Just clarity and next steps.</p>
    </section>
  );
}
