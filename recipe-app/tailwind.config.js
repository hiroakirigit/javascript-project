/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode :false,
  theme: {
    extend: {},
  },
  content: ["./resources/views/**/*.{ejs,html}"],
  theme: {
    extend: {
      aspectRation : {
        '4/3' : '4 / 3'
      }
    },
  },
  plugins: [],
}
