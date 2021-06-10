module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        108: '27rem',
      },
      colors: {
        cerulean: {
          DEFAULT: '#00A0E3',
          50: '#C9EFFF',
          100: '#B0E8FF',
          200: '#7DD9FF',
          300: '#4ACAFF',
          400: '#17BBFF',
          500: '#00A0E3',
          600: '#007CB0',
          700: '#00587D',
          800: '#00344A',
          900: '#001017',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
