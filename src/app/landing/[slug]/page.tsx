import { ROUTES } from '@/lib/routes';

export default function LandingPage({ params }: { params: { slug: string } }) {
  return (
    <main className="mx-auto max-w-3xl space-y-6 px-6 py-20 text-center">
      <h1 className="text-4xl font-bold">Landing: {params.slug}</h1>
      <p className="text-neutral-600">This is a placeholder landing page.</p>
      <a
        href={ROUTES.contact}
        className="inline-block rounded-xl bg-black px-6 py-3 text-white shadow-lg transition hover:scale-105"
      >
        Let’s Talk
      </a>
    </main>
  );
}
