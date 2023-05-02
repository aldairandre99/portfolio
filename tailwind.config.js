/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors : {
      'purple': {
        950 : '#892CDC',
        900 : '#BC6FF1',
        800 : '#D9ACF5',
        700 : '#fdf6fd',
        500 : "#fff4ff"
      },
      'gray' : {
        300 : '#222831',
        200 : '#393E46',
        100 : '#454e59'
      },
      'slate' : {
        100 : '#EEEEEE',
        200 : '#FDEBED',
        300 : '#FC2831'
      }
    },
    fontFamily : {
      'poppins' : ['Poppins']
    }
  },
  plugins: [],
}
