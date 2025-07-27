const defaultTheme = require('tailwindcss/defaultTheme');


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      colors: {
        offwhite: 'rgb(var(--color-offwhite-rgb) / <alpha-value>)',
        antique: 'rgb(var(--color-antique-rgb) / <alpha-value>)',
        sepia: 'rgb(var(--color-sepia-rgb) / <alpha-value>)',
        olive: 'rgb(var(--color-olive-rgb) / <alpha-value>)',
        umber: 'rgb(var(--color-umber-rgb) / <alpha-value>)',
        silver: 'rgb(var(--color-silver-rgb) / <alpha-value>)',
        charcoal: 'rgb(var(--color-charcoal-rgb) / <alpha-value>)',
        blood: 'rgb(var(--color-blood-rgb) / <alpha-value>)',
        crimson: 'rgb(var(--color-crimson-rgb) / <alpha-value>)',
        ivory: 'rgb(var(--color-ivory-rgb) / <alpha-value>)',
        'gold-muted': 'rgb(var(--color-gold-muted-rgb) / <alpha-value>)',
        'muted-text': 'rgb(var(--color-muted-text-rgb) / <alpha-value>)',
        'border-gray': 'rgb(var(--color-border-gray-rgb) / <alpha-value>)',
        transparent: 'transparent',
        current: 'currentColor',
      },

      fontFamily: {
        didot: ['"GFS Didot"', 'serif'],
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        code: ['JetBrains Mono', 'monospace'],
        fraunces: ['"Fraunces"', 'serif'],
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

      clipPath: {
        'reveal-hidden': 'polygon(0 100%, 100% 0, 100% 0, 0 100%)',
        'reveal-full': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
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
    'max-w-[800px]', 'w-full', 'object-contain',
    // Ensure custom color utilities are always generated
    'bg-offwhite', 'text-offwhite',
    'bg-antique', 'text-antique',
    'bg-sepia', 'text-sepia',
    'bg-olive', 'text-olive',
    'bg-umber', 'text-umber',
    'bg-silver', 'text-silver',
    'bg-charcoal', 'text-charcoal',
    'bg-blood', 'text-blood',
    'bg-crimson', 'text-crimson',
    'bg-ivory', 'text-ivory',
    'text-gold-muted',
    'bg-border-gray', 'text-border-gray', 'border-border-gray',
    'text-muted-text',
    // Gradient utilities for custom colors
    'from-blood', 'via-blood', 'to-blood',
    'from-olive', 'via-olive', 'to-olive',
    'from-antique', 'via-antique', 'to-antique',
    'from-silver/20', 'from-blood/10', 'from-blood/25',
    // Opacity variants used in the project
    'bg-blood/20', 'bg-blood/30', 'ring-blood/40', 'ring-blood/50',
    'bg-olive/20', 'bg-olive/60', 'bg-olive/70', 'bg-olive/80',
    'bg-silver/5', 'bg-silver/10', 'bg-silver/30', 'ring-silver/10', 'ring-silver/20', 'shadow-silver/20', 'shadow-silver/40',
  ],

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
