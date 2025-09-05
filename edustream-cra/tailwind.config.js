/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // we toggle dark mode with a `dark` class on <html>
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

