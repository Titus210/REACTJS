/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'primary-green': '##76B852',
        'primary-blue': '#0070C9',
        'orange-yellow': '##FFA500',
        'white': '#FFFFFF',
        'black': '#000000',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'purple': '#7e5bef',
      },
    },
    fontFamily: {
      sans: ['Source Sans Pro', 'sans-serif'],
    },
  },
  plugins: [],
}