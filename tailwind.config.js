/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {
      spacing: {
        '10px': '10px',
      }
    },
  },
  plugins: [],
}
