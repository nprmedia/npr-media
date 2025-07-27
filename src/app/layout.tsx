// src/app/layout.tsx

'use client';

import '@styles/globals.css';
import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import '@fontsource/gfs-didot/400.css';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/fraunces/700.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  const [colorSweep, setColorSweep] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflowY = 'auto';
    document.body.style.overflowY = 'auto';

    const timer = setTimeout(() => setColorSweep(true), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" className={colorSweep ? 'grayscale color-sweep' : 'grayscale'}>
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
