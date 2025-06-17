/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'neon-purple': '0 0 5px #a78bfa, 0 0 20px #a78bfa, 0 0 40px #a78bfa, 0 0 80px #a78bfa',
      },
      fontFamily: {
        'title': ['Boldonse', 'Specimen'],
        'body': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

