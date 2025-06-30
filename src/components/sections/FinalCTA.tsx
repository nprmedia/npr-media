import { routes } from '@/lib/routes'

export default function FinalCTA() {
  return (
    <section className="bg-neutral-950 text-white py-20 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s build something legendary</h2>
      <p className="text-lg mb-6 max-w-2xl mx-auto">
        We craft websites that drive serious results. Book your strategy call today.
      </p>
      <a href={routes.contact} className="inline-block bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-neutral-200 transition">
        Book Free Discovery Call
      </a>
      <p className="text-sm mt-4 text-neutral-400">No pressure. Just clarity and next steps.</p>
    </section>
  );
}
