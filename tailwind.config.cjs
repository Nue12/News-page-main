/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#FFF',
      'offWhite': 'hsl(36, 100%, 99%)',
      'darkBlue': 'hsl(240, 100%, 5%)',
      'gray-600': 'rgb(156 163 175)',
      'text': {
        softRed: 'hsl(5, 85%, 63%)',
        grayishBlue: 'hsl(233, 8%, 79%);',
        darkGrayishBlue: 'hsl(236, 13%, 42%)',
        softOrange: 'hsl(35, 77%, 62%)',
      },
    }
  },
  plugins: [],
}
