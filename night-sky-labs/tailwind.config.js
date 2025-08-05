/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Poppins', ...defaultTheme.fontFamily.sans],
        body: ['"DM Sans"', ...defaultTheme.fontFamily.sans],
        ui: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: "#000000",
        white: "#ffffff",
      },
      fontSize: {
        'hero': ['5rem', { lineHeight: '0.9' }],
        'hero-lg': ['8rem', { lineHeight: '0.9' }],
      },
      letterSpacing: {
        'tightest': '-0.075em',
      }
    },
  },
  plugins: [],
}