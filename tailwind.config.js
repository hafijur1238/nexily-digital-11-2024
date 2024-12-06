/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#61a5fa",
        'secondary': "#282828",
        'tartiary': '#F3F3F3'
      },
      fontFamily: {
        'primary': ["Exo 2", "sans-serif"]
      },
    },
  },
  plugins: [],
}

