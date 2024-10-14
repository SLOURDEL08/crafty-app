/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Assure-toi que ces fichiers sont inclus
  ],
  theme: {
    extend: {

      noScrollbar: {
        'scrollbar-width': 'none', /* Firefox */
        '&::-webkit-scrollbar': {
          display: 'none', /* Chrome, Safari */
        }
      }
    },
  },
  plugins: [],
}
