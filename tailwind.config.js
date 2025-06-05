/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}", // Add your file extensions here
  ],
  theme: {
    extend: {
      colors: {
        'custom-beige': '#FCFBF4',
        'custom-orange': '#f0b14c',
      },
    },
  },
  plugins: [],
}