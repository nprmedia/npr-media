// src/app/layout.tsx

'use client';

import '@styles/globals.css';
import { useEffect } from 'react';
import type { ReactNode } from 'react';
import '@fontsource/gfs-didot/400.css';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/700.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.documentElement.style.overflowY = 'auto';
    document.body.style.overflowY = 'auto';
  }, []);

  return (
    <html lang="en" style={{ overflowY: 'hidden' }}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className="font-sans bg-antique text-charcoal antialiased"
        style={{ overflowY: 'hidden' }}
      >
        {children}
      </body>
    </html>
  );
}
