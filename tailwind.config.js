const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: '#1e90ff', // Couleur principale
          light: '#63b3ed', // Version plus claire
          dark: '#1c7ed6',  // Version plus foncée
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1e90ff 20%, #1c7ed6 80%)',
        'hero-gradient-dark': 'linear-gradient(135deg, #1c7ed6, #141e30)',
      },
    },
  },
  plugins: [],
};
