/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
        space_grotesk: ['var(--font-space_grotesk)', ...fontFamily.sans],
      },
      colors: {
        primary: {
          // Customize it on globals.css :root
          50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
        },
        dark: '#222222',
        button: {
          violet: 'hsl(278, 68%, 11%)',
          dark_violet: 'hsl(279, 6%, 55%)',
        },
        coil: {
          // Customize it on globals.css :root
          50: 'rgb(var(--tw-color-coil-50) / <alpha-value>)',
          100: 'rgb(var(--tw-color-coil-100) / <alpha-value>)',
          200: 'rgb(var(--tw-color-coil-200) / <alpha-value>)',
          300: 'rgb(var(--tw-color-coil-300) / <alpha-value>)',
          400: 'rgb(var(--tw-color-coil-400) / <alpha-value>)',
          500: 'rgb(var(--tw-color-coil-500) / <alpha-value>)',
          600: 'rgb(var(--tw-color-coil-600) / <alpha-value>)',
          700: 'rgb(var(--tw-color-coil-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-coil-800) / <alpha-value>)',
          900: 'rgb(var(--tw-color-coil-900) / <alpha-value>)',
        },
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
      backgroundImage: {
        'left-pane': "url('/assets/images/bg-main-desktop.png')",
        'card-front': "url('/assets/images/bg-card-front.png')",
        'card-back': "url('/assets/images/bg-card-back.png')",
        'icon-complete': "url('/assets/images/icon-complete.svg')",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
