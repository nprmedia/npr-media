export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-slate-100 text-center px-6">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          🚀 Welcome to NPR Media
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          You’ve successfully launched the app. Tailwind, TypeScript, routing, and layout are all working correctly.
        </p>
        <a
          href="#"
          className="inline-block bg-black text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-gray-800 transition"
        >
          Let’s Build Something
        </a>
      </div>
    </main>
  )
}
