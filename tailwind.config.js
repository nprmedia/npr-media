const defaultTheme = require('tailwindcss/defaultTheme');

function withOpacity(variable) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgb(var(${variable}) / ${opacityValue})`;
    }
    return `rgb(var(${variable}))`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      colors: {
        antique: withOpacity('--color-antique-rgb'),
        sepia: withOpacity('--color-sepia-rgb'),
        olive: withOpacity('--color-olive-rgb'),
        umber: withOpacity('--color-umber-rgb'),
        silver: withOpacity('--color-silver-rgb'),
        charcoal: withOpacity('--color-charcoal-rgb'),
        blood: withOpacity('--color-blood-rgb'),
        crimson: withOpacity('--color-crimson-rgb'),
        transparent: 'transparent',
        current: 'currentColor',
      },

      fontFamily: {
        didot: ['"GFS Didot"', 'serif'],
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        code: ['JetBrains Mono', 'monospace'],
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
    'max-w-[800px]', 'w-full', 'object-contain',
    // Ensure custom color utilities are always generated
    'bg-antique', 'text-antique',
    'bg-sepia', 'text-sepia',
    'bg-olive', 'text-olive',
    'bg-umber', 'text-umber',
    'bg-silver', 'text-silver',
    'bg-charcoal', 'text-charcoal',
    'bg-blood', 'text-blood',
    'bg-crimson', 'text-crimson'
  ],

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
