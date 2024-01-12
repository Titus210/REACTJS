
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
        'primary': {
          'green': '#76B852',
          'blue': '#0070C9',
        },
        'secondary': {
          'green': '#002A22',
          'gray': '#214461',
        },
        'accent': {
          'orange': '#FF7849',
          'yellow': '#FFC82C',
        },
        'neutral': {
          'white': '#F7F5F7',
          'black': '#000000',
          'gray-dark': '#214462',
          'grayish-blue': '#273444',
          'gray-light': '#2B394A',
        },
        'special': {
          'purple': '#7E5BEF',
        },
      },

      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
      },
    },
  },

  plugins: [],
};
