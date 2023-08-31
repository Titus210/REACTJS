// tailwind.config.js

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },

      colors: {
        'primary-green': '#76B852',
        'secondary-green': '#002A22',
        'primary-blue': '#0070C9',
        'orange-yellow': '#FF7849',
        'white': '#F7F5F7',
        'black': '#000000',
        'orange': '#FF7849',
        'green': '#13CE66',
        'yellow': '#FFC82C',
        'gray-dark': '#214462',
        'grayish-blue': " #273444",
        'secondary-gray': ' #214461',
        'gray': '#8492A6',
        'gray-light': '#2B394A',
        'purple': '#7E5BEF',
      },

      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
      },
    },
  },

  plugins: [],
};
