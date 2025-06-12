'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';

export default function QuoteModal({
  triggerLabel = 'Request a Quote',
}: {
  triggerLabel?: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2 text-sm font-semibold text-black shadow hover:bg-gray-200">
          {triggerLabel}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 text-black shadow-lg">
          <Dialog.Title className="text-lg font-semibold">Tell us what you need</Dialog.Title>
          {submitted ? (
            <p className="mt-4 text-center text-sm">
              We&apos;ll respond within 24h with next steps.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <label className="block text-sm">
                Project Type
                <select className="mt-1 w-full rounded border px-2 py-1" required>
                  <option value="website">Website</option>
                  <option value="automation">Automation</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <label className="block text-sm">
                Budget Range
                <select className="mt-1 w-full rounded border px-2 py-1">
                  <option value="4-7k">$4K – $7K</option>
                  <option value="7-10k">$7K – $10K</option>
                  <option value="10k+">$10K+</option>
                </select>
              </label>
              <label className="block text-sm">
                Business Type / Industry
                <input className="mt-1 w-full rounded border px-2 py-1" required />
              </label>
              <label className="block text-sm">
                Desired Launch Timeline
                <select className="mt-1 w-full rounded border px-2 py-1">
                  <option value="asap">ASAP</option>
                  <option value="1month">1 Month</option>
                  <option value="3months">3 Months</option>
                </select>
              </label>
              <label className="block text-sm">
                Details
                <textarea
                  className="mt-1 w-full rounded border px-2 py-1"
                  rows={3}
                  required
                ></textarea>
              </label>
              <button type="submit" className="mt-2 w-full rounded bg-black px-4 py-2 text-white">
                Send Request
              </button>
              <p className="mt-2 text-center text-xs text-gray-600">
                Your submission is reviewed by our founder — not a sales bot.
              </p>
            </form>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
