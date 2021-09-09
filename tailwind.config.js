module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: '#D26061',
        blue: '#5FACD3',
        main: '#4F4F4F',
        secondary: '#F3F4F6',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
