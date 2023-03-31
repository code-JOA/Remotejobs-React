/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bluecolor' : "#2a68ff",
        'greyish' : '#'
      }
    },
  },
  plugins: [],
}



