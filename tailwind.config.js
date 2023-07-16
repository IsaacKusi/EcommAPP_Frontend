/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '3rem',
        maxWidth: '800px',
      },
    },
  },
  plugins: [],
}

