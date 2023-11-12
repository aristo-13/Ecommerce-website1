/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        DarkBlue: '#0B2447',
        LightBlue: '#19376D',
        customGreen: '#2ecc71',
      },
    },
  },
  plugins: [],
}

