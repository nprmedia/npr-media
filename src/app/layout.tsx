// src/app/layout.tsx

import '@styles/globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
