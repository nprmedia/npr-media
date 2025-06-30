import { routes } from '@/lib/routes'

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 space-y-6">
      <h1 className="text-3xl font-bold">Landing Page</h1>
      <p className="text-lg">This is a placeholder landing page.</p>
      <a
        href={routes.contact}
        className="inline-block rounded-lg bg-black px-6 py-3 text-white shadow transition hover:scale-105"
      >
        Contact Us
      </a>
    </main>
  )
}
