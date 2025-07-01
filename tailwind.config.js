const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"EB Garamond"', '"Merriweather"', 'serif'],
        code: ['JetBrains Mono', 'monospace'],
      },

      colors: {
        antique: '#d7c7a5',
        sepia: '#b7a077',
        olive: '#786c4f',
        umber: '#3b3224',
        silver: '#d2d2d2',
        charcoal: '#2f2f2f',
        blood: '#b30000',
        crimson: '#7a0000',
      },

      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['18px', '28px'],
        xl: ['20px', '28px'],
        '2xl': ['24px', '32px'],
        '3xl': ['30px', '36px'],
        '4xl': ['36px', '44px'],
      },

      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
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

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
