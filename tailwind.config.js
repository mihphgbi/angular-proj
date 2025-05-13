module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        background: '#F9F9F9',
        black: '#0C0C0C',
        white: '#FFFFFF',
        primary: {
          300: '#2F83B2',
          400: '#2F83B2',
          500: '#07689F',
          600: '#043E5F',
        },
        gray: {
          100: '#F9F9F9',
          200: '#EFEFEF',
          300: '#D9D9D9',
          400: '#A6A6A6',
          500: '#565656',
        },
        error: {
          light: '#EA0205',
          dark: '#A80102',
        },
        alert: '#FDFF83',
        accent: '#FF6C01',
        success: {
          light: '#E8F5E4',
          dark: '#4C9839',
        }
      }
    }
  },
  plugins: [],
};
