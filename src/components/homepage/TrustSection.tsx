'use client';

import Image from 'next/image'
import { trust } from '@/content/homepage/trust'
import { LucideIcon, Lock, ShieldCheck } from 'lucide-react'
import clsx from 'clsx'

const badgeIcons: Record<string, LucideIcon> = {
  Lock,
  ShieldCheck,
};

interface TrustSectionProps {
  variant?: 'light' | 'dark'
}

export default function TrustSection({ variant = 'dark' }: TrustSectionProps) {
  const isDark = variant === 'dark'

  return (
    <section
      id="trust"
      className={`${
        isDark
          ? 'bg-[var(--color-card)] text-[var(--color-text-light)]'
          : 'bg-white text-black'
      } border-t py-[clamp(5rem,10vw,8rem)] px-[clamp(1rem,4vw,3rem)]`}
    >
      <div className="mx-auto max-w-6xl space-y-12 text-center">
        <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">
          {trust.headline}
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-6 grayscale">
          {trust.clients.map((client) => (
            <Image
              key={client.name}
              src={client.src}
              alt={client.name}
              width={120}
              height={60}
              className="h-12 w-auto object-contain"
            />
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3 text-left">
          {trust.testimonials.map((t) => (
            <div
              key={t.name}
              className={clsx(
                'rounded-lg p-6 shadow-sm hover:shadow-md',
                isDark ? 'bg-[var(--color-bg-dark)] text-[var(--color-text-light)]' : 'bg-gray-100'
              )}
            >
              <p className="mb-4 text-sm font-medium">“{t.quote}”</p>
              <div className="flex items-center gap-3">
                <Image
                  src={t.logo}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover grayscale"
                />
                <div className="text-xs">
                  <div className={clsx('font-semibold', isDark ? 'text-[var(--color-text-light)]' : 'text-black')}>
                    {t.name}
                  </div>
                  <div className={isDark ? 'text-gray-400' : 'text-gray-500'}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold">
          {trust.badges.map((b) => {
            const Icon = badgeIcons[b.icon];
            return (
              <div key={b.label} className="flex items-center gap-2">
                {Icon && <Icon className="h-5 w-5" aria-hidden="true" />}
                <span>{b.label}</span>
              </div>
            );
          })}
        </div>

        <p className={clsx('text-xs', isDark ? 'text-gray-400' : 'text-gray-500')}>
          {trust.microcopy}
        </p>
      </div>
    </section>
  );
}
