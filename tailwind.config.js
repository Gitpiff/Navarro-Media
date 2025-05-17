/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'instrument-serif': ['Instrument Serif'],
        'instrument-sans': ['Instrument Sans'],
        'kantum': ['Kantumruy Pro']
      }
    },
  },
  plugins: [],
}

