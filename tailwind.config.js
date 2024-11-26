/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#61A5FA",
        'secondary': "#191A23",
        'tartiary': '#F3F3F3'
      },
      fontFamily: {
        'primary': ["Rubik", "sans - serif"]
      },
    },
  },
  plugins: [],
}

