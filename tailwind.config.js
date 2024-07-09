/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'nashville': ['Nashville Serial', 'sans-serif'],
    },boxShadow: {
      'custom': '1.5vh 1.5vh 0vh 0vh rgba(0, 0, 0, 0.25)',
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-custom': {
          'text-shadow': '-0.06em 0.06em 0 white, 0.06em 0.06em 0 white, 0.06em -0.06em 0 white, -0.06em -0.06em 0 white, 0.15em 0.12em 0px rgba(0, 0, 0, 0.25)',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}