// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003366', // Deep Blue
        secondary: '#228B22', // Forest Green
        accent1: '#FFD700', // Golden Yellow
        accent2: '#708090', // Slate Gray
        accent3: '#DC143C', // Crimson Red
        accent4: '#40E0D0', // Turquoise
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
