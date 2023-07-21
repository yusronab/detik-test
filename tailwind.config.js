/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://www.tanotofoundation.org/wp-content/uploads/2022/03/CP-Februari-1_20220127-1-1024x765.png')",
      }
    },
  },
  plugins: [],
}

