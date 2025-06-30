import { ROUTES } from '@/lib/routes';

export default function FinalCTA() {
  return (
    <section className="bg-neutral-950 px-6 py-20 text-center text-white">
      <h2 className="mb-4 text-3xl font-bold md:text-4xl">Let’s build something legendary</h2>
      <p className="mx-auto mb-6 max-w-2xl text-lg">
        We craft websites that drive serious results. Book your strategy call today.
      </p>
      <a
        href={ROUTES.contact}
        className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:bg-neutral-200"
      >
        Book Free Discovery Call
      </a>
      <p className="mt-4 text-sm text-neutral-400">No pressure. Just clarity and next steps.</p>
    </section>
  );
}
