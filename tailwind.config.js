module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    container: {
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '10rem',
        xl: '15rem',
      },
    },
    extend: {
      colors: {},
      spacing: {},
      letterSpacing: {},
      lineHeight: {},
      fontSize: {},
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
}
