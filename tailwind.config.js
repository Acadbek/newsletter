/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
      theme: {
    extend: {
      colors: {
        'primary-color': '#00bd7e',
      },
      fontFamily: {
        'RA': ['Randhani', 'sans-serif']
      },
    },
  },
  plugins: [],
}
