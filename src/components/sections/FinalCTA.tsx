import { Routes } from '@/lib/routes';

export default function FinalCTA() {
  return (
    <section className="bg-muted px-6 py-20 text-center text-muted-foreground">
      <h2 className="mb-4 text-3xl font-bold md:text-4xl">Let’s build something legendary</h2>
      <p className="mx-auto mb-6 max-w-2xl text-lg">
        We craft websites that drive serious results. Book your strategy call today.
      </p>
      <a
        href={Routes.contact}
        data-event="cta-final"
        className="inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-muted-foreground transition hover:bg-primary/90"
      >
        Book Free Discovery Call
      </a>
      <p className="mt-4 text-sm text-muted-foreground">No pressure. Just clarity and next steps.</p>
    </section>
  );
}
