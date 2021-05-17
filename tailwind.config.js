module.exports = {
  purge: {
    enabled: true,
    content: ['./components/**/*.js', './pages/**/*.js'],
    whitelistPatterns: [/markdown-body$/],
  },
  theme: {
    container: {
      padding: {
        DEFAULT: '2rem',
        sm: '4rem',
        md: '4rem',
        lg: '4rem',
        xl: '6rem',
      },
    },
    extend: {
      screens: {},
      colors: {
        primary: '#83ED6E',
        secondary: '#E85F5C',
        alternate: '#9CFFFA',
        black: '#000',
        gray: '#343633',
        lightgray: '#ECECEC',
        'gray-100': 'rgba(52, 54, 51, 0.3)',
        violet: '#8E44AD',
      },
      spacing: {
        default: '3.5rem',
        paragraph: '1.5rem',
        item: '0.625rem',
        avatar: '75px',
        200: '200px',
        250: '250px',
        100: '100px',
        300: '300px',
      },
      letterSpacing: {},
      lineHeight: {},
      fontSize: {},
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      minHeight: {
        200: '200px',
        100: '100px',
      },
    },
    plugins: [],
  },
}
