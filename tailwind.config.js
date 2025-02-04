import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        poppins:["var(--font-poppins)"],
      },
      colors : {
        purple: {
          950 : '#892CDC',
          900 : '#BC6FF1',
          800 : '#D9ACF5',
          700 : '#fdf6fd',
          500 : "#fff4ff"
        },
        gray: {
          100 : '#e6e6e6',
          200 : '#454e59',
          300 : '#393E46',
          400 : '#222831',
        },
        slate: {
          100 : '#EEEEEE',
          200 : '#FDEBED',
          300 : '#FC2831',
        }
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes:{
      dark: {
        colors: {
          background: '#1d2126',
        },
      },
    },
  })],
}