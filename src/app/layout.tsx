// src/app/layout.tsx

'use client';

import '@styles/globals.css';
import { useEffect } from 'react';
import type { ReactNode } from 'react';
import '@fontsource/gfs-didot/400.css';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/fraunces/600.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.documentElement.style.overflowY = 'auto';
    document.body.style.overflowY = 'auto';
    document.documentElement.classList.add('grayscale');
    const start = setTimeout(() => {
      document.documentElement.classList.add('grayscale-reveal');
    }, 2600);
    const end = setTimeout(() => {
      document.documentElement.classList.remove('grayscale', 'grayscale-reveal');
    }, 4200);
    return () => {
      clearTimeout(start);
      clearTimeout(end);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className="font-sans bg-antique text-charcoal antialiased overflow-x-hidden"
      >
        <a href="#main" className="skip-link">Skip to Content</a>
        <main id="main" className="w-full overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
