'use client'

import StickyHeader from '@/components/global/Header'
import FooterSection from '@/components/global/Footer'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Phone, Mail, Calendar } from 'lucide-react'

export default function ContactPage() {
  const [copy, setCopy] = useState({
    headline: 'Get in Touch',
    subtext: "Fill out the form and we'll get back within one business day."
  })

  useEffect(() => {
    import('@/content/contact')
      .then((mod) => {
        if (mod.contactCopy) setCopy(mod.contactCopy)
      })
      .catch(() => {})
  }, [])

  const [form, setForm] = useState({ name: '', email: '', summary: '' })
  const [errors, setErrors] = useState<{ name?: string; email?: string; summary?: string }>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const validate = () => {
    const errs: { name?: string; email?: string; summary?: string } = {}
    if (!form.name.trim()) errs.name = 'Full name is required.'
    if (!form.email.trim()) errs.email = 'Email is required.'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Enter a valid email.'
    if (!form.summary.trim()) errs.summary = 'Project summary is required.'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) {
        setSuccess(true)
        setForm({ name: '', email: '', summary: '' })
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section>
      <StickyHeader />
      <main className="relative overflow-hidden bg-white text-black min-h-screen flex items-center px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 -z-10 pointer-events-none"
        >
          <motion.div
            className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-pink-400/20 blur-3xl"
            animate={{ y: [0, -50, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        <div className="mx-auto w-full max-w-3xl space-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-center">{copy.headline}</h1>
            <p className="mt-2 text-center text-neutral-600 dark:text-neutral-400">{copy.subtext}</p>
          </motion.div>

          {!success ? (
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-xl bg-white/80 p-6 shadow-md backdrop-blur-md dark:bg-neutral-900/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-sm font-medium">
                Full Name
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-black dark:bg-neutral-800 dark:text-white focus-visible:outline focus-visible:outline-blue-500"
                />
              </label>
              {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}

              <label className="block text-sm font-medium">
                Work Email
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-black dark:bg-neutral-800 dark:text-white focus-visible:outline focus-visible:outline-blue-500"
                />
              </label>
              {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}

              <label className="block text-sm font-medium">
                Project Summary
                <textarea
                  rows={5}
                  value={form.summary}
                  onChange={(e) => setForm({ ...form, summary: e.target.value })}
                  className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-black dark:bg-neutral-800 dark:text-white focus-visible:outline focus-visible:outline-blue-500"
                />
              </label>
              {errors.summary && <p className="text-xs text-red-500">{errors.summary}</p>}

              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full rounded-xl bg-black py-3 px-6 text-white shadow-lg transition hover:scale-105 focus-visible:outline focus-visible:outline-blue-500"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              <p className="text-xs text-neutral-500 italic mt-2">We reply to every serious inquiry within 1 business day.</p>
            </motion.form>
          ) : (
            <motion.div
              className="rounded-xl bg-white/80 p-6 text-center shadow-md backdrop-blur-md dark:bg-neutral-900/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg font-semibold">Thank you! We&apos;ll be in touch soon.</p>
            </motion.div>
          )}

          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex flex-col items-center rounded-lg bg-neutral-100 p-4 shadow dark:bg-neutral-800">
              <Phone className="h-6 w-6 text-[var(--color-accent)]" />
              <p className="mt-2 text-sm">+1 (555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-neutral-100 p-4 shadow dark:bg-neutral-800">
              <Mail className="h-6 w-6 text-[var(--color-accent)]" />
              <p className="mt-2 text-sm">contact@npr-media.com</p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-neutral-100 p-4 shadow dark:bg-neutral-800">
              <Calendar className="h-6 w-6 text-[var(--color-accent)]" />
              <a
                href="https://calendly.com/your-link"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-sm underline-offset-4 hover:underline"
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        </div>
      </main>
      <FooterSection />
    </section>
  )
}
