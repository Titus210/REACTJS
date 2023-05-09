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
        'primary-blue': '#0070C9',
        'orange-yellow': '#FFA500',
        'white': '#FFFFFF',
        'black': '#000000',
        'orange': '#FF7849',
        'green': '#13CE66',
        'yellow': '#FFC82C',
        'gray-dark': '#273444',
        'gray': '#8492A6',
        'gray-light': '#D3DCE6',
        'purple': '#7E5BEF',
      },

      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
      },
    },
  },

  plugins: [],
};
