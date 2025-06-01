const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            a: { textDecoration: 'none' },
            h1: { fontWeight: '700' },
          },
        },
      },
    },
  },
  safelist: [
    'text-2xl', 'text-3xl', 'text-4xl',
    'pt-10', 'pt-12', 'pt-16',
    'max-w-[800px]', 'w-full', 'object-contain'
  ],
  plugins: [require('@tailwindcss/typography')],
};