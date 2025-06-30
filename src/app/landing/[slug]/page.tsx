import { routes } from '@/lib/routes'
import Link from 'next/link'

export default function LandingPage({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center space-y-4 px-6 py-20">
      <h1 className="text-3xl font-bold">Landing: {params.slug}</h1>
      <p className="text-center max-w-xl">This is a placeholder landing page.</p>
      <Link href={routes.contact} className="inline-block bg-black text-white py-3 px-6 rounded-xl shadow hover:scale-105 transition">
        Contact Us
      </Link>
    </main>
  )
}
