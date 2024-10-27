/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        backgroundWhite: '#f4fbf7',
        primaryGreen: '#3acd83',
        darkerPrimaryGreen: '#2ea469',
        secondaryGreen: '#89eebc',
        lightGreen: '#4ef5a1',
        veryLightGreen: '#dcfdec',
        accent: '#f8a94f',
        textBlack: '#0b130f',
      },
    },
  },
  plugins: [],
};
