'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, CalendarDays } from 'lucide-react'

interface Copy {
  headline: string
  subtext: string
}

export default function ContactPage() {
  const [copy, setCopy] = useState<Copy>({
    headline: "Let\u2019s Talk",
    subtext: 'Tell us about your project and goals.'
  })

  useEffect(() => {
    async function loadCopy() {
      try {
        // @ts-expect-error optional CMS module
        const mod = await import('@/content/contact')
        if (mod.contactCopy) {
          setCopy((prev) => ({
            headline: mod.contactCopy.headline || prev.headline,
            subtext: mod.contactCopy.subtext || prev.subtext,
          }))
        }
      } catch {
        // no CMS copy available
      }
    }
    loadCopy()
  }, [])

  const [values, setValues] = useState({ name: '', email: '', summary: '' })
  const [errors, setErrors] = useState<{ name?: string; email?: string; summary?: string }>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const validate = () => {
    const newErrors: { name?: string; email?: string; summary?: string } = {}
    if (!values.name.trim()) newErrors.name = 'Full name is required'
    if (!values.email.trim()) newErrors.email = 'Work email is required'
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) newErrors.email = 'Enter a valid email'
    if (!values.summary.trim()) newErrors.summary = 'Project summary is required'
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const v = validate()
    setErrors(v)
    if (Object.keys(v).length) return

    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        throw new Error('Request failed')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="flex min-h-screen items-center py-16 px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl mx-auto space-y-8"
      >
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold">{copy.headline}</h1>
          <p className="text-neutral-600 dark:text-neutral-400">{copy.subtext}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-2xl bg-white dark:bg-neutral-900 p-6 shadow-lg"
        >
          <motion.div
            className="pointer-events-none absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 opacity-20 blur-2xl"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          {status === 'success' ? (
            <p className="text-center text-green-600">Thanks for reaching out! We&apos;ll be in touch soon.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block text-sm font-medium">
                Full Name
                <input
                  type="text"
                  value={values.name}
                  onChange={(e) => setValues({ ...values, name: e.target.value })}
                  className="mt-1 w-full rounded-md border px-3 py-2 bg-white dark:bg-neutral-800 text-black dark:text-white focus-visible:outline focus-visible:outline-blue-500"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
              </label>
              {errors.name && (
                <p id="name-error" className="text-sm text-red-600">
                  {errors.name}
                </p>
              )}

              <label className="block text-sm font-medium">
                Work Email
                <input
                  type="email"
                  required
                  value={values.email}
                  onChange={(e) => setValues({ ...values, email: e.target.value })}
                  className="mt-1 w-full rounded-md border px-3 py-2 bg-white dark:bg-neutral-800 text-black dark:text-white focus-visible:outline focus-visible:outline-blue-500"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
              </label>
              {errors.email && (
                <p id="email-error" className="text-sm text-red-600">
                  {errors.email}
                </p>
              )}

              <label className="block text-sm font-medium">
                Project Summary
                <textarea
                  rows={5}
                  value={values.summary}
                  onChange={(e) => setValues({ ...values, summary: e.target.value })}
                  className="mt-1 w-full rounded-md border px-3 py-2 bg-white dark:bg-neutral-800 text-black dark:text-white focus-visible:outline focus-visible:outline-blue-500"
                  aria-invalid={!!errors.summary}
                  aria-describedby={errors.summary ? 'summary-error' : undefined}
                ></textarea>
              </label>
              {errors.summary && (
                <p id="summary-error" className="text-sm text-red-600">
                  {errors.summary}
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-black text-white py-3 px-6 rounded-xl shadow-lg hover:scale-105 transition disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                ) : (
                  'Send Message'
                )}
              </button>
              <p className="text-xs text-neutral-500 italic mt-2">
                We reply to every serious inquiry within 1 business day.
              </p>
            </form>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-4 md:grid-cols-3 pt-4"
        >
          <div className="flex flex-col items-center rounded-xl bg-white dark:bg-neutral-900 p-4 shadow">
            <Phone className="h-6 w-6 mb-2" />
            <p className="text-sm">+1 (555) 123-4567</p>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-white dark:bg-neutral-900 p-4 shadow">
            <Mail className="h-6 w-6 mb-2" />
            <p className="text-sm">contact@npr-media.com</p>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-white dark:bg-neutral-900 p-4 shadow">
            <CalendarDays className="h-6 w-6 mb-2" />
            <a
              href="https://calendly.com/example"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline"
            >
              Book a Call
            </a>
          </div>
        </motion.div>
      </motion.div>
    </main>
  )
}

